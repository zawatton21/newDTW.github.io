/// <reference path="variable.ts"/>
/// <reference path="adapter.ts"/>
//import * as fs from 'fs';
//import * as fs from 'fs';
// fs/promisesモジュール全体を読み込む
var fs = require('fs');
var load_data;
function dreadFile(file_name) {
    load_data = fs.readFile('../assets/config/' + file_name);
    return load_data;
}
function dsetFile(file_name, files) {
    fs.writeFile('../assets/config/' + file_name, JSON.stringify(files[file_name]));
}
/*
const Store = require('electron-store')
//import * as Store from 'electron-store';

const store = new Store()

const load_data: any;

// 保存
function dreadFile (file_name: any) {
    //const value = store.get(file_name);
    load_data = store.get(file_name);
    return load_data;
}

// 取り出し
function dsetFile (file_name: any,  files: string[]) {
    store.set(file_name, JSON.stringify(files[file_name]))
}
*/
//# sourceMappingURL=filer.js.map