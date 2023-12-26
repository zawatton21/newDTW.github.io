import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Even from '../events/index'
import * as Main from '../newdtw/index'

async function func139(this: any) {
        Adap.dbgprt(139);
        Adap.onexit(0);
        Gvar.var_686 = 50;
        Gvar.var_25[7] = 255;
        Gvar.var_26[7] = 255;
        Gvar.var_27[7] = 255;
        Gvar.var_25[8] = 255;
        Gvar.var_26[8] = 150;
        Gvar.var_27[8] = 255;
        Gvar.var_25[9] = 255;
        Gvar.var_26[9] = 0;
        Gvar.var_27[9] = 0;
        Gvar.var_25[10] = 130;
        Gvar.var_26[10] = 255;
        Gvar.var_27[10] = 130;
        Gvar.var_25[11] = 100;
        Gvar.var_26[11] = 160;
        Gvar.var_27[11] = 190;
        Gvar.var_25[12] = 255;
        Gvar.var_26[12] = 255;
        Gvar.var_27[12] = 0;
        Gvar.var_25[13] = 0;
        Gvar.var_26[13] = 0;
        Gvar.var_27[13] = 255;
        Gvar.var_687 = 0;
        Gvar.var_688 = 0;
        Gvar.var_689 = 255;
        Gvar.var_25[14] = 60;
        Gvar.var_690 = 60;
        Gvar.var_655 = 90;
        Gvar.var_656 = 88;
        Gvar.var_657 = 65;
        Gvar.var_658 = 83;
        Gvar.var_659 = 16;
        Gvar.var_660 = 67;
        Gvar.var_653 = 35;
        Gvar.var_650 = 40;
        Gvar.var_654 = 34;
        Gvar.var_647 = 37;
        Gvar.var_648 = 39;
        Gvar.var_651 = 36;
        Gvar.var_649 = 38;
        Gvar.var_652 = 33;
        Gvar.var_691[1] = Gvar.var_655;
        Gvar.var_691[2] = Gvar.var_656;
        Gvar.var_691[3] = Gvar.var_657;
        Gvar.var_691[4] = Gvar.var_658;
        Gvar.var_691[5] = Gvar.var_659;
        Gvar.var_691[6] = Gvar.var_660;
        
        Gvar.var_692 = 8192;
        Gvar.var_693 = 2048;
        Gvar.var_694 = 4096;
        Gvar.var_695 = 16384;
        Gvar.var_696 = 65536;
        Gvar.var_697 = 32768;
        Gvar.var_698 = 131072;
        Gvar.var_699 = 262144;
        Gvar.var_700 = 524288;
        Gvar.var_701 = 1048576;
        
        Gvar.var_662 = Gvar.var_692 + Gvar.var_693 + Gvar.var_694 + Gvar.var_695 + Gvar.var_696 + Gvar.var_697 + Gvar.var_698 + Gvar.var_699 + Gvar.var_700 + Gvar.var_701;

        Gvar.var_664[1] = Gvar.var_692;
        Gvar.var_664[2] = Gvar.var_693;
        Gvar.var_664[3] = Gvar.var_694;
        Gvar.var_664[4] = Gvar.var_695;
        Gvar.var_664[5] = Gvar.var_696;
        Gvar.var_664[6] = Gvar.var_697;
        Gvar.var_664[7] = Gvar.var_698;
        Gvar.var_664[8] = Gvar.var_699;
        Gvar.var_664[9] = Gvar.var_700;
        Gvar.var_664[10] = Gvar.var_701;
        Gvar.var_494[39] = "ｽﾞﾎﾞﾝのﾁｬｯｸを開けたｵﾔｼﾞが通った。";
        Gvar.var_494[40] = "";
        Gvar.var_494[37] = "クシャミをした。";
        Gvar.var_494[38] = "ちくしょーと言った。";
        Gvar.var_494[35] = "女の人がクスクス笑った。";
        Gvar.var_494[36] = "";
        Gvar.var_494[33] = "雨が降った。";
        Gvar.var_494[34] = "";
        Gvar.var_494[31] = "雷がペプシの上に落ちた。";
        Gvar.var_494[32] = "";

        // 
        await Adap.exist("00.dat");
        if (Gvar.strsize == (-1)) {
            await Adap.bsave("00.dat", Gvar.data = Gvar.var_447, null, null);
            await Adap.bsave("00.dat", Gvar.data = Gvar.var_686, null, 0);
            await Adap.bsave("00.dat", Gvar.data = Gvar.var_702, null, 100);    
            await Adap.bsave("00.dat", Gvar.data = Gvar.var_25, null, 200);
            await Adap.bsave("00.dat", Gvar.data = Gvar.var_26, null, 300);
            await Adap.bsave("00.dat", Gvar.data = Gvar.var_27, null, 400);
            await Adap.bsave("00.dat", Gvar.data = Gvar.var_691, null, 1000);
            await Adap.bsave("00.dat", Gvar.data = Gvar.var_664, null, 1500);
            await Main.func139(); // データ読込み処理(00.datファル、01 ~ 03.datセーブデータ解析処理)
            return;
        }

        await Adap.exist("01.dat");
        if (Gvar.strsize == (-1)) {
            Gvar.var_703 = 0;
        }
        else {
            Gvar.var_703 = 1;
            Gvar.var_704 = await Adap.bload("01.dat");
            // Gvar.var_704[61] == 0 だと拠点    
            if (Gvar.var_704[61] == 0) {
                if (Gvar.var_704[117] == 0) {
                    Gvar.var_705 = "ヴェネチアホテル";
                }
                if (Gvar.var_704[117] == 1) {
                    Gvar.var_705 = "亀の中";
                }
                if (Gvar.var_704[117] == 2) {
                    Gvar.var_705 = "酒場";
                }
            }
            // Gvar.var_704[61] == 1 だとホテルの外 
            if (Gvar.var_704[61] == 1) {
                if (Gvar.var_704[1] <= 2) {
                    Gvar.var_705 = "水の都";
                }
                if (Gvar.var_704[1] >= 3 && Gvar.var_704[1] <= 5) {
                    Gvar.var_705 = "郊外の森林";
                }
                if (Gvar.var_704[1] >= 6 && Gvar.var_704[1] <= 8) {
                    Gvar.var_705 = "紅海の浜辺";
                }
                if (Gvar.var_704[1] >= 9 && Gvar.var_704[1] <= 11) {
                    Gvar.var_705 = "山岳地帯";
                }
                if (Gvar.var_704[1] == 12) {
                    Gvar.var_705 = "エンヤホテル";
                }
            }
            // Gvar.var_704[61] == 2 だとレクイエムの大迷宮
            if (Gvar.var_704[61] == 2) {
                Gvar.var_705 = "レクイエムの大迷宮";
                if (Gvar.var_704[1] == 30) {
                    Gvar.var_705 = "黄金の風";
                }
            }
            // Gvar.var_704[61] == 3 だとディアボロの試練
            if (Gvar.var_704[61] == 3) {
                Gvar.var_705 = "ディアボロの試練";
                if (Gvar.var_704[1] == 99) {
                    Gvar.var_705 = "自由人の狂想曲";
                }
            }
            // Gvar.var_704[61] == 4 だと一巡後の世界
            if (Gvar.var_704[61] == 4) {
                Gvar.var_705 = "一巡後の世界";
            }
            if (Gvar.var_704[61] == 5) {
                Gvar.var_705 = "" + Gvar.var_21;
                if (Gvar.var_704[1] == Gvar.var_20) {
                    Gvar.var_705 = "" + Gvar.var_22;
                }
            }
            if (Gvar.var_704[187] == 1) {
                Gvar.var_705 = "虹村屋敷";
            }
            if (Gvar.var_704[187] == 2) {
                Gvar.var_705 = "杜王町埠頭";
            }
            if (Gvar.var_704[187] == 3) {
                Gvar.var_705 = "吉良屋敷";
            }
            if (Gvar.var_704[187] == 4) {
                Gvar.var_705 = "星屑の十字軍";
            }
            if (Gvar.var_704[187] == 5) {
                Gvar.var_705 = "ビンの中";
            }
            if (Gvar.var_704[187] == 6) {
                Gvar.var_705 = "ナチス実験施設";
            }
            if (Gvar.var_704[187] == 7) {
                Gvar.var_705 = "砂漠";
            }
            if (Gvar.var_704[187] == 8) {
                Gvar.var_705 = "幻覚の迷宮";
            }
            if (Gvar.var_704[187] == 9) {
                Gvar.var_705 = "幽霊部屋";
            }
            Gvar.var_706 = Gvar.var_704[1];
            Gvar.var_707 = Gvar.var_704[108];
            Gvar.var_708 = Gvar.var_704[88]; // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ
            Gvar.var_709 = Gvar.var_704[93];
            Gvar.var_710 = Gvar.var_704[94];
        }
        await Adap.exist("02.dat");
        if (Gvar.strsize == (-1)) {
            Gvar.var_711 = 0;
        }
        else {
            Gvar.var_711 = 1;
            Gvar.var_704 = await Adap.bload("02.dat");
            if (Gvar.var_704[61] == 0) {
                if (Gvar.var_704[117] == 0) {
                    Gvar.var_712 = "ヴェネチアホテル";
                }
                if (Gvar.var_704[117] == 1) {
                    Gvar.var_712 = "亀の中";
                }
                if (Gvar.var_704[117] == 2) {
                    Gvar.var_712 = "酒場";
                }
            }
            if (Gvar.var_704[61] == 1) {
                if (Gvar.var_704[1] <= 2) {
                    Gvar.var_712 = "水の都";
                }
                if (Gvar.var_704[1] >= 3 && Gvar.var_704[1] <= 5) {
                    Gvar.var_712 = "郊外の森林";
                }
                if (Gvar.var_704[1] >= 6 && Gvar.var_704[1] <= 8) {
                    Gvar.var_712 = "紅海の浜辺";
                }
                if (Gvar.var_704[1] >= 9 && Gvar.var_704[1] <= 11) {
                    Gvar.var_712 = "山岳地帯";
                }
                if (Gvar.var_704[1] == 12) {
                    Gvar.var_712 = "エンヤホテル";
                }
            }
            if (Gvar.var_704[61] == 2) {
                Gvar.var_712 = "レクイエムの大迷宮";
                if (Gvar.var_704[1] == 30) {
                    Gvar.var_712 = "黄金の風";
                }
            }
            if (Gvar.var_704[61] == 3) {
                Gvar.var_712 = "ディアボロの試練";
                if (Gvar.var_704[1] == 99) {
                    Gvar.var_712 = "自由人の狂想曲";
                }
            }
            if (Gvar.var_704[61] == 4) {
                Gvar.var_712 = "一巡後の世界";
            }
            if (Gvar.var_704[61] == 5) {
                Gvar.var_712 = "" + Gvar.var_21;
                if (Gvar.var_704[1] == Gvar.var_20) {
                    Gvar.var_712 = "" + Gvar.var_22;
                }
            }
            if (Gvar.var_704[187] == 1) {
                Gvar.var_712 = "虹村屋敷";
            }
            if (Gvar.var_704[187] == 2) {
                Gvar.var_712 = "杜王町埠頭";
            }
            if (Gvar.var_704[187] == 3) {
                Gvar.var_712 = "吉良屋敷";
            }
            if (Gvar.var_704[187] == 4) {
                Gvar.var_712 = "星屑の十字軍";
            }
            if (Gvar.var_704[187] == 5) {
                Gvar.var_712 = "ビンの中";
            }
            if (Gvar.var_704[187] == 6) {
                Gvar.var_712 = "ナチス実験施設";
            }
            if (Gvar.var_704[187] == 7) {
                Gvar.var_712 = "砂漠";
            }
            if (Gvar.var_704[187] == 8) {
                Gvar.var_712 = "幻覚の迷宮";
            }
            if (Gvar.var_704[187] == 9) {
                Gvar.var_712 = "幽霊部屋";
            }
            Gvar.var_713 = Gvar.var_704[1];
            Gvar.var_714 = Gvar.var_704[108];
            Gvar.var_715 = Gvar.var_704[88]; // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ
            Gvar.var_716 = Gvar.var_704[93];
            Gvar.var_717 = Gvar.var_704[94];
        }


        await Adap.exist("03.dat");
        if (Gvar.strsize == (-1)) {
            Gvar.var_718 = 0;
        }
        else {
            Gvar.var_718 = 1;
            Gvar.var_704 = await Adap.bload("03.dat");
            if (Gvar.var_704[61] == 0) {
                if (Gvar.var_704[117] == 0) {
                    Gvar.var_719 = "ヴェネチアホテル";
                }
                if (Gvar.var_704[117] == 1) {
                    Gvar.var_719 = "亀の中";
                }
                if (Gvar.var_704[117] == 2) {
                    Gvar.var_719 = "酒場";
                }
            }
            if (Gvar.var_704[61] == 1) {
                if (Gvar.var_704[1] <= 2) {
                    Gvar.var_719 = "水の都";
                }
                if (Gvar.var_704[1] >= 3 && Gvar.var_704[1] <= 5) {
                    Gvar.var_719 = "郊外の森林";
                }
                if (Gvar.var_704[1] >= 6 && Gvar.var_704[1] <= 8) {
                    Gvar.var_719 = "紅海の浜辺";
                }
                if (Gvar.var_704[1] >= 9 && Gvar.var_704[1] <= 11) {
                    Gvar.var_719 = "山岳地帯";
                }
                if (Gvar.var_704[1] == 12) {
                    Gvar.var_719 = "エンヤホテル";
                }
            }
            if (Gvar.var_704[61] == 2) {
                Gvar.var_719 = "レクイエムの大迷宮";
                if (Gvar.var_704[1] == 30) {
                    Gvar.var_719 = "黄金の風";
                }
            }
            if (Gvar.var_704[61] == 3) {
                Gvar.var_719 = "ディアボロの試練";
                if (Gvar.var_704[1] == 99) {
                    Gvar.var_719 = "自由人の狂想曲";
                }
            }
            if (Gvar.var_704[61] == 4) {
                Gvar.var_719 = "一巡後の世界";
            }
            if (Gvar.var_704[61] == 5) {
                Gvar.var_719 = "" + Gvar.var_21;
                if (Gvar.var_704[1] == Gvar.var_20) {
                    Gvar.var_719 = "" + Gvar.var_22;
                }
            }
            if (Gvar.var_704[187] == 1) {
                Gvar.var_719 = "虹村屋敷";
            }
            if (Gvar.var_704[187] == 2) {
                Gvar.var_719 = "杜王町埠頭";
            }
            if (Gvar.var_704[187] == 3) {
                Gvar.var_719 = "吉良屋敷";
            }
            if (Gvar.var_704[187] == 4) {
                Gvar.var_719 = "星屑の十字軍";
            }
            if (Gvar.var_704[187] == 5) {
                Gvar.var_719 = "ビンの中";
            }
            if (Gvar.var_704[187] == 6) {
                Gvar.var_719 = "ナチス実験施設";
            }
            if (Gvar.var_704[187] == 7) {
                Gvar.var_719 = "砂漠";
            }
            if (Gvar.var_704[187] == 8) {
                Gvar.var_719 = "幻覚の迷宮";
            }
            if (Gvar.var_704[187] == 9) {
                Gvar.var_719 = "幽霊部屋";
            }
            Gvar.var_720 = Gvar.var_704[1];
            Gvar.var_721 = Gvar.var_704[108];
            Gvar.var_722 = Gvar.var_704[88]; // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ
            Gvar.var_723 = Gvar.var_704[93];
            Gvar.var_724 = Gvar.var_704[94];
        }
        Gvar.var_686 = await Adap.bload("00.dat", null, 0);

        Gvar.var_702 = await Adap.bload("00.dat", null, 100);

        Gvar.var_25_x = await Adap.bload("00.dat", null, 200);
        Gvar.var_26_x = await Adap.bload("00.dat", null, 300);
        Gvar.var_27_x = await Adap.bload("00.dat", null, 400);
        if (Gvar.var_702 == 0) {
            Gvar.var_25[1] = 255;
            Gvar.var_26[1] = 255;
            Gvar.var_27[1] = 255;
            Gvar.var_25[2] = 255;
            Gvar.var_26[2] = 255;
            Gvar.var_27[2] = 255;
            Gvar.var_25[3] = 255;
            Gvar.var_26[3] = 255;
            Gvar.var_27[3] = 255;
            Gvar.var_25[4] = 255;
            Gvar.var_26[4] = 255;
            Gvar.var_27[4] = 255;
            Gvar.var_25[5] = 255;
            Gvar.var_26[5] = 255;
            Gvar.var_27[5] = 255;
            Gvar.var_25[6] = 255;
            Gvar.var_26[6] = 255;
            Gvar.var_27[6] = 255;

            // Ver0.1310にて追加。追加したことで白色へ初期化できる。
            Gvar.var_25[7] = 255;
            Gvar.var_26[7] = 255;
            Gvar.var_27[7] = 255;
            Gvar.var_25[8] = 255;
            Gvar.var_26[8] = 255;
            Gvar.var_27[8] = 255;
            Gvar.var_25[9] = 255;
            Gvar.var_26[9] = 255;
            Gvar.var_27[9] = 255;
            Gvar.var_25[10] = 255;
            Gvar.var_26[10] = 255;
            Gvar.var_27[10] = 255;
            Gvar.var_25[11] = 255;
            Gvar.var_26[11] = 255;
            Gvar.var_27[11] = 255;
            Gvar.var_25[12] = 255;
            Gvar.var_26[12] = 255;
            Gvar.var_27[12] = 255;
        }
        if (Gvar.var_702 == 1) {
            Gvar.var_25[1] = Gvar.var_25[7];
            Gvar.var_26[1] = Gvar.var_26[7];
            Gvar.var_27[1] = Gvar.var_27[7];
            Gvar.var_25[2] = Gvar.var_25[8];
            Gvar.var_26[2] = Gvar.var_26[8];
            Gvar.var_27[2] = Gvar.var_27[8];
            Gvar.var_25[3] = Gvar.var_25[9];
            Gvar.var_26[3] = Gvar.var_26[9];
            Gvar.var_27[3] = Gvar.var_27[9];
            Gvar.var_25[4] = Gvar.var_25[10];
            Gvar.var_26[4] = Gvar.var_26[10];
            Gvar.var_27[4] = Gvar.var_27[10];
            Gvar.var_25[5] = Gvar.var_25[11];
            Gvar.var_26[5] = Gvar.var_26[11];
            Gvar.var_27[5] = Gvar.var_27[11];
            Gvar.var_25[6] = Gvar.var_25[12];
            Gvar.var_26[6] = Gvar.var_26[12];
            Gvar.var_27[6] = Gvar.var_27[12];
        }
        Gvar.var_687 = Gvar.var_25[13];
        Gvar.var_688 = Gvar.var_26[13];
        Gvar.var_689 = Gvar.var_27[13];
        Gvar.var_690 = Gvar.var_25[14];
        Gvar.var_691 = await Adap.bload("00.dat", null, 1000);
        Gvar.var_655 = Gvar.var_691[1];
        Gvar.var_656 = Gvar.var_691[2];
        Gvar.var_657 = Gvar.var_691[3];
        Gvar.var_658 = Gvar.var_691[4];
        Gvar.var_659 = Gvar.var_691[5];
        Gvar.var_660 = Gvar.var_691[6];
        Gvar.var_664 = await Adap.bload("00.dat", null, 1500);
        Gvar.var_692 = Gvar.var_664[1];
        Gvar.var_693 = Gvar.var_664[2];
        Gvar.var_694 = Gvar.var_664[3];
        Gvar.var_695 = Gvar.var_664[4];
        Gvar.var_696 = Gvar.var_664[5];
        Gvar.var_697 = Gvar.var_664[6];
        Gvar.var_698 = Gvar.var_664[7];
        Gvar.var_699 = Gvar.var_664[8];
        Gvar.var_700 = Gvar.var_664[9];
        Gvar.var_701 = Gvar.var_664[10];
        Gvar.var_64 = 0;
        Gvar.var_725 = 0;
        Gvar.var_726 = 1; // 冒険の書No.変数 = 1
        Adap.color(0, 0, 0);
        Adap.boxf(0, 0, 340, 340);
        await Adap.wait(1);
        Gvar.var_18 = 0;
        for (let cnt1 = 0; cnt1 < 25; ++cnt1) {
            Adap.redraw(0);
            Adap.color(0, 0, 0);
            Adap.boxf(0, 0, 340, 340);
            Adap.gmode(4, null, null, Gvar.var_18);
            Adap.pos(0, 0);
            Gvar.var_727 = 0;
            Gvar.var_728 = 350;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                Gvar.var_729 = 0;
                Gvar.var_730 = 720;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    Adap.pos(Gvar.var_729, Gvar.var_727);
                    Adap.gcopy(17, Gvar.var_730, Gvar.var_728, 40, 40);
                    Gvar.var_729 = Gvar.var_729 + 40;
                    Gvar.var_730 = Gvar.var_730 + 40;
                }
                Gvar.var_727 = Gvar.var_727 + 40;
                Gvar.var_728 = Gvar.var_728 + 40;
            }
            if (Gvar.var_10 >= 1) {
                await Func.func338();
            }
            Adap.redraw(1);
            await Adap.wait(1);
            Gvar.var_18 = Gvar.var_18 + 10;
        }
        Adap.redraw(0);
        Adap.color(0, 0, 0);
        Adap.boxf(0, 0, 340, 340);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Gvar.var_727 = 0;
        Gvar.var_728 = 350;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            Gvar.var_729 = 0;
            Gvar.var_730 = 720;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                Adap.pos(Gvar.var_729, Gvar.var_727);
                Adap.gcopy(17, Gvar.var_730, Gvar.var_728, 40, 40);
                Gvar.var_729 = Gvar.var_729 + 40;
                Gvar.var_730 = Gvar.var_730 + 40;
            }
            Gvar.var_727 = Gvar.var_727 + 40;
            Gvar.var_728 = Gvar.var_728 + 40;
        }
        if (Gvar.var_10 >= 1) {
            await Func.func338();
        }
        Adap.redraw(1);
        await Adap.wait(50);
        Gvar.var_631 = 1000;
        await Func.func109(); // タイトル画面でのオープニング曲再生
        Gvar.var_731 = 1;

        Adap.DSPLAY(175);
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            await Adap.wait(3);
            Adap.redraw(0);
            Adap.color(0, 0, 0);
            Adap.boxf(0, 0, 340, 340);
            Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
            Gvar.var_727 = 0;
            Gvar.var_728 = 350;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                Gvar.var_729 = 0;
                Gvar.var_730 = 720;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    Adap.pos(Gvar.var_729, Gvar.var_727);
                    Adap.gcopy(17, Gvar.var_730, Gvar.var_728, 40, 40);
                    Gvar.var_729 = Gvar.var_729 + 40;
                    Gvar.var_730 = Gvar.var_730 + 40;
                }
                Gvar.var_727 = Gvar.var_727 + 40;
                Gvar.var_728 = Gvar.var_728 + 40;
            }
            Adap.pos(36, 110);
            if (Gvar.var_731 >= 1 && Gvar.var_731 <= 3) {
                Adap.gcopy(17, 1080, 600, 90, 83);
            }
            if (Gvar.var_731 >= 4 && Gvar.var_731 <= 6) {
                Adap.gcopy(17, 1080, 480, 90, 83);
            }
            if (Gvar.var_731 >= 7) {
                Adap.gcopy(17, 1080, 360, 90, 83);
            }
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
                if (cnt2 == 0) {
                    Adap.pos(45, 50);
                }
                if (cnt2 == 1) {
                    Adap.pos(100, 60);
                }
                if (cnt2 == 2) {
                    Adap.pos(35, 90);
                }
                if (cnt2 == 3) {
                    Adap.pos(80, 100);
                }
                if (Gvar.var_731 == 1 || Gvar.var_731 == 2) {
                    Adap.gcopy(17, 800, 760, 40, 80);
                }
                if (Gvar.var_731 == 3 || Gvar.var_731 == 4) {
                    Adap.gcopy(17, 840, 760, 40, 80);
                }
                if (Gvar.var_731 == 5 || Gvar.var_731 == 6) {
                    Adap.gcopy(17, 880, 760, 40, 80);
                }
                if (Gvar.var_731 == 7 || Gvar.var_731 == 8) {
                    Adap.gcopy(17, 920, 760, 40, 80);
                }
                if (Gvar.var_731 == 9 || Gvar.var_731 == 10) {
                    Adap.gcopy(17, 960, 760, 40, 80);
                }
                if (Gvar.var_731 == 11 || Gvar.var_731 == 12) {
                    Adap.gcopy(17, 1000, 760, 40, 80);
                }
                if (Gvar.var_731 == 13 || Gvar.var_731 == 14) {
                    Adap.gcopy(17, 1040, 760, 40, 80);
                }
                if (Gvar.var_731 == 15 || Gvar.var_731 == 16) {
                    Adap.gcopy(17, 1080, 760, 40, 80);
                }
                if (Gvar.var_731 == 17 || Gvar.var_731 == 18) {
                    Adap.gcopy(17, 1120, 760, 40, 80);
                }
                if (Gvar.var_731 == 19 || Gvar.var_731 == 20) {
                    Adap.gcopy(17, 1160, 760, 40, 80);
                }
            }
            if (Gvar.var_10 >= 1) {
                await Func.func338();
            }
            Adap.redraw(1);
            Gvar.var_731++;
        }
        await Adap.wait(1);
        Gvar.var_731 = 0;
        Gvar.var_732 = 0;
        await Main.func140();
}

