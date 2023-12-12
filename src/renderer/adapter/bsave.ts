import * as Adap from '../adapter/index'

// ファイルシステムへのアクセスを提供するために使用。ファイルの読み書きやディレクトリの操作など、ファイルシステム関連の機能を利用する。
const fs = require('fs'); 
// ファイルパスやディレクトリパスの操作を行うために使用。ファイルパスの結合や解析、ディレクトリ名や拡張子の取得など、ファイルパスに関連する機能を利用する。
const path = require('path'); 
// 様々なユーティリティ関数を提供するために使用。非同期コードのプロミス化やコールバックの変換、データのフォーマット、エラーハンドリングなど、一般的なユーティリティ機能を利用する。
const util = require('util'); 
// JavaScriptのオブジェクトをメッセージパックの形式にエンコード（直列化）し、メッセージパックをデコード（逆直列化）してオブジェクトに復元する機能を提供する。メッセージパックと呼ばれるバイナリフォーマットを使用して、データを効率的にシリアライズ（直列化）およびデシリアライズ（逆直列化）します。メッセージパックは JSON よりもコンパクトで高速なデータの交換フォーマットです
const msgpack = require("msgpack-lite"); 

// Ver0.1405にて追加。
const writeFile = util.promisify(fs.writeFile);

// Ver0.1405にて追加。
const exists = util.promisify(fs.exists);

// Ver0.1405にて追加。
const mkdir1 = util.promisify(fs.mkdir);

// Ver0.1405にて非同期関数化 (直接ファイルを確認する為)
// @ts-ignore
async function bsave(file_name: any, data: any, data_size: any = null, offset: any = null) {
    offset = offset == null ? 0 : offset;

    /* LocalStorageを使用する場合
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    if (!files[file_name]) {
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        files[file_name] = {};
    }
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    files[file_name][offset] = data;
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    localStorage.setItem(file_name, JSON.stringify(files[file_name]));
    */

    // 直接ファイルへ書き込む場合
    const filePath = path.join(Adap.baseDir, file_name);

    if (!await exists(Adap.baseDir)) {
        await mkdir1(Adap.baseDir);
    }
    let jsonData: any = {};
    if (await exists(filePath)) {
        // let olddata = await readFile(filePath, 'utf-8');
        // jsondata = JSON.parse(olddata);

        let oldData = await Adap.readFile(filePath);
        jsonData = msgpack.decode(oldData);
    }
    jsonData[offset] = data;

    // await writeFile(filePath, JSON.stringify(jsondata));

    const buffer = msgpack.encode(jsonData);
    await writeFile(filePath, buffer);

}

export {bsave}