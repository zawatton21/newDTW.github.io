function func100(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(100);
        se_file_name = 171;
        if (var_488 >= 100 && var_488 < 500) {
            se_file_name = 171;
        }
        if (var_488 == 800) {
            se_file_name = 203;
        }
        if (var_488 >= 750 && var_488 < 800) {
            se_file_name = 203;
        }
        if (var_488 >= 900 && var_488 < 1000) {
            se_file_name = 203;
        }
        if (var_488 >= 805 && var_488 <= 809) {
            se_file_name = 204;
        }
        if (var_488 == 854) {
            se_file_name = 204;
        }
        if (var_488 == 850 || var_488 == 851) {
            se_file_name = 205;
        }
        DSPLAY(audio_id = se_file_name);
        var_488 = 0;
        return;
    });
}

// BGM再生リスト
function func101(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(101);
        if (bgm_list_id == 0) {
            bgm_file_name = "0.mp3"; // ダンジョン基本BGM
        }
        if (bgm_list_id == 100) {
            bgm_file_name = "116.mp3"; //ハーミットパープル
            bgm_title = "The Beatles [Get Back]";
        }
        if (bgm_list_id == 101) {
            bgm_file_name = "101.mp3";
            bgm_title = "Michel Polnareff [Tout tout pour ma cherie]";
        }
        if (bgm_list_id == 102) {
            bgm_file_name = "099.mp3";
            bgm_title = "King Crimson [RED]";
        }
        if (bgm_list_id == 103) {
            bgm_file_name = "103.mp3";
            bgm_title = "Pink Floyd [Echoes]";
        }
        if (bgm_list_id == 104) {
            bgm_file_name = "104.mp3";
            bgm_title = "The Band [The Night They Drove Old Dixie Down]";
        }
        if (bgm_list_id == 105) {
            bgm_file_name = "105.mp3";
            bgm_title = "Red Hot Chili Peppers [Give It Away]";
        }
        if (bgm_list_id == 106) {
            bgm_file_name = "106.mp3";
            bgm_title = "Pink Floyd [Shine on You Crasy Diamond]";
        }
        if (bgm_list_id == 107) {
            bgm_file_name = "107.mp3";
            bgm_title = "The Beatles [Good Night]";
        }
        if (bgm_list_id == 108) {
            bgm_file_name = "108.mp3";
            bgm_title = "The Rolling Stones [Brown Sugar] (album[Sticky Fingers])";
        }
        if (bgm_list_id == 109) {
            bgm_file_name = "109.mp3";
            bgm_title = "Paula Abdul [Forever Your Girl]";
        }
        if (bgm_list_id == 110) {  // Ver0.1401にて追加。B･D･ザ･ハウスのDISC
            bgm_file_name = "";
            bgm_title = "";
        }
        if (bgm_list_id == 111) {
            bgm_file_name = "111.mp3";
            bgm_title = "DIO [I Speed At Night]";
        }
        if (bgm_list_id == 112) {
            bgm_file_name = "112.mp3";
            bgm_title = "Queen [Killer Queen]";
        }
        if (bgm_list_id == 113) {
            bgm_file_name = "113.mp3";
            bgm_title = "The Clash [Rock The Casbah]";
        }
        if (bgm_list_id == 114) {
            bgm_file_name = "114.mp3";
            bgm_title = "White Snake [Love Aint No Stranger]";
        }
        if (bgm_list_id == 115) {
            bgm_file_name = "115.mp3";
            bgm_title = "Prince [Gold](album[Gold Experience])";
        }
        if (bgm_list_id == 116) {
            bgm_file_name = "116.mp3";
            bgm_title = "The Beatles [Get Back]";
        }
        if (bgm_list_id == 117) {
            bgm_file_name = "117.mp3";
            bgm_title = "Captain & Tennille [Love Will Keep Us Together]";
        }
        if (bgm_list_id == 118) {
            bgm_file_name = "118.mp3";
            bgm_title = "Van Halen [Pretty Woman](album[DIVER DOWN])";
        }
        if (bgm_list_id == 119) {
            bgm_file_name = "119.mp3";
            bgm_title = "Spice Girls [Wannabe]";
        }
        if (bgm_list_id == 120) {
            bgm_file_name = "120.mp3";
            bgm_title = "Dolly Parton [Jolene]";
        }
        if (bgm_list_id == 121) {
            bgm_file_name = "121.mp3";
            bgm_title = "JIMI HENDRIX [Purple Haze]";
        }
        if (bgm_list_id == 122) {
            bgm_file_name = "122.mp3";
            bgm_title = "Chaka Khan [Aint Nobody]";
        }
        if (bgm_list_id == 123) {
            bgm_file_name = "123.mp3";
            bgm_title = "Cream [Crossroads]";
        }
        if (bgm_list_id == 124) {
            bgm_file_name = "124.mp3";
            bgm_title = "Moody Blues [I Know Your Out There Somewhere]";
        }
        if (bgm_list_id == 200) {
            bgm_file_name = "200.mp3";
            bgm_title = "Curtis Mayfield [Superfly]";
        }
        if (bgm_list_id == 201) {
            bgm_file_name = "201.mp3";
            bgm_title = "The Beatles [Girl] (album [RUBBER SOUL])";
        }
        if (bgm_list_id == 202) {
            bgm_file_name = "202.mp3";
            bgm_title = "The Beatles [While My Guiter Gentry Weeps]";
        }
        if (bgm_list_id == 203) {
            bgm_file_name = "203.mp3";
            bgm_title = "Iggy Pop [The Passengers]";
        }
        if (bgm_list_id == 204) {
            bgm_file_name = "204.mp3";
            bgm_title = "Queen [Sheer Heart Attack]";
        }
        if (bgm_list_id == 205) {
            bgm_file_name = "205.mp3";
            bgm_title = "Kraftwerk [The Model]";
        }
        if (bgm_list_id == 206) {
            bgm_file_name = "206.mp3";
            bgm_title = "OASIS [Wonderwall]";
        }
        if (bgm_list_id == 207) {
            bgm_file_name = "207.mp3";
            bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (bgm_list_id == 208) { // Ver0.1401にて追加。C-MOONのDISC
            bgm_file_name = "207.mp3";
            bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (bgm_list_id == 250) { // Ver0.1401にて追加。オー!ロンサム・ミー
            bgm_file_name = "207.mp3";
            bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (bgm_list_id == 251) { // Ver0.1401にて追加。シビル・ウォー
            bgm_file_name = "207.mp3";
            bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (bgm_list_id == 252) { // Ver0.1401にて追加。クリーム・スターター
            bgm_file_name = "207.mp3";
            bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (bgm_list_id == 253) { // Ver0.1401にて追加。スケアリー・モンスターズ
            bgm_file_name = "207.mp3";
            bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (bgm_list_id == 254) { // Ver0.1401にて追加。C・ザ・レインボー
            bgm_file_name = "207.mp3";
            bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (bgm_list_id == 255) { // Ver0.1401にて追加。イン・ア・サイレント・ウェイ
            bgm_file_name = "207.mp3";
            bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (bgm_list_id == 256) { // Ver0.1401にて追加。チョコレイト・ディスコ
            bgm_file_name = "207.mp3";
            bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (bgm_list_id == 257) { // Ver0.1401にて追加。T・O・T・B ワン
            bgm_file_name = "207.mp3";
            bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (bgm_list_id == 258) { // Ver0.1401にて追加。ボールブレイカー&スキャン
            bgm_file_name = "207.mp3";
            bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (bgm_list_id == 259) { // Ver0.1401にて追加。TATOO YOU!
            bgm_file_name = "207.mp3";
            bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (bgm_list_id == 260) { // Ver0.1401にて追加。20th Century Boy
            bgm_file_name = "207.mp3";
            bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (bgm_list_id == 261) { // Ver0.1401にて追加。D4C
            bgm_file_name = "207.mp3";
            bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (bgm_list_id == 262) { // Ver0.1401にて追加。タスクact4
            bgm_file_name = "207.mp3";
            bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (bgm_list_id == 263) { // Ver0.1401にて追加。D4Cラブトレイン
            bgm_file_name = "207.mp3";
            bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (bgm_list_id == 300) {
            bgm_file_name = "300.mp3";
            bgm_title = "Pearl jam [Alive]";
        }
        if (bgm_list_id == 301) {
            bgm_file_name = "301.mp3";
            bgm_title = "Neil Young [Heart of Gold](albam[HARVEST])";
        }
        if (bgm_list_id == 302) {
            bgm_file_name = "302.mp3";
            bgm_title = "AC/DC [Highway To Hell]";
        }
        if (bgm_list_id == 303) {
            bgm_file_name = "303.mp3";
            bgm_title = "[Enter the Dragon] ";
        }
        if (bgm_list_id == 304) {
            bgm_file_name = "304.mp3";
            bgm_title = "Weather Report [Birdland]";
        }
        if (bgm_list_id == 305) {
            bgm_file_name = "305.mp3";
            bgm_title = "Cinderella [Gypsyroad]";
        }
        if (bgm_list_id == 306) {
            bgm_file_name = "306.mp3";
            bgm_title = "Manhattan Transfer [Boy from NewYork City]";
        }
        if (bgm_list_id == 307) { // Ver0.1401にて追加。リトル・フィートのDISC
            bgm_file_name = "";
            bgm_title = "";
        }
        if (bgm_list_id == 308) {
            bgm_file_name = "308.mp3";
            bgm_title = "Devo [Beautiful World]";
        }
        if (bgm_list_id == 309) { // Ver0.1401にて追加。ソフト・マシーンのDISC
            bgm_file_name = "309.mp3";
            bgm_title = "Soft Machine [Facelift]";
        }
        if (bgm_list_id == 310) {
            bgm_file_name = "310.mp3";
            bgm_title = "Nena [99 luftballons]";
        }
        if (bgm_list_id == 311) {
            bgm_file_name = "311.mp3";
            bgm_title = "Cheap Trick [Dream Police]";
        }
        if (bgm_list_id == 312) {
            bgm_file_name = "312.mp3";
            bgm_title = "Aerosmith [Walk This Way]";
        }
        if (bgm_list_id == 313) {
            bgm_file_name = "313.mp3";
            bgm_title = "Deep Purple [Highway Star]";
        }
        if (bgm_list_id == 314) {
            bgm_file_name = "314.mp3";
            bgm_title = "Stray Cats [Stray Cat Strut]";
        }
        if (bgm_list_id == 315) {
            bgm_file_name = "315.mp3";
            bgm_title = "King Crimson [Epitaph]";
        }
        if (bgm_list_id == 316) {
            bgm_file_name = "316.mp3";
            bgm_title = "Survivor [Eye of the Tiger]";
        }
        if (bgm_list_id == 317) {
            bgm_file_name = "317.mp3";
            bgm_title = "Kiss [Detroit Rock City]";
        }
        if (bgm_list_id == 318) {
            bgm_file_name = "318.mp3";
            bgm_title = "The Rolling Stones [Jumpin' Jack Flash ]";
        }
        if (bgm_list_id == 319) {
            bgm_file_name = "319.mp3";
            bgm_title = "Boyz II Men [End of the Road]";
        }
        if (bgm_list_id == 320) {
            bgm_file_name = "320.mp3";
            bgm_title = "Metallica [ATTITUDE]";
        }
        if (bgm_list_id == 393) {
            bgm_file_name = "990.mp3";
            bgm_title = "Queen [Bohemian Rhapsody]";
        }
        if (bgm_list_id == 394) {
            bgm_file_name = "112.mp3";
            bgm_title = "Queen [Killer Queen]";
        }
        if (bgm_list_id == 395) {
            bgm_file_name = "395.mp3";
            bgm_title = "Queen [Another One Bite the Dust]";
        }
        if (bgm_list_id == 396) {
            bgm_file_name = "396.mp3";
            bgm_title = "Led Zeppelin [Stairway To Heaven]";
        }
        if (bgm_list_id == 397) {
            bgm_file_name = "304.mp3";
            bgm_title = "Weather Report [Birdland] (album[HEAVY WEATHER])";
        }
        if (bgm_list_id == 398) {
            bgm_file_name = "116.mp3";
            bgm_title = "The Beatles [Get Back]";
        }
        if (bgm_list_id == 399) {
            bgm_file_name = "115.mp3";
            bgm_title = "Prince [Gold](album[Gold Experience])";
        }
        if (bgm_list_id == 400) {
            bgm_file_name = "400.mp3";
            bgm_title = "Sting [English Man In New York]";
        }
        if (bgm_list_id == 401) {
            bgm_file_name = "401.mp3";
            bgm_title = "Foo Fighters [Everlong]";
        }
        if (bgm_list_id == 402) {
            bgm_file_name = "402.mp3";
            bgm_title = "Hall and Oates [Kiss on my List]";
        }
        if (bgm_list_id == 403) {
            bgm_file_name = "403.mp3";
            bgm_title = "Sex Pistols [Anarchy in the UK]";
        }
        if (bgm_list_id == 404) {
            bgm_file_name = "404.mp3";
            bgm_title = "Petshop Boys [West End Girls]";
        }
        if (bgm_list_id == 405) {
            bgm_file_name = "405.mp3";
            bgm_title = "Police [Roxanne]";
        }
        if (bgm_list_id == 406) {
            bgm_file_name = "405.mp3";
            bgm_title = "Police [Roxanne]";
        }
        if (bgm_list_id == 407) {
            bgm_file_name = "407.mp3";
            bgm_title = "Sting [Shape of My Heart]";
        }
        if (bgm_list_id == 408) {
            bgm_file_name = "408.mp3";
            bgm_title = "Michael Jackson [Man in the Mirror]";
        }
        if (bgm_list_id == 409) {
            bgm_file_name = "409.mp3";
            bgm_title = "Steely Dan [Babylon Sisters]";
        }
        if (bgm_list_id == 411) {
            bgm_file_name = "411.mp3";
            bgm_title = "Eagles [Desperado]";
        }
        if (bgm_list_id == 412) {
            bgm_file_name = "412.mp3";
            bgm_title = "Bob Dylan [Knocking on Heavens Door]";
        }
        if (bgm_list_id == 413) {
            bgm_file_name = "0.mp3";
            bgm_title = "nothing";
        }
        if (bgm_list_id == 414) {
            bgm_file_name = "414.mp3";
            bgm_title = "Chuck Berry [Johnny B. Goode]";
        }
        if (bgm_list_id == 415) { // Ver0.1401にて追加。タスクact1のBGM
            bgm_file_name = "414.mp3";
            bgm_title = "Chuck Berry [Johnny B. Goode]";
        }
        if (bgm_list_id == 416) { // Ver0.1401にて追加。タスクact3のBGM
            bgm_file_name = "414.mp3";
            bgm_title = "Chuck Berry [Johnny B. Goode]";
        }
        if (bgm_list_id == 417) { // Ver0.1401にて追加。ラットのBGM
            bgm_file_name = "414.mp3";
            bgm_title = "Chuck Berry [Johnny B. Goode]";
        }
        if (bgm_list_id == 418) { // Ver0.1401にて追加。スカイ・ハイのBGM
            bgm_file_name = "414.mp3";
            bgm_title = "Chuck Berry [Johnny B. Goode]";
        }
        if (bgm_list_id == 419) { // Ver0.1401にて追加。チューブラー・ベルズのBGM
            bgm_file_name = "414.mp3";
            bgm_title = "Chuck Berry [Johnny B. Goode]";
        }
        if (bgm_list_id == 977) {
            bgm_file_name = "105.mp3"; // IDは977だが、ファイル名は違う:105.mp3
            bgm_title = "Red Hot Chili Peppers [Give It Away]";
        }
        if (bgm_list_id == 978) {
            bgm_file_name = "978.mp3";
            bgm_title = "Pink Floyd [Atom Heart Mother]";
        }
        if (bgm_list_id == 979) {
            bgm_file_name = "315.mp3"; // IDは979だが、ファイル名は違う:315.mp3
            bgm_title = "King Crimson [Epitaph]";
        }
        if (bgm_list_id == 980) {
            bgm_file_name = "980.mp3";
            bgm_title = "The Pixies [Where Is My Mind]";
        }
        if (bgm_list_id == 981) {
            bgm_file_name = "981.mp3";
            bgm_title = "Madonna [Like a Virgin]";
        }
        if (bgm_list_id == 982) {
            bgm_file_name = "115.mp3";
            bgm_title = "Prince [Gold](album[Gold Experience])";
        }
        if (bgm_list_id == 983) {
            bgm_file_name = "203.mp3";
            bgm_title = "Iggy Pop [The Passengers]";
        }
        if (bgm_list_id == 984) {
            bgm_file_name = "313.mp3";
            bgm_title = "Deep Purple [Highway Star]";
        }
        if (bgm_list_id == 985) {
            bgm_file_name = "985.mp3";
            bgm_title = "Deep Purple [Speed King]";
        }
        // ダンジョンを制覇した時のBGM
        if (bgm_list_id == 986) {
            bgm_file_name = "986.mp3";
            bgm_title = "ENYA [Orinoco Flow]";
        }
        // トニオさんの店　レストラン・レストラン・トラサルディーのBGM
        if (bgm_list_id == 987) {
            bgm_file_name = "987.mp3";
            bgm_title = "Bach italien";
        }
        // ヴェネチアホテルのBGM
        if (bgm_list_id == 988) {
            bgm_file_name = "988.mp3";
            bgm_title = "Eagles [Hotel California]";
        }
        if (bgm_list_id == 989) {
            bgm_file_name = "989.mp3";
            bgm_title = "T.rex [20th Century Boy]";
        }
        if (bgm_list_id == 990) {
            bgm_file_name = "990.mp3";
            bgm_title = "Queen [Bohemian Rhapsody]";
        }
        if (bgm_list_id == 991) {
            bgm_file_name = "991.mp3";
            bgm_title = "Beach Boys [Surfin' USA]";
        }
        if (bgm_list_id == 992) {
            bgm_file_name = "992.mp3";
            bgm_title = "Beach Boys [Good Vibrations]";
        }
        if (bgm_list_id == 993) {
            bgm_file_name = "993.mp3";
            bgm_title = "REO Speedwagon [Keep On Lovin You]";
        }
        if (bgm_list_id == 994) {
            bgm_file_name = "994.mp3";
            bgm_title = "Led Zeppelin [Kashmir]";
        }
        if (bgm_list_id == 565) {
            bgm_file_name = "995.mp3";
            bgm_title = "Handel [Messiah]";
        }
        if (bgm_list_id == 996) {
            bgm_file_name = "996.mp3";
            bgm_title = "Prince [1999]";
        }
        if (bgm_list_id == 997) {
            bgm_file_name = "997.mp3";
            bgm_title = "Ben E King [Stand by Me]";
        }
        if (bgm_list_id == 998) {
            bgm_file_name = "998.mp3";
            bgm_title = "Bad Company [Bad Company]";
        }
        if (bgm_list_id == 999) {
            bgm_file_name = "999.mp3";
            bgm_title = "Louis Armstrong [What a Wonderful World]";
        }
        return;
    });
}
// 各ボリューム調整キーを押した時の表示
function func102(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(102);
        if (var_632 >= 1) {
            color(255, 255, 255);
            pos(2, 320);
            font("MS UI Gothic", 12);
            mes("　　　BGM オフ");
            return;
        }
        if (var_633 >= 1) {
            color(255, 255, 255);
            pos(2, 320);
            font("MS UI Gothic", 12);
            mes("　　　BGM オン（DISCを入れると開始します）");
            return;
        }
        if (var_635 == 0 && var_636 == 0) {
            if (receive_bgm_id == 0 || receive_bgm_id == 987 || receive_bgm_id == 413) {
                return;
            }
            color(255, 255, 255);
            pos(2, 320);
            font("MS UI Gothic", 12);
            mes("♪" + bgm_title);
            return;
        }
        if (var_635 >= 1) {
            color(255, 255, 255);
            pos(2, 320);
            font("MS UI Gothic", 12);
            mes("　　　効果音音量:" + se_volume);
            return;
        }
        if (var_636 >= 1) {
            color(255, 255, 255);
            pos(2, 320);
            font("MS UI Gothic", 12);
            mes("　　　音量:" + bgm_volume);
            return;
        }
        return;
    });
}

/*
ダンジョン内のテーマソング　"0.mp3" 設定
func104を呼び出して再生させる
*/
function func103(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(103);
        bgm_file_name = "0.mp3";
        yield func101();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            DMINIT();
            yield func104(); // BGM用mp3ファイル再生
            if (stat == 1) {
                break;
            }
        }
        receive_bgm_id = bgm_list_id;
        if (var_678 == 0) {
            var_634 = 1;
        }
        return;
    });
}


// BGM用mp3ファイル再生
function func104(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(104);
        exist(bgm_file_name);
        var_679 = strsize;
        var_680 = sdim(var_679);
        var_680 = bload(bgm_file_name);
        DMLOADMEMORY(var_680, var_679, 1);
        if (var_631 != 0) {
            DMPLAY(var_631, 1);
        }
        return;
    });
}

// discを装備した際のBGM選曲
function func105(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(105);
        if (receive_bgm_id == belongings_item_list) {
            return;
        }
        if (dangeon_number == 99) {
            return;
        }
        if (var_681 == 988 || var_681 == 990 || var_681 == 987 || var_681 == 996 || var_681 == 998 || var_681 == 984 || var_681 == 982 || var_681 == 986 || var_681 == 981 || var_681 == 980 || var_681 == 985 || var_681 == 978 || var_681 == 977) {
            return;
        }
        bgm_list_id = belongings_item_list;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}

// BGM選曲呼び出し割り振り
function func106(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(106);
        if (dangeon_number == 99) {
            return;
        }
        if (var_681 == 988 || var_681 == 990 || var_681 == 987 || var_681 == 996 || var_681 == 998 || var_681 == 984 || var_681 == 982 || var_681 == 986 || var_681 == 981 || var_681 == 980 || var_681 == 985 || var_681 == 978 || var_681 == 977) {
            return;
        }
        // var_677にitem_listのIDが割り当てられていたら、そのIDを返す
        if (receive_bgm_id == belongings_item_list) {
            // var_681 = 989 が設定させていたら、その値を返す
            if (var_681 == 989) {
                bgm_list_id = 989; // 亀の中のBGM
                yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
                return;
            }
            // bgm_list_id = 0　なら ダンジョンテーマソングを流す処理を呼び出し
            bgm_list_id = 0; // BGMをダンジョンテーマソングへ戻す
            yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
            return;
        }
        return;
    });
}

function func107(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(107);
        bgm_list_id = receive_bgm_id;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}

// BGM用mp3ファイル再生停止
function func108(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(108);
        DMSTOP(); // BGM停止関数
        return;
    });
}

// タイトル画面でのオープニング曲再生
function func109(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        return;
    });
}

function func110(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(110);
        if (dangeon_number == 99) {
            return;
        }
        var_678 = 1;
        bgm_list_id = 979;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        var_678 = 0;
        var_634 = 0;
        return;
    });
}