export {func139}



async function func140(this: any) {
        Adap.dbgprt(140);
        await  Adap.await_(50);
        await Main.func141();
        if (Gvar.var_12 == 1) {
            Gvar.conf_keyon = Adap.getkey(112); // キーF1入力確認
            if (Gvar.conf_keyon == 1) {
                await Func.func221();
                return;
            }
            Gvar.conf_keyon = Adap.getkey(113); // キーF2入力確認
            if (Gvar.conf_keyon == 1) {
                await Func.func224();
                return;
            }
        }
        Gvar.var_628 = 1;
        await Func.func080(); // 各キー入力確認
        // Ver0.1401にて「Gvar.key_F_on == 1」を追加
        if (Gvar.key_Z_on == 1 || Gvar.key_X_on == 1 || Gvar.key_A_on == 1 || Gvar.key_S_on == 1 || Gvar.key_Shift_on == 1 || Gvar.key_C_on == 1 || Gvar.key_F_on == 1) {

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func178(); // 処理確認タイマー(3m秒)
            Gvar.var_599 = 5;
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                Adap.redraw(0);
                Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
                Gvar.var_727 = 0;
                Gvar.var_728 = 350;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    Gvar.var_729 = 0;
                    Gvar.var_730 = 720;
                    for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                        Adap.pos(Gvar.var_729, Gvar.var_727);
                        Adap.gcopy(17, Gvar.var_730, Gvar.var_728, 40, 40);
                        Gvar.var_729 = Gvar.var_729 + 40;
                        Gvar.var_730 = Gvar.var_730 + 40;
                    }
                    Gvar.var_727 = Gvar.var_727 + 40;
                    Gvar.var_728 = Gvar.var_728 + 40;
                }
                Adap.pos(36, 110);
                Adap.gcopy(17, 1080, 360, 90, 83);
                await Func.func180(); // ロード中の黒画面処理?
                if (Gvar.var_10 >= 1) {
                    await Func.func338();
                }
                await Adap.wait(2);
                Adap.redraw(1);
                Gvar.var_599 = Gvar.var_599 - 1;
            }
            Gvar.var_599 = 0;
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                Adap.redraw(0);
                await Main.func146(); // ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
                await Func.func180(); // ロード中の黒画面処理?
                if (Gvar.var_10 >= 1) {
                    await Func.func338();
                }
                await Adap.wait(2);
                Adap.redraw(1);
                Gvar.var_599 = Gvar.var_599 + 1;
            }
            Gvar.var_732 = 0;
            await Main.func142();
            return;
        }
        await Main.func140();
        return;
}

