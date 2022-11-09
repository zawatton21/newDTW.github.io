var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function func100() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(100);
            var_671 = 171;
            if (var_488 >= 100 && var_488 < 500) {
                var_671 = 171;
            }
            if (var_488 == 800) {
                var_671 = 203;
            }
            if (var_488 >= 750 && var_488 < 800) {
                var_671 = 203;
            }
            if (var_488 >= 900 && var_488 < 1000) {
                var_671 = 203;
            }
            if (var_488 >= 805 && var_488 <= 809) {
                var_671 = 204;
            }
            if (var_488 == 854) {
                var_671 = 204;
            }
            if (var_488 == 850 || var_488 == 851) {
                var_671 = 205;
            }
            DSPLAY(audio_id = var_671);
            var_488 = 0;
            return [2 /*return*/];
        });
    });
}
// BGM再生リスト
function func101() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(101);
            if (bgm_list == 0) {
                bgm_file_name = "0.mp3"; // ダンジョン基本BGM
            }
            if (bgm_list == 100) {
                bgm_file_name = "116.mp3"; //ハーミットパープル
                bgm_title = "The Beatles [Get Back]";
            }
            if (bgm_list == 101) {
                bgm_file_name = "101.mp3";
                bgm_title = "Michel Polnareff [Tout tout pour ma cherie]";
            }
            if (bgm_list == 102) {
                bgm_file_name = "099.mp3";
                bgm_title = "King Crimson [RED]";
            }
            if (bgm_list == 103) {
                bgm_file_name = "103.mp3";
                bgm_title = "Pink Floyd [Echoes]";
            }
            if (bgm_list == 104) {
                bgm_file_name = "104.mp3";
                bgm_title = "The Band [The Night They Drove Old Dixie Down]";
            }
            if (bgm_list == 105) {
                bgm_file_name = "105.mp3";
                bgm_title = "Red Hot Chili Peppers [Give It Away]";
            }
            if (bgm_list == 106) {
                bgm_file_name = "106.mp3";
                bgm_title = "Pink Floyd [Shine on You Crasy Diamond]";
            }
            if (bgm_list == 107) {
                bgm_file_name = "107.mp3";
                bgm_title = "The Beatles [Good Night]";
            }
            if (bgm_list == 108) {
                bgm_file_name = "108.mp3";
                bgm_title = "The Rolling Stones [Brown Sugar] (album[Sticky Fingers])";
            }
            if (bgm_list == 109) {
                bgm_file_name = "109.mp3";
                bgm_title = "Paula Abdul [Forever Your Girl]";
            }
            if (bgm_list == 111) {
                bgm_file_name = "111.mp3";
                bgm_title = "DIO [I Speed At Night]";
            }
            if (bgm_list == 112) {
                bgm_file_name = "112.mp3";
                bgm_title = "Queen [Killer Queen]";
            }
            if (bgm_list == 113) {
                bgm_file_name = "113.mp3";
                bgm_title = "The Clash [Rock The Casbah]";
            }
            if (bgm_list == 114) {
                bgm_file_name = "114.mp3";
                bgm_title = "White Snake [Love Aint No Stranger]";
            }
            if (bgm_list == 115) {
                bgm_file_name = "115.mp3";
                bgm_title = "Prince [Gold](album[Gold Experience])";
            }
            if (bgm_list == 116) {
                bgm_file_name = "116.mp3";
                bgm_title = "The Beatles [Get Back]";
            }
            if (bgm_list == 117) {
                bgm_file_name = "117.mp3";
                bgm_title = "Captain & Tennille [Love Will Keep Us Together]";
            }
            if (bgm_list == 118) {
                bgm_file_name = "118.mp3";
                bgm_title = "Van Halen [Pretty Woman](album[DIVER DOWN])";
            }
            if (bgm_list == 119) {
                bgm_file_name = "119.mp3";
                bgm_title = "Spice Girls [Wannabe]";
            }
            if (bgm_list == 120) {
                bgm_file_name = "120.mp3";
                bgm_title = "Dolly Parton [Jolene]";
            }
            if (bgm_list == 121) {
                bgm_file_name = "121.mp3";
                bgm_title = "JIMI HENDRIX [Purple Haze]";
            }
            if (bgm_list == 122) {
                bgm_file_name = "122.mp3";
                bgm_title = "Chaka Khan [Aint Nobody]";
            }
            if (bgm_list == 123) {
                bgm_file_name = "123.mp3";
                bgm_title = "Cream [Crossroads]";
            }
            if (bgm_list == 124) {
                bgm_file_name = "124.mp3";
                bgm_title = "Moody Blues [I Know Your Out There Somewhere]";
            }
            if (bgm_list == 200) {
                bgm_file_name = "200.mp3";
                bgm_title = "Curtis Mayfield [Superfly]";
            }
            if (bgm_list == 201) {
                bgm_file_name = "201.mp3";
                bgm_title = "The Beatles [Girl] (album [RUBBER SOUL])";
            }
            if (bgm_list == 202) {
                bgm_file_name = "202.mp3";
                bgm_title = "The Beatles [While My Guiter Gentry Weeps]";
            }
            if (bgm_list == 203) {
                bgm_file_name = "203.mp3";
                bgm_title = "Iggy Pop [The Passengers]";
            }
            if (bgm_list == 204) {
                bgm_file_name = "204.mp3";
                bgm_title = "Queen [Sheer Heart Attack]";
            }
            if (bgm_list == 205) {
                bgm_file_name = "205.mp3";
                bgm_title = "Kraftwerk [The Model]";
            }
            if (bgm_list == 206) {
                bgm_file_name = "206.mp3";
                bgm_title = "OASIS [Wonderwall]";
            }
            if (bgm_list == 207) {
                bgm_file_name = "207.mp3";
                bgm_title = "The Grateful Dead [Dark Star]";
            }
            if (bgm_list == 300) {
                bgm_file_name = "300.mp3";
                bgm_title = "Pearl jam [Alive]";
            }
            if (bgm_list == 301) {
                bgm_file_name = "301.mp3";
                bgm_title = "Neil Young [Heart of Gold](albam[HARVEST])";
            }
            if (bgm_list == 302) {
                bgm_file_name = "302.mp3";
                bgm_title = "AC/DC [Highway To Hell]";
            }
            if (bgm_list == 303) {
                bgm_file_name = "303.mp3";
                bgm_title = "[Enter the Dragon] ";
            }
            if (bgm_list == 304) {
                bgm_file_name = "304.mp3";
                bgm_title = "Weather Report [Birdland]";
            }
            if (bgm_list == 305) {
                bgm_file_name = "305.mp3";
                bgm_title = "Cinderella [Gypsyroad]";
            }
            if (bgm_list == 306) {
                bgm_file_name = "306.mp3";
                bgm_title = "Manhattan Transfer [Boy from NewYork City]";
            }
            if (bgm_list == 308) {
                bgm_file_name = "308.mp3";
                bgm_title = "Devo [Beautiful World]";
            }
            if (bgm_list == 309) {
                bgm_file_name = "309.mp3";
                bgm_title = "Soft Machine [Facelift]";
            }
            if (bgm_list == 310) {
                bgm_file_name = "310.mp3";
                bgm_title = "Nena [99 luftballons]";
            }
            if (bgm_list == 311) {
                bgm_file_name = "311.mp3";
                bgm_title = "Cheap Trick [Dream Police]";
            }
            if (bgm_list == 312) {
                bgm_file_name = "312.mp3";
                bgm_title = "Aerosmith [Walk This Way]";
            }
            if (bgm_list == 313) {
                bgm_file_name = "313.mp3";
                bgm_title = "Deep Purple [Highway Star]";
            }
            if (bgm_list == 314) {
                bgm_file_name = "314.mp3";
                bgm_title = "Stray Cats [Stray Cat Strut]";
            }
            if (bgm_list == 315) {
                bgm_file_name = "315.mp3";
                bgm_title = "King Crimson [Epitaph]";
            }
            if (bgm_list == 316) {
                bgm_file_name = "316.mp3";
                bgm_title = "Survivor [Eye of the Tiger]";
            }
            if (bgm_list == 317) {
                bgm_file_name = "317.mp3";
                bgm_title = "Kiss [Detroit Rock City]";
            }
            if (bgm_list == 318) {
                bgm_file_name = "318.mp3";
                bgm_title = "The Rolling Stones [Jumpin' Jack Flash ]";
            }
            if (bgm_list == 319) {
                bgm_file_name = "319.mp3";
                bgm_title = "Boyz II Men [End of the Road]";
            }
            if (bgm_list == 320) {
                bgm_file_name = "320.mp3";
                bgm_title = "Metallica [ATTITUDE]";
            }
            if (bgm_list == 393) {
                bgm_file_name = "990.mp3";
                bgm_title = "Queen [Bohemian Rhapsody]";
            }
            if (bgm_list == 394) {
                bgm_file_name = "112.mp3";
                bgm_title = "Queen [Killer Queen]";
            }
            if (bgm_list == 395) {
                bgm_file_name = "395.mp3";
                bgm_title = "Queen [Another One Bite the Dust]";
            }
            if (bgm_list == 396) {
                bgm_file_name = "396.mp3";
                bgm_title = "Led Zeppelin [Stairway To Heaven]";
            }
            if (bgm_list == 397) {
                bgm_file_name = "304.mp3";
                bgm_title = "Weather Report [Birdland] (album[HEAVY WEATHER])";
            }
            if (bgm_list == 398) {
                bgm_file_name = "116.mp3";
                bgm_title = "The Beatles [Get Back]";
            }
            if (bgm_list == 399) {
                bgm_file_name = "115.mp3";
                bgm_title = "Prince [Gold](album[Gold Experience])";
            }
            if (bgm_list == 400) {
                bgm_file_name = "400.mp3";
                bgm_title = "Sting [English Man In New York]";
            }
            if (bgm_list == 401) {
                bgm_file_name = "401.mp3";
                bgm_title = "Foo Fighters [Everlong]";
            }
            if (bgm_list == 402) {
                bgm_file_name = "402.mp3";
                bgm_title = "Hall and Oates [Kiss on my List]";
            }
            if (bgm_list == 403) {
                bgm_file_name = "403.mp3";
                bgm_title = "Sex Pistols [Anarchy in the UK]";
            }
            if (bgm_list == 404) {
                bgm_file_name = "404.mp3";
                bgm_title = "Petshop Boys [West End Girls]";
            }
            if (bgm_list == 405) {
                bgm_file_name = "405.mp3";
                bgm_title = "Police [Roxanne]";
            }
            if (bgm_list == 406) {
                bgm_file_name = "405.mp3";
                bgm_title = "Police [Roxanne]";
            }
            if (bgm_list == 407) {
                bgm_file_name = "407.mp3";
                bgm_title = "Sting [Shape of My Heart]";
            }
            if (bgm_list == 408) {
                bgm_file_name = "408.mp3";
                bgm_title = "Michael Jackson [Man in the Mirror]";
            }
            if (bgm_list == 409) {
                bgm_file_name = "409.mp3";
                bgm_title = "Steely Dan [Babylon Sisters]";
            }
            if (bgm_list == 411) {
                bgm_file_name = "411.mp3";
                bgm_title = "Eagles [Desperado]";
            }
            if (bgm_list == 412) {
                bgm_file_name = "412.mp3";
                bgm_title = "Bob Dylan [Knocking on Heavens Door]";
            }
            if (bgm_list == 413) {
                bgm_file_name = "0.mp3";
                bgm_title = "nothing";
            }
            if (bgm_list == 414) {
                bgm_file_name = "414.mp3";
                bgm_title = "Chuck Berry [Johnny B. Goode]";
            }
            if (bgm_list == 977) {
                bgm_file_name = "105.mp3";
                bgm_title = "Red Hot Chili Peppers [Give It Away]";
            }
            if (bgm_list == 978) {
                bgm_file_name = "978.mp3";
                bgm_title = "Pink Floyd [Atom Heart Mother]";
            }
            if (bgm_list == 979) {
                bgm_file_name = "315.mp3";
                bgm_title = "King Crimson [Epitaph]";
            }
            if (bgm_list == 980) {
                bgm_file_name = "980.mp3";
                bgm_title = "The Pixies [Where Is My Mind]";
            }
            if (bgm_list == 981) {
                bgm_file_name = "981.mp3";
                bgm_title = "Madonna [Like a Virgin]";
            }
            if (bgm_list == 982) {
                bgm_file_name = "115.mp3";
                bgm_title = "Prince [Gold](album[Gold Experience])";
            }
            if (bgm_list == 983) {
                bgm_file_name = "203.mp3";
                bgm_title = "Iggy Pop [The Passengers]";
            }
            if (bgm_list == 984) {
                bgm_file_name = "313.mp3";
                bgm_title = "Deep Purple [Highway Star]";
            }
            if (bgm_list == 985) {
                bgm_file_name = "985.mp3";
                bgm_title = "Deep Purple [Speed King]";
            }
            // ダンジョンを制覇した時のBGM
            if (bgm_list == 986) {
                bgm_file_name = "986.mp3";
                bgm_title = "ENYA [Orinoco Flow]";
            }
            // トニオさんの店　レストラン・レストラン・トラサルディーのBGM
            if (bgm_list == 987) {
                bgm_file_name = "987.mp3";
                bgm_title = "Bach italien";
            }
            // ヴェネチアホテルのBGM
            if (bgm_list == 988) {
                bgm_file_name = "988.mp3";
                bgm_title = "Eagles [Hotel California]";
            }
            if (bgm_list == 989) {
                bgm_file_name = "989.mp3";
                bgm_title = "T.rex [20th Century Boy]";
            }
            if (bgm_list == 990) {
                bgm_file_name = "990.mp3";
                bgm_title = "Queen [Bohemian Rhapsody]";
            }
            if (bgm_list == 991) {
                bgm_file_name = "991.mp3";
                bgm_title = "Beach Boys [Surfin' USA]";
            }
            if (bgm_list == 992) {
                bgm_file_name = "992.mp3";
                bgm_title = "Beach Boys [Good Vibrations]";
            }
            if (bgm_list == 993) {
                bgm_file_name = "993.mp3";
                bgm_title = "REO Speedwagon [Keep On Lovin You]";
            }
            if (bgm_list == 994) {
                bgm_file_name = "994.mp3";
                bgm_title = "Led Zeppelin [Kashmir]";
            }
            if (bgm_list == 565) {
                bgm_file_name = "995.mp3";
                bgm_title = "Handel [Messiah]";
            }
            if (bgm_list == 996) {
                bgm_file_name = "996.mp3";
                bgm_title = "Prince [1999]";
            }
            if (bgm_list == 997) {
                bgm_file_name = "997.mp3";
                bgm_title = "Ben E King [Stand by Me]";
            }
            if (bgm_list == 998) {
                bgm_file_name = "998.mp3";
                bgm_title = "Bad Company [Bad Company]";
            }
            if (bgm_list == 999) {
                bgm_file_name = "999.mp3";
                bgm_title = "Louis Armstrong [What a Wonderful World]";
            }
            return [2 /*return*/];
        });
    });
}
// ボリューム調整キーを押した時の動作
function func102() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(102);
            if (var_632 >= 1) {
                color(255, 255, 255);
                pos(2, 320);
                font("MS UI Gothic", 12);
                mes("　　　BGM オフ");
                return [2 /*return*/];
            }
            if (var_633 >= 1) {
                color(255, 255, 255);
                pos(2, 320);
                font("MS UI Gothic", 12);
                mes("　　　BGM オン（DISCを入れると開始します）");
                return [2 /*return*/];
            }
            if (var_635 == 0 && var_636 == 0) {
                if (var_677 == 0 || var_677 == 987 || var_677 == 413) {
                    return [2 /*return*/];
                }
                color(255, 255, 255);
                pos(2, 320);
                font("MS UI Gothic", 12);
                mes("♪" + bgm_title);
                return [2 /*return*/];
            }
            if (var_635 >= 1) {
                color(255, 255, 255);
                pos(2, 320);
                font("MS UI Gothic", 12);
                mes("　　　効果音音量:" + var_669);
                return [2 /*return*/];
            }
            if (var_636 >= 1) {
                color(255, 255, 255);
                pos(2, 320);
                font("MS UI Gothic", 12);
                mes("　　　音量:" + var_61);
                return [2 /*return*/];
            }
            return [2 /*return*/];
        });
    });
}
/*
ダンジョン内のテーマソング　"0.mp3"
func104を呼び出して再生させる
*/
function func103() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(103);
                    //yield func108(); // 曲停止関数
                    //DMSTOP(); // 曲停止関数
                    bgm_file_name = "0.mp3";
                    return [4 /*yield*/, func101()];
                case 1:
                    _a.sent();
                    cnt1_1 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_1 < 10)) return [3 /*break*/, 5];
                    DMINIT();
                    return [4 /*yield*/, func104()];
                case 3:
                    _a.sent();
                    if (stat == 1) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    ++cnt1_1;
                    return [3 /*break*/, 2];
                case 5:
                    var_677 = bgm_list;
                    if (var_678 == 0) {
                        var_634 = 1;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// .mp3曲再生
function func104() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(104);
            //yield func108(); //曲停止関数
            //DMSTOP(); // 曲停止関数
            exist(bgm_file_name);
            var_679 = strsize;
            var_680 = sdim(var_679);
            var_680 = bload(bgm_file_name);
            DMLOADMEMORY(var_680, var_679, 1);
            //var_680 = bload(bgm_file_name, var_679);
            //DMLOADMEMORY(var_680, 1);
            if (var_631 != 0) {
                DMPLAY(var_631, 1);
            }
            return [2 /*return*/];
        });
    });
}
function func105() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(105);
                    if (var_677 == item_list) {
                        return [2 /*return*/];
                    }
                    if (var_62 == 99) {
                        return [2 /*return*/];
                    }
                    if (var_681 == 988 || var_681 == 990 || var_681 == 987 || var_681 == 996 || var_681 == 998 || var_681 == 984 || var_681 == 982 || var_681 == 986 || var_681 == 981 || var_681 == 980 || var_681 == 985 || var_681 == 978 || var_681 == 977) {
                        return [2 /*return*/];
                    }
                    bgm_list = item_list;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func106() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(106);
                    if (var_62 == 99) {
                        return [2 /*return*/];
                    }
                    if (var_681 == 988 || var_681 == 990 || var_681 == 987 || var_681 == 996 || var_681 == 998 || var_681 == 984 || var_681 == 982 || var_681 == 986 || var_681 == 981 || var_681 == 980 || var_681 == 985 || var_681 == 978 || var_681 == 977) {
                        return [2 /*return*/];
                    }
                    if (!(var_677 == item_list)) return [3 /*break*/, 4];
                    if (!(var_681 == 989)) return [3 /*break*/, 2];
                    bgm_list = 989;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    bgm_list = 0; // BGMをダンジョンテーマソングへ戻す
                    return [4 /*yield*/, func103()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function func107() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(107);
                    bgm_list = var_677;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// mp3ファイル再生停止
function func108() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(108);
            DMSTOP();
            return [2 /*return*/];
        });
    });
}
// タイトル画面でのオープニング曲再生
function func109() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(109);
            DMINIT();
            bgm_file_name = "102.mp3";
            exist(bgm_file_name);
            var_679 = strsize;
            var_680 = sdim(var_679);
            var_680 = bload(bgm_file_name);
            DMLOADMEMORY(var_680, var_679, 1);
            //var_680 = bload(bgm_file_name, var_679);
            //DMLOADMEMORY(var_680, 1);
            if (var_631 != 0) {
                DMPLAY(var_631, 1);
            }
            return [2 /*return*/];
        });
    });
}
function func110() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(110);
                    if (var_62 == 99) {
                        return [2 /*return*/];
                    }
                    var_678 = 1;
                    bgm_list = 979;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    var_678 = 0;
                    var_634 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
function func111() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(111);
                    var_678 = 1;
                    bgm_list = 0;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    var_678 = 0;
                    var_681 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
function func112() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(112);
                    var_678 = 1;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    var_678 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
function func113() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(113);
                    var_678 = 1;
                    bgm_list = 988;
                    var_681 = 988;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    var_678 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
function func114() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(114);
                    var_678 = 1;
                    bgm_list = 989;
                    var_681 = 989;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    var_678 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
function func115() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(115);
                    var_678 = 0;
                    bgm_list = var_486[var_682][var_683][0];
                    if (bgm_list < 100) {
                        return [2 /*return*/];
                    }
                    if (bgm_list >= 500 && bgm_list != 565) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    var_678 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
function func116() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(116);
                    bgm_list = 990;
                    var_681 = 990;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func117() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(117);
                    bgm_list = 982;
                    var_681 = 982;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func118() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(118);
                    bgm_list = 986;
                    var_681 = 986;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func119() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(119);
                    bgm_list = 998;
                    var_681 = 998;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func120() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(120);
                    bgm_list = 978;
                    var_681 = 978;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func121() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(121);
                    bgm_list = 977;
                    var_681 = 977;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func122() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(122);
                    bgm_list = 999;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    var_634 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
function func123() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(123);
                    bgm_list = 997;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    var_634 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
function func124() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(124);
                    if (var_677 == 994) {
                        return [2 /*return*/];
                    }
                    if (var_681 == 988 || var_681 == 989 || var_681 == 990 || var_681 == 987 || var_681 == 996 || var_681 == 998 || var_681 == 984 || var_681 == 982 || var_681 == 986 || var_681 == 981 || var_681 == 980 || var_681 == 985) {
                        return [2 /*return*/];
                    }
                    bgm_list = 994;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func125() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(125);
                    if (var_677 == 993) {
                        return [2 /*return*/];
                    }
                    if (var_681 == 988 || var_681 == 989 || var_681 == 990 || var_681 == 987 || var_681 == 996 || var_681 == 998 || var_681 == 984 || var_681 == 982 || var_681 == 986 || var_681 == 981 || var_681 == 980 || var_681 == 985) {
                        return [2 /*return*/];
                    }
                    bgm_list = 993;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func126() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(126);
                    if (var_677 == 991) {
                        return [2 /*return*/];
                    }
                    if (var_681 == 988 || var_681 == 989 || var_681 == 990 || var_681 == 987 || var_681 == 996 || var_681 == 998 || var_681 == 984 || var_681 == 982 || var_681 == 986 || var_681 == 981 || var_681 == 980 || var_681 == 985) {
                        return [2 /*return*/];
                    }
                    bgm_list = 991;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func127() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(127);
                    if (var_677 == 992) {
                        return [2 /*return*/];
                    }
                    if (var_681 == 988 || var_681 == 989 || var_681 == 990 || var_681 == 987 || var_681 == 996 || var_681 == 998 || var_681 == 984 || var_681 == 982 || var_681 == 986 || var_681 == 981 || var_681 == 980 || var_681 == 985) {
                        return [2 /*return*/];
                    }
                    bgm_list = 992;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func128() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(128);
                    if (var_677 == 983) {
                        return [2 /*return*/];
                    }
                    if (var_681 == 988 || var_681 == 989 || var_681 == 990 || var_681 == 987 || var_681 == 996 || var_681 == 998 || var_681 == 984 || var_681 == 982 || var_681 == 986 || var_681 == 981 || var_681 == 980 || var_681 == 985) {
                        return [2 /*return*/];
                    }
                    bgm_list = 983;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func129() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(129);
                    bgm_list = 996;
                    var_681 = 996;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func130() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(130);
                    bgm_list = 998;
                    var_681 = 998;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func131() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(131);
                    bgm_list = 985;
                    var_681 = 985;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func132() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(132);
                    bgm_list = 984;
                    var_681 = 984;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func133() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(133);
                    bgm_list = 981;
                    var_681 = 981;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func134() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(134);
                    bgm_list = 980;
                    var_681 = 980;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func135() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(135);
                    bgm_list = 980;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func136() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(136);
                    var_684 = var_677;
                    bgm_list = 987;
                    var_681 = 987;
                    var_678 = 1;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    var_678 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
function func137() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(137);
                    if (var_677 != 987) {
                        return [2 /*return*/];
                    }
                    bgm_list = var_684;
                    var_681 = 0;
                    if (var_684 == 996) {
                        var_681 = 996;
                    }
                    if (var_684 == 998) {
                        var_681 = 998;
                    }
                    if (var_684 == 985) {
                        var_681 = 985;
                    }
                    if (var_684 == 984) {
                        var_681 = 984;
                    }
                    if (var_684 == 981) {
                        var_681 = 981;
                    }
                    var_678 = 1;
                    return [4 /*yield*/, func103()];
                case 1:
                    _a.sent();
                    var_678 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
