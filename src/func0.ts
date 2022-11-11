const {ipcRenderer} = require('electron')
const myResizeBtn = document.getElementById('resizeBtn')

function makepal() {
    var_0 = 0;
    var_1 = 0;
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        var_2 = cnt1 * 32;
        for (let cnt2 = 0; cnt2 < 120; ++cnt2) {
            var_3 = limit(cnt2 % 5 * 64 + var_2, 0, 255);
            var_4 = limit(Math.floor(cnt2 / 5) % 5 * 64 + var_2, 0, 255); // Math.floor は対象の値の小数点以下を切り捨て
            var_5 = limit(Math.floor(cnt2 / 25) % 5 * 64 + var_2, 0, 255); // Math.floor は対象の値の小数点以下を切り捨て
            if (var_3 == var_4 && var_4 == var_5 && var_5 == var_3) {
                palette(data0 = var_1, data1 = var_3, data2 = var_4, data3 = var_5, data4 = null)
                var_1++;
            }
        }
    }
    for (let cnt3 = var_1; cnt3 < 15 + var_1; ++cnt3) {
        palette(data0 = cnt3, data1 = var_0, data2 = var_0, data3 = var_0, data4 = 254);
        var_0 += 16;
    }
    return;
}
/*
function func001() {
    dbgprt(1);
    func004();
    return;
}
*/
function imeset(prm_2546: any) {

    var_6 = ImmGetContext(hwnd);
    ImmSetOpenStatus(var_6, prm_2546);

    ImmReleaseContext(hwnd, var_6);
    return;
}
function imeget() {

    var_6 = ImmGetContext(hwnd);
    var_7 = ImmGetOpenStatus(var_6);

    ImmReleaseContext(hwnd, var_6);
    return var_7;
}

// おそらくイニシャル処理 (datファイル読み込み, 画面サイズ設定, 各画像データ読み込み等)
function func004(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(4);
        HMMINIT(3);
        if (stat == 0) {
            end();
        }
        var_8 = 0;
        var_9 = 0;
        
        // 00.datファイルの存在確認
        exist("00.dat");

        if (strsize >= 1) {

            var_10 = bload(file_name = "00.dat", data_size = null, offset = 20);
            var_8 = bload(file_name = "00.dat", data_size = null, offset = 40);

            var_9 = bload(file_name = "00.dat", data_size = null, offset = 60);
            var_11 = bload(file_name = "00.dat", data_size = null, offset = 80);
        }
        if (var_11 != 1) {
            var_11 = 0;
        }
        var_12 = 0;
        var_13 = "0.13"; //ログイン時に下に表示される。見えにくいので末尾の数字は削除
        var_14 = "newDTW ver0.1307";

        
        buffer(17);
        yield picload("img3.gif");
        buffer(26, 680, 680);
        screen_(2, 1, 1, 2, -100, -100);


        title(var_14);
        oncmd_gosub(func897, 161);
    
        GetWindowLongA(hwnd, -16);
    
        SetWindowLongA(hwnd, -16, stat || (-2147483648));
    
        SetWindowPos(hwnd, 0, 0, 0, 0, 0, 38);
    
        var_15 = hwnd;
        var_16 = var_8 + 150;
        var_17 = var_9 + 150;
        if (var_16 >= ginfo(20)) {
            var_8 = 0;
        }
        if (var_17 >= ginfo(21)) {
            var_9 = 0;
        }
        if (var_8 < 0) {
            var_8 = 0;
        }
        if (var_9 < 0) {
            var_9 = 0;
        }
        screen_(0, 680, 680, 2, var_8, var_9);
        title(var_14);
        oncmd_gosub(func897, 161);
    
        SetWindowLongA(hwnd, -8, var_15);

        gsel(2, 1);

        gsel(0, 1);
        if (var_10 == 0) {
            width(340, 340);
        }
        if (var_10 == 1) {
            width(680, 680);
        }
        color(0, 0, 0);
        boxf();
        yield wait(50);
        var_18 = 0;
        for (let cnt1 = 0; cnt1 < 25; ++cnt1) {
            yield func138();
            var_18 = var_18 + 10;
        }
        var_18 = 255;
        yield func138();
        var_19 = 0;
        var_20 = 50;
        var_21 = "＊＊＊＊";
        var_22 = "＊＊＊＊";
        var_23 = 1;
        var_24 = "＊＊＊＊";
        randomize();
        yield wait(1);
        yield func242();
        var_25[1] = 255;
        var_26[1] = 255;
        var_27[1] = 255;
        var_25[2] = 255;
        var_26[2] = 150;
        var_27[2] = 255;
        var_25[3] = 255;
        var_26[3] = 0;
        var_27[3] = 0;
        var_25[4] = 130;
        var_26[4] = 255;
        var_27[4] = 130;
        var_25[5] = 100;
        var_26[5] = 160;
        var_27[5] = 190;
        var_25[6] = 255;
        var_26[6] = 255;
        var_27[6] = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        var_28 = dim(length1= 10, length2 = 10, length3 = null, length4 = null);
        var_29 = dim(length1= 300, length2 = 10, length3 = null, length4 = null);
        yield func241();
        var_30 = dirinfo(0);
        var_31 = 56;
        var_32 = 38;
        var_33 = var_31;
        var_34 = var_32 - 1;
        var_35 = 40;
        var_36 = 40;
        var_37 = 6;
        var_38 = 6;
        var_39 = "";
        var_40 = "name";
        var_41 = 3;
        var_42 = 20;
        var_43 = 10;
        var_44 = 35;
        var_45 = 65;
        var_46 = 90;
        var_47 = 130;
        var_48 = 182;
        var_49 = 172;
        var_50 = 162;
        var_51 = 195;
        var_52 = 208;
        var_53 = 306;
        var_54 = 295;
        var_55 = 284;
        var_56 = 272;
        var_57 = 260;
        var_58 = 248;
        var_59 = 320;
        var_60++;
        yield func138();
        buffer(id = 3, disp_width = null, disp_height = null, mode = null);
        yield picload("img_mychara.gif");
        var_60++;
        yield func138();
        buffer(id = 4, disp_width = 340, disp_height = 300, mode = null);
        var_60++;
        yield func138();
        buffer(id = 5, disp_width = null, disp_height = null, mode = null);
        yield picload("img_map.gif");
        var_60++;
        yield func138();
        buffer(id = 6, disp_width = null, disp_height = null, mode = null);
        yield picload("img_enemy1a.gif");
        var_60++;
        yield func138();
        buffer(id = 7, disp_width = 340, disp_height = 300, mode = null);
        var_60++;
        yield func138();
        buffer(id = 8, disp_width = null, disp_height = null, mode = null);
        yield picload("img1.gif");
        var_60++;
        yield func138();
        buffer(9);
        yield picload("img_item.gif");
        buffer(id = 10, disp_width = 340, disp_height = 200, mode = null);
        var_60++;
        yield func138();
        buffer(11);
        yield picload("img_stand0.gif");
        var_60++;
        yield func138();
        buffer(id = 12, disp_width = 340, disp_height = 340, mode = null);
        color(0, 0, 200);
        boxf(left = 0, top1 = 0, right = 340, bottom = 340);
        var_60++;
        yield func138();
        buffer(13);
        yield picload("img_enemy4a.gif");
        var_60++;
        yield func138();
        buffer(14);
        yield picload("img_wana.gif");
        var_60++;
        yield func138();
        buffer(15);
        yield picload("img_enemy1b.gif");
        var_60++;
        yield func138();
        buffer(18);
        yield picload("img4.gif");
        var_60++;
        yield func138();
        buffer(1);
        yield picload("img_stand1.gif");
        buffer(id = 19, disp_width = 340, disp_height = 340, mode = null);
        var_60++;
        yield func138();
        buffer(20);
        yield picload("img_enemy4b.gif");
        var_60++;
        yield func138();
        buffer(21);
        yield picload("img_enemy2a.gif");
        var_60++;
        yield func138();
        buffer(22);
        yield picload("img_enemy2b.gif");
        var_60++;
        yield func138();
        buffer(23);
        yield picload("img_comic.gif");
        var_60++;
        yield func138();
        buffer(id = 24, disp_width = 340, disp_height = 340, mode = 0);
        var_60++;
        yield func138();
        buffer(id = 25, disp_width = 340, disp_height = 340, mode = 1);
        makepal();
        var_60++;
        yield func138();
        buffer(27);
        yield picload("img_enemy3a.gif");
        var_60++;
        yield func138();
        buffer(28);
        yield picload("img_enemy3b.gif");
        var_60++;
        yield func138();
        buffer(29);
        yield picload("img_stand3.gif");
        var_60++;
        yield func138();
        buffer(16);
        yield picload("img_stand2.gif");
        buffer(34);
        yield picload("img_syageki.gif");
        buffer(35);
        yield picload("img_effect.gif");
        var_60++;
        yield func138();
        buffer(id = 36, disp_width = 340, disp_height = 340, mode = null);
        buffer(32, 200, 200);
        yield func183(); // デバックウィンドウ呼び出し？
        yield func081(); // 効果音を呼び出す関数
        yield func082();
        yield func083();
        DSGETMASTERVOLUME();
        var_61 = stat;
        gsel(0);
        var_18 = 255;
        for (let cnt1 = 0; cnt1 < 25; ++cnt1) {
            yield func138();
            var_18 = var_18 - 10;
        }
        color(0, 0, 0);
        boxf();
        yield wait(50);
        onexit(func231);
        gsel(0);
        yield func139();
        return;
    });
}

// ?
function func005(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(5);
        onexit(1);
        yield func229(); // セーブファイルからデータ読み出し関数
        // No = 0 なので、拠点(ホテル、亀、)
        if (dangeon_number == 0) {
            yield func159();
            return;
        }
        yield func107();
        yield func076();
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            yield func339();
        }
        var_63 = 0;
        if (var_64 == 0) {
            onexit(1);
            var_65[var_66][var_67] = 1;
            var_68 = 1;
            yield func331();
            yield func009();
            return;
        }
        yield func006();
        return;
    });
}

function func006(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(6);
        // No = 4 なので、一巡後の世界
        if (dangeon_number == 4) {
            yield func458();
            if (var_69 == 1 && var_70 == 0) {
                var_70 = 7;
            }
        }
        yield func243();
        yield func007();
    });
}
// 配列宣言？？
function func007(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(7);

        var_71 = dim(length1= 70, length2 = 70, length3 = null, length4 = null);
        var_72 = dim(length1= 70, length2 = 70, length3 = null, length4 = null);
        var_65 = dim(length1= 70, length2 = 70, length3 = null, length4 = null);
        var_73 = dim(length1= 70, length2 = 70, length3 = null, length4 = null);
        var_74 = dim(length1= 70, length2 = 70, length3 = null, length4 = null);
        var_75 = dim(20);
        var_76 = dim(length1= 100, length2 = 5, length3 = 3, length4 = null);
        var_77 = dim(length1= 70, length2 = 70, length3 = null, length4 = null);
        var_78 = ItemInfo.dim(300);
        var_79 = dim(length1= 70, length2 = 70, length3 = null, length4 = null);
        var_80 = dim(length1= 70, length2 = 70, length3 = null, length4 = null);
        var_81 = dim(length1= 300, length2 = 7, length3 = null, length4 = null);
        var_82 = dim(length1= 70, length2 = 70, length3 = null, length4 = null);
        var_83 = CharactorInfo.dim(300);
        var_84 = dim(length1= 70, length2 = 70, length3 = null, length4 = null);
        var_85 = 0;
        if (var_86 != 0) {
            yield func246();
        }
        if (var_86 == 0) {
            yield func244();
        }
        if (var_86 != 0) {
            yield func253();
            return;
        }
        yield func008();
    });
}