export {func140}


async function func141(this: any) {
    Adap.dbgprt(141);
    Adap.redraw(0);
    Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
    Gvar.var_727 = 0;
    Gvar.var_728 = 350;
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        Gvar.var_729 = 0;
        Gvar.var_730 = 720;
        for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
            Adap.pos(Gvar.var_729, Gvar.var_727);
            Adap.gcopy(17, Gvar.var_730, Gvar.var_728, 40, 40);
            Gvar.var_729 = Gvar.var_729 + 40;
            Gvar.var_730 = Gvar.var_730 + 40;
        }
        Gvar.var_727 = Gvar.var_727 + 40;
        Gvar.var_728 = Gvar.var_728 + 40;
    }
    Adap.pos(36, 110);
    Adap.gcopy(17, 1080, 360, 90, 83);
    Adap.pos(100, 250);
    Adap.color(0, 0, 0);
    Gvar.var_733 = Gvar.var_732;
    if (Gvar.var_732 > 255) {
        Gvar.var_733 = 255 - (Gvar.var_732 - 255);
    }
    Adap.gmode(4, null, null, Gvar.var_733);
    Adap.gcopy(17, 0, 1090, 140, 25);
    Gvar.var_732 = Gvar.var_732 + 6;
    if (Gvar.var_732 > 500) {
        Gvar.var_732 = 0;
    }
    if (Gvar.var_635 >= 1 || Gvar.var_636 >= 1 || Gvar.var_633 >= 1 || Gvar.var_632 >= 1) {
        await Func.func102(); // 各ボリューム調整キーを押した時の表示
    }
    if (Gvar.var_10 >= 1) {
        await Func.func338();
    }
    Adap.redraw(1);
    return;
}