function func138() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_2, cnt2_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(138);
                    gsel(0);
                    redraw(0);
                    color(0, 0, 0);
                    boxf(left = 0, top1 = 0, right = 340, bottom = 340);
                    gmode(4, null, null, var_18);
                    if (var_11 == 0) {
                        if (var_60 < 25) {
                            pos(150, 120);
                            gcopy(17, 40, 0, 40, 80);
                        }
                        if (var_60 >= 25) {
                            pos(150, 120);
                            gcopy(17, 0, 0, 40, 80);
                        }
                    }
                    if (var_11 == 1) {
                        if (var_60 < 25) {
                            pos(150, 120);
                            gcopy(17, 120, 0, 40, 80);
                        }
                        if (var_60 >= 25) {
                            pos(150, 120);
                            gcopy(17, 80, 0, 40, 80);
                        }
                    }
                    pos(100, 200);
                    gcopy(17, 0, 80, 160, 40);
                    var_685 = 1;
                    for (cnt1_2 = 0; cnt1_2 < 25; ++cnt1_2) {
                        var_447 = var_685 * 3 + 130;
                        var_449 = 240;
                        pos(var_447, var_449);
                        gcopy(17, 643, 640, 2, 6);
                        var_685++;
                    }
                    if (var_60 >= 1) {
                        var_685 = 1;
                        for (cnt2_1 = 0; cnt2_1 < var_60; ++cnt2_1) {
                            var_447 = var_685 * 3 + 130;
                            var_449 = 240;
                            pos(var_447, var_449);
                            gcopy(17, 640, 640, 2, 6);
                            var_685++;
                        }
                    }
                    if (!(var_10 >= 1)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func338()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    redraw(1);
                    return [4 /*yield*/, wait(1)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func139() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_3, cnt2_2, cnt3_1, cnt1_4, cnt2_3, cnt1_5, cnt2_4, cnt3_2, cnt2_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(139);
                    onexit(0);
                    var_686 = 50;
                    var_25[7] = 255;
                    var_26[7] = 255;
                    var_27[7] = 255;
                    var_25[8] = 255;
                    var_26[8] = 150;
                    var_27[8] = 255;
                    var_25[9] = 255;
                    var_26[9] = 0;
                    var_27[9] = 0;
                    var_25[10] = 130;
                    var_26[10] = 255;
                    var_27[10] = 130;
                    var_25[11] = 100;
                    var_26[11] = 160;
                    var_27[11] = 190;
                    var_25[12] = 255;
                    var_26[12] = 255;
                    var_27[12] = 0;
                    var_25[13] = 0;
                    var_26[13] = 0;
                    var_27[13] = 255;
                    var_687 = 0;
                    var_688 = 0;
                    var_689 = 255;
                    var_25[14] = 60;
                    var_690 = 60;
                    var_655 = 90;
                    var_656 = 88;
                    var_657 = 65;
                    var_658 = 83;
                    var_659 = 16;
                    var_660 = 67;
                    var_653 = 35;
                    var_650 = 40;
                    var_654 = 34;
                    var_647 = 37;
                    var_648 = 39;
                    var_651 = 36;
                    var_649 = 38;
                    var_652 = 33;
                    var_691[1] = var_655;
                    var_691[2] = var_656;
                    var_691[3] = var_657;
                    var_691[4] = var_658;
                    var_691[5] = var_659;
                    var_691[6] = var_660;
                    var_692 = 8192;
                    var_693 = 2048;
                    var_694 = 4096;
                    var_695 = 16384;
                    var_696 = 65536;
                    var_697 = 32768;
                    var_698 = 131072;
                    var_699 = 262144;
                    var_700 = 524288;
                    var_701 = 1048576;
                    var_662 = var_692 + var_693 + var_694 + var_695 + var_696 + var_697 + var_698 + var_699 + var_700 + var_701;
                    var_664[1] = var_692;
                    var_664[2] = var_693;
                    var_664[3] = var_694;
                    var_664[4] = var_695;
                    var_664[5] = var_696;
                    var_664[6] = var_697;
                    var_664[7] = var_698;
                    var_664[8] = var_699;
                    var_664[9] = var_700;
                    var_664[10] = var_701;
                    var_494[39] = "ｽﾞﾎﾞﾝのﾁｬｯｸを開けたｵﾔｼﾞが通った。";
                    var_494[40] = "";
                    var_494[37] = "クシャミをした。";
                    var_494[38] = "ちくしょーと言った。";
                    var_494[35] = "女の人がクスクス笑った。";
                    var_494[36] = "";
                    var_494[33] = "雨が降った。";
                    var_494[34] = "";
                    var_494[31] = "雷がペプシの上に落ちた。";
                    var_494[32] = "";
                    // 
                    exist("00.dat");
                    if (!(strsize == (-1))) return [3 /*break*/, 2];
                    bsave(file_name = "00.dat", data = var_447, data_size = null, offset = null);
                    bsave(file_name = "00.dat", data = var_686, data_size = null, offset = 0);
                    bsave(file_name = "00.dat", data = var_702, data_size = null, offset = 100);
                    bsave(file_name = "00.dat", data = var_25, data_size = null, offset = 200);
                    bsave(file_name = "00.dat", data = var_26, data_size = null, offset = 300);
                    bsave(file_name = "00.dat", data = var_27, data_size = null, offset = 400);
                    bsave(file_name = "00.dat", data = var_691, data_size = null, offset = 1000);
                    bsave(file_name = "00.dat", data = var_664, data_size = null, offset = 1500);
                    return [4 /*yield*/, func139()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    exist("01.dat");
                    if (strsize == (-1)) {
                        var_703 = 0;
                    }
                    else {
                        var_703 = 1;
                        var_704 = bload("01.dat");
                        if (var_704[61] == 0) {
                            if (var_704[117] == 0) {
                                var_705 = "ヴェネチアホテル";
                            }
                            if (var_704[117] == 1) {
                                var_705 = "亀の中";
                            }
                            if (var_704[117] == 2) {
                                var_705 = "酒場";
                            }
                        }
                        if (var_704[61] == 1) {
                            if (var_704[1] <= 2) {
                                var_705 = "水の都";
                            }
                            if (var_704[1] >= 3 && var_704[1] <= 5) {
                                var_705 = "郊外の森林";
                            }
                            if (var_704[1] >= 6 && var_704[1] <= 8) {
                                var_705 = "紅海の浜辺";
                            }
                            if (var_704[1] >= 9 && var_704[1] <= 11) {
                                var_705 = "山岳地帯";
                            }
                            if (var_704[1] == 12) {
                                var_705 = "エンヤホテル";
                            }
                        }
                        if (var_704[61] == 2) {
                            var_705 = "レクイエムの大迷宮";
                            if (var_704[1] == 30) {
                                var_705 = "黄金の風";
                            }
                        }
                        if (var_704[61] == 3) {
                            var_705 = "ディアボロの試練";
                            if (var_704[1] == 99) {
                                var_705 = "自由人の狂想曲";
                            }
                        }
                        if (var_704[61] == 4) {
                            var_705 = "一巡後の世界";
                        }
                        if (var_704[61] == 5) {
                            var_705 = "" + var_21;
                            if (var_704[1] == var_20) {
                                var_705 = "" + var_22;
                            }
                        }
                        if (var_704[187] == 1) {
                            var_705 = "虹村屋敷";
                        }
                        if (var_704[187] == 2) {
                            var_705 = "杜王町埠頭";
                        }
                        if (var_704[187] == 3) {
                            var_705 = "吉良屋敷";
                        }
                        if (var_704[187] == 4) {
                            var_705 = "星屑の十字軍";
                        }
                        if (var_704[187] == 5) {
                            var_705 = "ビンの中";
                        }
                        if (var_704[187] == 6) {
                            var_705 = "ナチス実験施設";
                        }
                        if (var_704[187] == 7) {
                            var_705 = "砂漠";
                        }
                        if (var_704[187] == 8) {
                            var_705 = "幻覚の迷宮";
                        }
                        if (var_704[187] == 9) {
                            var_705 = "幽霊部屋";
                        }
                        var_706 = var_704[1];
                        var_707 = var_704[108];
                        var_708 = var_704[88];
                        var_709 = var_704[93];
                        var_710 = var_704[94];
                    }
                    exist("02.dat");
                    if (strsize == (-1)) {
                        var_711 = 0;
                    }
                    else {
                        var_711 = 1;
                        var_704 = bload("02.dat");
                        if (var_704[61] == 0) {
                            if (var_704[117] == 0) {
                                var_712 = "ヴェネチアホテル";
                            }
                            if (var_704[117] == 1) {
                                var_712 = "亀の中";
                            }
                            if (var_704[117] == 2) {
                                var_712 = "酒場";
                            }
                        }
                        if (var_704[61] == 1) {
                            if (var_704[1] <= 2) {
                                var_712 = "水の都";
                            }
                            if (var_704[1] >= 3 && var_704[1] <= 5) {
                                var_712 = "郊外の森林";
                            }
                            if (var_704[1] >= 6 && var_704[1] <= 8) {
                                var_712 = "紅海の浜辺";
                            }
                            if (var_704[1] >= 9 && var_704[1] <= 11) {
                                var_712 = "山岳地帯";
                            }
                            if (var_704[1] == 12) {
                                var_712 = "エンヤホテル";
                            }
                        }
                        if (var_704[61] == 2) {
                            var_712 = "レクイエムの大迷宮";
                            if (var_704[1] == 30) {
                                var_712 = "黄金の風";
                            }
                        }
                        if (var_704[61] == 3) {
                            var_712 = "ディアボロの試練";
                            if (var_704[1] == 99) {
                                var_712 = "自由人の狂想曲";
                            }
                        }
                        if (var_704[61] == 4) {
                            var_712 = "一巡後の世界";
                        }
                        if (var_704[61] == 5) {
                            var_712 = "" + var_21;
                            if (var_704[1] == var_20) {
                                var_712 = "" + var_22;
                            }
                        }
                        if (var_704[187] == 1) {
                            var_712 = "虹村屋敷";
                        }
                        if (var_704[187] == 2) {
                            var_712 = "杜王町埠頭";
                        }
                        if (var_704[187] == 3) {
                            var_712 = "吉良屋敷";
                        }
                        if (var_704[187] == 4) {
                            var_712 = "星屑の十字軍";
                        }
                        if (var_704[187] == 5) {
                            var_712 = "ビンの中";
                        }
                        if (var_704[187] == 6) {
                            var_712 = "ナチス実験施設";
                        }
                        if (var_704[187] == 7) {
                            var_712 = "砂漠";
                        }
                        if (var_704[187] == 8) {
                            var_712 = "幻覚の迷宮";
                        }
                        if (var_704[187] == 9) {
                            var_712 = "幽霊部屋";
                        }
                        var_713 = var_704[1];
                        var_714 = var_704[108];
                        var_715 = var_704[88];
                        var_716 = var_704[93];
                        var_717 = var_704[94];
                    }
                    exist("03.dat");
                    if (strsize == (-1)) {
                        var_718 = 0;
                    }
                    else {
                        var_718 = 1;
                        var_704 = bload("03.dat");
                        if (var_704[61] == 0) {
                            if (var_704[117] == 0) {
                                var_719 = "ヴェネチアホテル";
                            }
                            if (var_704[117] == 1) {
                                var_719 = "亀の中";
                            }
                            if (var_704[117] == 2) {
                                var_719 = "酒場";
                            }
                        }
                        if (var_704[61] == 1) {
                            if (var_704[1] <= 2) {
                                var_719 = "水の都";
                            }
                            if (var_704[1] >= 3 && var_704[1] <= 5) {
                                var_719 = "郊外の森林";
                            }
                            if (var_704[1] >= 6 && var_704[1] <= 8) {
                                var_719 = "紅海の浜辺";
                            }
                            if (var_704[1] >= 9 && var_704[1] <= 11) {
                                var_719 = "山岳地帯";
                            }
                            if (var_704[1] == 12) {
                                var_719 = "エンヤホテル";
                            }
                        }
                        if (var_704[61] == 2) {
                            var_719 = "レクイエムの大迷宮";
                            if (var_704[1] == 30) {
                                var_719 = "黄金の風";
                            }
                        }
                        if (var_704[61] == 3) {
                            var_719 = "ディアボロの試練";
                            if (var_704[1] == 99) {
                                var_719 = "自由人の狂想曲";
                            }
                        }
                        if (var_704[61] == 4) {
                            var_719 = "一巡後の世界";
                        }
                        if (var_704[61] == 5) {
                            var_719 = "" + var_21;
                            if (var_704[1] == var_20) {
                                var_719 = "" + var_22;
                            }
                        }
                        if (var_704[187] == 1) {
                            var_719 = "虹村屋敷";
                        }
                        if (var_704[187] == 2) {
                            var_719 = "杜王町埠頭";
                        }
                        if (var_704[187] == 3) {
                            var_719 = "吉良屋敷";
                        }
                        if (var_704[187] == 4) {
                            var_719 = "星屑の十字軍";
                        }
                        if (var_704[187] == 5) {
                            var_719 = "ビンの中";
                        }
                        if (var_704[187] == 6) {
                            var_719 = "ナチス実験施設";
                        }
                        if (var_704[187] == 7) {
                            var_719 = "砂漠";
                        }
                        if (var_704[187] == 8) {
                            var_719 = "幻覚の迷宮";
                        }
                        if (var_704[187] == 9) {
                            var_719 = "幽霊部屋";
                        }
                        var_720 = var_704[1];
                        var_721 = var_704[108];
                        var_722 = var_704[88];
                        var_723 = var_704[93];
                        var_724 = var_704[94];
                    }
                    var_686 = bload(file_name = "00.dat", data_size = null, offset = 0);
                    var_702 = bload(file_name = "00.dat", data_size = null, offset = 100);
                    var_25 = bload(file_name = "00.dat", data_size = null, offset = 200);
                    var_26 = bload(file_name = "00.dat", data_size = null, offset = 300);
                    var_27 = bload(file_name = "00.dat", data_size = null, offset = 400);
                    if (var_702 == 0) {
                        var_25[1] = 255;
                        var_26[1] = 255;
                        var_27[1] = 255;
                        var_25[2] = 255;
                        var_26[2] = 255;
                        var_27[2] = 255;
                        var_25[3] = 255;
                        var_26[3] = 255;
                        var_27[3] = 255;
                        var_25[4] = 255;
                        var_26[4] = 255;
                        var_27[4] = 255;
                        var_25[5] = 255;
                        var_26[5] = 255;
                        var_27[5] = 255;
                        var_25[6] = 255;
                        var_26[6] = 255;
                        var_27[6] = 255;
                    }
                    if (var_702 == 1) {
                        var_25[1] = var_25[7];
                        var_26[1] = var_26[7];
                        var_27[1] = var_27[7];
                        var_25[2] = var_25[8];
                        var_26[2] = var_26[8];
                        var_27[2] = var_27[8];
                        var_25[3] = var_25[9];
                        var_26[3] = var_26[9];
                        var_27[3] = var_27[9];
                        var_25[4] = var_25[10];
                        var_26[4] = var_26[10];
                        var_27[4] = var_27[10];
                        var_25[5] = var_25[11];
                        var_26[5] = var_26[11];
                        var_27[5] = var_27[11];
                        var_25[6] = var_25[12];
                        var_26[6] = var_26[12];
                        var_27[6] = var_27[12];
                    }
                    var_687 = var_25[13];
                    var_688 = var_26[13];
                    var_689 = var_27[13];
                    var_690 = var_25[14];
                    var_691 = bload(file_name = "00.dat", data_size = null, offset = 1000);
                    var_655 = var_691[1];
                    var_656 = var_691[2];
                    var_657 = var_691[3];
                    var_658 = var_691[4];
                    var_659 = var_691[5];
                    var_660 = var_691[6];
                    var_664 = bload(file_name = "00.dat", data_size = null, offset = 1500);
                    var_692 = var_664[1];
                    var_693 = var_664[2];
                    var_694 = var_664[3];
                    var_695 = var_664[4];
                    var_696 = var_664[5];
                    var_697 = var_664[6];
                    var_698 = var_664[7];
                    var_699 = var_664[8];
                    var_700 = var_664[9];
                    var_701 = var_664[10];
                    var_64 = 0;
                    var_725 = 0;
                    var_726 = 1; // 冒険の書No.変数 = 1
                    color(0, 0, 0);
                    boxf(left = 0, top1 = 0, right = 340, bottom = 340);
                    return [4 /*yield*/, wait(1)];
                case 3:
                    _a.sent();
                    var_18 = 0;
                    cnt1_3 = 0;
                    _a.label = 4;
                case 4:
                    if (!(cnt1_3 < 25)) return [3 /*break*/, 9];
                    redraw(0);
                    color(0, 0, 0);
                    boxf(left = 0, top1 = 0, right = 340, bottom = 340);
                    gmode(4, null, null, var_18);
                    pos(0, 0);
                    var_727 = 0;
                    var_728 = 350;
                    for (cnt2_2 = 0; cnt2_2 < 9; ++cnt2_2) {
                        var_729 = 0;
                        var_730 = 720;
                        for (cnt3_1 = 0; cnt3_1 < 9; ++cnt3_1) {
                            pos(var_729, var_727);
                            gcopy(17, var_730, var_728, 40, 40);
                            var_729 = var_729 + 40;
                            var_730 = var_730 + 40;
                        }
                        var_727 = var_727 + 40;
                        var_728 = var_728 + 40;
                    }
                    if (!(var_10 >= 1)) return [3 /*break*/, 6];
                    return [4 /*yield*/, func338()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    redraw(1);
                    return [4 /*yield*/, wait(1)];
                case 7:
                    _a.sent();
                    var_18 = var_18 + 10;
                    _a.label = 8;
                case 8:
                    ++cnt1_3;
                    return [3 /*break*/, 4];
                case 9:
                    redraw(0);
                    color(0, 0, 0);
                    boxf(left = 0, top1 = 0, right = 340, bottom = 340);
                    gmode(2);
                    var_727 = 0;
                    var_728 = 350;
                    for (cnt1_4 = 0; cnt1_4 < 9; ++cnt1_4) {
                        var_729 = 0;
                        var_730 = 720;
                        for (cnt2_3 = 0; cnt2_3 < 9; ++cnt2_3) {
                            pos(var_729, var_727);
                            gcopy(17, var_730, var_728, 40, 40);
                            var_729 = var_729 + 40;
                            var_730 = var_730 + 40;
                        }
                        var_727 = var_727 + 40;
                        var_728 = var_728 + 40;
                    }
                    if (!(var_10 >= 1)) return [3 /*break*/, 11];
                    return [4 /*yield*/, func338()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    redraw(1);
                    return [4 /*yield*/, wait(50)];
                case 12:
                    _a.sent();
                    var_631 = 1000;
                    return [4 /*yield*/, func109()];
                case 13:
                    _a.sent();
                    var_731 = 1;
                    DSPLAY(audio_id = 175);
                    cnt1_5 = 0;
                    _a.label = 14;
                case 14:
                    if (!(cnt1_5 < 30)) return [3 /*break*/, 19];
                    return [4 /*yield*/, wait(3)];
                case 15:
                    _a.sent();
                    redraw(0);
                    color(0, 0, 0);
                    boxf(left = 0, top1 = 0, right = 340, bottom = 340);
                    gmode(2);
                    var_727 = 0;
                    var_728 = 350;
                    for (cnt2_4 = 0; cnt2_4 < 9; ++cnt2_4) {
                        var_729 = 0;
                        var_730 = 720;
                        for (cnt3_2 = 0; cnt3_2 < 9; ++cnt3_2) {
                            pos(var_729, var_727);
                            gcopy(17, var_730, var_728, 40, 40);
                            var_729 = var_729 + 40;
                            var_730 = var_730 + 40;
                        }
                        var_727 = var_727 + 40;
                        var_728 = var_728 + 40;
                    }
                    pos(36, 110);
                    if (var_731 >= 1 && var_731 <= 3) {
                        gcopy(17, 1080, 600, 90, 83);
                    }
                    if (var_731 >= 4 && var_731 <= 6) {
                        gcopy(17, 1080, 480, 90, 83);
                    }
                    if (var_731 >= 7) {
                        gcopy(17, 1080, 360, 90, 83);
                    }
                    for (cnt2_5 = 0; cnt2_5 < 4; ++cnt2_5) {
                        color(0, 0, 0);
                        gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
                        if (cnt2_5 == 0) {
                            pos(45, 50);
                        }
                        if (cnt2_5 == 1) {
                            pos(100, 60);
                        }
                        if (cnt2_5 == 2) {
                            pos(35, 90);
                        }
                        if (cnt2_5 == 3) {
                            pos(80, 100);
                        }
                        if (var_731 == 1 || var_731 == 2) {
                            gcopy(17, 800, 760, 40, 80);
                        }
                        if (var_731 == 3 || var_731 == 4) {
                            gcopy(17, 840, 760, 40, 80);
                        }
                        if (var_731 == 5 || var_731 == 6) {
                            gcopy(17, 880, 760, 40, 80);
                        }
                        if (var_731 == 7 || var_731 == 8) {
                            gcopy(17, 920, 760, 40, 80);
                        }
                        if (var_731 == 9 || var_731 == 10) {
                            gcopy(17, 960, 760, 40, 80);
                        }
                        if (var_731 == 11 || var_731 == 12) {
                            gcopy(17, 1000, 760, 40, 80);
                        }
                        if (var_731 == 13 || var_731 == 14) {
                            gcopy(17, 1040, 760, 40, 80);
                        }
                        if (var_731 == 15 || var_731 == 16) {
                            gcopy(17, 1080, 760, 40, 80);
                        }
                        if (var_731 == 17 || var_731 == 18) {
                            gcopy(17, 1120, 760, 40, 80);
                        }
                        if (var_731 == 19 || var_731 == 20) {
                            gcopy(17, 1160, 760, 40, 80);
                        }
                    }
                    if (!(var_10 >= 1)) return [3 /*break*/, 17];
                    return [4 /*yield*/, func338()];
                case 16:
                    _a.sent();
                    _a.label = 17;
                case 17:
                    redraw(1);
                    var_731++;
                    _a.label = 18;
                case 18:
                    ++cnt1_5;
                    return [3 /*break*/, 14];
                case 19: return [4 /*yield*/, wait(1)];
                case 20:
                    _a.sent();
                    var_731 = 0;
                    var_732 = 0;
                    return [4 /*yield*/, func140()];
                case 21:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func140() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_6, cnt3_3, cnt4_1, cnt2_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(140);
                    return [4 /*yield*/, await_(50)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func141()];
                case 2:
                    _a.sent();
                    if (!(var_12 == 1)) return [3 /*break*/, 6];
                    conf_keyon = getkey(112);
                    if (!(conf_keyon == 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func221()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
                case 4:
                    conf_keyon = getkey(113);
                    if (!(conf_keyon == 1)) return [3 /*break*/, 6];
                    return [4 /*yield*/, func224()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
                case 6:
                    var_628 = 1;
                    return [4 /*yield*/, func080()];
                case 7:
                    _a.sent();
                    if (!(var_242 == 1 || var_239 == 1 || var_244 == 1 || var_249 == 1 || var_238 == 1 || var_252 == 1)) return [3 /*break*/, 25];
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func178()];
                case 8:
                    _a.sent();
                    var_599 = 5;
                    cnt2_6 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt2_6 < 6)) return [3 /*break*/, 15];
                    redraw(0);
                    gmode(2);
                    var_727 = 0;
                    var_728 = 350;
                    for (cnt3_3 = 0; cnt3_3 < 9; ++cnt3_3) {
                        var_729 = 0;
                        var_730 = 720;
                        for (cnt4_1 = 0; cnt4_1 < 9; ++cnt4_1) {
                            pos(var_729, var_727);
                            gcopy(17, var_730, var_728, 40, 40);
                            var_729 = var_729 + 40;
                            var_730 = var_730 + 40;
                        }
                        var_727 = var_727 + 40;
                        var_728 = var_728 + 40;
                    }
                    pos(36, 110);
                    gcopy(17, 1080, 360, 90, 83);
                    return [4 /*yield*/, func180()];
                case 10:
                    _a.sent();
                    if (!(var_10 >= 1)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func338()];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12: return [4 /*yield*/, wait(2)];
                case 13:
                    _a.sent();
                    redraw(1);
                    var_599 = var_599 - 1;
                    _a.label = 14;
                case 14:
                    ++cnt2_6;
                    return [3 /*break*/, 9];
                case 15:
                    var_599 = 0;
                    cnt2_7 = 0;
                    _a.label = 16;
                case 16:
                    if (!(cnt2_7 < 6)) return [3 /*break*/, 23];
                    redraw(0);
                    return [4 /*yield*/, func146()];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, func180()];
                case 18:
                    _a.sent();
                    if (!(var_10 >= 1)) return [3 /*break*/, 20];
                    return [4 /*yield*/, func338()];
                case 19:
                    _a.sent();
                    _a.label = 20;
                case 20: return [4 /*yield*/, wait(2)];
                case 21:
                    _a.sent();
                    redraw(1);
                    var_599 = var_599 + 1;
                    _a.label = 22;
                case 22:
                    ++cnt2_7;
                    return [3 /*break*/, 16];
                case 23:
                    var_732 = 0;
                    return [4 /*yield*/, func142()];
                case 24:
                    _a.sent();
                    return [2 /*return*/];
                case 25: return [4 /*yield*/, func140()];
                case 26:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func141() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_6, cnt2_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(141);
                    redraw(0);
                    gmode(2);
                    var_727 = 0;
                    var_728 = 350;
                    for (cnt1_6 = 0; cnt1_6 < 9; ++cnt1_6) {
                        var_729 = 0;
                        var_730 = 720;
                        for (cnt2_8 = 0; cnt2_8 < 9; ++cnt2_8) {
                            pos(var_729, var_727);
                            gcopy(17, var_730, var_728, 40, 40);
                            var_729 = var_729 + 40;
                            var_730 = var_730 + 40;
                        }
                        var_727 = var_727 + 40;
                        var_728 = var_728 + 40;
                    }
                    pos(36, 110);
                    gcopy(17, 1080, 360, 90, 83);
                    pos(100, 250);
                    color(0, 0, 0);
                    var_733 = var_732;
                    if (var_732 > 255) {
                        var_733 = 255 - (var_732 - 255);
                    }
                    gmode(4, null, null, var_733);
                    gcopy(17, 0, 1090, 140, 25);
                    var_732 = var_732 + 6;
                    if (var_732 > 500) {
                        var_732 = 0;
                    }
                    if (!(var_635 >= 1 || var_636 >= 1 || var_633 >= 1 || var_632 >= 1)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func102()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(var_10 >= 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func338()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    redraw(1);
                    return [2 /*return*/];
            }
        });
    });
}
function func142() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_9, cnt2_10, cnt3_4, cnt4_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(142);
                    var_734 = 0;
                    return [4 /*yield*/, func080()];
                case 1:
                    _a.sent();
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 3];
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func147()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
                case 3:
                    if (!(var_239 == 1)) return [3 /*break*/, 21];
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func178()];
                case 4:
                    _a.sent();
                    var_599 = 5;
                    cnt2_9 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt2_9 < 6)) return [3 /*break*/, 12];
                    redraw(0);
                    return [4 /*yield*/, func146()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, func180()];
                case 7:
                    _a.sent();
                    if (!(var_10 >= 1)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func338()];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9: return [4 /*yield*/, wait(2)];
                case 10:
                    _a.sent();
                    redraw(1);
                    var_599 = var_599 - 1;
                    _a.label = 11;
                case 11:
                    ++cnt2_9;
                    return [3 /*break*/, 5];
                case 12:
                    var_599 = 0;
                    cnt2_10 = 0;
                    _a.label = 13;
                case 13:
                    if (!(cnt2_10 < 6)) return [3 /*break*/, 19];
                    redraw(0);
                    gmode(2);
                    var_727 = 0;
                    var_728 = 350;
                    for (cnt3_4 = 0; cnt3_4 < 9; ++cnt3_4) {
                        var_729 = 0;
                        var_730 = 720;
                        for (cnt4_2 = 0; cnt4_2 < 9; ++cnt4_2) {
                            pos(var_729, var_727);
                            gcopy(17, var_730, var_728, 40, 40);
                            var_729 = var_729 + 40;
                            var_730 = var_730 + 40;
                        }
                        var_727 = var_727 + 40;
                        var_728 = var_728 + 40;
                    }
                    pos(36, 110);
                    gcopy(17, 1080, 360, 90, 83);
                    return [4 /*yield*/, func180()];
                case 14:
                    _a.sent();
                    if (!(var_10 >= 1)) return [3 /*break*/, 16];
                    return [4 /*yield*/, func338()];
                case 15:
                    _a.sent();
                    _a.label = 16;
                case 16: return [4 /*yield*/, wait(2)];
                case 17:
                    _a.sent();
                    redraw(1);
                    var_599 = var_599 + 1;
                    _a.label = 18;
                case 18:
                    ++cnt2_10;
                    return [3 /*break*/, 13];
                case 19:
                    pos(0, 0);
                    gmode(2);
                    return [4 /*yield*/, func140()];
                case 20:
                    _a.sent();
                    return [2 /*return*/];
                case 21:
                    if (!(var_255 == 1)) return [3 /*break*/, 37];
                    if (!(var_64 == 0)) return [3 /*break*/, 25];
                    var_64 = 4;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func143()];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, wait(13)];
                case 23:
                    _a.sent();
                    return [4 /*yield*/, func142()];
                case 24:
                    _a.sent();
                    return [2 /*return*/];
                case 25:
                    if (!(var_64 == 1)) return [3 /*break*/, 28];
                    var_64 = 0;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func143()];
                case 26:
                    _a.sent();
                    return [4 /*yield*/, wait(10)];
                case 27:
                    _a.sent();
                    _a.label = 28;
                case 28:
                    if (!(var_64 == 2)) return [3 /*break*/, 31];
                    var_64 = 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func143()];
                case 29:
                    _a.sent();
                    return [4 /*yield*/, wait(10)];
                case 30:
                    _a.sent();
                    _a.label = 31;
                case 31:
                    if (!(var_64 == 3)) return [3 /*break*/, 34];
                    var_64 = 2;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func143()];
                case 32:
                    _a.sent();
                    return [4 /*yield*/, wait(10)];
                case 33:
                    _a.sent();
                    _a.label = 34;
                case 34:
                    if (!(var_64 == 4)) return [3 /*break*/, 37];
                    var_64 = 3;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func143()];
                case 35:
                    _a.sent();
                    return [4 /*yield*/, wait(10)];
                case 36:
                    _a.sent();
                    _a.label = 37;
                case 37:
                    if (!(var_259 == 1)) return [3 /*break*/, 53];
                    if (!(var_64 == 4)) return [3 /*break*/, 41];
                    var_64 = 0;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func143()];
                case 38:
                    _a.sent();
                    return [4 /*yield*/, wait(13)];
                case 39:
                    _a.sent();
                    return [4 /*yield*/, func142()];
                case 40:
                    _a.sent();
                    return [2 /*return*/];
                case 41:
                    if (!(var_64 == 3)) return [3 /*break*/, 44];
                    var_64 = 4;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func143()];
                case 42:
                    _a.sent();
                    return [4 /*yield*/, wait(10)];
                case 43:
                    _a.sent();
                    _a.label = 44;
                case 44:
                    if (!(var_64 == 2)) return [3 /*break*/, 47];
                    var_64 = 3;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func143()];
                case 45:
                    _a.sent();
                    return [4 /*yield*/, wait(10)];
                case 46:
                    _a.sent();
                    _a.label = 47;
                case 47:
                    if (!(var_64 == 1)) return [3 /*break*/, 50];
                    var_64 = 2;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func143()];
                case 48:
                    _a.sent();
                    return [4 /*yield*/, wait(10)];
                case 49:
                    _a.sent();
                    _a.label = 50;
                case 50:
                    if (!(var_64 == 0)) return [3 /*break*/, 53];
                    var_64 = 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func143()];
                case 51:
                    _a.sent();
                    return [4 /*yield*/, wait(10)];
                case 52:
                    _a.sent();
                    _a.label = 53;
                case 53: return [4 /*yield*/, func143()];
                case 54:
                    _a.sent();
                    return [4 /*yield*/, await_(50)];
                case 55:
                    _a.sent();
                    return [4 /*yield*/, func142()];
                case 56:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func143() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(143);
                    redraw(0);
                    return [4 /*yield*/, func146()];
                case 1:
                    _a.sent();
                    if (!(var_10 >= 1)) return [3 /*break*/, 3];
                    return [4 /*yield*/, func338()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    redraw(1);
                    return [2 /*return*/];
            }
        });
    });
}
// 最初のオープニング(第5部最終決戦のシーン)読み出し？
function func144() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(144);
                    return [4 /*yield*/, func080()];
                case 1:
                    _a.sent();
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 7];
                    if (!(var_734 == 0)) return [3 /*break*/, 7];
                    var_628 = 0;
                    var_632 = 0;
                    var_633 = 0;
                    var_634 = 0;
                    var_635 = 0;
                    var_636 = 0;
                    DSPLAY(audio_id = 212);
                    if (var_726 == 1) {
                        var_735 = "01.dat";
                    }
                    if (var_726 == 2) {
                        var_735 = "02.dat";
                    }
                    if (var_726 == 3) {
                        var_735 = "03.dat";
                    }
                    exist(var_735); //おそらくセーブデータが無ければ
                    if (!(strsize == (-1))) return [3 /*break*/, 4];
                    return [4 /*yield*/, func178()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func150()];
                case 3:
                    _a.sent(); //セリフのやり取り func1_event.ts
                    return [2 /*return*/];
                case 4: return [4 /*yield*/, func178()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, func005()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
                case 7:
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 10];
                    if (!(var_734 == 1)) return [3 /*break*/, 10];
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func178()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, func145()];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
                case 10:
                    if (!(var_239 == 1)) return [3 /*break*/, 13];
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func178()];
                case 11:
                    _a.sent();
                    var_725 = 0;
                    return [4 /*yield*/, func142()];
                case 12:
                    _a.sent();
                    return [2 /*return*/];
                case 13:
                    if (!(var_255 == 1)) return [3 /*break*/, 17];
                    if (var_726 == 1) {
                        var_726 = 1;
                    }
                    if (!(var_726 == 2)) return [3 /*break*/, 15];
                    var_726 = 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, wait(8)];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    if (!(var_726 == 3)) return [3 /*break*/, 17];
                    var_726 = 2;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, wait(8)];
                case 16:
                    _a.sent();
                    _a.label = 17;
                case 17:
                    if (!(var_259 == 1)) return [3 /*break*/, 21];
                    if (var_726 == 3) {
                        var_726 = 3;
                    }
                    if (!(var_726 == 2)) return [3 /*break*/, 19];
                    var_726 = 3;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, wait(8)];
                case 18:
                    _a.sent();
                    _a.label = 19;
                case 19:
                    if (!(var_726 == 1)) return [3 /*break*/, 21];
                    var_726 = 2;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, wait(8)];
                case 20:
                    _a.sent();
                    _a.label = 21;
                case 21:
                    redraw(0);
                    return [4 /*yield*/, func146()];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, func148()];
                case 23:
                    _a.sent();
                    if (!(var_10 >= 1)) return [3 /*break*/, 25];
                    return [4 /*yield*/, func338()];
                case 24:
                    _a.sent();
                    _a.label = 25;
                case 25:
                    redraw(1);
                    return [4 /*yield*/, await_(50)];
                case 26:
                    _a.sent();
                    return [4 /*yield*/, func144()];
                case 27:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func145() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(145);
                    conf_keyon = getkey(89);
                    if (!(conf_keyon == 1)) return [3 /*break*/, 3];
                    conf_keyon = 0;
                    var_736 = 0;
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func240()];
                case 1:
                    _a.sent();
                    var_737 = 0;
                    var_725 = 0;
                    return [4 /*yield*/, func142()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
                case 3: return [4 /*yield*/, func080()];
                case 4:
                    _a.sent();
                    if (!(var_239 == 1)) return [3 /*break*/, 7];
                    return [4 /*yield*/, func178()];
                case 5:
                    _a.sent();
                    DSPLAY(audio_id = 212);
                    var_737 = 0;
                    return [4 /*yield*/, func144()];
                case 6:
                    _a.sent(); //
                    return [2 /*return*/];
                case 7:
                    redraw(0);
                    return [4 /*yield*/, func146()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, func148()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, func149()];
                case 10:
                    _a.sent();
                    if (!(var_10 >= 1)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func338()];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    redraw(1);
                    return [4 /*yield*/, await_(50)];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, func145()];
                case 14:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ログイン画面