function func111(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(111);
        var_678 = 1;
        bgm_list_id = 0;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        var_678 = 0;
        var_681 = 0;
        return;
    });
}
function func112(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(112);
        var_678 = 1;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        var_678 = 0;
        return;
    });
}
// ヴェネチアホテルのBGMを選曲
function func113(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(113);
        var_678 = 1;
        bgm_list_id = 988; // ヴェネチアホテルのBGM
        var_681 = 988;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        var_678 = 0;
        return;
    });
}
// 亀の中の選曲(BGM "20th Century Boy")
function func114(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(114);
        var_678 = 1;
        bgm_list_id = 989; // BGM "20th Century Boy"
        var_681 = 989;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        var_678 = 0;
        return;
    });
}

function func115(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(115);
        var_678 = 0;
        bgm_list_id = var_486[var_682][var_683][0];
        if (bgm_list_id < 100) {
            return;
        }
        if (bgm_list_id >= 500 && bgm_list_id != 565) {
            return;
        }
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        var_678 = 0;
        return;
    });
}
function func116(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(116);
        bgm_list_id = 990;
        var_681 = 990;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}
function func117(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(117);
        bgm_list_id = 982;
        var_681 = 982;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}
// エンヤホテルのBGM
function func118(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(118);
        bgm_list_id = 986;
        var_681 = 986;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}
// 虹村屋敷のBGM
function func119(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(119);
        bgm_list_id = 998;
        var_681 = 998;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}
// 吉良屋敷のBGM
function func120(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(120);
        bgm_list_id = 978;
        var_681 = 978;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}
// 杜王町埠頭のBGM
function func121(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(121);
        bgm_list_id = 977;
        var_681 = 977;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}
// ゴールドエクスペリエンスレクイエムの発動で帰還する際のBGM
function func122(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(122);
        bgm_list_id = 999;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        var_634 = 0;
        return;
    });
}
function func123(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(123);
        bgm_list_id = 997;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        var_634 = 0;
        return;
    });
}
function func124(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(124);
        if (receive_bgm_id == 994) {
            return;
        }
        if (var_681 == 988 || var_681 == 989 || var_681 == 990 || var_681 == 987 || var_681 == 996 || var_681 == 998 || var_681 == 984 || var_681 == 982 || var_681 == 986 || var_681 == 981 || var_681 == 980 || var_681 == 985) {
            return;
        }
        bgm_list_id = 994;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}
function func125(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(125);
        if (receive_bgm_id == 993) {
            return;
        }
        if (var_681 == 988 || var_681 == 989 || var_681 == 990 || var_681 == 987 || var_681 == 996 || var_681 == 998 || var_681 == 984 || var_681 == 982 || var_681 == 986 || var_681 == 981 || var_681 == 980 || var_681 == 985) {
            return;
        }
        bgm_list_id = 993;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}
function func126(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(126);
        if (receive_bgm_id == 991) {
            return;
        }
        if (var_681 == 988 || var_681 == 989 || var_681 == 990 || var_681 == 987 || var_681 == 996 || var_681 == 998 || var_681 == 984 || var_681 == 982 || var_681 == 986 || var_681 == 981 || var_681 == 980 || var_681 == 985) {
            return;
        }
        bgm_list_id = 991;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}
function func127(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(127);
        if (receive_bgm_id == 992) {
            return;
        }
        if (var_681 == 988 || var_681 == 989 || var_681 == 990 || var_681 == 987 || var_681 == 996 || var_681 == 998 || var_681 == 984 || var_681 == 982 || var_681 == 986 || var_681 == 981 || var_681 == 980 || var_681 == 985) {
            return;
        }
        bgm_list_id = 992;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}
function func128(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(128);
        if (receive_bgm_id == 983) {
            return;
        }
        if (var_681 == 988 || var_681 == 989 || var_681 == 990 || var_681 == 987 || var_681 == 996 || var_681 == 998 || var_681 == 984 || var_681 == 982 || var_681 == 986 || var_681 == 981 || var_681 == 980 || var_681 == 985) {
            return;
        }
        bgm_list_id = 983;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}
function func129(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(129);
        bgm_list_id = 996;
        var_681 = 996;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}
function func130(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(130);
        bgm_list_id = 998;
        var_681 = 998;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}
function func131(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(131);
        bgm_list_id = 985;
        var_681 = 985;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}
function func132(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(132);
        bgm_list_id = 984;
        var_681 = 984;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}
function func133(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(133);
        bgm_list_id = 981;
        var_681 = 981;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}
function func134(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(134);
        bgm_list_id = 980;
        var_681 = 980;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}
function func135(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(135);
        bgm_list_id = 980;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
    });
}
function func136(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(136);
        var_684 = receive_bgm_id;
        bgm_list_id = 987;
        var_681 = 987;
        var_678 = 1;
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        var_678 = 0;
        return;
    });
}
function func137(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(137);
        if (receive_bgm_id != 987) {
            return;
        }
        bgm_list_id = var_684;
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
        yield func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        var_678 = 0;
        return;
    });
}

// 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理
function func138(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(138);
        gsel(0);
        redraw(0);
        color(0, 0, 0);
        boxf(left = 0, top1 = 0, right = 340, bottom = 340);
        gmode(4, null, null, var_18);
        if (var_11 == 0) {
            if (var_60 < 25) {
                pos(150, 120);

                // buffer(17)は"img_3.gif"。X座標40、Y座標0から切り取り長さ X方向40、Y方向80
                // 絵:石仮面(目が光っていない & 赤石無し)
                gcopy(17, 40, 0, 40, 80);
            }
            if (var_60 >= 25) {
                pos(150, 120);
                // buffer(17)は"img_3.gif"。X座標0、Y座標0から切り取り長さ X方向40、Y方向80
                // 絵:石仮面(目が光っている & 赤石無し)
                gcopy(17, 0, 0, 40, 80);
            }
        }
        if (var_11 == 1) {
            if (var_60 < 25) {
                pos(150, 120);

                // buffer(17)は"img_3.gif"。X座標120、Y座標0から切り取り長さ X方向40、Y方向80
                // 絵:石仮面(目が光っていない & 赤石有り)                
                gcopy(17, 120, 0, 40, 80);
            }
            if (var_60 >= 25) {
                pos(150, 120);

                // buffer(17)は"img_3.gif"。X座標80、Y座標0から切り取り長さ X方向40、Y方向80
                // 絵:石仮面(目が光っている & 赤石有り)
                gcopy(17, 80, 0, 40, 80);
            }
        }
        pos(100, 200);
        // buffer(17)は"img_3.gif"。X座標0、Y座標80から切り取り長さ X方向160、Y方向40
        // 絵文字:NOW LOADING
        gcopy(17, 0, 80, 160, 40);
        var_685 = 1;
        for (let cnt1 = 0; cnt1 < 25; ++cnt1) {
            var_447 = var_685 * 3 + 130;
            var_449 = 240;
            pos(var_447, var_449);
            // buffer(17)は"img_3.gif"。X座標643、Y座標640から切り取り長さ X方向2、Y方向6
            // 絵文字:ロード読み込み進行バー1
            gcopy(17, 643, 640, 2, 6);
            var_685++;
        }
        if (var_60 >= 1) {
            var_685 = 1;
            for (let cnt2 = 0; cnt2 < var_60; ++cnt2) {
                var_447 = var_685 * 3 + 130;
                var_449 = 240;
                pos(var_447, var_449);

                // buffer(17)は"img_3.gif"。X座標640、Y座標640から切り取り長さ X方向2、Y方向6
                // 絵文字:ロード読み込み進行バー2
                gcopy(17, 640, 640, 2, 6);
                var_685++;
            }
        }
        if (var_10 >= 1) {
            yield func338();
        }
        redraw(1);
        yield wait(1);
        return;
    });
}