function func008(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(8);
        if (var_86 != 0) {
            yield func249();
        }

        var_87 = dim(length1= 70, length2 = 70, length3 = null, length4 = null);
        var_88 = 1;
        for (let cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_89 = 1;
            for (let cnt2 = 0; cnt2 < var_31; ++cnt2) {
                var_87[var_89][var_88] = rnd(10);
                var_89++;
            }
            var_88++;
        }
        var_90 = rnd(40);
        if (var_90 == 6) {
            var_90 = 1;
        }
        if (current_floor <= 2) {
            var_90 = 0;
        }
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1) {
            if (current_floor <= 2) {
                var_92 = 15;
            }
            if (current_floor >= 3 && current_floor <= 5) {
                var_92 = 19;
            }
            if (current_floor >= 6 && current_floor <= 8) {
                var_92 = 11;
            }
            if (current_floor >= 9 && current_floor <= 11) {
                var_92 = 4;
            }
            if (current_floor == 12) {
                var_92 = 7;
                var_90 = 0;
            }
        }
        // No = 2 なので、レクイエムの第迷宮
        if (dangeon_number == 2) {
            if (current_floor >= 1 && current_floor <= 5) {
                var_92 = 3;
            }
            if (current_floor >= 5 && current_floor <= 8) {
                var_92 = 6;
            }
            if (current_floor >= 9 && current_floor <= 11) {
                var_92 = 2;
            }
            if (current_floor >= 12 && current_floor <= 14) {
                var_92 = 5;
            }
            if (current_floor >= 15 && current_floor <= 19) {
                var_92 = 4;
            }
            if (current_floor >= 20 && current_floor <= 22) {
                var_92 = 24;
            }
            if (current_floor >= 23 && current_floor <= 25) {
                var_92 = 20;
            }
            if (current_floor >= 26) {
                var_92 = 12;
            }
        }
        // No = 3 なので、ディアボロの試練、No = 4 なので、一巡後の世界
        if (dangeon_number == 3 || dangeon_number == 4) {
            var_93 = rnd(16);
            if (var_93 == 0) {
                var_92 = 2;
            }
            if (var_93 == 1) {
                var_92 = 3;
            }
            if (var_93 == 2) {
                var_92 = 6;
            }
            if (var_93 == 3) {
                var_92 = 5;
            }
            if (var_93 == 4) {
                var_92 = 4;
            }
            if (var_93 == 5) {
                var_92 = 8;
                var_90 = 0;
            }
            if (var_93 == 6) {
                var_92 = 18;
            }
            if (var_93 == 7) {
                var_92 = 13;
            }
            if (var_93 == 8) {
                var_92 = 14;
            }
            if (var_93 == 9) {
                var_92 = 12;
            }
            if (var_93 == 10) {
                var_92 = 21;
            }
            if (var_93 == 11) {
                var_92 = 20;
            }
            if (var_93 == 12) {
                var_92 = 11;
            }
            if (var_93 == 13) {
                var_92 = 13;
            }
            if (var_93 == 14) {
                var_92 = 24;
            }
            if (var_93 == 15) {
                var_92 = 9;
            }
            if (dangeon_number == 3 && current_floor >= 90) {
                var_92 = 22;
            }
            if (dangeon_number == 3 && current_floor == 99) {
                var_92 = 2;
            }
        }
        if (dangeon_number == 5) {
            var_93 = rnd(14);
            if (var_93 == 0) {
                var_92 = 2;
            }
            if (var_93 == 1) {
                var_92 = 3;
            }
            if (var_93 == 2) {
                var_92 = 6;
            }
            if (var_93 == 3) {
                var_92 = 5;
            }
            if (var_93 == 4) {
                var_92 = 4;
            }
            if (var_93 == 5) {
                var_92 = 8;
                var_90 = 0;
            }
            if (var_93 == 6) {
                var_92 = 18;
            }
            if (var_93 == 7) {
                var_92 = 13;
            }
            if (var_93 == 8) {
                var_92 = 14;
            }
            if (var_93 == 9) {
                var_92 = 12;
            }
            if (var_93 == 10) {
                var_92 = 21;
            }
            if (var_93 == 11) {
                var_92 = 20;
            }
            if (var_93 == 12) {
                var_92 = 24;
            }
            if (var_93 == 13) {
                var_92 = 9;
            }
            var_92 = 22;
        }
        if (var_94 == 1) {
            var_92 = 8;
            var_90 = 0;
        }
        if (var_94 == 2) {
            var_92 = 25;
            var_90 = 0;
        }
        if (var_94 == 3) {
            var_92 = 14;
            var_90 = 0;
        }
        if (var_94 == 5) {
            var_92 = 1;
            var_90 = 0;
        }
        if (var_94 == 6) {
            var_92 = 3;
            var_90 = 0;
        }
        if (var_94 == 7) {
            var_92 = 16;
            var_90 = 0;
        }
        if (var_94 == 8) {
            var_92 = 1;
            var_90 = 0;
        }
        if (var_94 == 9) {
            var_92 = 7;
            var_90 = 0;
        }
        if (var_86 == 0) {
            var_90 = 0;
        }
        if (var_90 == 1 && var_95 != 0) {
            var_90 = 0;
            yield func254();
        }
        // No = 1 なので、ホテルの外       
        if (dangeon_number == 1 && current_floor <= 2) {
            var_90 = 99;
            yield func255();
            var_90 = 0;
        }
        if (dangeon_number == 2 && current_floor == 28 && var_86 != 0) {
            var_90 = 99;
            yield func255();
            var_90 = 0;
        }
        if (dangeon_number == 2 && current_floor == 29 && var_86 != 0) {
            var_90 = 99;
            yield func255();
            var_90 = 0;
        }
        if (var_90 >= 2 && var_90 <= 6) {
            yield func255();
            var_90 = 0;
        }
        yield func720();
        yield func045();
        yield func383();
        yield func393();
        yield func391();
        yield func535();
        yield func537();
        if (var_96 >= 1) {
            yield func392();
        }
        yield func046();
        var_97 = 0;
        yield func562();
        yield func560();
        yield func563();
        if (dangeon_number == 5) {
            yield func564();
        }
        yield func555();
        if (var_96 >= 1) {
            yield func561();
        }
        var_98 = 0;
        var_99 = 0;
        var_100 = 0;
        var_101 = 0;
        var_102 = 0;
        var_103 = 0;
        var_104 = 0;
        var_105 = 0;
        var_106 = 0;
        var_107 = 0;
        var_108 = 0;
        var_109 = 0;
        var_110 = 0;
        var_111 = 0;
        var_112 = 0;
        var_113 = 0;
        var_114 = 0;
        var_115 = 0;
        var_116 = 0;
        var_117 = 0;
        var_118 = 0;
        var_119 = 0;
        var_120 = 0;
        var_121 = 0;
        var_122 = 0;
        var_123 = 0;
        var_124 = 0;
        var_125 = 0;
        var_126 = 0;
        var_127 = 0;
        var_128 = 0;
        var_129 = 0;
        var_130 = 0;
        var_131 = 0;
        var_132 = 0;
        var_133 = 0;
        var_134 = 0;
        var_135 = 0;
        var_136 = 0;
        var_137 = 0;
        var_138 = 0;
        var_139 = 0;
        var_140 = 0;
        var_141 = 0;
        var_142 = 0;
        var_143 = 0;
        var_144 = 0;
        var_145 = 0;
        var_146 = 0;
        var_147 = 0;
        var_148 = 0;
        var_149 = 0;
        var_150 = 0;
        var_151 = 0;
        var_152 = 0;
        var_153 = 0;
        var_154 = 0;
        var_155 = 0;
        if (var_156[396] == 0) {
            var_157 = 0;
            var_158 = 0;
        }
        var_159 = 0;
        var_160 = 0;
        var_161 = 0;
        var_162 = 0;
        var_163 = 0;
        var_164 = 0;
        var_165 = 0;
        var_166 = 0;
        var_167 = 0;
        var_168 = 0;
        var_169 = 0;
        var_170 = 0;
        var_171 = 0;
        var_172 = 0;
        var_173 = 0;
        var_174 = 0;
        var_175 = 0;
        var_176 = 0;
        var_177 = 0;
        var_178 = 0;
        var_179 = 0;
        var_180 = 0;
        var_181 = 0;
        var_182 = 0;
        var_183 = 0;
        var_184 = 0;
        var_185 = 0;
        var_186 = 0;
        var_187 = 0;
        var_188 = 0;
        var_189 = 0;
        var_190 = 0;
        var_191 = 0;
        var_192 = 0;
        var_193 = 0;
        var_194 = 0;
        var_195 = 0;
        var_196 = 0;
        var_197 = 0;
        var_198 = 0;
        var_65[var_66][var_67] = 1;
        var_199 = 2;
        if (var_92 == 15 || var_92 == 19 || var_92 == 11 || var_92 == 23 || var_92 == 25) {
            var_103 = 1;
        }
        if (var_94 == 5 || var_94 == 7 || var_94 == 9) {
            var_103 = 1;
        }
        if (var_200 == var_201 && var_201 != 14) {
            var_98 = 1;
        }
        if (var_202 == var_201 && var_201 != 14) {
            var_99 = 1;
        }
        var_68 = 1;
        yield func331();
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor == 12 && var_203 == 0) {
            yield func118();
        }
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor == 12 && var_203 == 1) {
            yield func119();
        }
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor == 12 && var_203 == 2) {
            yield func120();
        }
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor == 12 && var_203 == 3) {
            yield func121();
        }
        if (dangeon_number == 2 && current_floor == 30) {
            yield func117();
        }
        if (dangeon_number == 3 && current_floor == 99) {
            yield func116();
        }
        if (var_96 >= 1 && var_201 == var_204) {
            yield func074();
        }
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor == 12 && var_203 == 0) {
            yield func075();
        }
        if (dangeon_number == 2 && current_floor == 30) {
            yield func075();
        }
        if (dangeon_number == 3 && current_floor == 99) {
            yield func075();
        }
        if (var_94 >= 1) {
            yield func075();
        }
        var_205 = 1;
        yield func231();
        var_206 = 0;
        if (var_207 == 2) {
            var_207 = 0;
            yield func152();
        }
        yield func009();
        return;
    });
}
function func009(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(9);
        var_208 = 0;
        var_209 = 0;
        var_210 = 0;
        if (var_211 <= 0) {
            var_212 = 1;
        }
        if (var_212 == 1) {
            var_213 = 0;
            var_214 = 0;
            yield func672();
            return;
        }
        if (var_71[var_66][var_67] == 13 && var_215 != 202 && var_215 != 117 && var_125 == 0) {
            var_216 = 1;
            var_213 = 0;
            var_214 = 0;
            DSPLAY(audio_id = 216);
            yield func499();
        }
        if (var_71[var_66][var_67] == 0 && var_159 == 0) {
            var_216 = 1;
            var_213 = 0;
            var_214 = 0;
            DSPLAY(audio_id = 216);
            yield func499();
        }
        if (var_151 >= 1) {
            var_217 = 1;
            var_213 = 0;
            var_214 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            yield func019();
            return;
        }
        if (var_116 == 2) {
            var_116 = 0;
            var_213 = 0;
            var_214 = 0;
            yield func027();
        }
        yield func337();
        if (var_218 >= 1 && var_218 < 30) {
            var_217 = 1;
            var_213 = 0;
            var_214 = 0;
            yield func019();
            return;
        }
        if (var_218 >= 30) {
            yield func032();
            if (var_211 <= 0) {
                yield func009();
                return;
            }
            if (var_218 != 0) {
                var_217 = 1;
                var_213 = 0;
                var_214 = 0;
                yield func019();
                return;
            }
        }
        if (var_128 >= 1) {
            var_213 = 0;
            var_214 = 0;
            yield func022();
            return;
        }
        if (var_219 >= 1) {
            var_213 = 0;
            var_214 = 0;
            yield func025();
            return;
        }
        if (var_178 >= 1) {
            var_213 = 0;
            var_214 = 0;
            yield func021();
            return;
        }
        if (var_213 == 1 && var_214 == 0) {
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            var_213 = 0;
            var_198 = 0;
            var_195 = 0;
            var_196 = 0;
            var_197 = 1;
            var_220 = 0;
            var_221 = 1;
            var_222 = 1;
            var_223 = var_224 + 10;
            var_225 = var_226;
            if (var_225 <= 10) {
                var_227 = 1;
                var_228 = (var_225 - 1) * 22 + 45;
                var_229 = 44;
                var_230 = 45;
            }

            if (var_225 > 10) {
                var_227 = 2;
                var_228 = (var_225 - 11) * 22 + 45;
                var_229 = 44;
                var_230 = 45;
            }
            if (var_225 == 0) {
                var_227 = 3;
                var_228 = 45;
                var_229 = 44;
                var_230 = 45;
                var_231 = 1;
                var_222 = 10;
            }
            item_list = var_233[var_225].Var0;
            DSPLAY(audio_id = 212); 
            yield func462();
            return;
        }
        var_213 = 0;
        var_214 = 0;
        var_234 = 0;
        if (var_12 == 1) {
            conf_keyon = getkey(122);
            if (conf_keyon == 1) {
                yield func184();
                return;
            }
        }
        var_236 = var_66;
        var_237 = var_67;
        if (var_139 >= 1) {
            yield func079();
            return;
        }
        if (var_144 >= 1) {
            yield func079();
            return;
        }
        yield func080(false);
        if (var_238 == 1) {
            yield func013();
            return;
        }
        if (var_239 == 1 && var_71[var_66][var_67] != 0) {
            yield func014();
            return;
        }
        if (var_239 == 0) {
            var_240 = 0;
            var_241 = 0;
        }
        if (var_242 == 1) {
            var_243 = 1;
            yield func635();
            return;
        }
        if (var_244 == 1) {
            var_197 = 0;
            var_195 = 1;
            var_196 = 1;
            var_245 = 19;
            var_246 = 45;
            var_247 = 1;
            var_248 = 1;
            DSPLAY(audio_id = 212);
            yield func051();
            yield func053();
            return;
        }
        if (var_249 == 1) {
            var_225 = var_250;
            var_251 = 1;
            yield func647();
            return;
        }
        if (var_252 == 1) {
            yield func051();
            yield func010();
            return;
        }
        if (var_253 == 1) {
            var_66 = var_66 - 1;
            var_67 = var_67 - 1;
            var_199 = 7;
            yield func015();
            return;
        }
        if (var_254 == 1 && var_255 == 1) {
            var_66 = var_66 - 1;
            var_67 = var_67 - 1;
            var_199 = 7;
            yield func015();
            return;
        }
        if (var_256 == 1) {
            var_66 = var_66 + 1;
            var_67 = var_67 - 1;
            var_199 = 9;
            yield func015();
            return;
        }
        if (var_257 == 1 && var_255 == 1) {
            var_66 = var_66 + 1;
            var_67 = var_67 - 1;
            var_199 = 9;
            yield func015();
            return;
        }
        if (var_258 == 1) {
            var_66 = var_66 - 1;
            var_67 = var_67 + 1;
            var_199 = 1;
            yield func015();
            return;
        }
        if (var_254 == 1 && var_259 == 1) {
            var_66 = var_66 - 1;
            var_67 = var_67 + 1;
            var_199 = 1;
            yield func015();
            return;
        }
        if (var_260 == 1) {
            var_66 = var_66 + 1;
            var_67 = var_67 + 1;
            var_199 = 3;
            yield func015();
            return;
        }
        if (var_257 == 1 && var_259 == 1) {
            var_66 = var_66 + 1;
            var_67 = var_67 + 1;
            var_199 = 3;
            yield func015();
            return;
        }
        if (var_254 == 1) {
            var_66 = var_66 - 1;
            var_199 = 4;
            yield func015();
            return;
        }
        if (var_257 == 1) {
            var_66 = var_66 + 1;
            var_199 = 6;
            yield func015();
            return;
        }
        if (var_255 == 1) {
            var_67 = var_67 - 1;
            var_199 = 8;
            yield func015();
            return;
        }
        if (var_259 == 1) {
            var_67 = var_67 + 1;
            var_199 = 2;
            yield func015();
            return;
        }
        if (var_261 == 1 && var_262 == 0) {
            yield func044();
            return;
        }
        yield func009();
        return;
    });
}
function func010(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(10);
        var_263 = dim(10);
        var_264 = var_66 - 1;
        if (var_264 < 0) {
            var_264 = 0;
        }
        var_265 = var_66 + 1;
        if (var_265 > var_33) {
            var_265 = var_33;
        }
        var_266 = var_67 - 1;
        if (var_266 < 0) {
            var_266 = 0;
        }
        var_267 = var_67 + 1;
        if (var_267 > var_34) {
            var_267 = var_34;
        }
        yield func011();
    });
}
function func011(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(11);
        var_268 = 0;
        if (var_156[316] == 0) {
            if (var_127 == 0 && var_132 == 0) {
                if (var_263[0] == 0 && var_263[1] == 0 && var_82[var_264][var_267] > 0) {
                    var_269 = var_82[var_264][var_267];
                    if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                        if (var_83[var_269].Var31 != 5 && var_83[var_269].Var0 != 50) {
                            var_199 = 1;
                            var_263[1] = 1;
                            var_263[0] = 1;
                            var_268 = var_269;
                        }
                    }
                }
                if (var_263[0] == 0 && var_263[2] == 0 && var_82[var_66][var_267] > 0) {
                    var_269 = var_82[var_66][var_267];
                    if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                        if (var_83[var_269].Var31 != 5 && var_83[var_269].Var0 != 50) {
                            var_199 = 2;
                            var_263[2] = 1;
                            var_263[0] = 1;
                            var_268 = var_269;
                        }
                    }
                }
                if (var_263[0] == 0 && var_263[3] == 0 && var_82[var_265][var_267] > 0) {
                    var_269 = var_82[var_265][var_267];
                    if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                        if (var_83[var_269].Var31 != 5 && var_83[var_269].Var0 != 50) {
                            var_199 = 3;
                            var_263[3] = 1;
                            var_263[0] = 1;
                            var_268 = var_269;
                        }
                    }
                }
                if (var_263[0] == 0 && var_263[4] == 0 && var_82[var_264][var_67] > 0) {
                    var_269 = var_82[var_264][var_67];
                    if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                        if (var_83[var_269].Var31 != 5 && var_83[var_269].Var0 != 50) {
                            var_199 = 4;
                            var_263[4] = 1;
                            var_263[0] = 1;
                            var_268 = var_269;
                        }
                    }
                }
                if (var_263[0] == 0 && var_263[6] == 0 && var_82[var_265][var_67] > 0) {
                    var_269 = var_82[var_265][var_67];
                    if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                        if (var_83[var_269].Var31 != 5 && var_83[var_269].Var0 != 50) {
                            var_199 = 6;
                            var_263[6] = 1;
                            var_263[0] = 1;
                            var_268 = var_269;
                        }
                    }
                }
                if (var_263[0] == 0 && var_263[7] == 0 && var_82[var_264][var_266] > 0) {
                    var_269 = var_82[var_264][var_266];
                    if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                        if (var_83[var_269].Var31 != 5 && var_83[var_269].Var0 != 50) {
                            var_199 = 7;
                            var_263[7] = 1;
                            var_263[0] = 1;
                            var_268 = var_269;
                        }
                    }
                }
                if (var_263[0] == 0 && var_263[8] == 0 && var_82[var_66][var_266] > 0) {
                    var_269 = var_82[var_66][var_266];
                    if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                        if (var_83[var_269].Var31 != 5 && var_83[var_269].Var0 != 50) {
                            var_199 = 8;
                            var_263[8] = 1;
                            var_263[0] = 1;
                            var_268 = var_269;
                        }
                    }
                }
                if (var_263[0] == 0 && var_263[9] == 0 && var_82[var_265][var_266] > 0) {
                    var_269 = var_82[var_265][var_266];
                    if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                        if (var_83[var_269].Var31 != 5 && var_83[var_269].Var0 != 50) {
                            var_199 = 9;
                            var_263[9] = 1;
                            var_263[0] = 1;
                            var_268 = var_269;
                        }
                    }
                }
                if (var_263[0] == 0) {
                    if (var_263[1] == 1 || var_263[2] == 1 || var_263[3] == 1 || var_263[4] == 1 || var_263[6] == 1 || var_263[7] == 1 || var_263[8] == 1 || var_263[9] == 1) {
                        var_268 = 0;
                        var_263 = dim(10);
                        yield func011();
                        return;
                    }
                }
            }
        }
        if (var_156[316] == 1) {
            if (var_127 == 0 && var_132 == 0) {
                if (var_263[0] == 0 && var_263[1] == 0 && var_82[var_264][var_267] > 0) {
                    var_269 = var_82[var_264][var_267];
                    if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                        if (var_83[var_269].Var0 != 50) {
                            var_199 = 1;
                            var_263[1] = 1;
                            var_263[0] = 1;
                            var_268 = var_269;
                        }
                    }
                }
                if (var_263[0] == 0 && var_263[2] == 0 && var_82[var_66][var_267] > 0) {
                    var_269 = var_82[var_66][var_267];
                    if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                        if (var_83[var_269].Var0 != 50) {
                            var_199 = 2;
                            var_263[2] = 1;
                            var_263[0] = 1;
                            var_268 = var_269;
                        }
                    }
                }
                if (var_263[0] == 0 && var_263[3] == 0 && var_82[var_265][var_267] > 0) {
                    var_269 = var_82[var_265][var_267];
                    if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                        if (var_83[var_269].Var0 != 50) {
                            var_199 = 3;
                            var_263[3] = 1;
                            var_263[0] = 1;
                            var_268 = var_269;
                        }
                    }
                }
                if (var_263[0] == 0 && var_263[4] == 0 && var_82[var_264][var_67] > 0) {
                    var_269 = var_82[var_264][var_67];
                    if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                        if (var_83[var_269].Var0 != 50) {
                            var_199 = 4;
                            var_263[4] = 1;
                            var_263[0] = 1;
                            var_268 = var_269;
                        }
                    }
                }
                if (var_263[0] == 0 && var_263[6] == 0 && var_82[var_265][var_67] > 0) {
                    var_269 = var_82[var_265][var_67];
                    if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                        if (var_83[var_269].Var0 != 50) {
                            var_199 = 6;
                            var_263[6] = 1;
                            var_263[0] = 1;
                            var_268 = var_269;
                        }
                    }
                }
                if (var_263[0] == 0 && var_263[7] == 0 && var_82[var_264][var_266] > 0) {
                    var_269 = var_82[var_264][var_266];
                    if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                        if (var_83[var_269].Var0 != 50) {
                            var_199 = 7;
                            var_263[7] = 1;
                            var_263[0] = 1;
                            var_268 = var_269;
                        }
                    }
                }
                if (var_263[0] == 0 && var_263[8] == 0 && var_82[var_66][var_266] > 0) {
                    var_269 = var_82[var_66][var_266];
                    if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                        if (var_83[var_269].Var0 != 50) {
                            var_199 = 8;
                            var_263[8] = 1;
                            var_263[0] = 1;
                            var_268 = var_269;
                        }
                    }
                }
                if (var_263[0] == 0 && var_263[9] == 0 && var_82[var_265][var_266] > 0) {
                    var_269 = var_82[var_265][var_266];
                    if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                        if (var_83[var_269].Var0 != 50) {
                            var_199 = 9;
                            var_263[9] = 1;
                            var_263[0] = 1;
                            var_268 = var_269;
                        }
                    }
                }
                if (var_263[0] == 0) {
                    if (var_263[1] == 1 || var_263[2] == 1 || var_263[3] == 1 || var_263[4] == 1 || var_263[6] == 1 || var_263[7] == 1 || var_263[8] == 1 || var_263[9] == 1) {
                        var_268 = 0;
                        var_263 = dim(10);
                        yield func011();
                        return;
                    }
                }
            }
        }
        yield func012();
    });
}
function func012(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(12);
        var_271 = 1;
        var_272 = 1;
        var_273 = 0;
        yield func337();
        yield func080();
        if (var_254 == 1) {
            var_199 = 4;
            var_273 = 1;
        }
        if (var_257 == 1) {
            var_199 = 6;
            var_273 = 1;
        }
        if (var_255 == 1) {
            var_199 = 8;
            var_273 = 1;
        }
        if (var_259 == 1) {
            var_199 = 2;
            var_273 = 1;
        }
        if (var_253 == 1) {
            var_199 = 7;
            var_273 = 1;
        }
        if (var_254 == 1 && var_255 == 1) {
            var_199 = 7;
            var_273 = 1;
        }
        if (var_256 == 1) {
            var_199 = 9;
            var_273 = 1;
        }
        if (var_257 == 1 && var_255 == 1) {
            var_199 = 9;
            var_273 = 1;
        }
        if (var_258 == 1) {
            var_199 = 1;
            var_273 = 1;
        }
        if (var_254 == 1 && var_259 == 1) {
            var_199 = 1;
            var_273 = 1;
        }
        if (var_260 == 1) {
            var_199 = 3;
            var_273 = 1;
        }
        if (var_257 == 1 && var_259 == 1) {
            var_199 = 3;
            var_273 = 1;
        }
        if (var_273 == 1) {
            var_268 = 0;
            if (var_199 == 1 && var_82[var_264][var_267] > 0) {
                var_269 = var_82[var_264][var_267];
                if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                    if (var_83[var_269].Var29 == 0 && var_83[var_269].Var0 != 50) {
                        var_268 = var_269;
                    }
                }
            }
            if (var_199 == 2 && var_82[var_66][var_267] > 0) {
                var_269 = var_82[var_66][var_267];
                if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                    if (var_83[var_269].Var29 == 0 && var_83[var_269].Var0 != 50) {
                        var_268 = var_269;
                    }
                }
            }
            if (var_199 == 3 && var_82[var_265][var_267] > 0) {
                var_269 = var_82[var_265][var_267];
                if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                    if (var_83[var_269].Var29 == 0 && var_83[var_269].Var0 != 50) {
                        var_268 = var_269;
                    }
                }
            }
            if (var_199 == 4 && var_82[var_264][var_67] > 0) {
                var_269 = var_82[var_264][var_67];
                if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                    if (var_83[var_269].Var29 == 0 && var_83[var_269].Var0 != 50) {
                        var_268 = var_269;
                    }
                }
            }
            if (var_199 == 6 && var_82[var_265][var_67] > 0) {
                var_269 = var_82[var_265][var_67];
                if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                    if (var_83[var_269].Var29 == 0 && var_83[var_269].Var0 != 50) {
                        var_268 = var_269;
                    }
                }
            }
            if (var_199 == 7 && var_82[var_264][var_266] > 0) {
                var_269 = var_82[var_264][var_266];
                if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                    if (var_83[var_269].Var29 == 0 && var_83[var_269].Var0 != 50) {
                        var_268 = var_269;
                    }
                }
            }
            if (var_199 == 8 && var_82[var_66][var_266] > 0) {
                var_269 = var_82[var_66][var_266];
                if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                    if (var_83[var_269].Var29 == 0 && var_83[var_269].Var0 != 50) {
                        var_268 = var_269;
                    }
                }
            }
            if (var_199 == 9 && var_82[var_265][var_266] > 0) {
                var_269 = var_82[var_265][var_266];
                if (var_83[var_269].Var30 == 0 || var_119 == 1 || var_270 == 166) {
                    if (var_83[var_269].Var29 == 0 && var_83[var_269].Var0 != 50) {
                        var_268 = var_269;
                    }
                }
            }
            yield func337();
        }
        if (var_252 == 1) {
            yield func051();
            var_263[0] = 0;
            var_268 = 0;
            yield func011();
            return;
        }
        if (var_239 == 1) {
            yield func051();
            var_271 = 0;
            var_272 = 0;
            yield func009();
            return;
        }
        if (var_242 == 1) {
            var_271 = 0;
            var_272 = 0;
            var_243 = 1;
            yield func635();
            return;
        }
        if (var_249 == 1) {
            var_271 = 0;
            var_272 = 0;
            var_225 = var_250;
            var_251 = 1;
            yield func647();
            return;
        }
        if (var_244 == 1) {
            var_271 = 0;
            var_272 = 0;
            var_197 = 0;
            var_195 = 1;
            var_196 = 1;
            var_245 = 19;
            var_246 = 45;
            var_247 = 1;
            var_248 = 1;
            DSPLAY(audio_id = 212);
            yield func051();
            yield func053();
            return;
        }
        yield func012();
        return;
    });
}
function func013(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(13);
        yield func080(false);
        if (var_253 == 1) {
            var_66 = var_66 - 1;
            var_67 = var_67 - 1;
            var_199 = 7;
            yield func015();
            return;
        }
        if (var_254 == 1 && var_255 == 1) {
            var_66 = var_66 - 1;
            var_67 = var_67 - 1;
            var_199 = 7;
            yield func015();
            return;
        }
        if (var_256 == 1) {
            var_66 = var_66 + 1;
            var_67 = var_67 - 1;
            var_199 = 9;
            yield func015();
            return;
        }
        if (var_257 == 1 && var_255 == 1) {
            var_66 = var_66 + 1;
            var_67 = var_67 - 1;
            var_199 = 9;
            yield func015();
            return;
        }
        if (var_258 == 1) {
            var_66 = var_66 - 1;
            var_67 = var_67 + 1;
            var_199 = 1;
            yield func015();
            return;
        }
        if (var_254 == 1 && var_259 == 1) {
            var_66 = var_66 - 1;
            var_67 = var_67 + 1;
            var_199 = 1;
            yield func015();
            return;
        }
        if (var_260 == 1) {
            var_66 = var_66 + 1;
            var_67 = var_67 + 1;
            var_199 = 3;
            yield func015();
            return;
        }
        if (var_257 == 1 && var_259 == 1) {
            var_66 = var_66 + 1;
            var_67 = var_67 + 1;
            var_199 = 3;
            yield func015();
            return;
        }
        conf_keyon = getkey(81);
        if (conf_keyon == 1) {
            yield func236();
            return;
        }
        yield func009();
        return;
    });
}
function func014(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(14);
        yield func080(false);
        var_274 = var_66 - 1;
        if (var_274 < 0) {
            var_274 = 0;
        }
        var_275 = var_66 + 1;
        if (var_275 > var_33) {
            var_275 = var_33;
        }
        var_276 = var_67 - 1;
        if (var_276 < 0) {
            var_276 = 0;
        }
        var_277 = var_67 + 1;
        if (var_277 > var_34) {
            var_277 = var_34;
        }
        var_278 = 0;
        if (var_240 == 1 && var_242 == 0 && var_239 == 1) {
            if (var_201 == 14 && var_279 == 14) {
                if (var_71[var_274][var_67] <= 12 && var_71[var_274][var_67] != 0) {
                    var_278 = 1;
                }
                if (var_71[var_275][var_67] <= 12 && var_71[var_275][var_67] != 0) {
                    var_278 = 1;
                }
                if (var_71[var_66][var_277] <= 12 && var_71[var_66][var_277] != 0) {
                    var_278 = 1;
                }
                if (var_71[var_66][var_276] <= 12 && var_71[var_66][var_276] != 0) {
                    var_278 = 1;
                }
            }
            if (var_201 == 14 && var_71[var_274][var_67] == 14 && var_71[var_275][var_67] == 14 && var_71[var_66][var_277] == 14 && var_71[var_66][var_276] == 14) {
                if (var_71[var_274][var_277] != 14 && var_71[var_275][var_277] != 14 && var_71[var_274][var_276] != 14 && var_71[var_275][var_276] != 14) {
                    var_278 = 1;
                }
            }
            if (var_201 != 0 && var_201 <= 12) {
                if (var_73[var_274][var_67] != 0 && var_199 != 6) {
                    var_278 = 1;
                }
                if (var_73[var_275][var_67] != 0 && var_199 != 4) {
                    var_278 = 1;
                }
                if (var_73[var_66][var_277] != 0 && var_199 != 8) {
                    var_278 = 1;
                }
                if (var_73[var_66][var_276] != 0 && var_199 != 2) {
                    var_278 = 1;
                }
                if (var_80[var_274][var_67] != 0) {
                    var_280 = var_80[var_274][var_67];
                    if (var_81[var_280][4] == 1 || var_121 == 1 || var_156[303] == 1 || var_156[315] == 1) {
                        var_278 = 1;
                    }
                }
                if (var_80[var_275][var_67] != 0) {
                    var_280 = var_80[var_275][var_67];
                    if (var_81[var_280][4] == 1 || var_121 == 1 || var_156[303] == 1 || var_156[315] == 1) {
                        var_278 = 1;
                    }
                }
                if (var_80[var_66][var_277] != 0) {
                    var_280 = var_80[var_66][var_277];
                    if (var_81[var_280][4] == 1 || var_121 == 1 || var_156[303] == 1 || var_156[315] == 1) {
                        var_278 = 1;
                    }
                }
                if (var_80[var_66][var_276] != 0) {
                    var_280 = var_80[var_66][var_276];
                    if (var_81[var_280][4] == 1 || var_121 == 1 || var_156[303] == 1 || var_156[315] == 1) {
                        var_278 = 1;
                    }
                }
                if (var_80[var_274][var_277] != 0) {
                    var_280 = var_80[var_274][var_277];
                    if (var_81[var_280][4] == 1 || var_121 == 1 || var_156[303] == 1 || var_156[315] == 1) {
                        var_278 = 1;
                    }
                }
                if (var_80[var_275][var_277] != 0) {
                    var_280 = var_80[var_275][var_277];
                    if (var_81[var_280][4] == 1 || var_121 == 1 || var_156[303] == 1 || var_156[315] == 1) {
                        var_278 = 1;
                    }
                }
                if (var_80[var_274][var_276] != 0) {
                    var_280 = var_80[var_274][var_276];
                    if (var_81[var_280][4] == 1 || var_121 == 1 || var_156[303] == 1 || var_156[315] == 1) {
                        var_278 = 1;
                    }
                }
                if (var_80[var_275][var_276] != 0) {
                    var_280 = var_80[var_275][var_276];
                    if (var_81[var_280][4] == 1 || var_121 == 1 || var_156[303] == 1 || var_156[315] == 1) {
                        var_278 = 1;
                    }
                }
            }
            if (var_77[var_274][var_67] != 0 && var_199 != 6) {
                var_278 = 1;
            }
            if (var_77[var_275][var_67] != 0 && var_199 != 4) {
                var_278 = 1;
            }
            if (var_77[var_66][var_277] != 0 && var_199 != 8) {
                var_278 = 1;
            }
            if (var_77[var_66][var_276] != 0 && var_199 != 2) {
                var_278 = 1;
            }
            if (var_278 == 1) {
                var_240 = 0;
                yield func179();
                yield func009();
                return;
            }
        }
        if (var_253 == 1) {
            var_66 = var_66 - 1;
            var_67 = var_67 - 1;
            var_199 = 7;
            var_240 = 1;
            yield func015();
            return;
        }
        if (var_254 == 1 && var_255 == 1) {
            var_66 = var_66 - 1;
            var_67 = var_67 - 1;
            var_199 = 7;
            var_240 = 1;
            yield func015();
            return;
        }
        if (var_256 == 1) {
            var_66 = var_66 + 1;
            var_67 = var_67 - 1;
            var_199 = 9;
            var_240 = 1;
            yield func015();
            return;
        }
        if (var_257 == 1 && var_255 == 1) {
            var_66 = var_66 + 1;
            var_67 = var_67 - 1;
            var_199 = 9;
            var_240 = 1;
            yield func015();
            return;
        }
        if (var_258 == 1) {
            var_66 = var_66 - 1;
            var_67 = var_67 + 1;
            var_199 = 1;
            var_240 = 1;
            yield func015();
            return;
        }
        if (var_254 == 1 && var_259 == 1) {
            var_66 = var_66 - 1;
            var_67 = var_67 + 1;
            var_199 = 1;
            var_240 = 1;
            yield func015();
            return;
        }
        if (var_260 == 1) {
            var_66 = var_66 + 1;
            var_67 = var_67 + 1;
            var_199 = 3;
            var_240 = 1;
            yield func015();
            return;
        }
        if (var_257 == 1 && var_259 == 1) {
            var_66 = var_66 + 1;
            var_67 = var_67 + 1;
            var_199 = 3;
            var_240 = 1;
            yield func015();
            return;
        }
        if (var_254 == 1) {
            var_66 = var_66 - 1;
            var_199 = 4;
            var_240 = 1;
            yield func015();
            return;
        }
        if (var_257 == 1) {
            var_66 = var_66 + 1;
            var_199 = 6;
            var_240 = 1;
            yield func015();
            return;
        }
        if (var_255 == 1) {
            var_67 = var_67 - 1;
            var_199 = 8;
            var_240 = 1;
            yield func015();
            return;
        }
        if (var_259 == 1) {
            var_67 = var_67 + 1;
            var_199 = 2;
            var_240 = 1;
            yield func015();
            return;
        }
        var_281 = var_66 - 4;
        if (var_281 < 0) {
            var_281 = 0;
        }
        var_282 = var_66 + 4;
        if (var_282 > var_33) {
            var_282 = var_33;
        }
        var_283 = var_67 - 4;
        if (var_283 < 0) {
            var_283 = 0;
        }
        var_284 = var_67 + 4;
        if (var_284 > var_34) {
            var_284 = var_34;
        }
        var_285 = 0;
        var_286 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            if (var_83[var_286].Var1 > var_281 && var_83[var_286].Var1 < var_282 && var_83[var_286].Var2 > var_283 && var_83[var_286].Var2 < var_284 && var_83[var_286].Var31 != 4 && var_83[var_286].Var31 != 5) {
                if (var_83[var_286].Var0 != 0 && var_83[var_286].Var0 != 79 && var_83[var_286].Var0 != 94 && var_83[var_286].Var29 == 0 && var_83[var_286].Var12 == 0 && var_83[var_286].Var13 == 0 && var_83[var_286].Var30 == 0) {
                    var_285 = 1;
                    break;
                }
            }
            var_286 = var_286 + 1;
        }
        yield func080();
        if (var_285 == 1) {
            var_240 = 0;
            if (var_242 == 1 && var_239 == 1) {
                var_287 = 1;
                var_241 = 1;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
                var_287 = 0;
                var_241 = 0;
                var_217 = 1;
                yield func019();
                return;
            }
        }
        if (var_242 == 1 && var_239 == 1) {
            var_217 = 1;
            var_240 = 1;
            var_241 = 1;
            yield func019();
            return;
        }
        var_241 = 0;
        var_240 = 0;
        yield func009();
        return;
    });
}
function func015(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(15);
        if (var_116 >= 1 || var_114 >= 1) {
            var_66 = var_236;
            var_67 = var_237;
            yield func026();
            return;
        }
        if (var_126 == 1) {
            var_66 = var_236;
            var_67 = var_237;
            var_288 = rnd(8);
            if (var_288 == 0) {
                var_66 = var_66 - 1;
                var_67 = var_67 - 1;
                var_199 = 7;
            }
            if (var_288 == 1) {
                var_66 = var_66 + 1;
                var_67 = var_67 - 1;
                var_199 = 9;
            }
            if (var_288 == 2) {
                var_66 = var_66 - 1;
                var_67 = var_67 + 1;
                var_199 = 1;
            }
            if (var_288 == 3) {
                var_66 = var_66 + 1;
                var_67 = var_67 + 1;
                var_199 = 3;
            }
            if (var_288 == 4) {
                var_66 = var_66 - 1;
                var_199 = 4;
            }
            if (var_288 == 5) {
                var_66 = var_66 + 1;
                var_199 = 6;
            }
            if (var_288 == 6) {
                var_67 = var_67 - 1;
                var_199 = 8;
            }
            if (var_288 == 7) {
                var_67 = var_67 + 1;
                var_199 = 2;
            }
        }
        if (dangeon_number == 0 && var_66 == 14 && var_67 == 22 && var_236 != 15) {
            var_66 = var_236;
            var_67 = var_237;
            yield func162();
            return;
        }
        if (dangeon_number == 0 && var_66 == 12 && var_67 == 22 && var_199 == 8) {
            var_66 = var_236;
            var_67 = var_237;
            yield func736();
            return;
        }
        var_241 = 0;
        if (var_217 == 0) {
            if (var_66 < 5) {
                var_66 = var_236;
                var_67 = var_237;
                yield func009();
                return;
            }
            if (var_67 < 5) {
                var_66 = var_236;
                var_67 = var_237;
                yield func009();
                return;
            }
            if (var_66 > var_33) {
                var_66 = var_236;
                var_67 = var_237;
                yield func009();
                return;
            }
            if (var_67 > var_34) {
                var_66 = var_236;
                var_67 = var_237;
                yield func009();
                return;
            }
            var_289 = var_66 - 1;
            if (var_289 < 0) {
                var_289 = 0;
            }
            var_290 = var_66 + 1;
            if (var_290 > var_33) {
                var_290 = var_33;
            }
            var_291 = var_67 + 1;
            if (var_291 > var_34) {
                var_291 = var_34;
            }
            var_292 = var_67 - 1;
            if (var_292 < 0) {
                var_292 = 0;
            }
            if (var_71[var_66][var_67] == 13 && var_215 != 202 && var_215 != 117 && var_125 == 0) {
                var_66 = var_236;
                var_67 = var_237;
                yield func009();
                return;
            }
            yield func080(false);
            if (var_71[var_66][var_67] == 0 && var_159 == 0) {
                var_66 = var_236;
                var_67 = var_237;
                yield func009();
                return;
            }
            if (var_71[var_66][var_67] == 0 && var_239 == 1) {
                var_66 = var_236;
                var_67 = var_237;
                yield func009();
                return;
            }
            if (var_199 == 1 && var_159 == 0) {
                if (var_71[var_290][var_67] == 0 || var_71[var_66][var_292] == 0) {
                    var_66 = var_236;
                    var_67 = var_237;
                    yield func009();
                    return;
                }
            }
            if (var_199 == 3 && var_159 == 0) {
                if (var_71[var_289][var_67] == 0 || var_71[var_66][var_292] == 0) {
                    var_66 = var_236;
                    var_67 = var_237;
                    yield func009();
                    return;
                }
            }
            if (var_199 == 7 && var_159 == 0) {
                if (var_71[var_290][var_67] == 0 || var_71[var_66][var_291] == 0) {
                    var_66 = var_236;
                    var_67 = var_237;
                    yield func009();
                    return;
                }
            }
            if (var_199 == 9 && var_159 == 0) {
                if (var_71[var_289][var_67] == 0 || var_71[var_66][var_291] == 0) {
                    var_66 = var_236;
                    var_67 = var_237;
                    yield func009();
                    return;
                }
            }
            if (var_146 >= 1 && var_236 == var_147 && var_237 == var_148 && var_139 == 0 && var_144 == 0 && var_123 == 0 && var_163 == 0) {
                if (var_82[var_66][var_67] != 0) {
                    var_66 = var_147;
                    var_67 = var_148;
                    var_236 = var_66;
                    var_237 = var_67;
                    yield func009();
                    return;
                }
                var_66 = var_147;
                var_67 = var_148;
                var_236 = var_66;
                var_237 = var_67;
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "鉄塔からは出られない！";
                comments_row2 = "";
                var_198 = 1;
                var_300 = 0;
                yield func047();
                DSPLAY(audio_id = 188);
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    yield func337();
                }
                yield func009();
                return;
            }
            var_301 = 0;
            if (var_201 != 14 && var_71[var_66][var_67] >= 13 && var_139 == 0 && var_144 == 0 && var_123 == 0 && var_163 == 0) {
                if (var_215 != 112 && var_215 != 204 && var_215 != 394 && var_215 != 395) {
                    var_302 = 1;
                    for (let cnt4 = 0; cnt4 < var_97; ++cnt4) {
                        if (var_83[var_302].Var0 == 31 && var_83[var_302].Var20 == 0 && var_83[var_302].Var10 == var_201 && var_83[var_302].Var12 == 0 && var_83[var_302].Var13 == 0 && var_83[var_302].Var14 == 0 && var_83[var_302].Var17 == 0 && var_83[var_302].Var23 == 0) {
                            var_301 = 1;
                        }
                        var_302 = var_302 + 1;
                    }
                    if (var_301 == 1 && var_71[var_66][var_67] == 13) {
                        var_303 = var_66;
                        var_304 = var_67;
                        var_305 = var_66 - 1;
                        if (var_305 < 0) {
                            var_305 = 0;
                        }
                        var_306 = var_66 + 1;
                        if (var_306 > var_33) {
                            var_306 = var_33;
                        }
                        var_307 = var_67 + 1;
                        if (var_307 > var_34) {
                            var_307 = var_34;
                        }
                        var_308 = var_67 - 1;
                        if (var_308 < 0) {
                            var_308 = 0;
                        }
                        if (var_71[var_305][var_304] == var_201) {
                            var_301 = 0;
                        }
                        if (var_71[var_306][var_304] == var_201) {
                            var_301 = 0;
                        }
                        if (var_71[var_303][var_307] == var_201) {
                            var_301 = 0;
                        }
                        if (var_71[var_303][var_308] == var_201) {
                            var_301 = 0;
                        }
                        if (var_71[var_305][var_307] == var_201) {
                            var_301 = 0;
                        }
                        if (var_71[var_305][var_308] == var_201) {
                            var_301 = 0;
                        }
                        if (var_71[var_306][var_307] == var_201) {
                            var_301 = 0;
                        }
                        if (var_71[var_306][var_308] == var_201) {
                            var_301 = 0;
                        }
                    }
                    if (var_301 == 1) {
                        var_240 = 0;
                        var_309 = var_66;
                        var_310 = var_67;
                        var_66 = var_236;
                        var_67 = var_237;
                        if (var_82[var_309][var_310] == 0) {
                            gsel(19);
                            color(255, 255, 255);
            
                            boxf(left = 0, top1 = 0, right = 340, bottom = 340);
                            gsel(0);
                            var_311 = 255;
                            DSPLAY(audio_id = 206);
                            var_312 = 1;
                            yield func337();
                            var_312 = 0;
                            comments_row1 = "";
                            comments_row2 = "";
                            var_295 = "";
                            comments_row1a = "";
                            comments_row2a = "";
                            var_298 = "";
                            var_299 = 0;
                            comments_row1 = "吉良の親父がいるため";
                            comments_row2 = "この部屋から出ることができない！";
                            var_198 = 1;
                            var_300 = 0;
                            yield func047();
                            for (let cnt6 = 0; cnt6 < 9; ++cnt6) {
                                yield func337();
                            }
                        }
                        yield func009();
                        return;
                    }
                }
            }
            var_313 = 0;
            if (var_239 == 1 && var_82[var_66][var_67] != 0 && var_71[var_236][var_237] != 0 && var_71[var_236][var_237] != 13) {
                var_314 = var_82[var_66][var_67];
                var_315 = 0;
                if (var_83[var_314].Var31 == 4) {
                    var_315 = 1;
                }
                if (var_83[var_314].Var31 == 5) {
                    var_315 = 1;
                }
                if (var_83[var_314].Var0 == 61) {
                    var_315 = 1;
                }
                if (var_83[var_314].Var0 == 49) {
                    var_315 = 1;
                }
                if (var_83[var_314].Var0 == 116) {
                    var_315 = 1;
                }
                if (var_83[var_314].Var20 == 2) {
                    var_315 = 1;
                }
                if (var_83[var_314].Var0 == 33) {
                    var_315 = 0;
                }
                if (var_83[var_314].Var0 == 142) {
                    var_315 = 0;
                }
                if (var_315 == 1) {
                    var_316 = var_83[var_314].Var1;
                    var_317 = var_83[var_314].Var2;
                    var_83[var_314].Var1 = var_236;
                    var_83[var_314].Var2 = var_237;
                    var_82[var_316][var_317] = 0;
                    var_82[var_236][var_237] = var_314;
                    if (var_199 == 4) {
                        var_83[var_314].Var5 = 6;
                    }
                    if (var_199 == 6) {
                        var_83[var_314].Var5 = 4;
                    }
                    if (var_199 == 8) {
                        var_83[var_314].Var5 = 2;
                    }
                    if (var_199 == 2) {
                        var_83[var_314].Var5 = 8;
                    }
                    if (var_199 == 1) {
                        var_83[var_314].Var5 = 9;
                    }
                    if (var_199 == 3) {
                        var_83[var_314].Var5 = 7;
                    }
                    if (var_199 == 7) {
                        var_83[var_314].Var5 = 3;
                    }
                    if (var_199 == 9) {
                        var_83[var_314].Var5 = 1;
                    }
                    var_240 = 0;
                    var_313 = var_314;
                    if (var_83[var_314].Var0 == 116) {
                        var_318 = var_314;
                    }
                }
            }
            if (var_82[var_66][var_67] != 0) {
                var_319 = var_82[var_66][var_67];
                if (var_83[var_319].Var0 != 50) {
                    var_66 = var_236;
                    var_67 = var_237;
                    yield func009();
                    return;
                }
            }
            if (var_77[var_66][var_67] != 0 && var_313 == 0) {
                var_320 = var_77[var_66][var_67];
                if (var_78[var_320].Var15 == 1) {
                    var_321 = var_77[var_66][var_67];
                    var_66 = var_236;
                    var_67 = var_237;
                    var_240 = 0;
                    yield func402();
                }
            }
        }
        yield func019();
        return;
    });
}
function func016(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(16);
        var_65[var_236][var_237] = 0;
        var_65[var_66][var_67] = 1;
        var_303 = var_66;
        var_304 = var_67;
        var_305 = var_66 - 1;
        if (var_305 < 0) {
            var_305 = 0;
        }
        var_306 = var_66 + 1;
        if (var_306 > var_33) {
            var_306 = var_33;
        }
        var_307 = var_67 + 1;
        if (var_307 > var_34) {
            var_307 = var_34;
        }
        var_308 = var_67 - 1;
        if (var_308 < 0) {
            var_308 = 0;
        }
        var_279 = var_201;
        var_201 = var_71[var_303][var_304];
        if (var_71[var_303][var_304] == 13) {
            var_201 = 14;
            if (var_71[var_305][var_307] != 0 && var_71[var_305][var_307] <= 12) {
                var_201 = var_71[var_305][var_307];
            }
            if (var_71[var_305][var_308] != 0 && var_71[var_305][var_308] <= 12) {
                var_201 = var_71[var_305][var_308];
            }
            if (var_71[var_306][var_307] != 0 && var_71[var_306][var_307] <= 12) {
                var_201 = var_71[var_306][var_307];
            }
            if (var_71[var_306][var_308] != 0 && var_71[var_306][var_308] <= 12) {
                var_201 = var_71[var_306][var_308];
            }
            if (var_71[var_305][var_304] != 0 && var_71[var_305][var_304] <= 12) {
                var_201 = var_71[var_305][var_304];
            }
            if (var_71[var_306][var_304] != 0 && var_71[var_306][var_304] <= 12) {
                var_201 = var_71[var_306][var_304];
            }
            if (var_71[var_303][var_307] != 0 && var_71[var_303][var_307] <= 12) {
                var_201 = var_71[var_303][var_307];
            }
            if (var_71[var_303][var_308] != 0 && var_71[var_303][var_308] <= 12) {
                var_201 = var_71[var_303][var_308];
            }
        }
        if (var_71[var_303][var_304] != 0) {
            var_74[var_303][var_304] = 2;
            if (var_74[var_305][var_304] == 0)
                var_74[var_305][var_304] = 1;
            if (var_74[var_306][var_304] == 0)
                var_74[var_306][var_304] = 1;
            if (var_74[var_303][var_307] == 0)
                var_74[var_303][var_307] = 1;
            if (var_74[var_303][var_308] == 0)
                var_74[var_303][var_308] = 1;
            if (var_74[var_305][var_307] == 0)
                var_74[var_305][var_307] = 1;
            if (var_74[var_305][var_308] == 0)
                var_74[var_305][var_308] = 1;
            if (var_74[var_306][var_307] == 0)
                var_74[var_306][var_307] = 1;
            if (var_74[var_306][var_308] == 0)
                var_74[var_306][var_308] = 1;
            var_75[var_201] = 1;
            if (var_201 != var_279 && var_201 != 14) {
                yield func017();
            }
            yield func018();
            if (var_200 == var_201 && var_201 != 14) {
                var_98 = 1;
            }
            if (var_73[var_66][var_67] == 1) {
                var_98 = 1;
            }
            if (var_202 == var_201 && var_201 != 14) {
                var_99 = 1;
            }
            if (var_73[var_66][var_67] == 2) {
                var_99 = 1;
            }
        }
        if (var_201 != var_279 && var_201 != 14) {
            var_322 = var_199;
        }
        if (var_201 == 14 && var_279 != 14) {
            var_187 = var_279;
            var_323 = 0;
            if (var_66 == var_76[var_279][1][1] && var_67 == var_76[var_279][1][2]) {
                var_323 = 1;
            }
            if (var_66 == var_76[var_279][2][1] && var_67 == var_76[var_279][2][2]) {
                var_323 = 2;
            }
            if (var_66 == var_76[var_279][3][1] && var_67 == var_76[var_279][3][2]) {
                var_323 = 3;
            }
            if (var_66 == var_76[var_279][4][1] && var_67 == var_76[var_279][4][2]) {
                var_323 = 4;
            }
            if (var_323 == 0) {
                var_188 = var_66;
                var_189 = var_67;
                var_324 = 1;
                for (let cnt3 = 0; cnt3 < var_97; ++cnt3) {
                    if (var_83[var_324].Var0 != 0 && var_83[var_324].Var10 == var_279) {
                        var_83[var_324].Var33 = 5;
                    }
                    var_324++;
                }
            }
        }
        return;
    });
}
function func017(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(17);
        if (var_94 == 8) {
            return;
        }
        var_325 = 0;
        for (let cnt1 = 0; cnt1 < var_31; ++cnt1) {
            var_326 = 0;
            for (let cnt2 = 0; cnt2 < var_32; ++cnt2) {
                var_327 = var_325 - 1;
                if (var_327 < 0) {
                    var_327 = 0;
                }
                var_328 = var_325 + 1;
                if (var_328 > var_33) {
                    var_328 = var_33;
                }
                var_329 = var_326 + 1;
                if (var_329 > var_34) {
                    var_329 = var_34;
                }
                var_330 = var_326 - 1;
                if (var_330 < 0) {
                    var_330 = 0;
                }
                if (var_71[var_327][var_326] == var_201 || var_71[var_328][var_326] == var_201 || var_71[var_325][var_329] == var_201 || var_71[var_325][var_330] == var_201) {
                    if (var_74[var_325][var_326] == 0)
                        var_74[var_325][var_326] = 1;
                }
                var_326 = var_326 + 1;
            }
            var_325 = var_325 + 1;
        }
        return;
    });
}
function func018(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(18);
        var_331 = var_66 - 1;
        if (var_331 < 0) {
            var_331 = 0;
        }
        var_332 = var_66 + 1;
        if (var_332 > var_33) {
            var_332 = var_33;
        }
        var_333 = var_67 + 1;
        if (var_333 > var_34) {
            var_333 = var_34;
        }
        var_334 = var_67 - 1;
        if (var_334 < 0) {
            var_334 = 0;
        }
        var_335 = 1;
        for (let cnt1 = 0; cnt1 < var_336; ++cnt1) {
            if (var_201 != 14 && var_78[var_335].Var9 == var_201) {
                var_78[var_335].Var10 = 1;
            }
            if (var_78[var_335].Var1 >= var_331 && var_78[var_335].Var1 <= var_332 && var_78[var_335].Var2 <= var_333 && var_78[var_335].Var2 >= var_334) {
                var_78[var_335].Var10 = 1;
            }
            var_335 = var_335 + 1;
        }
        var_335 = 1;
        for (let cnt1 = 0; cnt1 < var_337; ++cnt1) {
            if (var_81[var_335][0] == 31 && var_201 != 14 && var_81[var_335][5] == var_201) {
                var_81[var_335][4] = 1;
            }
            if (var_81[var_335][0] == 31 && var_81[var_335][1] >= var_331 && var_81[var_335][1] <= var_332 && var_81[var_335][2] <= var_333 && var_81[var_335][2] >= var_334) {
                var_81[var_335][4] = 1;
            }
            var_335 = var_335 + 1;
        }
        return;
    });
}
function func019(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(19);
        if (dangeon_number != 0) {
            var_338++;
        }
        yield func016();
        var_195 = 0;
        var_220 = 0;
        var_234 = 0;
        var_339 = 0;
        var_340 = 0;
        var_341 = 0;
        if (var_66 != var_236 || var_67 != var_237) {
            var_342 = 0;
            var_343 = 0;
            var_344 = 0;
        }
        if (var_66 == var_236 && var_67 == var_237) {
            if (var_77[var_66][var_67] != 0) {
                var_342 = 1;
            }
            if (var_73[var_66][var_67] != 0) {
                var_344 = 1;
            }
            if (var_80[var_66][var_67] != 0) {
                var_343 = 1;
            }
        }
        yield func020();
        if (var_211 <= 0) {
            var_211 = 0;
            var_212 = 1;
            yield func009();
            return;
        }
        if (var_159 >= 1) {
            var_289 = var_66 - 1;
            if (var_289 < 0) {
                var_289 = 0;
            }
            var_290 = var_66 + 1;
            if (var_290 > var_33) {
                var_290 = var_33;
            }
            var_291 = var_67 + 1;
            if (var_291 > var_34) {
                var_291 = var_34;
            }
            var_292 = var_67 - 1;
            if (var_292 < 0) {
                var_292 = 0;
            }
            var_345 = 0;
    
            var_346 = dim(length1= 10, length2 = 10, length3 = null, length4 = null);
            if (var_71[var_66][var_67] == 0) {
                var_347 = var_66;
                var_348 = var_67;
                yield func622();
                var_345 = 1;
                var_346[0][1] = var_347;
                var_346[0][2] = var_348;
            }
            if (var_71[var_289][var_67] == 0) {
                var_347 = var_289;
                var_348 = var_67;
                yield func622();
                var_345 = 1;
                var_346[4][1] = var_347;
                var_346[4][2] = var_348;
            }
            if (var_71[var_290][var_67] == 0) {
                var_347 = var_290;
                var_348 = var_67;
                yield func622();
                var_345 = 1;
                var_346[6][1] = var_347;
                var_346[6][2] = var_348;
            }
            if (var_71[var_66][var_291] == 0) {
                var_347 = var_66;
                var_348 = var_291;
                yield func622();
                var_345 = 1;
                var_346[2][1] = var_347;
                var_346[2][2] = var_348;
            }
            if (var_71[var_66][var_292] == 0) {
                var_347 = var_66;
                var_348 = var_292;
                yield func622();
                var_345 = 1;
                var_346[8][1] = var_347;
                var_346[8][2] = var_348;
            }
            if (var_71[var_289][var_291] == 0) {
                var_347 = var_289;
                var_348 = var_291;
                yield func622();
                var_345 = 1;
                var_346[1][1] = var_347;
                var_346[1][2] = var_348;
            }
            if (var_71[var_290][var_291] == 0) {
                var_347 = var_290;
                var_348 = var_291;
                yield func622();
                var_345 = 1;
                var_346[3][1] = var_347;
                var_346[3][2] = var_348;
            }
            if (var_71[var_289][var_292] == 0) {
                var_347 = var_289;
                var_348 = var_292;
                yield func622();
                var_345 = 1;
                var_346[7][1] = var_347;
                var_346[7][2] = var_348;
            }
            if (var_71[var_290][var_292] == 0) {
                var_347 = var_290;
                var_348 = var_292;
                yield func622();
                var_345 = 1;
                var_346[9][1] = var_347;
                var_346[9][2] = var_348;
            }
            if (var_345 == 1) {
                DSPLAY(audio_id = 123);
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    var_349++;
                    yield func337();
                    yield func337();
                }
                var_349 = 0;

                var_346 = dim(length1= 10, length2 = 10, length3 = null, length4 = null);
            }
        }
        if (var_151 == 0) {
            if (var_350 > 0 && var_211 >= 1 && var_134 == 0 && var_218 < 30) {
                var_351 = Math.floor(var_352 * 10 / 150); // Math.floor は対象の値の小数点以下を切り捨て
                var_353 = var_351 + var_354;
                if (var_130 == 1 || var_182 == 1) {
                    var_353 = var_353 * 2;
                }
                if (var_353 >= 50) {
                    var_353 = 50;
                }
                if (var_353 < 10) {
                    var_354 = var_353;
                    var_355 = 0;
                }
                if (var_353 >= 10 && var_353 < 20) {
                    var_354 = var_353 - 10;
                    var_355 = 1;
                }
                if (var_353 >= 20 && var_353 < 30) {
                    var_354 = var_353 - 20;
                    var_355 = 2;
                }
                if (var_353 >= 30 && var_353 < 40) {
                    var_354 = var_353 - 30;
                    var_355 = 3;
                }
                if (var_353 >= 40 && var_353 < 50) {
                    var_354 = var_353 - 40;
                    var_355 = 4;
                }
                if (var_353 >= 50) {
                    var_354 = var_353 - 50;
                    var_355 = 5;
                }
                if (var_354 < 0) {
                    var_354 = 0;
                }
                var_211 = var_211 + var_355;
                if (var_130 == 1 || var_182 == 1) {
                    var_211 = var_211 + var_355;
                }
                if (var_211 > var_352) {
                    var_211 = var_352;
                }
            }
            if (var_163 == 0) {
                if (var_135 >= 1) {
                    var_211 = var_211 - 5;
                    var_135 = var_135 + 1;
                    if (var_211 <= 0) {
                        var_211 = 0;
                        var_356 = 203;
                        var_212 = 1;
                        yield func009();
                        return;
                    }
                    if (var_135 == 11) {
                        var_135 = 0;
                    }
                }
                if (var_136 >= 1) {
                    var_211 = var_211 - 1;
                    var_136 = var_136 + 1;
                    if (var_211 <= 0) {
                        var_211 = 0;
                        var_356 = 204;
                        var_212 = 1;
                        yield func009();
                        return;
                    }
                    if (var_136 == 11) {
                        var_136 = 0;
                    }
                }
                if (var_137 >= 1) {
                    var_211 = var_211 - 10;
                    var_137 = var_137 + 1;
                    if (var_211 <= 0) {
                        var_211 = 0;
                        var_356 = 256;
                        var_212 = 1;
                        yield func009();
                        return;
                    }
                    if (var_137 == 11) {
                        var_137 = 0;
                    }
                }
                if (var_134 >= 1) {
                    var_134 = var_134 + 1;
                    if (var_134 == 30) {
                        var_134 = 0;
                    }
                }
                if (var_177 >= 1) {
                    var_177 = var_177 + 1;
                    if (var_177 == 11) {
                        yield func701();
                        var_177 = 0;
                        if (var_211 <= 0) {
                            var_211 = 0;
                            var_212 = 1;
                            yield func009();
                            return;
                        }
                    }
                }
                if (var_71[var_66][var_67] == 13) {
                    if (var_357 == 105 || var_358 == 105 || var_215 == 105) {
                        yield func501();
                        if (var_211 <= 0) {
                            var_211 = 0;
                            var_212 = 1;
                            yield func009();
                            return;
                        }
                    }
                }
                if (var_156[311] == 1 && var_144 == 0 && var_218 == 0) {
                    yield func500();
                    if (var_211 <= 0) {
                        var_211 = 0;
                        var_212 = 1;
                        yield func009();
                        return;
                    }
                }
                if (var_140 >= 1 && var_144 == 0 && var_218 == 0) {
                    yield func542();
                    if (var_211 <= 0) {
                        var_211 = 0;
                        var_212 = 1;
                        yield func009();
                        return;
                    }
                }
                if (var_193 == 0) {
                    if (var_350 < 1) {
                        var_211 = var_211 - 1;
                        for (let cnt5 = 0; cnt5 < 3; ++cnt5) {
                            yield func337();
                        }
                        if (var_211 <= 0) {
                            var_211 = 0;
                            var_356 = 201;
                            var_212 = 1;
                            yield func009();
                            return;
                        }
                    }
                    var_359 = 0;
                    if (var_129 != 0 || var_130 != 0) {
                        var_359 = 1;
                    }
                    if (var_156[300] != 1 && var_359 == 0) {
                        var_360 = var_360 + 2;
                    }
                    if (var_156[300] == 1 && var_359 == 0) {
                        var_360 = var_360 + 1;
                    }
                    if (var_156[300] != 1 && var_359 == 1) {
                        var_360 = var_360 + 4;
                    }
                    if (var_156[300] == 1 && var_359 == 1) {
                        var_360 = var_360 + 2;
                    }
                    if (dangeon_number == 0) {
                        var_360 = 0;
                    }
                    if (var_360 >= 20) {
                        var_360 = 0;
                        var_350 = var_350 - 1;
                        if (var_350 < 1) {
                            var_350 = 0;
                        }
                    }
                    if (var_350 == 20 && var_360 == 0) {
                        var_361 = 1;
                        var_362 = 1;
                        yield func071();
                    }
                    if (var_350 == 10 && var_360 == 0) {
                        var_361 = 2;
                        var_362 = 1;
                        yield func071();
                    }
                    if (var_350 > 1) {
                        var_363 = 0;
                    }
                    if (var_350 == 1 && var_363 == 0) {
                        if (var_156[300] != 1 && var_359 == 0) {
                            if (var_360 > 12) {
                                var_363 = 1;
                            }
                        }
                        if (var_156[300] == 1 && var_359 == 0) {
                            if (var_360 > 16) {
                                var_363 = 1;
                            }
                        }
                        if (var_156[300] != 1 && var_359 == 1) {
                            if (var_360 > 4) {
                                var_363 = 1;
                            }
                        }
                        if (var_156[300] == 1 && var_359 == 1) {
                            if (var_360 > 12) {
                                var_363 = 1;
                            }
                        }
                    }
                    if (var_350 == 1 && var_363 == 3) {
                        var_363 = 4;
                        var_361 = 5;
                        var_362 = 1;
                        yield func071();
                    }
                    if (var_350 == 1 && var_363 == 2) {
                        var_363 = 3;
                        var_361 = 4;
                        var_362 = 1;
                        yield func071();
                    }
                    if (var_350 == 1 && var_363 == 1) {
                        var_363 = 2;
                        var_361 = 3;
                        var_362 = 1;
                        yield func071();
                    }
                }
            }
            if (var_156[315] == 1 && var_144 == 0 && var_262 == 0 && var_218 == 0) {
                if (var_66 != var_236 || var_67 != var_237) {
                    var_364 = 0;
                    if (var_80[var_290][var_67] != 0) {
                        var_364 = 1;
                        var_365 = var_80[var_290][var_67];
                    }
                    if (var_80[var_289][var_67] != 0) {
                        var_364 = 1;
                        var_365 = var_80[var_289][var_67];
                    }
                    if (var_80[var_66][var_291] != 0) {
                        var_364 = 1;
                        var_365 = var_80[var_66][var_291];
                    }
                    if (var_80[var_66][var_292] != 0) {
                        var_364 = 1;
                        var_365 = var_80[var_66][var_292];
                    }
                    if (var_80[var_290][var_291] != 0) {
                        var_364 = 1;
                        var_365 = var_80[var_290][var_291];
                    }
                    if (var_80[var_289][var_291] != 0) {
                        var_364 = 1;
                        var_365 = var_80[var_289][var_291];
                    }
                    if (var_80[var_290][var_292] != 0) {
                        var_364 = 1;
                        var_365 = var_80[var_290][var_292];
                    }
                    if (var_80[var_289][var_292] != 0) {
                        var_364 = 1;
                        var_365 = var_80[var_289][var_292];
                    }
                    if (var_364 == 1) {
                        var_366 = 0;
                        if (var_81[var_365][4] == 1) {
                            var_366 = 1;
                        }
                        if (var_121 == 1) {
                            var_366 = 1;
                        }
                        if (var_81[var_365][0] >= 70) {
                            var_366 = 1;
                        }
                        if (var_366 == 1) {
                            var_364 = 0;
                        }
                    }
                    if (var_364 == 1) {
                        var_271 = 1;
                        for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                            yield func337();
                        }
                        var_271 = 0;
                        var_364 = 0;
                    }
                }
            }
            if (var_126 == 1) {
                var_166 = var_166 + 1;
                if (var_166 == 10) {
                    var_166 = 0;
                    var_126 = 0;
                    var_240 = 0;
                    yield func036();
                }
            }
            if (var_127 == 1) {
                var_167 = var_167 + 1;
                if (var_167 == 20) {
                    var_167 = 0;
                    var_127 = 0;
                    var_240 = 0;
                    yield func331();
                    yield func034();
                }
            }
            if (var_132 >= 1) {
                var_132 = var_132 + 1;
                if (var_132 >= 20) {
                    var_132 = 0;
                    var_240 = 0;
                    yield func331();
                    yield func035();
                }
            }
            if (var_159 >= 1) {
                var_159 = var_159 + 1;
                if (var_159 >= 22) {
                    var_159 = 0;
                    var_240 = 0;
                    yield func029();
                }
            }
            if (var_140 >= 1) {
                var_141 = var_141 + 1;
                if (var_156[363] == 1) {
                    var_141 = var_141 + 1;
                }
                if (var_141 >= 30) {
                    var_141 = 1;
                    yield func543();
                }
            }
            if (var_131 >= 1) {
                var_131 = var_131 + 1;
                if (var_131 == 12) {
                    var_131 = 0;
                    var_240 = 0;
                    yield func028();
                }
            }
            if (var_218 >= 1 && var_218 < 30) {
                var_218 = var_218 + 1;
                if (var_218 == 21) {
                    var_218 = 0;
                    var_240 = 0;
                    yield func031();
                }
            }
            if (var_218 >= 30) {
                var_218 = var_218 + 1;
                if (var_218 == 2000) {
                    var_218 = 0;
                    var_240 = 0;
                    yield func033();
                }
            }
            if (var_139 >= 1) {
                var_139 = var_139 + 1;
                if (var_139 >= 50) {
                    var_139 = 0;
                    var_240 = 0;
                    yield func037();
                }
            }
            if (var_146 >= 1) {
                var_146++;
                if (var_146 >= 22) {
                    var_146 = 0;
                    var_147 = 0;
                    var_148 = 0;
                    var_240 = 0;
                    yield func040();
                }
            }
            if (var_144 >= 1) {
                var_144 = var_144 + 1;
                if (var_144 == 45) {
                    yield func041();
                }
                if (var_192 == 0 && var_144 >= 104) {
                    yield func042();
                }
                if (var_192 == 1 && var_144 >= 114) {
                    yield func042();
                }
                if (var_192 == 2 && var_144 >= 124) {
                    yield func042();
                }
                if (var_192 == 3 && var_144 >= 93) {
                    yield func042();
                }
                if (var_144 >= 200) {
                    yield func042();
                }
            }
            if (var_191 >= 1) {
                var_191++;
                if (var_191 == 50) {
                    var_191 = 0;
                }
            }
            if (var_116 == 1 && var_114 == 0) {
                var_115 = var_115 + 1;
                if (var_115 == 6) {
                    var_115 = 0;
                    var_116 = 2;
                }
            }
            var_367 = var_367 + 1;
            if (var_367 >= 20) {
                var_367 = 0;
            }
            if (var_77[var_66][var_67] != 0 && var_139 == 0 && var_144 == 0 && var_218 == 0 && var_128 == 0 && var_219 == 0 && var_178 == 0) {
                if (var_342 == 0 && var_239 == 0) {
                    var_368 = var_77[var_66][var_67];
                    if (var_78[var_368].Var11 == 1) {
                        yield func419();
                    }
                    if (var_78[var_368].Var11 == 0) {
                        yield func400();
                    }
                }
                if (var_239 == 1) {
                    yield func419();
                }
            }
            if (var_80[var_66][var_67] > 0 && var_343 == 0 && var_128 == 0 && var_369 == 0 && var_139 == 0 && var_144 == 0 && var_218 == 0 && var_219 == 0 && var_178 == 0) {
                var_343 = 0;
                var_240 = 0;
                yield func541();
                if (var_211 <= 0) {
                    var_211 = 0;
                    var_212 = 1;
                    yield func009();
                    return;
                }
            }
            if (var_369 == 1) {
                var_369 = 0;
            }
            if (var_370 == 1) {
                var_217 = 0;
                yield func548();
                return;
            }
            if (var_371 == 1) {
                var_217 = 0;
                yield func551();
                return;
            }
            if (var_372 == 1) {
                var_373 = 5;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337();
                }
                var_373 = 4;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337();
                }
                var_373 = 3;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337();
                }
                var_373 = 2;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337();
                }
                var_373 = 1;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
                var_373 = 0;
                var_374 = 0;
                if (var_375 == 1) {
                    var_372 = 0;
                    yield func233();
                    yield func880();
                    return;
                }
                current_floor = current_floor + 1;
                if (current_floor > var_376) {
                    var_376 = current_floor;
                }
                // No = 1 なので、ホテルの外
                if (dangeon_number == 1 && current_floor > var_377) {
                    var_377 = current_floor;
                }
                if (dangeon_number == 2 && current_floor > var_378) {
                    var_378 = current_floor;
                }
                if (dangeon_number == 3 && current_floor > var_379) {
                    var_379 = current_floor;
                }
                if (dangeon_number == 4 && current_floor > var_380) {
                    var_380 = current_floor;
                }
                if (dangeon_number == 5 && current_floor > var_381) {
                    var_381 = current_floor;
                }
                var_94 = 0;
                yield func059();
                var_372 = 0;
                var_217 = 0;
                var_205 = 1;
                yield func231();
                yield func076();
                for (let cnt3 = 0; cnt3 < 80; ++cnt3) {
                    yield func339();
                }
                yield func006();
                return;
            }
            if (var_382 == 1) {
                var_382 = 0;
                if (var_85 == 0 && var_163 == 0 && var_383 == 0) {
                    yield func722();
                }
                var_383 = 0;
                yield func009();
                return;
            }
            if (var_157 != 0) {
                if (var_157 == 2) {
                    var_384 = 1;
                }
                if (var_157 == 1) {
                    var_384 = 2;
                }
                if (var_384 == 1) {
                    var_157 = 1;
                }
                if (var_384 == 2) {
                    var_157 = 2;
                }
            }
            if (var_157 == 1) {
                var_158 = var_158 + 1;
                if (var_156[396] == 1) {
                    var_158 = 0;
                    yield func043();
                }
                if (var_158 == 20) {
                    var_240 = 0;
                    var_157 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "普通の速さに戻った";
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                    for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                        yield func337();
                    }
                }
            }
        }
        if (var_163 == 0) {
            var_385 = 1;
            yield func579();
            if (var_212 == 1) {
                yield func009();
                return;
            }
            if (var_211 <= 0) {
                var_211 = 0;
                var_212 = 1;
                yield func009();
                return;
            }
            var_385 = 0;
            var_217 = 0;
            if (var_151 == 0) {
                if (var_72[var_66][var_67] >= 1 && var_72[var_236][var_237] == 0 && var_85 == 0 && var_210 == 0) {
                    if (var_66 != var_236 || var_67 != var_237) {
                        var_240 = 0;
                        yield func706();
                    }
                }
                if (var_262 == 0) {
                    var_112 = var_112 + 1;
                }
                if (var_156[396] == 1 && var_112 < 680) {
                    var_112 = var_112 + 2;
                }
                if (var_112 == 700 || var_112 == 850 || var_112 == 1000) {
                    var_240 = 0;
                    yield func072();
                    if (var_211 <= 0) {
                        var_211 = 0;
                        var_212 = 1;
                        yield func009();
                        return;
                    }
                }
                if (var_72[var_236][var_237] >= 1 && var_72[var_66][var_67] == 0 && var_85 == 0) {
                    yield func722();
                }
                var_165 = var_165 + 1;
                if (var_156[358] == 1) {
                    var_165 = var_165 + 1;
                }
                // No = 1 なので、ホテルの外
                if (dangeon_number == 1 && current_floor == 12 && var_94 == 0 && var_386 == 0) {
                    var_165 = 0;
                }
                if (var_190 == 1) {
                    var_165 = 0;
                }
                if (dangeon_number == 3 && current_floor == 99) {
                    var_165 = 0;
                }
                if (var_94 == 1 && var_387 == 0) {
                    var_165 = 0;
                }
                if (var_375 == 1) {
                    var_165 = 0;
                }
                if (var_94 == 3) {
                    var_165 = 0;
                }
                if (var_94 == 5) {
                    var_165 = 0;
                }
                if (var_94 == 9) {
                    var_165 = 0;
                }
                if (var_262 == 1) {
                    var_165 = 0;
                }
                if (var_165 >= 64 && var_97 < 50) {
                    var_165 = 0;
                    yield func556();
                }
                if (var_186 != 0) {
                    var_183++;
                    if (var_183 == 5) {
                        yield func693();
                    }
                }
                if (var_156[302] == 1 && var_262 == 0 && var_144 == 0 && var_218 == 0 && var_128 == 0 && var_219 == 0 && var_178 == 0 && var_139 == 0) {
                    var_388 = rnd(200);
                    if (var_388 == 0) {
                        var_240 = 0;
                        yield func534();
                    }
                    if (var_212 == 1) {
                        yield func009();
                        return;
                    }
                    if (var_211 <= 0) {
                        var_211 = 0;
                        var_212 = 1;
                        yield func009();
                        return;
                    }
                }
                // エンプレスの罠を踏んだ時の効果
                if (var_156[310] == 1 && var_262 == 0 && var_144 == 0 && var_218 == 0 && var_128 == 0 && var_219 == 0 && var_178 == 0 && var_139 == 0) {
                    var_388 = rnd(200);
                    if (var_388 == 0) {
                        var_240 = 0;
                        yield func094();
                        comments_row1 = "";
                        comments_row2 = "";
                        var_295 = "";
                        comments_row1a = "";
                        comments_row2a = "";
                        var_298 = "";
                        var_299 = 0;
                        comments_row1 = "ｴﾝﾌﾟﾚｽ「ﾃﾞｨｱﾎﾞﾛはここよッ！";
                        comments_row2 = "　　　ここにいるわよォ―――ッ」";
                        var_198 = 1;
                        var_300 = 0;
                        var_25_x = var_25[5];
                        var_26_x = var_26[5];
                        var_27_x = var_27[5];
                        var_389 = 2;
                        yield func047();
                        yield func340();
                        var_390 = 1;
                        for (let cnt5 = 0; cnt5 < var_97; ++cnt5) {
                            var_83[var_390].Var12 = 0;
                            var_390 = var_390 + 1;
                        }
                        var_389 = 0;
                        comments_row1 = comments_row1a;
                        comments_row2 = comments_row2a;
                        comments_row1a = "フロアの敵が全員 目を覚ました！";
                        comments_row2a = "";
                        yield func047();
                        yield func050();
                        for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                            yield func337();
                        }
                    }
                }
                // 
                if (var_270 == 106 || var_270 == 114 || var_270 == 121) {
                    var_388 = rnd(300);
                    if (var_388 == 0 && var_144 == 0 && var_218 == 0 && var_128 == 0 && var_219 == 0 && var_178 == 0 && var_139 == 0) {
                        var_240 = 0;
                        comments_row1 = "";
                        comments_row2 = "";
                        var_295 = "";
                        comments_row1a = "";
                        comments_row2a = "";
                        var_298 = "";
                        var_299 = 0;
                        comments_row1 = "「クンクンクン・・・」";
                        comments_row2 = "";
                        var_198 = 1;
                        var_300 = 0;
                        var_25_x = var_25[1];
                        var_26_x = var_26[1];
                        var_27_x = var_27[1];
                        var_391 = 1;
                        DSPLAY(audio_id = 184);
                        yield func331();
                        yield func047();
                        yield func340();
                        yield func051();
                        var_391 = 0;
                        yield func331();
                    }
                }
            }
        }
        if (var_198 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_300 = 0;
        }
        if (var_123 == 0) {
            if (var_163 == 1) {
                DSPLAY(audio_id = 181);
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "「" + var_164 + "秒経過！」";
                comments_row2 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
                var_164++;
                var_392 = 0;
                if (var_164 == 6 && var_130 == 0) {
                    var_392 = 1;
                }
                if (var_164 == 6 && var_130 == 1) {
                    var_392 = 2;
                }
                if (var_164 == 11 && var_130 == 1) {
                    var_392 = 1;
                }
                if (var_164 == 3 && var_153 >= 1) {
                    var_392 = 1;
                }
                if (var_392 == 2) {
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "まだまだ止めていられるぞ…";
                    comments_row2a = "";
                    yield func047();
                    yield func050();
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337();
                    }
                }
                if (var_392 == 1) {
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "そして時は動き出す…";
                    comments_row2a = "";
                    if (var_153 == 1) {
                        comments_row1a = "パンチ一発分が限界か…";
                        comments_row2a = "";
                    }
                    if (var_153 == 2) {
                        comments_row1a = "「時」は動き出す";
                        comments_row2a = "";
                    }
                    yield func047();
                    yield func050();
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337();
                    }
                    var_153 = 0;
                    var_164 = 0;
                    var_163 = 0;
                    if (var_72[var_66][var_67] == 0 && var_85 == 0) {
                        yield func722();
                    }
                }
            }
        }
        if (var_123 >= 1) {
            var_393[var_123][0] = var_199;
            if (var_66 == var_393[var_123][1] && var_67 == var_393[var_123][2]) {
                var_393[var_123][0] = 0;
            }
            var_393[var_123][1] = var_66;
            var_393[var_123][2] = var_67;
            var_123++;
            if (var_123 > 6) {
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "時は再び刻み始める…";
                comments_row2 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
                var_394 = var_83[var_124].Var1;
                var_395 = var_83[var_124].Var2;
                var_82[var_394][var_395] = 0;
                var_83[var_124].Var0 = 0;
                var_83[var_124].Var1 = 0;
                var_83[var_124].Var2 = 0;
                var_123 = 0;
                var_92 = var_396;
            }
        }
        if (var_151 == 0) {
            if (var_96 >= 1 && var_201 == var_204) {
                var_240 = 0;
                yield func074();
            }
            if (var_133 == 1) {
                var_217 = 1;
                yield func020();
                var_385 = 1;
                yield func579();
                if (var_212 == 1) {
                    yield func009();
                    return;
                }
                if (var_211 <= 0) {
                    var_211 = 0;
                    var_212 = 1;
                    yield func009();
                    return;
                }
                var_385 = 0;
                var_217 = 0;
                var_397 = var_397 + 1;
                if (var_397 == 10) {
                    var_397 = 0;
                    var_133 = 0;
                    var_240 = 0;
                    yield func030();
                }
                yield func331();
            }
            if (var_169 == 999999) {
                var_398 = 0;
                for (let cnt3 = 0; cnt3 < var_97 + 1; ++cnt3) {
                    if (var_83[cnt3][0] == 130) {
                        var_399 = var_83[cnt4][1];
                        var_400 = var_83[cnt4][2];
                        var_82[var_399][var_400] = 0;
                        var_83[cnt4][0] = 0;
                        var_83[cnt4][1] = 0;
                        var_83[cnt4][2] = 0;
                        var_398 = 1;
                    }
                }
                if (var_398 == 1) {
                    yield func094();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾏﾘﾘﾝﾏﾝｿﾝ「マタ会オウ！」";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                    var_240 = 0;
                    yield func331();
                    for (let cnt4 = 0; cnt4 < 20; ++cnt4) {
                        yield func337();
                    }
                }
            }
            if (var_208 != 0 && var_211 != 0) {
                var_401 = 1;
                for (let cnt3 = 0; cnt3 < var_97; ++cnt3) {
                    if (var_83[var_401].Var0 != 0 && var_83[var_401].Var19 == 1) {
                        var_402 = var_401;
                        var_209 = var_208;
                        var_403 = "とりついたﾗﾊﾞｰｽﾞの攻撃！";
                        var_25_x = var_25[1];
                        var_26_x = var_26[1];
                        var_27_x = var_27[1];
                        var_240 = 0;
                        for (let cnt5 = 0; cnt5 < 5; ++cnt5) {
                            yield func337();
                        }
                        yield func705();
                    }
                    var_401 = var_401 + 1;
                }
            }
            if (var_212 == 1) {
                yield func009();
                return;
            }
            if (var_211 <= 0) {
                var_211 = 0;
                var_212 = 1;
                yield func009();
                return;
            }
            if (dangeon_number == 0 && var_66 == 11 && var_67 == 8) {
                if (var_66 != var_236 || var_67 != var_237) {
                    yield func824();
                    return;
                }
            }
            if (dangeon_number == 0 && var_404 >= 1 && var_66 == 17 && var_67 == 9) {
                if (var_66 != var_236 || var_67 != var_237) {
                    yield func826();
                    return;
                }
            }
            if (var_73[var_66][var_67] >= 1 && var_344 == 0 && var_139 == 0 && var_144 == 0 && var_128 == 0 && var_219 == 0 && var_114 == 0 && var_178 == 0) {
                var_405 = 1;
                var_245 = 19;
                var_246 = 45;
                var_406 = 1;
                var_240 = 0;
                DSPLAY(audio_id = 212);
                yield func060();
                return;
            }
        }
        if (var_151 >= 1) {
            var_151 = var_151 - 1;
            if (var_151 == 1) {
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "そして時は動き出す…";
                comments_row2 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                yield func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
                var_151 = 0;
                var_152 = 0;
                var_154 = 0;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    yield func337();
                }
            }
        }
        var_217 = 0;
        if (var_407 >= 1) {
            if (var_407 == 1) {
                yield func907();
                yield func906();
            }
            if (var_407 == 2) {
                yield func929();
                if (var_408 >= 1) {
                    yield func909();
                }
            }
        }
        yield func009();
        return;
    });
}
function func020(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(20);
        var_362 = 0;
        if (var_163 == 0) {
            yield func575();
            yield func545();
        }
        if (var_240 == 0 || var_163 == 1) {
            var_409 = 3;
            yield func337();
            var_409 = 2;
            yield func337();
            var_409 = 1;
            yield func337();
        }
        var_409 = 0;
        yield func331();
        if (var_163 == 1) {
            return;
        }
        if (var_318 >= 1 && var_410 == 406) {
            var_240 = 0;
            var_83[var_318].Var21 = 1;
            if (var_199 == 2) {
                var_411 = 3;
            }
            if (var_199 == 4) {
                var_411 = 4;
            }
            if (var_199 == 8) {
                var_411 = 1;
            }
            if (var_199 == 6) {
                var_411 = 2;
            }
            if (var_199 == 1) {
                var_411 = 8;
            }
            if (var_199 == 7) {
                var_411 = 7;
            }
            if (var_199 == 3) {
                var_411 = 6;
            }
            if (var_199 == 9) {
                var_411 = 5;
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_83[var_318].Var21 = 0;
            var_411 = 0;
            var_318 = 0;
        }
        if (var_318 >= 1 && var_410 != 406) {
            var_240 = 0;
            var_412 = var_318;
            var_83[var_318].Var21 = 1;
            if (var_199 == 2) {
                var_411 = 3;
            }
            if (var_199 == 4) {
                var_411 = 4;
            }
            if (var_199 == 8) {
                var_411 = 1;
            }
            if (var_199 == 6) {
                var_411 = 2;
            }
            if (var_199 == 1) {
                var_411 = 8;
            }
            if (var_199 == 7) {
                var_411 = 7;
            }
            if (var_199 == 3) {
                var_411 = 6;
            }
            if (var_199 == 9) {
                var_411 = 5;
            }
            DSPLAY(audio_id = 106);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_389 = 2;
            var_413 = var_199;
            var_199 = 2;
            var_414 = 1;
            var_271 = 1;
            DSPLAY(audio_id = 188);
            for (let cnt2 = 0; cnt2 < 25; ++cnt2) {
                yield func337();
                var_414++;
            }
            var_199 = var_413;
            var_389 = 0;
            var_414 = 0;
            var_271 = 0;
            var_83[var_318].Var21 = 0;
            var_411 = 0;
            var_318 = 0;
            if (var_415 < 1) {
                if (var_156[396] == 0) {
                    if (var_157 == 0) {
                        var_133 = 1;
                        var_397 = 0;
                    }
                    if (var_157 != 0) {
                        var_157 = 0;
                        var_158 = 0;
                    }
                }
                DSPLAY(audio_id = 162);
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "罪悪感で体が重くなった！";
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                var_198 = 1;
                var_300 = 0;
                yield func047();
                if (var_156[396] == 1) {
                    yield func340();
                    yield func094();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "しかし装備スタンドの効果で";
                    comments_row2a = "速度は遅くならない！";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    yield func050();
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                }
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
            }
            if (var_415 >= 1) {
                DSPLAY(audio_id = 207);
                if (var_415 <= 500) {
                    var_416 = var_415;
                }
                if (var_415 > 500) {
                    var_416 = Math.floor(var_415 / 2); // Math.floor は対象の値の小数点以下を切り捨て
                }
                var_415 = var_415 - var_416;
                var_83[var_412].Var26 = 1;
                item_list = 1;
                var_417 = item_list;
                var_418 = "" + var_416 + "G"; //現在の所持金表示
                var_419 = var_412 + 200;
                var_78[var_419].Var0 = 1;
                var_78[var_419].Var1 = 0;
                var_78[var_419].Var2 = 0;
                var_78[var_419].Var3 = 0;
                var_78[var_419].Var4 = 0;
                var_78[var_419].Var5 = 0;
                var_78[var_419].Var6 = 0;
                var_78[var_419].Var7 = 0;
                var_78[var_419].Var8 = 0;
                var_78[var_419].Var9 = 0;
                var_78[var_419].Var10 = 0;
                var_78[var_419].Var11 = 0;
                var_78[var_419].Var12 = 0;
                // 0でなければ、もともとの配列に格納されている金額に新たに金額を追加する
                if (var_78[var_419].Var13 != 0) {
                    var_78[var_419].Var13 = var_78[var_419].Var13 + var_416;
                }
                // 0であればそのまま金額を追加する
                if (var_78[var_419].Var13 == 0) {
                    var_78[var_419].Var13 = var_416;
                }
                var_78[var_419].Var14 = 0;
                var_78[var_419].Var15 = 0;
                var_78[var_419].Var16 = 0;
                var_78[var_419].Var17 = 0;
                var_78[var_419].Var18 = 0;
                var_78[var_419].Var19 = 0;
                var_78[var_419].Var20 = 0;
                var_78[var_419].Var21 = 0;
                var_78[var_419].Var22 = 0;
                var_78[var_419].Var23 = 0;
                var_78[var_419].Var24 = 0;
                var_78[var_419].Var25 = 0;
                var_78[var_419].Var26 = 0;
                var_78[var_419].Var27 = 0;
                var_78[var_419].Var28 = 0;
                var_78[var_419].Var29 = 0;
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "罪悪感で" + var_418 + " 奪われた！";
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                    yield func337();
                }
                var_199 = var_413;
            }
        }
        if (var_420 >= 1) {
            var_420 = var_420 - 1;
            if (var_420 == 0) {
                var_398 = 0;
                for (let cnt3 = 0; cnt3 < var_97 + 1; ++cnt3) {
                    if (var_83[cnt3][0] == 146 && var_83[cnt3][31] == 5) {
                        var_399 = var_83[cnt4][1];
                        var_400 = var_83[cnt4][2];
                        var_82[var_399][var_400] = 0;
                        var_83[cnt4][0] = 0;
                        var_83[cnt4][1] = 0;
                        var_83[cnt4][2] = 0;
                        var_83[cnt4][6] = 0;
                        var_83[cnt4][7] = 0;
                        var_83[cnt4][8] = 0;
                        var_83[cnt4][9] = 0;
                        var_83[cnt4][15] = 0;
                        var_83[cnt4][18] = 0;
                        var_398 = 1;
                    }
                }
                if (var_398 == 1) {
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "残像ﾁｬﾘｵｯﾂは消えた。";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                    var_240 = 0;
                    yield func331();
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337();
                    }
                }
            }
        }
        var_421 = 1;
        var_422 = 0;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            if (var_83[var_421].Var0 == 0 || var_83[var_421].Var0 == 50) {
                var_421++;
                continue;
            }
            if (var_151 >= 1 && var_421 != var_152) {
                var_421++;
                continue;
            }
            var_423 = var_83[var_421].Var1;
            var_424 = var_83[var_421].Var2;
            var_425 = var_423 - 1;
            var_426 = var_423 + 1;
            var_427 = var_424 + 1;
            var_428 = var_424 - 1;
            if (var_425 < 5) {
                var_425 = 5;
            }
            if (var_428 < 5) {
                var_428 = 5;
            }
            if (var_426 > var_33) {
                var_426 = var_33;
            }
            if (var_427 > var_34) {
                var_427 = var_34;
            }
            if (var_80[var_423][var_424] != 0) {
                yield func547();
            }
            if (var_83[var_421].Var18 == 0 && var_83[var_421].Var4 == 2 && var_83[var_421].Var9 == 0 && var_83[var_421].Var12 == 0 && var_83[var_421].Var13 == 0 && var_83[var_421].Var17 == 0 && var_83[var_421].Var23 == 0 && var_83[var_421].Var31 != 5 && var_83[var_421].Var0 != 164 && var_83[var_421].Var0 != 165) {
                var_429 = 0;
                if (var_82[var_425][var_424] != 0 && var_429 == 0) {
                    var_430 = var_82[var_425][var_424];
                    if (var_83[var_430].Var31 == 5) {
                        var_431 = var_66;
                        var_432 = var_67;
                        var_66 = var_83[var_430].Var1;
                        var_67 = var_83[var_430].Var2;
                        var_429 = 1;
                    }
                }
                if (var_82[var_426][var_424] != 0 && var_429 == 0) {
                    var_430 = var_82[var_426][var_424];
                    if (var_83[var_430].Var31 == 5) {
                        var_431 = var_66;
                        var_432 = var_67;
                        var_66 = var_83[var_430].Var1;
                        var_67 = var_83[var_430].Var2;
                        var_429 = 1;
                    }
                }
                if (var_82[var_423][var_427] != 0 && var_429 == 0) {
                    var_430 = var_82[var_423][var_427];
                    if (var_83[var_430].Var31 == 5) {
                        var_431 = var_66;
                        var_432 = var_67;
                        var_66 = var_83[var_430].Var1;
                        var_67 = var_83[var_430].Var2;
                        var_429 = 1;
                    }
                }
                if (var_82[var_423][var_428] != 0 && var_429 == 0) {
                    var_430 = var_82[var_423][var_428];
                    if (var_83[var_430].Var31 == 5) {
                        var_431 = var_66;
                        var_432 = var_67;
                        var_66 = var_83[var_430].Var1;
                        var_67 = var_83[var_430].Var2;
                        var_429 = 1;
                    }
                }
                if (var_82[var_425][var_427] != 0 && var_429 == 0) {
                    var_430 = var_82[var_425][var_427];
                    if (var_83[var_430].Var31 == 5) {
                        var_431 = var_66;
                        var_432 = var_67;
                        var_66 = var_83[var_430].Var1;
                        var_67 = var_83[var_430].Var2;
                        var_429 = 1;
                    }
                }
                if (var_82[var_426][var_427] != 0 && var_429 == 0) {
                    var_430 = var_82[var_426][var_427];
                    if (var_83[var_430].Var31 == 5) {
                        var_431 = var_66;
                        var_432 = var_67;
                        var_66 = var_83[var_430].Var1;
                        var_67 = var_83[var_430].Var2;
                        var_429 = 1;
                    }
                }
                if (var_82[var_425][var_428] != 0 && var_429 == 0) {
                    var_430 = var_82[var_425][var_428];
                    if (var_83[var_430].Var31 == 5) {
                        var_431 = var_66;
                        var_432 = var_67;
                        var_66 = var_83[var_430].Var1;
                        var_67 = var_83[var_430].Var2;
                        var_429 = 1;
                    }
                }
                if (var_82[var_426][var_428] != 0 && var_429 == 0) {
                    var_430 = var_82[var_426][var_428];
                    if (var_83[var_430].Var31 == 5) {
                        var_431 = var_66;
                        var_432 = var_67;
                        var_66 = var_83[var_430].Var1;
                        var_67 = var_83[var_430].Var2;
                        var_429 = 1;
                    }
                }
                var_433 = var_421;
                var_434 = var_83[var_433].Var1;
                var_435 = var_83[var_433].Var2;
                yield func704();
                if (var_429 == 1) {
                    var_66 = var_431;
                    var_67 = var_432;
                }
            }
            if (var_83[var_421].Var0 == 26 && var_83[var_421].Var20 == 0 && var_83[var_421].Var26 == 0 && var_83[var_421].Var6 == 0 && var_83[var_421].Var12 == 0 && var_83[var_421].Var13 == 0 && var_83[var_421].Var17 == 0 && var_83[var_421].Var23 == 0 && var_83[var_421].Var28 == 0 && var_97 < 90 && var_336 < 90) {
                var_436 = 0;
                if (var_201 != 14 && var_83[var_421].Var10 == var_201) {
                    yield func573();
                    var_436 = 1;
                }
                if (var_436 == 0 && var_83[var_421].Var10 == 14) {
                    yield func573();
                }
            }
            if (var_83[var_421].Var31 == 5 && var_367 == 1) {
                enemy_list = var_83[var_421].Var0;
                yield func626();
                if (var_83[var_421].Var39 >= 2) {
                    enemy_hp = Math.floor(enemy_hp * (var_83[var_421].Var39 + 10) / 10);
                    if (enemy_hp >= 999) {
                        enemy_hp = 999;
                    }
                }
                if (var_83[var_421].Var3 < enemy_hp) {
                    var_83[var_421].Var3 = var_83[var_421].Var3 + 1;
                }
            }
            if (var_83[var_421].Var12 >= 1 && var_83[var_421].Var12 < 99) {
                var_83[var_421].Var12 = var_83[var_421].Var12 - 1;
                if (var_83[var_421].Var12 == 1) {
                    var_83[var_421].Var12 = 99;
                }
            }
            if (var_83[var_421].Var13 > 0 && var_83[var_421].Var13 != 99) {
                var_83[var_421].Var13 = var_83[var_421].Var13 + 1;
                if (var_83[var_421].Var13 == 21) {
                    var_83[var_421].Var13 = 0;
                }
            }
            if (var_83[var_421].Var17 > 0) {
                var_83[var_421].Var17 = var_83[var_421].Var17 + 1;
                if (var_83[var_421].Var17 == 11) {
                    var_83[var_421].Var17 = 0;
                    var_83[var_421].Var4 = 3;
                }
            }
            if (var_83[var_421].Var23 > 0 && var_83[var_421].Var0 != 118) {
                var_83[var_421].Var23 = var_83[var_421].Var23 + 1;
                if (var_83[var_421].Var0 == 109 && var_83[var_421].Var29 == 1) {
                    var_83[var_421].Var23 = 1;
                }
                if (var_83[var_421].Var23 == 31) {
                    var_83[var_421].Var23 = 0;
                    var_83[var_421].Var4 = 3;
                }
            }
            if (var_83[var_421].Var14 > 0 && var_157 != 1) {
                var_83[var_421].Var14 = var_83[var_421].Var14 + 1;
                if (var_83[var_421].Var14 == 3) {
                    var_83[var_421].Var14 = 1;
                }
            }
            if (var_83[var_421].Var0 == 49) {
                if (var_83[var_421].Var29 < 10) {
                    var_83[var_421].Var29 = var_83[var_421].Var29 + 1;
                }
                if (var_83[var_421].Var29 == 10) {
                    var_240 = 0;
                    var_439 = var_83[var_421].Var0;
                    var_83[var_421].Var5 = 2;
                    var_440 = var_83[var_421].Var1;
                    var_441 = var_83[var_421].Var2;
                    var_442 = var_83[var_421].Var1;
                    var_443 = var_83[var_421].Var2;
                    var_83[var_421].Var11 = 1;
                    var_271 = 1;
                    var_444 = 25;
                    for (let cnt4 = 0; cnt4 < 25; ++cnt4) {
                        yield func337();
                        var_444 = var_444 - 1;
                    }
                    var_271 = 0;
                    var_444 = 0;
                    var_399 = var_83[var_421].Var1;
                    var_400 = var_83[var_421].Var2;
                    var_82[var_399][var_400] = 0;
                    var_83[var_421].Var0 = 0;
                    var_83[var_421].Var1 = 0;
                    var_83[var_421].Var2 = 0;
                    var_445 = 1;
                    yield func405();
                    var_445 = 0;
                    if (var_446 != 0) {
                        var_447 = var_448;
                        var_449 = var_450;
                        var_451 = 1;
                        var_452 = 1;
                        var_453 = 1;
                        var_454 = 1;
                        yield func384();
                        var_454 = 0;
                        var_451 = 0;
                        var_452 = 0;
                        var_453 = 0;
                    }
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "サーフィスは人形に戻った。";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                    var_240 = 0;
                    yield func331();
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337();
                    }
                }
            }
            if (var_83[var_421].Var24 >= 1) {
                var_83[var_421].Var24 = var_83[var_421].Var24 - 1;
                if (var_83[var_421].Var24 == 0) {
                    var_455 = var_83[var_421].Var1;
                    var_456 = var_83[var_421].Var2;
                    var_83[var_421].Var8 = 1;
                    yield func668();
                    var_83[var_421].Var8 = 0;
                }
            }
            var_421 = var_421 + 1;
        }
        if (var_262 == 0 && var_151 == 0) {
            yield func574();
        }
        return;
    });
}
function func021(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(21);
        var_178++;
        if (var_178 == 3) {
            var_217 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            comments_row1 = "ﾃﾞｨｱﾎﾞﾛは動けるようになった";
            var_178 = 0;
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            yield func009();
            return;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "…痺れていて動けない。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337();
        }
        var_217 = 1;
        yield func019();
        return;
    });
}
function func022(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(22);
        if (var_128 >= 1) {
            var_281 = var_66 - 1;
            if (var_281 < 0) {
                var_281 = 0;
            }
            var_282 = var_66 + 1;
            if (var_282 > var_33) {
                var_282 = var_33;
            }
            var_283 = var_67 - 1;
            if (var_283 < 0) {
                var_283 = 0;
            }
            var_284 = var_67 + 1;
            if (var_284 > var_34) {
                var_284 = var_34;
            }
            var_457 = 0;
            var_286 = 1;
            for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
                if (var_83[var_286].Var0 == 36 && var_83[var_286].Var1 >= var_281 && var_83[var_286].Var1 <= var_282 && var_83[var_286].Var2 >= var_283 && var_83[var_286].Var2 <= var_284) {
                    if (var_83[var_286].Var31 == 5 && var_83[var_286].Var23 == 0 && var_83[var_286].Var17 == 0 && var_83[var_286].Var12 == 0 && var_83[var_286].Var13 == 0) {
                        var_457 = 1;
                        break;
                    }
                }
                var_286 = var_286 + 1;
            }
            if (var_457 == 1) {
                var_83[var_286].Var3 = 1;
                yield func094();
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "極寒地にすむエスキモーはよお！";
                comments_row2 = "凍傷にかかった時！";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func340();
                yield func094();
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "アザラシの肉の体内に入って";
                comments_row2a = "治していたぜ！";
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                yield func340();
                yield func094();
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "これならどうだ――っ！！";
                comments_row2a = "";
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                yield func340();
                DSPLAY(audio_id = 175);
                var_458 = 1;
                var_271 = 1;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                    var_458++;
                }
                var_458 = 0;
                var_271 = 0;
                var_128 = 0;
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "ｽﾋﾟｰﾄﾞﾜｺﾞﾝの治療によって";
                comments_row2a = "ﾃﾞｨｱﾎﾞﾛは動けるようになった";
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                yield func340();
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "しかしｽﾋﾟｰﾄﾞﾜｺﾞﾝは";
                comments_row2a = "ひどく憔悴してしまったようだ…";
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
                yield func009();
                return;
            }
        }
        var_128++;
        if (var_128 == 10) {
            var_217 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            comments_row1 = "ﾃﾞｨｱﾎﾞﾛは動けるようになった";
            var_128 = 0;
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            yield func009();
            return;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "…凍っていて動けない。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337();
        }
        var_217 = 1;
        yield func019();
        return;
    });
}
function func023(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(23);
        var_459 = 0;
        if (var_459 == 0) {
            var_128 = 0;
        }
        return;
    });
}
function func024(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(24);
        var_459 = 0;
        if (var_459 == 0) {
            var_83[var_460].Var13 = 0;
        }
        return;
    });
}
function func025(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(25);
        var_219++;
        if (var_219 == 5) {
            var_217 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            comments_row1 = "ﾃﾞｨｱﾎﾞﾛは目を覚ました";
            var_219 = 0;
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            yield func009();
            return;
        }
        DSPLAY(audio_id = 132);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "…眠くて何もできない。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337();
        }
        var_217 = 1;
        yield func019();
        return;
    });
}
function func026(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(26);
        yield func080();
        if (var_253 == 1) {
            var_199 = 7;
        }
        if (var_254 == 1 && var_255 == 1) {
            var_199 = 7;
        }
        if (var_256 == 1) {
            var_199 = 9;
        }
        if (var_257 == 1 && var_255 == 1) {
            var_199 = 9;
        }
        if (var_258 == 1) {
            var_199 = 1;
        }
        if (var_254 == 1 && var_259 == 1) {
            var_199 = 1;
        }
        if (var_260 == 1) {
            var_199 = 3;
        }
        if (var_257 == 1 && var_259 == 1) {
            var_199 = 3;
        }
        if (var_254 == 1) {
            var_199 = 4;
        }
        if (var_257 == 1) {
            var_199 = 6;
        }
        if (var_255 == 1) {
            var_199 = 8;
        }
        if (var_259 == 1) {
            var_199 = 2;
        }
        if (var_116 == 0 && var_114 == 0) {
            var_461 = 0;
            var_462 = 0;
            yield func009();
            return;
        }
        if (var_66 != var_461 || var_67 != var_462) {
            var_115 = 0;
            var_116 = 0;
            var_114 = 0;
            var_461 = 0;
            var_462 = 0;
            yield func009();
            return;
        }
        if (var_83[var_114].Var0 == 0 && var_116 == 0) {
            var_114 = 0;
            var_461 = 0;
            var_462 = 0;
            yield func009();
            return;
        }
        if (var_83[var_114].Var0 != 0 && var_116 == 0) {
            if (var_83[var_114].Var1 != var_463 || var_83[var_114].Var2 != var_464) {
                var_114 = 0;
                var_461 = 0;
                var_462 = 0;
                yield func009();
                return;
            }
        }
        var_465 = var_66 - 1;
        if (var_465 < 0) {
            var_465 = 0;
        }
        var_466 = var_66 + 1;
        var_467 = var_67 + 1;
        var_468 = var_67 - 1;
        if (var_468 < 0) {
            var_468 = 0;
        }
        if (var_199 == 4) {
            if (var_71[var_465][var_67] == 0 || var_82[var_465][var_67] == 13 || var_82[var_465][var_67] >= 1) {
                yield func009();
                return;
            }
        }
        if (var_199 == 6) {
            if (var_71[var_466][var_67] == 0 || var_82[var_466][var_67] == 13 || var_82[var_466][var_67] >= 1) {
                yield func009();
                return;
            }
        }
        if (var_199 == 2) {
            if (var_71[var_66][var_467] == 0 || var_82[var_66][var_467] == 13 || var_82[var_66][var_467] >= 1) {
                yield func009();
                return;
            }
        }
        if (var_199 == 8) {
            if (var_71[var_66][var_468] == 0 || var_82[var_66][var_468] == 13 || var_82[var_66][var_468] >= 1) {
                yield func009();
                return;
            }
        }
        if (var_199 == 1) {
            if (var_71[var_465][var_467] == 0 || var_82[var_465][var_467] == 13 || var_82[var_465][var_467] >= 1) {
                yield func009();
                return;
            }
        }
        if (var_199 == 3) {
            if (var_71[var_466][var_467] == 0 || var_82[var_466][var_467] == 13 || var_82[var_466][var_467] >= 1) {
                yield func009();
                return;
            }
        }
        if (var_199 == 7) {
            if (var_71[var_465][var_468] == 0 || var_82[var_465][var_468] == 13 || var_82[var_465][var_468] >= 1) {
                yield func009();
                return;
            }
        }
        if (var_199 == 9) {
            if (var_71[var_466][var_468] == 0 || var_82[var_466][var_468] == 13 || var_82[var_466][var_468] >= 1) {
                yield func009();
                return;
            }
        }
        var_271 = 1;
        var_469 = 1;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        if (var_114 == 0) {
            comments_row1 = "固定されて動けない！";
        }
        if (var_114 >= 1) {
            comments_row1 = "つかまれていて動けない！";
        }
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
            var_469 = var_469 + 1;
        }
        var_271 = 0;
        var_469 = 0;
        var_217 = 1;
        yield func019();
        return;
    });
}
function func027(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(27);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "動けるようになった。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
        }
        return;
    });
}
function func028(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(28);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "透明状態ではなくなった";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
        }
        return;
    });
}
function func029(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(29);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "周囲がドロドロではなくなった";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
        }
        return;
    });
}
function func030(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(30);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "鈍足状態が治った";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
        }
        return;
    });
}
function func031(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(31);
        DSPLAY(audio_id = 123);
        var_470 = 19;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337();
        }
        var_470 = 9;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337();
        }
        var_470 = 8;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337();
        }
        var_470 = 7;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337();
        }
        var_470 = 6;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337();
        }
        var_470 = 5;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337();
        }
        var_470 = 4;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337();
        }
        var_470 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337();
        }
        var_470 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337();
        }
        var_470 = 1;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337();
        }
        var_470 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "変身が解除された";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
        }
        return;
    });
}
function func032(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(32);
        yield func080();
        if (var_242 == 1 || var_239 == 1 || var_244 == 1 || var_249 == 1) {
            var_218 = 0;
            yield func033();
            return;
        }
        if (var_218 == 51) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            comments_row1 = "意識が…　ヤバクなって来た…";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            yield func340();
            yield func051();
        }
        if (var_218 >= 51) {
            var_211 = var_211 - 1;
            if (var_211 <= 0) {
                var_211 = 0;
                var_356 = 283;
                return;
            }
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
                yield func080();
                if (var_242 == 1 || var_239 == 1 || var_244 == 1 || var_249 == 1) {
                    var_218 = 0;
                    yield func033();
                    break;
                }
            }
        }
        if (var_218 >= 51 && var_410 == 403 && var_211 == 2) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            comments_row1 = "ﾋﾟｽﾄﾙｽﾞ「早く【ジッパー】デ";
            comments_row2 = "　　　　体ヲ元ニ戻スンダ――――ッ！」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            yield func340();
            yield func051();
        }
        return;
    });
}
function func033(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(33);
        var_471 = 9;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337();
        }
        var_471 = 10;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337();
        }
        var_471 = 2;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337();
        }
        var_471 = 1;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "元通りくっついた";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
        }
        var_471 = 0;
        return;
    });
}
function func034(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(34);
        if (var_132 != 0) {
            return;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "盲目状態が治った";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
        }
        return;
    });
}
function func035(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(35);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "ンドゥールの気分が消えた";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
        }
        return;
    });
}
function func036(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(36);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "混乱状態が治った";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
        }
        return;
    });
}
function func037(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(37);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "冷静になった。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
        }
        return;
    });
}
function func038(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(38);
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
        }
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "ﾖｰﾖｰﾏｯ「もっとおおおおおお";
        comments_row2 = "　私を叱ってええええええ」";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            yield func337();
        }
        yield func340();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾖｰﾖｰﾏｯのあまりの臭さで";
        comments_row2a = "正気に戻った。";
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
        }
        return;
    });
}
function func039(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(39);
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "錠前のショックで";
        comments_row2 = "正気に戻った。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
        }
        return;
    });
}
function func040(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(40);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "鉄塔が消滅した。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
        }
        return;
    });
}
function func041(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(41);
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "ﾄﾞｯﾋﾟｵ「とぅるるるるるるるるるる」";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340();
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾄﾞｯﾋﾟｵ「ボスからの電話だッ！」";
        comments_row2a = "";
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340();
        var_144 = 91;
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾄﾞｯﾋﾟｵ「もしもし」";
        comments_row2a = "";
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340();
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾄﾞｯﾋﾟｵ「早く来てください！ボス！」";
        comments_row2a = "";
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾄﾞｯﾋﾟｵ「・・・・・・・・」";
        comments_row2a = "";
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340();
        var_192 = rnd(4);
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾄﾞｯﾋﾟｵ「わかりました！";
        if (var_192 == 0) {
            comments_row2a = "       １０ターン後ですねッ！」";
        }
        if (var_192 == 1) {
            comments_row2a = "       ２０ターン後ですねッ！」";
        }
        if (var_192 == 2) {
            comments_row2a = "       ３０ターン後ですねッ！」";
        }
        if (var_192 == 3) {
            comments_row2a = "   すぐ来てくれるんですねッ！」";
        }
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
        }
        var_144 = 92;
        return;
    });
}
function func042(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(42);
        var_472 = 1;
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            yield func337();
        }
        var_472 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "ﾄﾞｯﾋﾟｵと交代した。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        var_144 = 0;
        var_199 = 2;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
        }
        return;
    });
}
// おそらくメイド・イン・ヘブンを装備している際の「アイテムが朽ちていく効果」
function func043(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(43);
        var_473 = rnd(10);
        if (var_473 != 0) {
            return;
        }
        var_474 = 0;
        for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
            var_475 = rnd(var_224); // 持っているアイテムの中から乱数を使ってランダムで朽ちさせる？
            var_475 = var_475 + 1;
            if (var_476[var_475] == 0 && var_477[var_475] == 0 && var_478[var_475] == 0 && var_479[var_475] == 0) {
                var_474 = 1;
                break;
            }
        }
        if (var_474 == 0) {
            return;
        }
        var_480 = var_475;
        var_481 = 0;
        if (var_233[var_480].Var11 == 1) {
            item_list = var_233[var_480].Var0;
            yield func492(); // アイテムリスト呼び出し
            var_482 = 0;
            var_482 = (var_233[var_480].Var3 + var_233[var_480].Var4) * 50;
            if (var_233[var_480].Var0 != 800) {
                var_482 = var_233[var_480].Var7 * 100 + var_482;
            }
            if (var_233[var_480].Var19 > 1) {
                var_482 = var_233[var_480].Var19 * 500 + var_482;
            }
            var_481 = var_481 + buying_price + var_482;
            var_107 = var_107 + var_481;
        }
        if (var_233[var_480].Var0 >= 800 && var_233[var_480].Var0 < 900) {
            var_484 = 1;
            var_485 = var_233[var_480].Var6;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                if (var_486[var_485][var_484][0] > 0 && var_486[var_485][var_484][11] == 1) {
                    item_list = var_486[var_485][var_484][0];
                    yield func492(); // アイテムリスト呼び出し
                    var_482 = 0;
                    var_482 = (var_486[var_485][var_484][3] + var_486[var_485][var_484][4]) * 50;
                    if (var_486[var_485][var_484][19] > 1) {
                        var_482 = var_486[var_485][var_484][19] * 500 + var_482;
                    }
                    var_481 = var_481 + buying_price + var_482;
                    var_107 = var_107 + var_481;
                }
                var_484 = var_484 + 1;
            }
        }
        item_list = var_233[var_475].Var0;
        var_487 = var_233[var_475].Var13;
        var_488 = var_233[var_475].Var0;
        yield func492(); // アイテムリスト呼び出し
        var_418 = item_name;
        var_225 = var_475;
        yield func433();
        yield func100();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        comments_row1 = "" + var_418 + "は";
        comments_row2 = "朽ち果ててしまった…";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337();
        }
        return;
    });
}

