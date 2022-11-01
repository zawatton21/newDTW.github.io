///<reference path="adapter.ts"/>
///<reference path="variable.ts"/>

for (let i = 0; i < 3600; ++i) {
    eval("var var_" + i + " = 0;");
}

var_754 = 1;
var_2156 = 2;
var_25 = [];
var_26 = [];
var_27 = [];
let var_25_x: any;
let var_26_x: any;
let var_27_x: any;
var_494 = [];
var_664 = [];
var_691 = [];
InitInput();

//window.onload = func001;
window.addEventListener('load', function(){
    dbgprt(1);
    func004();
    return;
})