export {func141}

// タイトル画面キー操作処理
async function func142(this: any) {
    Adap.dbgprt(142);
    Gvar.var_734 = 0;
    await Func.func080(); // 各キー入力確認
    if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {

        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        await Main.func147();
        return;
    }
    if (Gvar.key_X_on == 1) {

        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        await Func.func178(); // 処理確認タイマー(3m秒)
        Gvar.var_599 = 5;
        for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
            Adap.redraw(0);
            await Main.func146(); // ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
            await Func.func180(); // ロード中の黒画面処理?
            if (Gvar.var_10 >= 1) {
                await Func.func338();
            }
            await Adap.wait(2);
            Adap.redraw(1);
            Gvar.var_599 = Gvar.var_599 - 1;
        }
        Gvar.var_599 = 0;
        for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
            Adap.redraw(0);
            Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
            Gvar.var_727 = 0;
            Gvar.var_728 = 350;
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                Gvar.var_729 = 0;
                Gvar.var_730 = 720;
                for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                    Adap.pos(Gvar.var_729, Gvar.var_727);
                    Adap.gcopy(17, Gvar.var_730, Gvar.var_728, 40, 40);
                    Gvar.var_729 = Gvar.var_729 + 40;
                    Gvar.var_730 = Gvar.var_730 + 40;
                }
                Gvar.var_727 = Gvar.var_727 + 40;
                Gvar.var_728 = Gvar.var_728 + 40;
            }
            Adap.pos(36, 110);
            Adap.gcopy(17, 1080, 360, 90, 83);
            await Func.func180(); // ロード中の黒画面処理?
            if (Gvar.var_10 >= 1) {
                await Func.func338();
            }
            await Adap.wait(2);
            Adap.redraw(1);
            Gvar.var_599 = Gvar.var_599 + 1;
        }
        Adap.pos(0, 0);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        await Main.func140();
        return;
    }
    if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
        if (Gvar.var_64 == 0) {
            Gvar.var_64 = 4;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Main.func143();
            await Adap.wait(13);
            await Main.func142();
            return;
        }
        if (Gvar.var_64 == 1) {
            Gvar.var_64 = 0;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Main.func143();
            await Adap.wait(10);
        }
        if (Gvar.var_64 == 2) {
            Gvar.var_64 = 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Main.func143();
            await Adap.wait(10);
        }
        if (Gvar.var_64 == 3) {
            Gvar.var_64 = 2;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Main.func143();
            await Adap.wait(10);
        }
        if (Gvar.var_64 == 4) {
            Gvar.var_64 = 3;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Main.func143();
            await Adap.wait(10);
        }
    }
    if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
        if (Gvar.var_64 == 4) {
            Gvar.var_64 = 0;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Main.func143();
            await Adap.wait(13);
            await Main.func142();
            return;
        }
        if (Gvar.var_64 == 3) {
            Gvar.var_64 = 4;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Main.func143();
            await Adap.wait(10);
        }
        if (Gvar.var_64 == 2) {
            Gvar.var_64 = 3;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Main.func143();
            await Adap.wait(10);
        }
        if (Gvar.var_64 == 1) {
            Gvar.var_64 = 2;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Main.func143();
            await Adap.wait(10);
        }
        if (Gvar.var_64 == 0) {
            Gvar.var_64 = 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Main.func143();
            await Adap.wait(10);
        }
    }
    await Main.func143();
    await  Adap.await_(50);
    await Main.func142();
    return;
}

