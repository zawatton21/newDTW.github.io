/// <reference path="variable.ts"/>
///<reference path="adapter.ts"/>
//import * as fs from 'fs';
//import * as fs from 'fs';
// fs/promisesモジュール全体を読み込む
var fs = require('fs');
function dreadFile(file_name) {
    fs.readFileSync('../assets/config/' + file_name);
}
function dwriteFile(file_name) {
    fs.writeFileSync('../assets/config/' + file_name, JSON.stringify(files[file_name]));
}
//# sourceMappingURL=file_read_write.js.map