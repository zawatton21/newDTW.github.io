import { Gvar } from '../variable'

function DSLOADMEMORY(audio_data: any, audio_id: any) {
    Gvar.se[audio_id] = audio_data;
}

export {DSLOADMEMORY}

/* youtubeからのbgmリンクを使用しないのでコメントアウト
function DMLOADMEMORY(music_id, data0, data1) {
    const music_list = {
        "0": "YLCIfDqgDIk",
        "102": "gvCmtHDDuu0",
        "315": "AuA0HQ4Zobc",
        "099": "X_pDwv3tpug",
        "302": "l482T0yNkeo",
        "312": "pL4uESRCnv8",
        "998": "JtmpcQ-hbxI",
        "987": "fCULDFsbA9Y",
        "104": "v3JaosE-gZE",
        "992": "mdt0SOqPJcg",
        "991": "2s4slliAtQU",
        "116": "p6gKe9Fr2ok",
        "201": "vOJRILBRS5o",
        "107": "bSfqNEvykv0",
        "202": "D-dONCnY_Yg",
        "997": "pHa4pvspCqc",
        "412": "rnKbImRPhTE",
        "319": "zDKO6XYXioc",
        "117": "0aU57V6VBW0",
        "122": "-Ro8-ngA8gs",
        "311": "MjMCaw4qzjg",
        "414": "I8JULmUlGDA",
        "305": "6j7E7pvLxmI",
        "113": "bJ9r8LMU9bQ",
        "123": "PE9HvSdcaL4",
        "200": "-cmo6MRYf5g",
        "313": "UAKCR7kQMTQ",
        "985": "9sGy_-p_sVE",
        "308": "56u6g0POvo0",
        "111": "OXqnHLXZugA",
        "120": "Ixrje2rXLMA",
        "411": "iDNtqy0zjJA",
        "988": "EqPtz5qN7HM",
        "986": "kZ8KK8u9dN8",
        "401": "eBG7P-K-r1Y",
        "207": "QV-2EJnfzjY",
        "402": "AYUdldNzLNA",
        "995": "usfiAsWR4qU",
        "203": "hLhN__oEHaw",
        "121": "fjwWjx7Cw8I",
        "317": "iZq3i94mSsQ",
        "205": "KFq2pU21cNU",
        "303": "ZunGXrbS0hQ",
        "994": "ZDwotNLyz10",
        "396": "D9ioyEvdggk",
        "999": "CWzrABouyeE",
        "981": "s__rX_WL100",
        "306": "5ZF6m659-z0",
        "320": "Mrhg66cVPGw",
        "408": "PivWY9wn5ps",
        "101": "1dmt5o0DjaU",
        "124": "cjImFYf2Vzc",
        "301": "pO8kTRv4l3o",
        "310": "La4Dcd1aUcE",
        "206": "bx1Bh8ZvH84",
        "109": "0pyxKqdtrH8",
        "300": "qM0zINtulhM",
        "404": "p3j2NYZ8FKs",
        "978": "UnVBS0ZkARw",
        "103": "HuBqE9xGtiQ",
        "106": "cWGE9Gi0bB0",
        "980": "N3oCS85HvpY",
        "405": "3T1c7GkzRQQ",
        "996": "rblt2EtFfC4",
        "115": "7IQE62Vn4_U",
        "395": "rY0WxgSXdEE",
        "990": "fJ9rUzIMcZQ",
        "112": "2ZBtPf7FOoM",
        "204": "rkHF_JMnB8o",
        "993": "wJzNZ1c5C9c",
        "105": "Mr_uHJPUlO8",
        "108": "Fmfi3UbDPnQ",
        "318": "XCMrXC8D05Q",
        "403": "cBojbjoMttI",
        "309": "WSv2gLT0jkU",
        "119": "gJLIiF15wjQ",
        "409": "pAuPMJlK92s",
        "400": "d27gTrPPAyk",
        "407": "ZuI61cTNbAk",
        "314": "mbAyj1h9vI0",
        "316": "btPJPFnesV4",
        "989": "JB6WZu8IAZg",
        "118": "uZ4PZOfVnP8",
        "304": "Ae0nwSv6cTU",
        "114": "unHzLEA6gvI",
    };
    const link_id = music_list[music_id.split(".")[0]];
    if (link_id) {
        const a_tug = (document.getElementById("bgmlink"));
        a_tug.href = "https://www.youtube.com/watch?v=" + link_id;
        const iframe = document.getElementById("bgm");
        iframe.src = "https://www.youtube.com/embed/" + link_id;
    } else {
        const a_tug = (document.getElementById("bgmlink"));
        a_tug.href = "";
        const iframe = document.getElementById("bgm");
        iframe.src = "";
    }
}
*/