function func044(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(44);
        var_490 = 1;
        yield func337();
        yield func080();
        if (var_261 == 0) {
            var_490 = 0;
            yield func009();
            return;
        }
        yield func044();
        return;
    });
}
function func045(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(45);
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor == 12 && var_203 == 0) {
            return;
        }
        if (dangeon_number == 2 && current_floor == 30) {
            return;
        }
        if (dangeon_number == 3 && current_floor == 99) {
            return;
        }
        if (dangeon_number == 5 && current_floor == var_20) {
            return;
        }
        for (let cnt1 = 0; true; ++cnt1) {
            var_491 = rnd(var_33);
            var_492 = rnd(var_34);
            if (var_491 >= 30 && var_491 <= 35 && var_492 >= 23 && var_492 <= 30) {
                continue;
            }
            if (var_71[var_491][var_492] != 0 && var_71[var_491][var_492] <= 12 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0 && var_77[var_491][var_492] == 0 && var_73[var_491][var_492] == 0) {
                break;
            }
            if (var_94 == 8 && var_71[var_491][var_492] == 14 && var_80[var_491][var_492] == 0 && var_77[var_491][var_492] == 0 && var_73[var_491][var_492] == 0) {
                break;
            }
        }
        if (var_94 == 5) {
            var_491 = 30;
            var_492 = 17;
        }
        if (var_94 == 9) {
            var_491 = 23;
            var_492 = 13;
        }
        var_73[var_491][var_492] = 1;
        var_200 = var_71[var_491][var_492];
        if (dangeon_number == 5 && current_floor != 1) {
            for (let cnt2 = 0; true; ++cnt2) {
                var_491 = rnd(var_33);
                var_492 = rnd(var_34);
                if (var_491 >= 30 && var_491 <= 35 && var_492 >= 23 && var_492 <= 30) {
                    continue;
                }
                if (var_71[var_491][var_492] != 0 && var_71[var_491][var_492] <= 12 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0 && var_77[var_491][var_492] == 0 && var_73[var_491][var_492] == 0) {
                    break;
                }
                if (var_94 == 8 && var_71[var_491][var_492] == 14 && var_80[var_491][var_492] == 0 && var_77[var_491][var_492] == 0 && var_73[var_491][var_492] == 0) {
                    break;
                }
            }
            var_73[var_491][var_492] = 2;
            var_202 = var_71[var_491][var_492];
        }
        return;
    });
}
function func046(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(46);
        for (let cnt1 = 0; true; ++cnt1) {
            var_491 = rnd(var_33);
            var_492 = rnd(var_34);
            if (var_493[1] == 1 && var_71[var_491][var_492] == 1 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                var_201 = 1;
                break;
            }
            if (var_493[2] == 1 && var_71[var_491][var_492] == 2 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                var_201 = 2;
                break;
            }
            if (var_493[3] == 1 && var_71[var_491][var_492] == 3 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                var_201 = 3;
                break;
            }
            if (var_493[4] == 1 && var_71[var_491][var_492] == 4 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                var_201 = 4;
                break;
            }
            if (var_493[5] == 1 && var_71[var_491][var_492] == 5 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                var_201 = 5;
                break;
            }
            if (var_493[6] == 1 && var_71[var_491][var_492] == 6 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                var_201 = 6;
                break;
            }
            if (var_493[7] == 1 && var_71[var_491][var_492] == 7 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                var_201 = 7;
                break;
            }
            if (var_493[8] == 1 && var_71[var_491][var_492] == 8 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                var_201 = 8;
                break;
            }
            if (var_493[9] == 1 && var_71[var_491][var_492] == 9 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                var_201 = 9;
                break;
            }
            if (var_493[10] == 1 && var_71[var_491][var_492] == 10 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                var_201 = 10;
                break;
            }
            if (var_493[11] == 1 && var_71[var_491][var_492] == 11 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                var_201 = 11;
                break;
            }
            if (var_493[12] == 1 && var_71[var_491][var_492] == 12 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                var_201 = 12;
                break;
            }
            if (var_94 == 8 && var_71[var_491][var_492] == 14 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0) {
                var_201 = 14;
                break;
            }
        }
        if (var_94 == 5) {
            var_491 = 19;
            var_492 = 17;
        }
        if (var_94 == 9) {
            var_491 = 21;
            var_492 = 16;
        }
        var_66 = var_491;
        var_67 = var_492;
        var_65[var_66][var_67] = 1;
        var_201 = var_71[var_66][var_67];
        var_74[var_66][var_67] = 2;
        var_75[var_201] = 1;
        if (var_94 != 8) {
            yield func017();
            yield func018();
            if (var_200 == var_201 && var_201 != 14) {
                var_98 = 1;
            }
            if (var_202 == var_201 && var_201 != 14) {
                var_99 = 1;
            }
        }
        return;
    });
}
function func047(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(47);
        var_494[39] = var_494[37];
        var_494[40] = var_494[38];
        var_494[37] = var_494[35];
        var_494[38] = var_494[36];
        var_494[35] = var_494[33];
        var_494[36] = var_494[34];
        var_494[33] = var_494[31];
        var_494[34] = var_494[32];
        var_494[31] = var_494[29];
        var_494[32] = var_494[30];
        var_494[29] = var_494[27];
        var_494[30] = var_494[28];
        var_494[27] = var_494[25];
        var_494[28] = var_494[26];
        var_494[25] = var_494[23];
        var_494[26] = var_494[24];
        var_494[23] = var_494[21];
        var_494[24] = var_494[22];
        var_494[21] = var_494[19];
        var_494[22] = var_494[20];
        var_494[19] = var_494[17];
        var_494[20] = var_494[18];
        var_494[17] = var_494[15];
        var_494[18] = var_494[16];
        var_494[15] = var_494[13];
        var_494[16] = var_494[14];
        var_494[13] = var_494[11];
        var_494[14] = var_494[12];
        var_494[11] = var_494[9];
        var_494[12] = var_494[10];
        var_494[9] = var_494[7];
        var_494[10] = var_494[8];
        var_494[7] = var_494[5];
        var_494[8] = var_494[6];
        var_494[5] = var_494[3];
        var_494[6] = var_494[4];
        var_494[3] = "";
        var_494[4] = "";
        var_494[3] = var_494[1];
        var_494[4] = var_494[2];
        var_495 = 1;
        var_494[1] = "";
        var_494[2] = "";
        if (comments_row1 != "" && comments_row1a == "" && comments_row2a == "") {
            var_494[var_495] = comments_row1;
            var_495++;
        }
        if (comments_row2 != "" && comments_row1a == "" && comments_row2a == "") {
            var_494[var_495] = comments_row2;
            var_495++;
        }
        if (var_295 != "") {
            var_494[var_495] = var_295;
            var_495++;
        }
        if (comments_row1a != "") {
            var_494[var_495] = comments_row1a;
            var_495++;
        }
        if (comments_row2a != "") {
            var_494[var_495] = comments_row2a;
            var_495++;
        }
        if (var_298 != "") {
            var_494[var_495] = var_298;
            var_495++;
        }
        if (var_407 == 1) {
            yield func902();
        }
        if (var_407 == 2) {
            yield func930();
        }
        return;
    });
}
function func048(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(48);
        if (var_195 == 1) {
            var_198 = 0;
            var_300 = 0;
            return;
        }
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(20, 250);
        gcopy(12, 0, 0, 40, 64);
        pos(60, 250);
        gcopy(12, 40, 0, 40, 64);
        pos(100, 250);
        gcopy(12, 80, 0, 40, 64);
        pos(140, 250);
        gcopy(12, 120, 0, 40, 64);
        pos(180, 250);
        gcopy(12, 160, 0, 40, 64);
        pos(220, 250);
        gcopy(12, 200, 0, 40, 64);
        pos(260, 250);
        gcopy(12, 240, 0, 40, 64);
        pos(300, 250);
        gcopy(12, 280, 0, 30, 64);
        color(255, 255, 255);
        line(23, 252, 325, 252);
        line(23, 312, 325, 312);
        line(22, 253, 22, 310);
        line(327, 253, 327, 310);
        pset(23, 253);
        pset(326, 253);
        pset(23, 311);
        pset(326, 311);
        yield func049();
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        if (var_299 == 0) {
            var_496 = 9;
        }
        if (var_299 == 1) {
            var_496 = 18;
        }
        if (var_299 == 2) {
            var_496 = 27;
        }
        if (var_299 == 3) {
            var_496 = 36;
        }
        if (var_299 == 4) {
            var_496 = 45;
        }
        if (var_299 == 5) {
            var_496 = 54;
        }
        if (var_299 == 6) {
            var_496 = 63;
        }
        pos(0, 252);
        gcopy(10, 0, var_496, 40, 60);
        pos(40, 252);
        gcopy(10, 40, var_496, 40, 60);
        pos(80, 252);
        gcopy(10, 80, var_496, 40, 60);
        pos(120, 252);
        gcopy(10, 120, var_496, 40, 60);
        pos(160, 252);
        gcopy(10, 160, var_496, 40, 60);
        pos(200, 252);
        gcopy(10, 200, var_496, 40, 60);
        pos(240, 252);
        gcopy(10, 240, var_496, 40, 60);
        pos(280, 252);
        gcopy(10, 280, var_496, 40, 60);
        pos(320, 252);
        gcopy(10, 320, var_496, 40, 60);
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        return;
    });
}