function func146() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_7, cnt2_11, cnt1_8, cnt2_12;
        return __generator(this, function (_a) {
            dbgprt(146);
            var_738 = 0;
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            var_727 = 0;
            var_728 = 400;
            for (cnt1_7 = 0; cnt1_7 < 9; ++cnt1_7) {
                var_729 = 0;
                var_730 = 0;
                for (cnt2_11 = 0; cnt2_11 < 9; ++cnt2_11) {
                    pos(var_729, var_727);
                    gcopy(3, var_730, var_728, 40, 40);
                    var_729 = var_729 + 40;
                    var_730 = var_730 + 40;
                }
                var_727 = var_727 + 40;
                var_728 = var_728 + 40;
            }
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            var_727 = 0;
            var_728 = 0;
            for (cnt1_8 = 0; cnt1_8 < 9; ++cnt1_8) {
                var_729 = 0;
                var_730 = 0;
                for (cnt2_12 = 0; cnt2_12 < 9; ++cnt2_12) {
                    pos(var_729, var_727);
                    gcopy(12, var_730, var_728, 40, 40);
                    var_729 = var_729 + 40;
                    var_730 = var_730 + 40;
                }
                var_727 = var_727 + 40;
                var_728 = var_728 + 40;
            }
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            pos(7, 20);
            gcopy(12, 0, 0, 160, 130 - var_738);
            color(255, 255, 255);
            line(10, 21, 163, 21);
            line(10, 149 - var_738, 163, 149 - var_738);
            line(9, 22, 9, 147 - var_738);
            line(165, 22, 165, 147 - var_738);
            pset(10, 22);
            pset(164, 22);
            pset(10, 148 - var_738);
            pset(164, 148 - var_738);
            font("ＭＳ　Ｐゴシック", 16, 1);
            pos(45, 40);
            color(255, 255, 255);
            mes("冒険に出る");
            pos(45, 60);
            color(255, 255, 255);
            mes("ボス日記を消す");
            pos(45, 80);
            color(255, 255, 255);
            mes("魔少年の問題");
            pos(45, 100);
            color(155, 155, 155);
            mes("配布サイトへ");
            pos(45, 120);
            color(255, 255, 255);
            mes("終了");
            if (var_64 == 0) {
                pos(12, 37);
            }
            if (var_64 == 1) {
                pos(12, 57);
            }
            if (var_64 == 2) {
                pos(12, 77);
            }
            if (var_64 == 3) {
                pos(12, 97);
            }
            if (var_64 == 4) {
                pos(12, 117);
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_725 == 0 && var_509 == 0) {
                gcopy(8, 70, 50, 25, 20);
            }
            pos(240, 320);
            color(255, 255, 255);
            font("ＭＳ　Ｐゴシック", 12);
            // ログイン画面下のバージョンNo. 
            if (var_12 == 0) {
                mes("version " + var_13);
            }
            if (var_12 == 1) {
                mes("Version " + var_13);
            }
            return [2 /*return*/];
        });
    });
}
function func147() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(147);
                    var_599 = 0;
                    if (!(var_64 == 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, func178()];
                case 1:
                    _a.sent();
                    var_726 = 1;
                    var_725 = 1;
                    return [4 /*yield*/, func144()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
                case 3:
                    if (!(var_64 == 1)) return [3 /*break*/, 6];
                    return [4 /*yield*/, func178()];
                case 4:
                    _a.sent();
                    var_726 = 1;
                    var_725 = 1;
                    var_734 = 1;
                    return [4 /*yield*/, func144()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
                case 6:
                    if (!(var_64 == 2)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func178()];
                case 7:
                    _a.sent();
                    onexit(0);
                    return [4 /*yield*/, func882()];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
                case 9:
                    if (var_64 == 4) {
                        end();
                    }
                    return [4 /*yield*/, func142()];
                case 10:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ボス日記画面機能
function func148() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_9;
        return __generator(this, function (_a) {
            dbgprt(148);
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            var_739 = 50;
            var_740 = 70;
            var_741 = var_740;
            for (cnt1_9 = 0; cnt1_9 < 3; ++cnt1_9) {
                pos(50, var_740);
                gcopy(12, 0, 0, 251, 60);
                color(255, 255, 255);
                line(var_739 + 2, var_740 + 1, var_739 + 247, var_740 + 1);
                line(var_739 + 2, var_740 + 59, var_739 + 247, var_740 + 59);
                line(var_739 + 1, var_740 + 2, var_739 + 1, var_740 + 57);
                line(var_739 + 249, var_740 + 2, var_739 + 249, var_740 + 57);
                pset(var_739 + 2, var_740 + 2);
                pset(var_739 + 248, var_740 + 2);
                pset(var_739 + 2, var_740 + 58);
                pset(var_739 + 248, var_740 + 58);
                var_740 = var_740 + 70;
            }
            font("ＭＳ　Ｐゴシック", 16, 1);
            color(255, 255, 255);
            // ボス日記1のデータが0でなければ
            if (var_703 != 0) {
                pos(80, var_741 + 15);
                mes("１：" + var_705);
                pos(150, var_741 + 35);
                if (var_706 > 0) {
                    mes("" + var_706 + "階");
                }
                pos(200, var_741 + 35);
                mes("" + var_707 + "回死亡");
                if (var_708 >= 1) {
                    pos(80, var_741 + 35);
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                    gcopy(8, 100, 82, 17, 17);
                }
                if (var_709 >= 1) {
                    pos(102, var_741 + 35);
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                    gcopy(8, 120, 82, 17, 17);
                }
                if (var_710 >= 1) {
                    pos(124, var_741 + 35);
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                    gcopy(8, 140, 82, 17, 17);
                }
            }
            if (var_703 == 0) {
                pos(80, var_741 + 15);
                mes("１： ボス日記を作る");
            }
            if (var_711 != 0) {
                pos(80, var_741 + 85);
                mes("２：" + var_712);
                pos(150, var_741 + 105);
                if (var_713 > 0) {
                    mes("" + var_713 + "階");
                }
                pos(200, var_741 + 105);
                mes("" + var_714 + "回死亡");
                if (var_715 >= 1) {
                    pos(80, var_741 + 105);
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                    gcopy(8, 100, 82, 17, 17);
                }
                if (var_716 >= 1) {
                    pos(102, var_741 + 105);
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                    gcopy(8, 120, 82, 17, 17);
                }
                if (var_717 >= 1) {
                    pos(124, var_741 + 105);
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                    gcopy(8, 140, 82, 17, 17);
                }
            }
            if (var_711 == 0) {
                pos(80, var_741 + 85);
                mes("２： ボス日記を作る");
            }
            if (var_718 != 0) {
                pos(80, var_741 + 155);
                mes("３：" + var_719);
                pos(150, var_741 + 175);
                if (var_720 > 0) {
                    mes("" + var_720 + "階");
                }
                pos(200, var_741 + 175);
                mes("" + var_721 + "回死亡");
                if (var_722 >= 1) {
                    pos(80, var_741 + 175);
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                    gcopy(8, 100, 82, 17, 17);
                }
                if (var_723 >= 1) {
                    pos(102, var_741 + 175);
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                    gcopy(8, 120, 82, 17, 17);
                }
                if (var_724 >= 1) {
                    pos(124, var_741 + 175);
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                    gcopy(8, 140, 82, 17, 17);
                }
            }
            if (var_718 == 0) {
                pos(80, var_741 + 155);
                mes("３： ボス日記を作る");
            }
            if (var_726 == 1) {
                pos(53, var_741 + 12);
            }
            if (var_726 == 2) {
                pos(53, var_741 + 70 + 12);
            }
            if (var_726 == 3) {
                pos(53, var_741 + 140 + 12);
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            gcopy(8, 70, 50, 25, 20);
            return [2 /*return*/];
        });
    });
}
function func149() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(149);
            if (var_726 == 1) {
                var_739 = 70;
                var_740 = 70 + 15 + 20;
            }
            if (var_726 == 2) {
                var_739 = 70;
                var_740 = 70 + 85 + 20;
            }
            if (var_726 == 3) {
                var_739 = 70;
                var_740 = 70 + 155 + 20;
            }
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            pos(70, var_740);
            gcopy(12, 0, 0, 251, 60);
            color(255, 0, 0);
            line(var_739 + 2, var_740 + 1, var_739 + 247, var_740 + 1);
            line(var_739 + 2, var_740 + 59, var_739 + 247, var_740 + 59);
            line(var_739 + 1, var_740 + 2, var_739 + 1, var_740 + 57);
            line(var_739 + 249, var_740 + 2, var_739 + 249, var_740 + 57);
            pset(var_739 + 2, var_740 + 2);
            pset(var_739 + 248, var_740 + 2);
            pset(var_739 + 2, var_740 + 58);
            pset(var_739 + 248, var_740 + 58);
            font("ＭＳ　Ｐゴシック", 16, 1);
            pos(var_739 + 15, var_740 + 15);
            color(255, 0, 0);
            if (var_726 == 1 && var_703 == 0) {
                mes("データはありません");
                return [2 /*return*/];
            }
            if (var_726 == 2 && var_711 == 0) {
                mes("データはありません");
                return [2 /*return*/];
            }
            if (var_726 == 3 && var_718 == 0) {
                mes("データはありません");
                return [2 /*return*/];
            }
            mes("このデータを消去しますか？");
            mes("「Y」キーを押すと消去されます。");
            return [2 /*return*/];
        });
    });
}
// オープニング (5部最終決戦 ジョルノ達との戦いの場面)
function func150() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_10, cnt1_11, cnt1_12, cnt1_13, cnt1_14, cnt1_15, cnt1_16, cnt1_17, cnt1_18, cnt1_19, cnt1_20, cnt1_21, cnt1_22, cnt1_23, cnt1_24, cnt1_25, cnt1_26, cnt1_27;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(150);
                    return [4 /*yield*/, func233()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func158()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func108()];
                case 3:
                    _a.sent();
                    var_595 = 3;
                    return [4 /*yield*/, func076()];
                case 4:
                    _a.sent();
                    cnt1_10 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt1_10 < 80)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func339()];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    ++cnt1_10;
                    return [3 /*break*/, 5];
                case 8:
                    var_350 = 100;
                    var_567 = 100;
                    var_68 = 1;
                    var_217 = 1;
                    DSPLAY(audio_id = 178);
                    var_271 = 1;
                    var_594 = 1;
                    cnt1_11 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt1_11 < 40)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent();
                    var_594 = var_594 + 1;
                    _a.label = 11;
                case 11:
                    ++cnt1_11;
                    return [3 /*break*/, 9];
                case 12:
                    var_271 = 0;
                    var_594 = 0;
                    return [4 /*yield*/, func335()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 14:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「おまえには 死んだことを";
                    comments_row2 = "　　　後悔する時間をも…";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func340()];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 16:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「与えんッ！！」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 17:
                    _a.sent();
                    cnt1_12 = 0;
                    _a.label = 18;
                case 18:
                    if (!(cnt1_12 < 3)) return [3 /*break*/, 21];
                    return [4 /*yield*/, func337()];
                case 19:
                    _a.sent();
                    _a.label = 20;
                case 20:
                    ++cnt1_12;
                    return [3 /*break*/, 18];
                case 21:
                    var_83[1].Var6 = 1;
                    var_83[1].Var1 = 29;
                    var_83[1].Var2 = 10;
                    var_82[28][10] = 0;
                    var_82[29][10] = 1;
                    var_83[1].Var5 = 6;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 22:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 23:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 24:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 25:
                    _a.sent();
                    var_83[1].Var1 = 30;
                    var_83[1].Var2 = 10;
                    var_82[29][10] = 0;
                    var_82[30][10] = 1;
                    var_83[1].Var5 = 6;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 26:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 27:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 28:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 29:
                    _a.sent();
                    var_83[1].Var1 = 31;
                    var_83[1].Var2 = 10;
                    var_82[30][10] = 0;
                    var_82[31][10] = 1;
                    var_83[1].Var5 = 6;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 30:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 31:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 32:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 33:
                    _a.sent();
                    var_83[1].Var6 = 0;
                    var_742 = 1;
                    var_83[1].Var7 = 1;
                    var_743 = 1;
                    cnt1_13 = 0;
                    _a.label = 34;
                case 34:
                    if (!(cnt1_13 < 3)) return [3 /*break*/, 37];
                    return [4 /*yield*/, func337()];
                case 35:
                    _a.sent();
                    _a.label = 36;
                case 36:
                    ++cnt1_13;
                    return [3 /*break*/, 34];
                case 37:
                    var_151 = 1;
                    var_152 = 2;
                    DSPLAY(audio_id = 185);
                    var_271 = 1;
                    var_531 = 1;
                    cnt1_14 = 0;
                    _a.label = 38;
                case 38:
                    if (!(cnt1_14 < 20)) return [3 /*break*/, 41];
                    return [4 /*yield*/, func337()];
                case 39:
                    _a.sent();
                    var_531++;
                    var_742 = 3;
                    _a.label = 40;
                case 40:
                    ++cnt1_14;
                    return [3 /*break*/, 38];
                case 41:
                    var_271 = 0;
                    var_531 = 0;
                    var_742 = 0;
                    var_83[1].Var7 = 0;
                    var_743 = 0;
                    var_83[1].Var5 = 4;
                    var_83[5].Var0 = 49;
                    var_83[5].Var1 = 30;
                    var_83[5].Var2 = 10;
                    var_82[30][10] = 5;
                    var_83[5].Var5 = 6;
                    var_271 = 1;
                    var_744 = 1;
                    var_745 = 5 * 40 + 20;
                    var_746 = 3 * 40 - 10;
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「えっ」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 42:
                    _a.sent();
                    cnt1_15 = 0;
                    _a.label = 43;
                case 43:
                    if (!(cnt1_15 < 2)) return [3 /*break*/, 46];
                    var_744++;
                    return [4 /*yield*/, func337()];
                case 44:
                    _a.sent();
                    _a.label = 45;
                case 45:
                    ++cnt1_15;
                    return [3 /*break*/, 43];
                case 46:
                    var_83[5].Var5 = 4;
                    var_83[6].Var0 = 49;
                    var_83[6].Var1 = 29;
                    var_83[6].Var2 = 10;
                    var_82[29][10] = 6;
                    var_83[6].Var5 = 6;
                    var_744 = 1;
                    var_745 = 4 * 40 + 20;
                    var_746 = 3 * 40 - 10;
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「えっ」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 47:
                    _a.sent();
                    cnt1_16 = 0;
                    _a.label = 48;
                case 48:
                    if (!(cnt1_16 < 2)) return [3 /*break*/, 51];
                    var_744++;
                    return [4 /*yield*/, func337()];
                case 49:
                    _a.sent();
                    _a.label = 50;
                case 50:
                    ++cnt1_16;
                    return [3 /*break*/, 48];
                case 51:
                    var_83[6].Var5 = 4;
                    var_83[7].Var0 = 49;
                    var_83[7].Var1 = 28;
                    var_83[7].Var2 = 10;
                    var_82[28][10] = 7;
                    var_83[7].Var5 = 6;
                    var_744 = 1;
                    var_745 = 3 * 40 + 20;
                    var_746 = 3 * 40 - 10;
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「えっ」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 52:
                    _a.sent();
                    cnt1_17 = 0;
                    _a.label = 53;
                case 53:
                    if (!(cnt1_17 < 2)) return [3 /*break*/, 56];
                    var_744++;
                    return [4 /*yield*/, func337()];
                case 54:
                    _a.sent();
                    _a.label = 55;
                case 55:
                    ++cnt1_17;
                    return [3 /*break*/, 53];
                case 56:
                    var_271 = 0;
                    var_744 = 0;
                    var_151 = 0;
                    var_152 = 0;
                    var_83[5].Var0 = 0;
                    var_83[5].Var1 = 0;
                    var_83[5].Var2 = 0;
                    var_82[28][10] = 0;
                    var_83[6].Var0 = 0;
                    var_83[6].Var1 = 0;
                    var_83[6].Var2 = 0;
                    var_82[29][10] = 0;
                    var_83[7].Var0 = 0;
                    var_83[7].Var1 = 0;
                    var_83[7].Var2 = 0;
                    var_82[30][10] = 0;
                    var_82[31][10] = 0;
                    var_83[1].Var1 = 28;
                    var_83[1].Var2 = 10;
                    var_82[28][10] = 1;
                    var_83[1].Var5 = 6;
                    return [4 /*yield*/, func094()];
                case 57:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「オッ…オレはッ！";
                    var_297 = "初めから何も動いていないッ！！」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 58:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 59:
                    _a.sent();
                    var_83[2].Var6 = 1;
                    var_83[2].Var1 = 31;
                    var_83[2].Var2 = 10;
                    var_82[32][10] = 0;
                    var_82[31][10] = 2;
                    var_83[2].Var5 = 4;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 60:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 61:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 62:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 63:
                    _a.sent();
                    var_83[2].Var1 = 30;
                    var_83[2].Var2 = 10;
                    var_82[31][10] = 0;
                    var_82[30][10] = 2;
                    var_83[2].Var5 = 4;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 64:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 65:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 66:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 67:
                    _a.sent();
                    var_83[2].Var1 = 29;
                    var_83[2].Var2 = 10;
                    var_82[30][10] = 0;
                    var_82[29][10] = 2;
                    var_83[2].Var5 = 4;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 68:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 69:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 70:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 71:
                    _a.sent();
                    var_83[2].Var6 = 0;
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ｼﾞｮﾙﾉ「無駄アァァァァ！！」";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_742 = 1;
                    var_83[2].Var7 = 1;
                    var_743 = 1;
                    cnt1_18 = 0;
                    _a.label = 72;
                case 72:
                    if (!(cnt1_18 < 3)) return [3 /*break*/, 75];
                    return [4 /*yield*/, func337()];
                case 73:
                    _a.sent();
                    _a.label = 74;
                case 74:
                    ++cnt1_18;
                    return [3 /*break*/, 72];
                case 75:
                    var_747 = 1;
                    var_748 = 3;
                    var_749 = 4;
                    DSPLAY(audio_id = 115);
                    var_750 = 1;
                    var_209 = 20;
                    var_211 = 0;
                    return [4 /*yield*/, func337()];
                case 76:
                    _a.sent();
                    cnt1_19 = 0;
                    _a.label = 77;
                case 77:
                    if (!(cnt1_19 < 3)) return [3 /*break*/, 80];
                    return [4 /*yield*/, func337()];
                case 78:
                    _a.sent();
                    _a.label = 79;
                case 79:
                    ++cnt1_19;
                    return [3 /*break*/, 77];
                case 80:
                    var_742 = 0;
                    var_83[2].Var7 = 0;
                    var_743 = 0;
                    var_83[1].Var6 = 1;
                    var_83[1].Var1 = 27;
                    var_83[1].Var2 = 10;
                    var_82[28][10] = 0;
                    var_82[27][10] = 1;
                    var_83[1].Var5 = 4;
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 81:
                    _a.sent();
                    var_409 = 0;
                    var_83[1].Var5 = 6;
                    return [4 /*yield*/, func337()];
                case 82:
                    _a.sent();
                    var_83[1].Var1 = 26;
                    var_83[1].Var2 = 10;
                    var_82[27][10] = 0;
                    var_82[26][10] = 1;
                    var_83[1].Var5 = 4;
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 83:
                    _a.sent();
                    var_409 = 0;
                    var_83[1].Var5 = 6;
                    return [4 /*yield*/, func337()];
                case 84:
                    _a.sent();
                    var_83[1].Var1 = 25;
                    var_83[1].Var2 = 10;
                    var_82[26][10] = 0;
                    var_82[25][10] = 1;
                    var_83[1].Var5 = 4;
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 85:
                    _a.sent();
                    var_409 = 0;
                    var_83[1].Var5 = 6;
                    return [4 /*yield*/, func337()];
                case 86:
                    _a.sent();
                    var_83[1].Var1 = 26;
                    var_83[1].Var2 = 11;
                    var_82[25][10] = 0;
                    var_82[26][11] = 1;
                    var_83[1].Var5 = 3;
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 87:
                    _a.sent();
                    var_409 = 0;
                    var_83[1].Var5 = 7;
                    return [4 /*yield*/, func337()];
                case 88:
                    _a.sent();
                    var_83[1].Var0 = 0;
                    var_83[1].Var1 = 0;
                    var_83[1].Var2 = 0;
                    var_82[25][10] = 0;
                    var_83[1].Var6 = 0;
                    DSPLAY(audio_id = 186);
                    var_747 = 0;
                    var_750 = 0;
                    var_209 = 0;
                    var_271 = 1;
                    var_751 = 1;
                    cnt1_20 = 0;
                    _a.label = 89;
                case 89:
                    if (!(cnt1_20 < 20)) return [3 /*break*/, 92];
                    return [4 /*yield*/, func337()];
                case 90:
                    _a.sent();
                    var_751++;
                    _a.label = 91;
                case 91:
                    ++cnt1_20;
                    return [3 /*break*/, 89];
                case 92:
                    var_271 = 0;
                    var_751 = 0;
                    var_83[3].Var6 = 1;
                    var_83[3].Var1 = 29;
                    var_83[3].Var2 = 7;
                    var_82[30][7] = 0;
                    var_82[29][7] = 3;
                    var_83[3].Var5 = 4;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 93:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 94:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 95:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 96:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 97:
                    _a.sent();
                    var_83[3].Var1 = 28;
                    var_83[3].Var2 = 8;
                    var_82[29][7] = 0;
                    var_82[28][8] = 3;
                    var_83[3].Var5 = 1;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 98:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 99:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 100:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 101:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 102:
                    _a.sent();
                    var_83[3].Var1 = 27;
                    var_83[3].Var2 = 9;
                    var_82[28][8] = 0;
                    var_82[27][9] = 3;
                    var_83[3].Var5 = 1;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 103:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 104:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 105:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 106:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 107:
                    _a.sent();
                    var_83[3].Var6 = 0;
                    return [4 /*yield*/, func094()];
                case 108:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾐｽﾀ「や…　やったぞッ　ついにッ！」";
                    comments_row2 = "　　　ついにッ！　倒したぞ！」";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    cnt1_21 = 0;
                    _a.label = 109;
                case 109:
                    if (!(cnt1_21 < 20)) return [3 /*break*/, 112];
                    return [4 /*yield*/, func337()];
                case 110:
                    _a.sent();
                    _a.label = 111;
                case 111:
                    ++cnt1_21;
                    return [3 /*break*/, 109];
                case 112:
                    var_83[2].Var0 = 131;
                    var_83[4].Var6 = 1;
                    var_83[4].Var1 = 30;
                    var_83[4].Var2 = 9;
                    var_82[31][8] = 0;
                    var_82[30][9] = 4;
                    var_83[4].Var5 = 1;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 113:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 114:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 115:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 116:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 117:
                    _a.sent();
                    var_83[4].Var1 = 29;
                    var_83[4].Var2 = 9;
                    var_82[30][9] = 0;
                    var_82[29][9] = 4;
                    var_83[4].Var5 = 4;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 118:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 119:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 120:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 121:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 122:
                    _a.sent();
                    var_83[4].Var1 = 28;
                    var_83[4].Var2 = 10;
                    var_82[29][9] = 0;
                    var_82[28][10] = 4;
                    var_83[4].Var5 = 1;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 123:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 124:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 125:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 126:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 127:
                    _a.sent();
                    var_83[4].Var1 = 27;
                    var_83[4].Var2 = 10;
                    var_82[28][10] = 0;
                    var_82[27][10] = 4;
                    var_83[4].Var5 = 4;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 128:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 129:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 130:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 131:
                    _a.sent();
                    var_83[4].Var6 = 0;
                    return [4 /*yield*/, func094()];
                case 132:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾄﾘｯｼｭ「でも…　ちょっと待って";
                    comments_row2 = "　　　　どこかに浮かんできてる！？」";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func340()];
                case 133:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 134:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾄﾘｯｼｭ「どこよッ！";
                    var_297 = "　　　　探してジョルノッ！」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 135:
                    _a.sent();
                    cnt1_22 = 0;
                    _a.label = 136;
                case 136:
                    if (!(cnt1_22 < 2)) return [3 /*break*/, 152];
                    var_83[4].Var5 = 7;
                    return [4 /*yield*/, func337()];
                case 137:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 138:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 139:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 140:
                    _a.sent();
                    var_83[4].Var5 = 4;
                    return [4 /*yield*/, func337()];
                case 141:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 142:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 143:
                    _a.sent();
                    var_83[4].Var5 = 1;
                    return [4 /*yield*/, func337()];
                case 144:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 145:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 146:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 147:
                    _a.sent();
                    var_83[4].Var5 = 4;
                    return [4 /*yield*/, func337()];
                case 148:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 149:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 150:
                    _a.sent();
                    _a.label = 151;
                case 151:
                    ++cnt1_22;
                    return [3 /*break*/, 136];
                case 152:
                    cnt1_23 = 0;
                    _a.label = 153;
                case 153:
                    if (!(cnt1_23 < 8)) return [3 /*break*/, 156];
                    return [4 /*yield*/, func337()];
                case 154:
                    _a.sent();
                    _a.label = 155;
                case 155:
                    ++cnt1_23;
                    return [3 /*break*/, 153];
                case 156:
                    var_83[2].Var6 = 1;
                    var_83[2].Var1 = 28;
                    var_83[2].Var2 = 11;
                    var_82[29][10] = 0;
                    var_82[28][11] = 2;
                    var_83[2].Var5 = 1;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 157:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 158:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 159:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 160:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 161:
                    _a.sent();
                    var_83[2].Var1 = 27;
                    var_83[2].Var2 = 11;
                    var_82[28][11] = 0;
                    var_82[27][11] = 2;
                    var_83[2].Var5 = 4;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 162:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 163:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 164:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 165:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 166:
                    _a.sent();
                    var_83[2].Var6 = 0;
                    return [4 /*yield*/, func094()];
                case 167:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ｼﾞｮﾙﾉ「いや…　探す必要はない";
                    comments_row2 = "　　　　全てはもう終わっている…」";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func340()];
                case 168:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 169:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ｼﾞｮﾙﾉ「ヤツはもう";
                    var_297 = "　　　　どこへも向かうことはない」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 170:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 171:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 172:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ｼﾞｮﾙﾉ「終わりが無いのが【終わり】」";
                    var_297 = "　　　　";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 173:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 174:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 175:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ｼﾞｮﾙﾉ「それが";
                    var_297 = "　　　【ｺﾞｰﾙﾄﾞ･ｴｸｽﾍﾟﾘｴﾝｽ･ﾚｸｲｴﾑ】」　";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 176:
                    _a.sent();
                    cnt1_24 = 0;
                    _a.label = 177;
                case 177:
                    if (!(cnt1_24 < 30)) return [3 /*break*/, 180];
                    return [4 /*yield*/, func337()];
                case 178:
                    _a.sent();
                    _a.label = 179;
                case 179:
                    ++cnt1_24;
                    return [3 /*break*/, 177];
                case 180:
                    var_198 = 0;
                    var_300 = 0;
                    gsel(19);
                    color(1, 1, 1);
                    boxf(left = 0, top1 = 0, right = 340, bottom = 340);
                    gsel(0);
                    var_311 = 0;
                    var_312 = 1;
                    cnt1_25 = 0;
                    _a.label = 181;
                case 181:
                    if (!(cnt1_25 < 51)) return [3 /*break*/, 184];
                    return [4 /*yield*/, func337()];
                case 182:
                    _a.sent();
                    var_311 = var_311 + 5;
                    _a.label = 183;
                case 183:
                    ++cnt1_25;
                    return [3 /*break*/, 181];
                case 184:
                    cnt1_26 = 0;
                    _a.label = 185;
                case 185:
                    if (!(cnt1_26 < 20)) return [3 /*break*/, 188];
                    return [4 /*yield*/, func337()];
                case 186:
                    _a.sent();
                    _a.label = 187;
                case 187:
                    ++cnt1_26;
                    return [3 /*break*/, 185];
                case 188:
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾃﾞｨｱﾎﾞﾛはＧ･Ｅ･レクイエムの能力により";
                    comments_row2 = "永遠に死に続けることとなった。";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func340()];
                case 189:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "何百回……いや何千回死んだだろうか？";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 190:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 191:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "しかしある時、転機が訪れた…";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 192:
                    _a.sent();
                    if (var_726 == 1) {
                        var_735 = "01.dat";
                    }
                    if (var_726 == 2) {
                        var_735 = "02.dat";
                    }
                    if (var_726 == 3) {
                        var_735 = "03.dat";
                    }
                    bsave(file_name = var_735, data = var_447, data_size = null, offset = null);
                    return [4 /*yield*/, func504()];
                case 193:
                    _a.sent();
                    if (var_726 == 1) {
                        var_752 = "01e.dat";
                    }
                    if (var_726 == 2) {
                        var_752 = "02e.dat";
                    }
                    if (var_726 == 3) {
                        var_752 = "03e.dat";
                    }
                    return [4 /*yield*/, func230()];
                case 194:
                    _a.sent();
                    bsave(file_name = var_752, data = var_753, data_size = null, offset = null);
                    notesel(var_754);
                    noteload(var_752);
                    cnt1_27 = 0;
                    _a.label = 195;
                case 195:
                    if (!(cnt1_27 < 50)) return [3 /*break*/, 198];
                    return [4 /*yield*/, func337()];
                case 196:
                    _a.sent();
                    _a.label = 197;
                case 197:
                    ++cnt1_27;
                    return [3 /*break*/, 195];
                case 198:
                    var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_66 = 15;
                    var_67 = 8;
                    var_65[var_66][var_67] = 1;
                    var_199 = 2;
                    var_374 = 0;
                    var_211 = 15;
                    var_595 = 0;
                    var_312 = 0;
                    var_207 = 1;
                    var_755 = 0;
                    return [4 /*yield*/, func159()];
                case 199:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 初めてヴェネチアホテルへ訪れた際のディアボロの呟き