// データ読込み処理(00.datファル、01 ~ 03.datセーブデータ解析処理)
function func139(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        if (strsize == (-1)) {
            bsave(file_name = "00.dat", data = var_447, data_size = null, offset = null);
            bsave(file_name = "00.dat", data = var_686, data_size = null, offset = 0);
            bsave(file_name = "00.dat", data = var_702, data_size = null, offset = 100);    
            bsave(file_name = "00.dat", data = var_25, data_size = null, offset = 200);
            bsave(file_name = "00.dat", data = var_26, data_size = null, offset = 300);
            bsave(file_name = "00.dat", data = var_27, data_size = null, offset = 400);
            bsave(file_name = "00.dat", data = var_691, data_size = null, offset = 1000);
            bsave(file_name = "00.dat", data = var_664, data_size = null, offset = 1500);
            yield func139(); // データ読込み処理(00.datファル、01 ~ 03.datセーブデータ解析処理)
            return;
        }


        exist("01.dat");
        if (strsize == (-1)) {
            var_703 = 0;
        }
        else {
            var_703 = 1;
            var_704 = bload("01.dat");
            // var_704[61] == 0 だと拠点    
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
            // var_704[61] == 1 だとホテルの外 
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
            // var_704[61] == 2 だとレクイエムの大迷宮
            if (var_704[61] == 2) {
                var_705 = "レクイエムの大迷宮";
                if (var_704[1] == 30) {
                    var_705 = "黄金の風";
                }
            }
            // var_704[61] == 3 だとディアボロの試練
            if (var_704[61] == 3) {
                var_705 = "ディアボロの試練";
                if (var_704[1] == 99) {
                    var_705 = "自由人の狂想曲";
                }
            }
            // var_704[61] == 4 だと一巡後の世界
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
            var_708 = var_704[88]; // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ
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
            var_715 = var_704[88]; // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ
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
            var_722 = var_704[88]; // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ
            var_723 = var_704[93];
            var_724 = var_704[94];
        }
        var_686 = bload(file_name = "00.dat", data_size = null, offset = 0);

        var_702 = bload(file_name = "00.dat", data_size = null, offset = 100);

        var_25_x = bload(file_name = "00.dat", data_size = null, offset = 200);
        var_26_x = bload(file_name = "00.dat", data_size = null, offset = 300);
        var_27_x = bload(file_name = "00.dat", data_size = null, offset = 400);
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

            // Ver0.1310にて追加。追加したことで白色へ初期化できる。
            var_25[7] = 255;
            var_26[7] = 255;
            var_27[7] = 255;
            var_25[8] = 255;
            var_26[8] = 255;
            var_27[8] = 255;
            var_25[9] = 255;
            var_26[9] = 255;
            var_27[9] = 255;
            var_25[10] = 255;
            var_26[10] = 255;
            var_27[10] = 255;
            var_25[11] = 255;
            var_26[11] = 255;
            var_27[11] = 255;
            var_25[12] = 255;
            var_26[12] = 255;
            var_27[12] = 255;
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
        yield wait(1);
        var_18 = 0;
        for (let cnt1 = 0; cnt1 < 25; ++cnt1) {
            redraw(0);
            color(0, 0, 0);
            boxf(left = 0, top1 = 0, right = 340, bottom = 340);
            gmode(4, null, null, var_18);
            pos(0, 0);
            var_727 = 0;
            var_728 = 350;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                var_729 = 0;
                var_730 = 720;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    pos(var_729, var_727);
                    gcopy(17, var_730, var_728, 40, 40);
                    var_729 = var_729 + 40;
                    var_730 = var_730 + 40;
                }
                var_727 = var_727 + 40;
                var_728 = var_728 + 40;
            }
            if (var_10 >= 1) {
                yield func338();
            }
            redraw(1);
            yield wait(1);
            var_18 = var_18 + 10;
        }
        redraw(0);
        color(0, 0, 0);
        boxf(left = 0, top1 = 0, right = 340, bottom = 340);
        gmode(2);
        var_727 = 0;
        var_728 = 350;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            var_729 = 0;
            var_730 = 720;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                pos(var_729, var_727);
                gcopy(17, var_730, var_728, 40, 40);
                var_729 = var_729 + 40;
                var_730 = var_730 + 40;
            }
            var_727 = var_727 + 40;
            var_728 = var_728 + 40;
        }
        if (var_10 >= 1) {
            yield func338();
        }
        redraw(1);
        yield wait(50);
        var_631 = 1000;
        yield func109(); // タイトル画面でのオープニング曲再生
        var_731 = 1;

        DSPLAY(audio_id = 175);
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            yield wait(3);
            redraw(0);
            color(0, 0, 0);
            boxf(left = 0, top1 = 0, right = 340, bottom = 340);
            gmode(2);
            var_727 = 0;
            var_728 = 350;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                var_729 = 0;
                var_730 = 720;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
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
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
                if (cnt2 == 0) {
                    pos(45, 50);
                }
                if (cnt2 == 1) {
                    pos(100, 60);
                }
                if (cnt2 == 2) {
                    pos(35, 90);
                }
                if (cnt2 == 3) {
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
            if (var_10 >= 1) {
                yield func338();
            }
            redraw(1);
            var_731++;
        }
        yield wait(1);
        var_731 = 0;
        var_732 = 0;
        yield func140();
    });
}

function func140(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(140);
        yield await_(50);
        yield func141();
        if (var_12 == 1) {
            conf_keyon = getkey(112); // キーF1入力確認
            if (conf_keyon == 1) {
                yield func221();
                return;
            }
            conf_keyon = getkey(113); // キーF2入力確認
            if (conf_keyon == 1) {
                yield func224();
                return;
            }
        }
        var_628 = 1;
        yield func080(); // 各キー入力確認
        // Ver0.1401にて「key_F_on == 1」を追加
        if (key_Z_on == 1 || key_X_on == 1 || key_A_on == 1 || key_S_on == 1 || key_Shift_on == 1 || key_C_on == 1 || key_F_on == 1) {

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func178(); // 処理確認タイマー(3m秒)
            var_599 = 5;
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                redraw(0);
                gmode(2);
                var_727 = 0;
                var_728 = 350;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    var_729 = 0;
                    var_730 = 720;
                    for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
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
                yield func180();
                if (var_10 >= 1) {
                    yield func338();
                }
                yield wait(2);
                redraw(1);
                var_599 = var_599 - 1;
            }
            var_599 = 0;
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                redraw(0);
                yield func146(); // ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
                yield func180();
                if (var_10 >= 1) {
                    yield func338();
                }
                yield wait(2);
                redraw(1);
                var_599 = var_599 + 1;
            }
            var_732 = 0;
            yield func142();
            return;
        }
        yield func140();
        return;
    });
}

function func141(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(141);
        redraw(0);
        gmode(2);
        var_727 = 0;
        var_728 = 350;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            var_729 = 0;
            var_730 = 720;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
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
        if (var_635 >= 1 || var_636 >= 1 || var_633 >= 1 || var_632 >= 1) {
            yield func102(); // 各ボリューム調整キーを押した時の表示
        }
        if (var_10 >= 1) {
            yield func338();
        }
        redraw(1);
        return;
    });
}
function func142(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(142);
        var_734 = 0;
        yield func080(); // 各キー入力確認
        if (key_Z_on == 1 || key_A_on == 1) {

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func147();
            return;
        }
        if (key_X_on == 1) {

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func178(); // 処理確認タイマー(3m秒)
            var_599 = 5;
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                redraw(0);
                yield func146(); // ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
                yield func180();
                if (var_10 >= 1) {
                    yield func338();
                }
                yield wait(2);
                redraw(1);
                var_599 = var_599 - 1;
            }
            var_599 = 0;
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                redraw(0);
                gmode(2);
                var_727 = 0;
                var_728 = 350;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    var_729 = 0;
                    var_730 = 720;
                    for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
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
                yield func180();
                if (var_10 >= 1) {
                    yield func338();
                }
                yield wait(2);
                redraw(1);
                var_599 = var_599 + 1;
            }
            pos(0, 0);
            gmode(2);
            yield func140();
            return;
        }
        if (var_255 == 1) {
            if (var_64 == 0) {
                var_64 = 4;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func143();
                yield wait(13);
                yield func142();
                return;
            }
            if (var_64 == 1) {
                var_64 = 0;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func143();
                yield wait(10);
            }
            if (var_64 == 2) {
                var_64 = 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func143();
                yield wait(10);
            }
            if (var_64 == 3) {
                var_64 = 2;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func143();
                yield wait(10);
            }
            if (var_64 == 4) {
                var_64 = 3;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func143();
                yield wait(10);
            }
        }
        if (var_259 == 1) {
            if (var_64 == 4) {
                var_64 = 0;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func143();
                yield wait(13);
                yield func142();
                return;
            }
            if (var_64 == 3) {
                var_64 = 4;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func143();
                yield wait(10);
            }
            if (var_64 == 2) {
                var_64 = 3;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func143();
                yield wait(10);
            }
            if (var_64 == 1) {
                var_64 = 2;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func143();
                yield wait(10);
            }
            if (var_64 == 0) {
                var_64 = 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func143();
                yield wait(10);
            }
        }
        yield func143();
        yield await_(50);
        yield func142();
        return;
    });
}
function func143(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(143);
        redraw(0);
        yield func146(); // ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
        if (var_10 >= 1) {
            yield func338();
        }
        redraw(1);
        return;
    });
}

// ログイン画面(タイトル画面/ログイン)動作処理 (ボス日記選択等のセーブデータロード処理)
function func144(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(144);
        yield func080(); // 各キー入力確認
        if (key_Z_on == 1 || key_A_on == 1) {
            if (var_734 == 0) {
                var_628 = 0;
                var_632 = 0;
                var_633 = 0;
                var_634 = 0;
                var_635 = 0;
                var_636 = 0;
                DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
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
                if (strsize == (-1)) {
                    yield func178(); // 処理確認タイマー(3m秒)
                    yield func150(); // オープニング (5部最終決戦 ジョルノ達との戦いの場面)
                    return;
                }
                yield func178(); // 処理確認タイマー(3m秒)
                yield func005(); // セーブデータを読み込む前のフラグ確認処理(ホテルのイベントフラグ、BGM再生曲、マップ背景画像)
                return;
            }
        }
        if (key_Z_on == 1 || key_A_on == 1) {
            if (var_734 == 1) {
    
                DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                yield func178(); // 処理確認タイマー(3m秒)
                yield func145();
                return;
            }
        }
        if (key_X_on == 1) {

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func178(); // 処理確認タイマー(3m秒)
            var_725 = 0;
            yield func142();
            return;
        }
        if (var_255 == 1) {
            if (var_726 == 1) {
                var_726 = 1;
            }
            if (var_726 == 2) {
                var_726 = 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield wait(8);
            }
            if (var_726 == 3) {
                var_726 = 2;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield wait(8);
            }
        }
        if (var_259 == 1) {
            if (var_726 == 3) {
                var_726 = 3;
            }
            if (var_726 == 2) {
                var_726 = 3;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield wait(8);
            }
            if (var_726 == 1) {
                var_726 = 2;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield wait(8);
            }
        }
        redraw(0);
        yield func146(); // ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
        yield func148(); // ボス日記選択画面(タイトル画面/ログイン画面/ボス日記選択画面)の表示
        if (var_10 >= 1) {
            yield func338();
        }
        redraw(1);
        yield await_(50);
        yield func144(); // ログイン画面(タイトル画面/ログイン)動作処理 (ボス日記選択等のセーブデータロード処理)
        return;
    });
}


function func145(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(145);
        conf_keyon = getkey(89); // キーY入力確認
        if (conf_keyon == 1) {
            conf_keyon = 0;
            var_736 = 0;

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func240();
            var_737 = 0;
            var_725 = 0;
            yield func142();
            return;
        }
        yield func080(); // 各キー入力確認
        if (key_X_on == 1) {
            yield func178(); // 処理確認タイマー(3m秒)
            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            var_737 = 0;
            yield func144(); // ログイン画面(タイトル画面/ログイン)動作処理 (ボス日記選択等のセーブデータロード処理)
            return;
        }
        redraw(0);
        yield func146(); // ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
        yield func148(); // ボス日記選択画面(タイトル画面/ログイン画面/ボス日記選択画面)の表示
        yield func149(); // ボス日記消去選択時の表示
        if (var_10 >= 1) {
            yield func338();
        }
        redraw(1);
        yield await_(50);
        yield func145();
        return;
    });
}
// ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
function func146(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(146);
        var_738 = 0;
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        var_727 = 0;
        var_728 = 400;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            var_729 = 0;
            var_730 = 0;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
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
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            var_729 = 0;
            var_730 = 0;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
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

            // buffer(8)は"img1.gif"。X座標70、Y座標50から切り取り長さ X方向25、Y方向20
            // 絵:矢尻(ログイン画面での選択カーソル)           
            gcopy(8, 70, 50, 25, 20);
        }
        pos(240, 320);
        color(255, 255, 255);
        font("ＭＳ　Ｐゴシック", 12);
        
        // ログイン画面下のバージョンNo. 
        if (var_12 == 0) {
            mes("version " + version_number);
        }
        if (var_12 == 1) {
            mes("Version " + version_number);
        }
        return;
    });
}

function func147(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(147);
        var_599 = 0;
        if (var_64 == 0) {
            yield func178(); // 処理確認タイマー(3m秒)
            var_726 = 1;
            var_725 = 1;
            yield func144(); // ログイン画面(タイトル画面/ログイン)動作処理 (ボス日記選択等のセーブデータロード処理)
            return;
        }
        if (var_64 == 1) {
            yield func178(); // 処理確認タイマー(3m秒)
            var_726 = 1;
            var_725 = 1;
            var_734 = 1;
            yield func144(); // ログイン画面(タイトル画面/ログイン)動作処理 (ボス日記選択等のセーブデータロード処理)
            return;
        }
        if (var_64 == 2) {
            yield func178(); // 処理確認タイマー(3m秒)
            onexit(0);
            yield func882();
            return;
        }
        if (var_64 == 4) {
            end();
        }
        yield func142();
        return;
    });
}