function func049(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(49);
        gsel(10);
        color(0, 0, 0);

        boxf(left = 0, top1 = 0, right = 340, bottom = 200);
        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
        pos(30, 0);

        color(var_25_x, var_26_x, var_27_x);
        mes("");
        mes(comments_row1);
        mes(comments_row2);
        mes(var_295);
        mes(comments_row1a);
        mes(comments_row2a);
        mes(var_298);
        gsel(0);
        return;
    });
}
function func050(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(50);
        var_299 = 0;
        yield func337();
        var_299 = 1;
        yield func337();
        var_299 = 2;
        yield func337();
        var_299 = 3;
        yield func337();
        var_299 = 4;
        yield func337();
        var_299 = 5;
        yield func337();
        return;
    });
}
function func051(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(51);
        for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
            yield func337();
            yield func080();
            if (var_242 == 0 && var_239 == 0 && var_244 == 0 && var_252 == 0 && var_249 == 0) {
                break;
            }
        }
        return;
    });
}
function func052(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(52);
        for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
            yield func337();
            yield func080();
            if (var_238 == 0) {
                break;
            }
        }
        return;
    });
}
function func053(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(53);
        yield func337();
        yield func080();
        if (var_239 == 1) {
            var_195 = 0;
            var_196 = 0;
            yield func009();
            return;
        }
        if (var_259 == 1 && var_248 == 1) {
            var_246 = 45 + 18;
            var_248 = 2;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func053();
            return;
        }
        if (var_259 == 1 && var_248 == 2) {
            yield func053();
            return;
        }
        if (var_255 == 1 && var_248 == 1) {
            yield func053();
            return;
        }
        if (var_255 == 1 && var_248 == 2) {
            var_246 = 45;
            var_248 = 1;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func053();
            return;
        }
        if (var_254 == 1 && var_247 == 2) {
            var_245 = 19;
            var_247 = 1;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func053();
            return;
        }
        if (var_254 == 1 && var_247 == 1) {
            yield func053();
            return;
        }
        if (var_257 == 1 && var_247 == 1) {
            var_245 = 19 + 48;
            var_247 = 2;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func053();
            return;
        }
        if (var_257 == 1 && var_247 == 2) {
            yield func053();
            return;
        }
        if (var_247 == 1 && var_248 == 1) {
            var_497 = 1;
        }
        if (var_247 == 1 && var_248 == 2) {
            var_497 = 2;
        }
        if (var_247 == 2 && var_248 == 1) {
            var_497 = 3;
        }
        if (var_247 == 2 && var_248 == 2) {
            var_497 = 4;
        }
        if (var_242 == 1 || var_244 == 1) {
            if (var_497 == 1) {
                var_195 = 0;
                var_196 = 0;
                var_227 = 1;
                var_228 = 45;
                var_225 = 1;
                var_223 = var_224 + 10;
                var_220 = 0;
                var_230 = 45;
                DSPLAY(audio_id = 212);
                yield func051();
                var_197 = 1;
                yield func461();
                return;
            }
            if (var_497 == 2) {
                var_195 = 0;
                var_196 = 0;
                DSPLAY(audio_id = 212);
                yield func051();
                yield func064();
                return;
            }
            if (var_497 == 3) {
                var_195 = 0;
                var_196 = 0;
                DSPLAY(audio_id = 212);
                yield func051();
                var_498 = 1;
                yield func380();
                return;
            }
            if (var_497 == 4) {
                var_195 = 0;
                var_196 = 0;
                var_499 = 1;
                var_500 = 0;
                var_245 = 19;
                var_246 = 45;
                DSPLAY(audio_id = 212);
                yield func051();
                yield func055();
                return;
            }
        }
        yield func053();
        return;
    });
}
function func054(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(54);
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(12, 37);
        gcopy(12, 0, 0, 123, 53);
        color(255, 255, 255);
        line(15, 39, 130, 39);
        line(15, 86, 130, 86);
        line(14, 40, 14, 84);
        line(132, 40, 132, 84);
        pset(15, 40);
        pset(131, 40);
        pset(15, 85);
        pset(131, 85);

        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
        color(255, 255, 255);
        pos(33, 47);
        mes("道具　状態");
        mes("足元　設定");
        color(255, 255, 255);

        font("MS ゴシック", 18, 1);
        pos(var_245, var_246);
        mes(">");
        pos(var_245 + 1, var_246);
        mes(">");
        pos(var_245 + 2, var_246);
        mes(">");
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        return;
    });
}
function func055(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(55);
        yield func337();
        yield func080();
        if (var_259 == 1 && var_500 == 4) {
            var_246 = 45;
            var_500 = 0;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func337();
            yield func055();
            return;
        }
        if (var_259 == 1 && var_500 == 3) {
            var_246 = var_246 + 16;
            var_500 = 4;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func337();
            yield func055();
            return;
        }
        if (var_259 == 1 && var_500 == 2) {
            var_246 = var_246 + 16;
            var_500 = 3;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func337();
            yield func055();
            return;
        }
        if (var_259 == 1 && var_500 == 1) {
            var_246 = var_246 + 16;
            var_500 = 2;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func337();
            yield func055();
            return;
        }
        if (var_259 == 1 && var_500 == 0) {
            var_246 = var_246 + 16;
            var_500 = 1;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func337();
            yield func055();
            return;
        }
        if (var_255 == 1 && var_500 == 0) {
            var_246 = 109;
            var_500 = 4;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func337();
            yield func055();
            return;
        }
        if (var_255 == 1 && var_500 == 1) {
            var_246 = var_246 - 16;
            var_500 = 0;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func337();
            yield func055();
            return;
        }
        if (var_255 == 1 && var_500 == 2) {
            var_246 = var_246 - 16;
            var_500 = 1;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func337();
            yield func055();
            return;
        }
        if (var_255 == 1 && var_500 == 3) {
            var_246 = var_246 - 16;
            var_500 = 2;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func337();
            yield func055();
            return;
        }
        if (var_255 == 1 && var_500 == 4) {
            var_246 = var_246 - 16;
            var_500 = 3;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func337();
            yield func055();
            return;
        }
        if (var_242 == 1 || var_244 == 1) {
            if (var_500 == 0 && var_501 == 0) {
                var_501 = 1;
                DSPLAY(audio_id = 212);
                yield func051();
                yield func337();
                yield func337();
                yield func337();
                yield func055();
                return;
            }
            if (var_500 == 0 && var_501 == 1) {
                var_501 = 0;
                DSPLAY(audio_id = 212);
                yield func051();
                yield func337();
                yield func337();
                yield func337();
                yield func055();
                return;
            }
            if (var_500 == 1) {
                DSPLAY(audio_id = 212);
                yield func051();
                var_499 = 0;
                var_502 = 6;
                var_503 = 1;
                var_504 = 2;
                yield func378();
                return;
            }
            if (var_500 == 2) {
                DSPLAY(audio_id = 212);
                var_505 = 0;
                var_506 = 19;
                var_507 = 45;
                yield func051();
                var_508 = 1;
                yield func057();
                return;
            }
            if (var_500 == 3) {
                DSPLAY(audio_id = 212);
                yield func051();
                var_509 = 1;
                yield func193();
                return;
            }
            if (var_500 == 4 && var_375 == 0) {
                DSPLAY(audio_id = 212);
                yield func051();
                var_499 = 0;
                yield func234();
                return;
            }
            if (var_500 == 4 && var_375 == 1) {
                DSPLAY(audio_id = 212);
                var_499 = 0;
                yield func051();
                yield func233();
                yield func880();
                return;
            }
        }
        if (var_239 == 1) {
            var_499 = 0;
            DSPLAY(audio_id = 212);
            yield func051();
            yield func009();
            return;
        }
        yield func055();
        return;
    });
}
function func056(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(56);
        var_510 = 25;
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(12, 37);
        gcopy(12, 0, 0, 113, 130 - var_510);
        color(255, 255, 255);
        if (var_508 == 1 || var_509 == 1 || var_511 >= 1) {
            color(150, 150, 150);
        }
        line(15, 39, 120, 39);
        line(15, 164 - var_510, 120, 164 - var_510);
        line(14, 40, 14, 162 - var_510);
        line(122, 40, 122, 162 - var_510);
        pset(15, 40);
        pset(121, 40);
        pset(15, 163 - var_510);
        pset(121, 163 - var_510);

        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
        pos(33, 47);
        color(255, 255, 255);
        if (var_508 == 1 || var_509 == 1 || var_511 >= 1) {
            color(150, 150, 150);
        }
        if (var_501 == 0) {
            mes("マップ ON ");
        }
        if (var_501 == 1) {
            mes("マップ OFF");
        }
        color(255, 255, 255);
        if (var_508 == 1 || var_509 == 1 || var_511 >= 1) {
            color(150, 150, 150);
        }
        mes("履歴");
        color(255, 255, 255);
        if (var_508 == 1 || var_509 == 1 || var_511 >= 1) {
            color(150, 150, 150);
        }
        mes("資料");
        color(255, 255, 255);
        if (var_508 == 1 || var_509 == 1 || var_511 >= 1) {
            color(150, 150, 150);
        }
        mes("システム");
        color(255, 255, 255);
        if (var_508 == 1 || var_509 == 1 || var_511 >= 1) {
            color(150, 150, 150);
        }
        if (var_375 == 0) {
            mes("終了");
        }
        if (var_375 == 1) {
            mes("ギブアップ");
        }
        color(255, 255, 255);
        if (var_512 >= 1) {
            color(150, 150, 150);
        }
        if (var_508 == 1 || var_509 == 1 || var_511 >= 1) {
            color(150, 150, 150);
        }

        font("MS ゴシック", 16, 1);
        pos(var_245, var_246);
        mes(">");
        pos(var_245 + 1, var_246);
        mes(">");
        pos(var_245 + 2, var_246);
        mes(">");
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        return;
    });
}
function func057(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(57);
        yield func337();
        yield func080();
        if (var_259 == 1 && var_505 == 3) {
            var_507 = 45;
            var_505 = 0;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func337();
            yield func057();
            return;
        }
        if (var_259 == 1 && var_505 == 2) {
            var_507 = var_507 + 16;
            var_505 = 3;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func337();
            yield func057();
            return;
        }
        if (var_259 == 1 && var_505 == 1) {
            var_507 = var_507 + 16;
            var_505 = 2;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func337();
            yield func057();
            return;
        }
        if (var_259 == 1 && var_505 == 0) {
            var_507 = var_507 + 16;
            var_505 = 1;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func337();
            yield func057();
            return;
        }
        if (var_255 == 1 && var_505 == 0) {
            var_507 = 93;
            var_505 = 3;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func337();
            yield func057();
            return;
        }
        if (var_255 == 1 && var_505 == 1) {
            var_507 = var_507 - 16;
            var_505 = 0;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func337();
            yield func057();
            return;
        }
        if (var_255 == 1 && var_505 == 2) {
            var_507 = var_507 - 16;
            var_505 = 1;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func337();
            yield func057();
            return;
        }
        if (var_255 == 1 && var_505 == 3) {
            var_507 = var_507 - 16;
            var_505 = 2;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
            yield func337();
            yield func057();
            return;
        }
        if (var_242 == 1 || var_244 == 1) {
            if (var_505 == 0 && var_375 == 0) {
                DSPLAY(audio_id = 212);
                yield func051();
                var_512 = 1;
                var_513 = 1;
                var_514 = 0;
                var_515 = 131;
                var_516 = 88;
                yield func820();
                return;
            }
            if (var_505 == 1 && var_375 == 0) {
                DSPLAY(audio_id = 212);
                yield func051();
                var_508 = 0;
                var_499 = 0;
                var_502 = 5;
                yield func375();
                return;
            }
            if (var_505 == 2 && var_375 == 0) {
                DSPLAY(audio_id = 212);
                yield func051();
                var_508 = 0;
                var_499 = 0;
                var_502 = 3;
                yield func371();
                return;
            }
            if (var_505 == 3 && var_375 == 0) {
                DSPLAY(audio_id = 212);
                yield func051();
                yield func357();
                return;
            }
        }
        if (var_239 == 1) {
            var_508 = 0;
            DSPLAY(audio_id = 212);
            var_499 = 1;
            yield func051();
            yield func055();
            return;
        }
        yield func057();
        return;
    });
}
function func058(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(58);
        var_510 = 45;
        var_517 = 60;
        var_518 = 25;
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(12 + var_517, 37 + var_518);
        gcopy(12, 0, 0, 113, 130 - var_510);
        color(255, 255, 255);
        if (var_512 == 1 || var_511 >= 1) {
            color(150, 150, 150);
        }
        line(15 + var_517, 39 + var_518, 120 + var_517, 39 + var_518);
        line(15 + var_517, 164 - var_510 + var_518, 120 + var_517, 164 - var_510 + var_518);
        line(14 + var_517, 40 + var_518, 14 + var_517, 162 - var_510 + var_518);
        line(122 + var_517, 40 + var_518, 122 + var_517, 162 - var_510 + var_518);
        pset(15 + var_517, 40 + var_518);
        pset(121 + var_517, 40 + var_518);
        pset(15 + var_517, 163 - var_510 + var_518);
        pset(121 + var_517, 163 - var_510 + var_518);

        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
        pos(33 + var_517, 47 + var_518);
        color(255, 255, 255);
        if (var_375 == 1 || var_512 == 1 || var_511 >= 1) {
            color(150, 150, 150);
        }
        mes("ハイスコア");
        color(255, 255, 255);
        if (var_375 == 1 || var_512 == 1 || var_511 >= 1) {
            color(150, 150, 150);
        }
        mes("コミックス");
        color(255, 255, 255);
        if (var_375 == 1 || var_512 == 1 || var_511 >= 1) {
            color(150, 150, 150);
        }
        mes("死因リスト");
        color(255, 255, 255);
        if (var_375 == 1 || var_512 == 1 || var_511 >= 1) {
            color(150, 150, 150);
        }
        mes("敵図鑑");
        color(255, 255, 255);
        if (var_512 == 1 || var_511 >= 1) {
            color(150, 150, 150);
        }

        font("MS ゴシック", 16, 1);
        pos(var_506 + var_517, var_507 + var_518);
        mes(">");
        pos(var_506 + 1 + var_517, var_507 + var_518);
        mes(">");
        pos(var_506 + 2 + var_517, var_507 + var_518);
        mes(">");
        if (var_512 == 1) {
            var_519 = 112;
            var_520 = 43;
            var_521 = 40;
            var_522 = 0;
            if (var_523 >= 1) {
                var_522++;
            }
            if (var_524 >= 1) {
                var_522++;
            }
            var_525 = 90;
            if (var_404 >= 1) {
                var_525 = 70;
            }
            if (var_526 >= 1) {
                var_525 = 56;
            }
            if (var_522 == 1) {
                var_525 = 34;
            }
            if (var_522 == 2) {
                var_525 = 28;
            }
            color(0, 0, 0);

            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(12 + var_519, 37 + var_520);
            gcopy(12, 0, 0, 213, 88 - var_525 + var_521);
            color(255, 255, 255);
            line(15 + var_519, 39 + var_520, 220 + var_519, 39 + var_520);
            line(15 + var_519, 121 + var_520 - var_525 + var_521, 220 + var_519, 121 + var_520 - var_525 + var_521);
            line(14 + var_519, 40 + var_520, 14 + var_519, 119 + var_520 - var_525 + var_521);
            line(222 + var_519, 40 + var_520, 222 + var_519, 119 + var_520 - var_525 + var_521);
            pset(15 + var_519, 40 + var_520);
            pset(221 + var_519, 40 + var_520);
            pset(15 + var_519, 120 + var_520 - var_525 + var_521);
            pset(221 + var_519, 120 + var_520 - var_525 + var_521);
    
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            color(255, 255, 255);
            pos(33 + var_519, 47 + var_520);
            mes("ホテルの外");
            if (var_404 >= 1) {
                mes("レクイエムの大迷宮");
            }
            if (var_526 >= 1) {
                mes("ディアボロの試練");
            }
            if (var_524 >= 1) {
                mes("" + var_21);
            }
            if (var_523 >= 1) {
                mes("一巡後の世界");
            }
            color(255, 255, 255);
    
            font("MS ゴシック", 16, 1);
            pos(var_515, var_516);
            mes(">");
            pos(var_515 + 1, var_516);
            mes(">");
            pos(var_515 + 2, var_516);
            mes(">");
        }
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        return;
    });
}
function func059(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(59);
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor == 12 && var_203 == 1) {
            var_94 = 1;
        }
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor == 12 && var_203 == 2) {
            var_94 = 3;
        }
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor == 12 && var_203 == 3) {
            var_94 = 2;
        }
        return;
    });
}
function func060(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(60);
        yield func337();
        yield func080();
        if (var_259 == 1 && var_406 == 1) {
            var_246 = var_246 + 19;
            var_406 = 0;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
        }
        if (var_255 == 1 && var_406 == 0) {
            var_246 = var_246 - 19;
            var_406 = 1;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337();
            yield func337();
        }
        if (var_242 == 1 || var_244 == 1) {
            if (var_406 == 1) {
                var_405 = 0;
                var_344 = 0;
                DSPLAY(audio_id = 212);
                var_527 = 0;
                var_528 = 1;
                for (let cnt3 = 0; cnt3 < var_97; ++cnt3) {
                    if (var_83[var_528].Var0 == 29 && var_83[var_528].Var10 == var_201 && var_201 != 14 && var_83[var_528].Var20 == 0 && var_83[var_528].Var12 == 0 && var_83[var_528].Var13 == 0 && var_83[var_528].Var17 == 0 && var_83[var_528].Var23 == 0) {
                        if (var_215 != 206 && var_215 != 108 && var_130 != 1) {
                            var_527 = 1;
                        }
                        if (var_73[var_66][var_67] == 2) {
                            var_527 = 0;
                        }
                    }
                    if (var_83[var_528].Var0 == 113 && var_83[var_528].Var10 == var_201 && var_201 != 14 && var_83[var_528].Var20 == 0 && var_83[var_528].Var12 == 0 && var_83[var_528].Var13 == 0 && var_83[var_528].Var17 == 0 && var_83[var_528].Var23 == 0) {
                        if (var_215 != 100 && var_215 != 111 && var_215 != 398) {
                            var_527 = 2;
                        }
                    }
                    var_528 = var_528 + 1;
                }
                if (dangeon_number == 1 && current_floor == 12) {
                    var_527 = 0;
                }
                if (dangeon_number == 2 && current_floor == 30) {
                    var_527 = 0;
                }
                if (dangeon_number == 3 && current_floor == 99) {
                    var_527 = 0;
                }
                if (dangeon_number == 5 && current_floor == var_20) {
                    var_527 = 0;
                }
                if (var_527 == 1) {
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ｸﾞﾘｰﾝ･ﾃﾞｨが同じ部屋にいるぞ";
                    comments_row2 = "このままでは降りられないぞ";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                    gsel(19);
                    color(10, 100, 10);
    
                    boxf(left = 0, top1 = 0, right = 340, bottom = 340);
                    gsel(0);
                    var_529 = 1;
                    for (let cnt4 = 0; cnt4 < 20; ++cnt4) {
                        yield func337();
                    }
                    var_529 = 0;
                    yield func009();
                    return;
                }
                if (var_527 == 2) {
                    var_373 = 5;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 4;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 3;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 2;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 1;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337();
                    }
                    DSPLAY(audio_id = 101); // 階段を昇るor降りる時の効果音
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 0;
                    if (var_199 == 2) {
                        var_530 = 8;
                    }
                    if (var_199 == 8) {
                        var_530 = 2;
                    }
                    if (var_199 == 4) {
                        var_530 = 6;
                    }
                    if (var_199 == 6) {
                        var_530 = 4;
                    }
                    if (var_199 == 1) {
                        var_530 = 9;
                    }
                    if (var_199 == 3) {
                        var_530 = 7;
                    }
                    if (var_199 == 7) {
                        var_530 = 3;
                    }
                    if (var_199 == 9) {
                        var_530 = 1;
                    }
                    var_199 = var_530;
                    DSPLAY(audio_id = 185);
                    var_271 = 1;
                    var_531 = 1;
                    for (let cnt4 = 0; cnt4 < 20; ++cnt4) {
                        yield func337();
                        var_531++;
                    }
                    var_271 = 0;
                    var_531 = 0;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337();
                    }
                    yield func094();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "「ありのまま起こったことを話すぜ！」";
                    comments_row2 = "";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                    yield func340();
                    yield func094();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "「おれは階段を降りたと思ったら";
                    comments_row2a = "　いつの間にか上っていた」";
                    if (var_73[var_66][var_67] == 2) {
                        comments_row1a = "「おれは階段を上ったと思ったら";
                        comments_row2a = "　いつの間にか降りていた」";
                    }
                    yield func050();
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337();
                    }
                    yield func009();
                    return;
                }
                if (var_114 >= 1) {
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "掴まれていて降りられない！";
                    if (var_73[var_66][var_67] == 2) {
                        comments_row1 = "掴まれていて上れない！";
                    }
                    comments_row2 = "";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                    for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                        yield func337();
                    }
                    yield func009();
                    return;
                }
                // No = 1 なので、ホテルの外
                if (dangeon_number == 1 && current_floor == 12) {
                    var_373 = 5;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 4;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 3;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 2;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 1;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 0;
                    var_94 = 0;
                    if (var_404 == 0) {
                        var_207 = 3;
                    }
                    var_532 = 1;
                    var_356 = 301;
                    if (var_203 == 1) {
                        var_356 = 321;
                    }
                    if (var_203 == 2) {
                        var_356 = 322;
                    }
                    if (var_203 == 3) {
                        var_356 = 325;
                    }
                    var_533 = 50000;
                    if (var_404 == 0) {
                        var_404 = 1;
                    }
                    if (var_407 == 2) {
                        var_534++;
                        yield func929();
                    }
                    yield func173();
                    return;
                }
                if (dangeon_number == 2 && current_floor == 30) {
                    var_373 = 5;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 4;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 3;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 2;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 1;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 0;
                    var_94 = 0;
                    var_532 = 1;
                    var_356 = 302;
                    var_533 = 100000;
                    if (var_526 == 0) {
                        var_526 = 1;
                        var_207 = 6;
                    }
                    if (var_535 == 1 && var_536 == 0) {
                        var_356 = 312;
                        var_533 = 200000;
                        if (var_526 < 2) {
                            var_526 = 2;
                        }
                        var_11 = 1;
        
                        bsave(file_name = "00.dat", data = var_11, data_size = null, offset = 80)
                    }
                    if (var_407 == 2) {
                        var_534++;
                        yield func929();
                    }
                    yield func173();
                    return;
                }
                if (dangeon_number == 3 && current_floor == 99) {
                    var_373 = 5;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 4;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 3;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 2;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 1;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 0;
                    var_94 = 0;
                    var_532 = 1;
                    var_356 = 303;
                    var_533 = 1000000;
                    if (var_537 == 0) {
                        var_537 = 1;
                    }
                    if (var_407 == 2) {
                        var_534++;
                        yield func929();
                    }
                    yield func173();
                    return;
                }
                if (dangeon_number == 5 && current_floor == var_20 && var_73[var_66][var_67] == 1) {
                    var_373 = 5;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 4;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 3;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 2;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 1;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 0;
                    var_94 = 0;
                    var_532 = 1;
                    var_356 = 314;
                    var_533 = 1000000;
                    if (var_538 == 0) {
                        var_538 = 1;
                    }
                    if (var_407 == 2) {
                        var_534++;
                        yield func929();
                    }
                    yield func173();
                    return;
                }
                DSPLAY(audio_id = 101); // 階段を昇るor降りる時の効果音
                if (var_375 == 1) {
                    var_373 = 5;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 4;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 3;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 2;
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 1;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337();
                    }
                    var_373 = 0;
                    var_94 = 0;
                    var_539 = 1;
                    yield func233();
                    yield func880();
                    return;
                }
                yield func061();
                var_373 = 5;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337();
                }
                var_373 = 4;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337();
                }
                var_373 = 3;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337();
                }
                var_373 = 2;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337();
                }
                var_373 = 1;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
                var_373 = 0;
                if (var_73[var_66][var_67] == 1) {
                    current_floor = current_floor + 1;
                    if (current_floor > var_376) {
                        var_376 = current_floor;
                    }
                    // No = 1 なので、ホテルの外
                    if (dangeon_number == 1 && current_floor > var_377) {
                        var_377 = current_floor;
                    }
                    if (dangeon_number == 2 && current_floor > var_378) {
                        var_378 = current_floor;
                    }
                    if (dangeon_number == 3 && current_floor > var_379) {
                        var_379 = current_floor;
                    }
                    if (dangeon_number == 4 && current_floor > var_380) {
                        var_380 = current_floor;
                    }
                    if (dangeon_number == 5 && current_floor > var_381) {
                        var_381 = current_floor;
                    }
                }
                if (var_73[var_66][var_67] == 2) {
                    current_floor = current_floor - 1;
                }
                var_94 = 0;
                yield func059();
                var_205 = 1;
                yield func231();
                if (var_407 == 1) {
                    yield func904();
                }
                if (var_407 == 2) {
                    yield func932();
                }
                yield func076();
                for (let cnt3 = 0; cnt3 < 80; ++cnt3) {
                    yield func339();
                }
                yield func006();
                return;
            }
        }
        if (var_242 == 1 || var_244 == 1) {
            if (var_406 == 0) {
                var_405 = 0;
                DSPLAY(audio_id = 212);
                yield func051();
                yield func009();
                return;
            }
        }
        if (var_239 == 1) {
            var_405 = 0;
            DSPLAY(audio_id = 212);
            yield func051();
            yield func009();
            return;
        }
        yield func060();
        return;
    });
}
function func061(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(61);
        var_540 = dim(length1= 10, length2 = 30, length3 = null, length4 = null);
        var_281 = var_66 - 4;
        if (var_281 < 0) {
            var_281 = 0;
        }
        var_282 = var_66 + 4;
        if (var_282 > var_33) {
            var_282 = var_33;
        }
        var_283 = var_67 - 4;
        if (var_283 < 0) {
            var_283 = 0;
        }
        var_284 = var_67 + 4;
        if (var_284 > var_34) {
            var_284 = var_34;
        }
        var_541 = 0;
        var_286 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            var_542 = 0;
            if (var_83[var_286].Var0 == 36 || var_83[var_286].Var0 == 105 || var_83[var_286].Var0 == 106 || var_83[var_286].Var0 == 107 || var_83[var_286].Var0 == 108) {
                if (var_83[var_286].Var31 == 5 && var_83[var_286].Var1 > var_281 && var_83[var_286].Var1 < var_282 && var_83[var_286].Var2 > var_283 && var_83[var_286].Var2 < var_284) {
                    var_542 = 1;
                }
                if (var_83[var_286].Var31 == 5 && var_83[var_286].Var10 == var_201 && var_83[var_286].Var10 != 14) {
                    var_542 = 1;
                }
                if (var_542 == 1) {
                    var_541++;
                    var_540[var_541][0] = var_83[var_286].Var0;
                    var_540[var_541][3] = var_83[var_286].Var3;
                    var_540[var_541][4] = var_83[var_286].Var39;
                    var_540[var_541][5] = var_83[var_286].Var16;
                }
                if (var_541 == 8) {
                    break;
                }
            }
            var_286 = var_286 + 1;
        }
        return;
    });
}

// ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加
// これがアイテム追加の基本プログラムだと思われる。
function func062(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(62);
        var_224 = var_224 + 1;
        var_233[var_224].Var0 = 602; // アイテム「ネアポリスのピッツァ」(item_list = 602)を追加
        return;
    });
}

// ダンジョン内の階段機能
function func063(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(63);
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(12, 37);
        if (var_262 == 0) {
            gcopy(12, 0, 0, 113, 53);
        }
        if (var_262 == 1) {
            gcopy(12, 0, 0, 203, 113);
        }
        if (var_262 == 0) {
            color(255, 255, 255);
            line(15, 39, 120, 39);
            line(15, 86, 120, 86);
            line(14, 40, 14, 84);
            line(122, 40, 122, 84);
            pset(15, 40);
            pset(121, 40);
            pset(15, 85);
            pset(121, 85);
        }
        if (var_262 == 1) {
            color(255, 255, 255);
            line(15, 39, 210, 39);
            line(15, 146, 210, 146);
            line(14, 40, 14, 144);
            line(212, 40, 212, 144);
            pset(15, 40);
            pset(211, 40);
            pset(15, 145);
            pset(211, 145);
        }

        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
        color(255, 255, 255);
        pos(33, 47);
        if (var_262 == 0) {
            if (var_73[var_66][var_67] == 1) {
                var_543 = 0;
                // No = 1 なので、ホテルの外
                if (dangeon_number == 1 && current_floor == 12) {
                    var_543 = 1;
                }
                if (dangeon_number == 2 && current_floor == 30) {
                    var_543 = 1;
                }
                if (dangeon_number == 3 && current_floor == 99) {
                    var_543 = 1;
                }
                if (dangeon_number == 5 && current_floor == var_20) {
                    var_543 = 1;
                }
                if (var_543 == 0) {
                    mes("降りる");
                }
                if (var_543 == 1) {
                    mes("のぼる");
                }
                mes("そのまま");
            }
            if (var_73[var_66][var_67] == 2) {
                mes("のぼる");
                mes("そのまま");
            }
        }
        color(255, 255, 255);

        font("MS ゴシック", 16, 1);
        pos(var_245, var_246);
        mes(">");
        pos(var_245 + 1, var_246);
        mes(">");
        pos(var_245 + 2, var_246);
        mes(">");
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        return;
    });
}
function func064(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(64);
        var_544 = 0;
        if (dangeon_number == 0 && var_66 == 15 && var_67 == 21) {
            yield func065();
            return;
        }
        if (dangeon_number == 0 && var_404 >= 1 && var_66 == 17 && var_67 == 9) {
            yield func826();
            return;
        }
        if (var_77[var_66][var_67] > 0) {
            var_227 = 3;
            var_228 = 45;
            var_225 = 0;
            var_197 = 1;
            yield func478();
            yield func461();
            return;
        }
        if (var_80[var_66][var_67] > 0) {
            var_544 = 1;
            var_343 = 1;
            var_545 = 1;
            yield func541();
            var_545 = 0;
            if (var_382 == 1) {
                var_382 = 0;
                yield func009();
                return;
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_73[var_66][var_67] >= 1) {
            var_544 = 1;
            var_405 = 1;
            var_245 = 19;
            var_246 = 45;
            var_406 = 1;
            yield func060();
            return;
        }
        if (var_544 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "特に何も無いようだ";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
        }
        yield func009();
        return;
    });
}

