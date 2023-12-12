import { Gvar } from './variable'
import * as Adap from './adapter/index'
import * as Func from './func/index'

/* 変数の初期化はvariable.tsにて行う為コメントアウト
for (let i = 0; i < 3600; ++i) {
    eval("var Gvar.var_" + i + " = 0;");
}
*/
Gvar.var_754 = 1;
Gvar.var_2156 = 2;
Gvar.var_25 = [];
Gvar.var_26 = [];
Gvar.var_27 = [];
Gvar.var_494 = [];
Gvar.var_664 = [];
Gvar.var_691 = [];

Adap.InitInput();

//window.onload = Func.func001;
window.addEventListener('load', async function(){
    Adap.dbgprt(1);
    Func.func004();
    return;
})