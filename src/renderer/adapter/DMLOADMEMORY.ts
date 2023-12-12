// Ver 0.1305で追加
let music_id: any = "102.mp3";

export let bgm = {
    bgm_source1: new Audio()
};

//export let bgm_source1 :any;

let bgm_source2 :any;

// @ts-ignore
function DMLOADMEMORY(music_id: any, data0: any, data1: any) {
    // Ver 0.1305で追加
    // bgm音源の更新
    if(bgm.bgm_source1 != null){
        //(document.getElementById(bgm_source1) as any).pause(); // HTMLからソース音源データ取得する場合
        bgm.bgm_source1.pause();
        bgm.bgm_source1 = music_id;
    }
    else {
        bgm.bgm_source1 = music_id;
    }
    //(document.getElementById(bgm_source1) as any).load(); // HTMLからソース音源を取得する場合
    bgm.bgm_source1.load();
}

export {DMLOADMEMORY}