// ボス日記選択画面(タイトル画面/ログイン画面/ボス日記選択画面)の表示
function func148(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(148);
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
        var_739 = 50;
        var_740 = 70;
        var_741 = var_740;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
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

            // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグがONなら
            if (var_708 >= 1) {
                pos(80, var_741 + 35);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);

                // buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
                // 絵:エンブレム(ダンジョン(ホテルの外？)クリア時)
                gcopy(8, 100, 82, 17, 17);
            }
            // エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)解放フラグ
            if (var_709 >= 1) {
                pos(102, var_741 + 35);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                // buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
                // 絵:エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)
                gcopy(8, 120, 82, 17, 17);
            }
            if (var_710 >= 1) {
                pos(124, var_741 + 35);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);

                // buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
                // 絵:エンブレム(ダンジョン(ディアボロの試練？)クリア時)                      
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

            // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ
            if (var_715 >= 1) {
                pos(80, var_741 + 105);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);   
                // buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
                // 絵:エンブレム(ダンジョン(ホテルの外？)クリア時)
                gcopy(8, 100, 82, 17, 17);
            }
            // エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)解放フラグ
            if (var_716 >= 1) {
                pos(102, var_741 + 105);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                
                // buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
                // 絵:エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)                
                gcopy(8, 120, 82, 17, 17);
            }
            if (var_717 >= 1) {
                pos(124, var_741 + 105);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                
                // buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
                // 絵:エンブレム(ダンジョン(ディアボロの試練？)クリア時)                      
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

            // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ
            if (var_722 >= 1) {
                pos(80, var_741 + 175);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                
                // buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
                // 絵:エンブレム(ダンジョン(ホテルの外？)クリア時)                
                gcopy(8, 100, 82, 17, 17);
            }
            // エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)解放フラグ
            if (var_723 >= 1) {
                pos(102, var_741 + 175);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                
                // buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
                // 絵:エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)                
                gcopy(8, 120, 82, 17, 17);
            }
            if (var_724 >= 1) {
                pos(124, var_741 + 175);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                
                // buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
                // 絵:エンブレム(ダンジョン(ディアボロの試練？)クリア時)                      
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
        
        // buffer(8)は"img1.gif"。X座標70、Y座標50から切り取り長さ X方向25、Y方向20
        // 絵:矢尻(ログイン画面での選択カーソル)            
        gcopy(8, 70, 50, 25, 20);
        return;
    });
}

// ボス日記消去選択時の表示
function func149(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
            return;
        }
        if (var_726 == 2 && var_711 == 0) {
            mes("データはありません");
            return;
        }
        if (var_726 == 3 && var_718 == 0) {
            mes("データはありません");
            return;
        }
        mes("このデータを消去しますか？");
        mes("「Y」キーを押すと消去されます。");
        return;
    });
}

// オープニング (5部最終決戦 ジョルノ達との戦いの場面)
function func150(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(150);
        yield func233();
        yield func158(); // オープニング戦マップ配置処理
        yield func108(); // BGM用mp3ファイル再生停止
        var_595 = 3;
        yield func076(); // マップ背景画像の読込
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            yield func339();
        }
        var_350 = 100;
        var_567 = 100;
        var_68 = 1;
        var_217 = 1;
        DSPLAY(audio_id = 178);
        var_271 = 1;
        var_594 = 1;
        for (let cnt1 = 0; cnt1 < 40; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_594 = var_594 + 1;
        }
        var_271 = 0;
        var_594 = 0;
        yield func335();
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「おまえには 死んだことを";
        comments_row2 = "　　　後悔する時間をも…";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「与えんッ！！」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_83[1].Var6 = 1;
        var_83[1].Var1 = 29;
        var_83[1].Var2 = 10;
        var_82[28][10] = 0;
        var_82[29][10] = 1;
        var_83[1].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_83[1].Var1 = 30;
        var_83[1].Var2 = 10;
        var_82[29][10] = 0;
        var_82[30][10] = 1;
        var_83[1].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_83[1].Var1 = 31;
        var_83[1].Var2 = 10;
        var_82[30][10] = 0;
        var_82[31][10] = 1;
        var_83[1].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_83[1].Var6 = 0;
        var_742 = 1;
        var_83[1].Var7 = 1;
        var_743 = 1;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_151 = 1;
        var_152 = 2;

        DSPLAY(audio_id = 185);
        var_271 = 1;
        var_531 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_531++;
            var_742 = 3;
        }
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
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「えっ」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            var_744++;
            yield func337(); // メッセージ関係呼び出し
        }
        var_83[5].Var5 = 4;
        var_83[6].Var0 = 49;
        var_83[6].Var1 = 29;
        var_83[6].Var2 = 10;
        var_82[29][10] = 6;
        var_83[6].Var5 = 6;
        var_744 = 1;
        var_745 = 4 * 40 + 20;
        var_746 = 3 * 40 - 10;
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「えっ」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            var_744++;
            yield func337(); // メッセージ関係呼び出し
        }
        var_83[6].Var5 = 4;
        var_83[7].Var0 = 49;
        var_83[7].Var1 = 28;
        var_83[7].Var2 = 10;
        var_82[28][10] = 7;
        var_83[7].Var5 = 6;
        var_744 = 1;
        var_745 = 3 * 40 + 20;
        var_746 = 3 * 40 - 10;
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「えっ」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            var_744++;
            yield func337(); // メッセージ関係呼び出し
        }
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
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「オッ…オレはッ！";
        comments_row2a = "初めから何も動いていないッ！！」";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func340(); // キー入力による選択処理
        var_83[2].Var6 = 1;
        var_83[2].Var1 = 31;
        var_83[2].Var2 = 10;
        var_82[32][10] = 0;
        var_82[31][10] = 2;
        var_83[2].Var5 = 4;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_83[2].Var1 = 30;
        var_83[2].Var2 = 10;
        var_82[31][10] = 0;
        var_82[30][10] = 2;
        var_83[2].Var5 = 4;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_83[2].Var1 = 29;
        var_83[2].Var2 = 10;
        var_82[30][10] = 0;
        var_82[29][10] = 2;
        var_83[2].Var5 = 4;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_83[2].Var6 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ｼﾞｮﾙﾉ「無駄アァァァァ！！」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        var_742 = 1;
        var_83[2].Var7 = 1;
        var_743 = 1;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_747 = 1;
        var_748 = 3;
        var_749 = 4;

        DSPLAY(audio_id = 115);
        var_750 = 1;
        var_209 = 20;
        var_211 = 0;
        yield func337(); // メッセージ関係呼び出し
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
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
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        var_83[1].Var5 = 6;
        yield func337(); // メッセージ関係呼び出し
        var_83[1].Var1 = 26;
        var_83[1].Var2 = 10;
        var_82[27][10] = 0;
        var_82[26][10] = 1;
        var_83[1].Var5 = 4;
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        var_83[1].Var5 = 6;
        yield func337(); // メッセージ関係呼び出し
        var_83[1].Var1 = 25;
        var_83[1].Var2 = 10;
        var_82[26][10] = 0;
        var_82[25][10] = 1;
        var_83[1].Var5 = 4;
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        var_83[1].Var5 = 6;
        yield func337(); // メッセージ関係呼び出し
        var_83[1].Var1 = 26;
        var_83[1].Var2 = 11;
        var_82[25][10] = 0;
        var_82[26][11] = 1;
        var_83[1].Var5 = 3;
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        var_83[1].Var5 = 7;
        yield func337(); // メッセージ関係呼び出し
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
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_751++;
        }
        var_271 = 0;
        var_751 = 0;
        var_83[3].Var6 = 1;
        var_83[3].Var1 = 29;
        var_83[3].Var2 = 7;
        var_82[30][7] = 0;
        var_82[29][7] = 3;
        var_83[3].Var5 = 4;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_83[3].Var1 = 28;
        var_83[3].Var2 = 8;
        var_82[29][7] = 0;
        var_82[28][8] = 3;
        var_83[3].Var5 = 1;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_83[3].Var1 = 27;
        var_83[3].Var2 = 9;
        var_82[28][8] = 0;
        var_82[27][9] = 3;
        var_83[3].Var5 = 1;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_83[3].Var6 = 0;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾐｽﾀ「や…　やったぞッ　ついにッ！」";
        comments_row2 = "　　　ついにッ！　倒したぞ！」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_83[2].Var0 = 131;
        var_83[4].Var6 = 1;
        var_83[4].Var1 = 30;
        var_83[4].Var2 = 9;
        var_82[31][8] = 0;
        var_82[30][9] = 4;
        var_83[4].Var5 = 1;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_83[4].Var1 = 29;
        var_83[4].Var2 = 9;
        var_82[30][9] = 0;
        var_82[29][9] = 4;
        var_83[4].Var5 = 4;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_83[4].Var1 = 28;
        var_83[4].Var2 = 10;
        var_82[29][9] = 0;
        var_82[28][10] = 4;
        var_83[4].Var5 = 1;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_83[4].Var1 = 27;
        var_83[4].Var2 = 10;
        var_82[28][10] = 0;
        var_82[27][10] = 4;
        var_83[4].Var5 = 4;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_83[4].Var6 = 0;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾄﾘｯｼｭ「でも…　ちょっと待って";
        comments_row2 = "　　　　どこかに浮かんできてる！？」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾄﾘｯｼｭ「どこよッ！";
        comments_row2a = "　　　　探してジョルノッ！」";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            var_83[4].Var5 = 7;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_83[4].Var5 = 4;
            // yield func337(); // メッセージ関係呼び出し
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_83[4].Var5 = 1;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_83[4].Var5 = 4;
            // yield func337(); // メッセージ関係呼び出し
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
        }
        for (let cnt1 = 0; cnt1 < 8; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_83[2].Var6 = 1;
        var_83[2].Var1 = 28;
        var_83[2].Var2 = 11;
        var_82[29][10] = 0;
        var_82[28][11] = 2;
        var_83[2].Var5 = 1;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_83[2].Var1 = 27;
        var_83[2].Var2 = 11;
        var_82[28][11] = 0;
        var_82[27][11] = 2;
        var_83[2].Var5 = 4;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_83[2].Var6 = 0;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ｼﾞｮﾙﾉ「いや…　探す必要はない";
        comments_row2 = "　　　　全てはもう終わっている…」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｼﾞｮﾙﾉ「ヤツはもう";
        comments_row2a = "　　　　どこへも向かうことはない」";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｼﾞｮﾙﾉ「終わりが無いのが【終わり】」";
        comments_row2a = "　　　　";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｼﾞｮﾙﾉ「それが";
        comments_row2a = "　　　【ｺﾞｰﾙﾄﾞ･ｴｸｽﾍﾟﾘｴﾝｽ･ﾚｸｲｴﾑ】」　";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_198 = 0;
        var_300 = 0;
        gsel(19);
        color(1, 1, 1);

        boxf(left = 0, top1 = 0, right = 340, bottom = 340);
        gsel(0);
        var_311 = 0;
        var_312 = 1;
        for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_311 = var_311 + 5;
        }
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾃﾞｨｱﾎﾞﾛはＧ･Ｅ･レクイエムの能力により";
        comments_row2 = "永遠に死に続けることとなった。";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "何百回……いや何千回死んだだろうか？";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "しかしある時、転機が訪れた…";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func050();
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

        yield func504();
        if (var_726 == 1) {
            var_752 = "01e.dat";
        }
        if (var_726 == 2) {
            var_752 = "02e.dat";
        }
        if (var_726 == 3) {
            var_752 = "03e.dat";
        }
        yield func230();
        bsave(file_name = var_752, data = var_753, data_size = null, offset = null);
        notesel(var_754);
        noteload(var_752);
        for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }

        var_65 = dim(length1= 70, length2 = 70, length3 = null, length4 = null);
        var_66 = 15;
        var_67 = 8;
        var_65[var_66][var_67] = 1;
        var_199 = 2;
        var_374 = 0;
        var_211 = 15;
        var_595 = 0;
        var_312 = 0;
        ivents_flag = 1; // 初めてヴェネチアホテルへ訪れた際のディアボロの呟きフラグ
        var_755 = 0;
        yield func159(); // ヴェネチアホテルでのイベントフラグ管理処理
        return;
    });
}

// 初めてヴェネチアホテルへ訪れた際のディアボロの呟き
function func151(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(151);
        ivents_flag = 2; // 初めてダンジョンを訪れた際のディアボロの呟きフラグ
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func335();
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「ハッ？！こ…今度は何だ？」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        var_199 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 4;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 2;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 6;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 2;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「どこから襲ってくるんだ？！」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        var_199 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 4;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 2;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 6;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 2;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「………」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「………」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「おかしいな…";
        comments_row2a = "何もおこらないぞ」";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「何か…";
        comments_row2a = "何かいつもと違うようだぞ？」";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func336();
        return;
    });
}

// 初めてダンジョンを訪れた際のディアボロの呟き
function func152(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(152);
        ivents_flag = 0; // イベントフラグ初期化
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func335();
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「いったいここはどこなんだ？！」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        var_199 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 4;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 2;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 6;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 2;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「もしかするとこれは…」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「聞いたことがあるぞ";
        comments_row2a = "『奇妙なダンジョン』の噂」";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「ある者はダンジョンの奥に";
        comments_row2a = "『黄金郷』を見つけ…」";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「またある者は『幸福』を";
        comments_row2a = "手に入れたと聞く」";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「ここならば…";
        comments_row2a = "このおれにも救いがあるに違いない！」";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func336();
        return;
    });
}
// ホテルの外初クリア後(エンヤホテル)、ヴェネチアホテルに戻った際のイベント
function func153(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(153);
        ivents_flag = 0; // イベントフラグ初期化
        var_374 = 1;
        var_271 = 1;
        var_756 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func335();
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_757 = 1;
        for (let cnt1 = 0; cnt1 < 37; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_756++;
            var_757++;
            if (var_757 == 10) {
        
                DSPLAY(audio_id = 104);
            }
        }
        var_271 = 0;
        var_757 = 0;
        var_756 = 0;
        var_374 = 0;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「いたたた…」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            var_758 = 1;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_758 = 2;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
        }
        var_758 = 0;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「ここはいつもの…」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        var_199 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 4;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 2;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 6;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 2;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「さっきのホテル、いや墓場にも";
        comments_row2a = "　手がかりになるものはなかった」";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「そして、結局はこの場所へ";
        comments_row2a = "　戻ってきてしまう…」";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「あの老婆は別の場所を探せと";
        comments_row2a = "　言っていたが、他に行ける場所は…」";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「ハッ？！」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        var_199 = 3;
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「そこの階段は…";
        comments_row2a = "　いつからそこにあった？？」";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「怪しいのは その中か？」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func336();
        return;
    });
}
// レクイエムの大迷宮初クリア後、ヴェネチアホテルに戻った際のイベント
function func154(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(154);
        ivents_flag = 0; // イベントフラグ初期化
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func335();
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「うう…こ、今度はどこだ…？」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        var_199 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 4;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 2;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 6;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 2;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "…またこのホテルか？";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "これもレクイエムの能力なのか、";
        comments_row2a = "それとも奇妙なダンジョンの力なのか…";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "どちらなのかはわからんが、";
        comments_row2a = "せいぜい足掻いてみるとしよう…";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func336();
        return;
    });
}