function func065(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(65);
        yield func066();
    });
}
// 亀の倉庫のジッパー関連機能
function func066(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(66);
        // 持っているアイテムの数が0の時
        if (var_224 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "足元にジッパーが付いている。";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func009();
            return;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "持ち物全てをジッパーに捨てますか？";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340();
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_547 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}

// 亀のジッパーでアイテムを捨てる動作関数
function func067(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(67);
        var_549 = var_550;
        var_551 = 0;
        var_552 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func426();
            yield func427();
            yield func428();
            yield func429();
            if (var_233[var_552].Var0 != 0 && var_552 != var_553 && var_552 != var_554 && var_552 != var_555 && var_552 != var_556) {
                item_list = var_233[var_552].Var0;
                yield func492(); // アイテムリスト呼び出し
                var_550 = var_550 + buying_price;
                var_225 = var_552;
                yield func433();
                var_551 = 1;
                cnt1 = -1;
                continue;
            }
            var_552++;
        }
        // アイテムを持っているが、装備している状態で捨てられない場合
        if (var_551 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "捨てられるものがない。";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            yield func009();
            return;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "全て捨てた。";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        DSPLAY(audio_id = 148);

        // 亀の倉庫 成長計算式
        var_557 = 1;
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            yield func337();
            var_557++;
        }
        var_557 = 0;
        if (var_550 > 999999) {
            var_550 = 999999;
        }
        var_558 = 0;
        // Var_559は亀の成長レベル(拡張レベル)、var_550は投資した栄養の合計
        if (var_559 == 0 && var_550 >= 5000) {
            var_559 = 1;
            var_558 = 1;
        }
        if (var_559 == 1 && var_550 >= 10000) {
            var_559 = 2;
            var_558 = 1;
        }
        if (var_559 == 2 && var_550 >= 20000) {
            var_559 = 3;
            var_558 = 1;
        }
        if (var_559 == 3 && var_550 >= 40000) {
            var_559 = 4;
            var_558 = 1;
        }
        if (var_558 == 1) {
            yield func293();
            var_560 = 1;
            var_561 = 5;
            var_562 = 5;
            if (var_559 == 0) {
                yield func288();
            }
            if (var_559 == 1) {
                yield func289();
            }
            if (var_559 == 2) {
                yield func290();
            }
            if (var_559 == 3) {
                yield func291();
            }
            if (var_559 == 4) {
                yield func292();
            }
            yield func248();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "亀はアイテムを養分として";
            comments_row2a = "成長したようだ。";
            if (var_559 == 4) {
                comments_row1a = "亀はアイテムを養分として";
                comments_row2a = "最大まで成長したようだ。";
            }
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
        }
        yield func009();
        return;
    });
}
function func068(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(68);
        var_564 = 50;
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(20, 250 - var_564);
        gcopy(12, 0, 0, 310, 65 + var_564);
        color(255, 255, 255);
        line(23, 252 - var_564, 325, 252 - var_564);
        line(23, 312, 325, 312);
        line(22, 253 - var_564, 22, 310);
        line(327, 253 - var_564, 327, 310);
        pset(23, 253 - var_564);
        pset(326, 253 - var_564);
        pset(23, 311);
        pset(326, 311);
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);

        font("ＭＳ Ｐゴシック", 18, 1);
        pos(40, 255);
        color(255, 255, 255);
        mes("");
        mes("精神力");
        mes("最深階");
        pos(110, 255);
        color(255, 255, 255);
        mes("");
        mes("" + var_565 + "/" + var_566);
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1) {
            mes("" + var_377 + "階");
        }
        if (dangeon_number == 2) {
            mes("" + var_378 + "階");
        }
        if (dangeon_number == 3) {
            mes("" + var_379 + "階");
        }
        if (dangeon_number == 4) {
            mes("" + var_380 + "階");
        }
        if (dangeon_number == 5) {
            mes("" + var_381 + "階");
        }
        if (dangeon_number != 1 && dangeon_number != 2 && dangeon_number != 3 && dangeon_number != 4 && dangeon_number != 5) {
            mes("- 階");
        }
        pos(175, 255);
        color(255, 255, 255);
        mes("");
        mes("満腹度");
        mes("経験値");
        pos(255, 255);
        color(255, 255, 255);
        mes("");
        mes("" + var_350 + "/" + var_567);
        mes(var_568);
        return;
    });
}

// 現在装備しているdisc表示欄の設定？
function func069(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(69);
        var_569 = 0;
        if (var_410 != 0) {
            yield func429();
            var_569 = var_233[var_556].Var3;
        }
        if (var_357 != 0) {
            yield func426();
            var_570 = var_233[var_553].Var13;
        }
        if (var_358 != 0) {
            yield func427();
            var_571 = var_233[var_554].Var13;
        }
        if (var_215 != 0) {
            yield func428();
            var_572 = var_233[var_555].Var13;
        }
        var_573 = 15;
        var_574 = 45;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            color(255, 255, 255);
            line(23 + var_573, 252 - var_574, 85 + var_573, 252 - var_574);
            line(23 + var_573, 312 - var_574, 85 + var_573, 312 - var_574);
            line(22 + var_573, 253 - var_574, 22 + var_573, 310 - var_574);
            line(87 + var_573, 253 - var_574, 87 + var_573, 310 - var_574);
            pset(23 + var_573, 253 - var_574);
            pset(86 + var_573, 253 - var_574);
            pset(23 + var_573, 311 - var_574);
            pset(86 + var_573, 311 - var_574);
            var_573 = var_573 + 70;
        }
        var_573 = 15;
        var_574 = 45;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            font("ＭＳ Ｐゴシック", 18, 1);
            color(255, 255, 255);
            var_575 = 0;
            if (cnt1 == 0) {
                var_575 = var_357;
                pos(35 + var_573, 256 - var_574);
                color(255, 255, 0);
                mes("攻撃");
            }
            if (cnt1 == 1) {
                var_575 = var_358;
                pos(35 + var_573, 256 - var_574);
                color(255, 180, 90);
                mes("防御");
            }
            if (cnt1 == 2) {
                var_575 = var_215;
                pos(35 + var_573, 256 - var_574);
                color(240, 0, 240);
                mes("能力");
            }
            if (cnt1 == 3) {
                var_575 = var_410;
                pos(35 + var_573, 256 - var_574);
                color(225, 195, 145);
                mes("射撃");
            }
            yield func070();
            if (var_575 != 0) {
                pos(23 + var_573 + 10, 250 + 20 - var_574);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                if (var_575 < 400) {
                    if (cnt1 == 0) {
                        if (var_570 == 0) {
                            var_576 = 11;
                        }
                        if (var_570 == 1) {
                            var_576 = 1;
                        }
                        if (var_570 == 2) {
                            var_576 = 16;
                        }
                        if (var_570 == 3) {
                            var_576 = 29;
                        }
                    }
                    if (cnt1 == 1) {
                        if (var_571 == 0) {
                            var_576 = 11;
                        }
                        if (var_571 == 1) {
                            var_576 = 1;
                        }
                        if (var_571 == 2) {
                            var_576 = 16;
                        }
                        if (var_571 == 3) {
                            var_576 = 29;
                        }
                    }
                    if (cnt1 == 2) {
                        if (var_572 == 0) {
                            var_576 = 11;
                        }
                        if (var_572 == 1) {
                            var_576 = 1;
                        }
                        if (var_572 == 2) {
                            var_576 = 16;
                        }
                        if (var_572 == 3) {
                            var_576 = 29;
                        }
                    }
                }
                gcopy(var_576, var_577, var_578, 40, 40);
            }
    
            font("ＭＳ Ｐゴシック", 18, 1);
            var_579 = 0;
            if (cnt1 == 0 && var_580 < 10) {
                var_579 = 5;
            }
            if (cnt1 == 1 && var_581 < 10) {
                var_579 = 5;
            }
            if (cnt1 == 3 && var_569 < 10) {
                var_579 = 5;
            }
            if (cnt1 == 0 && var_580 > 99) {
                var_579 = -10;
            }
            if (cnt1 == 1 && var_581 > 99) {
                var_579 = -10;
            }
            color(1, 1, 1);
            pos(35 + var_573 + 30 + 1 + var_579, 253 - var_574 + 40);
            if (cnt1 == 0) {
                mes(var_580);
            }
            if (cnt1 == 1) {
                mes(var_581);
            }
            if (cnt1 == 3 && var_569 != 0) {
                mes(var_569);
            }
            pos(35 + var_573 + 30 - 1 + var_579, 253 - var_574 + 40);
            if (cnt1 == 0) {
                mes(var_580);
            }
            if (cnt1 == 1) {
                mes(var_581);
            }
            if (cnt1 == 3 && var_569 != 0) {
                mes(var_569);
            }
            pos(35 + var_573 + 30 + var_579, 253 - var_574 + 40 + 1);
            if (cnt1 == 0) {
                mes(var_580);
            }
            if (cnt1 == 1) {
                mes(var_581);
            }
            if (cnt1 == 3 && var_569 != 0) {
                mes(var_569);
            }
            pos(35 + var_573 + 30 + var_579, 253 - var_574 + 40 - 1);
            if (cnt1 == 0) {
                mes(var_580);
            }
            if (cnt1 == 1) {
                mes(var_581);
            }
            if (cnt1 == 3 && var_569 != 0) {
                mes(var_569);
            }
            color(0, 255, 0);
            pos(35 + var_573 + 30 + var_579, 253 - var_574 + 40);
            if (cnt1 == 0) {
                mes(var_580);
            }
            if (cnt1 == 1) {
                mes(var_581);
            }
            if (cnt1 == 3 && var_569 != 0) {
                mes(var_569);
            }
            var_573 = var_573 + 70;
        }
        return;
    });
}
function func070(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(70);
        var_576 = 11;
        if (var_575 == 100) {
            var_577 = 80;
            var_578 = 200;
        }
        if (var_575 == 101) {
            var_577 = 80;
            var_578 = 160;
        }
        if (var_575 == 102) {
            var_577 = 80;
            var_578 = 120;
        }
        if (var_575 == 103) {
            var_577 = 80;
            var_578 = 80;
        }
        if (var_575 == 104) {
            var_577 = 80;
            var_578 = 240;
        }
        if (var_575 == 105) {
            var_577 = 80;
            var_578 = 360;
        }
        if (var_575 == 106) {
            var_577 = 80;
            var_578 = 320;
        }
        if (var_575 == 107) {
            var_577 = 80;
            var_578 = 280;
        }
        if (var_575 == 108 || var_575 == 110) {
            var_577 = 80;
            var_578 = 440;
        }
        if (var_575 == 109) {
            var_577 = 80;
            var_578 = 480;
        }
        if (var_575 == 111) {
            var_577 = 80;
            var_578 = 520;
        }
        if (var_575 == 112) {
            var_577 = 80;
            var_578 = 560;
        }
        if (var_575 == 113) {
            var_577 = 80;
            var_578 = 600;
        }
        if (var_575 == 114) {
            var_577 = 80;
            var_578 = 640;
        }
        if (var_575 == 115) {
            var_577 = 80;
            var_578 = 680;
        }
        if (var_575 == 116) {
            var_577 = 560;
            var_578 = 720;
        }
        if (var_575 == 117) {
            var_577 = 80;
            var_578 = 880;
        }
        if (var_575 == 118) {
            var_577 = 80;
            var_578 = 920;
        }
        if (var_575 == 119) {
            var_577 = 80;
            var_578 = 1000;
        }
        if (var_575 == 120) {
            var_577 = 80;
            var_578 = 1040;
        }
        if (var_575 == 121) {
            var_577 = 80;
            var_578 = 1080;
        }
        if (var_575 == 122) {
            var_577 = 1040;
            var_578 = 120;
        }
        if (var_575 == 123) {
            var_577 = 40;
            var_578 = 1280;
        }
        if (var_575 == 124) {
            var_577 = 80;
            var_578 = 1320;
        }
        if (var_575 == 200) {
            var_577 = 1040;
            var_578 = 80;
        }
        if (var_575 == 201) {
            var_577 = 1000;
            var_578 = 1360;
        }
        if (var_575 == 202) {
            var_577 = 1240;
            var_578 = 120;
        }
        if (var_575 == 203) {
            var_577 = 80;
            var_578 = 1440;
        }
        if (var_575 == 204) {
            var_577 = 480;
            var_578 = 2000;
        }
        if (var_575 == 205) {
            var_577 = 80;
            var_578 = 1200;
        }
        if (var_575 == 206) {
            var_577 = 1160;
            var_578 = 120;
        }
        if (var_575 == 207) {
            var_577 = 80;
            var_578 = 1240;
        }
        if (var_575 == 300) {
            var_577 = 1040;
            var_578 = 160;
        }
        if (var_575 == 301) {
            var_577 = 0;
            var_578 = 1920;
        }
        if (var_575 == 302) {
            var_577 = 1120;
            var_578 = 160;
        }
        if (var_575 == 303) {
            var_577 = 1160;
            var_578 = 160;
        }
        if (var_575 == 304) {
            var_577 = 80;
            var_578 = 1400;
        }
        if (var_575 == 305) {
            var_577 = 80;
            var_578 = 2160;
        }
        if (var_575 == 306) {
            var_577 = 1040;
            var_578 = 200;
        }
        if (var_575 == 307) {
            var_577 = 80;
            var_578 = 1520;
        }
        if (var_575 == 308) {
            var_577 = 0;
            var_578 = 1880;
        }
        if (var_575 == 309) {
            var_577 = 80;
            var_578 = 2040;
        }
        if (var_575 == 310) {
            var_577 = 1200;
            var_578 = 200;
        }
        if (var_575 == 311) {
            var_577 = 1120;
            var_578 = 80;
        }
        if (var_575 == 312) {
            var_577 = 480;
            var_578 = 1960;
        }
        if (var_575 == 313) {
            var_577 = 80;
            var_578 = 1560;
        }
        if (var_575 == 314) {
            var_577 = 1120;
            var_578 = 120;
        }
        if (var_575 == 315) {
            var_577 = 1160;
            var_578 = 240;
        }
        if (var_575 == 316) {
            var_577 = 1080;
            var_578 = 160;
        }
        if (var_575 == 317) {
            var_577 = 80;
            var_578 = 1640;
        }
        if (var_575 == 318) {
            var_577 = 80;
            var_578 = 1680;
        }
        if (var_575 == 319) {
            var_577 = 80;
            var_578 = 1720;
        }
        if (var_575 == 320) {
            var_577 = 1080;
            var_578 = 200;
        }
        if (var_575 == 321) {
            var_577 = 1160;
            var_578 = 200;
        }
        if (var_575 == 393) {
            var_577 = 1200;
            var_578 = 120;
        }
        if (var_575 == 394) {
            var_577 = 80;
            var_578 = 760;
        }
        if (var_575 == 395) {
            var_577 = 1120;
            var_578 = 240;
        }
        if (var_575 == 396) {
            var_577 = 1080;
            var_578 = 120;
        }
        if (var_575 == 397) {
            var_577 = 80;
            var_578 = 1840;
        }
        if (var_575 == 398) {
            var_577 = 80;
            var_578 = 1600;
        }
        if (var_575 == 399) {
            var_577 = 80;
            var_578 = 1480;
        }
        if (var_575 == 400) {
            var_577 = 40;
            var_578 = 400;
            var_576 = 34;
        }
        if (var_575 == 401) {
            var_577 = 640;
            var_578 = 200;
            var_576 = 34;
        }
        if (var_575 == 402) {
            var_577 = 640;
            var_578 = 0;
            var_576 = 34;
        }
        if (var_575 == 403) {
            var_577 = 480;
            var_578 = 560;
            var_576 = 34;
        }
        if (var_575 == 404) {
            var_577 = 160;
            var_578 = 520;
            var_576 = 34;
        }
        if (var_575 == 405) {
            var_577 = 480;
            var_578 = 1040;
            var_576 = 21;
        }
        if (var_575 == 406) {
            var_577 = 480;
            var_578 = 1080;
            var_576 = 21;
        }
        if (var_575 == 407) {
            var_577 = 40;
            var_578 = 400;
            var_576 = 34;
        }
        if (var_575 == 408) {
            var_577 = 1000;
            var_578 = 440;
            var_576 = 3;
        }
        if (var_575 == 409) {
            var_577 = 480;
            var_578 = 520;
            var_576 = 6;
        }
        if (var_575 == 410) {
            var_577 = 320;
            var_578 = 1080;
            var_576 = 34;
        }
        if (var_575 == 411) {
            var_577 = 320;
            var_578 = 1120;
            var_576 = 34;
        }
        if (var_575 == 412) {
            var_577 = 720;
            var_578 = 520;
            var_576 = 3;
        }
        if (var_575 == 413) {
            var_577 = 960;
            var_578 = 1960;
            var_576 = 15;
        }
        if (var_575 == 414) {
            var_577 = 1480;
            var_578 = 1240;
            var_576 = 34;
        }
        return;
    });
}

// 満腹度機能
function func071(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(71);
        if (var_361 <= 3) {
            DSPLAY(audio_id = 129);
        }
        var_240 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        if (var_361 == 1) {
            comments_row1 = "お腹が減ってきた…";
        }
        if (var_361 == 2) {
            comments_row1 = "ハラペコで目が回ってきた…";
        }
        if (var_361 == 3) {
            comments_row1 = "だめだ！　もう倒れそうだ！";
        }
        if (var_361 == 4) {
            comments_row1 = "早く…　何か食べないと…";
        }
        if (var_361 == 5) {
            comments_row1 = "飢え死にしてしまう！";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337();
        }
        return;
    });
}


// ダンジョンに長居し過ぎた際の神砂嵐
function func072(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(72);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "神砂嵐だ！！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        if (var_112 == 1000) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "真空状態の圧倒的破壊空間は";
            comments_row2a = "まさに歯車的砂嵐の小宇宙！";
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
        }
        var_582 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            var_83[var_582].Var8 = 1;
            var_83[var_582].Var12 = 0;
            var_582 = var_582 + 1;
        }
        yield func073();
        if (var_112 == 700 || var_112 == 1000) {
            var_389 = 2;
            if (var_144 != 0) {
                var_389 = 0;
            }
        }
        if (var_112 == 850 && var_144 == 0) {
            var_583 = 1;
        }
        var_271 = 1;
        var_584 = 1;
        if (var_112 == 700) {
            DSPLAY(audio_id = 144);
        }
        if (var_112 == 850) {
            DSPLAY(audio_id = 145);
        }
        if (var_112 == 1000) {
            DSPLAY(audio_id = 146);
        }
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            var_585 = 1;
            if (var_112 == 1000) {
                var_199 = 2;
            }
            yield func337();
            var_585 = 0;
            if (var_112 == 1000) {
                var_199 = 4;
            }
            yield func337();
            var_585 = 1;
            if (var_112 == 1000) {
                var_199 = 8;
            }
            yield func337();
            var_585 = 0;
            if (var_112 == 1000) {
                var_199 = 6;
            }
            yield func337();
        }
        var_271 = 0;
        var_584 = 0;
        var_389 = 0;
        if (var_112 == 1000) {
            var_389 = 2;
            var_199 = 2;
            if (var_144 != 0) {
                var_389 = 0;
            }
        }
        var_583 = 0;
        var_582 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            var_83[var_582].Var8 = 0;
            var_582 = var_582 + 1;
        }
        if (var_112 == 700 || var_112 == 850) {
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            if (var_112 == 700) {
                comments_row1a = "…風は収まったようだ";
            }
            if (var_112 == 850) {
                comments_row1a = "…さっきより強いぞ";
            }
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
        }
        if (var_112 == 1000) {
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
            }
            var_586 = 1;
            var_271 = 1;
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                yield func337();
                var_586 = var_586 + 1;
                if (cnt2 == 4 || cnt2 == 6 || cnt2 == 8) {
                    var_585 = 3;
                }
                if (cnt2 == 5 || cnt2 == 7 || cnt2 == 9) {
                    var_585 = 0;
                }
                if (var_586 == 4) {
                    DSPLAY(audio_id = 138);
                }
            }
            var_585 = 0;
            var_389 = 0;
            var_211 = 0;
            var_356 = 210;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
        }
        if (var_112 >= 710) {
            var_101 = 1;
            var_102 = 1;
            var_103 = 1;
        }
        yield func331();
        return;
    });
}
function func073(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(73);
        var_587 = dim(length1= 110, length2 = 6, length3 = null, length4 = null);
        for (let cnt1 = 0; cnt1 < 100; ++cnt1) {
            if (var_112 == 700) {
                var_588 = rnd(1);
            }
            if (var_112 == 850) {
                var_588 = rnd(2);
            }
            if (var_112 == 1000) {
                var_588 = rnd(3);
            }
            var_589 = rnd(1000);
            var_590 = rnd(400);
            var_591 = rnd(4);
            var_592 = rnd(30);
            var_593 = rnd(10);
            var_587[cnt1][0] = var_588;
            var_587[cnt1][1] = 360 + var_589;
            var_587[cnt1][2] = 100 - var_590;
            var_587[cnt1][3] = var_591;
            var_587[cnt1][4] = var_592 + 20;
            var_587[cnt1][5] = var_593 + 5;
        }
        return;
    });
}

// モンスターハウス設定
function func074(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(74);
        var_101 = 1;
        yield func331();
        var_390 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            var_83[var_390].Var12 = 0;
            if (var_96 == 8 && var_83[var_390].Var10 == var_201 && var_83[var_390].Var31 != 5) {
                var_83[var_390].Var17 = 1;
            }
            var_390 = var_390 + 1;
        }
        DSPLAY(audio_id = 150);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        if (var_96 == 1) {
            comments_row1 = "モンスターハウスだ！";
            yield func132();
        }
        if (var_96 == 2) {
            comments_row1 = "ﾊﾞｯﾄﾞ･ｶﾝﾊﾟﾆｰ･ﾊｳｽ だ！";
            yield func130();
        }
        if (var_96 == 3) {
            comments_row1 = "ﾊｲｳｪｲｽﾀｰ･ﾙｰﾑ だ！";
            yield func131();
        }
        if (var_96 == 4) {
            comments_row1 = "吸血鬼ハウスだ！";
            yield func132();
        }
        if (var_96 == 5) {
            comments_row1 = "スタンドハウスだ！";
            yield func132();
        }
        if (var_96 == 6) {
            comments_row1 = "杜王町ハウスだ！";
            yield func129();
        }
        if (var_96 == 7) {
            comments_row1 = "水族館だ！";
            yield func133();
        }
        if (var_96 == 8) {
            comments_row1 = "ファイトクラブだッ！";
            yield func134();
        }
        if (var_96 == 9) {
            comments_row1 = "西戸ハウスだ！";
            yield func132();
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 25; ++cnt1) {
            yield func337();
        }
        var_96 = 0;
        return;
    });
}

// 特別な階層
function func075(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(75);
        var_271 = 1;
        var_594 = 1;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor == 12) {
            comments_row1 = "注意せよ！ この階は";
            comments_row2 = "「エンヤ婆」によって守られている！";
        }
        if (dangeon_number == 2 && current_floor == 30) {
            comments_row1 = "注意せよ！ この階は";
            comments_row2 = "「ﾚｸｲｴﾑ･ｼﾞｮﾙﾉ」によって守られている！";
        }
        if (dangeon_number == 3 && current_floor == 99) {
            comments_row1 = "注意せよ！ この階は";
            comments_row2 = "「ウンガロ」によって守られている！";
        }
        if (dangeon_number == 5 && current_floor == var_20) {
            comments_row1 = "注意せよ！ この階は";
            comments_row2 = "「" + var_24 + "」によって守られている！";
        }
        if (var_94 == 1) {
            comments_row1 = "注意せよ！ この階は";
            comments_row2 = "「虹村形兆」によって守られている！";
        }
        if (var_94 == 2) {
            comments_row1 = "注意せよ！ この階は";
            comments_row2 = "「チリペッパー」によって守られている！";
        }
        if (var_94 == 3) {
            comments_row1 = "注意せよ！ この階は";
            comments_row2 = "「吉良吉影」によって守られている！";
        }
        if (var_94 == 4) {
            comments_row1 = "注意せよ！ この階は";
            comments_row2 = "「承太郎」によって守られている！";
        }
        if (var_94 == 5) {
            comments_row1 = "注意せよ！ この階は";
            comments_row2 = "「毒グモ」によって守られている！";
        }
        if (var_94 == 6) {
            comments_row1 = "注意せよ！ この階は";
            comments_row2 = "「サンタナ」によって守られている！";
        }
        if (var_94 == 7) {
            comments_row1 = "広大な砂漠だ！";
            comments_row2 = "";
        }
        if (var_94 == 8) {
            comments_row1 = "幻覚の迷宮だ！";
            comments_row2 = "";
        }
        if (var_94 == 9) {
            comments_row1 = "注意せよ！ この階は";
            comments_row2 = "「エンポリオ」によって守られている！";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        DSPLAY(audio_id = 178);
        for (let cnt1 = 0; cnt1 < 40; ++cnt1) {
            yield func337();
            var_594 = var_594 + 1;
            var_198 = 1;
            var_300 = 0;
        }
        var_271 = 0;
        var_594 = 0;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337();
        }
        return;
    });
}
function func076(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(76);
        redraw(2);
        color(1, 1, 1);
        boxf(left = 0, top1 = 0, right = 360, bottom = 360);
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        pos(0, 100);
        if (var_94 == 0) {
            if (dangeon_number == 0) {
                if (var_595 == 0) {
                    gcopy(34, 640, 760, 340, 40);
                }
                if (var_595 == 1) {
                    gcopy(34, 640, 720, 340, 40);
                }
                if (var_595 == 3) {
                    gcopy(34, 640, 1200, 340, 40);
                }
            }
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1) {
                if (current_floor <= 2) {
                    gcopy(34, 640, 440, 340, 40);
                }
                if (current_floor >= 3 && current_floor <= 5) {
                    gcopy(34, 640, 480, 340, 40);
                }
                if (current_floor >= 6 && current_floor <= 8) {
                    gcopy(34, 640, 600, 340, 40);
                }
                if (current_floor >= 9 && current_floor <= 11) {
                    gcopy(34, 640, 640, 340, 40);
                }
                if (current_floor == 12) {
                    gcopy(34, 640, 400, 340, 40);
                }
            }
            if (dangeon_number == 2) {
                if (current_floor != 30) {
                    gcopy(34, 640, 560, 340, 40);
                }
                if (current_floor == 30) {
                    gcopy(34, 640, 880, 340, 40);
                }
            }
            if (dangeon_number == 3) {
                if (current_floor != 99) {
                    gcopy(34, 640, 520, 340, 40);
                }
                if (current_floor == 99) {
                    gcopy(34, 640, 1160, 340, 40);
                }
            }
            if (dangeon_number == 4) {
                gcopy(34, 640, 800, 340, 40);
            }
            if (dangeon_number == 5) {
                if (current_floor != var_20) {
                    gcopy(34, 640, 1040, 340, 40);
                }
                if (current_floor == var_20) {
                    gcopy(34, 1000, 760, 340, 40);
                }
            }
            if (dangeon_number == 99) {
                gcopy(34, 640, 960, 340, 40);
            }
        }
        if (var_94 == 1) {
            gcopy(34, 640, 840, 340, 40);
        }
        if (var_94 == 2) {
            gcopy(34, 640, 1000, 340, 40);
        }
        if (var_94 == 3) {
            gcopy(34, 640, 680, 340, 40);
        }
        if (var_94 == 7) {
            gcopy(34, 640, 1080, 340, 40);
        }
        if (var_94 == 8) {
            gcopy(34, 640, 1120, 340, 40);
        }
        if (var_94 == 9) {
            gcopy(34, 640, 920, 340, 40);
        }
        if (dangeon_number != 0 && dangeon_number != 99 && var_94 == 0) {
            var_596 = Math.floor(current_floor / 100); // Math.floor は対象の値の小数点以下を切り捨て
            var_597 = Math.floor((current_floor - var_596 * 100) / 10); // Math.floor は対象の値の小数点以下を切り捨て
            var_598 = current_floor - var_596 * 100 - var_597 * 10;
            var_596 = var_596 * 20 + 640;
            var_597 = var_597 * 20 + 640;
            var_598 = var_598 * 20 + 640;
            if (var_597 == 640 && current_floor < 100) {
                var_597 = 1600;
            }
            if (var_596 == 640) {
                var_596 = 1600;
            }
            pos(90, 160);
            if (current_floor >= 100) {
                pos(70, 160);
            }
            gcopy(34, 880, 80, 80, 40);
            pos(220, 160);
            gcopy(34, 880, 120, 40, 40);
            pos(150, 160);
            gcopy(34, var_596, 80, 20, 40);
            pos(170, 160);
            gcopy(34, var_597, 80, 20, 40);
            pos(190, 160);
            if (var_597 == 400) {
                pos(180, 160);
            }
            gcopy(34, var_598, 80, 20, 40);
        }
        if (var_10 >= 1) {
            yield func338();
        }
        redraw(1);
        return;
    });
}
function func077(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(77);
        if (var_599 == 0) {
            pos(0, 0);

            gmode(mode = 4, data2 = null, data3 = null, alpha = 255);
            gcopy(8, 400, 350, 340, 340);
        }
        if (var_599 == 1) {
            pos(0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
            gcopy(8, 400, 350, 340, 340);
        }
        if (var_599 == 2) {
            pos(0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 160);
            gcopy(8, 400, 350, 340, 340);
        }
        if (var_599 == 3) {
            pos(0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 80);
            gcopy(8, 400, 350, 340, 340);
        }
        if (var_599 == 4) {
            pos(0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 40);
            gcopy(8, 400, 350, 340, 340);
        }
        if (var_599 == 5) {
            pos(0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 20);
            gcopy(8, 400, 350, 340, 340);
        }
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        pos(0, 100);
        if (var_94 == 0) {
            if (dangeon_number == 0) {
                if (var_595 == 0) {
                    gcopy(34, 640, 760, 340, 40);
                }
                if (var_595 == 1) {
                    gcopy(34, 640, 720, 340, 40);
                }
                if (var_595 == 3) {
                    gcopy(34, 640, 1200, 340, 40);
                }
            }
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1) {
                if (current_floor <= 2) {
                    gcopy(34, 640, 440, 340, 40);
                }
                if (current_floor >= 3 && current_floor <= 5) {
                    gcopy(34, 640, 480, 340, 40);
                }
                if (current_floor >= 6 && current_floor <= 8) {
                    gcopy(34, 640, 600, 340, 40);
                }
                if (current_floor >= 9 && current_floor <= 11) {
                    gcopy(34, 640, 640, 340, 40);
                }
                if (current_floor == 12) {
                    gcopy(34, 640, 400, 340, 40);
                }
            }
            if (dangeon_number == 2) {
                if (current_floor != 30) {
                    gcopy(34, 640, 560, 340, 40);
                }
                if (current_floor == 30) {
                    gcopy(34, 640, 880, 340, 40);
                }
            }
            if (dangeon_number == 3) {
                if (current_floor != 99) {
                    gcopy(34, 640, 520, 340, 40);
                }
                if (current_floor == 99) {
                    gcopy(34, 640, 1160, 340, 40);
                }
            }
            if (dangeon_number == 4) {
                gcopy(34, 640, 800, 340, 40);
            }
            if (dangeon_number == 5) {
                if (current_floor != var_20) {
                    gcopy(34, 640, 1040, 340, 40);
                }
                if (current_floor == var_20) {
                    gcopy(34, 1000, 760, 340, 40);
                }
            }
            if (dangeon_number == 99) {
                gcopy(34, 640, 960, 340, 40);
            }
        }
        if (var_94 == 1) {
            gcopy(34, 640, 840, 340, 40);
        }
        if (var_94 == 2) {
            gcopy(34, 640, 1000, 340, 40);
        }
        if (var_94 == 3) {
            gcopy(34, 640, 680, 340, 40);
        }
        if (var_94 == 7) {
            gcopy(34, 640, 1080, 340, 40);
        }
        if (var_94 == 8) {
            gcopy(34, 640, 1120, 340, 40);
        }
        if (var_94 == 9) {
            gcopy(34, 640, 920, 340, 40);
        }
        if (dangeon_number != 0 && dangeon_number != 99 && var_94 == 0) {
            var_596 = Math.floor(current_floor / 100); // Math.floor は対象の値の小数点以下を切り捨て
            var_597 = Math.floor((current_floor - var_596 * 100) / 10); // Math.floor は対象の値の小数点以下を切り捨て
            var_598 = current_floor - var_596 * 100 - var_597 * 10;
            var_596 = var_596 * 20 + 640;
            var_597 = var_597 * 20 + 640;
            var_598 = var_598 * 20 + 640;
            if (var_597 == 640 && current_floor < 100) {
                var_597 = 1600;
            }
            if (var_596 == 640) {
                var_596 = 1600;
            }
            pos(90, 160);
            if (current_floor >= 100) {
                pos(70, 160);
            }
            gcopy(34, 880, 80, 80, 40);
            pos(220, 160);
            gcopy(34, 880, 120, 40, 40);
            pos(150, 160);
            gcopy(34, var_596, 80, 20, 40);
            pos(170, 160);
            gcopy(34, var_597, 80, 20, 40);
            pos(190, 160);
            if (var_597 == 400) {
                pos(180, 160);
            }
            gcopy(34, var_598, 80, 20, 40);
        }
        return;
    });
}
function func078(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(78);
        if (var_373 == 1) {
            pos(0, 0);

            gmode(mode = 4, data2 = null, data3 = null, alpha = 255);
            gcopy(8, 400, 350, 340, 340);
        }
        if (var_373 == 2) {
            pos(0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
            gcopy(8, 400, 350, 340, 340);
        }
        if (var_373 == 3) {
            pos(0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 160);
            gcopy(8, 400, 350, 340, 340);
        }
        if (var_373 == 4) {
            pos(0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 110);
            gcopy(8, 400, 350, 340, 340);
        }
        if (var_373 == 5) {
            pos(0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 80);
            gcopy(8, 400, 350, 340, 340);
        }
        if (var_373 == 6) {
            pos(0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            gcopy(8, 400, 350, 340, 340);
        }
        if (var_600 >= 1) {
            color(255, 255, 255);
    
            font("ＭＳ 明朝", 36, 1);
            pos(160, 150);
            mes("完");
        }
        return;
    });
}

