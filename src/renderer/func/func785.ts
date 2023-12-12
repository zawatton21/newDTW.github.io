import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func785(this: any) {
        Adap.dbgprt(785);
        Gvar.var_199 = 2;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }

        Adap.DSPLAY(117);
        Gvar.var_1264 = 1;
        for (let cnt1 = 0; cnt1 < 12; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1264 = 0;
        Gvar.var_1233 = 1;
        await Func.func123();

        Adap.DSPLAY(192);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「ボヘミアン・ラプソディ！」";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Adap.gsel(19);
        Adap.color(255, 255, 255);
        Adap.boxf(0, 0, 680, 680);
        Adap.gsel(0);
        Gvar.var_311 = 255;
        Gvar.var_312 = 1;
        for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_311 = Gvar.var_311 - 5;
        }
        Adap.gsel(19);
        Adap.color(1, 1, 1);
        Adap.boxf(0, 0, 680, 680);
        Adap.gsel(0);
        Gvar.var_311 = 0;
        Gvar.var_312 = 1;
        for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_311 = Gvar.var_311 + 5;
        }
        for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func336();
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "こうしてﾃﾞｨｱﾎﾞﾛは、露伴の描いた漫画を";
        Gvar.comments_row2 = "ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨの能力で現実化させ";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "かつての絶頂の日々に";
        Gvar.comments_row2a = "戻ることができたのです…";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "　　　　　【ディアボロの大冒険】";
        Gvar.comments_row2a = "　　　　　　　　　　　完";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        for (let cnt1 = 0; true; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func080(); // 各キー入力確認
        }
}
// ↑ここまで岸辺露伴の設定

export {func785}
