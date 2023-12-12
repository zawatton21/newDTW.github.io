import * as Adap from '../adapter/index'

export const volume = {
    bgm_volume1: 0.1 as number
};

// export let bgm_volume1: number = 0.1;

// Ver 0.1307で追加。BGM音量調整関数。
function DSSETMASTERVOLUME(volume_size: number) {
    //bgm_volume1 = (document.getElementById(bgm_source1) as any).volume = volume_size / 1000; // HTMLからソース音源を取得する場合
    volume.bgm_volume1 = volume_size / 1000; // 音量値を0〜1の範囲に調整
    if (Adap.bgm.bgm_source1) { // bgm_source1が存在すれば
        Adap.bgm.bgm_source1.volume = volume.bgm_volume1; // bgm_source1の音量を設定
    }
}

export {DSSETMASTERVOLUME}