// ドッピオ化した際の設定
function func079(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(79);
        yield func080();
        conf_keyon = getkey(81);
        if (conf_keyon == 1 && var_238 == 1) {
            yield func236();
            return;
        }
        if (var_139 == 10 || var_139 == 20 || var_139 == 30 || var_139 == 40) {
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            if (var_139 == 10) {
                if (var_601 == 0) {
                    comments_row1 = "「このヘアースタイルが";
                    comments_row2 = "　チンケな髪だとォ？」";
                }
                if (var_601 == 1) {
                    comments_row1 = "「このヘアースタイルが";
                    comments_row2 = "　サザエさんみてェーだとォ？」";
                }
                if (var_601 == 2) {
                    comments_row1 = "「このヘアースタイルが";
                    comments_row2 = "　くだらねーだとォ？」";
                }
                if (var_601 == 3) {
                    comments_row1 = "「このヘアースタイルが";
                    comments_row2 = "　古くさいセンスだとォ？」";
                }
            }
            if (var_139 == 20) {
                comments_row1 = "「たしかに聞いたぞ";
                comments_row2 = "　コラ―――――――ッ！」";
            }
            if (var_139 == 30) {
                comments_row1 = "「どこ隠れやがったあ――――";
                comments_row2 = "　スッタコがぁ～～～～ッ」";
            }
            if (var_139 == 40) {
                comments_row1 = "「けなすやつあ　ゆるさねえ～～～～";
                comments_row2 = "　何者ﾝだろーと黙っちゃあいねえッ！」";
            }
            var_198 = 1;
            var_300 = 0;
            yield func047();
        }
        if (var_144 == 10 || var_144 == 15 || var_144 == 20 || var_144 == 25 || var_144 == 30 || var_144 == 35 || var_144 == 40 || var_144 == 45) {
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            if (var_144 == 10) {
                comments_row1 = "ﾄﾞｯﾋﾟｵ「今 ボスから電話があったんだ…";
                comments_row2 = "　　　　僕の任務は…」";
            }
            if (var_144 == 15) {
                comments_row1 = "ﾄﾞｯﾋﾟｵ「えーと…　なんだっけ…」";
                comments_row2 = "";
            }
            if (var_144 == 20) {
                comments_row1 = "ﾄﾞｯﾋﾟｵ「…やばい…！ このままここに";
                comments_row2 = "　　　　ボケッとしてるのはやばいぞッ！」";
            }
            if (var_144 == 25) {
                comments_row1 = "ﾄﾞｯﾋﾟｵ「すぐにも襲われそうだッ！」";
                comments_row2 = "";
            }
            if (var_144 == 30) {
                comments_row1 = "ﾄﾞｯﾋﾟｵ「ど…どこにいるんですか？";
                comments_row2 = "　　　　ボス！！」";
            }
            if (var_144 == 35) {
                comments_row1 = "ﾄﾞｯﾋﾟｵ「オレの近くにいるのですかッ？」";
                comments_row2 = "";
            }
            if (var_144 == 40) {
                comments_row1 = "ﾄﾞｯﾋﾟｵ「いるならすぐに来て下さい！」";
                comments_row2 = "";
            }
            if (var_144 == 45) {
                comments_row1 = "ﾄﾞｯﾋﾟｵ「足に力が入らないんです…」";
                comments_row2 = "";
            }
            var_198 = 1;
            var_300 = 0;
            yield func047();
        }
        if (var_201 == 14) {
            if (var_199 == 1) {
                var_199 = 4;
            }
            if (var_199 == 7) {
                var_199 = 8;
            }
            if (var_199 == 9) {
                var_199 = 6;
            }
            if (var_199 == 3) {
                var_199 = 2;
            }
            if (var_199 == 0) {
                var_199 = 2;
            }
        }
        var_423 = var_66;
        var_424 = var_67;
        var_425 = var_66 - 1;
        if (var_425 < 0) {
            var_425 = 0;
        }
        var_426 = var_66 + 1;
        if (var_426 > var_33) {
            var_426 = var_33;
        }
        var_427 = var_67 + 1;
        if (var_427 > var_34) {
            var_427 = var_34;
        }
        var_428 = var_67 - 1;
        if (var_428 < 0) {
            var_428 = 0;
        }
        if (var_144 == 0) {
            if (var_82[var_425][var_424] != 0 && var_71[var_425][var_424] != 0) {
                var_199 = 4;
                var_243 = 1;
                yield func635();
                return;
            }
            if (var_82[var_426][var_424] != 0 && var_71[var_426][var_424] != 0) {
                var_199 = 6;
                var_243 = 1;
                yield func635();
                return;
            }
            if (var_82[var_423][var_427] != 0 && var_71[var_423][var_427] != 0) {
                var_199 = 2;
                var_243 = 1;
                yield func635();
                return;
            }
            if (var_82[var_423][var_428] != 0 && var_71[var_423][var_428] != 0) {
                var_199 = 8;
                var_243 = 1;
                yield func635();
                return;
            }
            if (var_82[var_425][var_427] != 0 && var_71[var_425][var_427] != 0 && var_71[var_425][var_424] != 0 && var_71[var_423][var_427] != 0) {
                var_199 = 1;
                var_243 = 1;
                yield func635();
                return;
            }
            if (var_82[var_426][var_427] != 0 && var_71[var_426][var_427] != 0 && var_71[var_426][var_424] != 0 && var_71[var_423][var_427] != 0) {
                var_199 = 3;
                var_243 = 1;
                yield func635();
                return;
            }
            if (var_82[var_425][var_428] != 0 && var_71[var_425][var_428] != 0 && var_71[var_425][var_424] != 0 && var_71[var_423][var_428] != 0) {
                var_199 = 7;
                var_243 = 1;
                yield func635();
                return;
            }
            if (var_82[var_426][var_428] != 0 && var_71[var_426][var_428] != 0 && var_71[var_426][var_424] != 0 && var_71[var_423][var_428] != 0) {
                var_199 = 9;
                var_243 = 1;
                yield func635();
                return;
            }
        }
        var_602 = 0;
        var_603 = 0;
        var_604 = 0;
        var_605 = 0;
        var_606 = 0;
        var_607 = 0;
        var_608 = 0;
        var_609 = 0;
        if (var_71[var_425][var_424] == 0 || var_425 <= 5) {
            var_602 = 1;
        }
        if (var_71[var_426][var_424] == 0 || var_426 >= var_33) {
            var_603 = 1;
        }
        if (var_71[var_423][var_427] == 0 || var_427 >= var_34) {
            var_604 = 1;
        }
        if (var_71[var_423][var_428] == 0 || var_428 <= 5) {
            var_605 = 1;
        }
        if (var_71[var_425][var_427] == 0 || var_425 <= 5 || var_427 >= var_34) {
            var_606 = 1;
        }
        if (var_71[var_425][var_428] == 0 || var_425 <= 5 || var_428 <= 5) {
            var_607 = 1;
        }
        if (var_71[var_426][var_427] == 0 || var_426 >= var_33 || var_427 >= var_34) {
            var_608 = 1;
        }
        if (var_71[var_426][var_428] == 0 || var_426 >= var_33 || var_428 <= 5) {
            var_609 = 1;
        }
        var_610 = 0;
        var_611 = 0;
        if (var_201 != 14 && var_612 == 0) {
            var_613 = var_66;
            var_614 = var_67;
            var_615 = var_201;
            if (var_322 == 0) {
                var_322 = 2;
            }
            if (var_322 == 4) {
                if (var_76[var_615][4][1] != 0 && var_611 == 0) {
                    var_66 = var_76[var_615][4][1];
                    var_67 = var_76[var_615][4][2];
                    if (var_71[var_66][var_67] != 0) {
                        var_611 = 1;
                    }
                }
                if (var_76[var_615][2][1] != 0 && var_611 == 0) {
                    var_66 = var_76[var_615][2][1];
                    var_67 = var_76[var_615][2][2];
                    if (var_71[var_66][var_67] != 0) {
                        var_611 = 1;
                    }
                }
                if (var_76[var_615][1][1] != 0 && var_611 == 0) {
                    var_66 = var_76[var_615][1][1];
                    var_67 = var_76[var_615][1][2];
                    if (var_71[var_66][var_67] != 0) {
                        var_611 = 1;
                    }
                }
                if (var_76[var_615][3][1] != 0 && var_611 == 0) {
                    var_66 = var_76[var_615][3][1];
                    var_67 = var_76[var_615][3][2];
                    if (var_71[var_66][var_67] != 0) {
                        var_611 = 1;
                    }
                }
            }
            if (var_322 == 6) {
                if (var_76[var_615][1][1] != 0 && var_611 == 0) {
                    var_66 = var_76[var_615][1][1];
                    var_67 = var_76[var_615][1][2];
                    if (var_71[var_66][var_67] != 0) {
                        var_611 = 1;
                    }
                }
                if (var_76[var_615][3][1] != 0 && var_611 == 0) {
                    var_66 = var_76[var_615][3][1];
                    var_67 = var_76[var_615][3][2];
                    if (var_71[var_66][var_67] != 0) {
                        var_611 = 1;
                    }
                }
                if (var_76[var_615][4][1] != 0 && var_611 == 0) {
                    var_66 = var_76[var_615][4][1];
                    var_67 = var_76[var_615][4][2];
                    if (var_71[var_66][var_67] != 0) {
                        var_611 = 1;
                    }
                }
                if (var_76[var_615][2][1] != 0 && var_611 == 0) {
                    var_66 = var_76[var_615][2][1];
                    var_67 = var_76[var_615][2][2];
                    if (var_71[var_66][var_67] != 0) {
                        var_611 = 1;
                    }
                }
            }
            if (var_322 == 8) {
                if (var_76[var_615][2][1] != 0 && var_611 == 0) {
                    var_66 = var_76[var_615][2][1];
                    var_67 = var_76[var_615][2][2];
                    if (var_71[var_66][var_67] != 0) {
                        var_611 = 1;
                    }
                }
                if (var_76[var_615][1][1] != 0 && var_611 == 0) {
                    var_66 = var_76[var_615][1][1];
                    var_67 = var_76[var_615][1][2];
                    if (var_71[var_66][var_67] != 0) {
                        var_611 = 1;
                    }
                }
                if (var_76[var_615][3][1] != 0 && var_611 == 0) {
                    var_66 = var_76[var_615][3][1];
                    var_67 = var_76[var_615][3][2];
                    if (var_71[var_66][var_67] != 0) {
                        var_611 = 1;
                    }
                }
                if (var_76[var_615][4][1] != 0 && var_611 == 0) {
                    var_66 = var_76[var_615][4][1];
                    var_67 = var_76[var_615][4][2];
                    if (var_71[var_66][var_67] != 0) {
                        var_611 = 1;
                    }
                }
            }
            if (var_322 == 2) {
                if (var_76[var_615][3][1] != 0 && var_611 == 0) {
                    var_66 = var_76[var_615][3][1];
                    var_67 = var_76[var_615][3][2];
                    if (var_71[var_66][var_67] != 0) {
                        var_611 = 1;
                    }
                }
                if (var_76[var_615][4][1] != 0 && var_611 == 0) {
                    var_66 = var_76[var_615][4][1];
                    var_67 = var_76[var_615][4][2];
                    if (var_71[var_66][var_67] != 0) {
                        var_611 = 1;
                    }
                }
                if (var_76[var_615][2][1] != 0 && var_611 == 0) {
                    var_66 = var_76[var_615][2][1];
                    var_67 = var_76[var_615][2][2];
                    if (var_71[var_66][var_67] != 0) {
                        var_611 = 1;
                    }
                }
                if (var_76[var_615][1][1] != 0 && var_611 == 0) {
                    var_66 = var_76[var_615][1][1];
                    var_67 = var_76[var_615][1][2];
                    if (var_71[var_66][var_67] != 0) {
                        var_611 = 1;
                    }
                }
            }
            if (var_144 == 0) {
                var_616 = 1;
                for (let cnt3 = 0; cnt3 < var_97; ++cnt3) {
                    if (var_83[var_616].Var0 != 0 && var_83[var_616].Var0 != 53 && var_83[var_616].Var30 == 0 && var_201 == var_83[var_616].Var10) {
                        var_66 = var_83[var_616].Var1;
                        var_67 = var_83[var_616].Var2;
                        var_611 = 1;
                        break;
                    }
                    if (var_83[var_616].Var10 == 14 && var_201 != 14 && var_83[var_616].Var0 != 0 && var_83[var_616].Var0 != 53 && var_83[var_616].Var30 == 0) {
                        if (var_71[var_425][var_424] == var_201 || var_71[var_426][var_424] == var_201 || var_71[var_423][var_427] == var_201 || var_71[var_423][var_428] == var_201) {
                            var_66 = var_83[var_616].Var1;
                            var_67 = var_83[var_616].Var2;
                            var_611 = 1;
                            break;
                        }
                    }
                    var_616++;
                }
            }
            if (var_611 == 1) {
                if (var_66 < var_423 && var_67 > var_424) {
                    if (var_610 == 0 && var_71[var_425][var_424] != 0 && var_71[var_423][var_427] != 0 && var_606 != 1 && var_71[var_425][var_427] != 13 && var_82[var_425][var_427] == 0) {
                        var_423 = var_423 - 1;
                        var_424 = var_424 + 1;
                        var_199 = 1;
                        var_610 = 1;
                    }
                    if (var_425 == var_66) {
                        if (var_610 == 0 && var_604 != 1 && var_71[var_423][var_427] != 13 && var_82[var_423][var_427] == 0) {
                            var_424 = var_424 + 1;
                            var_199 = 2;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_602 != 1 && var_71[var_425][var_424] != 13 && var_82[var_425][var_424] == 0) {
                            var_423 = var_423 - 1;
                            var_199 = 4;
                            var_610 = 1;
                        }
                    }
                    if (var_427 == var_67) {
                        if (var_610 == 0 && var_602 != 1 && var_71[var_425][var_424] != 13 && var_82[var_425][var_424] == 0) {
                            var_423 = var_423 - 1;
                            var_199 = 4;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_604 != 1 && var_71[var_423][var_427] != 13 && var_82[var_423][var_427] == 0) {
                            var_424 = var_424 + 1;
                            var_199 = 2;
                            var_610 = 1;
                        }
                    }
                    if (var_610 == 0 && var_604 != 1 && var_71[var_423][var_427] != 13 && var_82[var_423][var_427] == 0) {
                        var_424 = var_424 + 1;
                        var_199 = 2;
                        var_610 = 1;
                    }
                    if (var_610 == 0 && var_602 != 1 && var_71[var_425][var_424] != 13 && var_82[var_425][var_424] == 0) {
                        var_423 = var_423 - 1;
                        var_199 = 4;
                        var_610 = 1;
                    }
                }
                if (var_66 < var_423 && var_67 < var_424) {
                    if (var_610 == 0 && var_71[var_425][var_424] != 0 && var_71[var_423][var_428] != 0 && var_607 != 1 && var_71[var_425][var_428] != 13 && var_82[var_425][var_428] == 0) {
                        var_423 = var_423 - 1;
                        var_424 = var_424 - 1;
                        var_199 = 7;
                        var_610 = 1;
                    }
                    if (var_425 == var_66) {
                        if (var_610 == 0 && var_605 != 1 && var_71[var_423][var_428] != 13 && var_82[var_423][var_428] == 0) {
                            var_424 = var_424 - 1;
                            var_199 = 8;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_602 != 1 && var_71[var_425][var_424] != 13 && var_82[var_425][var_424] == 0) {
                            var_423 = var_423 - 1;
                            var_199 = 4;
                            var_610 = 1;
                        }
                    }
                    if (var_428 == var_67) {
                        if (var_610 == 0 && var_602 != 1 && var_71[var_425][var_424] != 13 && var_82[var_425][var_424] == 0) {
                            var_423 = var_423 - 1;
                            var_199 = 4;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_605 != 1 && var_71[var_423][var_428] != 13 && var_82[var_423][var_428] == 0) {
                            var_424 = var_424 - 1;
                            var_199 = 8;
                            var_610 = 1;
                        }
                    }
                    if (var_610 == 0 && var_605 != 1 && var_71[var_423][var_428] != 13 && var_82[var_423][var_428] == 0) {
                        var_424 = var_424 - 1;
                        var_199 = 8;
                        var_610 = 1;
                    }
                    if (var_610 == 0 && var_602 != 1 && var_71[var_425][var_424] != 13 && var_82[var_425][var_424] == 0) {
                        var_423 = var_423 - 1;
                        var_199 = 4;
                        var_610 = 1;
                    }
                }
                if (var_66 > var_423 && var_67 > var_424) {
                    if (var_610 == 0 && var_71[var_426][var_424] != 0 && var_71[var_423][var_427] != 0 && var_608 != 1 && var_71[var_426][var_427] != 13 && var_82[var_426][var_427] == 0) {
                        var_423 = var_423 + 1;
                        var_424 = var_424 + 1;
                        var_199 = 3;
                        var_610 = 1;
                    }
                    if (var_426 == var_66) {
                        if (var_610 == 0 && var_604 != 1 && var_71[var_423][var_427] != 13 && var_82[var_423][var_427] == 0) {
                            var_424 = var_424 + 1;
                            var_199 = 2;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_603 != 1 && var_71[var_426][var_424] != 13 && var_82[var_426][var_424] == 0) {
                            var_423 = var_423 + 1;
                            var_199 = 6;
                            var_610 = 1;
                        }
                    }
                    if (var_427 == var_67) {
                        if (var_610 == 0 && var_603 != 1 && var_71[var_426][var_424] != 13 && var_82[var_426][var_424] == 0) {
                            var_423 = var_423 + 1;
                            var_199 = 6;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_604 != 1 && var_71[var_423][var_427] != 13 && var_82[var_423][var_427] == 0) {
                            var_424 = var_424 + 1;
                            var_199 = 2;
                            var_610 = 1;
                        }
                    }
                    if (var_610 == 0 && var_604 != 1 && var_71[var_423][var_427] != 13 && var_82[var_423][var_427] == 0) {
                        var_424 = var_424 + 1;
                        var_199 = 2;
                        var_610 = 1;
                    }
                    if (var_610 == 0 && var_603 != 1 && var_71[var_426][var_424] != 13 && var_82[var_426][var_424] == 0) {
                        var_423 = var_423 + 1;
                        var_199 = 6;
                        var_610 = 1;
                    }
                }
                if (var_66 > var_423 && var_67 < var_424) {
                    if (var_610 == 0 && var_71[var_426][var_424] != 0 && var_71[var_423][var_428] != 0 && var_609 != 1 && var_71[var_426][var_428] != 13 && var_82[var_426][var_428] == 0) {
                        var_423 = var_423 + 1;
                        var_424 = var_424 - 1;
                        var_199 = 9;
                        var_610 = 1;
                    }
                    if (var_426 == var_66) {
                        if (var_610 == 0 && var_605 != 1 && var_71[var_423][var_428] != 13 && var_82[var_423][var_428] == 0) {
                            var_424 = var_424 - 1;
                            var_199 = 8;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_603 != 1 && var_71[var_426][var_424] != 13 && var_82[var_426][var_424] == 0) {
                            var_423 = var_423 + 1;
                            var_199 = 6;
                            var_610 = 1;
                        }
                    }
                    if (var_428 == var_67) {
                        if (var_610 == 0 && var_603 != 1 && var_71[var_426][var_424] != 13 && var_82[var_426][var_424] == 0) {
                            var_423 = var_423 + 1;
                            var_199 = 6;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_605 != 1 && var_71[var_423][var_428] != 13 && var_82[var_423][var_428] == 0) {
                            var_424 = var_424 - 1;
                            var_199 = 8;
                            var_610 = 1;
                        }
                    }
                    if (var_610 == 0 && var_605 != 1 && var_71[var_423][var_428] != 13 && var_82[var_423][var_428] == 0) {
                        var_424 = var_424 - 1;
                        var_199 = 8;
                        var_610 = 1;
                    }
                    if (var_610 == 0 && var_603 != 1 && var_71[var_426][var_424] != 13 && var_82[var_426][var_424] == 0) {
                        var_423 = var_423 + 1;
                        var_199 = 6;
                        var_610 = 1;
                    }
                }
                if (var_66 < var_423 && var_67 == var_424) {
                    if (var_610 == 0 && var_82[var_425][var_424] == 0 && var_602 != 1 && var_71[var_425][var_424] != 13) {
                        var_423 = var_423 - 1;
                        var_199 = 4;
                        var_610 = 1;
                    }
                    if (var_610 == 0 && var_82[var_425][var_428] == 0 && var_71[var_425][var_424] != 0 && var_71[var_423][var_428] != 0 && var_607 != 1 && var_71[var_425][var_428] != 13) {
                        var_423 = var_423 - 1;
                        var_424 = var_424 - 1;
                        var_199 = 7;
                        var_610 = 1;
                    }
                    if (var_610 == 0 && var_82[var_425][var_427] == 0 && var_71[var_425][var_424] != 0 && var_71[var_423][var_427] != 0 && var_606 != 1 && var_71[var_425][var_427] != 13) {
                        var_423 = var_423 - 1;
                        var_424 = var_424 + 1;
                        var_199 = 1;
                        var_610 = 1;
                    }
                }
                if (var_66 > var_423 && var_67 == var_424) {
                    if (var_610 == 0 && var_82[var_426][var_424] == 0 && var_603 != 1 && var_71[var_426][var_424] != 13) {
                        var_423 = var_423 + 1;
                        var_199 = 6;
                        var_610 = 1;
                    }
                    if (var_610 == 0 && var_82[var_426][var_427] == 0 && var_71[var_426][var_424] != 0 && var_71[var_423][var_427] != 0 && var_608 != 1 && var_71[var_426][var_427] != 13) {
                        var_423 = var_423 + 1;
                        var_424 = var_424 + 1;
                        var_199 = 3;
                        var_610 = 1;
                    }
                    if (var_610 == 0 && var_82[var_426][var_428] == 0 && var_71[var_426][var_424] != 0 && var_71[var_423][var_428] != 0 && var_609 != 1 && var_71[var_426][var_428] != 13) {
                        var_423 = var_423 + 1;
                        var_424 = var_424 - 1;
                        var_199 = 9;
                        var_610 = 1;
                    }
                }
                if (var_66 == var_423 && var_67 < var_424) {
                    if (var_610 == 0 && var_82[var_423][var_428] == 0 && var_605 != 1 && var_71[var_423][var_428] != 13) {
                        var_424 = var_424 - 1;
                        var_199 = 8;
                        var_610 = 1;
                    }
                    if (var_610 == 0 && var_82[var_426][var_428] == 0 && var_71[var_426][var_424] != 0 && var_71[var_423][var_428] != 0 && var_609 != 1 && var_71[var_426][var_428] != 13) {
                        var_423 = var_423 + 1;
                        var_424 = var_424 - 1;
                        var_199 = 9;
                        var_610 = 1;
                    }
                    if (var_610 == 0 && var_82[var_425][var_428] == 0 && var_71[var_425][var_424] != 0 && var_71[var_423][var_428] != 0 && var_607 != 1 && var_71[var_425][var_428] != 13) {
                        var_423 = var_423 - 1;
                        var_424 = var_424 - 1;
                        var_199 = 7;
                        var_610 = 1;
                    }
                }
                if (var_66 == var_423 && var_67 > var_424) {
                    if (var_610 == 0 && var_82[var_423][var_427] == 0 && var_604 != 1 && var_71[var_423][var_427] != 13) {
                        var_424 = var_424 + 1;
                        var_199 = 2;
                        var_610 = 1;
                    }
                    if (var_610 == 0 && var_82[var_425][var_427] == 0 && var_71[var_425][var_424] != 0 && var_71[var_423][var_427] != 0 && var_606 != 1 && var_71[var_425][var_427] != 13) {
                        var_423 = var_423 - 1;
                        var_424 = var_424 + 1;
                        var_199 = 1;
                        var_610 = 1;
                    }
                    if (var_610 == 0 && var_82[var_426][var_427] == 0 && var_71[var_426][var_424] != 0 && var_71[var_423][var_427] != 0 && var_608 != 1 && var_71[var_426][var_427] != 13) {
                        var_423 = var_423 + 1;
                        var_424 = var_424 + 1;
                        var_199 = 3;
                        var_610 = 1;
                    }
                }
                if (var_610 == 0) {
                    var_617 = 0;
                    if (var_617 == 0 && var_322 == 2) {
                        var_322 = 4;
                        var_617 = 1;
                    }
                    if (var_617 == 0 && var_322 == 6) {
                        var_322 = 2;
                        var_617 = 1;
                    }
                    if (var_617 == 0 && var_322 == 8) {
                        var_322 = 6;
                        var_617 = 1;
                    }
                    if (var_617 == 0 && var_322 == 4) {
                        var_322 = 8;
                        var_617 = 1;
                    }
                    if (var_617 == 0) {
                        var_322 = 2;
                    }
                    var_66 = var_423;
                    var_67 = var_424;
                    var_217 = 1;
                }
                if (var_610 == 1) {
                    var_66 = var_423;
                    var_67 = var_424;
                }
            }
        }
        if (var_201 == 14 || var_611 == 0) {
            if (var_199 == 2 && var_610 == 0) {
                if (var_610 == 0 && var_604 == 0 && var_82[var_423][var_427] == 0 && var_71[var_423][var_427] != 13) {
                    var_67 = var_67 + 1;
                    var_199 = 2;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_603 == 0 && var_82[var_426][var_424] == 0 && var_71[var_426][var_424] != 13) {
                    var_66 = var_66 + 1;
                    var_199 = 6;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_602 == 0 && var_82[var_425][var_424] == 0 && var_71[var_425][var_424] != 13) {
                    var_66 = var_66 - 1;
                    var_199 = 4;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_605 == 0 && var_82[var_423][var_428] == 0 && var_71[var_423][var_428] != 13) {
                    var_67 = var_67 - 1;
                    var_199 = 8;
                    var_610 = 1;
                }
            }
            if (var_199 == 4 && var_610 == 0) {
                if (var_610 == 0 && var_602 == 0 && var_82[var_425][var_424] == 0 && var_71[var_425][var_424] != 13) {
                    var_66 = var_66 - 1;
                    var_199 = 4;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_604 == 0 && var_82[var_423][var_427] == 0 && var_71[var_423][var_427] != 13) {
                    var_67 = var_67 + 1;
                    var_199 = 2;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_605 == 0 && var_82[var_423][var_428] == 0 && var_71[var_423][var_428] != 13) {
                    var_67 = var_67 - 1;
                    var_199 = 8;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_603 == 0 && var_82[var_426][var_424] == 0 && var_71[var_426][var_424] != 13) {
                    var_66 = var_66 + 1;
                    var_199 = 6;
                    var_610 = 1;
                }
            }
            if (var_199 == 8 && var_610 == 0) {
                if (var_610 == 0 && var_605 == 0 && var_82[var_423][var_428] == 0 && var_71[var_423][var_428] != 13) {
                    var_67 = var_67 - 1;
                    var_199 = 8;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_602 == 0 && var_82[var_425][var_424] == 0 && var_71[var_425][var_424] != 13) {
                    var_66 = var_66 - 1;
                    var_199 = 4;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_603 == 0 && var_82[var_426][var_424] == 0 && var_71[var_426][var_424] != 13) {
                    var_66 = var_66 + 1;
                    var_199 = 6;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_604 == 0 && var_82[var_423][var_427] == 0 && var_71[var_423][var_427] != 13) {
                    var_67 = var_67 + 1;
                    var_199 = 2;
                    var_610 = 1;
                }
            }
            if (var_199 == 6 && var_610 == 0) {
                if (var_610 == 0 && var_603 == 0 && var_82[var_426][var_424] == 0 && var_71[var_426][var_424] != 13) {
                    var_66 = var_66 + 1;
                    var_199 = 6;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_605 == 0 && var_82[var_423][var_428] == 0 && var_71[var_423][var_428] != 13) {
                    var_67 = var_67 - 1;
                    var_199 = 8;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_604 == 0 && var_82[var_423][var_427] == 0 && var_71[var_423][var_427] != 13) {
                    var_67 = var_67 + 1;
                    var_199 = 2;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_602 == 0 && var_82[var_425][var_424] == 0 && var_71[var_425][var_424] != 13) {
                    var_66 = var_66 - 1;
                    var_199 = 4;
                    var_610 = 1;
                }
            }
            if (var_199 == 3 && var_610 == 0) {
                if (var_610 == 0 && var_604 == 0 && var_82[var_423][var_427] == 0 && var_71[var_423][var_427] != 13) {
                    var_67 = var_67 + 1;
                    var_199 = 2;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_603 == 0 && var_82[var_426][var_424] == 0 && var_71[var_426][var_424] != 13) {
                    var_66 = var_66 + 1;
                    var_199 = 6;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_602 == 0 && var_82[var_425][var_424] == 0 && var_71[var_425][var_424] != 13) {
                    var_66 = var_66 - 1;
                    var_199 = 4;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_605 == 0 && var_82[var_423][var_428] == 0 && var_71[var_423][var_428] != 13) {
                    var_67 = var_67 - 1;
                    var_199 = 8;
                    var_610 = 1;
                }
            }
            if (var_199 == 1 && var_610 == 0) {
                if (var_610 == 0 && var_602 == 0 && var_82[var_425][var_424] == 0 && var_71[var_425][var_424] != 13) {
                    var_66 = var_66 - 1;
                    var_199 = 4;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_604 == 0 && var_82[var_423][var_427] == 0 && var_71[var_423][var_427] != 13) {
                    var_67 = var_67 + 1;
                    var_199 = 2;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_605 == 0 && var_82[var_423][var_428] == 0 && var_71[var_423][var_428] != 13) {
                    var_67 = var_67 - 1;
                    var_199 = 8;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_603 == 0 && var_82[var_426][var_424] == 0 && var_71[var_426][var_424] != 13) {
                    var_66 = var_66 + 1;
                    var_199 = 6;
                    var_610 = 1;
                }
            }
            if (var_199 == 7 && var_610 == 0) {
                if (var_610 == 0 && var_605 == 0 && var_82[var_423][var_428] == 0 && var_71[var_423][var_428] != 13) {
                    var_67 = var_67 - 1;
                    var_199 = 8;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_602 == 0 && var_82[var_425][var_424] == 0 && var_71[var_425][var_424] != 13) {
                    var_66 = var_66 - 1;
                    var_199 = 4;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_603 == 0 && var_82[var_426][var_424] == 0 && var_71[var_426][var_424] != 13) {
                    var_66 = var_66 + 1;
                    var_199 = 6;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_604 == 0 && var_82[var_423][var_427] == 0 && var_71[var_423][var_427] != 13) {
                    var_67 = var_67 + 1;
                    var_199 = 2;
                    var_610 = 1;
                }
            }
            if (var_199 == 9 && var_610 == 0) {
                if (var_610 == 0 && var_603 == 0 && var_82[var_426][var_424] == 0 && var_71[var_426][var_424] != 13) {
                    var_66 = var_66 + 1;
                    var_199 = 6;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_605 == 0 && var_82[var_423][var_428] == 0 && var_71[var_423][var_428] != 13) {
                    var_67 = var_67 - 1;
                    var_199 = 8;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_604 == 0 && var_82[var_423][var_427] == 0 && var_71[var_423][var_427] != 13) {
                    var_67 = var_67 + 1;
                    var_199 = 2;
                    var_610 = 1;
                }
                if (var_610 == 0 && var_602 == 0 && var_82[var_425][var_424] == 0 && var_71[var_425][var_424] != 13) {
                    var_66 = var_66 - 1;
                    var_199 = 4;
                    var_610 = 1;
                }
            }
            if (var_610 == 0) {
                var_618 = 0;
                if (var_618 == 0 && var_199 == 2) {
                    var_199 = 8;
                    var_618 = 1;
                }
                if (var_618 == 0 && var_199 == 8) {
                    var_199 = 2;
                    var_618 = 1;
                }
                if (var_618 == 0 && var_199 == 6) {
                    var_199 = 4;
                    var_618 = 1;
                }
                if (var_618 == 0 && var_199 == 4) {
                    var_199 = 6;
                    var_618 = 1;
                }
                if (var_618 == 0 && var_199 == 1) {
                    var_199 = 4;
                    var_618 = 1;
                }
                if (var_618 == 0 && var_199 == 3) {
                    var_199 = 2;
                    var_618 = 1;
                }
                if (var_618 == 0 && var_199 == 7) {
                    var_199 = 8;
                    var_618 = 1;
                }
                if (var_618 == 0 && var_199 == 9) {
                    var_199 = 6;
                    var_618 = 1;
                }
                var_217 = 1;
                yield func019();
                return;
            }
        }
        yield func015();
        return;
    });
}


