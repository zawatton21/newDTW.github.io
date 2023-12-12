//function gettime(data0: any) { Adap.undef_func("gettime", [data0]); }
function gettime(data0: any) { 
    const now = new Date(); //JavaScript 時間取得関数
    if (data0 == 0) {
        return now.getFullYear(); // 年（year）。｢20**｣という数値が返る。
    }
    if (data0 == 1) {
        return now.getMonth()+1; // 月（month）。「1～12」の範囲の数値が返る。
    }
    if (data0 == 3) {
        return now.getDate(); // 日（day）。「1～31」の範囲の数値が返る。
    }
    else
        return;
}

export {gettime}