// ディアボロの試練開放イベント(岸辺露伴がヤギを追いかけるイベント)
function func155(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(155);
        ivents_flag = 0; // イベントフラグ初期化
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
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func335();
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_217 = 1;
        DSPLAY(audio_id = 228);
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_83[var_762].Var6 = 1;
        var_83[var_762].Var1 = 10;
        var_83[var_762].Var2 = 8;
        var_82[0][0] = 0;
        var_82[10][8] = var_762;
        var_83[var_762].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 4;
        var_83[var_762].Var1 = 11;
        var_83[var_762].Var2 = 8;
        var_82[10][8] = 0;
        var_82[11][8] = var_762;
        var_83[var_762].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 4;
        var_83[var_762].Var1 = 12;
        var_83[var_762].Var2 = 8;
        var_82[11][8] = 0;
        var_82[12][8] = var_762;
        var_83[var_762].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 4;
        var_83[var_762].Var1 = 13;
        var_83[var_762].Var2 = 8;
        var_82[12][8] = 0;
        var_82[13][8] = var_762;
        var_83[var_762].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 4;
        var_83[var_762].Var1 = 14;
        var_83[var_762].Var2 = 8;
        var_82[13][8] = 0;
        var_82[14][8] = var_762;
        var_83[var_762].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 4;
        var_83[var_762].Var1 = 14;
        var_83[var_762].Var2 = 9;
        var_82[14][8] = 0;
        var_82[14][9] = var_762;
        var_83[var_762].Var5 = 2;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 1;
        var_83[var_762].Var1 = 15;
        var_83[var_762].Var2 = 9;
        var_82[14][9] = 0;
        var_82[15][9] = var_762;
        var_83[var_762].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 2;
        var_83[var_762].Var1 = 16;
        var_83[var_762].Var2 = 9;
        var_82[15][9] = 0;
        var_82[16][9] = var_762;
        var_83[var_762].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 3;
        var_83[var_762].Var1 = 16;
        var_83[var_762].Var2 = 8;
        var_82[16][9] = 0;
        var_82[16][8] = var_762;
        var_83[var_762].Var5 = 8;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 6;
        var_83[var_762].Var1 = 16;
        var_83[var_762].Var2 = 7;
        var_82[16][8] = 0;
        var_82[16][7] = var_762;
        var_83[var_762].Var5 = 8;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 9;
        var_83[var_762].Var1 = 15;
        var_83[var_762].Var2 = 7;
        var_82[16][7] = 0;
        var_82[15][7] = var_762;
        var_83[var_762].Var5 = 4;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 8;
        var_83[var_762].Var1 = 15;
        var_83[var_762].Var2 = 6;
        var_82[15][7] = 0;
        var_82[15][6] = var_762;
        var_83[var_762].Var5 = 8;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 8;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_83[var_762].Var1 = 15;
        var_83[var_762].Var2 = 5;
        var_82[15][6] = 0;
        var_82[15][5] = var_762;
        var_83[var_762].Var5 = 8;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_760 = 3;

        DSPLAY(audio_id = 103); // 殴った時の効果音
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_760 = 2;
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_760 = 1;
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_760 = 0;
        var_83[var_762].Var1 = 0;
        var_83[var_762].Var2 = 0;
        var_82[15][5] = 0;
        var_82[0][0] = var_762;
        var_83[var_762].Var5 = 8;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_83[var_762].Var6 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「？」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func340(); // キー入力による選択処理
        var_198 = 0;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "露伴「まて――ッ！」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        var_83[var_761].Var6 = 1;
        var_83[var_761].Var1 = 10;
        var_83[var_761].Var2 = 8;
        var_82[0][0] = 0;
        var_82[10][8] = var_761;
        var_83[var_761].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 4;
        var_83[var_761].Var1 = 11;
        var_83[var_761].Var2 = 8;
        var_82[10][8] = 0;
        var_82[11][8] = var_761;
        var_83[var_761].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 4;
        var_83[var_761].Var1 = 12;
        var_83[var_761].Var2 = 8;
        var_82[11][8] = 0;
        var_82[12][8] = var_761;
        var_83[var_761].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 4;
        var_83[var_761].Var1 = 13;
        var_83[var_761].Var2 = 8;
        var_82[12][8] = 0;
        var_82[13][8] = var_761;
        var_83[var_761].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 4;
        var_83[var_761].Var1 = 14;
        var_83[var_761].Var2 = 8;
        var_82[13][8] = 0;
        var_82[14][8] = var_761;
        var_83[var_761].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 4;
        var_83[var_761].Var1 = 14;
        var_83[var_761].Var2 = 9;
        var_82[14][8] = 0;
        var_82[14][9] = var_761;
        var_83[var_761].Var5 = 2;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 1;
        var_83[var_761].Var1 = 15;
        var_83[var_761].Var2 = 9;
        var_82[14][9] = 0;
        var_82[15][9] = var_761;
        var_83[var_761].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 2;
        var_83[var_761].Var1 = 16;
        var_83[var_761].Var2 = 9;
        var_82[15][9] = 0;
        var_82[16][9] = var_761;
        var_83[var_761].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 3;
        var_83[var_761].Var1 = 16;
        var_83[var_761].Var2 = 8;
        var_82[16][9] = 0;
        var_82[16][8] = var_761;
        var_83[var_761].Var5 = 8;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 6;
        var_83[var_761].Var1 = 16;
        var_83[var_761].Var2 = 7;
        var_82[16][8] = 0;
        var_82[16][7] = var_761;
        var_83[var_761].Var5 = 8;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 9;
        var_83[var_761].Var1 = 15;
        var_83[var_761].Var2 = 7;
        var_82[16][7] = 0;
        var_82[15][7] = var_761;
        var_83[var_761].Var5 = 4;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 8;
        var_83[var_761].Var1 = 15;
        var_83[var_761].Var2 = 6;
        var_82[15][7] = 0;
        var_82[15][6] = var_761;
        var_83[var_761].Var5 = 8;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 8;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "露伴「くそッ！あと一歩のところで…」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func340(); // キー入力による選択処理
        var_83[var_761].Var5 = 2;
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_83[var_761].Var1 = 15;
        var_83[var_761].Var2 = 7;
        var_82[15][6] = 0;
        var_82[15][7] = var_761;
        var_83[var_761].Var5 = 2;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 8;
        var_83[var_761].Var1 = 16;
        var_83[var_761].Var2 = 7;
        var_82[15][7] = 0;
        var_82[16][7] = var_761;
        var_83[var_761].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 9;
        var_83[var_761].Var5 = 2;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_83[var_761].Var6 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「？？？」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func336();
        var_217 = 0;
        return;
    });
}

// 初めてダンジョンを訪れ、クリア出来ずにヴェネチアホテルに戻った際のディアボロの呟き
// GEレクイエムの能力で帰還した際も同様
function func156(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(156);
        if (var_759 == 0) {
            var_760 = 4;
        }
        var_374 = 1;
        var_271 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func335();
        var_757 = 1;
        for (let cnt1 = 0; cnt1 < 37; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_757++;
            if (var_757 == 10) {
        
                DSPLAY(audio_id = 104);
            }
        }
        var_271 = 0;
        var_757 = 0;
        var_374 = 0;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「いたたた…」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            var_758 = 1;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_758 = 2;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
        }
        var_758 = 0;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「ここはいつもの…」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        var_199 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 4;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 2;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 6;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = 2;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「何でまたここに";
        comments_row2a = "　落ちてくるんだ？？」";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func336();
        return;
    });
}
function func157(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(157);
        redraw(0);
        gmode(2);
        pos(0, 0);
        gcopy(17, 0, 0, 340, 340);
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
        var_763 = 0;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            var_764 = 0;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                pos(var_764 * var_35, var_763 * var_36);

                // buffer(8)は"img1.gif"。X座標400、Y座標0から切り取り長さ X方向40、Y方向40
                // 絵:??何もないぞ?? 
                gcopy(8, 400, 0, 40, 40);
                var_764 = var_764 + 1;
            }
            var_763 = var_763 + 1;
        }
        yield func048();
        if (var_765 == 1) {
            if (var_766 == 0 || var_766 == 1 || var_766 == 2) {
                yield func341();
            }
        }
        if (var_10 >= 1) {
            yield func338();
        }
        redraw(1);
        yield wait(2);
        return;
    });
}
// オープニング戦マップ配置処理
function func158(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(158);
        var_767 = 0;
        var_262 = 1;
        current_floor = 0;
        var_199 = 8;
        y_axis_map_image = 18;
        yield func293(); // ダンジョンマップ初期化処理(+ヴェネチアホテル)
        var_560 = 1;
        var_561 = 5;
        var_562 = 5;
        yield func288(); // ヴェネチアホテル+亀初期マップ+ローマ・ティベレ河マップ配置処理(亀の成長0)
        yield func248();
        // No = 0 なので、拠点(ホテル、亀、)
        dangeon_number = 0;
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
        return;
    });
}

// ヴェネチアホテルでのイベントフラグ管理処理
function func159(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(159);
        var_767 = 0;
        var_262 = 1;
        current_floor = 0;
        var_199 = 2;
        var_68 = 1;
        y_axis_map_image = 1;
        yield func293(); // ダンジョンマップ初期化処理(+ヴェネチアホテル)
        var_560 = 1;
        var_561 = 5;
        var_562 = 5;
        if (var_559 == 0) {
            yield func288(); // ヴェネチアホテル+亀初期マップ+ローマ・ティベレ河マップ配置処理(亀の成長0)
        }
        if (var_559 == 1) {
            yield func289(); // ヴェネチアホテル+亀マップ配置処理(亀の成長1)
        }
        if (var_559 == 2) {
            yield func290(); // ヴェネチアホテル+亀マップ配置処理(亀の成長2)
        }
        if (var_559 == 3) {
            yield func291(); // ヴェネチアホテル+亀マップ配置処理(亀の成長3)
        }
        if (var_559 == 4) {
            yield func292(); // ヴェネチアホテル+亀マップ配置処理(亀の成長4)
        }
        yield func248();
        // No = 0 なので、拠点(ホテル、亀、)
        dangeon_number = 0;
        var_532 = 0;

        var_77 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
        var_78 = ItemInfo.dim(300);

        var_82 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
        var_83 = CharactorInfo.dim(300);

        var_73 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
        yield func160(); // ヴェネチアホテルへ追加するNPCの設定処理(亀、岸辺露伴、ロッコ・バロッコ所長)
        if (var_66 == 13 && var_67 == 9) {
            var_65[var_66][var_67] = 0;
            var_66 = 13;
            var_67 = 8;
            var_65[13][8] = 1;
        }
        var_337 = 0;
        var_768 = 1;
        var_769 = 1;
        yield func536();
        var_769 = 4;
        yield func536();
        if (var_404 >= 1) {
            var_769 = 2;
            yield func536();
        }
        if (var_526 >= 1) {
            var_769 = 3;
            yield func536();
        }
        if (var_537 >= 1 || var_19 == 1) {
            var_769 = 5;
            yield func536();
        }
        var_768 = 0;
        var_769 = 0;
        yield func181();
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        var_217 = 0;
        var_205 = 1;
        yield func231();
        yield func076(); // マップ背景画像の読込
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            yield func339();
        }
        var_68 = 1;
        onexit(1);
        if (var_595 == 0) {
            yield func113(); // ヴェネチアホテルのBGMを選曲
        }
        if (var_595 == 1) {
            yield func114(); // 亀の中の選曲(BGM "20th Century Boy")
        }
        if (ivents_flag == 1) {
            yield func151(); // 初めてヴェネチアホテルへ訪れた際のディアボロの呟き
        }
        if (ivents_flag == 3) {
            ivents_flag = 0; // イベントフラグ初期化
            yield func153(); // ホテルの外初クリア後(エンヤホテル)、ヴェネチアホテルに戻った際のイベント
        }
        if (ivents_flag == 5) {
            ivents_flag = 0; // イベントフラグ初期化
            yield func154(); // レクイエムの大迷宮初クリア後、ヴェネチアホテルに戻った際のイベント
        }
        if (var_770 == 1) {
            var_770 = 0;
            yield func156(); // 初めてダンジョンを訪れ、クリア出来ずにヴェネチアホテルに戻った際のディアボロの呟き
        }
        if (ivents_flag == 6) {
            ivents_flag = 0; // イベントフラグ初期化
            yield func155(); // ディアボロの試練開放イベント(岸辺露伴がヤギを追いかけるイベント)
        }
        yield func837(); // 店のアイテムを購入せずに帰還した際、NPC マリリン・マンソンの登場処理
        var_205 = 1;
        yield func231();
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
// ヴェネチアホテルへ追加するNPCの設定処理(亀、岸辺露伴、ロッコ・バロッコ所長)
function func160(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(160);
        var_97 = 0;
        if (var_404 >= 1) { // ホテルの外クリアフラグ
            var_97 = var_97 + 1;
            var_771 = var_97;
            var_82[13][9] = var_97;
            var_83[var_97].Var0 = 55; // enemy_list = 55 なので亀
            var_83[var_97].Var1 = 13;
            var_83[var_97].Var2 = 9;
            var_83[var_97].Var3 = 20;
            var_83[var_97].Var4 = 1;
            var_83[var_97].Var5 = 3;
            var_83[var_97].Var10 = 1;
            var_83[var_97].Var14 = 1; // ランダム移動??
            var_83[var_97].Var31 = 4;
            var_83[var_97].Var32 = rnd(6);
        }
        if (var_759 >= 1) { // 岸辺露伴とのイベントフラグがON
            var_97 = var_97 + 1;
            var_761 = var_97;
            var_82[16][7] = var_97;
            var_83[var_97].Var0 = 142; // enemy_list = 142 なので岸辺露伴
            var_83[var_97].Var1 = 16;
            var_83[var_97].Var2 = 7;
            var_83[var_97].Var3 = 20;
            var_83[var_97].Var4 = 0;
            var_83[var_97].Var5 = 2;
            var_83[var_97].Var10 = 1;
            var_83[var_97].Var31 = 4;
            var_83[var_97].Var32 = rnd(6);
            
            // ここから下はオリジナルには無いロッコ・バロッコ所長をヴェネチアホテルへ追加する要素。
            // おそらくウェブ版にて独自に追加したと思われる。Ver0.1310で廃止。
            var_97 = var_97 + 1;
            var_761 = var_97;
            var_82[18][10] = var_97;
            var_83[var_97].Var0 = 173; // enemy_list = 173 なのでロッコ・バロッコ所長
            var_83[var_97].Var1 = 18;
            var_83[var_97].Var2 = 10;
            var_83[var_97].Var3 = 20;
            var_83[var_97].Var4 = 0;
            var_83[var_97].Var5 = 2;
            var_83[var_97].Var10 = 1;
            var_83[var_97].Var31 = 4;
            var_83[var_97].Var32 = rnd(6);

        }
        return;
    });
}