export {func142}


async function func143(this: any) {
    Adap.dbgprt(143);
    Adap.redraw(0);
    await Main.func146(); // ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
    if (Gvar.var_10 >= 1) {
        await Func.func338();
    }
    Adap.redraw(1);
    return;
}

export {func143}

// ログイン画面(タイトル画面/ログイン)動作処理
async function func144(this: any) {
    Adap.dbgprt(144);
    await Func.func080(); // 各キー入力確認
    if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
        if (Gvar.var_734 == 0) {
            Gvar.var_628 = 0;
            Gvar.var_632 = 0;
            Gvar.var_633 = 0;
            Gvar.var_634 = 0;
            Gvar.var_635 = 0;
            Gvar.var_636 = 0;
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            if (Gvar.var_726 == 1) {
                Gvar.var_735 = "01.dat";
            }
            if (Gvar.var_726 == 2) {
                Gvar.var_735 = "02.dat";
            }
            if (Gvar.var_726 == 3) {
                Gvar.var_735 = "03.dat";
            }
            await Adap.exist(Gvar.var_735); //おそらくセーブデータが無ければ
            if (Gvar.strsize == (-1)) {
                await Func.func178(); // 処理確認タイマー(3m秒)
                await Even.func150(); // オープニング (5部最終決戦 ジョルノ達との戦いの場面)
                return;
            }
            await Func.func178(); // 処理確認タイマー(3m秒)
            await Main.func005(); // セーブデータを読み込む前のフラグ確認処理(ホテルのイベントフラグ、BGM再生曲、マップ背景画像)
            return;
        }
    }
    if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
        if (Gvar.var_734 == 1) {

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func178(); // 処理確認タイマー(3m秒)
            await Main.func145();
            return;
        }
    }
    if (Gvar.key_X_on == 1) {

        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        await Func.func178(); // 処理確認タイマー(3m秒)
        Gvar.var_725 = 0;
        await Main.func142();
        return;
    }
    if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
        if (Gvar.var_726 == 1) {
            Gvar.var_726 = 1;
        }
        if (Gvar.var_726 == 2) {
            Gvar.var_726 = 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Adap.wait(8);
        }
        if (Gvar.var_726 == 3) {
            Gvar.var_726 = 2;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Adap.wait(8);
        }
    }
    if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
        if (Gvar.var_726 == 3) {
            Gvar.var_726 = 3;
        }
        if (Gvar.var_726 == 2) {
            Gvar.var_726 = 3;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Adap.wait(8);
        }
        if (Gvar.var_726 == 1) {
            Gvar.var_726 = 2;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Adap.wait(8);
        }
    }
    Adap.redraw(0);
    await Main.func146(); // ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
    await Main.func148(); // ボス日記選択画面(タイトル画面/ログイン画面/ボス日記選択画面)の表示
    if (Gvar.var_10 >= 1) {
        await Func.func338();
    }
    Adap.redraw(1);
    await  Adap.await_(50);
    await Main.func144(); // ログイン画面(タイトル画面/ログイン)動作処理 (ボス日記選択等のセーブデータロード処理)
    return;
}

