import { Gvar } from '../variable'

// pos で一度指定したあとに mesを連続させると、同じX座標で縦に並ぶ！！
function pos(x: number, y: number) {
    Gvar.position = [x, y];
}

export {pos}