//亀の中に入った時の表示
function func161(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(161);
        var_243 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "亀の中に入った";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func114(); // 亀の中の選曲(BGM "20th Century Boy")
        var_65[var_66][var_67] = 0;
        var_66 = 14;
        var_67 = 23;
        yield func016();
        var_595 = 1;
        var_374 = 1;
        var_772 = 1;
        var_773 = 1;
        var_774 = 0;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_773++;
            var_774 = var_774 + 20;
        }
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_773++;
        }
        var_773 = 0;
        var_772 = 0;
        var_374 = 0;
        var_199 = 2;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}

function func162(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_777++;
        }
        var_774 = 60;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_777++;
            var_774 = var_774 - 20;
        }
        var_777 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_65[var_66][var_67] = 0;
        var_66 = 13;
        var_67 = 10;
        yield func016();
        var_595 = 0;
        var_773 = 7;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_773++;
        }
        var_773 = 0;
        var_772 = 0;
        var_374 = 0;
        var_199 = 2;
        yield func113(); // ヴェネチアホテルのBGMを選曲
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
// ヴェネチアホテルのアイテム配置
function func163(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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

        // buffer(18)は"img4.gif"。X座標var_779、Y座標var_780から切り取り長さ X方向340、Y方向340
        // 絵: 
        gcopy(18, var_779, var_780, 340, 340); // buffer(18)は"img4.gif" // マップ描画 (ヴェネチアホテル、亀の中)
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

            // buffer(18)は"img4.gif"。X座標1400、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵: ヴェネチアホテルにあるPC (NPCが画面内に出てくる直前のノイズ画面)
            gcopy(18, 1400, 680, 40, 40); // buffer(18)は"img4.gif"
        }
        if (var_783 == 1) {

            // buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            gcopy(18, 1440, 680, 40, 40); // buffer(18)は"img4.gif"
        }
        if (var_783 == 2) {


            gcopy(18, 1440, 720, 40, 40); // buffer(18)は"img4.gif"
        }
        if (var_783 == 3) {


            gcopy(18, 1440, 760, 40, 40); // buffer(18)は"img4.gif"
        }
        if (var_783 == 4) {


            gcopy(18, 1440, 800, 40, 40); // buffer(18)は"img4.gif"
        }
        if (var_783 == 5) {


            gcopy(18, 1440, 840, 40, 40); // buffer(18)は"img4.gif"
        }
        if (var_783 == 6) {


            gcopy(18, 1440, 880, 40, 40); // buffer(18)は"img4.gif"
        }
        if (var_783 == 7) {


            gcopy(18, 1440, 920, 40, 40); // buffer(18)は"img4.gif"
        }
        if (var_783 == 8) {


            gcopy(18, 1440, 960, 40, 40); // buffer(18)は"img4.gif"
        }
        if (var_783 == 9) {


            gcopy(18, 1440, 1000, 40, 40); // buffer(18)は"img4.gif"
        }
        if (var_783 == 10) {


            gcopy(18, 1440, 1040, 40, 40); // buffer(18)は"img4.gif"
        }
        if (var_783 == 11) {


            gcopy(18, 1440, 1080, 40, 40); // buffer(18)は"img4.gif"
        }
        if (var_783 == 12) {


            gcopy(18, 1400, 720, 40, 40); // buffer(18)は"img4.gif"
        }
        if (var_783 == 13) {


            gcopy(18, 1400, 760, 40, 40); // buffer(18)は"img4.gif"
        }
        if (var_783 == 14) {


            gcopy(18, 1400, 800, 40, 40); // buffer(18)は"img4.gif"
        }
        if (var_783 == 15) {


            gcopy(18, 1400, 840, 40, 40); // buffer(18)は"img4.gif"
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
        // ディアボロの試練解放フラグがON
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
            gcopy(18, 1400, 1000, 40, 80); // buffer(18)は"img4.gif" 壁に開いた穴(ディアボロの試練への入り口)
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
                    gcopy(18, 1360, 1000, 40, 80); // buffer(18)は"img4.gif"
                }
                if (var_760 == 3) {
                    gcopy(18, 0, 240, 40, 40); // buffer(18)は"img4.gif"
                }
                if (var_760 == 2) {
                    gcopy(18, 0, 280, 40, 40); // buffer(18)は"img4.gif"
                }
                if (var_760 == 1) {
                    gcopy(18, 0, 320, 40, 40); // buffer(18)は"img4.gif"
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
            gcopy(18, 80, 1080, 120, 120); // buffer(18)は"img4.gif" // DIO用にブラインドが降ろされた窓
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
            gcopy(18, 1360, 1120, 80, 80); // DIOとプッチ神父?
        }

        if (var_523 >= 1) { // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
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
                gcopy(18, 0, 0, 40, 40); // buffer(18)は"img4.gif" 地球儀
            }
            if (var_784 == 1 || var_784 == 4) {
                gcopy(18, 0, 40, 40, 40); // buffer(18)は"img4.gif" 地球儀
            }
            if (var_784 == 2 || var_784 == 5) {
                gcopy(18, 0, 80, 40, 40); // buffer(18)は"img4.gif" 地球儀
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
            gcopy(18, 80, 360, 120, 360); // buffer(18)は"img4.gif" 細長いやつ
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
            gcopy(18, 960, 1040, 360, 160); // buffer(18)は"img4.gif" 細長いやつ
        }
        return;
    });
}

function func164(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        gcopy(18, var_779, var_780, 340, 340); // buffer(18)は"img4.gif"
        return;
    });
}
function func165(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            redraw(0);
            yield func168(); // ダンジョンクリア時のスコア判定
            yield func180();
            if (var_10 >= 1) {
                yield func338();
            }
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func339();
            }
            redraw(1);
            var_599 = var_599 + 1;
        }
        var_599 = 0;
        yield func166();
    });
}
function func166(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(166);
        redraw(0);
        yield func168(); // ダンジョンクリア時のスコア判定
        if (var_10 >= 1) {
            yield func338();
        }
        redraw(1);
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func339();
        }
        yield func080(); // 各キー入力確認
        if (var_767 == 1) {
            if (key_Z_on == 1 || key_A_on == 1) {
                yield func178(); // 処理確認タイマー(3m秒)
                yield func167();
                var_767 = 0;
                var_788 = 0;
                var_790 = 0;
                var_791 = 0;
                var_629 = 0;
                yield func159(); // ヴェネチアホテルでのイベントフラグ管理処理
                return;
            }
            if (key_X_on == 1) {
                yield func178(); // 処理確認タイマー(3m秒)
                yield func167();
                var_767 = 0;
                var_788 = 0;
                var_790 = 0;
                var_791 = 0;
                var_629 = 0;
                yield func159(); // ヴェネチアホテルでのイベントフラグ管理処理
                return;
            }
        }
        if (var_767 == 0) {
            if (key_Z_on == 1 || key_A_on == 1) {
                if (var_792[var_793][var_786][3] != 0) {
                    var_794 = 1;
                    var_795 = 225;
                    yield func178(); // 処理確認タイマー(3m秒)
                    yield func169();
                    return;
                }
            }
            if (key_X_on == 1) {
                var_790 = 0;
                var_791 = 0;
                yield func822();
                var_629 = 0;
                yield func051();
                yield func820();
                return;
            }
            if (var_257 == 1 && var_785 == 1) {
                var_785 = 2;
                var_786 = 6;
                var_787 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func339();
                }
                yield func166();
                return;
            }
            if (var_257 == 1 && var_785 == 2) {
                var_785 = 3;
                var_786 = 11;
                var_787 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func339();
                }
                yield func166();
                return;
            }
            if (var_257 == 1 && var_785 == 3) {
                var_785 = 4;
                var_786 = 16;
                var_787 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func339();
                }
                yield func166();
                return;
            }
            if (var_257 == 1 && var_785 == 4) {
                var_785 = 1;
                var_786 = 1;
                var_787 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func339();
                }
                yield func166();
                return;
            }
            if (var_254 == 1 && var_785 == 1) {
                var_785 = 4;
                var_786 = 16;
                var_787 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func339();
                }
                yield func166();
                return;
            }
            if (var_254 == 1 && var_785 == 2) {
                var_785 = 1;
                var_786 = 1;
                var_787 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func339();
                }
                yield func166();
                return;
            }
            if (var_254 == 1 && var_785 == 3) {
                var_785 = 2;
                var_786 = 6;
                var_787 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func339();
                }
                yield func166();
                return;
            }
            if (var_254 == 1 && var_785 == 4) {
                var_785 = 3;
                var_786 = 11;
                var_787 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func339();
                }
                yield func166();
                return;
            }
            if (var_259 == 1 && var_787 <= 4) {
                var_786 = var_786 + 1;
                var_787 = var_787 + 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func339();
                }
                yield func166();
                return;
            }
            if (var_255 == 1 && var_787 >= 2) {
                var_786 = var_786 - 1;
                var_787 = var_787 - 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func339();
                }
                yield func166();
                return;
            }
            if (var_259 == 1 && var_787 == 5) {
                var_786 = var_786 - 4;
                var_787 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func339();
                }
                yield func166();
                return;
            }
            if (var_255 == 1 && var_787 == 1) {
                var_786 = var_786 + 4;
                var_787 = 5;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func339();
                }
                yield func166();
                return;
            }
        }
        yield func166();
        return;
    });
}
function func167(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(167);
        var_599 = 5;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            redraw(0);
            yield func168(); // ダンジョンクリア時のスコア判定
            yield func180();
            if (var_10 >= 1) {
                yield func338();
            }
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func339();
            }
            redraw(1);
            var_599 = var_599 - 1;
        }
        var_599 = 0;
        return;
    });
}
// ダンジョンクリア時のスコア判定
function func168(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            if (var_796 < 20) {
                color(255, 255, 255);
                if (var_794 != 0) {
                    color(150, 150, 150);
                }
                if (var_796 == var_788) {
                    color(255, 0, 0);
                }
                pos(30, var_797 * 31);
                mes("" + var_796 + "位");
                if (var_792[var_793][var_796][3] != 0) {
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
                    yield func177(); // 死因原因
                    mes("" + var_798);
                }
                if (var_792[var_793][var_796][3] == 0) {
                    pos(70, var_797 * 31);
                    mes("");
                }
            }
            if (var_796 == 20 && var_789 == 0) {
                color(255, 255, 255);
                if (var_794 != 0) {
                    color(150, 150, 150);
                }
                if (var_796 == var_788) {
                    color(255, 0, 0);
                }
                pos(30, var_797 * 31);
                mes("" + var_796 + "位");
                if (var_792[var_793][var_796][3] != 0) {
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
                    yield func177(); // 死因原因
                    mes("" + var_798);
                }
                if (var_792[var_793][var_796][3] == 0) {
                    pos(70, var_797 * 31);
                    mes("");
                }
            }
            if (var_796 == 20 && var_789 == 1) {
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
                yield func177(); // 死因原因
                mes("" + var_798);
            }
            var_796 = var_796 + 1;
            var_797 = var_797 + 1;
        }
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
        if (var_792[var_793][var_786][3] != 0) {
            disc_rarity = 0;
            pos(30, 225);
            belongings_item_list = var_792[var_793][var_786][4];
            disc_rarity = 0;
            if (belongings_item_list > 1000) {
                if (belongings_item_list >= 1000 && belongings_item_list < 2000) {
                    belongings_item_list = belongings_item_list - 1000;
                    disc_rarity = 1;
                }
                if (belongings_item_list >= 2000 && belongings_item_list < 3000) {
                    belongings_item_list = belongings_item_list - 2000;
                    disc_rarity = 2;
                }
                if (belongings_item_list >= 3000 && belongings_item_list < 4000) {
                    belongings_item_list = belongings_item_list - 3000;
                    disc_rarity = 3;
                }
            }
            yield func492(); // アイテムリスト呼び出し
            color(255, 255, 0);
            if (belongings_item_list != 0) {
                var_799 = "攻撃：" + item_name;
                if (var_792[var_793][var_786][5] != 0) {
                    var_799 = var_799 + "＋" + var_792[var_793][var_786][5];
                }
                if (var_792[var_793][var_786][6] >= 2) {
                    var_799 = var_799 + "★" + var_792[var_793][var_786][6];
                }
                mes(var_799);
            }
            if (belongings_item_list == 0) {
                mes("攻撃：なし");
            }
            pos(30, 242);
            belongings_item_list = var_792[var_793][var_786][7];
            disc_rarity = 0;
            if (belongings_item_list > 1000) {
                if (belongings_item_list >= 1000 && belongings_item_list < 2000) {
                    belongings_item_list = belongings_item_list - 1000;
                    disc_rarity = 1;
                }
                if (belongings_item_list >= 2000 && belongings_item_list < 3000) {
                    belongings_item_list = belongings_item_list - 2000;
                    disc_rarity = 2;
                }
                if (belongings_item_list >= 3000 && belongings_item_list < 4000) {
                    belongings_item_list = belongings_item_list - 3000;
                    disc_rarity = 3;
                }
            }
            yield func492(); // アイテムリスト呼び出し
            color(255, 180, 90);
            if (belongings_item_list != 0) {
                var_799 = "防御：" + item_name;
                if (var_792[var_793][var_786][8] != 0) {
                    var_799 = var_799 + "＋" + var_792[var_793][var_786][8];
                }
                if (var_792[var_793][var_786][9] >= 2) {
                    var_799 = var_799 + "★" + var_792[var_793][var_786][9];
                }
                mes(var_799);
            }
            if (belongings_item_list == 0) {
                mes("防御：なし");
            }
            pos(30, 259);
            belongings_item_list = var_792[var_793][var_786][10];
            disc_rarity = 0;
            if (belongings_item_list > 1000) {
                if (belongings_item_list >= 1000 && belongings_item_list < 2000) {
                    belongings_item_list = belongings_item_list - 1000;
                    disc_rarity = 1;
                }
                if (belongings_item_list >= 2000 && belongings_item_list < 3000) {
                    belongings_item_list = belongings_item_list - 2000;
                    disc_rarity = 2;
                }
                if (belongings_item_list >= 3000 && belongings_item_list < 4000) {
                    belongings_item_list = belongings_item_list - 3000;
                    disc_rarity = 3;
                }
            }
            yield func492(); // アイテムリスト呼び出し
            color(240, 0, 240);
            if (belongings_item_list != 0) {
                var_799 = "能力：" + item_name;
                if (var_792[var_793][var_786][11] != 0) {
                    var_799 = var_799 + "＋" + var_792[var_793][var_786][11];
                }
                if (var_792[var_793][var_786][12] >= 2) {
                    var_799 = var_799 + "★" + var_792[var_793][var_786][12];
                }
                mes(var_799);
            }
            if (belongings_item_list == 0) {
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
        }
        return;
    });
}