function func151() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_28, cnt1_29, cnt1_30, cnt1_31, cnt1_32, cnt1_33, cnt1_34, cnt1_35, cnt1_36, cnt1_37, cnt1_38, cnt1_39, cnt1_40, cnt1_41, cnt1_42, cnt1_43, cnt1_44, cnt1_45, cnt1_46;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(151);
                    var_207 = 2;
                    cnt1_28 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_28 < 20)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++cnt1_28;
                    return [3 /*break*/, 1];
                case 4: return [4 /*yield*/, func335()];
                case 5:
                    _a.sent();
                    cnt1_29 = 0;
                    _a.label = 6;
                case 6:
                    if (!(cnt1_29 < 20)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func337()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    ++cnt1_29;
                    return [3 /*break*/, 6];
                case 9: return [4 /*yield*/, func094()];
                case 10:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「ハッ？！こ…今度は何だ？」";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_199 = 1;
                    cnt1_30 = 0;
                    _a.label = 11;
                case 11:
                    if (!(cnt1_30 < 2)) return [3 /*break*/, 14];
                    return [4 /*yield*/, func337()];
                case 12:
                    _a.sent();
                    _a.label = 13;
                case 13:
                    ++cnt1_30;
                    return [3 /*break*/, 11];
                case 14:
                    var_199 = 4;
                    cnt1_31 = 0;
                    _a.label = 15;
                case 15:
                    if (!(cnt1_31 < 5)) return [3 /*break*/, 18];
                    return [4 /*yield*/, func337()];
                case 16:
                    _a.sent();
                    _a.label = 17;
                case 17:
                    ++cnt1_31;
                    return [3 /*break*/, 15];
                case 18:
                    var_199 = 1;
                    cnt1_32 = 0;
                    _a.label = 19;
                case 19:
                    if (!(cnt1_32 < 2)) return [3 /*break*/, 22];
                    return [4 /*yield*/, func337()];
                case 20:
                    _a.sent();
                    _a.label = 21;
                case 21:
                    ++cnt1_32;
                    return [3 /*break*/, 19];
                case 22:
                    var_199 = 2;
                    cnt1_33 = 0;
                    _a.label = 23;
                case 23:
                    if (!(cnt1_33 < 5)) return [3 /*break*/, 26];
                    return [4 /*yield*/, func337()];
                case 24:
                    _a.sent();
                    _a.label = 25;
                case 25:
                    ++cnt1_33;
                    return [3 /*break*/, 23];
                case 26:
                    var_199 = 3;
                    cnt1_34 = 0;
                    _a.label = 27;
                case 27:
                    if (!(cnt1_34 < 2)) return [3 /*break*/, 30];
                    return [4 /*yield*/, func337()];
                case 28:
                    _a.sent();
                    _a.label = 29;
                case 29:
                    ++cnt1_34;
                    return [3 /*break*/, 27];
                case 30:
                    var_199 = 6;
                    cnt1_35 = 0;
                    _a.label = 31;
                case 31:
                    if (!(cnt1_35 < 5)) return [3 /*break*/, 34];
                    return [4 /*yield*/, func337()];
                case 32:
                    _a.sent();
                    _a.label = 33;
                case 33:
                    ++cnt1_35;
                    return [3 /*break*/, 31];
                case 34:
                    var_199 = 3;
                    cnt1_36 = 0;
                    _a.label = 35;
                case 35:
                    if (!(cnt1_36 < 2)) return [3 /*break*/, 38];
                    return [4 /*yield*/, func337()];
                case 36:
                    _a.sent();
                    _a.label = 37;
                case 37:
                    ++cnt1_36;
                    return [3 /*break*/, 35];
                case 38:
                    var_199 = 2;
                    cnt1_37 = 0;
                    _a.label = 39;
                case 39:
                    if (!(cnt1_37 < 5)) return [3 /*break*/, 42];
                    return [4 /*yield*/, func337()];
                case 40:
                    _a.sent();
                    _a.label = 41;
                case 41:
                    ++cnt1_37;
                    return [3 /*break*/, 39];
                case 42: return [4 /*yield*/, func340()];
                case 43:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 44:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「どこから襲ってくるんだ？！」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 45:
                    _a.sent();
                    var_199 = 1;
                    cnt1_38 = 0;
                    _a.label = 46;
                case 46:
                    if (!(cnt1_38 < 2)) return [3 /*break*/, 49];
                    return [4 /*yield*/, func337()];
                case 47:
                    _a.sent();
                    _a.label = 48;
                case 48:
                    ++cnt1_38;
                    return [3 /*break*/, 46];
                case 49:
                    var_199 = 4;
                    cnt1_39 = 0;
                    _a.label = 50;
                case 50:
                    if (!(cnt1_39 < 5)) return [3 /*break*/, 53];
                    return [4 /*yield*/, func337()];
                case 51:
                    _a.sent();
                    _a.label = 52;
                case 52:
                    ++cnt1_39;
                    return [3 /*break*/, 50];
                case 53:
                    var_199 = 1;
                    cnt1_40 = 0;
                    _a.label = 54;
                case 54:
                    if (!(cnt1_40 < 2)) return [3 /*break*/, 57];
                    return [4 /*yield*/, func337()];
                case 55:
                    _a.sent();
                    _a.label = 56;
                case 56:
                    ++cnt1_40;
                    return [3 /*break*/, 54];
                case 57:
                    var_199 = 2;
                    cnt1_41 = 0;
                    _a.label = 58;
                case 58:
                    if (!(cnt1_41 < 5)) return [3 /*break*/, 61];
                    return [4 /*yield*/, func337()];
                case 59:
                    _a.sent();
                    _a.label = 60;
                case 60:
                    ++cnt1_41;
                    return [3 /*break*/, 58];
                case 61:
                    var_199 = 3;
                    cnt1_42 = 0;
                    _a.label = 62;
                case 62:
                    if (!(cnt1_42 < 2)) return [3 /*break*/, 65];
                    return [4 /*yield*/, func337()];
                case 63:
                    _a.sent();
                    _a.label = 64;
                case 64:
                    ++cnt1_42;
                    return [3 /*break*/, 62];
                case 65:
                    var_199 = 6;
                    cnt1_43 = 0;
                    _a.label = 66;
                case 66:
                    if (!(cnt1_43 < 5)) return [3 /*break*/, 69];
                    return [4 /*yield*/, func337()];
                case 67:
                    _a.sent();
                    _a.label = 68;
                case 68:
                    ++cnt1_43;
                    return [3 /*break*/, 66];
                case 69:
                    var_199 = 3;
                    cnt1_44 = 0;
                    _a.label = 70;
                case 70:
                    if (!(cnt1_44 < 2)) return [3 /*break*/, 73];
                    return [4 /*yield*/, func337()];
                case 71:
                    _a.sent();
                    _a.label = 72;
                case 72:
                    ++cnt1_44;
                    return [3 /*break*/, 70];
                case 73:
                    var_199 = 2;
                    cnt1_45 = 0;
                    _a.label = 74;
                case 74:
                    if (!(cnt1_45 < 5)) return [3 /*break*/, 77];
                    return [4 /*yield*/, func337()];
                case 75:
                    _a.sent();
                    _a.label = 76;
                case 76:
                    ++cnt1_45;
                    return [3 /*break*/, 74];
                case 77: return [4 /*yield*/, func340()];
                case 78:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「………」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 79:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 80:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「………」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 81:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 82:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 83:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「おかしいな…";
                    var_297 = "何もおこらないぞ」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 84:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 85:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 86:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「何か…";
                    var_297 = "何かいつもと違うようだぞ？」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 87:
                    _a.sent();
                    cnt1_46 = 0;
                    _a.label = 88;
                case 88:
                    if (!(cnt1_46 < 20)) return [3 /*break*/, 91];
                    return [4 /*yield*/, func337()];
                case 89:
                    _a.sent();
                    _a.label = 90;
                case 90:
                    ++cnt1_46;
                    return [3 /*break*/, 88];
                case 91: return [4 /*yield*/, func336()];
                case 92:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 初めてダンジョンを訪れた際のディアボロの呟き
function func152() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_47, cnt1_48, cnt1_49, cnt1_50, cnt1_51, cnt1_52, cnt1_53, cnt1_54, cnt1_55, cnt1_56;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(152);
                    var_207 = 0;
                    cnt1_47 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_47 < 20)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++cnt1_47;
                    return [3 /*break*/, 1];
                case 4: return [4 /*yield*/, func335()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 6:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「いったいここはどこなんだ？！」";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_199 = 1;
                    cnt1_48 = 0;
                    _a.label = 7;
                case 7:
                    if (!(cnt1_48 < 2)) return [3 /*break*/, 10];
                    return [4 /*yield*/, func337()];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9:
                    ++cnt1_48;
                    return [3 /*break*/, 7];
                case 10:
                    var_199 = 4;
                    cnt1_49 = 0;
                    _a.label = 11;
                case 11:
                    if (!(cnt1_49 < 5)) return [3 /*break*/, 14];
                    return [4 /*yield*/, func337()];
                case 12:
                    _a.sent();
                    _a.label = 13;
                case 13:
                    ++cnt1_49;
                    return [3 /*break*/, 11];
                case 14:
                    var_199 = 1;
                    cnt1_50 = 0;
                    _a.label = 15;
                case 15:
                    if (!(cnt1_50 < 2)) return [3 /*break*/, 18];
                    return [4 /*yield*/, func337()];
                case 16:
                    _a.sent();
                    _a.label = 17;
                case 17:
                    ++cnt1_50;
                    return [3 /*break*/, 15];
                case 18:
                    var_199 = 2;
                    cnt1_51 = 0;
                    _a.label = 19;
                case 19:
                    if (!(cnt1_51 < 5)) return [3 /*break*/, 22];
                    return [4 /*yield*/, func337()];
                case 20:
                    _a.sent();
                    _a.label = 21;
                case 21:
                    ++cnt1_51;
                    return [3 /*break*/, 19];
                case 22:
                    var_199 = 3;
                    cnt1_52 = 0;
                    _a.label = 23;
                case 23:
                    if (!(cnt1_52 < 2)) return [3 /*break*/, 26];
                    return [4 /*yield*/, func337()];
                case 24:
                    _a.sent();
                    _a.label = 25;
                case 25:
                    ++cnt1_52;
                    return [3 /*break*/, 23];
                case 26:
                    var_199 = 6;
                    cnt1_53 = 0;
                    _a.label = 27;
                case 27:
                    if (!(cnt1_53 < 5)) return [3 /*break*/, 30];
                    return [4 /*yield*/, func337()];
                case 28:
                    _a.sent();
                    _a.label = 29;
                case 29:
                    ++cnt1_53;
                    return [3 /*break*/, 27];
                case 30:
                    var_199 = 3;
                    cnt1_54 = 0;
                    _a.label = 31;
                case 31:
                    if (!(cnt1_54 < 2)) return [3 /*break*/, 34];
                    return [4 /*yield*/, func337()];
                case 32:
                    _a.sent();
                    _a.label = 33;
                case 33:
                    ++cnt1_54;
                    return [3 /*break*/, 31];
                case 34:
                    var_199 = 2;
                    cnt1_55 = 0;
                    _a.label = 35;
                case 35:
                    if (!(cnt1_55 < 5)) return [3 /*break*/, 38];
                    return [4 /*yield*/, func337()];
                case 36:
                    _a.sent();
                    _a.label = 37;
                case 37:
                    ++cnt1_55;
                    return [3 /*break*/, 35];
                case 38: return [4 /*yield*/, func340()];
                case 39:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 40:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「もしかするとこれは…」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 41:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 42:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 43:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「聞いたことがあるぞ";
                    var_297 = "『奇妙なダンジョン』の噂」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 44:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 45:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 46:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「ある者はダンジョンの奥に";
                    var_297 = "『黄金郷』を見つけ…」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 47:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 48:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 49:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「またある者は『幸福』を";
                    var_297 = "手に入れたと聞く」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 50:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 51:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 52:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「ここならば…";
                    var_297 = "このおれにも救いがあるに違いない！」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 53:
                    _a.sent();
                    cnt1_56 = 0;
                    _a.label = 54;
                case 54:
                    if (!(cnt1_56 < 20)) return [3 /*break*/, 57];
                    return [4 /*yield*/, func337()];
                case 55:
                    _a.sent();
                    _a.label = 56;
                case 56:
                    ++cnt1_56;
                    return [3 /*break*/, 54];
                case 57: return [4 /*yield*/, func336()];
                case 58:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ホテルの外初クリア後(エンヤホテル)、ヴェネチアホテルに戻った際のイベント
function func153() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_57, cnt1_58, cnt1_59, cnt1_60, cnt1_61, cnt1_62, cnt1_63, cnt1_64, cnt1_65, cnt1_66, cnt1_67, cnt1_68, cnt1_69;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(153);
                    var_207 = 0;
                    var_374 = 1;
                    var_271 = 1;
                    var_756 = 1;
                    cnt1_57 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_57 < 20)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++cnt1_57;
                    return [3 /*break*/, 1];
                case 4: return [4 /*yield*/, func335()];
                case 5:
                    _a.sent();
                    cnt1_58 = 0;
                    _a.label = 6;
                case 6:
                    if (!(cnt1_58 < 20)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func337()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    ++cnt1_58;
                    return [3 /*break*/, 6];
                case 9:
                    var_757 = 1;
                    cnt1_59 = 0;
                    _a.label = 10;
                case 10:
                    if (!(cnt1_59 < 37)) return [3 /*break*/, 13];
                    return [4 /*yield*/, func337()];
                case 11:
                    _a.sent();
                    var_756++;
                    var_757++;
                    if (var_757 == 10) {
                        DSPLAY(audio_id = 104);
                    }
                    _a.label = 12;
                case 12:
                    ++cnt1_59;
                    return [3 /*break*/, 10];
                case 13:
                    var_271 = 0;
                    var_757 = 0;
                    var_756 = 0;
                    var_374 = 0;
                    return [4 /*yield*/, func094()];
                case 14:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「いたたた…」";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    cnt1_60 = 0;
                    _a.label = 15;
                case 15:
                    if (!(cnt1_60 < 10)) return [3 /*break*/, 21];
                    var_758 = 1;
                    return [4 /*yield*/, func337()];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 17:
                    _a.sent();
                    var_758 = 2;
                    return [4 /*yield*/, func337()];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 19:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    _a.label = 20;
                case 20:
                    ++cnt1_60;
                    return [3 /*break*/, 15];
                case 21:
                    var_758 = 0;
                    return [4 /*yield*/, func094()];
                case 22:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「ここはいつもの…」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 23:
                    _a.sent();
                    var_199 = 1;
                    cnt1_61 = 0;
                    _a.label = 24;
                case 24:
                    if (!(cnt1_61 < 2)) return [3 /*break*/, 27];
                    return [4 /*yield*/, func337()];
                case 25:
                    _a.sent();
                    _a.label = 26;
                case 26:
                    ++cnt1_61;
                    return [3 /*break*/, 24];
                case 27:
                    var_199 = 4;
                    cnt1_62 = 0;
                    _a.label = 28;
                case 28:
                    if (!(cnt1_62 < 5)) return [3 /*break*/, 31];
                    return [4 /*yield*/, func337()];
                case 29:
                    _a.sent();
                    _a.label = 30;
                case 30:
                    ++cnt1_62;
                    return [3 /*break*/, 28];
                case 31:
                    var_199 = 1;
                    cnt1_63 = 0;
                    _a.label = 32;
                case 32:
                    if (!(cnt1_63 < 2)) return [3 /*break*/, 35];
                    return [4 /*yield*/, func337()];
                case 33:
                    _a.sent();
                    _a.label = 34;
                case 34:
                    ++cnt1_63;
                    return [3 /*break*/, 32];
                case 35:
                    var_199 = 2;
                    cnt1_64 = 0;
                    _a.label = 36;
                case 36:
                    if (!(cnt1_64 < 5)) return [3 /*break*/, 39];
                    return [4 /*yield*/, func337()];
                case 37:
                    _a.sent();
                    _a.label = 38;
                case 38:
                    ++cnt1_64;
                    return [3 /*break*/, 36];
                case 39:
                    var_199 = 3;
                    cnt1_65 = 0;
                    _a.label = 40;
                case 40:
                    if (!(cnt1_65 < 2)) return [3 /*break*/, 43];
                    return [4 /*yield*/, func337()];
                case 41:
                    _a.sent();
                    _a.label = 42;
                case 42:
                    ++cnt1_65;
                    return [3 /*break*/, 40];
                case 43:
                    var_199 = 6;
                    cnt1_66 = 0;
                    _a.label = 44;
                case 44:
                    if (!(cnt1_66 < 5)) return [3 /*break*/, 47];
                    return [4 /*yield*/, func337()];
                case 45:
                    _a.sent();
                    _a.label = 46;
                case 46:
                    ++cnt1_66;
                    return [3 /*break*/, 44];
                case 47:
                    var_199 = 3;
                    cnt1_67 = 0;
                    _a.label = 48;
                case 48:
                    if (!(cnt1_67 < 2)) return [3 /*break*/, 51];
                    return [4 /*yield*/, func337()];
                case 49:
                    _a.sent();
                    _a.label = 50;
                case 50:
                    ++cnt1_67;
                    return [3 /*break*/, 48];
                case 51:
                    var_199 = 2;
                    cnt1_68 = 0;
                    _a.label = 52;
                case 52:
                    if (!(cnt1_68 < 5)) return [3 /*break*/, 55];
                    return [4 /*yield*/, func337()];
                case 53:
                    _a.sent();
                    _a.label = 54;
                case 54:
                    ++cnt1_68;
                    return [3 /*break*/, 52];
                case 55: return [4 /*yield*/, func340()];
                case 56:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 57:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「さっきのホテル、いや墓場にも";
                    var_297 = "　手がかりになるものはなかった」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 58:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 59:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 60:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「そして、結局はこの場所へ";
                    var_297 = "　戻ってきてしまう…」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 61:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 62:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 63:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「あの老婆は別の場所を探せと";
                    var_297 = "　言っていたが、他に行ける場所は…」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 64:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 65:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 66:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「ハッ？！」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 67:
                    _a.sent();
                    var_199 = 3;
                    return [4 /*yield*/, func340()];
                case 68:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 69:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「そこの階段は…";
                    var_297 = "　いつからそこにあった？？」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 70:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 71:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 72:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「怪しいのは その中か？」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 73:
                    _a.sent();
                    cnt1_69 = 0;
                    _a.label = 74;
                case 74:
                    if (!(cnt1_69 < 20)) return [3 /*break*/, 77];
                    return [4 /*yield*/, func337()];
                case 75:
                    _a.sent();
                    _a.label = 76;
                case 76:
                    ++cnt1_69;
                    return [3 /*break*/, 74];
                case 77: return [4 /*yield*/, func336()];
                case 78:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func154() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_70, cnt1_71, cnt1_72, cnt1_73, cnt1_74, cnt1_75, cnt1_76, cnt1_77, cnt1_78, cnt1_79;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(154);
                    var_207 = 0;
                    cnt1_70 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_70 < 20)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++cnt1_70;
                    return [3 /*break*/, 1];
                case 4: return [4 /*yield*/, func335()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 6:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「うう…こ、今度はどこだ…？」";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_199 = 1;
                    cnt1_71 = 0;
                    _a.label = 7;
                case 7:
                    if (!(cnt1_71 < 2)) return [3 /*break*/, 10];
                    return [4 /*yield*/, func337()];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9:
                    ++cnt1_71;
                    return [3 /*break*/, 7];
                case 10:
                    var_199 = 4;
                    cnt1_72 = 0;
                    _a.label = 11;
                case 11:
                    if (!(cnt1_72 < 5)) return [3 /*break*/, 14];
                    return [4 /*yield*/, func337()];
                case 12:
                    _a.sent();
                    _a.label = 13;
                case 13:
                    ++cnt1_72;
                    return [3 /*break*/, 11];
                case 14:
                    var_199 = 1;
                    cnt1_73 = 0;
                    _a.label = 15;
                case 15:
                    if (!(cnt1_73 < 2)) return [3 /*break*/, 18];
                    return [4 /*yield*/, func337()];
                case 16:
                    _a.sent();
                    _a.label = 17;
                case 17:
                    ++cnt1_73;
                    return [3 /*break*/, 15];
                case 18:
                    var_199 = 2;
                    cnt1_74 = 0;
                    _a.label = 19;
                case 19:
                    if (!(cnt1_74 < 5)) return [3 /*break*/, 22];
                    return [4 /*yield*/, func337()];
                case 20:
                    _a.sent();
                    _a.label = 21;
                case 21:
                    ++cnt1_74;
                    return [3 /*break*/, 19];
                case 22:
                    var_199 = 3;
                    cnt1_75 = 0;
                    _a.label = 23;
                case 23:
                    if (!(cnt1_75 < 2)) return [3 /*break*/, 26];
                    return [4 /*yield*/, func337()];
                case 24:
                    _a.sent();
                    _a.label = 25;
                case 25:
                    ++cnt1_75;
                    return [3 /*break*/, 23];
                case 26:
                    var_199 = 6;
                    cnt1_76 = 0;
                    _a.label = 27;
                case 27:
                    if (!(cnt1_76 < 5)) return [3 /*break*/, 30];
                    return [4 /*yield*/, func337()];
                case 28:
                    _a.sent();
                    _a.label = 29;
                case 29:
                    ++cnt1_76;
                    return [3 /*break*/, 27];
                case 30:
                    var_199 = 3;
                    cnt1_77 = 0;
                    _a.label = 31;
                case 31:
                    if (!(cnt1_77 < 2)) return [3 /*break*/, 34];
                    return [4 /*yield*/, func337()];
                case 32:
                    _a.sent();
                    _a.label = 33;
                case 33:
                    ++cnt1_77;
                    return [3 /*break*/, 31];
                case 34:
                    var_199 = 2;
                    cnt1_78 = 0;
                    _a.label = 35;
                case 35:
                    if (!(cnt1_78 < 5)) return [3 /*break*/, 38];
                    return [4 /*yield*/, func337()];
                case 36:
                    _a.sent();
                    _a.label = 37;
                case 37:
                    ++cnt1_78;
                    return [3 /*break*/, 35];
                case 38: return [4 /*yield*/, func340()];
                case 39:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 40:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "…またこのホテルか？";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 41:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 42:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 43:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "これもレクイエムの能力なのか、";
                    var_297 = "それとも奇妙なダンジョンの力なのか…";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 44:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 45:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 46:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "どちらなのかはわからんが、";
                    var_297 = "せいぜい足掻いてみるとしよう…";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 47:
                    _a.sent();
                    cnt1_79 = 0;
                    _a.label = 48;
                case 48:
                    if (!(cnt1_79 < 20)) return [3 /*break*/, 51];
                    return [4 /*yield*/, func337()];
                case 49:
                    _a.sent();
                    _a.label = 50;
                case 50:
                    ++cnt1_79;
                    return [3 /*break*/, 48];
                case 51: return [4 /*yield*/, func336()];
                case 52:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ディアボロの試練開放条件？
function func155() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_80, cnt1_81, cnt1_82, cnt1_83, cnt1_84, cnt1_85, cnt1_86;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(155);
                    var_207 = 0;
                    var_759 = 1;
                    var_760 = 4;
                    var_97 = var_97 + 1;
                    var_761 = var_97;
                    var_82[0][0] = var_97;
                    var_83[var_97].Var0 = 142;
                    var_83[var_97].Var1 = 0;
                    var_83[var_97].Var2 = 0;
                    var_83[var_97].Var3 = 999;
                    var_83[var_97].Var4 = 0;
                    var_83[var_97].Var5 = 2;
                    var_83[var_97].Var10 = 1;
                    var_83[var_97].Var31 = 4;
                    var_83[var_97].Var32 = rnd(6);
                    var_97 = var_97 + 1;
                    var_762 = var_97;
                    var_82[0][1] = var_97;
                    var_83[var_97].Var0 = 166;
                    var_83[var_97].Var1 = 0;
                    var_83[var_97].Var2 = 1;
                    var_83[var_97].Var3 = 999;
                    var_83[var_97].Var4 = 0;
                    var_83[var_97].Var5 = 2;
                    var_83[var_97].Var10 = 1;
                    var_83[var_97].Var31 = 4;
                    var_83[var_97].Var32 = rnd(6);
                    cnt1_80 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_80 < 20)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++cnt1_80;
                    return [3 /*break*/, 1];
                case 4: return [4 /*yield*/, func335()];
                case 5:
                    _a.sent();
                    cnt1_81 = 0;
                    _a.label = 6;
                case 6:
                    if (!(cnt1_81 < 20)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func337()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    ++cnt1_81;
                    return [3 /*break*/, 6];
                case 9:
                    var_217 = 1;
                    DSPLAY(audio_id = 228);
                    cnt1_82 = 0;
                    _a.label = 10;
                case 10:
                    if (!(cnt1_82 < 5)) return [3 /*break*/, 13];
                    return [4 /*yield*/, func337()];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    ++cnt1_82;
                    return [3 /*break*/, 10];
                case 13:
                    var_83[var_762].Var6 = 1;
                    var_83[var_762].Var1 = 10;
                    var_83[var_762].Var2 = 8;
                    var_82[0][0] = 0;
                    var_82[10][8] = var_762;
                    var_83[var_762].Var5 = 6;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 14:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 15:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 16:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 17:
                    _a.sent();
                    var_199 = 4;
                    var_83[var_762].Var1 = 11;
                    var_83[var_762].Var2 = 8;
                    var_82[10][8] = 0;
                    var_82[11][8] = var_762;
                    var_83[var_762].Var5 = 6;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 18:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 19:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 20:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 21:
                    _a.sent();
                    var_199 = 4;
                    var_83[var_762].Var1 = 12;
                    var_83[var_762].Var2 = 8;
                    var_82[11][8] = 0;
                    var_82[12][8] = var_762;
                    var_83[var_762].Var5 = 6;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 22:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 23:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 24:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 25:
                    _a.sent();
                    var_199 = 4;
                    var_83[var_762].Var1 = 13;
                    var_83[var_762].Var2 = 8;
                    var_82[12][8] = 0;
                    var_82[13][8] = var_762;
                    var_83[var_762].Var5 = 6;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 26:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 27:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 28:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 29:
                    _a.sent();
                    var_199 = 4;
                    var_83[var_762].Var1 = 14;
                    var_83[var_762].Var2 = 8;
                    var_82[13][8] = 0;
                    var_82[14][8] = var_762;
                    var_83[var_762].Var5 = 6;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 30:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 31:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 32:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 33:
                    _a.sent();
                    var_199 = 4;
                    var_83[var_762].Var1 = 14;
                    var_83[var_762].Var2 = 9;
                    var_82[14][8] = 0;
                    var_82[14][9] = var_762;
                    var_83[var_762].Var5 = 2;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 34:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 35:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 36:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 37:
                    _a.sent();
                    var_199 = 1;
                    var_83[var_762].Var1 = 15;
                    var_83[var_762].Var2 = 9;
                    var_82[14][9] = 0;
                    var_82[15][9] = var_762;
                    var_83[var_762].Var5 = 6;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 38:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 39:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 40:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 41:
                    _a.sent();
                    var_199 = 2;
                    var_83[var_762].Var1 = 16;
                    var_83[var_762].Var2 = 9;
                    var_82[15][9] = 0;
                    var_82[16][9] = var_762;
                    var_83[var_762].Var5 = 6;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 42:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 43:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 44:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 45:
                    _a.sent();
                    var_199 = 3;
                    var_83[var_762].Var1 = 16;
                    var_83[var_762].Var2 = 8;
                    var_82[16][9] = 0;
                    var_82[16][8] = var_762;
                    var_83[var_762].Var5 = 8;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 46:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 47:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 48:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 49:
                    _a.sent();
                    var_199 = 6;
                    var_83[var_762].Var1 = 16;
                    var_83[var_762].Var2 = 7;
                    var_82[16][8] = 0;
                    var_82[16][7] = var_762;
                    var_83[var_762].Var5 = 8;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 50:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 51:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 52:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 53:
                    _a.sent();
                    var_199 = 9;
                    var_83[var_762].Var1 = 15;
                    var_83[var_762].Var2 = 7;
                    var_82[16][7] = 0;
                    var_82[15][7] = var_762;
                    var_83[var_762].Var5 = 4;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 54:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 55:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 56:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 57:
                    _a.sent();
                    var_199 = 8;
                    var_83[var_762].Var1 = 15;
                    var_83[var_762].Var2 = 6;
                    var_82[15][7] = 0;
                    var_82[15][6] = var_762;
                    var_83[var_762].Var5 = 8;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 58:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 59:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 60:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 61:
                    _a.sent();
                    var_199 = 8;
                    cnt1_83 = 0;
                    _a.label = 62;
                case 62:
                    if (!(cnt1_83 < 20)) return [3 /*break*/, 65];
                    return [4 /*yield*/, func337()];
                case 63:
                    _a.sent();
                    _a.label = 64;
                case 64:
                    ++cnt1_83;
                    return [3 /*break*/, 62];
                case 65:
                    var_83[var_762].Var1 = 15;
                    var_83[var_762].Var2 = 5;
                    var_82[15][6] = 0;
                    var_82[15][5] = var_762;
                    var_83[var_762].Var5 = 8;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 66:
                    _a.sent();
                    var_760 = 3;
                    DSPLAY(audio_id = 103);
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 67:
                    _a.sent();
                    var_760 = 2;
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 68:
                    _a.sent();
                    var_760 = 1;
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 69:
                    _a.sent();
                    var_760 = 0;
                    var_83[var_762].Var1 = 0;
                    var_83[var_762].Var2 = 0;
                    var_82[15][5] = 0;
                    var_82[0][0] = var_762;
                    var_83[var_762].Var5 = 8;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 70:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 71:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 72:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 73:
                    _a.sent();
                    var_83[var_762].Var6 = 0;
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「？」";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func340()];
                case 74:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func094()];
                case 75:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "露伴「まて――ッ！」";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_83[var_761].Var6 = 1;
                    var_83[var_761].Var1 = 10;
                    var_83[var_761].Var2 = 8;
                    var_82[0][0] = 0;
                    var_82[10][8] = var_761;
                    var_83[var_761].Var5 = 6;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 76:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 77:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 78:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 79:
                    _a.sent();
                    var_199 = 4;
                    var_83[var_761].Var1 = 11;
                    var_83[var_761].Var2 = 8;
                    var_82[10][8] = 0;
                    var_82[11][8] = var_761;
                    var_83[var_761].Var5 = 6;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 80:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 81:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 82:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 83:
                    _a.sent();
                    var_199 = 4;
                    var_83[var_761].Var1 = 12;
                    var_83[var_761].Var2 = 8;
                    var_82[11][8] = 0;
                    var_82[12][8] = var_761;
                    var_83[var_761].Var5 = 6;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 84:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 85:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 86:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 87:
                    _a.sent();
                    var_199 = 4;
                    var_83[var_761].Var1 = 13;
                    var_83[var_761].Var2 = 8;
                    var_82[12][8] = 0;
                    var_82[13][8] = var_761;
                    var_83[var_761].Var5 = 6;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 88:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 89:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 90:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 91:
                    _a.sent();
                    var_199 = 4;
                    var_83[var_761].Var1 = 14;
                    var_83[var_761].Var2 = 8;
                    var_82[13][8] = 0;
                    var_82[14][8] = var_761;
                    var_83[var_761].Var5 = 6;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 92:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 93:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 94:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 95:
                    _a.sent();
                    var_199 = 4;
                    var_83[var_761].Var1 = 14;
                    var_83[var_761].Var2 = 9;
                    var_82[14][8] = 0;
                    var_82[14][9] = var_761;
                    var_83[var_761].Var5 = 2;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 96:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 97:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 98:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 99:
                    _a.sent();
                    var_199 = 1;
                    var_83[var_761].Var1 = 15;
                    var_83[var_761].Var2 = 9;
                    var_82[14][9] = 0;
                    var_82[15][9] = var_761;
                    var_83[var_761].Var5 = 6;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 100:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 101:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 102:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 103:
                    _a.sent();
                    var_199 = 2;
                    var_83[var_761].Var1 = 16;
                    var_83[var_761].Var2 = 9;
                    var_82[15][9] = 0;
                    var_82[16][9] = var_761;
                    var_83[var_761].Var5 = 6;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 104:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 105:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 106:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 107:
                    _a.sent();
                    var_199 = 3;
                    var_83[var_761].Var1 = 16;
                    var_83[var_761].Var2 = 8;
                    var_82[16][9] = 0;
                    var_82[16][8] = var_761;
                    var_83[var_761].Var5 = 8;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 108:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 109:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 110:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 111:
                    _a.sent();
                    var_199 = 6;
                    var_83[var_761].Var1 = 16;
                    var_83[var_761].Var2 = 7;
                    var_82[16][8] = 0;
                    var_82[16][7] = var_761;
                    var_83[var_761].Var5 = 8;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 112:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 113:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 114:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 115:
                    _a.sent();
                    var_199 = 9;
                    var_83[var_761].Var1 = 15;
                    var_83[var_761].Var2 = 7;
                    var_82[16][7] = 0;
                    var_82[15][7] = var_761;
                    var_83[var_761].Var5 = 4;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 116:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 117:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 118:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 119:
                    _a.sent();
                    var_199 = 8;
                    var_83[var_761].Var1 = 15;
                    var_83[var_761].Var2 = 6;
                    var_82[15][7] = 0;
                    var_82[15][6] = var_761;
                    var_83[var_761].Var5 = 8;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 120:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 121:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 122:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 123:
                    _a.sent();
                    var_199 = 8;
                    return [4 /*yield*/, func094()];
                case 124:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "露伴「くそッ！あと一歩のところで…」";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    cnt1_84 = 0;
                    _a.label = 125;
                case 125:
                    if (!(cnt1_84 < 20)) return [3 /*break*/, 128];
                    return [4 /*yield*/, func337()];
                case 126:
                    _a.sent();
                    _a.label = 127;
                case 127:
                    ++cnt1_84;
                    return [3 /*break*/, 125];
                case 128: return [4 /*yield*/, func340()];
                case 129:
                    _a.sent();
                    var_83[var_761].Var5 = 2;
                    return [4 /*yield*/, func337()];
                case 130:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 131:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 132:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 133:
                    _a.sent();
                    var_83[var_761].Var1 = 15;
                    var_83[var_761].Var2 = 7;
                    var_82[15][6] = 0;
                    var_82[15][7] = var_761;
                    var_83[var_761].Var5 = 2;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 134:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 135:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 136:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 137:
                    _a.sent();
                    var_199 = 8;
                    var_83[var_761].Var1 = 16;
                    var_83[var_761].Var2 = 7;
                    var_82[15][7] = 0;
                    var_82[16][7] = var_761;
                    var_83[var_761].Var5 = 6;
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 138:
                    _a.sent();
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 139:
                    _a.sent();
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 140:
                    _a.sent();
                    var_409 = 0;
                    return [4 /*yield*/, func337()];
                case 141:
                    _a.sent();
                    var_199 = 9;
                    var_83[var_761].Var5 = 2;
                    cnt1_85 = 0;
                    _a.label = 142;
                case 142:
                    if (!(cnt1_85 < 20)) return [3 /*break*/, 145];
                    return [4 /*yield*/, func337()];
                case 143:
                    _a.sent();
                    _a.label = 144;
                case 144:
                    ++cnt1_85;
                    return [3 /*break*/, 142];
                case 145:
                    var_83[var_761].Var6 = 0;
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「？？？」";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    cnt1_86 = 0;
                    _a.label = 146;
                case 146:
                    if (!(cnt1_86 < 20)) return [3 /*break*/, 149];
                    return [4 /*yield*/, func337()];
                case 147:
                    _a.sent();
                    _a.label = 148;
                case 148:
                    ++cnt1_86;
                    return [3 /*break*/, 146];
                case 149: return [4 /*yield*/, func336()];
                case 150:
                    _a.sent();
                    var_217 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