export {func144}


async function func145(this: any) {
    Adap.dbgprt(145);
    Gvar.conf_keyon = Adap.getkey(89); // キーY入力確認
    if (Gvar.conf_keyon == 1) {
        Gvar.conf_keyon = 0;
        Gvar.var_736 = 0;

        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        await Func.func240();
        Gvar.var_737 = 0;
        Gvar.var_725 = 0;
        await Main.func142();
        return;
    }
    await Func.func080(); // 各キー入力確認
    if (Gvar.key_X_on == 1) {
        await Func.func178(); // 処理確認タイマー(3m秒)
        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        Gvar.var_737 = 0;
        await Main.func144(); // ログイン画面(タイトル画面/ログイン)動作処理 (ボス日記選択等のセーブデータロード処理)
        return;
    }
    Adap.redraw(0);
    await Main.func146(); // ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
    await Main.func148(); // ボス日記選択画面(タイトル画面/ログイン画面/ボス日記選択画面)の表示
    await Main.func149(); // ボス日記消去選択時の表示
    if (Gvar.var_10 >= 1) {
        await Func.func338();
    }
    Adap.redraw(1);
    await  Adap.await_(50);
    await Main.func145();
    return;
}

export {func145}

// ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
async function func146(this: any) {
    Adap.dbgprt(146);
    Gvar.var_738 = 0;
    Adap.gmode(2, null, null, null);
    Gvar.var_727 = 0;
    Gvar.var_728 = 400;
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        Gvar.var_729 = 0;
        Gvar.var_730 = 0;
        for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
            Adap.pos(Gvar.var_729, Gvar.var_727);
            Adap.gcopy(3, Gvar.var_730, Gvar.var_728, 40, 40);
            Gvar.var_729 = Gvar.var_729 + 40;
            Gvar.var_730 = Gvar.var_730 + 40;
        }
        Gvar.var_727 = Gvar.var_727 + 40;
        Gvar.var_728 = Gvar.var_728 + 40;
    }

    Adap.gmode(4, null, null, 100);
    Gvar.var_727 = 0;
    Gvar.var_728 = 0;
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        Gvar.var_729 = 0;
        Gvar.var_730 = 0;
        for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
            Adap.pos(Gvar.var_729, Gvar.var_727);
            Adap.gcopy(12, Gvar.var_730, Gvar.var_728, 40, 40);
            Gvar.var_729 = Gvar.var_729 + 40;
            Gvar.var_730 = Gvar.var_730 + 40;
        }
        Gvar.var_727 = Gvar.var_727 + 40;
        Gvar.var_728 = Gvar.var_728 + 40;
    }
    Adap.color(0, 0, 0);

    Adap.gmode(4, null, null, 150);
    Adap.pos(7, 20);
    Adap.gcopy(12, 0, 0, 160, 130 - Gvar.var_738);
    Adap.color(255, 255, 255);
    Adap.line(10, 21, 163, 21);
    Adap.line(10, 149 - Gvar.var_738, 163, 149 - Gvar.var_738);
    Adap.line(9, 22, 9, 147 - Gvar.var_738);
    Adap.line(165, 22, 165, 147 - Gvar.var_738);
    Adap.pset(10, 22);
    Adap.pset(164, 22);
    Adap.pset(10, 148 - Gvar.var_738);
    Adap.pset(164, 148 - Gvar.var_738);

    Adap.font("ＭＳ　Ｐゴシック", 16, 1);
    Adap.pos(45, 40);
    Adap.color(255, 255, 255);
    Adap.mes("冒険に出る");
    Adap.pos(45, 60);
    Adap.color(255, 255, 255);
    Adap.mes("ボス日記を消す");
    Adap.pos(45, 80);
    Adap.color(255, 255, 255);
    Adap.mes("魔少年の問題");
    Adap.pos(45, 100);
    Adap.color(155, 155, 155);
    Adap.mes("配布サイトへ");
    Adap.pos(45, 120);
    Adap.color(255, 255, 255);
    Adap.mes("終了");
    if (Gvar.var_64 == 0) {
        Adap.pos(12, 37);
    }
    if (Gvar.var_64 == 1) {
        Adap.pos(12, 57);
    }
    if (Gvar.var_64 == 2) {
        Adap.pos(12, 77);
    }
    if (Gvar.var_64 == 3) {
        Adap.pos(12, 97);
    }
    if (Gvar.var_64 == 4) {
        Adap.pos(12, 117);
    }
    Adap.gmode(2, null, null, null);
    if (Gvar.var_725 == 0 && Gvar.var_509 == 0) {
        // Adap.buffer(8)は"img1.gif"。X座標70、Y座標50から切り取り長さ X方向25、Y方向20
        // 絵:矢尻(ログイン画面での選択カーソル)           
        Adap.gcopy(8, 70, 50, 25, 20);
    }
    Adap.pos(240, 320);
    Adap.color(255, 255, 255);
    Adap.font("ＭＳ　Ｐゴシック", 12);
    
    // ログイン画面下のバージョンNo. 
    if (Gvar.var_12 == 0) {
        Adap.mes("version " + Gvar.version_number);
    }
    if (Gvar.var_12 == 1) {
        Adap.mes("Version " + Gvar.version_number);
    }
    return;
}

