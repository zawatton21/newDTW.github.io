import * as Adap from '../adapter/index'

// BGM停止関数
function DMSTOP() {
    // Ver 0.1305で追加
    //(document.getElementById(bgm_source1) as any).pause() // HTMLからソース音源を取得する場合
    Adap.bgm.bgm_source1.pause()
}

export {DMSTOP}