function func156() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_87, cnt1_88, cnt1_89, cnt1_90, cnt1_91, cnt1_92, cnt1_93, cnt1_94, cnt1_95, cnt1_96, cnt1_97, cnt1_98;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(156);
                    if (var_759 == 0) {
                        var_760 = 4;
                    }
                    var_374 = 1;
                    var_271 = 1;
                    cnt1_87 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_87 < 20)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++cnt1_87;
                    return [3 /*break*/, 1];
                case 4: return [4 /*yield*/, func335()];
                case 5:
                    _a.sent();
                    var_757 = 1;
                    cnt1_88 = 0;
                    _a.label = 6;
                case 6:
                    if (!(cnt1_88 < 37)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func337()];
                case 7:
                    _a.sent();
                    var_757++;
                    if (var_757 == 10) {
                        DSPLAY(audio_id = 104);
                    }
                    _a.label = 8;
                case 8:
                    ++cnt1_88;
                    return [3 /*break*/, 6];
                case 9:
                    var_271 = 0;
                    var_757 = 0;
                    var_374 = 0;
                    return [4 /*yield*/, func094()];
                case 10:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「いたたた…」";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    cnt1_89 = 0;
                    _a.label = 11;
                case 11:
                    if (!(cnt1_89 < 10)) return [3 /*break*/, 17];
                    var_758 = 1;
                    return [4 /*yield*/, func337()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 13:
                    _a.sent();
                    var_758 = 2;
                    return [4 /*yield*/, func337()];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 15:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    _a.label = 16;
                case 16:
                    ++cnt1_89;
                    return [3 /*break*/, 11];
                case 17:
                    var_758 = 0;
                    return [4 /*yield*/, func094()];
                case 18:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「ここはいつもの…」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 19:
                    _a.sent();
                    var_199 = 1;
                    cnt1_90 = 0;
                    _a.label = 20;
                case 20:
                    if (!(cnt1_90 < 2)) return [3 /*break*/, 23];
                    return [4 /*yield*/, func337()];
                case 21:
                    _a.sent();
                    _a.label = 22;
                case 22:
                    ++cnt1_90;
                    return [3 /*break*/, 20];
                case 23:
                    var_199 = 4;
                    cnt1_91 = 0;
                    _a.label = 24;
                case 24:
                    if (!(cnt1_91 < 5)) return [3 /*break*/, 27];
                    return [4 /*yield*/, func337()];
                case 25:
                    _a.sent();
                    _a.label = 26;
                case 26:
                    ++cnt1_91;
                    return [3 /*break*/, 24];
                case 27:
                    var_199 = 1;
                    cnt1_92 = 0;
                    _a.label = 28;
                case 28:
                    if (!(cnt1_92 < 2)) return [3 /*break*/, 31];
                    return [4 /*yield*/, func337()];
                case 29:
                    _a.sent();
                    _a.label = 30;
                case 30:
                    ++cnt1_92;
                    return [3 /*break*/, 28];
                case 31:
                    var_199 = 2;
                    cnt1_93 = 0;
                    _a.label = 32;
                case 32:
                    if (!(cnt1_93 < 5)) return [3 /*break*/, 35];
                    return [4 /*yield*/, func337()];
                case 33:
                    _a.sent();
                    _a.label = 34;
                case 34:
                    ++cnt1_93;
                    return [3 /*break*/, 32];
                case 35:
                    var_199 = 3;
                    cnt1_94 = 0;
                    _a.label = 36;
                case 36:
                    if (!(cnt1_94 < 2)) return [3 /*break*/, 39];
                    return [4 /*yield*/, func337()];
                case 37:
                    _a.sent();
                    _a.label = 38;
                case 38:
                    ++cnt1_94;
                    return [3 /*break*/, 36];
                case 39:
                    var_199 = 6;
                    cnt1_95 = 0;
                    _a.label = 40;
                case 40:
                    if (!(cnt1_95 < 5)) return [3 /*break*/, 43];
                    return [4 /*yield*/, func337()];
                case 41:
                    _a.sent();
                    _a.label = 42;
                case 42:
                    ++cnt1_95;
                    return [3 /*break*/, 40];
                case 43:
                    var_199 = 3;
                    cnt1_96 = 0;
                    _a.label = 44;
                case 44:
                    if (!(cnt1_96 < 2)) return [3 /*break*/, 47];
                    return [4 /*yield*/, func337()];
                case 45:
                    _a.sent();
                    _a.label = 46;
                case 46:
                    ++cnt1_96;
                    return [3 /*break*/, 44];
                case 47:
                    var_199 = 2;
                    cnt1_97 = 0;
                    _a.label = 48;
                case 48:
                    if (!(cnt1_97 < 5)) return [3 /*break*/, 51];
                    return [4 /*yield*/, func337()];
                case 49:
                    _a.sent();
                    _a.label = 50;
                case 50:
                    ++cnt1_97;
                    return [3 /*break*/, 48];
                case 51: return [4 /*yield*/, func340()];
                case 52:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 53:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾃﾞｨｱﾎﾞﾛ「何でまたここに";
                    var_297 = "　落ちてくるんだ？？」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 54:
                    _a.sent();
                    cnt1_98 = 0;
                    _a.label = 55;
                case 55:
                    if (!(cnt1_98 < 20)) return [3 /*break*/, 58];
                    return [4 /*yield*/, func337()];
                case 56:
                    _a.sent();
                    _a.label = 57;
                case 57:
                    ++cnt1_98;
                    return [3 /*break*/, 55];
                case 58: return [4 /*yield*/, func336()];
                case 59:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func157() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_99, cnt2_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(157);
                    redraw(0);
                    gmode(2);
                    pos(0, 0);
                    gcopy(17, 0, 0, 340, 340);
                    color(0, 0, 0);
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
                    var_763 = 0;
                    for (cnt1_99 = 0; cnt1_99 < 9; ++cnt1_99) {
                        var_764 = 0;
                        for (cnt2_13 = 0; cnt2_13 < 9; ++cnt2_13) {
                            pos(var_764 * var_35, var_763 * var_36);
                            gcopy(8, 400, 0, 40, 40);
                            var_764 = var_764 + 1;
                        }
                        var_763 = var_763 + 1;
                    }
                    return [4 /*yield*/, func048()];
                case 1:
                    _a.sent();
                    if (!(var_765 == 1)) return [3 /*break*/, 3];
                    if (!(var_766 == 0 || var_766 == 1 || var_766 == 2)) return [3 /*break*/, 3];
                    return [4 /*yield*/, func341()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if (!(var_10 >= 1)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func338()];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    redraw(1);
                    return [4 /*yield*/, wait(2)];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func158() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(158);
                    var_767 = 0;
                    var_262 = 1;
                    current_floor = 0;
                    var_199 = 8;
                    var_92 = 18;
                    return [4 /*yield*/, func293()];
                case 1:
                    _a.sent();
                    var_560 = 1;
                    var_561 = 5;
                    var_562 = 5;
                    return [4 /*yield*/, func288()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func248()];
                case 3:
                    _a.sent();
                    var_62 = 0;
                    var_532 = 0;
                    var_77 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_78 = ItemInfo.dim(300);
                    var_82 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_83 = CharactorInfo.dim(300);
                    var_73 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_66 = 29;
                    var_67 = 10;
                    var_65[var_66][var_67] = 1;
                    var_374 = 1;
                    var_97 = 0;
                    var_97 = var_97 + 1;
                    var_82[28][10] = var_97;
                    var_83[var_97].Var0 = 49;
                    var_83[var_97].Var1 = 28;
                    var_83[var_97].Var2 = 10;
                    var_83[var_97].Var5 = 6;
                    var_83[var_97].Var32 = rnd(6);
                    var_97 = var_97 + 1;
                    var_82[32][10] = var_97;
                    var_83[var_97].Var0 = 132;
                    var_83[var_97].Var1 = 32;
                    var_83[var_97].Var2 = 10;
                    var_83[var_97].Var5 = 4;
                    var_83[var_97].Var32 = rnd(6);
                    var_97 = var_97 + 1;
                    var_82[30][7] = var_97;
                    var_83[var_97].Var0 = 124;
                    var_83[var_97].Var1 = 30;
                    var_83[var_97].Var2 = 7;
                    var_83[var_97].Var5 = 2;
                    var_83[var_97].Var32 = rnd(6);
                    var_97 = var_97 + 1;
                    var_82[31][8] = var_97;
                    var_83[var_97].Var0 = 152;
                    var_83[var_97].Var1 = 31;
                    var_83[var_97].Var2 = 8;
                    var_83[var_97].Var5 = 1;
                    var_83[var_97].Var32 = rnd(6);
                    return [2 /*return*/];
            }
        });
    });
}
function func159() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_100;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(159);
                    var_767 = 0;
                    var_262 = 1;
                    current_floor = 0;
                    var_199 = 2;
                    var_68 = 1;
                    var_92 = 1;
                    return [4 /*yield*/, func293()];
                case 1:
                    _a.sent();
                    var_560 = 1;
                    var_561 = 5;
                    var_562 = 5;
                    if (!(var_559 == 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, func288()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if (!(var_559 == 1)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func289()];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    if (!(var_559 == 2)) return [3 /*break*/, 7];
                    return [4 /*yield*/, func290()];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    if (!(var_559 == 3)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func291()];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9:
                    if (!(var_559 == 4)) return [3 /*break*/, 11];
                    return [4 /*yield*/, func292()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11: return [4 /*yield*/, func248()];
                case 12:
                    _a.sent();
                    var_62 = 0;
                    var_532 = 0;
                    var_77 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_78 = ItemInfo.dim(300);
                    var_82 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_83 = CharactorInfo.dim(300);
                    var_73 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    return [4 /*yield*/, func160()];
                case 13:
                    _a.sent();
                    if (var_66 == 13 && var_67 == 9) {
                        var_65[var_66][var_67] = 0;
                        var_66 = 13;
                        var_67 = 8;
                        var_65[13][8] = 1;
                    }
                    var_337 = 0;
                    var_768 = 1;
                    var_769 = 1;
                    return [4 /*yield*/, func536()];
                case 14:
                    _a.sent();
                    var_769 = 4;
                    return [4 /*yield*/, func536()];
                case 15:
                    _a.sent();
                    if (!(var_404 >= 1)) return [3 /*break*/, 17];
                    var_769 = 2;
                    return [4 /*yield*/, func536()];
                case 16:
                    _a.sent();
                    _a.label = 17;
                case 17:
                    if (!(var_526 >= 1)) return [3 /*break*/, 19];
                    var_769 = 3;
                    return [4 /*yield*/, func536()];
                case 18:
                    _a.sent();
                    _a.label = 19;
                case 19:
                    if (!(var_537 >= 1 || var_19 == 1)) return [3 /*break*/, 21];
                    var_769 = 5;
                    return [4 /*yield*/, func536()];
                case 20:
                    _a.sent();
                    _a.label = 21;
                case 21:
                    var_768 = 0;
                    var_769 = 0;
                    return [4 /*yield*/, func181()];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, func331()];
                case 23:
                    _a.sent();
                    var_217 = 0;
                    var_205 = 1;
                    return [4 /*yield*/, func231()];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, func076()];
                case 25:
                    _a.sent();
                    cnt1_100 = 0;
                    _a.label = 26;
                case 26:
                    if (!(cnt1_100 < 80)) return [3 /*break*/, 29];
                    return [4 /*yield*/, func339()];
                case 27:
                    _a.sent();
                    _a.label = 28;
                case 28:
                    ++cnt1_100;
                    return [3 /*break*/, 26];
                case 29:
                    var_68 = 1;
                    onexit(1);
                    if (!(var_595 == 0)) return [3 /*break*/, 31];
                    return [4 /*yield*/, func113()];
                case 30:
                    _a.sent();
                    _a.label = 31;
                case 31:
                    if (!(var_595 == 1)) return [3 /*break*/, 33];
                    return [4 /*yield*/, func114()];
                case 32:
                    _a.sent();
                    _a.label = 33;
                case 33:
                    if (!(var_207 == 1)) return [3 /*break*/, 35];
                    return [4 /*yield*/, func151()];
                case 34:
                    _a.sent();
                    _a.label = 35;
                case 35:
                    if (!(var_207 == 3)) return [3 /*break*/, 37];
                    var_207 = 0;
                    return [4 /*yield*/, func153()];
                case 36:
                    _a.sent();
                    _a.label = 37;
                case 37:
                    if (!(var_207 == 5)) return [3 /*break*/, 39];
                    var_207 = 0;
                    return [4 /*yield*/, func154()];
                case 38:
                    _a.sent();
                    _a.label = 39;
                case 39:
                    if (!(var_770 == 1)) return [3 /*break*/, 41];
                    var_770 = 0;
                    return [4 /*yield*/, func156()];
                case 40:
                    _a.sent();
                    _a.label = 41;
                case 41:
                    if (!(var_207 == 6)) return [3 /*break*/, 43];
                    var_207 = 0;
                    return [4 /*yield*/, func155()];
                case 42:
                    _a.sent();
                    _a.label = 43;
                case 43: return [4 /*yield*/, func837()];
                case 44:
                    _a.sent();
                    var_205 = 1;
                    return [4 /*yield*/, func231()];
                case 45:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 46:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func160() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(160);
            var_97 = 0;
            if (var_404 >= 1) {
                var_97 = var_97 + 1;
                var_771 = var_97;
                var_82[13][9] = var_97;
                var_83[var_97].Var0 = 55;
                var_83[var_97].Var1 = 13;
                var_83[var_97].Var2 = 9;
                var_83[var_97].Var3 = 20;
                var_83[var_97].Var4 = 1;
                var_83[var_97].Var5 = 3;
                var_83[var_97].Var10 = 1;
                var_83[var_97].Var14 = 1;
                var_83[var_97].Var31 = 4;
                var_83[var_97].Var32 = rnd(6);
            }
            if (var_759 >= 1) {
                var_97 = var_97 + 1;
                var_761 = var_97;
                var_82[16][7] = var_97;
                var_83[var_97].Var0 = 142;
                var_83[var_97].Var1 = 16;
                var_83[var_97].Var2 = 7;
                var_83[var_97].Var3 = 20;
                var_83[var_97].Var4 = 0;
                var_83[var_97].Var5 = 2;
                var_83[var_97].Var10 = 1;
                var_83[var_97].Var31 = 4;
                var_83[var_97].Var32 = rnd(6);
                var_97 = var_97 + 1;
                var_761 = var_97;
                var_82[18][10] = var_97;
                var_83[var_97].Var0 = 173;
                var_83[var_97].Var1 = 18;
                var_83[var_97].Var2 = 10;
                var_83[var_97].Var3 = 20;
                var_83[var_97].Var4 = 0;
                var_83[var_97].Var5 = 2;
                var_83[var_97].Var10 = 1;
                var_83[var_97].Var31 = 4;
                var_83[var_97].Var32 = rnd(6);
            }
            return [2 /*return*/];
        });
    });
}
//亀の中に入ったとき
function func161() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_101, cnt1_102, cnt1_103, cnt1_104;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(161);
                    var_243 = 0;
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "亀の中に入った";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    cnt1_101 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_101 < 5)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    ++cnt1_101;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, func114()];
                case 6:
                    _a.sent();
                    var_65[var_66][var_67] = 0;
                    var_66 = 14;
                    var_67 = 23;
                    return [4 /*yield*/, func016()];
                case 7:
                    _a.sent();
                    var_595 = 1;
                    var_374 = 1;
                    var_772 = 1;
                    var_773 = 1;
                    var_774 = 0;
                    cnt1_102 = 0;
                    _a.label = 8;
                case 8:
                    if (!(cnt1_102 < 6)) return [3 /*break*/, 11];
                    return [4 /*yield*/, func337()];
                case 9:
                    _a.sent();
                    var_773++;
                    var_774 = var_774 + 20;
                    _a.label = 10;
                case 10:
                    ++cnt1_102;
                    return [3 /*break*/, 8];
                case 11:
                    cnt1_103 = 0;
                    _a.label = 12;
                case 12:
                    if (!(cnt1_103 < 9)) return [3 /*break*/, 15];
                    return [4 /*yield*/, func337()];
                case 13:
                    _a.sent();
                    var_773++;
                    _a.label = 14;
                case 14:
                    ++cnt1_103;
                    return [3 /*break*/, 12];
                case 15:
                    var_773 = 0;
                    var_772 = 0;
                    var_374 = 0;
                    var_199 = 2;
                    cnt1_104 = 0;
                    _a.label = 16;
                case 16:
                    if (!(cnt1_104 < 10)) return [3 /*break*/, 19];
                    return [4 /*yield*/, func337()];
                case 17:
                    _a.sent();
                    _a.label = 18;
                case 18:
                    ++cnt1_104;
                    return [3 /*break*/, 16];
                case 19: return [4 /*yield*/, func009()];
                case 20:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func162() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_105, cnt1_106, cnt1_107, cnt1_108;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(162);
                    var_775 = var_83[var_771].Var1;
                    var_776 = var_83[var_771].Var2;
                    var_82[var_775][var_776] = 0;
                    var_82[13][9] = var_771;
                    var_83[var_771].Var1 = 13;
                    var_83[var_771].Var2 = 9;
                    var_374 = 1;
                    var_772 = 1;
                    var_777 = 1;
                    cnt1_105 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_105 < 6)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent();
                    var_777++;
                    _a.label = 3;
                case 3:
                    ++cnt1_105;
                    return [3 /*break*/, 1];
                case 4:
                    var_774 = 60;
                    cnt1_106 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt1_106 < 6)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent();
                    var_777++;
                    var_774 = var_774 - 20;
                    _a.label = 7;
                case 7:
                    ++cnt1_106;
                    return [3 /*break*/, 5];
                case 8:
                    var_777 = 0;
                    cnt1_107 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt1_107 < 10)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    ++cnt1_107;
                    return [3 /*break*/, 9];
                case 12:
                    var_65[var_66][var_67] = 0;
                    var_66 = 13;
                    var_67 = 10;
                    return [4 /*yield*/, func016()];
                case 13:
                    _a.sent();
                    var_595 = 0;
                    var_773 = 7;
                    cnt1_108 = 0;
                    _a.label = 14;
                case 14:
                    if (!(cnt1_108 < 9)) return [3 /*break*/, 17];
                    return [4 /*yield*/, func337()];
                case 15:
                    _a.sent();
                    var_773++;
                    _a.label = 16;
                case 16:
                    ++cnt1_108;
                    return [3 /*break*/, 14];
                case 17:
                    var_773 = 0;
                    var_772 = 0;
                    var_374 = 0;
                    var_199 = 2;
                    return [4 /*yield*/, func113()];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 19:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func163() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(163);
            if (var_409 == 0) {
                var_778 = 0;
            }
            if (var_409 == 1) {
                var_778 = 10;
            }
            if (var_409 == 2) {
                var_778 = 20;
            }
            if (var_409 == 3) {
                var_778 = 30;
            }
            var_779 = (var_66 - 5) * var_35 + var_778;
            var_780 = (var_67 - 5) * var_36 + var_778;
            if (var_217 == 0) {
                if (var_199 == 6) {
                    var_779 = (var_66 - 5) * var_35 - var_778;
                    var_780 = (var_67 - 5) * var_36;
                }
                if (var_199 == 4) {
                    var_779 = (var_66 - 5) * var_35 + var_778;
                    var_780 = (var_67 - 5) * var_36;
                }
                if (var_199 == 2) {
                    var_779 = (var_66 - 5) * var_35;
                    var_780 = (var_67 - 5) * var_36 - var_778;
                }
                if (var_199 == 8) {
                    var_779 = (var_66 - 5) * var_35;
                    var_780 = (var_67 - 5) * var_36 + var_778;
                }
                if (var_199 == 9) {
                    var_779 = (var_66 - 5) * var_35 - var_778;
                    var_780 = (var_67 - 5) * var_36 + var_778;
                }
                if (var_199 == 7) {
                    var_779 = (var_66 - 5) * var_35 + var_778;
                    var_780 = (var_67 - 5) * var_36 + var_778;
                }
                if (var_199 == 3) {
                    var_779 = (var_66 - 5) * var_35 - var_778;
                    var_780 = (var_67 - 5) * var_36 - var_778;
                }
                if (var_199 == 1) {
                    var_779 = (var_66 - 5) * var_35 + var_778;
                    var_780 = (var_67 - 5) * var_36 - var_778;
                }
            }
            if (var_217 == 1) {
                var_779 = (var_66 - 5) * var_35;
                var_780 = (var_67 - 5) * var_36;
            }
            pos(0, 0);
            gmode(2);
            gcopy(18, var_779, var_780, 340, 340);
            var_781 = 17;
            var_782 = 5;
            if (var_199 == 4) {
                pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36);
            }
            if (var_199 == 6) {
                pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36);
            }
            if (var_199 == 8) {
                pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 - var_778);
            }
            if (var_199 == 2) {
                pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 + var_778);
            }
            if (var_199 == 1) {
                pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 + var_778);
            }
            if (var_199 == 3) {
                pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 + var_778);
            }
            if (var_199 == 7) {
                pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 - var_778);
            }
            if (var_199 == 9) {
                pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 - var_778);
            }
            if (var_217 == 1) {
                pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36);
            }
            gmode(2);
            if (var_404 == 0) {
                gcopy(18, 1400, 680, 40, 40);
            }
            if (var_783 == 1) {
                gcopy(18, 1440, 680, 40, 40);
            }
            if (var_783 == 2) {
                gcopy(18, 1440, 720, 40, 40);
            }
            if (var_783 == 3) {
                gcopy(18, 1440, 760, 40, 40);
            }
            if (var_783 == 4) {
                gcopy(18, 1440, 800, 40, 40);
            }
            if (var_783 == 5) {
                gcopy(18, 1440, 840, 40, 40);
            }
            if (var_783 == 6) {
                gcopy(18, 1440, 880, 40, 40);
            }
            if (var_783 == 7) {
                gcopy(18, 1440, 920, 40, 40);
            }
            if (var_783 == 8) {
                gcopy(18, 1440, 960, 40, 40);
            }
            if (var_783 == 9) {
                gcopy(18, 1440, 1000, 40, 40);
            }
            if (var_783 == 10) {
                gcopy(18, 1440, 1040, 40, 40);
            }
            if (var_783 == 11) {
                gcopy(18, 1440, 1080, 40, 40);
            }
            if (var_783 == 12) {
                gcopy(18, 1400, 720, 40, 40);
            }
            if (var_783 == 13) {
                gcopy(18, 1400, 760, 40, 40);
            }
            if (var_783 == 14) {
                gcopy(18, 1400, 800, 40, 40);
            }
            if (var_783 == 15) {
                gcopy(18, 1400, 840, 40, 40);
            }
            if (var_404 >= 1) {
                var_781 = 17;
                var_782 = 9;
                if (var_199 == 4) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36);
                }
                if (var_199 == 6) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36);
                }
                if (var_199 == 8) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_199 == 2) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 1) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 3) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 7) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_199 == 9) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_217 == 1) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36);
                }
                gmode(2);
                gcopy(18, 1440, 1120, 40, 40);
            }
            if (var_526 >= 1) {
                var_781 = 15;
                var_782 = 5;
                if (var_199 == 4) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36);
                }
                if (var_199 == 6) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36);
                }
                if (var_199 == 8) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_199 == 2) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 1) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 3) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 7) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_199 == 9) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_217 == 1) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36);
                }
                gmode(2);
                gcopy(18, 1400, 1000, 40, 80);
                if (var_760 >= 1) {
                    if (var_199 == 4) {
                        pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36);
                    }
                    if (var_199 == 6) {
                        pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36);
                    }
                    if (var_199 == 8) {
                        pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 - var_778);
                    }
                    if (var_199 == 2) {
                        pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 + var_778);
                    }
                    if (var_199 == 1) {
                        pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 + var_778);
                    }
                    if (var_199 == 3) {
                        pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 + var_778);
                    }
                    if (var_199 == 7) {
                        pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 - var_778);
                    }
                    if (var_199 == 9) {
                        pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 - var_778);
                    }
                    if (var_217 == 1) {
                        pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36);
                    }
                    if (var_760 == 4) {
                        gcopy(18, 1360, 1000, 40, 80);
                    }
                    if (var_760 == 3) {
                        gcopy(18, 0, 240, 40, 40);
                    }
                    if (var_760 == 2) {
                        gcopy(18, 0, 280, 40, 40);
                    }
                    if (var_760 == 1) {
                        gcopy(18, 0, 320, 40, 40);
                    }
                }
            }
            if (var_526 >= 1 && var_759 >= 2) {
                var_781 = 12;
                var_782 = 4;
                if (var_199 == 4) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36);
                }
                if (var_199 == 6) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36);
                }
                if (var_199 == 8) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_199 == 2) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 1) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 3) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 7) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_199 == 9) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_217 == 1) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36);
                }
                gmode(2);
                gcopy(18, 80, 1080, 120, 120);
                var_781 = 12;
                var_782 = 6;
                if (var_199 == 4) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36);
                }
                if (var_199 == 6) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36);
                }
                if (var_199 == 8) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_199 == 2) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 1) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 3) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 7) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_199 == 9) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_217 == 1) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36);
                }
                gmode(2);
                gcopy(18, 1360, 1120, 80, 80);
            }
            if (var_523 >= 1) {
                var_781 = 16;
                var_782 = 5;
                if (var_199 == 4) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36);
                }
                if (var_199 == 6) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36);
                }
                if (var_199 == 8) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_199 == 2) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 1) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 3) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 7) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_199 == 9) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_217 == 1) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36);
                }
                gmode(2);
                if (var_784 == 0 || var_784 == 3) {
                    gcopy(18, 0, 0, 40, 40);
                }
                if (var_784 == 1 || var_784 == 4) {
                    gcopy(18, 0, 40, 40, 40);
                }
                if (var_784 == 2 || var_784 == 5) {
                    gcopy(18, 0, 80, 40, 40);
                }
            }
            var_781 = 15;
            var_782 = 21;
            if (var_199 == 4) {
                pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36);
            }
            if (var_199 == 6) {
                pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36);
            }
            if (var_199 == 8) {
                pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 - var_778);
            }
            if (var_199 == 2) {
                pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 + var_778);
            }
            if (var_199 == 1) {
                pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 + var_778);
            }
            if (var_199 == 3) {
                pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 + var_778);
            }
            if (var_199 == 7) {
                pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 - var_778);
            }
            if (var_199 == 9) {
                pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 - var_778);
            }
            if (var_217 == 1) {
                pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36);
            }
            gmode(2);
            if (var_557 == 0 || var_557 >= 13) {
                gcopy(14, 0, 400, 40, 40);
            }
            if (var_557 == 1 || var_557 == 2 || var_557 == 11 || var_557 == 12) {
                gcopy(14, 40, 400, 40, 40);
            }
            if (var_557 == 3 || var_557 == 4 || var_557 == 9 || var_557 == 10) {
                gcopy(14, 80, 400, 40, 40);
            }
            if (var_557 == 5 || var_557 == 6 || var_557 == 7 || var_557 == 8) {
                gcopy(14, 120, 400, 40, 40);
            }
            if (var_559 < 4) {
                if (var_559 < 3) {
                    var_781 = 9;
                    var_782 = 19;
                }
                if (var_559 == 3) {
                    var_781 = 8;
                    var_782 = 19;
                }
                if (var_199 == 4) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36);
                }
                if (var_199 == 6) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36);
                }
                if (var_199 == 8) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_199 == 2) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 1) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 3) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 7) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_199 == 9) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_217 == 1) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36);
                }
                gcopy(18, 80, 360, 120, 360);
            }
            if (var_559 < 2) {
                if (var_559 == 0) {
                    var_781 = 11;
                    var_782 = 25;
                }
                if (var_559 == 1) {
                    var_781 = 11;
                    var_782 = 26;
                }
                if (var_199 == 4) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36);
                }
                if (var_199 == 6) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36);
                }
                if (var_199 == 8) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_199 == 2) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 1) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 3) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 + var_778);
                }
                if (var_199 == 7) {
                    pos((var_781 - var_66 + 4) * var_35 - var_778, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_199 == 9) {
                    pos((var_781 - var_66 + 4) * var_35 + var_778, (var_782 - var_67 + 4) * var_36 - var_778);
                }
                if (var_217 == 1) {
                    pos((var_781 - var_66 + 4) * var_35, (var_782 - var_67 + 4) * var_36);
                }
                gcopy(18, 960, 1040, 360, 160);
            }
            return [2 /*return*/];
        });
    });
}
function func164() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(164);
            if (var_409 == 0) {
                var_778 = 0;
            }
            if (var_409 == 1) {
                var_778 = 10;
            }
            if (var_409 == 2) {
                var_778 = 20;
            }
            if (var_409 == 3) {
                var_778 = 30;
            }
            var_779 = (var_66 + 2) * var_35 + var_778;
            var_780 = (var_67 + 1) * var_36 + var_778;
            if (var_217 == 0) {
                if (var_199 == 6) {
                    var_779 = (var_66 + 2) * var_35 - var_778;
                    var_780 = (var_67 + 1) * var_36;
                }
                if (var_199 == 4) {
                    var_779 = (var_66 + 2) * var_35 + var_778;
                    var_780 = (var_67 + 1) * var_36;
                }
                if (var_199 == 2) {
                    var_779 = (var_66 + 2) * var_35;
                    var_780 = (var_67 + 1) * var_36 - var_778;
                }
                if (var_199 == 8) {
                    var_779 = (var_66 + 2) * var_35;
                    var_780 = (var_67 + 1) * var_36 + var_778;
                }
                if (var_199 == 9) {
                    var_779 = (var_66 + 2) * var_35 - var_778;
                    var_780 = (var_67 + 1) * var_36 + var_778;
                }
                if (var_199 == 7) {
                    var_779 = (var_66 + 2) * var_35 + var_778;
                    var_780 = (var_67 + 1) * var_36 + var_778;
                }
                if (var_199 == 3) {
                    var_779 = (var_66 + 2) * var_35 - var_778;
                    var_780 = (var_67 + 1) * var_36 - var_778;
                }
                if (var_199 == 1) {
                    var_779 = (var_66 + 2) * var_35 + var_778;
                    var_780 = (var_67 + 1) * var_36 - var_778;
                }
            }
            if (var_217 == 1) {
                var_779 = (var_66 + 2) * var_35;
                var_780 = (var_67 + 1) * var_36;
            }
            pos(0, 0);
            gmode(2);
            gcopy(18, var_779, var_780, 340, 340);
            return [2 /*return*/];
        });
    });
}
function func165() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_109, cnt2_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(165);
                    var_785 = 1;
                    var_786 = 1;
                    var_787 = 1;
                    if (var_788 != 0) {
                        if (var_788 <= 5) {
                            var_785 = 1;
                            var_787 = var_788;
                        }
                        if (var_788 >= 6 && var_788 <= 10) {
                            var_785 = 2;
                            var_787 = var_788 - 5;
                        }
                        if (var_788 >= 11 && var_788 <= 15) {
                            var_785 = 3;
                            var_787 = var_788 - 10;
                        }
                        if (var_788 >= 16 && var_788 <= 20) {
                            var_785 = 4;
                            var_787 = var_788 - 15;
                        }
                        var_786 = var_788;
                    }
                    if (var_789 == 1) {
                        var_785 = 4;
                        var_786 = 0;
                        var_787 = 5;
                    }
                    var_629 = 1;
                    var_599 = 0;
                    cnt1_109 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_109 < 6)) return [3 /*break*/, 11];
                    redraw(0);
                    return [4 /*yield*/, func168()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func180()];
                case 3:
                    _a.sent();
                    if (!(var_10 >= 1)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func338()];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    cnt2_14 = 0;
                    _a.label = 6;
                case 6:
                    if (!(cnt2_14 < 2)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func339()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    ++cnt2_14;
                    return [3 /*break*/, 6];
                case 9:
                    redraw(1);
                    var_599 = var_599 + 1;
                    _a.label = 10;
                case 10:
                    ++cnt1_109;
                    return [3 /*break*/, 1];
                case 11:
                    var_599 = 0;
                    return [4 /*yield*/, func166()];
                case 12:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func166() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_110, cnt3_5, cnt3_6, cnt3_7, cnt3_8, cnt3_9, cnt3_10, cnt3_11, cnt3_12, cnt3_13, cnt3_14, cnt3_15, cnt3_16;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(166);
                    redraw(0);
                    return [4 /*yield*/, func168()];
                case 1:
                    _a.sent();
                    if (!(var_10 >= 1)) return [3 /*break*/, 3];
                    return [4 /*yield*/, func338()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    redraw(1);
                    cnt1_110 = 0;
                    _a.label = 4;
                case 4:
                    if (!(cnt1_110 < 2)) return [3 /*break*/, 7];
                    return [4 /*yield*/, func339()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    ++cnt1_110;
                    return [3 /*break*/, 4];
                case 7: return [4 /*yield*/, func080()];
                case 8:
                    _a.sent();
                    if (!(var_767 == 1)) return [3 /*break*/, 16];
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func178()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, func167()];
                case 10:
                    _a.sent();
                    var_767 = 0;
                    var_788 = 0;
                    var_790 = 0;
                    var_791 = 0;
                    var_629 = 0;
                    return [4 /*yield*/, func159()];
                case 11:
                    _a.sent();
                    return [2 /*return*/];
                case 12:
                    if (!(var_239 == 1)) return [3 /*break*/, 16];
                    return [4 /*yield*/, func178()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, func167()];
                case 14:
                    _a.sent();
                    var_767 = 0;
                    var_788 = 0;
                    var_790 = 0;
                    var_791 = 0;
                    var_629 = 0;
                    return [4 /*yield*/, func159()];
                case 15:
                    _a.sent();
                    return [2 /*return*/];
                case 16:
                    if (!(var_767 == 0)) return [3 /*break*/, 95];
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 19];
                    if (!(var_792[var_793][var_786][3] != 0)) return [3 /*break*/, 19];
                    var_794 = 1;
                    var_795 = 225;
                    return [4 /*yield*/, func178()];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, func169()];
                case 18:
                    _a.sent();
                    return [2 /*return*/];
                case 19:
                    if (!(var_239 == 1)) return [3 /*break*/, 23];
                    var_790 = 0;
                    var_791 = 0;
                    return [4 /*yield*/, func822()];
                case 20:
                    _a.sent();
                    var_629 = 0;
                    return [4 /*yield*/, func051()];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, func820()];
                case 22:
                    _a.sent();
                    return [2 /*return*/];
                case 23:
                    if (!(var_257 == 1 && var_785 == 1)) return [3 /*break*/, 29];
                    var_785 = 2;
                    var_786 = 6;
                    var_787 = 1;
                    cnt3_5 = 0;
                    _a.label = 24;
                case 24:
                    if (!(cnt3_5 < 15)) return [3 /*break*/, 27];
                    return [4 /*yield*/, func339()];
                case 25:
                    _a.sent();
                    _a.label = 26;
                case 26:
                    ++cnt3_5;
                    return [3 /*break*/, 24];
                case 27: return [4 /*yield*/, func166()];
                case 28:
                    _a.sent();
                    return [2 /*return*/];
                case 29:
                    if (!(var_257 == 1 && var_785 == 2)) return [3 /*break*/, 35];
                    var_785 = 3;
                    var_786 = 11;
                    var_787 = 1;
                    cnt3_6 = 0;
                    _a.label = 30;
                case 30:
                    if (!(cnt3_6 < 15)) return [3 /*break*/, 33];
                    return [4 /*yield*/, func339()];
                case 31:
                    _a.sent();
                    _a.label = 32;
                case 32:
                    ++cnt3_6;
                    return [3 /*break*/, 30];
                case 33: return [4 /*yield*/, func166()];
                case 34:
                    _a.sent();
                    return [2 /*return*/];
                case 35:
                    if (!(var_257 == 1 && var_785 == 3)) return [3 /*break*/, 41];
                    var_785 = 4;
                    var_786 = 16;
                    var_787 = 1;
                    cnt3_7 = 0;
                    _a.label = 36;
                case 36:
                    if (!(cnt3_7 < 15)) return [3 /*break*/, 39];
                    return [4 /*yield*/, func339()];
                case 37:
                    _a.sent();
                    _a.label = 38;
                case 38:
                    ++cnt3_7;
                    return [3 /*break*/, 36];
                case 39: return [4 /*yield*/, func166()];
                case 40:
                    _a.sent();
                    return [2 /*return*/];
                case 41:
                    if (!(var_257 == 1 && var_785 == 4)) return [3 /*break*/, 47];
                    var_785 = 1;
                    var_786 = 1;
                    var_787 = 1;
                    cnt3_8 = 0;
                    _a.label = 42;
                case 42:
                    if (!(cnt3_8 < 15)) return [3 /*break*/, 45];
                    return [4 /*yield*/, func339()];
                case 43:
                    _a.sent();
                    _a.label = 44;
                case 44:
                    ++cnt3_8;
                    return [3 /*break*/, 42];
                case 45: return [4 /*yield*/, func166()];
                case 46:
                    _a.sent();
                    return [2 /*return*/];
                case 47:
                    if (!(var_254 == 1 && var_785 == 1)) return [3 /*break*/, 53];
                    var_785 = 4;
                    var_786 = 16;
                    var_787 = 1;
                    cnt3_9 = 0;
                    _a.label = 48;
                case 48:
                    if (!(cnt3_9 < 15)) return [3 /*break*/, 51];
                    return [4 /*yield*/, func339()];
                case 49:
                    _a.sent();
                    _a.label = 50;
                case 50:
                    ++cnt3_9;
                    return [3 /*break*/, 48];
                case 51: return [4 /*yield*/, func166()];
                case 52:
                    _a.sent();
                    return [2 /*return*/];
                case 53:
                    if (!(var_254 == 1 && var_785 == 2)) return [3 /*break*/, 59];
                    var_785 = 1;
                    var_786 = 1;
                    var_787 = 1;
                    cnt3_10 = 0;
                    _a.label = 54;
                case 54:
                    if (!(cnt3_10 < 15)) return [3 /*break*/, 57];
                    return [4 /*yield*/, func339()];
                case 55:
                    _a.sent();
                    _a.label = 56;
                case 56:
                    ++cnt3_10;
                    return [3 /*break*/, 54];
                case 57: return [4 /*yield*/, func166()];
                case 58:
                    _a.sent();
                    return [2 /*return*/];
                case 59:
                    if (!(var_254 == 1 && var_785 == 3)) return [3 /*break*/, 65];
                    var_785 = 2;
                    var_786 = 6;
                    var_787 = 1;
                    cnt3_11 = 0;
                    _a.label = 60;
                case 60:
                    if (!(cnt3_11 < 15)) return [3 /*break*/, 63];
                    return [4 /*yield*/, func339()];
                case 61:
                    _a.sent();
                    _a.label = 62;
                case 62:
                    ++cnt3_11;
                    return [3 /*break*/, 60];
                case 63: return [4 /*yield*/, func166()];
                case 64:
                    _a.sent();
                    return [2 /*return*/];
                case 65:
                    if (!(var_254 == 1 && var_785 == 4)) return [3 /*break*/, 71];
                    var_785 = 3;
                    var_786 = 11;
                    var_787 = 1;
                    cnt3_12 = 0;
                    _a.label = 66;
                case 66:
                    if (!(cnt3_12 < 15)) return [3 /*break*/, 69];
                    return [4 /*yield*/, func339()];
                case 67:
                    _a.sent();
                    _a.label = 68;
                case 68:
                    ++cnt3_12;
                    return [3 /*break*/, 66];
                case 69: return [4 /*yield*/, func166()];
                case 70:
                    _a.sent();
                    return [2 /*return*/];
                case 71:
                    if (!(var_259 == 1 && var_787 <= 4)) return [3 /*break*/, 77];
                    var_786 = var_786 + 1;
                    var_787 = var_787 + 1;
                    cnt3_13 = 0;
                    _a.label = 72;
                case 72:
                    if (!(cnt3_13 < 15)) return [3 /*break*/, 75];
                    return [4 /*yield*/, func339()];
                case 73:
                    _a.sent();
                    _a.label = 74;
                case 74:
                    ++cnt3_13;
                    return [3 /*break*/, 72];
                case 75: return [4 /*yield*/, func166()];
                case 76:
                    _a.sent();
                    return [2 /*return*/];
                case 77:
                    if (!(var_255 == 1 && var_787 >= 2)) return [3 /*break*/, 83];
                    var_786 = var_786 - 1;
                    var_787 = var_787 - 1;
                    cnt3_14 = 0;
                    _a.label = 78;
                case 78:
                    if (!(cnt3_14 < 15)) return [3 /*break*/, 81];
                    return [4 /*yield*/, func339()];
                case 79:
                    _a.sent();
                    _a.label = 80;
                case 80:
                    ++cnt3_14;
                    return [3 /*break*/, 78];
                case 81: return [4 /*yield*/, func166()];
                case 82:
                    _a.sent();
                    return [2 /*return*/];
                case 83:
                    if (!(var_259 == 1 && var_787 == 5)) return [3 /*break*/, 89];
                    var_786 = var_786 - 4;
                    var_787 = 1;
                    cnt3_15 = 0;
                    _a.label = 84;
                case 84:
                    if (!(cnt3_15 < 15)) return [3 /*break*/, 87];
                    return [4 /*yield*/, func339()];
                case 85:
                    _a.sent();
                    _a.label = 86;
                case 86:
                    ++cnt3_15;
                    return [3 /*break*/, 84];
                case 87: return [4 /*yield*/, func166()];
                case 88:
                    _a.sent();
                    return [2 /*return*/];
                case 89:
                    if (!(var_255 == 1 && var_787 == 1)) return [3 /*break*/, 95];
                    var_786 = var_786 + 4;
                    var_787 = 5;
                    cnt3_16 = 0;
                    _a.label = 90;
                case 90:
                    if (!(cnt3_16 < 15)) return [3 /*break*/, 93];
                    return [4 /*yield*/, func339()];
                case 91:
                    _a.sent();
                    _a.label = 92;
                case 92:
                    ++cnt3_16;
                    return [3 /*break*/, 90];
                case 93: return [4 /*yield*/, func166()];
                case 94:
                    _a.sent();
                    return [2 /*return*/];
                case 95: return [4 /*yield*/, func166()];
                case 96:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func167() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_111, cnt2_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(167);
                    var_599 = 5;
                    cnt1_111 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_111 < 6)) return [3 /*break*/, 11];
                    redraw(0);
                    return [4 /*yield*/, func168()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func180()];
                case 3:
                    _a.sent();
                    if (!(var_10 >= 1)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func338()];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    cnt2_15 = 0;
                    _a.label = 6;
                case 6:
                    if (!(cnt2_15 < 2)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func339()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    ++cnt2_15;
                    return [3 /*break*/, 6];
                case 9:
                    redraw(1);
                    var_599 = var_599 - 1;
                    _a.label = 10;
                case 10:
                    ++cnt1_111;
                    return [3 /*break*/, 1];
                case 11:
                    var_599 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
// ダンジョンクリア時のスコア判定
function func168() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_112;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(168);
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                    pos(0, 0);
                    if (var_767 == 0) {
                        gcopy(17, 360, 0, 340, 340);
                    }
                    if (var_767 == 1) {
                        if (var_791 == 0) {
                            gcopy(17, 360, 0, 340, 340);
                        }
                        if (var_791 == 1) {
                            gcopy(17, 360, 720, 340, 340);
                        }
                        if (var_791 == 2) {
                            gcopy(17, 720, 0, 340, 340);
                        }
                    }
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                    pos(0, 0);
                    gcopy(12, 0, 0, 340, 340);
                    color(255, 255, 255);
                    if (var_794 != 0) {
                        color(150, 150, 150);
                    }
                    line(10, 10, 90, 10);
                    line(255, 10, 325, 10);
                    line(10, 200, 120, 200);
                    line(225, 200, 325, 200);
                    line(9, 11, 9, 198);
                    line(327, 11, 327, 198);
                    pset(10, 11);
                    pset(326, 11);
                    pset(10, 199);
                    pset(326, 199);
                    color(255, 255, 255);
                    font("ＭＳ Ｐゴシック", 18, 1);
                    if (var_793 == 1) {
                        pos(130, 5);
                        mes("ホテルの外");
                    }
                    if (var_793 == 2) {
                        pos(95, 5);
                        mes("レクイエムの大迷宮");
                    }
                    if (var_793 == 3) {
                        pos(100, 5);
                        mes("ディアボロの試練");
                    }
                    if (var_793 == 4) {
                        pos(120, 5);
                        mes("一巡後の世界");
                    }
                    if (var_793 == 0) {
                        pos(136, 5);
                        mes("" + var_21);
                    }
                    font("ＭＳ Ｐゴシック", 12, 1);
                    pos(130, 195);
                    color(255, 255, 255);
                    if (var_794 != 0) {
                        color(150, 150, 150);
                    }
                    if (var_767 == 0) {
                        mes("<<  " + var_785 + "ページ  >>");
                    }
                    if (var_767 == 1) {
                        color(255, 255, 255);
                        line(110, 200, 230, 200);
                    }
                    var_796 = 1;
                    if (var_785 == 2) {
                        var_796 = 6;
                    }
                    if (var_785 == 3) {
                        var_796 = 11;
                    }
                    if (var_785 == 4) {
                        var_796 = 16;
                    }
                    var_797 = 1;
                    font(font_type = "ＭＳ Ｐゴシック", font_size = 14, font_style = 1);
                    cnt1_112 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_112 < 5)) return [3 /*break*/, 11];
                    if (!(var_796 < 20)) return [3 /*break*/, 4];
                    color(255, 255, 255);
                    if (var_794 != 0) {
                        color(150, 150, 150);
                    }
                    if (var_796 == var_788) {
                        color(255, 0, 0);
                    }
                    pos(30, var_797 * 31);
                    mes("" + var_796 + "位");
                    if (!(var_792[var_793][var_796][3] != 0)) return [3 /*break*/, 3];
                    pos(70, var_797 * 31);
                    mes("" + var_792[var_793][var_796][1] + " 階");
                    pos(120, var_797 * 31);
                    mes("スコア　" + var_792[var_793][var_796][3]);
                    color(0, 255, 0);
                    if (var_794 != 0) {
                        color(0, 190, 0);
                    }
                    if (var_796 == var_788) {
                        color(255, 0, 0);
                    }
                    pos(30, var_797 * 31 + 16);
                    var_356 = var_792[var_793][var_796][2];
                    return [4 /*yield*/, func177()];
                case 2:
                    _a.sent();
                    mes("" + var_798);
                    _a.label = 3;
                case 3:
                    if (var_792[var_793][var_796][3] == 0) {
                        pos(70, var_797 * 31);
                        mes("");
                    }
                    _a.label = 4;
                case 4:
                    if (!(var_796 == 20 && var_789 == 0)) return [3 /*break*/, 7];
                    color(255, 255, 255);
                    if (var_794 != 0) {
                        color(150, 150, 150);
                    }
                    if (var_796 == var_788) {
                        color(255, 0, 0);
                    }
                    pos(30, var_797 * 31);
                    mes("" + var_796 + "位");
                    if (!(var_792[var_793][var_796][3] != 0)) return [3 /*break*/, 6];
                    pos(70, var_797 * 31);
                    mes("" + var_792[var_793][var_796][1] + " 階");
                    pos(120, var_797 * 31);
                    mes("スコア　" + var_792[var_793][var_796][3]);
                    color(0, 255, 0);
                    if (var_794 != 0) {
                        color(0, 190, 0);
                    }
                    if (var_796 == var_788) {
                        color(255, 0, 0);
                    }
                    pos(30, var_797 * 31 + 16);
                    var_356 = var_792[var_793][var_796][2];
                    return [4 /*yield*/, func177()];
                case 5:
                    _a.sent();
                    mes("" + var_798);
                    _a.label = 6;
                case 6:
                    if (var_792[var_793][var_796][3] == 0) {
                        pos(70, var_797 * 31);
                        mes("");
                    }
                    _a.label = 7;
                case 7:
                    if (!(var_796 == 20 && var_789 == 1)) return [3 /*break*/, 9];
                    color(255, 0, 0);
                    pos(30, var_797 * 31);
                    mes("圏外");
                    pos(70, var_797 * 31);
                    mes("" + var_792[var_793][0][1] + " 階");
                    pos(120, var_797 * 31);
                    mes("スコア　" + var_792[var_793][0][3]);
                    color(255, 0, 0);
                    pos(30, var_797 * 31 + 16);
                    var_356 = var_792[var_793][0][2];
                    return [4 /*yield*/, func177()];
                case 8:
                    _a.sent();
                    mes("" + var_798);
                    _a.label = 9;
                case 9:
                    var_796 = var_796 + 1;
                    var_797 = var_797 + 1;
                    _a.label = 10;
                case 10:
                    ++cnt1_112;
                    return [3 /*break*/, 1];
                case 11:
                    if (var_767 == 0) {
                        font(font_type = "ＭＳ Ｐゴシック", font_size = 14, font_style = 1);
                        color(255, 255, 255);
                        if (var_794 != 0) {
                            color(150, 150, 150);
                        }
                        pos(13, var_787 * 31);
                        mes(">");
                        pos(14, var_787 * 31);
                        mes(">");
                        pos(15, var_787 * 31);
                        mes(">");
                    }
                    color(255, 255, 255);
                    line(10, 220, 325, 220);
                    line(10, 332, 325, 332);
                    line(9, 221, 9, 330);
                    line(327, 221, 327, 330);
                    pset(10, 221);
                    pset(326, 221);
                    pset(10, 331);
                    pset(326, 331);
                    font(font_type = "ＭＳ Ｐゴシック", font_size = 14, font_style = 1);
                    color(255, 255, 255);
                    if (!(var_792[var_793][var_786][3] != 0)) return [3 /*break*/, 15];
                    var_487 = 0;
                    pos(30, 225);
                    item_list = var_792[var_793][var_786][4];
                    var_487 = 0;
                    if (item_list > 1000) {
                        if (item_list >= 1000 && item_list < 2000) {
                            item_list = item_list - 1000;
                            var_487 = 1;
                        }
                        if (item_list >= 2000 && item_list < 3000) {
                            item_list = item_list - 2000;
                            var_487 = 2;
                        }
                        if (item_list >= 3000 && item_list < 4000) {
                            item_list = item_list - 3000;
                            var_487 = 3;
                        }
                    }
                    return [4 /*yield*/, func492()];
                case 12:
                    _a.sent();
                    color(255, 255, 0);
                    if (item_list != 0) {
                        var_799 = "攻撃：" + item_name;
                        if (var_792[var_793][var_786][5] != 0) {
                            var_799 = var_799 + "＋" + var_792[var_793][var_786][5];
                        }
                        if (var_792[var_793][var_786][6] >= 2) {
                            var_799 = var_799 + "★" + var_792[var_793][var_786][6];
                        }
                        mes(var_799);
                    }
                    if (item_list == 0) {
                        mes("攻撃：なし");
                    }
                    pos(30, 242);
                    item_list = var_792[var_793][var_786][7];
                    var_487 = 0;
                    if (item_list > 1000) {
                        if (item_list >= 1000 && item_list < 2000) {
                            item_list = item_list - 1000;
                            var_487 = 1;
                        }
                        if (item_list >= 2000 && item_list < 3000) {
                            item_list = item_list - 2000;
                            var_487 = 2;
                        }
                        if (item_list >= 3000 && item_list < 4000) {
                            item_list = item_list - 3000;
                            var_487 = 3;
                        }
                    }
                    return [4 /*yield*/, func492()];
                case 13:
                    _a.sent();
                    color(255, 180, 90);
                    if (item_list != 0) {
                        var_799 = "防御：" + item_name;
                        if (var_792[var_793][var_786][8] != 0) {
                            var_799 = var_799 + "＋" + var_792[var_793][var_786][8];
                        }
                        if (var_792[var_793][var_786][9] >= 2) {
                            var_799 = var_799 + "★" + var_792[var_793][var_786][9];
                        }
                        mes(var_799);
                    }
                    if (item_list == 0) {
                        mes("防御：なし");
                    }
                    pos(30, 259);
                    item_list = var_792[var_793][var_786][10];
                    var_487 = 0;
                    if (item_list > 1000) {
                        if (item_list >= 1000 && item_list < 2000) {
                            item_list = item_list - 1000;
                            var_487 = 1;
                        }
                        if (item_list >= 2000 && item_list < 3000) {
                            item_list = item_list - 2000;
                            var_487 = 2;
                        }
                        if (item_list >= 3000 && item_list < 4000) {
                            item_list = item_list - 3000;
                            var_487 = 3;
                        }
                    }
                    return [4 /*yield*/, func492()];
                case 14:
                    _a.sent();
                    color(240, 0, 240);
                    if (item_list != 0) {
                        var_799 = "能力：" + item_name;
                        if (var_792[var_793][var_786][11] != 0) {
                            var_799 = var_799 + "＋" + var_792[var_793][var_786][11];
                        }
                        if (var_792[var_793][var_786][12] >= 2) {
                            var_799 = var_799 + "★" + var_792[var_793][var_786][12];
                        }
                        mes(var_799);
                    }
                    if (item_list == 0) {
                        mes("能力：なし");
                    }
                    font(font_type = "ＭＳ Ｐゴシック", font_size = 14, font_style = 1);
                    color(255, 255, 255);
                    pos(40, 276);
                    mes("レベル：" + var_792[var_793][var_786][14]);
                    pos(180, 276);
                    mes("精神力：" + var_792[var_793][var_786][17] + "/" + var_792[var_793][var_786][16]);
                    pos(40, 293);
                    mes("最大HP：" + var_792[var_793][var_786][15]);
                    pos(180, 293);
                    mes("満腹度：" + var_792[var_793][var_786][18]);
                    pos(40, 310);
                    mes("ターン：" + var_792[var_793][var_786][0]);
                    if (var_792[var_793][var_786][50] != 0) {
                        pos(180, 310);
                        mes("" + var_792[var_793][var_786][50] + "年" + var_792[var_793][var_786][51] + "月" + var_792[var_793][var_786][52] + "日");
                    }
                    if (var_794 >= 1) {
                        color(255, 255, 255);
                        font("MS ゴシック", 16, 1);
                        pos(13, var_795);
                        mes(">");
                        pos(14, var_795);
                        mes(">");
                        pos(15, var_795);
                        mes(">");
                    }
                    _a.label = 15;
                case 15: return [2 /*return*/];
            }
        });
    });
}
function func169() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_113, cnt2_16, cnt2_17, cnt2_18, cnt2_19;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(169);
                    redraw(0);
                    return [4 /*yield*/, func168()];
                case 1:
                    _a.sent();
                    if (!(var_10 >= 1)) return [3 /*break*/, 3];
                    return [4 /*yield*/, func338()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    redraw(1);
                    cnt1_113 = 0;
                    _a.label = 4;
                case 4:
                    if (!(cnt1_113 < 2)) return [3 /*break*/, 7];
                    return [4 /*yield*/, func339()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    ++cnt1_113;
                    return [3 /*break*/, 4];
                case 7: return [4 /*yield*/, func080()];
                case 8:
                    _a.sent();
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 17];
                    if (!(var_794 == 1 && var_792[var_793][var_786][4] != 0)) return [3 /*break*/, 11];
                    var_800 = 1;
                    return [4 /*yield*/, func178()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, func171()];
                case 10:
                    _a.sent();
                    return [2 /*return*/];
                case 11:
                    if (!(var_794 == 2 && var_792[var_793][var_786][7] != 0)) return [3 /*break*/, 14];
                    var_800 = 1;
                    return [4 /*yield*/, func178()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, func171()];
                case 13:
                    _a.sent();
                    return [2 /*return*/];
                case 14:
                    if (!(var_794 == 3 && var_792[var_793][var_786][10] != 0)) return [3 /*break*/, 17];
                    var_800 = 1;
                    return [4 /*yield*/, func178()];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, func171()];
                case 16:
                    _a.sent();
                    return [2 /*return*/];
                case 17:
                    if (!(var_239 == 1)) return [3 /*break*/, 20];
                    var_794 = 0;
                    return [4 /*yield*/, func178()];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, func166()];
                case 19:
                    _a.sent();
                    return [2 /*return*/];
                case 20:
                    if (!(var_259 == 1 && var_794 != 3)) return [3 /*break*/, 26];
                    var_794 = var_794 + 1;
                    var_795 = var_795 + 15;
                    cnt2_16 = 0;
                    _a.label = 21;
                case 21:
                    if (!(cnt2_16 < 15)) return [3 /*break*/, 24];
                    return [4 /*yield*/, func339()];
                case 22:
                    _a.sent();
                    _a.label = 23;
                case 23:
                    ++cnt2_16;
                    return [3 /*break*/, 21];
                case 24: return [4 /*yield*/, func169()];
                case 25:
                    _a.sent();
                    return [2 /*return*/];
                case 26:
                    if (!(var_259 == 1 && var_794 == 3)) return [3 /*break*/, 32];
                    var_794 = 1;
                    var_795 = 225;
                    cnt2_17 = 0;
                    _a.label = 27;
                case 27:
                    if (!(cnt2_17 < 5)) return [3 /*break*/, 30];
                    return [4 /*yield*/, func339()];
                case 28:
                    _a.sent();
                    _a.label = 29;
                case 29:
                    ++cnt2_17;
                    return [3 /*break*/, 27];
                case 30: return [4 /*yield*/, func169()];
                case 31:
                    _a.sent();
                    return [2 /*return*/];
                case 32:
                    if (!(var_255 == 1 && var_794 != 1)) return [3 /*break*/, 38];
                    var_794 = var_794 - 1;
                    var_795 = var_795 - 15;
                    cnt2_18 = 0;
                    _a.label = 33;
                case 33:
                    if (!(cnt2_18 < 15)) return [3 /*break*/, 36];
                    return [4 /*yield*/, func339()];
                case 34:
                    _a.sent();
                    _a.label = 35;
                case 35:
                    ++cnt2_18;
                    return [3 /*break*/, 33];
                case 36: return [4 /*yield*/, func169()];
                case 37:
                    _a.sent();
                    return [2 /*return*/];
                case 38:
                    if (!(var_255 == 1 && var_794 == 1)) return [3 /*break*/, 44];
                    var_794 = 3;
                    var_795 = 255;
                    cnt2_19 = 0;
                    _a.label = 39;
                case 39:
                    if (!(cnt2_19 < 5)) return [3 /*break*/, 42];
                    return [4 /*yield*/, func339()];
                case 40:
                    _a.sent();
                    _a.label = 41;
                case 41:
                    ++cnt2_19;
                    return [3 /*break*/, 39];
                case 42: return [4 /*yield*/, func169()];
                case 43:
                    _a.sent();
                    return [2 /*return*/];
                case 44: return [4 /*yield*/, func169()];
                case 45:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func170() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_114, cnt1_115;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(170);
                    gmode(2);
                    pos(0, 0);
                    if (var_767 == 0) {
                        gcopy(17, 360, 0, 340, 340);
                    }
                    if (var_767 == 1) {
                        if (var_791 == 0) {
                            gcopy(17, 360, 0, 340, 340);
                        }
                        if (var_791 == 1) {
                            gcopy(17, 360, 720, 340, 340);
                        }
                        if (var_791 == 2) {
                            gcopy(17, 720, 0, 340, 340);
                        }
                    }
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                    pos(0, 0);
                    gcopy(12, 0, 0, 340, 340);
                    color(255, 255, 255);
                    line(9, 37, 330, 37);
                    line(9, var_801, 330, var_801);
                    line(8, 38, 8, var_801 - 2);
                    line(332, 38, 332, var_801 - 2);
                    pset(9, 38);
                    pset(331, 38);
                    pset(9, var_801 - 1);
                    pset(331, var_801 - 1);
                    gmode(2);
                    pos(285, 45);
                    gcopy(9, 360, 0, 40, 20);
                    if (var_802 == 100 || var_802 == 108 || var_802 == 110 || var_802 == 113 || var_802 == 118 || var_802 == 123 || var_802 == 398) {
                        pos(285, 70);
                        gcopy(9, 360, 20, 40, 20);
                    }
                    item_list = var_802;
                    return [4 /*yield*/, func492()];
                case 1:
                    _a.sent();
                    var_575 = var_802;
                    return [4 /*yield*/, func070()];
                case 2:
                    _a.sent();
                    if (var_487 == 0) {
                        var_576 = 11;
                    }
                    if (var_487 == 1) {
                        var_576 = 1;
                    }
                    if (var_487 == 2) {
                        var_576 = 16;
                    }
                    if (var_487 == 3) {
                        var_576 = 29;
                    }
                    pos(20, 50);
                    gcopy(var_576, var_577, var_578, 40, 40);
                    pos(70, 65);
                    font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
                    color(0, 255, 0);
                    if (var_803 == 0 && var_804 <= 1) {
                        mes(item_name);
                    }
                    if (var_803 == 0 && var_804 > 1) {
                        mes("" + item_name + " ★" + var_804);
                    }
                    if (var_803 > 0 && var_804 <= 1) {
                        mes("" + item_name + "+" + var_803);
                    }
                    if (var_803 > 0 && var_804 > 1) {
                        mes("" + item_name + "+" + var_803 + " ★" + var_804);
                    }
                    if (var_805 == 1) {
                        pos(62, 73);
                        gmode(2);
                        gcopy(8, 40, 50, 10, 10);
                    }
                    if (var_805 == 2) {
                        pos(61, 74);
                        gmode(2);
                        gcopy(8, 40, 80, 10, 10);
                    }
                    color(255, 255, 255);
                    font("ＭＳ Ｐゴシック", 14, 1);
                    pos(30, 100);
                    mes("" + var_806 + "　空き容量 " + var_807);
                    pos(30, 120);
                    mes(var_808);
                    var_809 = 1;
                    for (cnt1_114 = 0; cnt1_114 < var_810 + var_807; ++cnt1_114) {
                        pos(30, var_809 * 20 + 120);
                        color(255, 255, 255);
                        font("MS UI ゴシック", 12, 1);
                        mes("Track" + var_809 + ":");
                        var_809 = var_809 + 1;
                    }
                    var_809 = 1;
                    cnt1_115 = 0;
                    _a.label = 3;
                case 3:
                    if (!(cnt1_115 < var_810 + var_807)) return [3 /*break*/, 6];
                    pos(80, var_809 * 20 + 120);
                    item_list = var_811[var_809];
                    return [4 /*yield*/, func492()];
                case 4:
                    _a.sent();
                    color(255, 255, 255);
                    if (var_812 == 1) {
                        color(255, 255, 0);
                    }
                    if (var_812 == 2) {
                        color(255, 180, 90);
                    }
                    if (var_812 == 3) {
                        color(0, 255, 0);
                    }
                    if (var_812 == 4) {
                        color(240, 0, 240);
                    }
                    font("ＭＳ ゴシック", 14, 1);
                    if (var_813[var_809] != "") {
                        mes("" + var_813[var_809]);
                    }
                    if (var_813[var_809] == "") {
                        mes("空き");
                    }
                    var_809 = var_809 + 1;
                    _a.label = 5;
                case 5:
                    ++cnt1_115;
                    return [3 /*break*/, 3];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function func171() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_116;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(171);
                    if (!(var_794 == 1)) return [3 /*break*/, 2];
                    var_802 = var_792[var_793][var_786][4];
                    item_list = var_792[var_793][var_786][4];
                    return [4 /*yield*/, func492()];
                case 1:
                    _a.sent();
                    var_814 = var_792[var_793][var_786][4];
                    var_803 = var_792[var_793][var_786][5];
                    var_807 = var_792[var_793][var_786][53];
                    var_805 = var_792[var_793][var_786][56];
                    var_810 = var_792[var_793][var_786][6];
                    var_815 = var_792[var_793][var_786][20];
                    var_816 = var_792[var_793][var_786][21];
                    var_817 = var_792[var_793][var_786][22];
                    var_818 = var_792[var_793][var_786][23];
                    var_819 = var_792[var_793][var_786][24];
                    var_820 = var_792[var_793][var_786][25];
                    var_821 = var_792[var_793][var_786][26];
                    var_822 = var_792[var_793][var_786][27];
                    var_823 = var_792[var_793][var_786][28];
                    var_824 = var_792[var_793][var_786][29];
                    _a.label = 2;
                case 2:
                    if (!(var_794 == 2)) return [3 /*break*/, 4];
                    var_802 = var_792[var_793][var_786][7];
                    item_list = var_792[var_793][var_786][7];
                    return [4 /*yield*/, func492()];
                case 3:
                    _a.sent();
                    var_814 = var_792[var_793][var_786][7];
                    var_803 = var_792[var_793][var_786][8];
                    var_807 = var_792[var_793][var_786][54];
                    var_805 = var_792[var_793][var_786][57];
                    var_810 = var_792[var_793][var_786][9];
                    var_815 = var_792[var_793][var_786][30];
                    var_816 = var_792[var_793][var_786][31];
                    var_817 = var_792[var_793][var_786][32];
                    var_818 = var_792[var_793][var_786][33];
                    var_819 = var_792[var_793][var_786][34];
                    var_820 = var_792[var_793][var_786][35];
                    var_821 = var_792[var_793][var_786][36];
                    var_822 = var_792[var_793][var_786][37];
                    var_823 = var_792[var_793][var_786][38];
                    var_824 = var_792[var_793][var_786][39];
                    _a.label = 4;
                case 4:
                    if (!(var_794 == 3)) return [3 /*break*/, 6];
                    var_802 = var_792[var_793][var_786][10];
                    item_list = var_792[var_793][var_786][10];
                    return [4 /*yield*/, func492()];
                case 5:
                    _a.sent();
                    var_814 = var_792[var_793][var_786][10];
                    var_803 = var_792[var_793][var_786][11];
                    var_807 = var_792[var_793][var_786][55];
                    var_805 = var_792[var_793][var_786][58];
                    var_810 = var_792[var_793][var_786][12];
                    var_815 = var_792[var_793][var_786][40];
                    var_816 = var_792[var_793][var_786][41];
                    var_817 = var_792[var_793][var_786][42];
                    var_818 = var_792[var_793][var_786][43];
                    var_819 = var_792[var_793][var_786][44];
                    var_820 = var_792[var_793][var_786][45];
                    var_821 = var_792[var_793][var_786][46];
                    var_822 = var_792[var_793][var_786][47];
                    var_823 = var_792[var_793][var_786][48];
                    var_824 = var_792[var_793][var_786][49];
                    _a.label = 6;
                case 6:
                    var_804 = var_810;
                    var_487 = 0;
                    if (item_list > 1000) {
                        if (item_list >= 1000 && item_list < 2000) {
                            item_list = item_list - 1000;
                            var_802 = var_802 - 1000;
                            var_814 = var_814 - 1000;
                            var_487 = 1;
                        }
                        if (item_list >= 2000 && item_list < 3000) {
                            item_list = item_list - 2000;
                            var_802 = var_802 - 2000;
                            var_814 = var_814 - 2000;
                            var_487 = 2;
                        }
                        if (item_list >= 3000 && item_list < 4000) {
                            item_list = item_list - 3000;
                            var_802 = var_802 - 3000;
                            var_814 = var_814 - 3000;
                            var_487 = 3;
                        }
                    }
                    var_813 = sdim(length1 = 64, length2 = 20, length3 = null);
                    var_811 = dim(100);
                    if (var_794 == 1) {
                        var_825 = 20;
                    }
                    if (var_794 == 2) {
                        var_825 = 30;
                    }
                    if (var_794 == 3) {
                        var_825 = 40;
                    }
                    var_826 = 1;
                    var_827 = 0;
                    cnt1_116 = 0;
                    _a.label = 7;
                case 7:
                    if (!(cnt1_116 < 10)) return [3 /*break*/, 10];
                    item_list = var_792[var_793][var_786][var_825];
                    return [4 /*yield*/, func492()];
                case 8:
                    _a.sent();
                    if (var_828 == "") {
                        var_826 = var_826 - 1;
                        return [3 /*break*/, 10];
                    }
                    var_813[var_826] = var_828;
                    var_811[var_826] = item_list;
                    var_826 = var_826 + 1;
                    var_825 = var_825 + 1;
                    _a.label = 9;
                case 9:
                    ++cnt1_116;
                    return [3 /*break*/, 7];
                case 10:
                    if (item_list == 104) {
                        var_826 = var_826 + 1;
                        var_813[var_826] = "こわれるぞ。";
                        var_811[var_826] = 199;
                        var_810 = var_810 + 1;
                    }
                    var_801 = 170;
                    if (var_814 == 104) {
                        var_801 = 190;
                    }
                    var_801 = (var_810 + var_807 - 2) * 19 + 190;
                    return [4 /*yield*/, func172()];
                case 11:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func172() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_117;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(172);
                    redraw(0);
                    return [4 /*yield*/, func170()];
                case 1:
                    _a.sent();
                    if (!(var_10 >= 1)) return [3 /*break*/, 3];
                    return [4 /*yield*/, func338()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    redraw(1);
                    cnt1_117 = 0;
                    _a.label = 4;
                case 4:
                    if (!(cnt1_117 < 2)) return [3 /*break*/, 7];
                    return [4 /*yield*/, func339()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    ++cnt1_117;
                    return [3 /*break*/, 4];
                case 7: return [4 /*yield*/, func080()];
                case 8:
                    _a.sent();
                    if (!(var_239 == 1)) return [3 /*break*/, 11];
                    var_800 = 0;
                    return [4 /*yield*/, func178()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, func169()];
                case 10:
                    _a.sent();
                    return [2 /*return*/];
                case 11: return [4 /*yield*/, func172()];
                case 12:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func173() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_20;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(173);
                    var_829 = 1;
                    var_830 = 0;
                    if (var_536 == 1) {
                        if (var_356 == 301) {
                            var_356 = 318;
                        }
                        if (var_356 == 302) {
                            var_356 = 319;
                        }
                        if (var_356 == 303) {
                            var_356 = 320;
                        }
                        if (var_356 == 321) {
                            var_356 = 323;
                        }
                        if (var_356 == 322) {
                            var_356 = 324;
                        }
                        if (var_356 == 325) {
                            var_356 = 326;
                        }
                        if (var_356 == 314) {
                            var_356 = 315;
                        }
                    }
                    return [4 /*yield*/, func177()];
                case 1:
                    _a.sent();
                    if (var_830 != 0) {
                        var_831 = var_830;
                    }
                    var_829 = 0;
                    if (var_356 < 300 && var_356 != 0) {
                        var_832 = var_833 + 1;
                        var_834 = 0;
                        for (cnt2_20 = 0; cnt2_20 < var_832; ++cnt2_20) {
                            if (var_835[cnt2_20] == var_356) {
                                var_834 = 1;
                                break;
                            }
                        }
                        if (var_834 == 0) {
                            var_833 = var_833 + 1;
                            var_835[var_833] = var_356;
                        }
                    }
                    return [4 /*yield*/, func174()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func175()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, func176()];
                case 4:
                    _a.sent();
                    var_836 = var_62;
                    var_837 = current_floor;
                    return [4 /*yield*/, func808()];
                case 5:
                    _a.sent();
                    var_356 = 0;
                    return [4 /*yield*/, func233()];
                case 6:
                    _a.sent();
                    var_205 = 1;
                    return [4 /*yield*/, func231()];
                case 7:
                    _a.sent();
                    onexit(0);
                    var_767 = 1;
                    var_791 = var_790;
                    return [4 /*yield*/, func165()];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// アイテム追加関係？ var_224がある。
function func174() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_118, cnt3_17;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(174);
                    var_838 = 10;
                    var_480 = 1;
                    cnt1_118 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_118 < var_224)) return [3 /*break*/, 10];
                    if (!(var_233[var_480].Var11 != 1)) return [3 /*break*/, 3];
                    item_list = var_233[var_480].Var0;
                    return [4 /*yield*/, func492()];
                case 2:
                    _a.sent();
                    var_482 = 0;
                    var_482 = (var_233[var_480].Var3 + var_233[var_480].Var4) * 50;
                    if (var_233[var_480].Var19 > 1) {
                        var_482 = var_233[var_480].Var19 * 500 + var_482;
                    }
                    var_838 = var_838 + var_483 + var_482;
                    _a.label = 3;
                case 3:
                    if (!(var_233[var_480].Var0 >= 800 && var_233[var_480].Var0 < 900)) return [3 /*break*/, 8];
                    var_484 = 1;
                    var_485 = var_233[var_480].Var6;
                    cnt3_17 = 0;
                    _a.label = 4;
                case 4:
                    if (!(cnt3_17 < 10)) return [3 /*break*/, 8];
                    if (!(var_486[var_485][var_484][0] > 0 && var_486[var_485][var_484][11] != 1)) return [3 /*break*/, 6];
                    item_list = var_486[var_485][var_484][0];
                    return [4 /*yield*/, func492()];
                case 5:
                    _a.sent();
                    var_482 = 0;
                    var_482 = (var_486[var_485][var_484][3] + var_486[var_485][var_484][4]) * 50;
                    if (var_486[var_485][var_484][19] > 1) {
                        var_482 = var_486[var_485][var_484][19] * 500 + var_482;
                    }
                    var_838 = var_838 + var_483 + var_482;
                    _a.label = 6;
                case 6:
                    var_484 = var_484 + 1;
                    _a.label = 7;
                case 7:
                    ++cnt3_17;
                    return [3 /*break*/, 4];
                case 8:
                    var_480 = var_480 + 1;
                    _a.label = 9;
                case 9:
                    ++cnt1_118;
                    return [3 /*break*/, 1];
                case 10:
                    if (current_floor >= 2) {
                        var_838 = current_floor * 2000 + var_838;
                    }
                    var_838 = var_839 * 50 + var_838;
                    var_838 = var_533 + var_838;
                    var_533 = 0;
                    var_839 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