let change_scale: any;

function ChangeScale() {
        if (change_scale.percent === window.devicePixelRatio) {
            let scale: any = document.documentElement.clientWidth;
            scale = scale / change_scale.container;
            scale = "scale(" + scale + ")";
            document.body.style.transform = scale;
        } else {
            change_scale.percent = window.devicePixelRatio;
        }
    }

// 各キー操作。joystick関数があるので、動作に関するもの？？
function func080(this: any, is_key_reset = true) {
        return __awaiter(this, void 0, void 0, function* () {
            dbgprt(80);
            conf_keyon = 0;
            var_254 = 0;
            var_257 = 0;
            var_255 = 0;
            var_259 = 0;
            var_253 = 0;
            var_256 = 0;
            var_258 = 0;
            var_260 = 0;
            var_239 = 0;
            var_244 = 0;
            var_242 = 0;
            var_252 = 0;
            var_238 = 0;
            var_249 = 0;
            var_619 = 0;
            var_620 = 0;
            var_621 = 0;
            var_261 = 0;
            if (var_407 >= 1) {
                if (ginfo(2) == 30) {
                    if (var_622 == 0) {
                        imeset(1);
                    }
                    var_622 = 30;
                    onkey(1);
                }
                if (ginfo(2) == 0) {
                    if (var_622 == 30) {
                        imeset(0);
                    }
                    var_622 = 0;
                }
                if (ginfo(2) != 30) {
                    onkey(0);
                    var_623 = getkey(48);
                    if (var_623 == 1) {
                        var_624 = 0;
                        var_625 = 0;
                        yield func934();
                        yield func929();
                    }
                    var_623 = getkey(49);
                    if (var_623 == 1 && var_624 != 1) {
                        var_624 = 1;
                        var_625 = 1;
                        yield func934();
                        yield func929();
                    }
                    var_623 = getkey(50);
                    if (var_623 == 1 && var_624 != 2) {
                        var_624 = 2;
                        var_625 = 1;
                        yield func934();
                        yield func929();
                    }
                    var_623 = getkey(51);
                    if (var_623 == 1 && var_624 != 3) {
                        var_624 = 3;
                        var_625 = 1;
                        yield func934();
                        yield func929();
                    }
                    var_623 = getkey(52);
                    if (var_623 == 1 && var_624 != 4) {
                        var_624 = 4;
                        var_625 = 1;
                        yield func934();
                        yield func929();
                    }
                    var_623 = getkey(53);
                    if (var_623 == 1 && var_624 != 5) {
                        var_624 = 5;
                        var_625 = 1;
                        yield func934();
                        yield func929();
                    }
                    var_623 = getkey(54);
                    if (var_623 == 1 && var_624 != 6) {
                        var_624 = 6;
                        var_625 = 1;
                        yield func934();
                        yield func929();
                    }
                    var_623 = getkey(55);
                    if (var_623 == 1 && var_624 != 7) {
                        var_624 = 7;
                        var_625 = 1;
                        yield func934();
                        yield func929();
                    }
                    var_623 = getkey(56);
                    if (var_623 == 1 && var_624 != 8) {
                        var_624 = 8;
                        var_625 = 1;
                        yield func934();
                        yield func929();
                    }
                }
            }
            if (ginfo(2) == (-1)) {
                return;
            }
            if (ginfo(2) != 0 && ginfo(2) != 37) {
                return;
            }
    
            // F1キーを押した際の動作　画面サイズ変更
            // var
            if (var_626 == 0) {
                conf_keyon = getkey(112);
                if (conf_keyon == 1 && var_10 == 1) {
                    var_10 = 0;
                    width(340, 340);
                    if (var_627 == 0) {
        
                        bsave(file_name = "00.dat", data = var_10, data_size = null, offset = 20);
                    }
                    for (let cnt3 = 0; true; ++cnt3) {
                        if (var_628 == 0 && var_629 == 0) {
                            yield func337();
                        }
                        if (var_628 == 1 || var_629 == 1) {
                            yield wait(2);
                        }
                        conf_keyon = getkey(112);
                        if (conf_keyon == 0) {
                            break;
                        }
                    }
                    return;
                }
                if (conf_keyon == 1 && var_10 == 0) {
                    var_10 = 1;
                    width(680, 680);
                    if (var_627 == 0) {
        
                        bsave(file_name = "00.dat", data = var_10, data_size = null, offset = 20);
                    }
                    for (let cnt3 = 0; true; ++cnt3) {
                        if (var_628 == 0 && var_629 == 0) {
                            yield func337();
                        }
                        if (var_628 == 1 || var_629 == 1) {
                            yield wait(2);
                        }
                        conf_keyon = getkey(112);
                        if (conf_keyon == 0) {
                            break;
                        }
                    }
                    return;
                }
                // F2キーを押した際の動作
                conf_keyon = getkey(113);
                if (conf_keyon == 1) {
                    yield func088(); // 音量を小さくする（ボリュームコントロールのWAVE変更）
                }
    
                // F3キーを押した際の動作
                conf_keyon = getkey(114);
                if (conf_keyon == 1) {
                    yield func087(); // 音量を大きくする（ボリュームコントロールのWAVE変更）
                }
    
                // F4キーを押した際の動作
                conf_keyon = getkey(115);
                if (conf_keyon == 1) {
                    yield func085(); // 効果音を小さくする
                }
    
                // F5キーを押した際の動作
                conf_keyon = getkey(116);
                if (conf_keyon == 1) {
                    yield func086(); // 効果音を大きくする
                }
    
                // F6キーを押した際の動作　装備品の情報を「disc.txt」に出力する
                conf_keyon = getkey(117);
                if (conf_keyon == 1 && var_628 == 0 && var_627 == 0 && var_629 == 0) {
                    yield func227(); // F6キーを押しての現在ステータスをテキストファイルへ出力
                    var_630 = 1;
                    for (let cnt3 = 0; true; ++cnt3) {
                        yield func337();
                        conf_keyon = getkey(117);
                        if (conf_keyon == 0) {
                            break;
                        }
                    }
                    return;
                }
    
                // F7キーを押した際の動作　BGMのオン・オフ（オンにした場合DISC使用時や階段を降りてから再開）
                conf_keyon = getkey(118);
                if (conf_keyon == 1 && var_631 == 1000) {
                    DMSTOP();
                    var_631 = 0;
                    var_632 = 1;
                    var_633 = 0;
                    var_634 = 0;
                    var_635 = 0;
                    var_636 = 0;
                    for (let cnt3 = 0; true; ++cnt3) {
                        if (var_628 == 0 && var_629 == 0) {
                            yield func337();
                        }
                        if (var_628 == 1 || var_629 == 1) {
                            yield wait(2);
                        }
                        conf_keyon = getkey(118);
                        if (conf_keyon == 0) {
                            break;
                        }
                    }
                    return;
                }
                if (conf_keyon == 1 && var_631 == 0) {
                    var_631 = 1000;
                    var_633 = 1;
                    var_632 = 0;
                    var_634 = 0;
                    var_635 = 0;
                    var_636 = 0;
                    for (let cnt3 = 0; true; ++cnt3) {
                        if (var_628 == 0 && var_629 == 0) {
                            yield func337();
                        }
                        if (var_628 == 1 || var_629 == 1) {
                            yield wait(2);
                        }
                        conf_keyon = getkey(118);
                        if (conf_keyon == 0) {
                            break;
                        }
                    }
                    return;
                }
    
                // F12キーを押した際の動作　フルスクリーン切り替え
                
                conf_keyon = getkey(123);
                /*
                if (conf_keyon == 1) {
                    const myResizeBtn = document.getElementById('resizeBtn')
                    myResizeBtn.addEventListener('click', function () {
                      ipcRenderer.send('resize-me-please')
                    })
                }*/               

                /*
                if (var_407 == 0 && conf_keyon == 1 && var_637 == 0) {
            
                    chgdisp(1, 640, 480);
                    var_638 = ginfo(20);
                    var_639 = ginfo(21);
                    bgscr(37, var_638, var_639, 1, 0, 0);
                    title("");
                    cls(4);
                    if (var_10 == 1) {
                        var_640 = 1;
                        var_10 = 0;
                    }
                    var_637 = 1;
                    var_641 = Math.floor((var_638 - 340) / 2);
                    var_642 = Math.floor((var_639 - 340) / 2);
                    bgscr(0, 680, 680, 2, var_641, var_642, 340, 340);
                    gsel(0, 2);
                    for (let cnt3 = 0; true; ++cnt3) {
                        conf_keyon = getkey(123);
                        if (conf_keyon == 0) {
                            break;
                        }
                        if (var_628 == 0 && var_629 == 0) {
                            yield func337();
                        }
                        if (var_628 == 1 || var_629 == 1) {
                            yield wait(2);
                        }
                    }
                    return;
                }
    
                if (var_407 == 0 && conf_keyon == 1 && var_637 == 1) {
                    var_637 = 2;
                    var_10 = 1;
                    var_638 = ginfo(20);
                    var_639 = ginfo(21);
                    var_643 = var_639;
                    var_644 = var_639;
                    bgscr(37, var_638, var_639, 1, 0, 0);
                    title("");
                    cls(4);
                    var_641 = Math.floor((var_638 - var_643) / 2);
                    var_642 = Math.floor((var_639 - var_644) / 2);
                    bgscr(0, var_643, var_644, 2, var_641, var_642);
                    gsel(0, 2);
                    for (let cnt3 = 0; true; ++cnt3) {
                        conf_keyon = getkey(123);
                        if (conf_keyon == 0) {
                            break;
                        }
                        if (var_628 == 0 && var_629 == 0) {
                            yield func337();
                        }
                        if (var_628 == 1 || var_629 == 1) {
                            yield wait(2);
                        }
                    }
                    return;
                }
                if (var_407 == 0 && conf_keyon == 1 && var_637 == 2) {
                    var_637 = 4;
                    var_10 = 1;
                    var_638 = ginfo(20);
                    var_639 = ginfo(21);
                    var_643 = var_638;
                    var_644 = var_639;
                    var_645 = var_643;
                    var_646 = var_644;
                    var_641 = Math.floor((var_638 - var_643) / 2);
                    var_642 = Math.floor((var_639 - var_644) / 2);
                    bgscr(37, var_638, var_639, 1, 0, 0);
                    title("");
                    cls(4);
                    var_641 = Math.floor((var_638 - var_643) / 2);
                    var_642 = Math.floor((var_639 - var_644) / 2);
                    bgscr(0, var_643, var_644, 2, var_641, var_642);
                    gsel(0, 2);
                    for (let cnt3 = 0; true; ++cnt3) {
                        conf_keyon = getkey(123);
                        if (conf_keyon == 0) {
                            break;
                        }
                        if (var_628 == 0 && var_629 == 0) {
                            yield func337();
                        }
                        if (var_628 == 1 || var_629 == 1) {
                            yield wait(2);
                        }
                    }
                    return;
                }
                if (var_407 == 0 && conf_keyon == 1 && var_637 == 4) {
                    var_637 = 0;
                    gsel(37, -1);
                    screen_(0, 680, 680, 2);
                
                    SetWindowLongA(hwnd, -8, var_15);
                    if (var_640 == 0) {
                        var_10 = 0;
                        width(340, 340);
                    }
                    if (var_640 == 1) {
                        var_640 = 0;
                        var_10 = 1;
                        width(680, 680);
                    }
            
                    gsel(0, 1);
                    chgdisp();
                    for (let cnt3 = 0; true; ++cnt3) {
                        conf_keyon = getkey(123);
                        if (conf_keyon == 0) {
                            break;
                        }
                        if (var_628 == 0 && var_629 == 0) {
                            yield func337();
                        }
                        if (var_628 == 1 || var_629 == 1) {
                            yield wait(2);
                        }
                    }
                    return;
                }
                */
            }
    
            var_254 = getkey(var_647); // 入力判定：[←]
            var_257 = getkey(var_648); // 入力判定：[→]
            var_255 = getkey(var_649); // 入力判定：[↑]
            var_259 = getkey(var_650); // 入力判定：[↓]
            if (is_key_reset) {
                ResetKey(var_647);
                ResetKey(var_648);
                ResetKey(var_649);
                ResetKey(var_650);
            }
            var_253 = getkey(var_651); // 入力判定：? (Home)
            var_256 = getkey(var_652); // 入力判定：? (PageUp)
            var_258 = getkey(var_653); // 入力判定：? (End)
            var_260 = getkey(var_654); // 入力判定：? (PageDown)
            var_242 = getkey(var_655); // 入力判定：攻撃ボタン(Z)
            var_239 = getkey(var_656); // 入力判定：ダッシュ・コマンドキャンセル(X)
            var_244 = getkey(var_657); // 入力判定：コマンドウィンドウ表示(A)
            var_249 = getkey(var_658); // 入力判定：射撃(S)
            var_238 = getkey(var_659); // 入力判定：押しながらで斜めのみ移動(Shift)
            var_252 = getkey(var_660); // 入力判定：その場で向き変更(C)
            var_261 = getkey(32); // 入力判定：縮小マップのみ表示 (Space)
            var_661 = 15 + var_662;
            ck_joystick(var_663, var_661);
            if (stat != 1 && var_254 == 0 && var_257 == 0 && var_255 == 0 && var_259 == 0 && var_253 == 0 && var_256 == 0 && var_258 == 0 && var_260 == 0 && var_242 == 0 && var_239 == 0 && var_244 == 0 && var_249 == 0 && var_238 == 0 && var_252 == 0 && var_619 == 0 && var_620 == 0 && var_621 == 0 && var_261 == 0) {
                if (var_663 == 1) {
                    var_254 = 1;
                }
                if (var_663 == 4) {
                    var_257 = 1;
                }
                if (var_663 == 2) {
                    var_255 = 1;
                }
                if (var_663 == 8) {
                    var_259 = 1;
                }
                if (var_663 == 3) {
                    var_253 = 1;
                }
                if (var_663 == 6) {
                    var_256 = 1;
                }
                if (var_663 == 9) {
                    var_258 = 1;
                }
                if (var_663 == 12) {
                    var_260 = 1;
                }
                if (var_663 == var_664[1]) {
                    var_242 = 1;
                }
                if (var_663 == var_664[2]) {
                    var_239 = 1;
                }
                if (var_663 == var_664[3]) {
                    var_244 = 1;
                }
                if (var_663 == var_664[4]) {
                    var_252 = 1;
                }
                if (var_663 == var_664[5]) {
                    var_238 = 1;
                }
                if (var_663 == var_664[6]) {
                    var_249 = 1;
                }
                if (var_663 == var_664[1] + var_664[2]) {
                    var_242 = 1;
                    var_239 = 1;
                }
                if (var_663 == var_664[7]) {
                    var_261 = 1;
                }
                if (var_663 == var_664[8]) {
                    var_619 = 1;
                }
                if (var_663 == var_664[9]) {
                    var_620 = 1;
                }
                if (var_663 == var_664[10]) {
                    var_621 = 1;
                }
                if (var_663 == var_664[2] + 1) {
                    var_254 = 1;
                    var_239 = 1;
                }
                if (var_663 == var_664[2] + 4) {
                    var_257 = 1;
                    var_239 = 1;
                }
                if (var_663 == var_664[2] + 2) {
                    var_255 = 1;
                    var_239 = 1;
                }
                if (var_663 == var_664[2] + 8) {
                    var_259 = 1;
                    var_239 = 1;
                }
                if (var_663 == var_664[2] + 3) {
                    var_253 = 1;
                    var_239 = 1;
                }
                if (var_663 == var_664[2] + 6) {
                    var_256 = 1;
                    var_239 = 1;
                }
                if (var_663 == var_664[2] + 9) {
                    var_258 = 1;
                    var_239 = 1;
                }
                if (var_663 == var_664[2] + 12) {
                    var_260 = 1;
                    var_239 = 1;
                }
                if (var_663 == var_664[5] + 3) {
                    var_253 = 1;
                    var_238 = 1;
                }
                if (var_663 == var_664[5] + 6) {
                    var_256 = 1;
                    var_238 = 1;
                }
                if (var_663 == var_664[5] + 9) {
                    var_258 = 1;
                    var_238 = 1;
                }
                if (var_663 == var_664[5] + 12) {
                    var_260 = 1;
                    var_238 = 1;
                }
                if (var_663 == var_664[5] + 3 + var_664[2]) {
                    var_253 = 1;
                    var_238 = 1;
                    var_239 = 1;
                }
                if (var_663 == var_664[5] + 6 + var_664[2]) {
                    var_256 = 1;
                    var_238 = 1;
                    var_239 = 1;
                }
                if (var_663 == var_664[5] + 9 + var_664[2]) {
                    var_258 = 1;
                    var_238 = 1;
                    var_239 = 1;
                }
                if (var_663 == var_664[5] + 12 + var_664[2]) {
                    var_260 = 1;
                    var_238 = 1;
                    var_239 = 1;
                }
            }
            var_663 = 0;
            return;
        });
    }
// 効果音呼び出し関数
function func081(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(81);
        
        /*
        設定画面でカーソルを動かした際の音　「チッ」
        使用する際は DSPLAY(audio_id = 100) で流せる
        */
        bgm_file_name = "100.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 100);

        // 
        bgm_file_name = "101.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 101);
        
        // 
        bgm_file_name = "102.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 102);
        
        // 
        bgm_file_name = "103.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 103);
        
        //
        bgm_file_name = "103.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 104);
        
        // 
        bgm_file_name = "103.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 105);
        
        // 
        bgm_file_name = "103.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 106);

        // 
        bgm_file_name = "107.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 107);

        // 
        bgm_file_name = "108.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 108);

        // 
        bgm_file_name = "109.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 109);

        // 
        bgm_file_name = "110.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 110);

        // 
        bgm_file_name = "111.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 111);

        // 
        bgm_file_name = "112.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 112);

        // 
        bgm_file_name = "113.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 113);

        // 
        bgm_file_name = "114.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 114);

        // 
        bgm_file_name = "115.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 115);

        // 
        bgm_file_name = "116.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 116);

        // 
        bgm_file_name = "117.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 117);

        // 
        bgm_file_name = "118.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 118);

        // 
        bgm_file_name = "119.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 119);

        // 
        bgm_file_name = "120.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 120);

        // 
        bgm_file_name = "121.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 121);

        // 
        bgm_file_name = "122.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 122);

        // 
        bgm_file_name = "123.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 123);

        // 
        bgm_file_name = "124.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 124);

        // 
        bgm_file_name = "125.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 125);

        // 
        bgm_file_name = "126.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 126);

        // 
        bgm_file_name = "127.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 127);

        // 
        bgm_file_name = "128.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 128);

        // 
        bgm_file_name = "129.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 129);

        // 
        bgm_file_name = "130.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);

        // 
        DSLOADMEMORY(var_667, 130);
        bgm_file_name = "131.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 131);

        // 
        bgm_file_name = "132.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 132);

        // 
        bgm_file_name = "133.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 133);

        // 
        bgm_file_name = "134.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 134);

        // 
        bgm_file_name = "135.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 135);

        // 
        bgm_file_name = "136.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 136);

        // 
        bgm_file_name = "137.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 137);

        // 
        bgm_file_name = "138.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 138);

        // 
        bgm_file_name = "139.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 139);

        // 
        bgm_file_name = "140.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 140);

        // 
        bgm_file_name = "141.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 141);

        // 
        bgm_file_name = "142.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 142);

        // 
        bgm_file_name = "143.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 143);

        // 
        bgm_file_name = "144.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 144);

        // 
        bgm_file_name = "145.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 145);

        // 
        bgm_file_name = "146.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 146);

        // 
        bgm_file_name = "147.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 147);

        // 
        bgm_file_name = "148.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 148);

        // 
        bgm_file_name = "149.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 149);

        // 
        bgm_file_name = "150.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 150);

        // 
        bgm_file_name = "151.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 151);

        // 
        bgm_file_name = "152.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 152);

        // 
        bgm_file_name = "153.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 153);

        // 
        bgm_file_name = "154.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 154);

        // 
        bgm_file_name = "155.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 155);

        // 
        bgm_file_name = "156.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 156);

        // 
        bgm_file_name = "157.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 157);

        // 
        bgm_file_name = "158.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 158);

        // 
        bgm_file_name = "159.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 159);

        // 
        bgm_file_name = "160.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 160);

        // 
        bgm_file_name = "161.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 161);

        // 
        bgm_file_name = "162.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 162);

        // 
        bgm_file_name = "143.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 163);

        // 
        bgm_file_name = "164.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 164);

        // 
        bgm_file_name = "165.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 165);

        // 
        bgm_file_name = "166.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 166);

        // 
        bgm_file_name = "167.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 167);

        // 
        bgm_file_name = "168.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 168);

        // 
        bgm_file_name = "169.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 169);

        // 
        bgm_file_name = "170.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 170);

        // 
        bgm_file_name = "171.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 171);

        // 
        bgm_file_name = "172.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 172);

        // 
        bgm_file_name = "173.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 173);

        // 
        bgm_file_name = "174.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 174);

        // 
        bgm_file_name = "175.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 175);

        // 
        bgm_file_name = "176.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 176);

        // 
        bgm_file_name = "121.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 177);

        // 
        bgm_file_name = "178.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 178);

        // 
        bgm_file_name = "179.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 179);

        // 
        bgm_file_name = "180.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 180);

        // 
        bgm_file_name = "181.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 181);

        // 
        bgm_file_name = "182.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 182);

        // 
        bgm_file_name = "183.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 183);

        // 
        bgm_file_name = "184.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 184);

        // 
        bgm_file_name = "153.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 185);

        // 
        bgm_file_name = "186.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 186);

        // 
        bgm_file_name = "187.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 187);

        // 
        bgm_file_name = "188.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 188);

        // 
        bgm_file_name = "121.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 189);

        return;
    });
}

function func082(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(82);

        // 
        bgm_file_name = "190.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 190);

        // 
        bgm_file_name = "191.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 191);

        // 
        bgm_file_name = "192.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 192);

        // 
        bgm_file_name = "193.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 193);

        // 
        bgm_file_name = "194.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 194);

        // 
        bgm_file_name = "109.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 195);

        // 
        bgm_file_name = "119.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 196);

        // 
        bgm_file_name = "197.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 197);

        // 
        bgm_file_name = "142.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 198);

        // 
        bgm_file_name = "199.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 199);

        // 
        bgm_file_name = "200.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 200);

        // 
        bgm_file_name = "201.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 201);

        // 
        bgm_file_name = "202.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 202);

        // 
        bgm_file_name = "203.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 203);

        // 
        bgm_file_name = "204.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 204);

        // 
        bgm_file_name = "205.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 205);

        // 
        bgm_file_name = "206.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 206);

        // 
        bgm_file_name = "207.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 207);

        // アイテムを整理する時の効果音
        bgm_file_name = "208.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 208);

        // 
        bgm_file_name = "209.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 209);

        // 
        bgm_file_name = "100.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 210);

        // 
        bgm_file_name = "213.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 211);

        // 
        bgm_file_name = "212.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 212);

        // 
        bgm_file_name = "213.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 213);

        // 
        bgm_file_name = "100.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 214);

        // 
        bgm_file_name = "215.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 215);

        // 
        bgm_file_name = "216.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 216);

        // 
        bgm_file_name = "217.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 217);

        // 
        bgm_file_name = "218.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 218);

        // 
        bgm_file_name = "219.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 219);

        // 
        bgm_file_name = "223.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 220);

        // 
        bgm_file_name = "130.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 221);

        // 
        bgm_file_name = "222.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 222);

        // 
        bgm_file_name = "223.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 223);

        // 
        bgm_file_name = "224.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 224);

        // 
        bgm_file_name = "225.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 225);

        // 
        bgm_file_name = "153.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 226);

        // 
        bgm_file_name = "227.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 227);

        // 
        bgm_file_name = "228.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 228);

        // 
        bgm_file_name = "229.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 229);

        // 
        bgm_file_name = "230.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 230);

        // 
        bgm_file_name = "231.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 231);

        // 
        bgm_file_name = "232.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 232);

        // 
        bgm_file_name = "192.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 233);

        // 
        bgm_file_name = "234.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 234);

        // 
        bgm_file_name = "235.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 235);

        // 
        bgm_file_name = "236.wav";
        exist(bgm_file_name);

        var_666 = strsize;
        var_667 = sdim(var_666);
        var_667 = bload(bgm_file_name, var_666);
        DSLOADMEMORY(var_667, 236);
        
        return;
    });
}
function func083(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(83);
        var_668 = 137;
        yield func084();
        return;
    });
}
function func084(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(84);
        var_669 = 60;
        var_670 = 100;
        for (let cnt1 = 0; cnt1 < var_668; ++cnt1) {
            DSSETVOLUME(var_670, var_669);
            var_670++;
        }
        return;
    });
}
function func085(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(85);
        var_669 = var_669 - 1;
        if (var_669 <= 0) {
            var_669 = 0;
        }
        var_670 = 100;
        for (let cnt1 = 0; cnt1 < var_668; ++cnt1) {
            DSSETVOLUME(var_670, var_669);
            var_670++;
        }
        var_635 = 1;
        var_636 = 0;
        var_632 = 0;
        var_633 = 0;
        return;
    });
}
function func086(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(86);
        var_669 = var_669 + 1;
        if (var_669 >= 100) {
            var_669 = 100;
        }
        var_670 = 100;
        for (let cnt1 = 0; cnt1 < var_668; ++cnt1) {
            DSSETVOLUME(var_670, var_669);
            var_670++;
        }
        var_635 = 1;
        var_636 = 0;
        var_632 = 0;
        var_633 = 0;
        return;
    });
}
function func087(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(87);
        var_61 = var_61 + 1;
        if (var_61 >= 100) {
            var_61 = 100;
        }
        DSSETMASTERVOLUME(var_61);
        var_636 = 1;
        var_635 = 0;
        var_632 = 0;
        var_633 = 0;
        return;
    });
}
function func088(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(88);
        var_61 = var_61 - 1;
        if (var_61 <= 0) {
            var_61 = 0;
        }
        DSSETMASTERVOLUME(var_61);
        var_636 = 1;
        var_635 = 0;
        var_632 = 0;
        var_633 = 0;
        return;
    });
}
function func089(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(89);
        var_671 = 102;
        if (var_357 == 0) {
            var_671 = 102;
        }
        if (var_357 == 101) {
            var_671 = 112;
        }
        if (var_357 == 122) {
            var_671 = 112;
        }
        if (var_357 == 113) {
            var_671 = 113;
        }
        if (var_357 == 117) {
            var_671 = 113;
        }
        if (var_357 == 107) {
            var_671 = 113;
        }
        if (var_357 == 105) {
            var_671 = 120;
        }
        if (var_357 == 201) {
            var_671 = 123;
        }
        if (var_357 == 116) {
            var_671 = 127;
        }
        if (var_357 == 109) {
            var_671 = 128;
        }
        if (var_357 == 394) {
            var_671 = 113;
        }
        if (var_357 == 100 || var_357 == 102 || var_357 == 104 || var_357 == 106 || var_357 == 108 || var_357 == 111 || var_357 == 112 || var_357 == 114) {
            var_671 = 121;
        }
        if (var_357 == 115 || var_357 == 118 || var_357 == 119 || var_357 == 120 || var_357 == 121 || var_357 == 203 || var_357 == 304 || var_357 == 123) {
            var_671 = 121;
        }
        if (var_357 == 394 || var_357 == 395 || var_357 == 397 || var_357 == 398 || var_357 == 399) {
            var_671 = 121;
        }
        if (var_357 == 103 || var_357 == 124 || var_357 == 205 || var_357 == 207 || var_357 == 301 || var_357 == 309) {
            var_671 = 122;
        }
        DSPLAY(audio_id = var_671);
        return;
    });
}
function func090(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(90);

        DSPLAY(audio_id = 141);
        return;
    });
}
function func091(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(91);
        var_671 = 103;
        DSPLAY(audio_id = var_671);
        return;
    });
}
function func092(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(92);
        var_671 = 103;
        DSPLAY(audio_id = var_671);
        var_672 = 0;
        return;
    });
}
function func093(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(93);
        var_671 = 102;
        if (var_672 == 3 || var_672 == 13) {
            var_671 = 124;
        }
        if (var_672 == 2 || var_672 == 22) {
            var_671 = 114;
        }
        if (var_672 == 9 || var_672 == 10) {
            var_671 = 123;
        }
        if (var_672 == 29) {
            var_671 = 147;
        }
        if (var_672 == 122 || var_672 == 129) {
            var_671 = 112;
        }
        if (var_672 == 14 || var_672 == 66 || var_672 == 110 || var_672 == 162) {
            var_671 = 222;
        }
        if (var_672 == 44) {
            var_671 = 223;
        }
        if (var_672 == 51) {
            var_671 = 224;
        }
        if (var_672 == 17) {
            var_671 = 155;
        }
        DSPLAY(audio_id = var_671);
        var_672 = 0;
        return;
    });
}
function func094(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(94);
        DSPLAY(audio_id = 173);
        return;
    });
}
function func095(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(95);
        var_671 = 109;
        if (var_83[var_673].Var0 == 93) {
            var_671 = 109;
        }
        if (var_83[var_673].Var0 == 56) {
            var_671 = 110;
        }
        if (var_83[var_673].Var0 == 136) {
            var_671 = 194;
        }
        if (var_83[var_673].Var0 == 21) {
            var_671 = 169;
        }
        if (var_83[var_673].Var0 == 95 || var_83[var_673].Var0 == 121 || var_83[var_673].Var0 == 126) {
            var_671 = 176;
        }
        if (var_83[var_673].Var0 == 113 || var_83[var_673].Var0 == 132) {
            var_671 = 121;
        }
        if (var_83[var_673].Var0 == 47 || var_83[var_673].Var0 == 67) {
            return;
        }
        DSPLAY(audio_id = var_671);
        return;
    });
}
function func096(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(96);
        var_671 = 103;
        if (var_674 == 151 || var_674 == 171 || var_674 == 132) {
            var_671 = 111;
        }
        if (var_674 == 113) {
            var_671 = 115;
        }
        if (var_674 == 136) {
            var_671 = 195;
        }
        DSPLAY(audio_id = var_671);
        var_674 = 0;
        return;
    });
}
function func097(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(97);
        var_671 = 109;
        if (var_340 == 408 || var_340 == 412 || var_340 == 405 || var_340 == 406 || var_340 == 699) {
            var_671 = 107;
        }
        if (var_340 == 411 || var_340 == 409) {
            var_671 = 124;
        }
        if (var_340 == 400 || var_340 == 407) {
            var_671 = 176;
        }
        if (var_340 == 404) {
            var_671 = 215;
        }
        if (var_340 == 698) {
            var_671 = 128;
        }
        if (var_340 == 487 || var_340 == 488 || var_340 == 489) {
            var_671 = 169;
        }
        DSPLAY(audio_id = var_671);
        return;
    });
}
function func098(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(98);
        var_671 = 103;
        DSPLAY(audio_id = var_671);
        return;
    });
}
function func099(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(99);
        var_671 = 142;
        DSPLAY(audio_id = var_671);
        return;
    });
}