function func169(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(169);
        redraw(0);
        yield func168(); // ダンジョンクリア時のスコア判定
        if (var_10 >= 1) {
            yield func338();
        }
        redraw(1);
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func339();
        }
        yield func080(); // 各キー入力確認
        if (key_Z_on == 1 || key_A_on == 1) {
            if (var_794 == 1 && var_792[var_793][var_786][4] != 0) {
                var_800 = 1;
                yield func178(); // 処理確認タイマー(3m秒)
                yield func171();  // 配列処理 (装備discの能力、Track等の並び替え)
                return;
            }
            if (var_794 == 2 && var_792[var_793][var_786][7] != 0) {
                var_800 = 1;
                yield func178(); // 処理確認タイマー(3m秒)
                yield func171();  // 配列処理 (装備discの能力、Track等の並び替え)
                return;
            }
            if (var_794 == 3 && var_792[var_793][var_786][10] != 0) {
                var_800 = 1;
                yield func178(); // 処理確認タイマー(3m秒)
                yield func171();  // 配列処理 (装備discの能力、Track等の並び替え)
                return;
            }
        }
        if (key_X_on == 1) {
            var_794 = 0;
            yield func178(); // 処理確認タイマー(3m秒)
            yield func166();
            return;
        }
        if (var_259 == 1 && var_794 != 3) {
            var_794 = var_794 + 1;
            var_795 = var_795 + 15;
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                yield func339();
            }
            yield func169();
            return;
        }
        if (var_259 == 1 && var_794 == 3) {
            var_794 = 1;
            var_795 = 225;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func339();
            }
            yield func169();
            return;
        }
        if (var_255 == 1 && var_794 != 1) {
            var_794 = var_794 - 1;
            var_795 = var_795 - 15;
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                yield func339();
            }
            yield func169();
            return;
        }
        if (var_255 == 1 && var_794 == 1) {
            var_794 = 3;
            var_795 = 255;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func339();
            }
            yield func169();
            return;
        }
        yield func169();
        return;
    });
}

// 装備、射撃discの説明欄 (合成した能力などの表示)
function func170(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        // 攻撃が特殊disc??
        if (var_802 == 100 || var_802 == 108 || var_802 == 110 || var_802 == 113 || var_802 == 118 || var_802 == 123 || var_802 == 398) {
            pos(285, 70);
            gcopy(9, 360, 20, 40, 20);
        }
        belongings_item_list = var_802;
        yield func492(); // アイテムリスト呼び出し
        item_icon_id = var_802;
        yield func070(); // アイテムの表示用アイコン座標指定
        if (disc_rarity == 0) {
            buffer_id = 11;
        }
        if (disc_rarity == 1) {
            buffer_id = 1;
        }
        if (disc_rarity == 2) {
            buffer_id = 16;
        }
        if (disc_rarity == 3) {
            buffer_id = 29;
        }
        pos(20, 50);
        gcopy(buffer_id, buffer_x_axis, buffer_y_axis, 40, 40);
        pos(70, 65);
        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
        color(0, 255, 0);
        if (item_modified_value == 0 && number_of_abilities <= 1) {
            mes(item_name);
        }
        if (item_modified_value == 0 && number_of_abilities > 1) {
            mes("" + item_name + " ★" + number_of_abilities);
        }
        if (item_modified_value > 0 && number_of_abilities <= 1) {
            mes("" + item_name + "+" + item_modified_value);
        }
        if (item_modified_value > 0 && number_of_abilities > 1) {
            mes("" + item_name + "+" + item_modified_value + " ★" + number_of_abilities);
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
        mes("" + item_description1 + "　空き容量 " + free_space_value);
        pos(30, 120);
        mes(effects_message);
        track_number = 1;
        for (let cnt1 = 0; cnt1 < var_810 + free_space_value; ++cnt1) {
            pos(30, track_number * 20 + 120);
            color(255, 255, 255);
            font("MS UI ゴシック", 12, 1);
            mes("Track" + track_number + ":");
            track_number = track_number + 1;
        } 
        track_number = 1;
        for (let cnt1 = 0; cnt1 < var_810 + free_space_value; ++cnt1) {
            
            pos(80, track_number * 20 + 120);
            
            belongings_item_list = var_811[track_number];
            
            yield func492(); // アイテムリスト呼び出し
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
            if (var_813[track_number] != "") {
                mes("" + var_813[track_number]);
            }
            if (var_813[track_number] == "") {
                mes("空き");
            }
            track_number = track_number + 1;
        }
        return;
    });
}

// 配列処理 (装備discの能力、Track等の並び替え)
function func171(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(171);
        if (var_794 == 1) {
            var_802 = var_792[var_793][var_786][4];
            belongings_item_list = var_792[var_793][var_786][4];
            yield func492(); // アイテムリスト呼び出し
            var_814 = var_792[var_793][var_786][4];
            item_modified_value = var_792[var_793][var_786][5];
            free_space_value = var_792[var_793][var_786][53];
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
        }
        if (var_794 == 2) {
            var_802 = var_792[var_793][var_786][7];
            belongings_item_list = var_792[var_793][var_786][7];
            yield func492(); // アイテムリスト呼び出し
            var_814 = var_792[var_793][var_786][7];
            item_modified_value = var_792[var_793][var_786][8];
            free_space_value = var_792[var_793][var_786][54];
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
        }
        if (var_794 == 3) {
            var_802 = var_792[var_793][var_786][10];
            belongings_item_list = var_792[var_793][var_786][10];
            yield func492(); // アイテムリスト呼び出し
            var_814 = var_792[var_793][var_786][10];
            item_modified_value = var_792[var_793][var_786][11];
            free_space_value = var_792[var_793][var_786][55];
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
        }
        number_of_abilities = var_810;
        disc_rarity = 0;
        if (belongings_item_list > 1000) {
            if (belongings_item_list >= 1000 && belongings_item_list < 2000) {
                belongings_item_list = belongings_item_list - 1000;
                var_802 = var_802 - 1000;
                var_814 = var_814 - 1000;
                disc_rarity = 1;
            }
            if (belongings_item_list >= 2000 && belongings_item_list < 3000) {
                belongings_item_list = belongings_item_list - 2000;
                var_802 = var_802 - 2000;
                var_814 = var_814 - 2000;
                disc_rarity = 2;
            }
            if (belongings_item_list >= 3000 && belongings_item_list < 4000) {
                belongings_item_list = belongings_item_list - 3000;
                var_802 = var_802 - 3000;
                var_814 = var_814 - 3000;
                disc_rarity = 3;
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
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            belongings_item_list = var_792[var_793][var_786][var_825];
            yield func492(); // アイテムリスト呼び出し
            if (item_ability_description == "") {
                var_826 = var_826 - 1;
                break;
            }
            var_813[var_826] = item_ability_description;
            var_811[var_826] = belongings_item_list;
            var_826 = var_826 + 1;
            var_825 = var_825 + 1;
        }
        // belongings_item_list == 104 は ｻﾞ･ﾊﾝﾄﾞのDISC
        if (belongings_item_list == 104) {
            var_826 = var_826 + 1;
            var_813[var_826] = "こわれるぞ。";
            var_811[var_826] = 199;
            var_810 = var_810 + 1;
        }
        var_801 = 170;
        if (var_814 == 104) {
            var_801 = 190;
        }
        var_801 = (var_810 + free_space_value - 2) * 19 + 190;
        yield func172();
    });
}


function func172(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(172);
        redraw(0);
        yield func170(); // 装備discの説明欄 (合成した能力などの表示)
        if (var_10 >= 1) {
            yield func338();
        }
        redraw(1);
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func339();
        }
        yield func080(); // 各キー入力確認
        if (key_X_on == 1) {
            var_800 = 0;
            yield func178(); // 処理確認タイマー(3m秒)
            yield func169();
            return;
        }
        yield func172();
        return;
    });
}


function func173(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        yield func177(); // 死因原因
        if (var_830 != 0) {
            var_831 = var_830;
        }
        var_829 = 0;
        if (var_356 < 300 && var_356 != 0) {
            var_832 = var_833 + 1;
            var_834 = 0;
            for (let cnt2 = 0; cnt2 < var_832; ++cnt2) {
                if (var_835[cnt2] == var_356) {
                    var_834 = 1;
                    break;
                }
            }
            if (var_834 == 0) {
                var_833 = var_833 + 1;
                var_835[var_833] = var_356;
            }
        }
        yield func174();
        yield func175(); // スコア表示？ gettime等時間に関するものがある
        yield func176();
        var_836 = dangeon_number;
        var_837 = current_floor;
        yield func808();
        var_356 = 0;
        yield func233();
        var_205 = 1;
        yield func231();
        onexit(0);
        var_767 = 1;
        var_791 = var_790;
        yield func165();
        return;
    });
}

// アイテム追加関係？ var_224がある。
function func174(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(174);
        var_838 = 10;
        var_480 = 1;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_233[var_480].Var11 != 1) {
                belongings_item_list = var_233[var_480].Var0;
                yield func492(); // アイテムリスト呼び出し
                var_482 = 0;
                var_482 = (var_233[var_480].Var3 + var_233[var_480].Var4) * 50;
                if (var_233[var_480].Var19 > 1) {
                    var_482 = var_233[var_480].Var19 * 500 + var_482;
                }
                var_838 = var_838 + buying_price + var_482;
            }
            if (var_233[var_480].Var0 >= 800 && var_233[var_480].Var0 < 900) {
                var_484 = 1;
                var_485 = var_233[var_480].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (var_486[var_485][var_484][0] > 0 && var_486[var_485][var_484][11] != 1) {
                        belongings_item_list = var_486[var_485][var_484][0];
                        yield func492(); // アイテムリスト呼び出し
                        var_482 = 0;
                        var_482 = (var_486[var_485][var_484][3] + var_486[var_485][var_484][4]) * 50;
                        if (var_486[var_485][var_484][19] > 1) {
                            var_482 = var_486[var_485][var_484][19] * 500 + var_482;
                        }
                        var_838 = var_838 + buying_price + var_482;
                    }
                    var_484 = var_484 + 1;
                }
            }
            var_480 = var_480 + 1;
        }
        if (current_floor >= 2) {
            var_838 = current_floor * 2000 + var_838;
        }
        var_838 = var_839 * 50 + var_838;
        var_838 = var_533 + var_838;
        var_533 = 0;
        var_839 = 0;
        return;
    });
}

// スコア表示？ gettime等時間に関するものがある
function func175(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(175);
        var_793 = dangeon_number;
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
        var_792[var_793][0][13] = dangeon_number;
        var_792[var_793][0][14] = current_level;
        var_792[var_793][0][15] = var_352;
        var_792[var_793][0][16] = var_566;
        var_792[var_793][0][17] = var_565;
        var_792[var_793][0][18] = var_567;
        var_792[var_793][0][50] = gettime(0); // now.getFullYear();// 年（year）。｢20**｣という数値が返る。
        var_792[var_793][0][51] = gettime(1); // now.getMonth()+1;// 月（month）。「1～12」の範囲の数値が返る。
        var_792[var_793][0][52] = gettime(3); // now.getDate();// 日（day）。「1～31」の範囲の数値が返る。
        var_792[var_793][0][19] = 0;
        if (kougeki_disc_id != 0) {
            yield func426();
            var_792[var_793][0][4] = kougeki_disc_id;
            if (var_233[var_553].Var13 == 1) {
                var_792[var_793][0][4] = kougeki_disc_id + 1000;
            }
            if (var_233[var_553].Var13 == 2) {
                var_792[var_793][0][4] = kougeki_disc_id + 2000;
            }
            if (var_233[var_553].Var13 == 3) {
                var_792[var_793][0][4] = kougeki_disc_id + 3000;
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
        }
        if (bougyo_disc_id != 0) {
            yield func427();
            var_792[var_793][0][7] = bougyo_disc_id;
            if (var_233[var_554].Var13 == 1) {
                var_792[var_793][0][7] = bougyo_disc_id + 1000;
            }
            if (var_233[var_554].Var13 == 2) {
                var_792[var_793][0][7] = bougyo_disc_id + 2000;
            }
            if (var_233[var_554].Var13 == 3) {
                var_792[var_793][0][7] = bougyo_disc_id + 3000;
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
        }
        if (nouryoku_disc_id != 0) {
            yield func428();
            var_792[var_793][0][10] = nouryoku_disc_id;
            if (var_233[var_555].Var13 == 1) {
                var_792[var_793][0][10] = nouryoku_disc_id + 1000;
            }
            if (var_233[var_555].Var13 == 2) {
                var_792[var_793][0][10] = nouryoku_disc_id + 2000;
            }
            if (var_233[var_555].Var13 == 3) {
                var_792[var_793][0][10] = nouryoku_disc_id + 3000;
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
        }
        return;
    });
}
function func176(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(176);
        var_789 = 0;
        var_841 = var_792[var_793][0][3];
        var_842 = 0;
        var_843 = 0;
        var_844 = 1;
        var_845 = dim(100);
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            var_846 = var_792[var_793][var_843][3];
            var_847 = var_792[var_793][var_844][3];
            if (var_842 == 0 && var_841 > var_847) {
                var_848 = 0;
                for (let cnt3 = 0; cnt3 < 70; ++cnt3) {
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
                for (let cnt3 = 0; cnt3 < 70; ++cnt3) {
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
        return;
    });
}
// 死因原因
function func177(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        return;
    });
}
// 処理確認タイマー(3m秒)
function func178(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(178);
        for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
            yield wait(3);
            yield func080(); // 各キー入力確認
            if (key_Z_on == 0 && key_X_on == 0 && key_A_on == 0) {
                break;
            }
        }
        return;
    });
}


function func179(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(179);
        for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
            yield func080(); // 各キー入力確認
            if (var_199 == 6 && var_257 == 0) {
                break;
            }
            if (var_199 == 4 && var_254 == 0) {
                break;
            }
            if (var_199 == 2 && var_259 == 0) {
                break;
            }
            if (var_199 == 8 && var_255 == 0) {
                break;
            }
            if (var_199 == 1 && var_258 == 0) {
                if (var_254 == 0 || var_259 == 0) {
                    break;
                }
            }
            if (var_199 == 3 && var_260 == 0) {
                if (var_257 == 0 || var_259 == 0) {
                    break;
                }
            }
            if (var_199 == 7 && var_253 == 0) {
                if (var_254 == 0 || var_255 == 0) {
                    break;
                }
            }
            if (var_199 == 9 && var_256 == 0) {
                if (var_257 == 0 || var_255 == 0) {
                    break;
                }
            }
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}
function func180(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        return;
    });
}