// スコア表示？ gettime等時間に関するものがある
function func175() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(175);
                    var_793 = var_62;
                    if (var_793 == 5) {
                        var_793 = 0;
                    }
                    var_792[var_793][0][0] = var_338;
                    var_792[var_793][0][1] = current_floor;
                    var_792[var_793][0][2] = var_356;
                    var_792[var_793][0][3] = var_838;
                    var_792[var_793][0][4] = 0;
                    var_792[var_793][0][5] = 0;
                    var_792[var_793][0][6] = 0;
                    var_792[var_793][0][7] = 0;
                    var_792[var_793][0][8] = 0;
                    var_792[var_793][0][9] = 0;
                    var_792[var_793][0][10] = 0;
                    var_792[var_793][0][11] = 0;
                    var_792[var_793][0][12] = 0;
                    var_792[var_793][0][13] = var_62;
                    var_792[var_793][0][14] = var_840;
                    var_792[var_793][0][15] = var_352;
                    var_792[var_793][0][16] = var_566;
                    var_792[var_793][0][17] = var_565;
                    var_792[var_793][0][18] = var_567;
                    var_792[var_793][0][50] = gettime(0); // now.getFullYear();// 年（year）。｢20**｣という数値が返る。
                    var_792[var_793][0][51] = gettime(1); // now.getMonth()+1;// 月（month）。「1～12」の範囲の数値が返る。
                    var_792[var_793][0][52] = gettime(3); // now.getDate();// 日（day）。「1～31」の範囲の数値が返る。
                    var_792[var_793][0][19] = 0;
                    if (!(var_357 != 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func426()];
                case 1:
                    _a.sent();
                    var_792[var_793][0][4] = var_357;
                    if (var_233[var_553].Var13 == 1) {
                        var_792[var_793][0][4] = var_357 + 1000;
                    }
                    if (var_233[var_553].Var13 == 2) {
                        var_792[var_793][0][4] = var_357 + 2000;
                    }
                    if (var_233[var_553].Var13 == 3) {
                        var_792[var_793][0][4] = var_357 + 3000;
                    }
                    var_792[var_793][0][5] = var_233[var_553].Var4;
                    var_792[var_793][0][6] = var_233[var_553].Var19;
                    var_792[var_793][0][20] = var_233[var_553].Var20;
                    var_792[var_793][0][21] = var_233[var_553].Var21;
                    var_792[var_793][0][22] = var_233[var_553].Var22;
                    var_792[var_793][0][23] = var_233[var_553].Var23;
                    var_792[var_793][0][24] = var_233[var_553].Var24;
                    var_792[var_793][0][25] = var_233[var_553].Var25;
                    var_792[var_793][0][26] = var_233[var_553].Var26;
                    var_792[var_793][0][27] = var_233[var_553].Var27;
                    var_792[var_793][0][28] = var_233[var_553].Var28;
                    var_792[var_793][0][29] = var_233[var_553].Var29;
                    var_792[var_793][0][53] = var_233[var_553].Var5;
                    var_792[var_793][0][56] = var_233[var_553].Var12;
                    _a.label = 2;
                case 2:
                    if (!(var_358 != 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func427()];
                case 3:
                    _a.sent();
                    var_792[var_793][0][7] = var_358;
                    if (var_233[var_554].Var13 == 1) {
                        var_792[var_793][0][7] = var_358 + 1000;
                    }
                    if (var_233[var_554].Var13 == 2) {
                        var_792[var_793][0][7] = var_358 + 2000;
                    }
                    if (var_233[var_554].Var13 == 3) {
                        var_792[var_793][0][7] = var_358 + 3000;
                    }
                    var_792[var_793][0][8] = var_233[var_554].Var4;
                    var_792[var_793][0][9] = var_233[var_554].Var19;
                    var_792[var_793][0][30] = var_233[var_554].Var20;
                    var_792[var_793][0][31] = var_233[var_554].Var21;
                    var_792[var_793][0][32] = var_233[var_554].Var22;
                    var_792[var_793][0][33] = var_233[var_554].Var23;
                    var_792[var_793][0][34] = var_233[var_554].Var24;
                    var_792[var_793][0][35] = var_233[var_554].Var25;
                    var_792[var_793][0][36] = var_233[var_554].Var26;
                    var_792[var_793][0][37] = var_233[var_554].Var27;
                    var_792[var_793][0][38] = var_233[var_554].Var28;
                    var_792[var_793][0][39] = var_233[var_554].Var29;
                    var_792[var_793][0][54] = var_233[var_554].Var5;
                    var_792[var_793][0][57] = var_233[var_554].Var12;
                    _a.label = 4;
                case 4:
                    if (!(var_215 != 0)) return [3 /*break*/, 6];
                    return [4 /*yield*/, func428()];
                case 5:
                    _a.sent();
                    var_792[var_793][0][10] = var_215;
                    if (var_233[var_555].Var13 == 1) {
                        var_792[var_793][0][10] = var_215 + 1000;
                    }
                    if (var_233[var_555].Var13 == 2) {
                        var_792[var_793][0][10] = var_215 + 2000;
                    }
                    if (var_233[var_555].Var13 == 3) {
                        var_792[var_793][0][10] = var_215 + 3000;
                    }
                    var_792[var_793][0][11] = var_233[var_555].Var4;
                    var_792[var_793][0][12] = var_233[var_555].Var19;
                    var_792[var_793][0][40] = var_233[var_555].Var20;
                    var_792[var_793][0][41] = var_233[var_555].Var21;
                    var_792[var_793][0][42] = var_233[var_555].Var22;
                    var_792[var_793][0][43] = var_233[var_555].Var23;
                    var_792[var_793][0][44] = var_233[var_555].Var24;
                    var_792[var_793][0][45] = var_233[var_555].Var25;
                    var_792[var_793][0][46] = var_233[var_555].Var26;
                    var_792[var_793][0][47] = var_233[var_555].Var27;
                    var_792[var_793][0][48] = var_233[var_555].Var28;
                    var_792[var_793][0][49] = var_233[var_555].Var29;
                    var_792[var_793][0][55] = var_233[var_555].Var5;
                    var_792[var_793][0][58] = var_233[var_555].Var12;
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
function func176() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_119, cnt3_18, cnt3_19;
        return __generator(this, function (_a) {
            dbgprt(176);
            var_789 = 0;
            var_841 = var_792[var_793][0][3];
            var_842 = 0;
            var_843 = 0;
            var_844 = 1;
            var_845 = dim(100);
            for (cnt1_119 = 0; cnt1_119 < 20; ++cnt1_119) {
                var_846 = var_792[var_793][var_843][3];
                var_847 = var_792[var_793][var_844][3];
                if (var_842 == 0 && var_841 > var_847) {
                    var_848 = 0;
                    for (cnt3_18 = 0; cnt3_18 < 70; ++cnt3_18) {
                        var_845[var_848] = var_792[var_793][var_844][var_848];
                        var_792[var_793][var_844][var_848] = var_792[var_793][0][var_848];
                        var_792[var_793][0][var_848] = var_845[var_848];
                        var_848++;
                    }
                    var_788 = var_844;
                    var_842 = 1;
                    var_843 = var_843 + 1;
                    var_844 = var_844 + 1;
                }
                if (var_842 == 1) {
                    var_848 = 0;
                    for (cnt3_19 = 0; cnt3_19 < 70; ++cnt3_19) {
                        var_845[var_848] = var_792[var_793][var_844][var_848];
                        var_792[var_793][var_844][var_848] = var_792[var_793][0][var_848];
                        var_792[var_793][0][var_848] = var_845[var_848];
                        var_848++;
                    }
                }
                var_843 = var_843 + 1;
                var_844 = var_844 + 1;
            }
            if (var_792[var_793][0][3] == var_838) {
                var_789 = 1;
                var_788 = 20;
                var_785 = 4;
            }
            return [2 /*return*/];
        });
    });
}
// 死因原因
function func177() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(177);
            var_849 = "「死因設定なし」で";
            var_790 = 0;
            if (var_356 == 0) {
                var_849 = "不正な処理によって";
            }
            if (var_356 == 1) {
                var_849 = "ﾔｸ中のｺﾞﾛﾂｷに刺されて";
            }
            if (var_356 == 2) {
                var_849 = "ﾇｹｻｸに噛まれて";
            }
            if (var_356 == 3) {
                var_849 = "ﾀﾜｰｵﾌﾞｸﾞﾚｰに舌を抜かれて";
            }
            if (var_356 == 4) {
                var_849 = "ﾃﾞｽ13に胴体真っ二つにされて";
            }
            if (var_356 == 5) {
                var_849 = "小汚い浮浪者に刺されて";
            }
            if (var_356 == 6) {
                var_849 = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙの人形に○○を噛み切られ";
            }
            if (var_356 == 7) {
                var_849 = "運命の車輪にひき肉にしてﾌﾞﾁまけられ";
            }
            if (var_356 == 8) {
                var_849 = "無愛想親父の死体にﾁｭｰﾁｭｰ吸われて";
            }
            if (var_356 == 9) {
                var_849 = "ﾗﾊﾞｰｿｳﾙに口の中にｸｿをつめこまれて";
            }
            if (var_356 == 10) {
                var_849 = "ﾉﾄｰﾘｱｽBIGに喰われて";
            }
            if (var_356 == 11) {
                var_849 = "ﾜｲｱｰﾄﾞのﾍﾞｯｸにお仕置きされて";
            }
            if (var_356 == 12) {
                var_849 = "ｴｺｰｽﾞACT3に殴られて";
            }
            if (var_356 == 13) {
                var_849 = "ﾗﾊﾞｰｽﾞに脳みそをえぐられて";
            }
            if (var_356 == 14) {
                var_849 = "ｶｰﾝにぶった切られて";
            }
            if (var_356 == 15) {
                var_849 = "ﾍﾟｯﾄｼｮｯﾌﾟに喰われて";
            }
            if (var_356 == 16) {
                var_849 = "ﾊｲﾌﾟﾘｴｽﾃｽに引き裂かれて";
            }
            if (var_356 == 17) {
                var_849 = "ｼｱｰﾊｰﾄｱﾀｯｸにｶﾞﾎﾞｵｯと突っ込まれ";
            }
            if (var_356 == 18) {
                var_849 = "ﾌﾞﾗｯｸ･ｻﾊﾞｽに矢で突き刺されて";
            }
            if (var_356 == 19) {
                var_849 = "暑さで おつむがやられちまって";
            }
            if (var_356 == 20) {
                var_849 = "ｴﾝﾔ婆に背骨バキ折られて";
            }
            if (var_356 == 21) {
                var_849 = "ｽﾄﾚｲ･ｷｬｯﾄにひっかかれて";
            }
            if (var_356 == 22) {
                var_849 = "ｱｳﾞﾄﾞｩﾙの土人形に喰われて";
            }
            if (var_356 == 23) {
                var_849 = "ただの死体にやられて";
            }
            if (var_356 == 24) {
                var_849 = "穴ﾎﾞｺﾁｰｽﾞの死体にﾁｭｰﾁｭｰ吸われて";
            }
            if (var_356 == 25) {
                var_849 = "子連れﾆｷﾋﾞの死体にﾁｭｰﾁｭｰ吸われて";
            }
            if (var_356 == 26) {
                var_849 = "ﾊｰｳﾞｪｽﾄに細かくきざまれて";
            }
            if (var_356 == 27) {
                var_849 = "ｹﾞﾌﾞ神に切り裂かれて";
            }
            if (var_356 == 28) {
                var_849 = "ｼﾞｬｯｼﾞﾒﾝﾄに殴られて";
            }
            if (var_356 == 29) {
                var_849 = "ｸﾞﾘｰﾝ･ﾃﾞｨにｶﾋﾞｶﾋﾞにされて";
            }
            if (var_356 == 30) {
                var_849 = "禁煙中ﾎﾙ･ﾎｰｽにｴﾝｽﾞｲ蹴りをくらって";
            }
            if (var_356 == 31) {
                var_849 = "吉良の親父に首を飛ばされて";
            }
            if (var_356 == 32) {
                var_849 = "吉良吉影にドテっ腹に穴をあけられ";
            }
            if (var_356 == 33) {
                var_849 = "ﾄﾆｵさんに石鹸で殴られて";
            }
            if (var_356 == 34) {
                var_849 = "ﾄﾆｵさんに石鹸で殴られて";
            }
            if (var_356 == 35) {
                var_849 = "仗助にドララ―ッと殴られて";
            }
            if (var_356 == 36) {
                var_849 = "ｽﾋﾟｰﾄﾞﾜｺﾞﾝにやられて";
            }
            if (var_356 == 37) {
                var_849 = "猫に引っ掻かれて";
            }
            if (var_356 == 38) {
                var_849 = "ｱﾚｯｼｰに斧で切られて";
            }
            if (var_356 == 39) {
                var_849 = "ﾊｲｳｪｲ･ｽﾀｰに養分を吸い取られ";
            }
            if (var_356 == 40) {
                var_849 = "ﾊﾞｯﾄﾞ･ｶﾝﾊﾟﾆｰにやられて";
            }
            if (var_356 == 41) {
                var_849 = "ﾊﾞｯﾄﾞ･ｶﾝﾊﾟﾆｰの戦車にやられて";
            }
            if (var_356 == 42) {
                var_849 = "ｱﾊﾟｯﾁにやられて";
            }
            if (var_356 == 43) {
                var_849 = "ｾｯｺに溶かされて";
            }
            if (var_356 == 44) {
                var_849 = "ﾚｯﾄﾞﾎｯﾄﾁﾘﾍﾟｯﾊﾟｰに焦がされて";
            }
            if (var_356 == 45) {
                var_849 = "由花子にﾁﾝﾎﾟｺ引っこ抜かれて";
            }
            if (var_356 == 46) {
                var_849 = "ﾎﾙ･ﾎｰｽに脳みそ床にブチ撒けられて";
            }
            if (var_356 == 47) {
                var_849 = "ｻﾞ･ﾊﾝﾄﾞに削り取られて";
            }
            if (var_356 == 48) {
                var_849 = "ｴｱﾛｽﾐｽのﾌﾟﾛﾍﾟﾗに切られて";
            }
            if (var_356 == 49) {
                var_849 = "ｺﾋﾟｰ人形に殴られて";
            }
            if (var_356 == 50) {
                var_849 = "過去のディアボロにやられて";
            }
            if (var_356 == 51) {
                var_849 = "ﾜﾝﾁｪﾝに切り裂かれて";
            }
            if (var_356 == 52) {
                var_849 = "ｼﾞｬｯｸ･ｻﾞ･ﾘﾊﾟｰに切り裂かれて";
            }
            if (var_356 == 53) {
                var_849 = "G･ｴｸｽﾍﾟﾘｴﾝｽの花にやられて";
            }
            if (var_356 == 54) {
                var_849 = "ｸﾞﾘｰﾝﾍﾞﾚｰにｻﾞｸﾞｻﾞｸ刺されて";
            }
            if (var_356 == 55) {
                var_849 = "亀にやられて";
            }
            if (var_356 == 56) {
                var_849 = "ｼｭﾄﾛﾊｲﾑに1ｾﾝﾁ四方の肉片にされて";
            }
            if (var_356 == 57) {
                var_849 = "SPW財団の男にやられて";
            }
            if (var_356 == 58) {
                var_849 = "ﾎﾞｲﾝｺﾞにやられて";
            }
            if (var_356 == 59) {
                var_849 = "ﾌﾟｯﾁ神父に磔刑にされて";
            }
            if (var_356 == 60) {
                var_849 = "ｻﾞ･ﾆｭｰ神父に顔面を切り裂かれて";
            }
            if (var_356 == 61) {
                var_849 = "ﾖｰﾖｰﾏｯの謎の攻撃を喰らって";
            }
            if (var_356 == 62) {
                var_849 = "ﾍﾞｲﾋﾞｨﾌｪｲｽに分解されて";
            }
            if (var_356 == 63) {
                var_849 = "ﾌﾟﾛｼｭｰﾄ兄貴にﾖﾎﾞﾖﾎﾞにされて";
            }
            if (var_356 == 64) {
                var_849 = "ｷﾞｱｯﾁｮに凍らされて";
            }
            if (var_356 == 65) {
                var_849 = "形兆に顔中穴だらけにされて";
            }
            if (var_356 == 66) {
                var_849 = "ﾀﾙｶｽに雑巾絞りにされて";
            }
            if (var_356 == 67) {
                var_849 = "ﾌﾞﾁ切れた億泰に削られて";
            }
            if (var_356 == 68) {
                var_849 = "ﾌﾞﾁ切れた仗助に殴られて";
            }
            if (var_356 == 69) {
                var_849 = "ﾌﾞﾗﾌｫｰﾄﾞの死髪舞剣にやられて";
            }
            if (var_356 == 70) {
                var_849 = "ﾀﾞｰﾋﾞｰにやられて";
            }
            if (var_356 == 71) {
                var_849 = "ﾄﾞｩｰﾋﾞｰの蛇にﾙﾝﾙﾝ噛まれて";
            }
            if (var_356 == 72) {
                var_849 = "ｹﾝｿﾞｰに膨らまされて";
            }
            if (var_356 == 73) {
                var_849 = "かかったなアホが！";
            }
            if (var_356 == 74) {
                var_849 = "ｻｳﾞｪｼﾞｶﾞｰﾃﾞﾝにやられて";
            }
            if (var_356 == 75) {
                var_849 = "鮮血のｼｬﾎﾞﾝにやられて";
            }
            if (var_356 == 76) {
                var_849 = "ｴｺｰｽﾞACT2に吹っ飛ばされて";
            }
            if (var_356 == 77) {
                var_849 = "ｴｺｰｽﾞACT1に鼓膜を破壊され";
            }
            if (var_356 == 78) {
                var_849 = "ｱｳﾞﾄﾞｩﾙさんにケシ炭にされて";
            }
            if (var_356 == 79) {
                var_849 = "ｴｺｰｽﾞの卵にぶつかられて";
            }
            if (var_356 == 80) {
                var_849 = "ﾗﾝｸﾞ･ﾗﾝｸﾞﾗｰに血液沸騰させられて";
            }
            if (var_356 == 81) {
                var_849 = "ｱﾊﾞｯｷｫにやられて";
            }
            if (var_356 == 82) {
                var_849 = "バーテンにやられて";
            }
            if (var_356 == 83) {
                var_849 = "間田にやられて";
            }
            if (var_356 == 84) {
                var_849 = "ﾁｮｺﾗｰﾀに解剖されて";
            }
            if (var_356 == 85) {
                var_849 = "ﾘｿﾞｯﾄに鉄分全部奪われて";
            }
            if (var_356 == 86) {
                var_849 = "ｻﾝﾀﾅに負け犬ムードのまま";
            }
            if (var_356 == 87) {
                var_849 = "ｴｼﾃﾞｨｼにｸﾞﾂｸﾞﾂのｼﾁｭｰにされて";
            }
            if (var_356 == 88) {
                var_849 = "ﾄﾞﾉｳﾞｧﾝに軽々とかわされて";
            }
            if (var_356 == 89) {
                var_849 = "ﾌｫｰｴﾊﾞｰに殴られて";
            }
            if (var_356 == 90) {
                var_849 = "岩にやられて";
            }
            if (var_356 == 91) {
                var_849 = "ACT1のさなぎにやられて";
            }
            if (var_356 == 92) {
                var_849 = "ACT2のさなぎにやられて";
            }
            if (var_356 == 93) {
                var_849 = "ｴﾝﾎﾟﾘｵにやられて";
            }
            if (var_356 == 94) {
                var_849 = "ブルりんの見せ場にされて";
            }
            if (var_356 == 95) {
                var_849 = "あーん！ｽﾄ様にやられて";
            }
            if (var_356 == 96) {
                var_849 = "感電中のｴﾝﾎﾟﾘｵにやられて";
            }
            if (var_356 == 97) {
                var_849 = "ｵｲﾝｺﾞにだまされて";
            }
            if (var_356 == 98) {
                var_849 = "ｴﾝﾎﾟﾘｵ･ｳｪｻﾞｰに頭をブッ潰されて";
            }
            if (var_356 == 99) {
                var_849 = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰにﾌﾜﾌﾜかわされて";
            }
            if (var_356 == 100) {
                var_849 = "家出少女にやられて";
            }
            if (var_356 == 101) {
                var_849 = "ﾍﾟｲｼﾞの血管針攻撃で";
            }
            if (var_356 == 102) {
                var_849 = "ｼﾞｮｰﾝｽﾞの血管針攻撃で";
            }
            if (var_356 == 103) {
                var_849 = "ﾌﾟﾗﾝﾄの血管針攻撃で";
            }
            if (var_356 == 104) {
                var_849 = "ﾎﾞｰﾝﾅﾑの血管針攻撃で";
            }
            if (var_356 == 105) {
                var_849 = "ﾂｪﾍﾟﾘさんにメメタァと殴られて";
            }
            if (var_356 == 106) {
                var_849 = "ﾍﾟｯｼに釣られて";
            }
            if (var_356 == 107) {
                var_849 = "成長したﾍﾟｯｼに心臓を釣られて";
            }
            if (var_356 == 108) {
                var_849 = "イギーに顔面噛み砕かれて";
            }
            if (var_356 == 109) {
                var_849 = "戦闘の天才ということを思い知らされ";
            }
            if (var_356 == 110) {
                var_849 = "カーズにうめき声をあげる暇もなく";
            }
            if (var_356 == 111) {
                var_849 = "究極カーズに手も足も出ず";
            }
            if (var_356 == 112) {
                var_849 = "砂のDIOに背後からやられ";
            }
            if (var_356 == 113) {
                var_849 = "DIOに腹をﾌﾞﾁ抜かれて";
            }
            if (var_356 == 114) {
                var_849 = "最高にﾊｲなDIOの無駄無駄を喰らい";
            }
            if (var_356 == 115) {
                var_849 = "ｱｸｱ･ﾈｯｸﾚｽに体内に入り込まれて";
            }
            if (var_356 == 116) {
                var_849 = "玉美に罪悪感を持って";
            }
            if (var_356 == 117) {
                var_849 = "ﾁｮｺﾗｰﾀの上半身に解剖されて";
            }
            if (var_356 == 118) {
                var_849 = "こなみじんになって";
            }
            if (var_356 == 119) {
                var_849 = "戦いの年季の違いを思い知らされ";
            }
            if (var_356 == 120) {
                var_849 = "承太郎に再起不能にされ";
            }
            if (var_356 == 121) {
                var_849 = "仲直りの握手の代わりを喰らい";
            }
            if (var_356 == 122) {
                var_849 = "ﾎﾟﾙﾅﾚﾌに串刺しにされて";
            }
            if (var_356 == 123) {
                var_849 = "ﾌﾞﾁｬﾗﾃｨにバラバラにされて";
            }
            if (var_356 == 124) {
                var_849 = "ﾐｽﾀに銃で殴られて";
            }
            if (var_356 == 125) {
                var_849 = "ﾌｰｺﾞにｸｻﾚ脳ﾐｿと罵られつつ";
            }
            if (var_356 == 126) {
                var_849 = "退院した花京院に殴られて";
            }
            if (var_356 == 127) {
                var_849 = "C-MOONに裏返させられ";
            }
            if (var_356 == 128) {
                var_849 = "４部承太郎にブン殴られて";
            }
            if (var_356 == 129) {
                var_849 = "ｱﾇﾋﾞｽﾎﾟﾙﾅﾚﾌに切り刻まれ";
            }
            if (var_356 == 130) {
                var_849 = "ﾏﾘﾘﾝﾏﾝｿﾝにやられて";
            }
            if (var_356 == 131) {
                var_849 = "ｼﾞｮﾙﾉに殴られ精神だけ暴走し";
            }
            if (var_356 == 132) {
                var_849 = "ﾚｸｲｴﾑｼﾞｮﾙﾉにまたやられて";
            }
            if (var_356 == 133) {
                var_849 = "ｳﾞｧﾆﾗｱｲｽに蹴り殺されて";
            }
            if (var_356 == 134) {
                var_849 = "ｼﾞｮﾘｰﾝに決着ゥつけられて";
            }
            if (var_356 == 135) {
                var_849 = "若ｼﾞｮｾﾌの策に敗れて";
            }
            if (var_356 == 136) {
                var_849 = "ｼｰｻﾞｰに「波紋蹴り」で攻撃され";
            }
            if (var_356 == 137) {
                var_849 = "成長した吉良に爆死させられ";
            }
            if (var_356 == 138) {
                var_849 = "ﾃﾞｨｵの傷を薫蒸消毒させられ";
            }
            if (var_356 == 139) {
                var_849 = "ｵｰﾉｰだｽﾞﾗ　ﾘｻﾘｻに波紋を流されて";
            }
            if (var_356 == 140) {
                var_849 = "ｼﾞｮﾅｻﾝに貫かれて";
            }
            if (var_356 == 141) {
                var_849 = "F・Fに力ずくでねじふせられ";
            }
            if (var_356 == 142) {
                var_849 = "露伴にやられて";
            }
            if (var_356 == 143) {
                var_849 = "ｳﾝｶﾞﾛに敗れて";
            }
            if (var_356 == 144) {
                var_849 = "川尻浩作に耳だけ残して爆破され";
            }
            if (var_356 == 145) {
                var_849 = "康一に重くさせられて";
            }
            if (var_356 == 146) {
                var_849 = "ﾁｬﾘｵｯﾂの剣さばきを見せられ";
            }
            if (var_356 == 147) {
                var_849 = "四部ｼﾞｮｾﾌにやられて";
            }
            if (var_356 == 148) {
                var_849 = "ｴﾙﾒｪｽにｸﾞﾛﾘｱのぶんも復讐されて";
            }
            if (var_356 == 149) {
                var_849 = "幽霊のﾎﾟﾙﾅﾚﾌにやられて";
            }
            if (var_356 == 150) {
                var_849 = "康一ACT2!!に敗北感を感じて";
            }
            if (var_356 == 151) {
                var_849 = "虫喰いに噛まれて";
            }
            if (var_356 == 152) {
                var_849 = "ﾄﾘｯｼｭに細切れに切り刻まれて";
            }
            if (var_356 == 153) {
                var_849 = "ﾏｯｸｲｨｰﾝに関わって";
            }
            if (var_356 == 154) {
                var_849 = "ｽﾎﾟｰﾂﾏｯｸｽに噛み付かれて";
            }
            if (var_356 == 155) {
                var_849 = "追いつめたつもりが追いつめられて";
            }
            if (var_356 == 156) {
                var_849 = "ｳｪｻﾞｰﾘﾎﾟｰﾄにｳｪｻﾞｰﾘﾎﾟｰﾄで殴られ";
            }
            if (var_356 == 157) {
                var_849 = "ｱﾅｽｲに解体されて";
            }
            if (var_356 == 158) {
                var_849 = "ﾌﾟｯﾂﾝ由花子に荒っぽいことをされて";
            }
            if (var_356 == 159) {
                var_849 = "記憶が戻ったｳｪｻﾞｰに殴られ";
            }
            if (var_356 == 160) {
                var_849 = "ｳｴｽﾄｳｯﾄﾞ看守にキレまくられて";
            }
            if (var_356 == 161) {
                var_849 = "橋沢育郎に殴られて";
            }
            if (var_356 == 162) {
                var_849 = "バオーに触れて";
            }
            if (var_356 == 163) {
                var_849 = "ﾔｸ中の少年にやられて";
            }
            if (var_356 == 164) {
                var_849 = "ｴｼﾃﾞｨｼの脳に憑りつかれて";
            }
            if (var_356 == 165) {
                var_849 = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙに切られて";
            }
            if (var_356 == 166) {
                var_849 = "お母さんヤギに切り裂かれて";
            }
            if (var_356 == 167) {
                var_849 = "ダニーにやられて";
            }
            if (var_356 == 168) {
                var_849 = "ｶﾞﾑを尻の穴につめられて";
            }
            if (var_356 == 169) {
                var_849 = "公一くんにやられて";
            }
            if (var_356 == 170) {
                var_849 = "カタツムリにされて";
            }
            if (var_356 == 171) {
                var_849 = "ワムウの首にやられて";
            }
            if (var_356 == 172) {
                var_849 = "虫喰いでないににこごりにされ";
            }
            if (var_356 == 173) {
                var_849 = "ﾛｯｺ･ﾊﾞﾛｯｺ所長にやられて";
            }
            if (var_356 == 174) {
                var_849 = "ディアボロにやられて";
            }
            if (var_356 == 175) {
                var_849 = "ﾁｬｶにブッた切られて";
            }
            if (var_829 == 1 && var_356 >= 1 && var_356 < 200) {
                var_830 = var_356;
            }
            if (var_356 == 200) {
                var_849 = "便器をなめるように綺麗にさせられ";
            }
            if (var_356 == 201) {
                var_849 = "空腹のため";
            }
            if (var_356 == 202) {
                var_849 = "波紋で溶かされて";
            }
            if (var_356 == 203) {
                var_849 = "ﾉﾄｰﾘｱｽBIGの肉片に喰われて";
                if (var_829 == 1) {
                    var_830 = 10;
                }
            }
            if (var_356 == 204) {
                var_849 = "ﾃﾝﾊﾟﾗﾝｽの肉片に喰われて";
                if (var_829 == 1) {
                    var_830 = 9;
                }
            }
            if (var_356 == 205) {
                var_849 = "運命の車輪にｶﾞｿﾘﾝを撃たれて";
                if (var_829 == 1) {
                    var_830 = 7;
                }
            }
            if (var_356 == 206) {
                var_849 = "氷のﾐｻｲﾙを撃たれて";
                if (var_829 == 1) {
                    var_830 = 15;
                }
            }
            if (var_356 == 207) {
                var_849 = "太陽のﾚｰｻﾞｰに撃たれて";
                if (var_829 == 1) {
                    var_830 = 19;
                }
            }
            if (var_356 == 208) {
                var_849 = "暑さで おつむがやられちまって";
                if (var_829 == 1) {
                    var_830 = 19;
                }
            }
            if (var_356 == 209) {
                var_849 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発して";
                if (var_829 == 1) {
                    var_830 = 17;
                }
            }
            if (var_356 == 210) {
                var_849 = "神砂嵐に巻き込まれて";
            }
            if (var_356 == 211) {
                var_849 = "猫草の空気弾に胸をえぐられて";
                if (var_829 == 1) {
                    var_830 = 21;
                }
            }
            if (var_356 == 212) {
                var_849 = "ﾁｰﾌﾟ･ﾄﾘｯｸのせいで精神が崩壊して";
            }
            if (var_356 == 213) {
                var_849 = "ｱﾚｯｼｰに胎児まで戻されて";
                if (var_829 == 1) {
                    var_830 = 38;
                }
            }
            if (var_356 == 214) {
                var_849 = "由花子の髪の毛を刺されて";
                if (var_829 == 1) {
                    var_830 = 0;
                }
            }
            if (var_356 == 215) {
                var_849 = "ｴﾝﾍﾟﾗｰの弾丸を脳天に喰らって";
                if (var_829 == 1) {
                    var_830 = 46;
                }
            }
            if (var_356 == 216) {
                var_849 = "ｴｱﾛｽﾐｽの弾丸を喰らって";
                if (var_829 == 1) {
                    var_830 = 48;
                }
            }
            if (var_356 == 217) {
                var_849 = "ｷﾗｰｸｨｰﾝの爆弾を喰らって";
                if (var_829 == 1) {
                    var_830 = 0;
                }
            }
            if (var_356 == 218) {
                var_849 = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰの弾丸を喰らって";
                if (var_829 == 1) {
                    var_830 = 40;
                }
            }
            if (var_356 == 219) {
                var_849 = "戦車の砲弾を喰らって";
                if (var_829 == 1) {
                    var_830 = 41;
                }
            }
            if (var_356 == 220) {
                var_849 = "ｱﾊﾟｯﾁのﾐｻｲﾙを喰らって";
                if (var_829 == 1) {
                    var_830 = 42;
                }
            }
            if (var_356 == 221) {
                var_849 = "ｼｭﾄﾛﾊｲﾑに肉片まで細切れにされて";
                if (var_829 == 1) {
                    var_830 = 56;
                }
            }
            if (var_356 == 222) {
                var_849 = "ﾖｰﾖｰﾏｯの謎の攻撃を喰らって";
                if (var_829 == 1) {
                    var_830 = 61;
                }
            }
            if (var_356 == 223) {
                var_849 = "ｼﾞｪﾝﾄﾘｰｳｨｰﾌﾟｽで攻撃を跳ね返され";
                if (var_829 == 1) {
                    var_830 = 64;
                }
            }
            if (var_356 == 224) {
                var_849 = "吹っ飛んだ衝撃で";
            }
            if (var_356 == 225) {
                var_849 = "体内の鉄分が無くなって";
                if (var_829 == 1) {
                    var_830 = 85;
                }
            }
            if (var_356 == 226) {
                var_849 = "壁の中で力尽きて";
            }
            if (var_356 == 227) {
                var_849 = "幽霊の弾丸を喰らって";
                if (var_829 == 1) {
                    var_830 = 93;
                }
            }
            if (var_356 == 228) {
                var_849 = "空烈眼刺驚を喰らって";
                if (var_829 == 1) {
                    var_830 = 95;
                }
            }
            if (var_356 == 229) {
                var_849 = "電気が水に散って";
            }
            if (var_356 == 230) {
                var_849 = "ﾀﾞｲﾊﾞｰﾀﾞｳﾝに殴られて";
            }
            if (var_356 == 231) {
                var_849 = "ﾛｰﾘﾝｸﾞｽﾄｰﾝｽﾞに押しつぶされて";
            }
            if (var_356 == 232) {
                var_849 = "ﾜﾑｳに蹴られて";
            }
            if (var_356 == 233) {
                var_849 = "ﾛｰﾄﾞﾛｰﾗｰにぶっ潰されて";
            }
            if (var_356 == 234) {
                var_849 = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰの地雷を踏んづけて";
            }
            if (var_356 == 235) {
                var_849 = "自分の撃った弾丸があたって";
            }
            if (var_356 == 236) {
                var_849 = "磁力で飛んできた物にあたって";
            }
            if (var_356 == 237) {
                var_849 = "吹き飛ばされた衝撃で";
            }
            if (var_356 == 238) {
                var_849 = "ﾊﾝｸﾞﾄﾞﾏﾝに刺されて";
            }
            if (var_356 == 239) {
                var_849 = "ｴﾒﾗﾙﾄﾞｽﾌﾟﾗｯｼｭを喰らって";
                if (var_829 == 1) {
                    var_830 = 121;
                }
            }
            if (var_356 == 240) {
                var_849 = "ﾋﾟｽﾄﾙｽﾞの弾丸を喰らって";
                if (var_829 == 1) {
                    var_830 = 124;
                }
            }
            if (var_356 == 241) {
                var_849 = "殺人ｳｨﾙｽに感染して";
                if (var_829 == 1) {
                    var_830 = 125;
                }
            }
            if (var_356 == 242) {
                var_849 = "虫喰いのﾗｯﾄの針が刺さって";
                if (var_829 == 1) {
                    var_830 = 151;
                }
            }
            if (var_356 == 243) {
                var_849 = "サソリに刺されて";
                if (var_829 == 1) {
                    var_830 = 132;
                }
            }
            if (var_356 == 244) {
                var_849 = "F・F弾を喰らって";
                if (var_829 == 1) {
                    var_830 = 141;
                }
            }
            if (var_356 == 245) {
                var_849 = "ﾍﾌﾞﾝｽﾞﾄﾞｱｰで自ら吹っ飛んで";
            }
            if (var_356 == 246) {
                var_849 = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰの弾丸を喰らって";
                if (var_829 == 1) {
                    var_830 = 99;
                }
            }
            if (var_356 == 247) {
                var_849 = "首吊り自殺して";
            }
            if (var_356 == 248) {
                var_849 = "爆風のダメージで";
            }
            if (var_356 == 249) {
                var_849 = "アイテムが爆発して";
            }
            if (var_356 == 250) {
                var_849 = "欲張りすぎて";
            }
            if (var_356 == 251) {
                var_849 = "純粋酸素の部屋で";
                if (var_829 == 1) {
                    var_830 = 98;
                }
            }
            if (var_356 == 252) {
                var_849 = "臭くて";
                if (var_829 == 1) {
                    var_830 = 61;
                }
            }
            if (var_356 == 253) {
                var_849 = "道連れにされて";
                if (var_829 == 1) {
                    var_830 = 153;
                }
            }
            if (var_356 == 254) {
                var_849 = "ﾎﾞﾙﾄやﾅｯﾄを喰らって";
                if (var_829 == 1) {
                    var_830 = 155;
                }
            }
            if (var_356 == 255) {
                var_849 = "道連れにされて";
                if (var_829 == 1) {
                    var_830 = 153;
                }
            }
            if (var_356 == 256) {
                var_849 = "憎き肉片に喰われて";
                if (var_829 == 1) {
                    var_830 = 86;
                }
            }
            if (var_356 == 257) {
                var_849 = "隕石が直撃して";
                if (var_829 == 1) {
                    var_830 = 160;
                }
            }
            if (var_356 == 258) {
                var_849 = "レクイエムの能力を解除して";
                var_790 = 2;
            }
            if (var_356 == 259) {
                var_849 = "時の止まった世界でDIOにやられ";
                if (var_829 == 1) {
                    var_830 = 113;
                }
            }
            if (var_356 == 260) {
                var_849 = "ﾔﾄﾞｸｶﾞｴﾙを食べて";
            }
            if (var_356 == 261) {
                var_849 = "ﾗｯﾄの針で溶けて";
            }
            if (var_356 == 262) {
                var_849 = "ズームパンチを喰らって";
                if (var_829 == 1) {
                    var_830 = 140;
                }
            }
            if (var_356 == 263) {
                var_849 = "ｴﾝﾍﾟﾗｰの弾丸を予知通り喰らって";
                if (var_829 == 1) {
                    var_830 = 30;
                }
            }
            if (var_356 == 264) {
                var_849 = "ｼｬﾎﾞﾝﾗﾝﾁｬｰを喰らって";
                if (var_829 == 1) {
                    var_830 = 136;
                }
            }
            if (var_356 == 265) {
                var_849 = "上院議員を喰らって";
                if (var_829 == 1) {
                    var_830 = 113;
                }
            }
            if (var_356 == 266) {
                var_849 = "DISCの命令で破裂して";
            }
            if (var_356 == 267) {
                var_849 = "飛んできたカナヅチにあたって";
            }
            if (var_356 == 268) {
                var_849 = "飛んできたカンヅメにあたって";
            }
            if (var_356 == 269) {
                var_849 = "飛んできたラジカセにあたって";
            }
            if (var_356 == 270) {
                var_849 = "飛んできた刃物が刺さって";
            }
            if (var_356 == 271) {
                var_849 = "飛んできた自転車にあたって";
            }
            if (var_356 == 272) {
                var_849 = "飛んできたアブドゥルにあたって";
            }
            if (var_356 == 273) {
                var_849 = "飛んできた車にあたって";
            }
            if (var_356 == 274) {
                var_849 = "強力なｴﾒﾗﾙﾄﾞｽﾌﾟﾗｯｼｭを喰らって";
                if (var_829 == 1) {
                    var_830 = 126;
                }
            }
            if (var_356 == 275) {
                var_849 = "釣り針が刺さって";
                if (var_829 == 1) {
                    var_830 = 106;
                }
            }
            if (var_356 == 276) {
                var_849 = "釣り針が心臓に刺さって";
                if (var_829 == 1) {
                    var_830 = 107;
                }
            }
            if (var_356 == 277) {
                var_849 = "磁力ではさみうちにされて";
            }
            if (var_356 == 278) {
                var_849 = "エコーズの文字の衝撃で";
                if (var_829 == 1) {
                    var_830 = 76;
                }
            }
            if (var_356 == 279) {
                var_849 = "電話待ってます";
            }
            if (var_356 == 280) {
                var_849 = "先輩が注いでくれたお茶を飲んで";
                if (var_829 == 1) {
                    var_830 = 81;
                }
            }
            if (var_356 == 281) {
                var_849 = "西戸にチェーンで殴られて";
                if (var_829 == 1) {
                    var_830 = 168;
                }
            }
            if (var_356 == 282) {
                var_849 = "血の槍の罠を踏んで";
                if (var_829 == 1) {
                    var_830 = 159;
                }
            }
            if (var_356 == 283) {
                var_849 = "自分でバラバラになって";
            }
            if (var_356 == 284) {
                var_849 = "時の止まった世界でﾊｲなDIOにやられ";
                if (var_829 == 1) {
                    var_830 = 114;
                }
            }
            if (var_356 == 285) {
                var_849 = "ﾀﾞｲﾊﾞｰﾀﾞｳﾝの潜水攻撃を喰らって";
                if (var_829 == 1) {
                    var_830 = 157;
                }
            }
            if (var_356 == 286) {
                var_849 = "虫喰いでないのﾗｯﾄの針が刺さって";
                if (var_829 == 1) {
                    var_830 = 172;
                }
            }
            if (var_356 == 287) {
                var_849 = "ﾁｬｶの透過攻撃でまっぷたつにされて";
                if (var_829 == 1) {
                    var_830 = 175;
                }
            }
            if (var_356 != 73 && var_356 != 279) {
                var_798 = var_849 + "死亡";
            }
            if (var_356 == 73) {
                var_798 = var_849;
            }
            if (var_356 == 279) {
                var_798 = var_849;
            }
            if (var_356 == 300) {
                var_798 = "ダンジョンから帰還";
                var_790 = 1;
            }
            if (var_356 == 301) {
                var_798 = "エンヤホテルを制覇して無事に帰る";
                var_790 = 2;
            }
            if (var_356 == 302) {
                var_798 = "レクイエムの大迷宮を制覇して無事に帰る";
                var_790 = 2;
            }
            if (var_356 == 303) {
                var_798 = "ディアボロの試練を制覇して無事に帰る";
                var_790 = 2;
            }
            if (var_356 == 305) {
                var_798 = "考えるのをやめた";
            }
            if (var_356 == 306) {
                var_798 = "ｳﾞｪﾈﾂｨｱ･ﾎﾃﾙの自室から帰還";
                var_790 = 1;
            }
            if (var_356 == 307) {
                var_798 = "ホテルの外から帰還";
                var_790 = 1;
            }
            if (var_356 == 308) {
                var_798 = "レクイエムの大迷宮から帰還";
                var_790 = 1;
            }
            if (var_356 == 309) {
                var_798 = "ディアボロの試練から帰還";
                var_790 = 1;
            }
            if (var_356 == 310) {
                var_798 = "一巡後の世界から帰還";
                var_790 = 1;
            }
            if (var_356 == 311) {
                var_798 = "ﾑｰﾃﾞｨｰﾌﾞﾙｰｽで帰還";
                var_790 = 1;
            }
            if (var_356 == 312) {
                var_798 = "ｱｲﾃﾑを持ち込まずレクイエムの大迷宮を制覇";
                var_790 = 2;
            }
            if (var_356 == 313) {
                var_798 = "" + var_21 + "から帰還";
                var_790 = 1;
            }
            if (var_356 == 314) {
                var_798 = "" + var_21 + "を制覇して無事に帰る";
                var_790 = 2;
            }
            if (var_356 == 315) {
                var_798 = "協力して" + var_21 + "を制覇";
                var_790 = 2;
            }
            if (var_356 == 318) {
                var_798 = "協力してエンヤホテルを制覇";
                var_790 = 2;
            }
            if (var_356 == 319) {
                var_798 = "協力してレクイエムの大迷宮を制覇";
                var_790 = 2;
            }
            if (var_356 == 320) {
                var_798 = "協力してディアボロの試練を制覇";
                var_790 = 2;
            }
            if (var_356 == 321) {
                var_798 = "虹村屋敷から生還";
                var_790 = 2;
            }
            if (var_356 == 322) {
                var_798 = "吉良屋敷から生還";
                var_790 = 2;
            }
            if (var_356 == 323) {
                var_798 = "協力して虹村屋敷から生還";
                var_790 = 2;
            }
            if (var_356 == 324) {
                var_798 = "協力して吉良屋敷から生還";
                var_790 = 2;
            }
            if (var_356 == 325) {
                var_798 = "杜王町埠頭から生還";
                var_790 = 2;
            }
            if (var_356 == 326) {
                var_798 = "協力して杜王町埠頭から生還";
                var_790 = 2;
            }
            return [2 /*return*/];
        });
    });
}
function func178() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_120;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(178);
                    cnt1_120 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_120 < 50)) return [3 /*break*/, 5];
                    return [4 /*yield*/, wait(3)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func080()];
                case 3:
                    _a.sent();
                    if (var_242 == 0 && var_239 == 0 && var_244 == 0) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    ++cnt1_120;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function func179() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_121;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(179);
                    cnt1_121 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_121 < 50)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func080()];
                case 2:
                    _a.sent();
                    if (var_199 == 6 && var_257 == 0) {
                        return [3 /*break*/, 5];
                    }
                    if (var_199 == 4 && var_254 == 0) {
                        return [3 /*break*/, 5];
                    }
                    if (var_199 == 2 && var_259 == 0) {
                        return [3 /*break*/, 5];
                    }
                    if (var_199 == 8 && var_255 == 0) {
                        return [3 /*break*/, 5];
                    }
                    if (var_199 == 1 && var_258 == 0) {
                        if (var_254 == 0 || var_259 == 0) {
                            return [3 /*break*/, 5];
                        }
                    }
                    if (var_199 == 3 && var_260 == 0) {
                        if (var_257 == 0 || var_259 == 0) {
                            return [3 /*break*/, 5];
                        }
                    }
                    if (var_199 == 7 && var_253 == 0) {
                        if (var_254 == 0 || var_255 == 0) {
                            return [3 /*break*/, 5];
                        }
                    }
                    if (var_199 == 9 && var_256 == 0) {
                        if (var_257 == 0 || var_255 == 0) {
                            return [3 /*break*/, 5];
                        }
                    }
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    ++cnt1_121;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function func180() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(180);
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
                gmode(4, null, null, 80);
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
            return [2 /*return*/];
        });
    });
}
// アイテム追加関係？ var_224がある。
function func181() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_122, cnt4_3, cnt4_4, cnt4_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(181);
                    var_336 = 0;
                    var_852 = 1;
                    cnt1_122 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_122 < 48)) return [3 /*break*/, 11];
                    if (!(var_853[var_852][0] != 0)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func724()];
                case 2:
                    _a.sent();
                    var_447 = var_853[var_852][1];
                    var_449 = var_853[var_852][2];
                    var_77[var_447][var_449] = var_854;
                    var_78[var_854].Var0 = var_853[var_852][0];
                    var_78[var_854].Var1 = var_853[var_852][1];
                    var_78[var_854].Var2 = var_853[var_852][2];
                    var_78[var_854].Var3 = var_853[var_852][3];
                    var_78[var_854].Var4 = var_853[var_852][4];
                    var_78[var_854].Var5 = var_853[var_852][5];
                    var_78[var_854].Var6 = var_853[var_852][6];
                    var_78[var_854].Var7 = var_853[var_852][7];
                    var_78[var_854].Var8 = var_853[var_852][8];
                    if (!(var_78[var_854].Var0 >= 800 && var_78[var_854].Var0 < 900)) return [3 /*break*/, 8];
                    var_855 = dim(100);
                    var_856 = 1;
                    for (cnt4_3 = 0; cnt4_3 < var_224; ++cnt4_3) {
                        if (var_233[var_856].Var0 >= 800 && var_233[var_856].Var0 < 900) {
                            var_857 = var_233[var_856].Var6;
                            var_855[var_857]++;
                        }
                        var_856++;
                    }
                    var_856 = 1;
                    cnt4_4 = 0;
                    _a.label = 3;
                case 3:
                    if (!(cnt4_4 < 49)) return [3 /*break*/, 7];
                    if (!(var_853[var_856][0] >= 800 && var_853[var_856][0] < 900)) return [3 /*break*/, 5];
                    var_857 = var_853[var_856][6];
                    var_855[var_857]++;
                    if (!(var_855[var_857] >= 2)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func395()];
                case 4:
                    _a.sent();
                    var_78[var_854].Var6 = var_858;
                    var_78[var_854].Var7 = var_853[var_852][7] + var_853[var_852][8];
                    var_78[var_854].Var8 = 0;
                    _a.label = 5;
                case 5:
                    var_856++;
                    _a.label = 6;
                case 6:
                    ++cnt4_4;
                    return [3 /*break*/, 3];
                case 7:
                    var_859 = 1;
                    var_860 = var_78[var_854].Var6;
                    for (cnt4_5 = 0; cnt4_5 < 10; ++cnt4_5) {
                        if (var_486[var_860][var_859][0] != 0) {
                            var_486[var_860][var_859][14] = 1;
                            var_861 = var_486[var_860][var_859][0];
                            var_862[var_861][0] = 1;
                        }
                        var_859++;
                    }
                    _a.label = 8;
                case 8:
                    var_78[var_854].Var9 = var_853[var_852][9];
                    var_78[var_854].Var10 = 1;
                    var_78[var_854].Var11 = var_853[var_852][11];
                    var_78[var_854].Var12 = var_853[var_852][12];
                    var_78[var_854].Var13 = var_853[var_852][13];
                    var_78[var_854].Var14 = 1;
                    var_78[var_854].Var15 = var_853[var_852][15];
                    var_78[var_854].Var16 = var_853[var_852][16];
                    var_78[var_854].Var17 = var_853[var_852][17];
                    var_78[var_854].Var18 = var_853[var_852][18];
                    var_78[var_854].Var19 = var_853[var_852][19];
                    var_78[var_854].Var20 = var_853[var_852][20];
                    var_78[var_854].Var21 = var_853[var_852][21];
                    var_78[var_854].Var22 = var_853[var_852][22];
                    var_78[var_854].Var23 = var_853[var_852][23];
                    var_78[var_854].Var24 = var_853[var_852][24];
                    var_78[var_854].Var25 = var_853[var_852][25];
                    var_78[var_854].Var26 = var_853[var_852][26];
                    var_78[var_854].Var27 = var_853[var_852][27];
                    var_78[var_854].Var28 = var_853[var_852][28];
                    var_78[var_854].Var29 = var_853[var_852][29];
                    var_861 = var_78[var_854].Var0;
                    var_862[var_861][0] = 1;
                    var_336++;
                    _a.label = 9;
                case 9:
                    var_852++;
                    _a.label = 10;
                case 10:
                    ++cnt1_122;
                    return [3 /*break*/, 1];
                case 11: return [2 /*return*/];
            }
        });
    });
}
function func182() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_123, cnt2_21;
        return __generator(this, function (_a) {
            dbgprt(182);
            var_863 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_853 = dim(length1 = 50, length2 = 30, length3 = null, length4 = null);
            var_864 = 0;
            var_449 = 1;
            for (cnt1_123 = 0; cnt1_123 < 50; ++cnt1_123) {
                var_447 = 1;
                for (cnt2_21 = 0; cnt2_21 < 50; ++cnt2_21) {
                    if (var_447 >= 10 && var_447 <= 18 && var_449 >= 20 && var_449 <= 27 && var_77[var_447][var_449] > 0) {
                        var_864 = var_864 + 1;
                        var_863[var_447][var_449] = var_864;
                        var_865 = var_864;
                        var_866 = var_77[var_447][var_449];
                        var_853[var_865][0] = var_78[var_866].Var0;
                        var_853[var_865][1] = var_447;
                        var_853[var_865][2] = var_449;
                        var_853[var_865][3] = var_78[var_866].Var3;
                        var_853[var_865][4] = var_78[var_866].Var4;
                        var_853[var_865][5] = var_78[var_866].Var5;
                        var_853[var_865][6] = var_78[var_866].Var6;
                        var_853[var_865][7] = var_78[var_866].Var7;
                        var_853[var_865][8] = var_78[var_866].Var8;
                        var_853[var_865][9] = var_78[var_866].Var9;
                        var_853[var_865][10] = var_78[var_866].Var10;
                        var_853[var_865][11] = var_78[var_866].Var11;
                        var_853[var_865][12] = var_78[var_866].Var12;
                        var_853[var_865][13] = var_78[var_866].Var13;
                        var_853[var_865][14] = var_78[var_866].Var14;
                        var_853[var_865][15] = var_78[var_866].Var15;
                        var_853[var_865][16] = var_78[var_866].Var16;
                        var_853[var_865][17] = var_78[var_866].Var17;
                        var_853[var_865][18] = var_78[var_866].Var18;
                        var_853[var_865][19] = var_78[var_866].Var19;
                        var_853[var_865][20] = var_78[var_866].Var20;
                        var_853[var_865][21] = var_78[var_866].Var21;
                        var_853[var_865][22] = var_78[var_866].Var22;
                        var_853[var_865][23] = var_78[var_866].Var23;
                        var_853[var_865][24] = var_78[var_866].Var24;
                        var_853[var_865][25] = var_78[var_866].Var25;
                        var_853[var_865][26] = var_78[var_866].Var26;
                        var_853[var_865][27] = var_78[var_866].Var27;
                        var_853[var_865][28] = var_78[var_866].Var28;
                        var_853[var_865][29] = var_78[var_866].Var29;
                    }
                    var_447 = var_447 + 1;
                }
                var_449 = var_449 + 1;
            }
            return [2 /*return*/];
        });
    });
}
function func183() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_124;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(183);
                    var_867 = sdim(1000);
                    var_868 = sdim(1000);
                    var_869 = 1;
                    return [4 /*yield*/, func188()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func187()];
                case 2:
                    _a.sent();
                    var_869 = 0;
                    return [4 /*yield*/, func189()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, func190()];
                case 4:
                    _a.sent();
                    var_867 = "1";
                    var_868 = "1";
                    var_870 = 2;
                    for (cnt1_124 = 0; cnt1_124 < 98; ++cnt1_124) {
                        var_867 = var_867 + "\n" + var_870;
                        var_868 = var_868 + "\n" + var_870;
                        var_870++;
                    }
                    screen_(31, 350, 250, 10);
                    title("デバッグウィンドウ");
                    cls(1);
                    objmode(1, 1);
                    font("MS UI ゴシック", 10);
                    color(0, 0, 0);
                    pos(10, 5);
                    mes("階層");
                    pos(90, 5);
                    mes("レベル");
                    pos(10, 45);
                    mes("アイテムリスト");
                    pos(180, 45);
                    mes("所持アイテム");
                    pos(10, 20);
                    combox(var_871, 300, var_867);
                    pos(90, 20);
                    combox(var_872, 200, var_868);
                    pos(10, 60);
                    objsize(150);
                    listbox(var_873, 100, var_874);
                    pos(180, 60);
                    objsize(150);
                    listbox(var_875, 100, var_876);
                    objsize(data0 = 60, data1 = 20);
                    pos(50, 175);
                    button("追加→", func191);
                    pos(220, 175);
                    button("削除", func192);
                    pos(180, 20);
                    button("階移動", func185);
                    pos(250, 20);
                    button("閉じる", func186);
                    pos(10, 200);
                    objsize(data0 = 100, data1 = 20);
                    chkbox("助っ人", var_877);
                    pos(115, 200);
                    objsize(data0 = 110, data1 = 20);
                    chkbox("未識別", var_878);
                    pos(240, 200);
                    objsize(100);
                    combox(var_879, 100, "スタンド色\n0\n1\n2\n3");
                    return [2 /*return*/];
            }
        });
    });
}
function func184() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(184);
                    var_869 = 1;
                    return [4 /*yield*/, func187()];
                case 1:
                    _a.sent();
                    var_869 = 0;
                    gsel(31, 1);
                    objprm(3, var_876); // アイテム欄行更新 var_876はアイテム欄の行に格納されているアイテム(表示のみ)
                    stop();
                    return [2 /*return*/];
            }
        });
    });
}
function func185() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_125;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(185);
                    current_floor = var_871 + 1;
                    var_840 = var_872 + 1;
                    if (var_840 > 99) {
                        var_840 = 99;
                    }
                    if (var_840 <= 1) {
                        var_840 = 1;
                    }
                    if (current_floor <= 1) {
                        current_floor = 1;
                    }
                    var_352 = var_840 * 4 + 15;
                    var_211 = var_352;
                    var_94 = var_880;
                    if (var_62 == 0) {
                        var_62 = 1;
                    }
                    var_262 = 0;
                    var_595 = 0;
                    gsel(window_id = 31, window_mode = -1);
                    gsel(0, 1);
                    return [4 /*yield*/, func076()];
                case 1:
                    _a.sent();
                    cnt1_125 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_125 < 80)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func339()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    ++cnt1_125;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, func006()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func186() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(186);
                    gsel(window_id = 31, window_mode = -1);
                    gsel(0, 1);
                    return [4 /*yield*/, func009()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// アイテム追加関係？ var_224がある。
function func187() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_126;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(187);
                    var_876 = sdim(10000);
                    var_876 = "";
                    var_883 = 1;
                    cnt1_126 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_126 < var_224)) return [3 /*break*/, 4];
                    item_list = var_233[var_883].Var0;
                    return [4 /*yield*/, func492()];
                case 2:
                    _a.sent();
                    var_876 = var_876 + "\n" + item_name;
                    var_883 = var_883 + 1;
                    _a.label = 3;
                case 3:
                    ++cnt1_126;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function func188() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_127;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(188);
                    var_874 = sdim(10000);
                    var_884 = dim(10000);
                    var_874 = "アイテム";
                    var_883 = 1;
                    var_885 = 1;
                    cnt1_127 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_127 < 1000)) return [3 /*break*/, 4];
                    item_list = var_883;
                    return [4 /*yield*/, func492()];
                case 2:
                    _a.sent();
                    if (var_483 != 0) {
                        var_874 = var_874 + "\n" + "" + item_name;
                        var_884[var_885] = item_list;
                        var_885 = var_885 + 1;
                    }
                    var_883 = var_883 + 1;
                    _a.label = 3;
                case 3:
                    ++cnt1_127;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function func189() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_128;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(189);
                    var_886 = sdim(10000);
                    var_886 = "罠";
                    var_887 = 1;
                    cnt1_128 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_128 < 30)) return [3 /*break*/, 4];
                    var_888 = var_887;
                    return [4 /*yield*/, func554()];
                case 2:
                    _a.sent();
                    var_886 = var_886 + "\n" + var_888 + " " + var_889;
                    var_887 = var_887 + 1;
                    _a.label = 3;
                case 3:
                    ++cnt1_128;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function func190() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_129;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(190);
                    var_890 = sdim(10000);
                    var_890 = "敵";
                    var_887 = 1;
                    cnt1_129 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_129 < 100)) return [3 /*break*/, 4];
                    var_437 = var_887;
                    return [4 /*yield*/, func626()];
                case 2:
                    _a.sent();
                    var_890 = var_890 + "\n" + var_437 + " " + var_891;
                    var_887 = var_887 + 1;
                    _a.label = 3;
                case 3:
                    ++cnt1_129;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// アイテム追加関係？ var_224がある。
