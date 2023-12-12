import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func497(this: any) {
        Adap.dbgprt(497);
        if (Gvar.sympathy_id == 0) {
            return;
        }
        if (Gvar.var_1926 == 0) {
            return;
        }
        Gvar.var_1173 = Gvar.sympathy_id;
        if (Gvar.var_1929 != 0) {
            return;
        }
        Gvar.var_1241 = 1;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "装備したスタンドが引きあっている！";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func050();
        Gvar.var_1572 = 1;
        Gvar.var_271 = 1;
        Adap.DSPLAY(233);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1572++;
        }
        Gvar.var_1572 = 0;
        Gvar.var_271 = 0;
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row2a = "";
        if (Gvar.sympathy_id == 1) {
            Gvar.comments_row1a = "「同じタイプのスタンド！」";
        }
        if (Gvar.sympathy_id == 101) {
            Gvar.comments_row1a = "「狩り(ハンティング)に行こう！」";
        }
        if (Gvar.sympathy_id == 102) {
            Gvar.comments_row1a = "「ジョースターの血統」";
        }
        if (Gvar.sympathy_id == 103) {
            Gvar.comments_row1a = "「愛＝理解」";
        }
        if (Gvar.sympathy_id == 104) {
            Gvar.comments_row1a = "「オラオラ無駄無駄」";
        }
        if (Gvar.sympathy_id == 105) {
            Gvar.comments_row1a = "「本当に頼りになるやつだ」";
        }
        if (Gvar.sympathy_id == 106) {
            Gvar.comments_row1a = "「協力してもらうぜ」";
        }
        if (Gvar.sympathy_id == 107) {
            Gvar.comments_row1a = "「一緒に登ってきた」";
        }
        if (Gvar.sympathy_id == 108) {
            Gvar.comments_row1a = "「お前は俺を怒らせた」";
        }
        if (Gvar.sympathy_id == 109) {
            Gvar.comments_row1a = "「狩り(ハンティング)に行こう！」";
        }
        if (Gvar.sympathy_id == 110) {
            Gvar.comments_row1a = "「ジョースターの血統」";
        }
        if (Gvar.sympathy_id == 111) {
            Gvar.comments_row1a = "「愛＝理解」";
        }
        if (Gvar.sympathy_id == 112) {
            Gvar.comments_row1a = "「オラオラ無駄無駄」";
        }
        if (Gvar.sympathy_id == 113) {
            Gvar.comments_row1a = "「本当に頼りになるやつだ」";
        }
        if (Gvar.sympathy_id == 114) {
            Gvar.comments_row1a = "「協力してもらうぜ」";
        }
        if (Gvar.sympathy_id == 115) {
            Gvar.comments_row1a = "「一緒に登ってきた」";
        }
        if (Gvar.sympathy_id == 116) {
            Gvar.comments_row1a = "「気が合う二人」";
        }
        if (Gvar.sympathy_id == 117) {
            Gvar.comments_row1a = "「僕らの街　杜王町」";
        }
        if (Gvar.sympathy_id == 118) {
            Gvar.comments_row1a = "「直さないからいい！」";
        }
        if (Gvar.sympathy_id == 119) {
            Gvar.comments_row1a = "「友情のしるし！」";
        }
        if (Gvar.sympathy_id == 120) {
            Gvar.comments_row1a = "「注文の不思議な料理店！」";
        }
        if (Gvar.sympathy_id == 121) {
            Gvar.comments_row1a = "「追跡しろ！」";
        }
        if (Gvar.sympathy_id == 122) {
            Gvar.comments_row1a = "「僕らの街　杜王町」";
        }
        if (Gvar.sympathy_id == 123) {
            Gvar.comments_row1a = "「ハッピー＆メルヘン」";
        }
        if (Gvar.sympathy_id == 124) {
            Gvar.comments_row1a = "「うンまぁ～い！」";
        }
        if (Gvar.sympathy_id == 125) {
            Gvar.comments_row1a = "「チーム・ブチャラティ」";
        }
        if (Gvar.sympathy_id == 126) {
            Gvar.comments_row1a = "「チーム・ブチャラティ」";
        }
        if (Gvar.sympathy_id == 127) {
            Gvar.comments_row1a = "「チーム・ブチャラティ」";
        }
        if (Gvar.sympathy_id == 128) {
            Gvar.comments_row1a = "「夢のために！」";
        }
        if (Gvar.sympathy_id == 129) {
            Gvar.comments_row1a = "「チーム・ブチャラティ」";
        }
        if (Gvar.sympathy_id == 130) {
            Gvar.comments_row1a = "「チーム・ブチャラティ」";
        }
        if (Gvar.sympathy_id == 131) {
            Gvar.comments_row1a = "「チーム・ブチャラティ」";
        }
        if (Gvar.sympathy_id == 132) {
            Gvar.comments_row1a = "「チーム・ブチャラティ」";
        }
        if (Gvar.sympathy_id == 133) {
            Gvar.comments_row1a = "「チーム・ブチャラティ」";
        }
        if (Gvar.sympathy_id == 134) {
            Gvar.comments_row1a = "「こいつにスパゲティを」";
        }
        if (Gvar.sympathy_id == 135) {
            Gvar.comments_row1a = "「達人二刀流」";
        }
        if (Gvar.sympathy_id == 136) {
            Gvar.comments_row1a = "「はっはっは　狙え狙え」";
        }
        if (Gvar.sympathy_id == 137) {
            Gvar.comments_row1a = "「挟み撃ちの形」";
        }
        if (Gvar.sympathy_id == 138) {
            Gvar.comments_row1a = "「過去を乗り越える！」";
        }
        if (Gvar.sympathy_id == 139) {
            Gvar.comments_row1a = "「絶頂の能力」";
        }
        if (Gvar.sympathy_id == 140) {
            Gvar.comments_row1a = "「ＤＩＯの血統」";
        }
        if (Gvar.sympathy_id == 141) {
            Gvar.comments_row1a = "「信頼できる友」";
        }
        if (Gvar.sympathy_id == 142) {
            Gvar.comments_row1a = "「血をささげます」";
        }
        if (Gvar.sympathy_id == 143) {
            Gvar.comments_row1a = "「空気が火を吹いた！」";
        }
        if (Gvar.sympathy_id == 144) {
            Gvar.comments_row1a = "「第２の爆弾」";
        }
        if (Gvar.sympathy_id == 145) {
            Gvar.comments_row1a = "「第３の爆弾」";
        }
        if (Gvar.sympathy_id == 146) {
            Gvar.comments_row1a = "「キラークィーン」";
        }
        if (Gvar.sympathy_id == 147) {
            Gvar.comments_row1a = "「純潔の日々、戻らず！！」";
        }
        if (Gvar.sympathy_id == 148) {
            Gvar.comments_row1a = "「ヤバイ「ＤＩＳＣ」がＩＮ！！」";
        }
        if (Gvar.sympathy_id == 149) {
            Gvar.comments_row1a = "「祝福しろ！」";
        }
        if (Gvar.sympathy_id == 150) {
            Gvar.comments_row1a = "「無重力の二人」";
        }
        if (Gvar.sympathy_id == 151) {
            Gvar.comments_row1a = "「愛と復讐のキッス」";
        }
        if (Gvar.sympathy_id == 152) {
            Gvar.comments_row1a = "「幽霊部屋の仲間」";
        }
        if (Gvar.sympathy_id == 153) {
            Gvar.comments_row1a = "「一人でリラックス」";
        }
        if (Gvar.sympathy_id == 154) {
            Gvar.comments_row1a = "「暗殺チーム」";
        }
        if (Gvar.sympathy_id == 155) {
            Gvar.comments_row1a = "「暗殺チーム」";
        }
        if (Gvar.sympathy_id == 156) {
            Gvar.comments_row1a = "「暗殺チーム」";
        }
        if (Gvar.sympathy_id == 157) {
            Gvar.comments_row1a = "「真の邪悪」";
        }
        if (Gvar.sympathy_id == 158) {
            Gvar.comments_row1a = "「パンティーあげちゃうッ！」";
        }
        if (Gvar.sympathy_id == 159) {
            Gvar.comments_row1a = "「整形手術」";
        }
        if (Gvar.sympathy_id == 160) {
            Gvar.comments_row1a = "「水中へよ～こそ」";
        }
        if (Gvar.sympathy_id == 161) {
            Gvar.comments_row1a = "「雷で最大発電！」";
        }
        if (Gvar.sympathy_id == 162) {
            Gvar.comments_row1a = "「雷で最大発電！」";
        }
        if (Gvar.sympathy_id == 163) {
            Gvar.comments_row1a = "「電気イスの刑」";
        }
        if (Gvar.sympathy_id == 164) {
            Gvar.comments_row1a = "「邪悪の化身」";
        }
        if (Gvar.sympathy_id == 165) {
            Gvar.comments_row1a = "「邪悪の化身」";
        }
        if (Gvar.sympathy_id == 166) {
            Gvar.comments_row1a = "「暗黒空間の軌跡」";
        }
        if (Gvar.sympathy_id == 167) {
            Gvar.comments_row1a = "「気まずい二人」";
        }
        if (Gvar.sympathy_id == 168) {
            Gvar.comments_row1a = "「気まずい二人」";
        }
        if (Gvar.sympathy_id == 169) {
            Gvar.comments_row1a = "「マジに信じたのか！」";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1241 = 0;
        return;
}

export {func497}