// アイテム追加関係？ var_224がある。
function func181(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(181);
        var_336 = 0;
        var_852 = 1;
        for (let cnt1 = 0; cnt1 < 48; ++cnt1) {
            if (var_853[var_852][0] != 0) {
                yield func724();
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
                if (var_78[var_854].Var0 >= 800 && var_78[var_854].Var0 < 900) {
                    var_855 = dim(100);
                    var_856 = 1;
                    for (let cnt4 = 0; cnt4 < var_224; ++cnt4) {
                        if (var_233[var_856].Var0 >= 800 && var_233[var_856].Var0 < 900) {
                            var_857 = var_233[var_856].Var6;
                            var_855[var_857]++;
                        }
                        var_856++;
                    }
                    var_856 = 1;
                    for (let cnt4 = 0; cnt4 < 49; ++cnt4) {
                        if (var_853[var_856][0] >= 800 && var_853[var_856][0] < 900) {
                            var_857 = var_853[var_856][6];
                            var_855[var_857]++;
                            if (var_855[var_857] >= 2) {
                                yield func395();
                                var_78[var_854].Var6 = var_858;
                                var_78[var_854].Var7 = var_853[var_852][7] + var_853[var_852][8];
                                var_78[var_854].Var8 = 0;
                            }
                        }
                        var_856++;
                    }
                    var_859 = 1;
                    var_860 = var_78[var_854].Var6;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        if (var_486[var_860][var_859][0] != 0) {
                            var_486[var_860][var_859][14] = 1;
                            var_861 = var_486[var_860][var_859][0];
                            var_862[var_861][0] = 1;
                        }
                        var_859++;
                    }
                }
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
            }
            var_852++;
        }
        return;
    });
}


function func182(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(182);

        var_863 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);

        var_853 = dim(length1 = 50, length2 = 30, length3 = null, length4 = null);
        var_864 = 0;
        var_449 = 1;
        for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
            var_447 = 1;
            for (let cnt2 = 0; cnt2 < 50; ++cnt2) {
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
        return;
    });
}

// デバッグモード呼び出し関数？
// スクリーン31番を呼び出せたら表示される？
function func183(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(183);
        var_867 = sdim(1000);
        var_868 = sdim(1000);
        var_869 = 1;
        yield func188();
        yield func187();
        var_869 = 0;
        yield func189();
        yield func190();
        var_867 = "1";
        var_868 = "1";
        var_870 = 2;
        for (let cnt1 = 0; cnt1 < 98; ++cnt1) {
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
        return;
    });
}

function func184(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(184);
        var_869 = 1;
        yield func187();
        var_869 = 0;
        gsel(31, 1);
        objprm(3, var_876); // アイテム欄行更新 var_876はアイテム欄の行に格納されているアイテム(表示のみ)
        stop();
    });
}


function func185(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(185);
        current_floor = var_871 + 1;
        current_level = var_872 + 1;
        if (current_level > 99) {
            current_level = 99;
        }
        if (current_level <= 1) {
            current_level = 1;
        }
        if (current_floor <= 1) {
            current_floor = 1;
        }
        var_352 = current_level * 4 + 15;
        var_211 = var_352;
        special_floor = var_880;
        if (dangeon_number == 0) {
            // No = 1 なので、ホテルの外
            dangeon_number = 1;
        }
        var_262 = 0;
        var_595 = 0;
        gsel(window_id = 31, window_mode = -1);

        gsel(0, 1);
        yield func076(); // マップ背景画像の読込
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            yield func339();
        }
        yield func006();
        return;
    });
}
function func186(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(186);
        gsel(window_id = 31, window_mode = -1);
        gsel(0, 1);
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
// アイテム追加関係？ var_224がある。
function func187(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(187);
        var_876 = sdim(10000);
        var_876 = "";
        var_883 = 1;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            belongings_item_list = var_233[var_883].Var0;
            yield func492(); // アイテムリスト呼び出し
            var_876 = var_876 + "\n" + item_name;
            var_883 = var_883 + 1;
        }
        return;
    });
}

function func188(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(188);
        var_874 = sdim(10000);
        var_884 = dim(10000);
        var_874 = "アイテム";
        var_883 = 1;
        var_885 = 1;
        for (let cnt1 = 0; cnt1 < 1000; ++cnt1) {
            belongings_item_list = var_883;
            yield func492(); // アイテムリスト呼び出し
            if (buying_price != 0) {
                var_874 = var_874 + "\n" + "" + item_name;
                var_884[var_885] = belongings_item_list;
                var_885 = var_885 + 1;
            }
            var_883 = var_883 + 1;
        }
        return;
    });
}

function func189(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(189);
        var_886 = sdim(10000);
        var_886 = "罠";
        var_887 = 1;
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            var_888 = var_887;
            yield func554();
            var_886 = var_886 + "\n" + var_888 + " " + var_889;
            var_887 = var_887 + 1;
        }
        return;
    });
}
function func190(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(190);
        var_890 = sdim(10000);
        var_890 = "敵";
        var_887 = 1;
        for (let cnt1 = 0; cnt1 < 100; ++cnt1) {
            enemy_list = var_887;
            yield func626();
            var_890 = var_890 + "\n" + enemy_list + " " + enemy_name;
            var_887 = var_887 + 1;
        }
        return;
    });
}

// アイテム追加関係？ var_224がある。
function func191(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(191);
        if (var_873 <= 0) {
            stop();
        }
        if (var_224 >= 20) {
            stop();
        }
        var_224 = var_224 + 1;
        var_233[var_224].Var0 = var_884[var_873];
        //var_233[var_224].Var0 = JSON.parse(JSON.stringify(var_884[var_873]));

        item_list_array = var_233[var_224].Var0;

        // [var_224].Var0はアイテム配列。100～400未満は装備discなので、装備discであれば
        if (var_233[var_224].Var0 >= 100 && var_233[var_224].Var0 < 400) {
            var_233[var_224].Var16 = 10;
            var_233[var_224].Var14 = 1;
            var_233[var_224].Var5 = 5;
            var_233[var_224].Var19 = 1;
        }
        // [var_224].Var0はアイテム配列。400～500未満は射撃discなので、射撃discであれば
        var_233[var_224].Var20 = var_233[var_224].Var0;
        //var_233[var_224].Var20 = JSON.parse(JSON.stringify(var_233[var_224].Var0));
        if (item_list_array >= 400 && item_list_array < 500) {
            var_233[var_224].Var3 = 10;
        }
        if (var_878 == 1) {
            var_862[item_list_array][0] = 0;
        }
        if (var_878 == 0) {
            var_862[item_list_array][0] = 1;
        }
        // 122 = ｽﾄｰﾝ･ﾌﾘｰのDISC、200 = ｽｰﾊﾟｰﾌﾗｲのDISC、311 = ﾁｰﾌﾟ･ﾄﾘｯｸのDISC、310 = ｴﾝﾌﾟﾚｽのDISC
        if (var_233[var_224].Var0 == 122 || var_233[var_224].Var0 == 200 || var_233[var_224].Var0 == 311 || var_233[var_224].Var0 == 310) {
            var_233[var_224].Var12 = 1;
        }
        // [var_224].Var0はアイテム配列。100～400未満は装備discなので、装備discであれば
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
        // [var_224].Var0はアイテム配列。800～900未満はヤバイものなので、ヤバイものであれば
        if (var_233[var_224].Var0 >= 800 && var_233[var_224].Var0 < 900) {
            yield func395();
            var_233[var_224].Var6 = var_858;
            var_233[var_224].Var7 = 6;
            // 802 = ﾄﾗｸﾀｰのﾀｲﾔ
            if (var_233[var_224].Var0 == 802) {
                var_233[var_224].Var7 = 10;
            }
            var_233[var_224].Var8 = 0;
            // 851 = ﾎﾙﾏｼﾞｵのﾋﾞﾝ
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
        }
        var_869 = 1;
        yield func187();
        var_869 = 0;
        objprm(3, var_876); // アイテム欄行更新 var_876はアイテム欄の行に格納されているアイテム(表示のみ)
        stop();
    });
}

// アイテム追加関係？ var_224がある。
function func192(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        kougeki_disc_id = 0;
        var_477 = dim(40);
        var_581 = var_581 - var_895;
        var_895 = 0;
        bougyo_disc_id = 0;
        var_479 = dim(40);
        var_250 = 0;
        shageki_disc_id = 0;
        var_478 = dim(40);
        nouryoku_disc_id = 0;
        var_896 = 0;
        var_897 = 0;
        var_898 = 0;
        var_225 = var_875;
        belongings_item_list = var_233[var_875].Var0;
        yield func433(); // アイテム配列(所持アイテム)初期化関数
        yield func494();
        var_869 = 1;
        yield func187();
        var_869 = 0;
        objprm(3, var_876); // アイテム欄行更新 var_876はアイテム欄の行に格納されているアイテム(表示のみ)
        stop();
    });
}


function func193(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(193);
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (key_Z_on == 1 || key_A_on == 1) {

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            if (var_899 == 0) {
                yield func051();
                var_900 = 1;
                yield func194();
                return;
            }
            if (var_899 == 1) {
                yield func051();
                var_901 = 1;
                yield func202();
                return;
            }
            if (var_899 == 2) {
                yield func051();
                var_902 = 1;
                yield func208();
                return;
            }
            if (var_899 == 3) {
                yield func051();
                var_903 = 1;
                yield func215();
                return;
            }
            if (var_899 == 4) {
                yield func051();
                var_904 = 1;
                yield func205();
                return;
            }
            if (var_899 == 5) {
                yield func051();
                var_905 = 1;
                yield func198();
                return;
            }
            if (var_899 == 6 && dangeon_number != 99 && var_637 == 0) {
                yield func051();
                yield func925();
                return;
            }
        }
        if (key_X_on == 1) {

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            var_509 = 0;
            yield func051();
            yield func055();
            return;
        }
        if (var_255 == 1) {
            if (var_899 == 0) {
                var_899 = 6;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func193();
                return;
            }
            if (var_899 == 1) {
                var_899 = 0;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func193();
                return;
            }
            if (var_899 == 2) {
                var_899 = 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func193();
                return;
            }
            if (var_899 == 3) {
                var_899 = 2;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func193();
                return;
            }
            if (var_899 == 4) {
                var_899 = 3;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func193();
                return;
            }
            if (var_899 == 5) {
                var_899 = 4;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func193();
                return;
            }
            if (var_899 == 6) {
                var_899 = 5;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func193();
                return;
            }
        }
        if (var_259 == 1) {
            if (var_899 == 6) {
                var_899 = 0;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func193();
                return;
            }
            if (var_899 == 5) {
                var_899 = 6;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func193();
                return;
            }
            if (var_899 == 4) {
                var_899 = 5;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func193();
                return;
            }
            if (var_899 == 3) {
                var_899 = 4;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func193();
                return;
            }
            if (var_899 == 2) {
                var_899 = 3;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func193();
                return;
            }
            if (var_899 == 1) {
                var_899 = 2;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func193();
                return;
            }
            if (var_899 == 0) {
                var_899 = 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func193();
                return;
            }
        }
        yield func193();
        return;
    });
}
function func194(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        yield func195();
    });
}

function func195(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(195);
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (key_Z_on == 1 || key_A_on == 1) {

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func051();
            bsave(file_name = "00.dat", data = var_686, data_size = null, offset = 0);
            var_900 = 0;
            yield func193();
            return;
        }
        if (key_X_on == 1) {
            yield func051();
            var_900 = 0;
            yield func193();
            return;
        }
        if (var_255 == 1) {
            if (var_906 == 0) {
                var_906 = 0;
                var_686 = 30;
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_906 == 1) {
                var_906 = 0;
                var_686 = 30;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_906 == 2) {
                var_906 = 1;
                var_686 = 40;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_906 == 3) {
                var_906 = 2;
                var_686 = 50;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_906 == 4) {
                var_906 = 3;
                var_686 = 60;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
            }
        }
        if (var_259 == 1) {
            if (var_906 == 4) {
                var_906 = 4;
                var_686 = 70;
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_906 == 3) {
                var_906 = 4;
                var_686 = 70;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_906 == 2) {
                var_906 = 3;
                var_686 = 60;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_906 == 1) {
                var_906 = 2;
                var_686 = 50;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_906 == 0) {
                var_906 = 1;
                var_686 = 40;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
            }
        }
        yield func195();
        return;
    });
}

// ゲームスピード設定項目
function func196(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        return;
    });
}


function func197(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        if (dangeon_number == 99 || var_637 != 0) {
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
        if (dangeon_number == 99) {
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
        return;
    });
}

function func198(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(198);
        var_908 = 0;
        yield func199();
    });
}

function func199(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(199);
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (key_Z_on == 1 || key_A_on == 1) {
            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            if (var_908 == 0) { // マップの色を変更
                dialog("", 32); // 32なので、カラー選択ダイアログ(固定色)を表示させる。https://masudahp.web.fc2.com/hsp3/kiso/hspk013-2.html
                if (stat == 0) {
                    yield func199();
                    return;
                }
                var_25[13] = ginfo(16);
                var_26[13] = ginfo(17);
                var_27[13] = ginfo(18);
                var_687 = ginfo(16);
                var_688 = ginfo(17);
                var_689 = ginfo(18);
                yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                yield func337(); // メッセージ関係呼び出し
                yield func199();
                return;
            }
            if (var_908 == 1) { // 透明度を変更
                var_909 = 1;
                yield func051();
                yield func201();
                return;
            }
            if (var_908 == 2) { // 初期設定に戻す
                var_25[13] = 0;
                var_26[13] = 0;
                var_27[13] = 255;
                var_687 = 0;
                var_688 = 0;
                var_689 = 255;
                var_690 = 60;
                var_25[14] = var_690;
                yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                yield func337(); // メッセージ関係呼び出し
                yield func199();
                return;
            }
        }
        if (key_X_on == 1) {
            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func051();
            var_905 = 0;
            bsave(file_name = "00.dat", data = var_25, data_size = null, offset = 200);
            bsave(file_name = "00.dat", data = var_26, data_size = null, offset = 300);
            bsave(file_name = "00.dat", data = var_27, data_size = null, offset = 400);
            yield func193();
            return;
        }
        if (var_255 == 1) {

            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            if (var_908 == 0) {
                var_908 = 2;
                // ここ間違えてる？？なぜ func337() が2回も呼ばれる？
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func199();
                return;
            }
            if (var_908 != 0) {
                var_908 = var_908 - 1;
                // ここ間違えてる？？なぜ func337() が2回も呼ばれる？
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func199();
                return;
            }
        }
        if (var_259 == 1) {

            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            if (var_908 == 2) {
                var_908 = 0;
                // ここ間違えてる？？なぜ func337() が2回も呼ばれる？
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func199();
                return;
            }
            if (var_908 != 2) {
                var_908 = var_908 + 1;
                // ここ間違えてる？？なぜ func337() が2回も呼ばれる？
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func199();
                return;
            }
        }
        yield func199();
        return;
    });
}