function func191() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(191);
                    if (var_873 <= 0) {
                        stop();
                    }
                    if (var_224 >= 20) {
                        stop();
                    }
                    var_224 = var_224 + 1;
                    var_233[var_224].Var0 = var_884[var_873];
                    var_892 = var_233[var_224].Var0;
                    if (var_233[var_224].Var0 >= 100 && var_233[var_224].Var0 < 400) {
                        var_233[var_224].Var16 = 10;
                        var_233[var_224].Var14 = 1;
                        var_233[var_224].Var5 = 5;
                        var_233[var_224].Var19 = 1;
                    }
                    var_233[var_224].Var20 = var_233[var_224].Var0;
                    if (var_892 >= 400 && var_892 < 500) {
                        var_233[var_224].Var3 = 10;
                    }
                    if (var_878 == 1) {
                        var_862[var_892][0] = 0;
                    }
                    if (var_878 == 0) {
                        var_862[var_892][0] = 1;
                    }
                    if (var_233[var_224].Var0 == 122 || var_233[var_224].Var0 == 200 || var_233[var_224].Var0 == 311 || var_233[var_224].Var0 == 310) {
                        var_233[var_224].Var12 = 1;
                    }
                    if (var_233[var_224].Var0 >= 100 && var_233[var_224].Var0 < 400) {
                        if (var_879 == 0) {
                            var_233[var_224].Var13 = 0;
                        }
                        if (var_879 == 1) {
                            var_233[var_224].Var13 = 0;
                        }
                        if (var_879 == 2) {
                            var_233[var_224].Var13 = 1;
                        }
                        if (var_879 == 3) {
                            var_233[var_224].Var13 = 2;
                        }
                        if (var_879 == 4) {
                            var_233[var_224].Var13 = 3;
                        }
                    }
                    if (!(var_233[var_224].Var0 >= 800 && var_233[var_224].Var0 < 900)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func395()];
                case 1:
                    _a.sent();
                    var_233[var_224].Var6 = var_858;
                    var_233[var_224].Var7 = 6;
                    if (var_233[var_224].Var0 == 802) {
                        var_233[var_224].Var7 = 10;
                    }
                    var_233[var_224].Var8 = 0;
                    if (var_233[var_224].Var0 == 851) {
                        var_233[var_224].Var7 = var_233[var_224].Var7 - 1;
                        var_233[var_224].Var8 = 1;
                        var_893 = rnd(2);
                        if (var_893 == 0) {
                            var_486[var_858][1][15] = 37;
                        }
                        if (var_893 == 1) {
                            var_486[var_858][1][15] = 48;
                        }
                    }
                    _a.label = 2;
                case 2:
                    var_869 = 1;
                    return [4 /*yield*/, func187()];
                case 3:
                    _a.sent();
                    var_869 = 0;
                    objprm(3, var_876); // アイテム欄行更新 var_876はアイテム欄の行に格納されているアイテム(表示のみ)
                    stop();
                    return [2 /*return*/];
            }
        });
    });
}
// アイテム追加関係？ var_224がある。
function func192() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(192);
                    if (var_875 <= 0) {
                        stop();
                    }
                    if (var_875 > var_224) {
                        stop();
                    }
                    var_476 = dim(40);
                    var_580 = var_580 - var_894;
                    var_894 = 0;
                    var_357 = 0;
                    var_477 = dim(40);
                    var_581 = var_581 - var_895;
                    var_895 = 0;
                    var_358 = 0;
                    var_479 = dim(40);
                    var_250 = 0;
                    var_410 = 0;
                    var_478 = dim(40);
                    var_215 = 0;
                    var_896 = 0;
                    var_897 = 0;
                    var_898 = 0;
                    var_225 = var_875;
                    item_list = var_233[var_875].Var0;
                    return [4 /*yield*/, func433()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func494()];
                case 2:
                    _a.sent();
                    var_869 = 1;
                    return [4 /*yield*/, func187()];
                case 3:
                    _a.sent();
                    var_869 = 0;
                    objprm(3, var_876); // アイテム欄行更新 var_876はアイテム欄の行に格納されているアイテム(表示のみ)
                    stop();
                    return [2 /*return*/];
            }
        });
    });
}
function func193() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(193);
                    return [4 /*yield*/, func337()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func080()];
                case 2:
                    _a.sent();
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 23];
                    DSPLAY(audio_id = 212);
                    if (!(var_899 == 0)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func051()];
                case 3:
                    _a.sent();
                    var_900 = 1;
                    return [4 /*yield*/, func194()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
                case 5:
                    if (!(var_899 == 1)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func051()];
                case 6:
                    _a.sent();
                    var_901 = 1;
                    return [4 /*yield*/, func202()];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
                case 8:
                    if (!(var_899 == 2)) return [3 /*break*/, 11];
                    return [4 /*yield*/, func051()];
                case 9:
                    _a.sent();
                    var_902 = 1;
                    return [4 /*yield*/, func208()];
                case 10:
                    _a.sent();
                    return [2 /*return*/];
                case 11:
                    if (!(var_899 == 3)) return [3 /*break*/, 14];
                    return [4 /*yield*/, func051()];
                case 12:
                    _a.sent();
                    var_903 = 1;
                    return [4 /*yield*/, func215()];
                case 13:
                    _a.sent();
                    return [2 /*return*/];
                case 14:
                    if (!(var_899 == 4)) return [3 /*break*/, 17];
                    return [4 /*yield*/, func051()];
                case 15:
                    _a.sent();
                    var_904 = 1;
                    return [4 /*yield*/, func205()];
                case 16:
                    _a.sent();
                    return [2 /*return*/];
                case 17:
                    if (!(var_899 == 5)) return [3 /*break*/, 20];
                    return [4 /*yield*/, func051()];
                case 18:
                    _a.sent();
                    var_905 = 1;
                    return [4 /*yield*/, func198()];
                case 19:
                    _a.sent();
                    return [2 /*return*/];
                case 20:
                    if (!(var_899 == 6 && var_62 != 99 && var_637 == 0)) return [3 /*break*/, 23];
                    return [4 /*yield*/, func051()];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, func925()];
                case 22:
                    _a.sent();
                    return [2 /*return*/];
                case 23:
                    if (!(var_239 == 1)) return [3 /*break*/, 26];
                    DSPLAY(audio_id = 212);
                    var_509 = 0;
                    return [4 /*yield*/, func051()];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, func055()];
                case 25:
                    _a.sent();
                    return [2 /*return*/];
                case 26:
                    if (!(var_255 == 1)) return [3 /*break*/, 54];
                    if (!(var_899 == 0)) return [3 /*break*/, 30];
                    var_899 = 6;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 27:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 28:
                    _a.sent();
                    return [4 /*yield*/, func193()];
                case 29:
                    _a.sent();
                    return [2 /*return*/];
                case 30:
                    if (!(var_899 == 1)) return [3 /*break*/, 34];
                    var_899 = 0;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 31:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 32:
                    _a.sent();
                    return [4 /*yield*/, func193()];
                case 33:
                    _a.sent();
                    return [2 /*return*/];
                case 34:
                    if (!(var_899 == 2)) return [3 /*break*/, 38];
                    var_899 = 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 35:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 36:
                    _a.sent();
                    return [4 /*yield*/, func193()];
                case 37:
                    _a.sent();
                    return [2 /*return*/];
                case 38:
                    if (!(var_899 == 3)) return [3 /*break*/, 42];
                    var_899 = 2;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 39:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 40:
                    _a.sent();
                    return [4 /*yield*/, func193()];
                case 41:
                    _a.sent();
                    return [2 /*return*/];
                case 42:
                    if (!(var_899 == 4)) return [3 /*break*/, 46];
                    var_899 = 3;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 43:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 44:
                    _a.sent();
                    return [4 /*yield*/, func193()];
                case 45:
                    _a.sent();
                    return [2 /*return*/];
                case 46:
                    if (!(var_899 == 5)) return [3 /*break*/, 50];
                    var_899 = 4;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 47:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 48:
                    _a.sent();
                    return [4 /*yield*/, func193()];
                case 49:
                    _a.sent();
                    return [2 /*return*/];
                case 50:
                    if (!(var_899 == 6)) return [3 /*break*/, 54];
                    var_899 = 5;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 51:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 52:
                    _a.sent();
                    return [4 /*yield*/, func193()];
                case 53:
                    _a.sent();
                    return [2 /*return*/];
                case 54:
                    if (!(var_259 == 1)) return [3 /*break*/, 82];
                    if (!(var_899 == 6)) return [3 /*break*/, 58];
                    var_899 = 0;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 55:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 56:
                    _a.sent();
                    return [4 /*yield*/, func193()];
                case 57:
                    _a.sent();
                    return [2 /*return*/];
                case 58:
                    if (!(var_899 == 5)) return [3 /*break*/, 62];
                    var_899 = 6;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 59:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 60:
                    _a.sent();
                    return [4 /*yield*/, func193()];
                case 61:
                    _a.sent();
                    return [2 /*return*/];
                case 62:
                    if (!(var_899 == 4)) return [3 /*break*/, 66];
                    var_899 = 5;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 63:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 64:
                    _a.sent();
                    return [4 /*yield*/, func193()];
                case 65:
                    _a.sent();
                    return [2 /*return*/];
                case 66:
                    if (!(var_899 == 3)) return [3 /*break*/, 70];
                    var_899 = 4;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 67:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 68:
                    _a.sent();
                    return [4 /*yield*/, func193()];
                case 69:
                    _a.sent();
                    return [2 /*return*/];
                case 70:
                    if (!(var_899 == 2)) return [3 /*break*/, 74];
                    var_899 = 3;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 71:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 72:
                    _a.sent();
                    return [4 /*yield*/, func193()];
                case 73:
                    _a.sent();
                    return [2 /*return*/];
                case 74:
                    if (!(var_899 == 1)) return [3 /*break*/, 78];
                    var_899 = 2;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 75:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 76:
                    _a.sent();
                    return [4 /*yield*/, func193()];
                case 77:
                    _a.sent();
                    return [2 /*return*/];
                case 78:
                    if (!(var_899 == 0)) return [3 /*break*/, 82];
                    var_899 = 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 79:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 80:
                    _a.sent();
                    return [4 /*yield*/, func193()];
                case 81:
                    _a.sent();
                    return [2 /*return*/];
                case 82: return [4 /*yield*/, func193()];
                case 83:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func194() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(194);
                    if (var_686 == 30) {
                        var_906 = 0;
                    }
                    if (var_686 == 40) {
                        var_906 = 1;
                    }
                    if (var_686 == 50) {
                        var_906 = 2;
                    }
                    if (var_686 == 60) {
                        var_906 = 3;
                    }
                    if (var_686 == 70) {
                        var_906 = 4;
                    }
                    return [4 /*yield*/, func195()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func195() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(195);
                    return [4 /*yield*/, func337()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func080()];
                case 2:
                    _a.sent();
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 5];
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func051()];
                case 3:
                    _a.sent();
                    bsave(file_name = "00.dat", data = var_686, data_size = null, offset = 0);
                    var_900 = 0;
                    return [4 /*yield*/, func193()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
                case 5:
                    if (!(var_239 == 1)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func051()];
                case 6:
                    _a.sent();
                    var_900 = 0;
                    return [4 /*yield*/, func193()];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
                case 8:
                    if (!(var_255 == 1)) return [3 /*break*/, 23];
                    if (!(var_906 == 0)) return [3 /*break*/, 11];
                    var_906 = 0;
                    var_686 = 30;
                    return [4 /*yield*/, func337()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    if (!(var_906 == 1)) return [3 /*break*/, 14];
                    var_906 = 0;
                    var_686 = 30;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 13:
                    _a.sent();
                    _a.label = 14;
                case 14:
                    if (!(var_906 == 2)) return [3 /*break*/, 17];
                    var_906 = 1;
                    var_686 = 40;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 16:
                    _a.sent();
                    _a.label = 17;
                case 17:
                    if (!(var_906 == 3)) return [3 /*break*/, 20];
                    var_906 = 2;
                    var_686 = 50;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 19:
                    _a.sent();
                    _a.label = 20;
                case 20:
                    if (!(var_906 == 4)) return [3 /*break*/, 23];
                    var_906 = 3;
                    var_686 = 60;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 22:
                    _a.sent();
                    _a.label = 23;
                case 23:
                    if (!(var_259 == 1)) return [3 /*break*/, 38];
                    if (!(var_906 == 4)) return [3 /*break*/, 26];
                    var_906 = 4;
                    var_686 = 70;
                    return [4 /*yield*/, func337()];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 25:
                    _a.sent();
                    _a.label = 26;
                case 26:
                    if (!(var_906 == 3)) return [3 /*break*/, 29];
                    var_906 = 4;
                    var_686 = 70;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 27:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 28:
                    _a.sent();
                    _a.label = 29;
                case 29:
                    if (!(var_906 == 2)) return [3 /*break*/, 32];
                    var_906 = 3;
                    var_686 = 60;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 30:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 31:
                    _a.sent();
                    _a.label = 32;
                case 32:
                    if (!(var_906 == 1)) return [3 /*break*/, 35];
                    var_906 = 2;
                    var_686 = 50;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 33:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 34:
                    _a.sent();
                    _a.label = 35;
                case 35:
                    if (!(var_906 == 0)) return [3 /*break*/, 38];
                    var_906 = 1;
                    var_686 = 40;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 36:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 37:
                    _a.sent();
                    _a.label = 38;
                case 38: return [4 /*yield*/, func195()];
                case 39:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ゲームスピード設定項目
function func196() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(196);
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(42, 137);
            gcopy(12, 0, 0, 113, 123);
            color(255, 255, 255);
            line(45, 139, 150, 139);
            line(45, 256, 150, 256);
            line(44, 140, 44, 254);
            line(152, 140, 152, 254);
            pset(45, 140);
            pset(151, 140);
            pset(45, 255);
            pset(151, 255);
            font("ＭＳ　Ｐゴシック", 16, 1);
            color(255, 255, 255);
            pos(85, 150);
            mes("超速");
            pos(85, 170);
            mes("速い");
            pos(85, 190);
            mes("標準");
            pos(85, 210);
            mes("遅い");
            pos(85, 230);
            mes("超遅");
            if (var_906 == 0) {
                pos(50, 147);
            }
            if (var_906 == 1) {
                pos(50, 167);
            }
            if (var_906 == 2) {
                pos(50, 187);
            }
            if (var_906 == 3) {
                pos(50, 207);
            }
            if (var_906 == 4) {
                pos(50, 227);
            }
            gmode(2);
            gcopy(8, 70, 50, 25, 20);
            return [2 /*return*/];
        });
    });
}
function func197() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(197);
            var_907 = 20;
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(107, 70);
            gcopy(12, 0, 0, 200, 153 + var_907);
            color(255, 255, 255);
            if (var_900 == 1 || var_901 == 1 || var_902 == 1 || var_903 == 1 || var_904 == 1 || var_905 == 1) {
                color(150, 150, 150);
            }
            line(110, 71, 303, 71);
            line(110, 219 + var_907, 303, 219 + var_907);
            line(109, 72, 109, 217 + var_907);
            line(305, 72, 305, 217 + var_907);
            pset(110, 72);
            pset(304, 72);
            pset(110, 218 + var_907);
            pset(304, 218 + var_907);
            font("ＭＳ　Ｐゴシック", 16, 1);
            color(255, 255, 255);
            if (var_900 == 1 || var_901 == 1 || var_902 == 1 || var_903 == 1 || var_904 == 1 || var_905 == 1) {
                color(150, 150, 150);
            }
            pos(145, 90);
            mes("ゲームスピード");
            pos(145, 110);
            mes("メッセージ色");
            pos(145, 130);
            mes("キーコンフィグ");
            pos(145, 150);
            mes("ゲームパッド");
            pos(145, 170);
            mes("画面サイズ");
            pos(145, 190);
            mes("マップ色変更");
            if (var_62 == 99 || var_637 != 0) {
                color(150, 150, 150); //灰色
            }
            pos(145, 210);
            mes("通信モード");
            color(255, 255, 255);
            if (var_900 == 1 || var_901 == 1 || var_902 == 1 || var_903 == 1 || var_904 == 1 || var_905 == 1) {
                color(150, 150, 150); //灰色
            }
            pos(265, 90);
            if (var_686 == 30) {
                mes("超速");
            }
            if (var_686 == 40) {
                mes("速い");
            }
            if (var_686 == 50) {
                mes("標準");
            }
            if (var_686 == 60) {
                mes("遅い");
            }
            if (var_686 == 70) {
                mes("超遅");
            }
            color(255, 255, 255);
            if (var_62 == 99) {
                color(150, 150, 150); //灰色
            }
            if (var_900 == 1 || var_901 == 1 || var_902 == 1 || var_903 == 1 || var_904 == 1 || var_905 == 1) {
                color(150, 150, 150); //灰色
            }
            pos(265, 210);
            if (var_407 == 0) {
                mes("OFF");
            }
            if (var_407 == 1) {
                mes("ON");
            }
            color(255, 255, 255);
            if (var_899 == 0) {
                pos(112, 87);
            }
            if (var_899 == 1) {
                pos(112, 107);
            }
            if (var_899 == 2) {
                pos(112, 127);
            }
            if (var_899 == 3) {
                pos(112, 147);
            }
            if (var_899 == 4) {
                pos(112, 167);
            }
            if (var_899 == 5) {
                pos(112, 187);
            }
            if (var_899 == 6) {
                pos(112, 207);
            }
            gmode(2);
            if (var_900 == 0) {
                gcopy(8, 70, 50, 25, 20);
            }
            return [2 /*return*/];
        });
    });
}
function func198() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(198);
                    var_908 = 0;
                    return [4 /*yield*/, func199()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func199() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(199);
                    return [4 /*yield*/, func337()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func080()];
                case 2:
                    _a.sent();
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 15];
                    DSPLAY(audio_id = 212);
                    if (!(var_908 == 0)) return [3 /*break*/, 8];
                    dialog("", 32);
                    if (!(stat == 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func199()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
                case 4:
                    var_25[13] = ginfo(16);
                    var_26[13] = ginfo(17);
                    var_27[13] = ginfo(18);
                    var_687 = ginfo(16);
                    var_688 = ginfo(17);
                    var_689 = ginfo(18);
                    return [4 /*yield*/, func331()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, func199()];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
                case 8:
                    if (!(var_908 == 1)) return [3 /*break*/, 11];
                    var_909 = 1;
                    return [4 /*yield*/, func051()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, func201()];
                case 10:
                    _a.sent();
                    return [2 /*return*/];
                case 11:
                    if (!(var_908 == 2)) return [3 /*break*/, 15];
                    var_25[13] = 0;
                    var_26[13] = 0;
                    var_27[13] = 255;
                    var_687 = 0;
                    var_688 = 0;
                    var_689 = 255;
                    var_690 = 60;
                    var_25[14] = var_690;
                    return [4 /*yield*/, func331()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, func199()];
                case 14:
                    _a.sent();
                    return [2 /*return*/];
                case 15:
                    if (!(var_239 == 1)) return [3 /*break*/, 18];
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func051()];
                case 16:
                    _a.sent();
                    var_905 = 0;
                    bsave(file_name = "00.dat", data = var_25, data_size = null, offset = 200);
                    bsave(file_name = "00.dat", data = var_26, data_size = null, offset = 300);
                    bsave(file_name = "00.dat", data = var_27, data_size = null, offset = 400);
                    return [4 /*yield*/, func193()];
                case 17:
                    _a.sent();
                    return [2 /*return*/];
                case 18:
                    if (!(var_255 == 1)) return [3 /*break*/, 26];
                    DSPLAY(audio_id = 100);
                    if (!(var_908 == 0)) return [3 /*break*/, 22];
                    var_908 = 2;
                    return [4 /*yield*/, func337()];
                case 19:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 20:
                    _a.sent();
                    return [4 /*yield*/, func199()];
                case 21:
                    _a.sent();
                    return [2 /*return*/];
                case 22:
                    if (!(var_908 != 0)) return [3 /*break*/, 26];
                    var_908 = var_908 - 1;
                    return [4 /*yield*/, func337()];
                case 23:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, func199()];
                case 25:
                    _a.sent();
                    return [2 /*return*/];
                case 26:
                    if (!(var_259 == 1)) return [3 /*break*/, 34];
                    DSPLAY(audio_id = 100);
                    if (!(var_908 == 2)) return [3 /*break*/, 30];
                    var_908 = 0;
                    return [4 /*yield*/, func337()];
                case 27:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 28:
                    _a.sent();
                    return [4 /*yield*/, func199()];
                case 29:
                    _a.sent();
                    return [2 /*return*/];
                case 30:
                    if (!(var_908 != 2)) return [3 /*break*/, 34];
                    var_908 = var_908 + 1;
                    return [4 /*yield*/, func337()];
                case 31:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 32:
                    _a.sent();
                    return [4 /*yield*/, func199()];
                case 33:
                    _a.sent();
                    return [2 /*return*/];
                case 34: return [4 /*yield*/, func199()];
                case 35:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=func1.js.map