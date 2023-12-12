import { Gvar } from '../variable'

// @ts-ignore
function data_update_for_debug(e: any) {
    Gvar.var_404 = 1;
    Gvar.var_704[88] = 1; // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ
    Gvar.var_704[34] = 1; // ディアボロの試練解放フラグ
    Gvar.var_704[93] = 2;
    Gvar.var_526 = 2;
    Gvar.var_993 = 1; // ディアボロの試練解放フラグ
    Gvar.var_704[218] = 1; // var_523へ代入
    Gvar.var_704[235] = 1; // var_524へ代入
    Gvar.var_704[221] = 2; // var_759へ代入
    Gvar.var_523 = 1; // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
    Gvar.var_524 = 1; // 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
    Gvar.var_759 = 2; // 1になると岸辺露伴、DIO&プッチ神父、所長がヴェネチアホテルへ登場する
}

export {data_update_for_debug}