export {func146}


async function func147(this: any) {
    Adap.dbgprt(147);
    Gvar.var_599 = 0;
    if (Gvar.var_64 == 0) {
        await Func.func178(); // 処理確認タイマー(3m秒)
        Gvar.var_726 = 1;
        Gvar.var_725 = 1;
        await Main.func144(); // ログイン画面(タイトル画面/ログイン)動作処理 (ボス日記選択等のセーブデータロード処理)
        return;
    }
    if (Gvar.var_64 == 1) {
        await Func.func178(); // 処理確認タイマー(3m秒)
        Gvar.var_726 = 1;
        Gvar.var_725 = 1;
        Gvar.var_734 = 1;
        await Main.func144(); // ログイン画面(タイトル画面/ログイン)動作処理 (ボス日記選択等のセーブデータロード処理)
        return;
    }
    if (Gvar.var_64 == 2) {
        await Func.func178(); // 処理確認タイマー(3m秒)
        Adap.onexit(0);
        await Func.func882();
        return;
    }
    if (Gvar.var_64 == 4) {
        Adap.end();
    }
    await Main.func142();
    return;
}

export {func147}

// ボス日記選択画面(タイトル画面/ログイン画面/ボス日記選択画面)の表示
async function func148(this: any) {
    Adap.dbgprt(148);
    Adap.color(0, 0, 0);

    Adap.gmode(4, null, null, 150);
    Gvar.var_739 = 50;
    Gvar.var_740 = 70;
    Gvar.var_741 = Gvar.var_740;
    for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
        Adap.pos(50, Gvar.var_740);
        Adap.gcopy(12, 0, 0, 251, 60);
        Adap.color(255, 255, 255);
        Adap.line(Gvar.var_739 + 2, Gvar.var_740 + 1, Gvar.var_739 + 247, Gvar.var_740 + 1);
        Adap.line(Gvar.var_739 + 2, Gvar.var_740 + 59, Gvar.var_739 + 247, Gvar.var_740 + 59);
        Adap.line(Gvar.var_739 + 1, Gvar.var_740 + 2, Gvar.var_739 + 1, Gvar.var_740 + 57);
        Adap.line(Gvar.var_739 + 249, Gvar.var_740 + 2, Gvar.var_739 + 249, Gvar.var_740 + 57);
        Adap.pset(Gvar.var_739 + 2, Gvar.var_740 + 2);
        Adap.pset(Gvar.var_739 + 248, Gvar.var_740 + 2);
        Adap.pset(Gvar.var_739 + 2, Gvar.var_740 + 58);
        Adap.pset(Gvar.var_739 + 248, Gvar.var_740 + 58);
        Gvar.var_740 = Gvar.var_740 + 70;
    }

    Adap.font("ＭＳ　Ｐゴシック", 16, 1);
    Adap.color(255, 255, 255);

    // ボス日記1のデータが0でなければ
    if (Gvar.var_703 != 0) {
        Adap.pos(80, Gvar.var_741 + 15);
        Adap.mes("１：" + Gvar.var_705);
        Adap.pos(150, Gvar.var_741 + 35);
        if (Gvar.var_706 > 0) {
            Adap.mes("" + Gvar.var_706 + "階");
        }
        Adap.pos(200, Gvar.var_741 + 35);
        Adap.mes("" + Gvar.var_707 + "回死亡");

        // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグがONなら
        if (Gvar.var_708 >= 1) {
            Adap.pos(80, Gvar.var_741 + 35);
            Adap.gmode(2, null, null, null);
            // Adap.buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
            // 絵:エンブレム(ダンジョン(ホテルの外？)クリア時)
            Adap.gcopy(8, 100, 82, 17, 17);
        }
        // エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)解放フラグ
        if (Gvar.var_709 >= 1) {
            Adap.pos(102, Gvar.var_741 + 35);
            Adap.gmode(2, null, null, null);
            // Adap.buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
            // 絵:エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)
            Adap.gcopy(8, 120, 82, 17, 17);
        }
        if (Gvar.var_710 >= 1) {
            Adap.pos(124, Gvar.var_741 + 35);
            Adap.gmode(2, null, null, null);
            // Adap.buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
            // 絵:エンブレム(ダンジョン(ディアボロの試練？)クリア時)                      
            Adap.gcopy(8, 140, 82, 17, 17);
        }
    }
    if (Gvar.var_703 == 0) {
        Adap.pos(80, Gvar.var_741 + 15);
        Adap.mes("１： ボス日記を作る");
    }
    if (Gvar.var_711 != 0) {
        Adap.pos(80, Gvar.var_741 + 85);
        Adap.mes("２：" + Gvar.var_712);
        Adap.pos(150, Gvar.var_741 + 105);
        if (Gvar.var_713 > 0) {
            Adap.mes("" + Gvar.var_713 + "階");
        }
        Adap.pos(200, Gvar.var_741 + 105);
        Adap.mes("" + Gvar.var_714 + "回死亡");

        // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ
        if (Gvar.var_715 >= 1) {
            Adap.pos(80, Gvar.var_741 + 105);
            Adap.gmode(2, null, null, null);   
            // Adap.buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
            // 絵:エンブレム(ダンジョン(ホテルの外？)クリア時)
            Adap.gcopy(8, 100, 82, 17, 17);
        }
        // エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)解放フラグ
        if (Gvar.var_716 >= 1) {
            Adap.pos(102, Gvar.var_741 + 105);
            Adap.gmode(2, null, null, null);
            // Adap.buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
            // 絵:エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)                
            Adap.gcopy(8, 120, 82, 17, 17);
        }
        if (Gvar.var_717 >= 1) {
            Adap.pos(124, Gvar.var_741 + 105);
            Adap.gmode(2, null, null, null);
            // Adap.buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
            // 絵:エンブレム(ダンジョン(ディアボロの試練？)クリア時)                      
            Adap.gcopy(8, 140, 82, 17, 17);
        }
    }
    if (Gvar.var_711 == 0) {
        Adap.pos(80, Gvar.var_741 + 85);
        Adap.mes("２： ボス日記を作る");
    }


    if (Gvar.var_718 != 0) {
        Adap.pos(80, Gvar.var_741 + 155);
        Adap.mes("３：" + Gvar.var_719);
        Adap.pos(150, Gvar.var_741 + 175);
        if (Gvar.var_720 > 0) {
            Adap.mes("" + Gvar.var_720 + "階");
        }
        Adap.pos(200, Gvar.var_741 + 175);
        Adap.mes("" + Gvar.var_721 + "回死亡");

        // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ
        if (Gvar.var_722 >= 1) {
            Adap.pos(80, Gvar.var_741 + 175);
            Adap.gmode(2, null, null, null);
            // Adap.buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
            // 絵:エンブレム(ダンジョン(ホテルの外？)クリア時)                
            Adap.gcopy(8, 100, 82, 17, 17);
        }
        // エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)解放フラグ
        if (Gvar.var_723 >= 1) {
            Adap.pos(102, Gvar.var_741 + 175);
            Adap.gmode(2, null, null, null);
            // Adap.buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
            // 絵:エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)                
            Adap.gcopy(8, 120, 82, 17, 17);
        }
        if (Gvar.var_724 >= 1) {
            Adap.pos(124, Gvar.var_741 + 175);
            Adap.gmode(2, null, null, null);
            // Adap.buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
            // 絵:エンブレム(ダンジョン(ディアボロの試練？)クリア時)                      
            Adap.gcopy(8, 140, 82, 17, 17);
        }
    }
    if (Gvar.var_718 == 0) {
        Adap.pos(80, Gvar.var_741 + 155);
        Adap.mes("３： ボス日記を作る");
    }
    if (Gvar.var_726 == 1) {
        Adap.pos(53, Gvar.var_741 + 12);
    }
    if (Gvar.var_726 == 2) {
        Adap.pos(53, Gvar.var_741 + 70 + 12);
    }
    if (Gvar.var_726 == 3) {
        Adap.pos(53, Gvar.var_741 + 140 + 12);
    }
    Adap.gmode(2, null, null, null);
    // Adap.buffer(8)は"img1.gif"。X座標70、Y座標50から切り取り長さ X方向25、Y方向20
    // 絵:矢尻(ログイン画面での選択カーソル)            
    Adap.gcopy(8, 70, 50, 25, 20);
    return;
}

