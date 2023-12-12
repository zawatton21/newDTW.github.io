import * as Adap from '../adapter/index'

// @ts-ignore
function DMPLAY(data0: any, data1: any) { 
    // Ver 0.1307で音量調整用に修正。
    //(document.getElementById(bgm_source1) as any).volume = bgm_volume1; // HTMLからソース音源を取得する場合
    Adap.bgm.bgm_source1.volume = Adap.volume.bgm_volume1;
    // Ver 0.1305で追加
    //(document.getElementById(bgm_source1) as any).play() // HTMLからソース音源を取得する場合
    Adap.bgm.bgm_source1.play()
}

export {DMPLAY}