export {func148}

// ボス日記消去選択時の表示
async function func149(this: any) {
    Adap.dbgprt(149);
    if (Gvar.var_726 == 1) {
        Gvar.var_739 = 70;
        Gvar.var_740 = 70 + 15 + 20;
    }
    if (Gvar.var_726 == 2) {
        Gvar.var_739 = 70;
        Gvar.var_740 = 70 + 85 + 20;
    }
    if (Gvar.var_726 == 3) {
        Gvar.var_739 = 70;
        Gvar.var_740 = 70 + 155 + 20;
    }
    Adap.color(0, 0, 0);

    Adap.gmode(4, null, null, 150);
    Adap.pos(70, Gvar.var_740);
    Adap.gcopy(12, 0, 0, 251, 60);
    Adap.color(255, 0, 0);
    Adap.line(Gvar.var_739 + 2, Gvar.var_740 + 1, Gvar.var_739 + 247, Gvar.var_740 + 1);
    Adap.line(Gvar.var_739 + 2, Gvar.var_740 + 59, Gvar.var_739 + 247, Gvar.var_740 + 59);
    Adap.line(Gvar.var_739 + 1, Gvar.var_740 + 2, Gvar.var_739 + 1, Gvar.var_740 + 57);
    Adap.line(Gvar.var_739 + 249, Gvar.var_740 + 2, Gvar.var_739 + 249, Gvar.var_740 + 57);
    Adap.pset(Gvar.var_739 + 2, Gvar.var_740 + 2);
    Adap.pset(Gvar.var_739 + 248, Gvar.var_740 + 2);
    Adap.pset(Gvar.var_739 + 2, Gvar.var_740 + 58);
    Adap.pset(Gvar.var_739 + 248, Gvar.var_740 + 58);

    Adap.font("ＭＳ　Ｐゴシック", 16, 1);
    Adap.pos(Gvar.var_739 + 15, Gvar.var_740 + 15);
    Adap.color(255, 0, 0);
    if (Gvar.var_726 == 1 && Gvar.var_703 == 0) {
        Adap.mes("データはありません");
        return;
    }
    if (Gvar.var_726 == 2 && Gvar.var_711 == 0) {
        Adap.mes("データはありません");
        return;
    }
    if (Gvar.var_726 == 3 && Gvar.var_718 == 0) {
        Adap.mes("データはありません");
        return;
    }
    Adap.mes("このデータを消去しますか？");
    Adap.mes("「Y」キーを押すと消去されます。");
    return;
}

export {func149}
