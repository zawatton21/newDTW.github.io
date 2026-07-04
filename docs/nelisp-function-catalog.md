# Nelisp Function Catalog

## 1. Summary

- Total functions: 1453
- Runtime-tracked functions: 1278
- Transpiled: 232
- Skipped: 0
- Untranspiled: 1046
- Support functions: 175
- With header: 1150
- Without header: 303

| subsystem | total | tracked | transpiled | skipped | untranspiled | support | coverage |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| adapter | 116 | 0 | 0 | 0 | 0 | 116 | n/a |
| conditions | 20 | 20 | 0 | 0 | 20 | 0 | 0% |
| dungeon | 44 | 44 | 0 | 0 | 44 | 0 | 0% |
| dungeon0 | 73 | 73 | 0 | 0 | 73 | 0 | 0% |
| dungeon1 | 4 | 4 | 0 | 0 | 4 | 0 | 0% |
| dungeon2 | 3 | 3 | 0 | 0 | 3 | 0 | 0% |
| dungeon3 | 3 | 3 | 0 | 0 | 3 | 0 | 0% |
| dungeon4 | 2 | 2 | 0 | 0 | 2 | 0 | 0% |
| dungeon5 | 3 | 3 | 0 | 0 | 3 | 0 | 0% |
| enemy | 74 | 38 | 0 | 0 | 38 | 36 | 0% |
| event | 7 | 7 | 0 | 0 | 7 | 0 | 0% |
| extra_items | 24 | 24 | 0 | 0 | 24 | 0 | 0% |
| food | 23 | 23 | 0 | 0 | 23 | 0 | 0% |
| func | 680 | 675 | 224 | 0 | 451 | 5 | 33.2% |
| initialize | 14 | 14 | 0 | 0 | 14 | 0 | 0% |
| items | 4 | 0 | 0 | 0 | 0 | 4 | n/a |
| keyconf | 4 | 4 | 2 | 0 | 2 | 0 | 50% |
| memory | 35 | 35 | 0 | 0 | 35 | 0 | 0% |
| menu | 58 | 56 | 4 | 0 | 52 | 2 | 7.1% |
| mondai | 4 | 4 | 0 | 0 | 4 | 0 | 0% |
| music | 67 | 66 | 1 | 0 | 65 | 1 | 1.5% |
| npc | 53 | 53 | 0 | 0 | 53 | 0 | 0% |
| root | 10 | 0 | 0 | 0 | 0 | 10 | n/a |
| shop | 15 | 15 | 0 | 0 | 15 | 0 | 0% |
| stand | 101 | 101 | 1 | 0 | 100 | 0 | 1% |
| title | 11 | 11 | 0 | 0 | 11 | 0 | 0% |
| util | 1 | 0 | 0 | 0 | 0 | 1 | n/a |

## 2. TRUE ENTRY POINTS

- func004: src/renderer/main_d.ts
- func023: src/renderer/debug.ts
- func024: src/renderer/debug.ts
- func027: src/renderer/debug.ts
- func028: src/renderer/debug.ts
- func029: src/renderer/debug.ts
- func030: src/renderer/debug.ts
- func031: src/renderer/debug.ts
- func033: src/renderer/debug.ts
- func034: src/renderer/debug.ts
- func035: src/renderer/debug.ts
- func036: src/renderer/debug.ts
- func037: src/renderer/debug.ts
- func038: src/renderer/debug.ts
- func039: src/renderer/debug.ts
- func040: src/renderer/debug.ts
- func042: src/renderer/debug.ts
- func053: src/renderer/debug.ts
- func055: src/renderer/debug.ts
- func057: src/renderer/debug.ts
- func062: src/renderer/debug.ts
- func071: src/renderer/debug.ts
- func0886: src/renderer/debug.ts
- func0888: src/renderer/debug.ts
- func0893: src/renderer/debug.ts
- func0895: src/renderer/debug.ts
- func0900: src/renderer/debug.ts
- func0901: src/renderer/debug.ts
- func0902: src/renderer/debug.ts
- func0903: src/renderer/debug.ts
- func0904: src/renderer/debug.ts
- func0905: src/renderer/debug.ts
- func0906: src/renderer/debug.ts
- func0907: src/renderer/debug.ts
- func0909: src/renderer/debug.ts
- func0911: src/renderer/debug.ts
- func0915: src/renderer/debug.ts
- func0916: src/renderer/debug.ts
- func0917: src/renderer/debug.ts
- func0920: src/renderer/debug.ts
- func0924: src/renderer/debug.ts
- func0926: src/renderer/debug.ts
- func0927: src/renderer/debug.ts
- func0928: src/renderer/debug.ts
- func0933: src/renderer/debug.ts
- func0939: src/renderer/debug.ts
- func0948: src/renderer/debug.ts
- func0950: src/renderer/debug.ts
- func0952: src/renderer/debug.ts
- func0955: src/renderer/debug.ts
- func0956: src/renderer/debug.ts
- func0959: src/renderer/debug.ts
- func0961: src/renderer/debug.ts
- func0962: src/renderer/debug.ts
- func0963: src/renderer/debug.ts
- func0964: src/renderer/debug.ts
- func0965: src/renderer/debug.ts
- func0966: src/renderer/debug.ts
- func0973: src/renderer/debug.ts
- func0974: src/renderer/debug.ts
- func0977: src/renderer/debug.ts
- func0979: src/renderer/debug.ts
- func0981: src/renderer/debug.ts
- func0983: src/renderer/debug.ts
- func0984: src/renderer/debug.ts
- func0987: src/renderer/debug.ts
- func0989: src/renderer/debug.ts
- func0990: src/renderer/debug.ts
- func0991: src/renderer/debug.ts
- func0992: src/renderer/debug.ts
- func0993: src/renderer/debug.ts
- func0999: src/renderer/debug.ts
- func1005: src/renderer/debug.ts
- func163b: src/renderer/debug.ts
- func193: src/renderer/debug.ts
- func194: src/renderer/debug.ts
- func195: src/renderer/debug.ts
- func196: src/renderer/debug.ts
- func205: src/renderer/debug.ts
- func206: src/renderer/debug.ts
- func207: src/renderer/debug.ts
- func217: src/renderer/debug.ts
- func231: src/renderer/main_d.ts
- func243: src/renderer/debug.ts
- func245: src/renderer/debug.ts
- func256: src/renderer/debug.ts
- func258: src/renderer/debug.ts
- func259: src/renderer/debug.ts
- func260: src/renderer/debug.ts
- func261: src/renderer/debug.ts
- func262: src/renderer/debug.ts
- func263: src/renderer/debug.ts
- func264: src/renderer/debug.ts
- func265: src/renderer/debug.ts
- func266: src/renderer/debug.ts
- func267: src/renderer/debug.ts
- func268: src/renderer/debug.ts
- func269: src/renderer/debug.ts
- func270: src/renderer/debug.ts
- func271: src/renderer/debug.ts
- func272: src/renderer/debug.ts
- func273: src/renderer/debug.ts
- func274: src/renderer/debug.ts
- func275: src/renderer/debug.ts
- func276: src/renderer/debug.ts
- func277: src/renderer/debug.ts
- func278: src/renderer/debug.ts
- func279: src/renderer/debug.ts
- func280: src/renderer/debug.ts
- func281: src/renderer/debug.ts
- func282: src/renderer/debug.ts
- func283: src/renderer/debug.ts
- func284: src/renderer/debug.ts
- func285: src/renderer/debug.ts
- func286: src/renderer/debug.ts
- func287: src/renderer/debug.ts
- func293: src/renderer/debug.ts
- func294: src/renderer/debug.ts
- func295: src/renderer/debug.ts
- func296: src/renderer/debug.ts
- func297: src/renderer/debug.ts
- func298: src/renderer/debug.ts
- func299: src/renderer/debug.ts
- func300: src/renderer/debug.ts
- func301: src/renderer/debug.ts
- func302: src/renderer/debug.ts
- func303: src/renderer/debug.ts
- func304: src/renderer/debug.ts
- func305: src/renderer/debug.ts
- func306: src/renderer/debug.ts
- func307: src/renderer/debug.ts
- func308: src/renderer/debug.ts
- func309: src/renderer/debug.ts
- func310: src/renderer/debug.ts
- func311: src/renderer/debug.ts
- func312: src/renderer/debug.ts
- func313: src/renderer/debug.ts
- func314: src/renderer/debug.ts
- func315: src/renderer/debug.ts
- func316: src/renderer/debug.ts
- func317: src/renderer/debug.ts
- func318: src/renderer/debug.ts
- func319: src/renderer/debug.ts
- func320: src/renderer/debug.ts
- func321: src/renderer/debug.ts
- func322: src/renderer/debug.ts
- func335: src/renderer/debug.ts
- func336: src/renderer/debug.ts
- func371: src/renderer/debug.ts
- func386: src/renderer/debug.ts
- func431: src/renderer/debug.ts
- func477: src/renderer/debug.ts
- func481: src/renderer/debug.ts
- func679: src/renderer/debug.ts
- func825: src/renderer/debug.ts
- funcLangConfig: src/renderer/debug.ts
- getLanguage: src/renderer/debug.ts
- initI18n: src/renderer/main_d.ts
- installAutoTranslate: src/renderer/main_d.ts
- loadLanguage: src/renderer/debug.ts, src/renderer/i18n.ts
- setLanguage: src/renderer/debug.ts
- t: src/renderer/i18n.ts

## 3. HUBS

### Top 25 by callers

- setMessage (func): 448 | /**  * func000 — IPC Renderer  *  * Electronアプリケーションで使用されるIPC Renderer という AP...
- AutoDraw (func): 368 | /**  * func000 — IPC Renderer  *  * Electronアプリケーションで使用されるIPC Renderer という AP...
- func337 (func): 273 | /**  * func337 — func337 メッセージ処理関係呼び出し  *  * (org原典: newDTW_func3)  * // @org...
- tf (root): 151 | /**  * i18n — Internationalization module for newDTW  *  * Uses Japanese text...
- func009 (func): 144 | /**  * func009 — func009 ゲーム基本動作フレーム処理  *  * newDTW のゲームの根幹となる処理  *  * (org原典...
- func019 (func): 137 | /**  * func019 — func019 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)  *  * (org原典: new...
- func051 (keyconf): 109 | /**  * func051 — func051 キー入力待ち処理  *  * (org原典: newDTW_func0)  * // @org-inje...
- func492 (func): 82 | /**  * func492 — func492 各アイテムリスト  *  * (org原典: newDTW_func4)  * // @org-inje...
- func506 (func): 75 | /**  * func506 — func506 discの発動をした際に、修正値の減少させる(0の時はdisc消滅させる)関数  *  * (org原典...
- func331 (func): 72 | /**  * func331 — func331 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理  *  * (org原...
- func508 (func): 72 | /**  * func508 — func508 スタンドパワーが力尽きて消滅した時の表示2  *  * (org原典: newDTW_func5)  *...
- func080 (keyconf): 66 | /**  * func080 — func080 各キー入力確認  *  * (org原典: newDTW_func0)  * // @org-injec...
- func626 (func): 56 | /**  * func626 — func626 敵リスト  *  * (org原典: newDTW_func6)  * // @org-injected...
- func354 (func): 51 | /**  * func354 — func354 不明  *  * (org原典: newDTW_func3)  * // @org-injected  */
- func0898 (func): 49 | /**  * func0898 — func898 不明  *  * (org原典: newDTW_func8)  * // @org-injected  */
- func050 (func): 47 | /**  * func050 — func050 メッセージを上へゆっくりとスクロール (ページ切り替え) なくても切り替えはできるが、文面の切り替えが急...
- func0050 (func): 46 | /**  * func050 — func050 メッセージを上へゆっくりとスクロール (ページ切り替え) なくても切り替えはできるが、文面の切り替えが急...
- func556 (func): 45 | /**  * func556 — func556 敵をフロアへ出現させる処理  *  * (org原典: newDTW_func5)  * // @org...
- func0358 (func): 44 | /**  * func358 — func358 不明  *  * (org原典: newDTW_func3)  * // @org-injected  */
- func0054 (menu): 41 | /**  * func054 — func054 メニュー画面を開いた時の表示(道具、足元、状態、設定)  *  * (org原典: newDTW_fun...
- func426 (func): 35 | /**  * func426 — func426 不明  *  * (org原典: newDTW_func4)  * // @org-injected  */
- func023 (func): 33 | NO HEADER
- func427 (func): 32 | /**  * func427 — func427 不明  *  * (org原典: newDTW_func4)  * // @org-injected  */
- func433 (func): 31 | /**  * func433 — func433 アイテム配列の "数" 増減？関数  *  * (org原典: newDTW_func4)  * // ...
- func0053 (menu): 30 | /**  * func053 — メニュー画面呼び出し (2x2グリッドメニュー)  *  * カーソル位置:  *   var_247 (1=左列 / ...

### Top 25 by callees

- func636 (func): 74 | /**  * func636 — func636 ディアボロが攻撃or話しかけた時の動作処理  *  * (org原典: newDTW_func6)  *...
- func337 (func): 64 | /**  * func337 — func337 メッセージ処理関係呼び出し  *  * (org原典: newDTW_func3)  * // @org...
- func543 (func): 62 | /**  * func543 — func543 不明  *  * (org原典: newDTW_func5)  * // @org-injected  */
- func0019 (func): 60 | /**  * func019 — func019 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)  *  * (org原典: new...
- func019 (func): 60 | /**  * func019 — func019 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)  *  * (org原典: new...
- func0898 (func): 53 | /**  * func0898 — func898 不明  *  * (org原典: newDTW_func8)  * // @org-injected  */
- func1011 (func): 45 | NO HEADER
- func247 (func): 32 | /**  * func247 — func247 ダンジョン関係  *  * (org原典: newDTW_dungeon_main / DONE)  *...
- func541 (func): 29 | /**  * func541 — func541 各罠を踏んだ時の動作処理  *  * (org原典: newDTW_func5)  * // @org-...
- func0009 (func): 26 | /**  * func009 — func009 ゲーム基本動作フレーム処理  *  * newDTW のゲームの根幹となる処理  *  * (org原典...
- func009 (func): 26 | /**  * func009 — func009 ゲーム基本動作フレーム処理  *  * newDTW のゲームの根幹となる処理  *  * (org原典...
- func705 (func): 26 | /**  * func705 — func705 不明  *  * (org原典: newDTW_func7)  * // @org-injected  */
- func008 (initialize): 24 | /**  * func008 — 関数宣言  *  * newDTW のゲームの根幹となる処理  *  * (org原典: newDTW_mainfram...
- func0244 (dungeon): 24 | /**  * func244 — func244 ダンジョンマップ選択関数(IDによって割り振り)  *  * (org原典: newDTW_dungeo...
- func244 (dungeon): 24 | /**  * func244 — func244 ダンジョンマップ選択関数(IDによって割り振り)  *  * (org原典: newDTW_dungeo...
- func1012 (func): 22 | NO HEADER
- func159 (dungeon0): 22 | /**  * func159 — func159 ヴェネチアホテルでのイベントフラグ管理処理  *  * ヴェネチアホテルや亀、酒場の設定  *  * (...
- func420 (func): 22 | /**  * func420 — func420 各アイテムを使った際、item_listのIDに応じて効果を割り振り  *  * (org原典: new...
- func463 (menu): 22 | /**  * func463 — 道具画面のサブメニュー (使う/装備/投げる/置く/拾う等) の入力ハンドラ  *  * func462 で分類された ...
- func0817 (func): 20 | /**  * func0817 — func817 不明  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDTW_dung...
- func0461 (menu): 19 | /**  * func461 — 道具画面 (メニュー画面/道具) の入力ハンドラ  *  * var_220:    0=道具一覧表示 / 1=アイテム...
- func060 (func): 19 | /**  * func060 — func060 ダンジョンの階段を先に進んだ時の動作処理  *  * (org原典: newDTW_dungeon_ma...
- func404 (func): 19 | /**  * func404 — func404 アイテムを置く時の動作処理  *  * (org原典: newDTW_func4)  * // @org...
- func461 (menu): 19 | /**  * func461 — 道具画面 (メニュー画面/道具) の入力ハンドラ  *  * var_220:    0=道具一覧表示 / 1=アイテム...
- func067 (dungeon0): 17 | /**  * func067 — func067 亀のジッパーでアイテムを捨てる動作処理  *  * ヴェネチアホテルや亀、酒場の設定  *  * (or...

## 4. Per-subsystem tables

## adapter

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| await_ | support | 20 |  | 0 | 0 |
| bgscr | support | 27 |  | 0 | 0 |
| bload | support | 93 | > // ファイルシステムへのアクセスを提供するために使用。ファイルの読み書きやディレクトリの操作など、ファイルシステム関連の機能を利用する。 | 0 | 0 |
| boxf | support | 20 |  | 1 | 0 |
| bsave | support | 61 |  | 0 | 0 |
| buffer | support | 25 |  | 0 | 0 |
| button | support | 5 |  | 0 | 0 |
| chdir | support | 5 |  | 0 | 0 |
| chgdisp | support | 21 |  | 0 | 0 |
| chkbox | support | 5 |  | 0 | 0 |
| ck_joystick | support | 6 | > // @ts-ignore | 0 | 0 |
| clrobj | support | 6 |  | 0 | 0 |
| cls | support | 14 |  | 0 | 0 |
| color | support | 10 |  | 1 | 0 |
| color1 | support | 8 |  | 0 | 0 |
| combox | support | 5 |  | 0 | 0 |
| data_update_for_debug | support | 19 |  | 0 | 0 |
| dbgprt | support | 6 | > // 機能不明 // @ts-ignore | 0 | 0 |
| delete_ | support | 20 |  | 0 | 0 |
| dialog | support | 46 |  | 1 | 0 |
| dim | support | 32 | > // @ts-expect-error TS(7006): Parameter 'length1' implicitly has an 'any' t... | 0 | 0 |
| dirinfo | support | 6 |  | 0 | 0 |
| dirlist | support | 6 |  | 0 | 0 |
| DMINIT | support | 5 |  | 0 | 0 |
| DMLOADMEMORY | support | 28 | > // Ver 0.1305で追加 | 0 | 0 |
| DMPLAY | support | 13 |  | 0 | 0 |
| DMSTOP | support | 10 |  | 0 | 0 |
| DSGETMASTERVOLUME | support | 3 |  | 0 | 0 |
| DSLOADMEMORY | support | 111 |  | 0 | 0 |
| DSPLAY | support | 8 |  | 0 | 0 |
| DSSETMASTERVOLUME | support | 18 |  | 0 | 0 |
| DSSETVOLUME | support | 7 |  | 0 | 0 |
| end | support | 5 |  | 0 | 0 |
| exist | support | 54 |  | 0 | 0 |
| font | support | 21 |  | 1 | 0 |
| gcopy | support | 76 |  | 2 | 0 |
| getkey | support | 7 |  | 0 | 0 |
| getstr | support | 5 |  | 0 | 0 |
| gettime | support | 17 | > //function gettime(data0: any) { Adap.undef_func("gettime", [data0]); } | 0 | 0 |
| GetWindowLongA | support | 4 | > // @ts-ignore | 0 | 0 |
| ginfo | support | 31 |  | 0 | 0 |
| gmode | support | 23 |  | 1 | 0 |
| grotate | support | 14 |  | 0 | 0 |
| gsel | support | 18 |  | 1 | 0 |
| gzoom | support | 41 |  | 2 | 0 |
| HMMINIT | support | 8 |  | 0 | 0 |
| ImmGetContext | support | 4 | > // @ts-ignore | 0 | 0 |
| ImmGetOpenStatus | support | 4 | > // @ts-ignore | 0 | 0 |
| ImmReleaseContext | support | 4 | > // @ts-ignore | 0 | 0 |
| ImmSetOpenStatus | support | 4 | > // @ts-ignore | 0 | 0 |
| InitInput | support | 105 |  | 0 | 0 |
| input | support | 6 |  | 0 | 0 |
| instr | support | 6 |  | 0 | 0 |
| int | support | 6 | > // @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type. | 0 | 0 |
| is_changed | support | 18 |  | 0 | 0 |
| limit | support | 6 | > // @ts-expect-error TS(7006): Parameter 'val' implicitly has an 'any' type. | 0 | 0 |
| line | support | 9 |  | 1 | 0 |
| listbox | support | 6 |  | 0 | 0 |
| mes | support | 21 |  | 2 | 0 |
| mesbox | support | 31 | > /* 現在使用していない HSP言語 mesbox命令 参照元: http://lhsp.s206.xrea.com/manual/ mesbox p... | 0 | 0 |
| mkdir | support | 6 |  | 0 | 0 |
| netclose | support | 4 | > // @ts-ignore | 0 | 0 |
| netfail | support | 4 | > // @ts-ignore | 0 | 0 |
| netinit | support | 4 | > // @ts-ignore | 0 | 0 |
| noteadd | support | 18 |  | 0 | 0 |
| notedel | support | 8 |  | 0 | 0 |
| noteget | support | 8 |  | 0 | 0 |
| noteinfo | support | 18 |  | 0 | 0 |
| noteload | support | 9 |  | 0 | 0 |
| notesave | support | 9 |  | 0 | 0 |
| notesel | support | 11 |  | 0 | 0 |
| objinfo | support | 6 |  | 0 | 0 |
| objmode | support | 6 |  | 0 | 0 |
| objprm | support | 7 |  | 0 | 0 |
| objsel | support | 6 |  | 0 | 0 |
| objsize | support | 6 |  | 0 | 0 |
| oncmd_gosub | support | 6 |  | 0 | 0 |
| onexit | support | 6 |  | 0 | 0 |
| onexit_goto | support | 8 |  | 0 | 0 |
| onkey | support | 6 |  | 0 | 0 |
| palette | support | 6 |  | 0 | 0 |
| peek | support | 69 |  | 0 | 0 |
| picload | support | 25 |  | 2 | 0 |
| poke | support | 6 |  | 0 | 0 |
| pos | support | 8 |  | 0 | 0 |
| pset | support | 9 |  | 1 | 0 |
| randomize | support | 5 |  | 0 | 0 |
| redraw | support | 21 |  | 1 | 0 |
| reset_input | support | 36 |  | 0 | 0 |
| ResetDataAndReload | support | 7 | > // @ts-ignore | 0 | 0 |
| ResetKey | support | 7 |  | 0 | 0 |
| rnd | support | 5 |  | 0 | 0 |
| screen_ | support | 20 |  | 0 | 0 |
| sdim | support | 22 | > // @ts-expect-error TS(7006): Parameter 'length1' implicitly has an 'any' t... | 0 | 0 |
| sendmsg | support | 5 |  | 0 | 0 |
| SetWindowLongA | support | 4 | > // @ts-ignore | 0 | 0 |
| SetWindowPos | support | 4 | > // @ts-ignore | 0 | 0 |
| ShowWindow | support | 4 | > // @ts-ignore | 0 | 0 |
| stick | support | 5 |  | 0 | 0 |
| strmid | support | 5 |  | 0 | 0 |
| sumiApply | support | 130 | > // Bridge to the external sumi GUI library (sumi-canvas). // // The game's ... | 0 | 7 |
| sumiEnsureBuffer | support | 130 | > // Bridge to the external sumi GUI library (sumi-canvas). // // The game's ... | 0 | 3 |
| sumiFlushFrame | support | 130 | > // Bridge to the external sumi GUI library (sumi-canvas). // // The game's ... | 0 | 1 |
| sumiRecordLoadImage | support | 130 | > // Bridge to the external sumi GUI library (sumi-canvas). // // The game's ... | 0 | 1 |
| sumiRecordPresent | support | 130 | > // Bridge to the external sumi GUI library (sumi-canvas). // // The game's ... | 0 | 0 |
| sumiRecordRaw | support | 130 | > // Bridge to the external sumi GUI library (sumi-canvas). // // The game's ... | 0 | 1 |
| sumiSelectBuffer | support | 130 | > // Bridge to the external sumi GUI library (sumi-canvas). // // The game's ... | 0 | 1 |
| tcpcount | support | 4 | > // @ts-ignore | 0 | 0 |
| tcpgetl | support | 4 | > // @ts-ignore | 0 | 0 |
| tcpiscon | support | 4 | > // @ts-ignore | 0 | 0 |
| tcpopen | support | 4 | > // @ts-ignore | 0 | 0 |
| tcpput | support | 4 | > // @ts-ignore | 0 | 0 |
| title | support | 9 |  | 0 | 0 |
| undef_func | support | 6 | > // 機能不明 // @ts-ignore | 0 | 0 |
| wait | support | 7 | > // @ts-expect-error TS(7006): Parameter 'time' implicitly has an 'any' type. | 0 | 0 |
| width | support | 23 |  | 0 | 0 |

## conditions

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func021 | untranspiled | 30 |  | 4 | 1 |
| func022 | untranspiled | 89 |  | 5 | 1 |
| func025 | untranspiled | 36 |  | 4 | 1 |
| func026 | untranspiled | 154 |  | 5 | 1 |
| func027 | untranspiled | 19 |  | 2 | 1 |
| func028 | untranspiled | 19 |  | 2 | 1 |
| func029 | untranspiled | 19 |  | 2 | 1 |
| func030 | untranspiled | 19 |  | 2 | 1 |
| func031 | untranspiled | 45 |  | 2 | 1 |
| func032 | untranspiled | 48 |  | 6 | 1 |
| func033 | untranspiled | 27 |  | 2 | 2 |
| func034 | untranspiled | 26 |  | 2 | 1 |
| func035 | untranspiled | 23 |  | 2 | 1 |
| func036 | untranspiled | 23 |  | 2 | 1 |
| func037 | untranspiled | 23 |  | 2 | 1 |
| func038 | untranspiled | 28 |  | 2 | 1 |
| func039 | untranspiled | 25 |  | 2 | 1 |
| func040 | untranspiled | 23 |  | 2 | 1 |
| func041 | untranspiled | 42 |  | 2 | 1 |
| func042 | untranspiled | 28 |  | 2 | 1 |

## dungeon

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func0244 | untranspiled | 405 | > /**  * func244 — func244 ダンジョンマップ選択関数(IDによって割り振り)  *  * (org原典: newDTW_dung... | 24 | 2 |
| func045 | untranspiled | 77 | > /**  * func045 — func045 ダンジョン関係  *  * (org原典: newDTW_dungeon_main / DONE) ... | 0 | 2 |
| func046 | untranspiled | 99 | > /**  * func046 — func046 不明  *  * (org原典: newDTW_func0)  * // @org-injected... | 2 | 2 |
| func071 | untranspiled | 44 | > /**  * func071 — func071 満腹度減少時のメッセージ処理  *  * (org原典: newDTW_func0)  * // @... | 2 | 1 |
| func072 | untranspiled | 128 | > /**  * func072 — func072 ダンジョンに長居し過ぎた際の神砂嵐  *  * (org原典: newDTW_dungeon_mai... | 5 | 1 |
| func074 | untranspiled | 71 | > /**  * func074 — func074 モンスターハウス時のメッセージ処理  *  * (org原典: newDTW_dungeon_mai... | 3 | 3 |
| func075 | untranspiled | 76 | > /**  * func075 — func075 特別な階層到達時のメッセージ処理  *  * (org原典: newDTW_dungeon_main... | 4 | 1 |
| func0889 | untranspiled | 76 | > /**  * func0889 — func889 アイテムの購入金額の値  *  * (org原典: newDTW_func8)  * // @or... | 9 | 1 |
| func162 | untranspiled | 59 | > /**  * func162 — func162 ヴェネチアホテル読込処理  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: ... | 4 | 1 |
| func163 | untranspiled | 568 | > /**  * func163 — func163 ヴェネチアホテル & 亀の中のアイテム配置  *  * ヴェネチアホテルや亀、酒場の設定  *  *... | 0 | 1 |
| func163b | untranspiled | 83 | > /**  * func163b — func163b 酒場の配置(マップ読み込み)  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org... | 0 | 1 |
| func243 | untranspiled | 84 | > /**  * func243 — func243 ダンジョン関係  *  * (org原典: newDTW_dungeon_main / DONE) ... | 0 | 1 |
| func244 | untranspiled | 405 | > /**  * func244 — func244 ダンジョンマップ選択関数(IDによって割り振り)  *  * (org原典: newDTW_dung... | 24 | 3 |
| func245 | untranspiled | 85 | > /**  * func245 — func245 ダンジョン関係  *  * (org原典: newDTW_dungeon_main / DONE) ... | 0 | 2 |
| func293 | untranspiled | 71 | > /**  * func293 — func293 ダンジョンマップ初期化処理(+ヴェネチアホテル)  *  * ダンジョンで読み込まれるランダムマップ... | 1 | 5 |
| func294 | untranspiled | 69 | > /**  * func294 — func294 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func295 | untranspiled | 69 | > /**  * func295 — func295 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func296 | untranspiled | 69 | > /**  * func296 — func296 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func297 | untranspiled | 69 | > /**  * func297 — func297 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func298 | untranspiled | 69 | > /**  * func298 — func298 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func299 | untranspiled | 69 | > /**  * func299 — func299 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func300 | untranspiled | 82 | > /**  * func300 — func300 大部屋ダンジョンマップ  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原... | 0 | 1 |
| func301 | untranspiled | 82 | > /**  * func301 — func301 大部屋ダンジョンマップ(水床あり)  *  * ダンジョンで読み込まれるランダムマップ。  *  *... | 0 | 1 |
| func302 | untranspiled | 82 | > /**  * func302 — func302 幻覚の迷宮のダンジョンマップ  *  * ダンジョンで読み込まれるランダムマップ。  *  * (o... | 0 | 1 |
| func303 | untranspiled | 81 | > /**  * func303 — func303 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func304 | untranspiled | 81 | > /**  * func304 — func304 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func305 | untranspiled | 82 | > /**  * func305 — func305 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func306 | untranspiled | 82 | > /**  * func306 — func306 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func307 | untranspiled | 82 | > /**  * func307 — func307 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func308 | untranspiled | 82 | > /**  * func308 — func308 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func309 | untranspiled | 82 | > /**  * func309 — func309 エンヤホテルのダンジョンマップ  *  * ダンジョンで読み込まれるランダムマップ。  *  * (... | 0 | 1 |
| func310 | untranspiled | 82 | > /**  * func310 — func310 杜王町埠頭のダンジョンマップ  *  * ダンジョンで読み込まれるランダムマップ。  *  * (o... | 0 | 1 |
| func311 | untranspiled | 82 | > /**  * func311 — func311 広大な砂漠のダンジョンマップ  *  * ダンジョンで読み込まれるランダムマップ。  *  * (o... | 0 | 1 |
| func312 | untranspiled | 82 | > /**  * func312 — func312 虹村屋敷のダンジョンマップ  *  * ダンジョンで読み込まれるランダムマップ。  *  * (or... | 0 | 1 |
| func313 | untranspiled | 82 | > /**  * func313 — func313 吉良屋敷のダンジョンマップ  *  * ダンジョンで読み込まれるランダムマップ。  *  * (or... | 0 | 1 |
| func314 | untranspiled | 82 | > /**  * func314 — func314 没特殊階層「ビンの中」ボスは毒グモのダンジョンマップ  *  * ダンジョンで読み込まれるランダムマ... | 0 | 1 |
| func315 | untranspiled | 82 | > /**  * func315 — func315 没特殊階層「ナチス実験施設」ボスはサンタナのダンジョンマップ  *  * ダンジョンで読み込まれるラ... | 0 | 1 |
| func316 | untranspiled | 82 | > /**  * func316 — func316 幽霊部屋のダンジョンマップ  *  * ダンジョンで読み込まれるランダムマップ。  *  * (or... | 0 | 1 |
| func317 | untranspiled | 82 | > /**  * func317 — func317 自由人の狂想曲のダンジョンマップ  *  * ダンジョンで読み込まれるランダムマップ。  *  * ... | 0 | 1 |
| func318 | untranspiled | 82 | > /**  * func318 — func318 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func319 | untranspiled | 82 | > /**  * func319 — func319 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func320 | untranspiled | 81 | > /**  * func320 — func320 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func321 | untranspiled | 81 | > /**  * func321 — func321 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func322 | untranspiled | 82 | > /**  * func322 — func322 黄金の風のダンジョンマップ  *  * ダンジョンで読み込まれるランダムマップ。  *  * (or... | 0 | 1 |

## dungeon0

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func0065 | untranspiled | 20 | > /**  * func065 — func065 デバック処理用(なくても良い?) 亀の倉庫のジッパー関連機能  *  * ヴェネチアホテルや亀、酒場... | 1 | 2 |
| func065 | untranspiled | 20 | > /**  * func065 — func065 デバック処理用(なくても良い?) 亀の倉庫のジッパー関連機能  *  * ヴェネチアホテルや亀、酒場... | 1 | 2 |
| func066 | untranspiled | 36 | > /**  * func066 — func066 亀の倉庫のジッパー関連機能  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典:... | 4 | 2 |
| func067 | untranspiled | 110 | > /**  * func067 — func067 亀のジッパーでアイテムを捨てる動作処理  *  * ヴェネチアホテルや亀、酒場の設定  *  * (... | 17 | 1 |
| func0763 | untranspiled | 18 | > /**  * func763 — func763 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 1 | 2 |
| func0854 | untranspiled | 33 | > /**  * func0854 — 口座入出金の結果表示  *  * (org原典: newDTW_func8)  * // @org-injecte... | 4 | 2 |
| func0855 | untranspiled | 53 | > /**  * func0855 — func855 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 1 | 1 |
| func0856 | untranspiled | 29 | > /**  * func0856 — func856 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 1 | 3 |
| func0857 | untranspiled | 72 | > /**  * func0857 — NPC ペリーコロ(Pericolo): ダンジョン１階納品サービス  *  * (org原典: newDTW_f... | 6 | 1 |
| func0858 | untranspiled | 77 | > /**  * func0858 — func858 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 7 | 4 |
| func0859 | untranspiled | 143 | > /**  * func0859 — func859 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 2 | 1 |
| func0860 | untranspiled | 55 | > /**  * func0860 — ペリーコロ商品購入 (所持金不足時は口座引落確認へ分岐)  *  * (org原典: newDTW_func8) ... | 6 | 1 |
| func0861 | untranspiled | 18 | > /**  * func0861 — func861 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 1 | 1 |
| func0862 | untranspiled | 53 | > /**  * func0862 — ペリーコロ納品確定 (var_991[0] → var_991[1] 配列移動)  *  * (org原典: ne... | 6 | 2 |
| func0863 | untranspiled | 92 | > /**  * func0863 — func863 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 1 | 1 |
| func0864 | untranspiled | 61 | > /**  * func0864 — NPC ポルポ(Polpo): 2000Gで仲間をレクイエムの大迷宮１階へ召喚  *  * (org原典: new... | 5 | 1 |
| func0865 | untranspiled | 41 | > /**  * func0865 — ポルポ仲間召喚 支払処理 (wallet ≥ 2000G で即確定、不足なら口座引落確認)  *  * (org原... | 4 | 1 |
| func0866 | untranspiled | 23 | > /**  * func0866 — ポルポ仲間召喚 口座引落処理 (wallet 全額 + 口座から不足分)  *  * (org原典: newDTW... | 2 | 2 |
| func0867 | untranspiled | 31 | > /**  * func0867 — func867 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 2 | 4 |
| func0868 | untranspiled | 58 | > /**  * func0868 — NPC SPW財団: 1000Gで敗因敵の能力調査サービス  *  * (org原典: newDTW_func8)... | 7 | 1 |
| func0869 | untranspiled | 42 | > /**  * func0869 — SPW財団 支払処理 (wallet ≥ 1000G で即確定)  *  * (org原典: newDTW_fun... | 6 | 1 |
| func0870 | untranspiled | 22 | > /**  * func0870 — func870 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 1 | 2 |
| func0871 | untranspiled | 37 | > /**  * func0871 — func871 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 1 | 2 |
| func0872 | untranspiled | 32 | > /**  * func0872 — func872 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 2 | 4 |
| func0873 | untranspiled | 33 | > /**  * func0873 — ヴェネチアホテルPC: ホテル外クリア前はメッセージのみ、クリア後はアクションメニュー(func0874)を呼ぶ ... | 4 | 1 |
| func0874 | untranspiled | 118 | > /**  * func0874 — func874 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 10 | 2 |
| func0875 | untranspiled | 302 | > /**  * func0875 — func875 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 7 | 2 |
| func0876 | untranspiled | 53 | > /**  * func0876 — func876 魔少年の問題機能?? ver0.12から追加されている  *  * (org原典: newDTW_... | 4 | 1 |
| func0877 | untranspiled | 54 | > /**  * func0877 — func877 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 4 | 1 |
| func0878 | untranspiled | 55 | > /**  * func0878 — func878 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 0 | 1 |
| func0879 | untranspiled | 26 | > /**  * func0879 — 酒場からホテルの部屋へ戻るプロンプト  *  * (org原典: newDTW_func8)  * // @org... | 2 | 1 |
| func0880 | untranspiled | 26 | > /**  * func0880 — ホテルロビー: 酒場 or ホテル外への選択プロンプト  *  * (org原典: newDTW_func8)  ... | 2 | 1 |
| func0881 | untranspiled | 26 | > /**  * func0881 — ホテル外出のプロンプト  *  * (org原典: newDTW_func8)  * // @org-inject... | 2 | 1 |
| func0885 | untranspiled | 26 | > /**  * func0885 — レクイエムの大迷宮入口プロンプト  *  * (org原典: newDTW_func8)  * // @org-i... | 2 | 2 |
| func0887 | untranspiled | 26 | > /**  * func0887 — ディアボロの試練入口プロンプト  *  * (org原典: newDTW_func8)  * // @org-in... | 2 | 2 |
| func0890 | untranspiled | 21 | > /**  * func0890 — 持ち込み不可ダンジョン侵入時の警告  *  * (org原典: newDTW_func8)  * // @org-... | 3 | 5 |
| func0891 | untranspiled | 41 | > /**  * func0891 — NPC プッチ神父: 一巡後の世界ゲート (メイド・イン・ヘブンのDISC所持時に解放)  *  * (org原典... | 5 | 1 |
| func0892 | untranspiled | 62 | > /**  * func0892 — NPC DIO: メイド・イン・ヘブンDISC受取 + 一巡後の世界ガイダンス  *  * (org原典: new... | 4 | 2 |
| func0894 | untranspiled | 77 | > /**  * func0894 — NPC ロッコ・バロッコ所長: 鉄獄(Iron Prison)解放 + 挑戦プロンプト  *  * (org原典:... | 3 | 1 |
| func0896 | untranspiled | 62 | > /**  * func0896 — 店のアイテムを未購入で帰還した際、マリリン・マンソン登場 (func0897で奪取)  *  * (org原典: ... | 4 | 1 |
| func0897 | untranspiled | 71 | > /**  * func0897 — マリリン・マンソン アイテム強奪処理 (店未払アイテムをプレイヤーから剥奪)  *  * (org原典: newD... | 6 | 1 |
| func159 | untranspiled | 140 | > /**  * func159 — func159 ヴェネチアホテルでのイベントフラグ管理処理  *  * ヴェネチアホテルや亀、酒場の設定  *  *... | 22 | 4 |
| func160 | untranspiled | 65 | > /**  * func160 — func160 ヴェネチアホテルへ追加するNPCの設定処理(亀、岸辺露伴)  *  * ヴェネチアホテルや亀、酒場の... | 0 | 1 |
| func160b | untranspiled | 63 | > /**  * func160b — func160b 酒場へ追加するNPCの設定処理(ロッコ・バロッコ所長)  *  * ヴェネチアホテルや亀、酒場の... | 0 | 1 |
| func161 | untranspiled | 51 | > /**  * func161 — func161 亀の中に入った時の表示  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: n... | 5 | 1 |
| func161a | untranspiled | 33 | > /**  * func161a — func161a 酒場に入った時の表示  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: ... | 4 | 1 |
| func161b | untranspiled | 33 | > /**  * func161b — func161b 酒場からホテルの部屋へ戻った時の表示  *  * ヴェネチアホテルや亀、酒場の設定  *  * ... | 4 | 1 |
| func288 | untranspiled | 59 | > /**  * func288 — func288 ヴェネチアホテル専用マップ配置  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原... | 0 | 4 |
| func289 | untranspiled | 58 | > /**  * func289 — func289 ヴェネチアホテル+亀マップ配置処理(亀の成長1)  *  * ヴェネチアホテルや亀、酒場の設定  *... | 0 | 3 |
| func290 | untranspiled | 59 | > /**  * func290 — func290 ヴェネチアホテル+亀マップ配置処理(亀の成長2)  *  * ヴェネチアホテルや亀、酒場の設定  *... | 0 | 3 |
| func291 | untranspiled | 59 | > /**  * func291 — func291 ヴェネチアホテル+亀マップ配置処理(亀の成長3)  *  * ヴェネチアホテルや亀、酒場の設定  *... | 0 | 3 |
| func292 | untranspiled | 59 | > /**  * func292 — func292 ヴェネチアホテル+亀マップ配置処理(亀の成長4)  *  * ヴェネチアホテルや亀、酒場の設定  *... | 0 | 3 |
| func760 | untranspiled | 25 | > /**  * func760 — func760 マリリンマンソン関係?  *  * (org原典: newDTW_func7)  * // @org... | 4 | 1 |
| func761 | untranspiled | 18 | > /**  * func761 — func761 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 1 | 1 |
| func762 | untranspiled | 18 | > /**  * func762 — func762 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 1 | 4 |
| func763 | untranspiled | 18 | > /**  * func763 — func763 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 1 | 3 |
| func764 | untranspiled | 19 | > /**  * func764 — func764 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 1 | 3 |
| func765 | untranspiled | 31 | > /**  * func765 — func765 ヴェネチアホテルの地球儀へ話しかけた時の動作処理  *  * (org原典: newDTW_func... | 3 | 1 |
| func766 | untranspiled | 28 | > /**  * func766 — func766 ヴェネチアホテルのベッドの上の本に話しかけた時のメッセージ処理  *  * (org原典: newD... | 3 | 1 |
| func767 | untranspiled | 43 | > /**  * func767 — func767 ディアボロの試練の入り口(フラグ前は壁)へ話しかけた時の動作処理  *  * (org原典: new... | 4 | 1 |
| func768 | untranspiled | 28 | > /**  * func768 — func768 ヴェネチアホテルのベッドへ話しかけた時のメッセージ処理  *  * (org原典: newDTW_f... | 3 | 1 |
| func778 | untranspiled | 95 | > /**  * func778 — func778 岸辺露伴に話しかけた時のメッセージ処理  *  * (org原典: newDTW_func7)  *... | 6 | 1 |
| func779 | untranspiled | 29 | > /**  * func779 — func779 岸辺露伴に話しかけた時のメッセージ処理  *  * (org原典: newDTW_func7)  *... | 3 | 1 |
| func780 | untranspiled | 41 | > /**  * func780 — func780 岸辺露伴に話しかけた時のメッセージ処理  *  * (org原典: newDTW_func7)  *... | 3 | 1 |
| func781 | untranspiled | 29 | > /**  * func781 — func781 岸辺露伴に話しかけた時のメッセージ処理  *  * (org原典: newDTW_func7)  *... | 3 | 1 |
| func782 | untranspiled | 222 | > /**  * func782 — func782 岸辺露伴に話しかけた時のメッセージ処理  *  * (org原典: newDTW_func7)  *... | 5 | 1 |
| func783 | untranspiled | 27 | > /**  * func783 — func783 ディアボロの試練解放後、岸辺露伴に話しかけた時のメッセージ処理  *  * (org原典: newD... | 3 | 1 |
| func784 | untranspiled | 42 | > /**  * func784 — func784 岸辺露伴に話しかけた時のメッセージ処理  *  * (org原典: newDTW_func7)  *... | 5 | 1 |
| func785 | untranspiled | 66 | > /**  * func785 — func785 岸辺露伴に話しかけた時のメッセージ処理  *  * (org原典: newDTW_func7)  *... | 5 | 1 |
| func786 | untranspiled | 34 | > /**  * func786 — func786 亀の倉庫の取説へ話しかけた時のメッセージ処理  *  * (org原典: newDTW_func7)... | 3 | 1 |
| func796 | untranspiled | 37 | > /**  * func796 — func796 銀行口座の設定  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDT... | 4 | 1 |
| func797 | untranspiled | 36 | > /**  * func797 — func797 銀行口座の設定  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDT... | 4 | 1 |
| func798 | untranspiled | 240 | > /**  * func798 — func798 銀行口座の設定  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDT... | 4 | 3 |

## dungeon1

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func059 | untranspiled | 32 | > /**  * func059 — func059 ホテルの外の最終フロア、エンヤホテル以外確定処理  *  * ダンジョン「ホテルの外」の各種設定  ... | 0 | 2 |
| func628 | untranspiled | 90 | > /**  * func628 — func628 ホテルの外のボス以外の出現敵設定  *  * ダンジョン「ホテルの外」の各種設定  *  * (or... | 0 | 1 |
| func685 | untranspiled | 76 | > /**  * func685 — func685 エンヤ婆を倒した時のメッセージ処理  *  * ダンジョン「ホテルの外」の各種設定  *  * (o... | 2 | 2 |
| func825 | untranspiled | 80 | > /**  * func825 — func825 ダンジョン「ホテルの外」へ入った時の初期化処理  *  * ダンジョン「ホテルの外」の各種設定  *... | 12 | 1 |

## dungeon2

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func0886 | untranspiled | 78 | > /**  * func0886 — func886 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 12 | 1 |
| func629 | untranspiled | 173 | > /**  * func629 — func629 レクイエムの大迷宮の出現敵設定  *  * (org原典: newDTW_dungeon2 / DO... | 0 | 1 |
| func686 | untranspiled | 31 | > /**  * func686 — func686 レクイエムジョルノを倒した時のメッセージ処理  *  * (org原典: newDTW_dungeo... | 1 | 2 |

## dungeon3

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func0888 | untranspiled | 88 | > /**  * func0888 — func888 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 14 | 1 |
| func630 | untranspiled | 518 | > /**  * func630 — func630 ディアボロの試練の出現敵設定  *  * (org原典: newDTW_dungeon3 / DON... | 0 | 1 |
| func687 | untranspiled | 66 | > /**  * func687 — func687 ウンガロを倒した時のメッセージ処理  *  * (org原典: newDTW_dungeon3 / ... | 3 | 2 |

## dungeon4

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func0893 | untranspiled | 66 | > /**  * func0893 — func893 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 11 | 2 |
| func634 | untranspiled | 402 | > /**  * func634 — func634 一巡後の世界のボス以外の出現敵設定  *  * (org原典: newDTW_dungeon4 / ... | 0 | 1 |

## dungeon5

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func0895 | untranspiled | 78 | > /**  * func0895 — func895 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 15 | 1 |
| func631 | untranspiled | 282 | > /**  * func631 — func631 鉄の牢獄のボス以外の出現敵設定  *  * (org原典: newDTW_dungeon5 / DO... | 0 | 1 |
| func633 | untranspiled | 27 | > /**  * func633 — func633 承太郎を倒した時のメッセージ処理 (仕掛中)  *  * まだ何も設定していない。  *  * (o... | 0 | 2 |

## enemy

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| enemy003 | support | 66 | > /**  * enemy003 — No = 3 敵タワーオブグレーの特殊能力  *  * (org原典: newDTW_enemy / DONE) ... | 3 | 0 |
| enemy004 | support | 66 | > /**  * enemy004 — No = 4 敵デス・13の特殊能力  *  * (org原典: newDTW_enemy / DONE)  * ... | 4 | 0 |
| enemy012 | support | 53 | > /**  * enemy012 — No = 12 敵エコーズACT2の特殊能力  *  * (org原典: newDTW_enemy / DONE)... | 4 | 0 |
| enemy015 | support | 55 | > /**  * enemy015 — No = 15 敵ペットショップ & No = 64 敵ギアッチョの特殊能力  *  * (org原典: newD... | 3 | 0 |
| enemy017 | support | 28 | > /**  * enemy017 — No = 17 シアハートアタックの特殊能力  *  * (org原典: newDTW_enemy / DONE)... | 2 | 0 |
| enemy018 | support | 58 | > /**  * enemy018 — No = 18 ブラック・サバスの行動  *  * (org原典: newDTW_enemy / DONE)  *... | 5 | 0 |
| enemy020 | support | 39 | > /**  * enemy020 — No = 20 エンヤ婆の動作処理  *  * (org原典: newDTW_enemy / DONE)  * /... | 4 | 0 |
| enemy026 | support | 194 | > /**  * enemy026 — No = 26 敵ハーヴェストの特殊能力  *  * (org原典: newDTW_enemy / DONE)  ... | 9 | 0 |
| enemy027 | support | 67 | > /**  * enemy027 — No = 27 敵ゲブ神の特殊能力  *  * (org原典: newDTW_enemy / DONE)  * /... | 5 | 0 |
| enemy028 | support | 69 | > /**  * enemy028 — No = 28 敵ジャッジメントの特殊能力  *  * (org原典: newDTW_enemy / DONE) ... | 4 | 0 |
| enemy032 | support | 90 | > /**  * enemy032 — No = 32 吉良吉影の特殊能力  *  * (org原典: newDTW_enemy / DONE)  * /... | 5 | 0 |
| enemy038 | support | 73 | > /**  * enemy038 — No = 38 アレッシーの特殊能力  *  * (org原典: newDTW_enemy / DONE)  * ... | 5 | 0 |
| enemy039 | support | 74 | > /**  * enemy039 — No = 39 敵ハイウェイスターの特殊能力  *  * (org原典: newDTW_enemy / DONE)... | 5 | 0 |
| enemy045 | support | 144 | > /**  * enemy045 — No = 45 敵由花子 & No = 158 敵プッツン由花子の特殊能力  *  * (org原典: newDT... | 9 | 0 |
| enemy059 | support | 259 | > /**  * enemy059 — No = 59 プッチ神父の特殊能力  *  * (org原典: newDTW_enemy / DONE)  * ... | 12 | 0 |
| enemy063 | support | 81 | > /**  * enemy063 — No = 63 プロシュート兄貴の特殊能力  *  * (org原典: newDTW_enemy / DONE) ... | 5 | 0 |
| enemy065 | support | 65 | > /**  * enemy065 — No = 65 虹村形兆の特殊能力  *  * (org原典: newDTW_enemy / DONE)  * /... | 4 | 0 |
| enemy069 | support | 87 | > /**  * enemy069 — No = 69 ブラフォードの特殊能力  *  * (org原典: newDTW_enemy / DONE)  *... | 4 | 0 |
| enemy077 | support | 36 | > /**  * enemy077 — No = 77 敵エコーズACT1の特殊能力  *  * (org原典: newDTW_enemy / DONE)... | 4 | 0 |
| enemy078 | support | 222 | > /**  * enemy078 — No = 78 アヴドゥルさんの特殊能力  *  * (org原典: newDTW_enemy / DONE)  ... | 10 | 0 |
| enemy080 | support | 35 | > /**  * enemy080 — No = 80 ラング・ラングラーの特殊能力  *  * (org原典: newDTW_enemy / DONE)... | 4 | 0 |
| enemy087 | support | 104 | > /**  * enemy087 — No = 87 エシディシの特殊能力  *  * (org原典: newDTW_enemy / DONE)  * ... | 7 | 0 |
| enemy094 | support | 40 | > /**  * enemy094 — No = 94 ブルりんの特殊能力  *  * (org原典: newDTW_enemy / DONE)  * /... | 3 | 0 |
| enemy119 | support | 51 | > /**  * enemy119 — No = 119 ジョセフ(3部)の特殊能力  *  * (org原典: newDTW_enemy / DONE)... | 4 | 0 |
| enemy127 | support | 38 | > /**  * enemy127 — No = 127 敵C-MOONの特殊能力  *  * (org原典: newDTW_enemy / DONE) ... | 3 | 0 |
| enemy130 | support | 57 | > /**  * enemy130 — No = 130 敵マリリンマンソンの特殊能力  *  * (org原典: newDTW_enemy / DONE... | 5 | 0 |
| enemy131 | support | 107 | > /**  * enemy131 — No = 131 ジョルノの特殊能力  *  * (org原典: newDTW_enemy / DONE)  * ... | 7 | 0 |
| enemy132 | support | 70 | > /**  * enemy132 — No = 132 レクイエムジョルノの動作処理  *  * (org原典: newDTW_enemy / DONE... | 7 | 0 |
| enemy137 | support | 101 | > /**  * enemy137 — No = 137 成長した吉良の特殊能力  *  * (org原典: newDTW_enemy / DONE)  ... | 5 | 0 |
| enemy144 | support | 101 | > /**  * enemy144 — No = 144 川尻浩作の特殊能力  *  * (org原典: newDTW_enemy / DONE)  * ... | 5 | 0 |
| enemy157 | support | 96 | > /**  * enemy157 — No = 157 アナスイの特殊能力  *  * (org原典: newDTW_enemy / DONE)  * ... | 8 | 0 |
| enemy158 | support | 42 | > /**  * enemy158 — No = 158 プッツン由花子の特殊能力  *  * (org原典: newDTW_enemy / DONE) ... | 4 | 0 |
| enemy160 | support | 139 | > /**  * enemy160 — No = 160 ウェストウッド看守の特殊能力  *  * (org原典: newDTW_enemy / SOME... | 7 | 0 |
| enemy170 | support | 45 | > /**  * enemy170 — No = 170 敵カタツムリの特殊能力  *  * (org原典: newDTW_enemy / DONE)  ... | 4 | 0 |
| enemy999 | support | 75 | > /**  * enemy999 — No = 999 没敵の特殊能力  *  * (org原典: newDTW_enemy / DONE)  * //... | 5 | 0 |
| enemy9999 | support | 32 | > /**  * enemy9999 — No = 9999 没敵(ジョナサン,ジョセフ等の波紋使い?)の特殊能力  *  * (org原典: newDT... | 3 | 0 |
| func580 | untranspiled | 45 | > /**  * func580 — func580 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 1 | 0 |
| func587 | untranspiled | 114 | > /**  * func587 — func587 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 6 | 0 |
| func588 | untranspiled | 155 | > /**  * func588 — func588 億泰の空間移動動作処理  *  * (org原典: newDTW_func5)  * // @org... | 5 | 9 |
| func589 | untranspiled | 169 | > /**  * func589 — func589 チョコラータの召喚動作処理  *  * (org原典: newDTW_func5)  * // @o... | 5 | 0 |
| func590 | untranspiled | 49 | > /**  * func590 — func590 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 4 | 0 |
| func591 | untranspiled | 58 | > /**  * func591 — func591 記憶が戻ったウェザーの発動能力「鈍足のカタツムリの召喚」動作処理  *  * (org原典: new... | 4 | 0 |
| func592 | untranspiled | 73 | > /**  * func592 — func592 康一のエコーズ召喚動作処理  *  * (org原典: newDTW_func5)  * // @o... | 4 | 0 |
| func593 | untranspiled | 71 | > /**  * func593 — func593 康一act2 の仲間召喚動作処理  *  * (org原典: newDTW_func5)  * //... | 4 | 0 |
| func594 | untranspiled | 57 | > /**  * func594 — func594 スポーツマックスのゾンビ召喚動作処理  *  * (org原典: newDTW_func5)  * ... | 5 | 0 |
| func595 | untranspiled | 195 | > /**  * func595 — func595 ウンガロの予知動作処理  *  * (org原典: newDTW_func5)  * // @org... | 5 | 0 |
| func596 | untranspiled | 338 | > /**  * func596 — func596 リゾットの刃物生成動作処理  *  * (org原典: newDTW_func5)  * // @o... | 6 | 0 |
| func597 | untranspiled | 72 | > /**  * func597 — func597 マックイィーンの道連れ動作処理  *  * (org原典: newDTW_func5)  * // ... | 5 | 0 |
| func598 | untranspiled | 122 | > /**  * func598 — func598 ブチャラティの2マス先からのパンチ動作処理  *  * (org原典: newDTW_func5) ... | 7 | 0 |
| func599 | untranspiled | 63 | > /**  * func599 — func599 ジョナサンの2マス先からのパンチ動作処理  *  * (org原典: newDTW_func5)  ... | 7 | 0 |
| func600 | untranspiled | 63 | > /**  * func600 — func600 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 7 | 0 |
| func602 | untranspiled | 185 | > /**  * func602 — func602 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 6 | 0 |
| func603 | untranspiled | 150 | > /**  * func603 — func603 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 6 | 0 |
| func604 | untranspiled | 225 | > /**  * func604 — func604 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 7 | 0 |
| func605 | untranspiled | 180 | > /**  * func605 — func605 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 6 | 0 |
| func606 | untranspiled | 104 | > /**  * func606 — func606 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 6 | 0 |
| func607 | untranspiled | 147 | > /**  * func607 — func607 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 6 | 0 |
| func608 | untranspiled | 69 | > /**  * func608 — func608 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 5 | 0 |
| func609 | untranspiled | 172 | > /**  * func609 — func609 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 7 | 0 |
| func610 | untranspiled | 148 | > /**  * func610 — func610 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 6 | 0 |
| func611 | untranspiled | 68 | > /**  * func611 — func611 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 4 | 0 |
| func612 | untranspiled | 65 | > /**  * func612 — func612 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 3 | 0 |
| func613 | untranspiled | 79 | > /**  * func613 — func613 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 6 | 0 |
| func614 | untranspiled | 104 | > /**  * func614 — func614 敵キャラの時止め能力処理  *  * (org原典: newDTW_func6)  * // @or... | 3 | 0 |
| func617 | untranspiled | 48 | > /**  * func617 — func617 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 4 | 0 |
| func618 | untranspiled | 44 | > /**  * func618 — func618 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 4 | 0 |
| func623 | untranspiled | 145 | > /**  * func623 — func623 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 4 | 0 |
| func657 | untranspiled | 131 | > /**  * func657 — func657 敵 玉美へ攻撃した時の罪悪感処理  *  * (org原典: newDTW_func6)  * //... | 4 | 1 |
| func663 | untranspiled | 70 | > /**  * func663 — func663 敵ラバーソウル&ノートリアスBIGの投擲無効化処理  *  * (org原典: newDTW_fun... | 5 | 0 |
| func664 | untranspiled | 33 | > /**  * func664 — func664 敵クリームの射撃&投擲無効化処理  *  * (org原典: newDTW_func6)  * //... | 2 | 0 |
| func665 | untranspiled | 33 | > /**  * func665 — func665 敵ウェザーリポートの射撃&投擲無効化処理  *  * (org原典: newDTW_func6)  ... | 2 | 0 |
| func666 | untranspiled | 93 | > /**  * func666 — func666 敵ギアッチョの射撃&投擲無効化処理  *  * (org原典: newDTW_func6)  * /... | 5 | 0 |
| func670 | untranspiled | 40 | > /**  * func670 — func670 敵チリペッパーが水上へ移動したときの消滅処理  *  * (org原典: newDTW_func6)... | 4 | 0 |
| func702 | untranspiled | 244 | > /**  * func702 — func702 吸血鬼4兄弟に攻撃した際のメッセージ表示  *  * (org原典: newDTW_func7)  ... | 4 | 0 |

## event

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func150 | untranspiled | 533 | > /**  * func150 — func150 オープニング (5部最終決戦 ジョルノ達との戦いの場面)  *  * (org原典: newDTW_... | 11 | 1 |
| func151 | untranspiled | 72 | > /**  * func151 — func151 初めてヴェネチアホテルへ訪れた際のディアボロの呟き  *  * (org原典: newDTW_eve... | 4 | 1 |
| func152 | untranspiled | 46 | > /**  * func152 — func152 初めてダンジョンを訪れた際のディアボロの呟き  *  * (org原典: newDTW_events... | 4 | 1 |
| func153 | untranspiled | 81 | > /**  * func153 — func153 ホテルの外初クリア後(エンヤホテル)、ヴェネチアホテルに戻った際のイベント  *  * (org原典... | 5 | 1 |
| func154 | untranspiled | 47 | > /**  * func154 — func154 レクイエムの大迷宮初クリア後、ヴェネチアホテルに戻った際のイベント  *  * (org原典: ne... | 4 | 1 |
| func155 | untranspiled | 475 | > /**  * func155 — func155 ディアボロの試練開放イベント(岸辺露伴がヤギを追いかけるイベント)  *  * (org原典: ne... | 5 | 1 |
| func156 | untranspiled | 76 | > /**  * func156 — func156 初めてダンジョンを訪れ、クリア出来ずにヴェネチアホテルに戻った際のディアボロの呟き  *  * (o... | 5 | 1 |

## extra_items

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| item701 | untranspiled | 37 | > /**  * item701 — No = 701 没アイテム「ソフト・マシーンの発動によって罠にした敵」を使用した時の効果  *  * (org原典... | 3 | 0 |
| item712 | untranspiled | 22 | > /**  * item712 — No = 712 アイテム「やばいクスリ」を使用した時の効果  *  * (org原典: newDTW_item(そ... | 1 | 0 |
| item713 | untranspiled | 24 | > /**  * item713 — No = 713 アイテム「ポルポのライター」を使用した時の効果  *  * (org原典: newDTW_item... | 2 | 0 |
| item714 | untranspiled | 219 | > /**  * item714 — No = 714 アイテム「紫外線照射装置」を使用した時の効果  *  * (org原典: newDTW_item(... | 4 | 0 |
| item715 | untranspiled | 44 | > /**  * item715 — No = 715 アイテム「点滴」を使用した時の効果  *  * (org原典: newDTW_item(その他))... | 3 | 0 |
| item716 | untranspiled | 30 | > /**  * item716 — No = 716 アイテム「恐竜の化石」を使用した時の効果  *  * (org原典: newDTW_item(その... | 2 | 0 |
| item718 | untranspiled | 29 | > /**  * item718 — No = 718 アイテム「聖なる弓矢」を使用した時の効果  *  * (org原典: newDTW_item(その... | 2 | 0 |
| item719 | untranspiled | 38 | > /**  * item719 — No = 719 アイテム「吉良の弓矢」を使用した時の効果  *  * (org原典: newDTW_item(その... | 4 | 0 |
| item720 | untranspiled | 36 | > /**  * item720 — No = 720 アイテム「ときのがくぼう」を使用した時の効果  *  * (org原典: newDTW_item(... | 2 | 0 |
| item722 | untranspiled | 24 | > /**  * item722 — No = 722 アイテム「シーザーのバンダナ」を使用した時の効果  *  * (org原典: newDTW_ite... | 1 | 0 |
| item723 | untranspiled | 24 | > /**  * item723 — No = 723 アイテム「魔法のランプ」を使用した時の効果  *  * (org原典: newDTW_item(そ... | 2 | 0 |
| item724 | untranspiled | 70 | > /**  * item724 — No = 724 石仮面を使用した時の効果  *  * (org原典: newDTW_item(その他))  * /... | 3 | 0 |
| item725 | untranspiled | 15 | > /**  * item725 — No = 725 オレっちのコートを使用した時の効果 (なし)  *  * (org原典: newDTW_item(... | 0 | 0 |
| item726 | untranspiled | 28 | > /**  * item726 — No = 726 アイテム「鉄球」を使用した時の効果を使用した時の効果  *  * (org原典: newDTW_i... | 1 | 0 |
| item727 | untranspiled | 31 | > /**  * item727 — No = 727 アイテム「ゾンビ馬」を使用した時の効果  *  * (org原典: newDTW_item(その他... | 1 | 0 |
| item728 | untranspiled | 62 | > /**  * item728 — No = 728 赤石つき石仮面  *  * (org原典: newDTW_item(その他))  * // @or... | 3 | 0 |
| item729 | untranspiled | 27 | > /**  * item729 — No = 729 アイテム「吉良の財布」を使用した時の効果  *  * (org原典: newDTW_item(その... | 2 | 0 |
| item730 | untranspiled | 25 | > /**  * item730 — No = 730 アイテム「大家のカバン」を使用した時の効果  *  * (org原典: newDTW_item(そ... | 2 | 0 |
| item731 | untranspiled | 34 | > /**  * item731 — No = 731 アイテム「盗まれた財布」を使用した時の効果  *  * (org原典: newDTW_item(そ... | 2 | 0 |
| item732 | untranspiled | 74 | > /**  * item732 — No = 732 ベルトのバックルを使用した時の効果  *  * Ver0.1401にて追加  *  * (org原... | 6 | 0 |
| item797 | untranspiled | 17 | > /**  * item797 — No = 797 没アイテム「」を使用した時の効果  *  * (org原典: newDTW_item(その他)) ... | 0 | 0 |
| item798 | untranspiled | 38 | > /**  * item798 — No = 798 没アイテム「」を使用した時の効果  *  * (org原典: newDTW_item(その他)) ... | 3 | 0 |
| item799 | untranspiled | 34 | > /**  * item799 — No = 799 アイテム「装備＋９９」を使用した時の効果  *  * (org原典: newDTW_item(その... | 3 | 0 |
| item9999 | untranspiled | 103 | > /**  * item9999 — No = 9999 没アイテム？  *  * (org原典: newDTW_item(その他))  * // @o... | 4 | 0 |

## food

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| item600 | untranspiled | 43 | > /**  * item600 — No = 600 アイテム「ピッツァ」を使用した時の効果  *  * (org原典: newDTW_item(食料)... | 2 | 0 |
| item602 | untranspiled | 43 | > /**  * item602 — No = 602 アイテム「ネアポリスのピッツァ」を使用した時の効果  *  * (org原典: newDTW_it... | 2 | 0 |
| item603 | untranspiled | 106 | > /**  * item603 — No = 603 「腐ったピッツァ」を使用した時の効果  *  * (org原典: newDTW_item(食料))... | 2 | 0 |
| item604 | untranspiled | 38 | > /**  * item604 — No = 604 アイテム「ポルポのピッツァ」を使用した時の効果  *  * (org原典: newDTW_item... | 2 | 0 |
| item605 | untranspiled | 41 | > /**  * item605 — No = 605  アイテム「焦げたピッツァ」を使用した時の効果  *  * (org原典: newDTW_item... | 2 | 0 |
| item630 | untranspiled | 31 | > /**  * item630 — No = 630  アイテム「娼婦風スパゲッティ」を使用した時の効果  *  * (org原典: newDTW_it... | 1 | 0 |
| item631 | untranspiled | 34 | > /**  * item631 — No = 631 アイテム「モッツァレラチーズとトマトのサラダ」を使用した時の効果  *  * (org原典: ne... | 1 | 0 |
| item632 | untranspiled | 50 | > /**  * item632 — No = 632 アイテム「キリマンジャロの雪解け水」を使用した時の効果  *  * (org原典: newDTW_... | 3 | 0 |
| item633 | untranspiled | 41 | > /**  * item633 — No = 633 アイテム「子羊背肉のリンゴソースかけ」を使用した時の効果  *  * (org原典: newDTW... | 3 | 0 |
| item634 | untranspiled | 72 | > /**  * item634 — No = 634 アイテム「プリン」を使用した時の効果  *  * (org原典: newDTW_item(食料))... | 3 | 0 |
| item635 | untranspiled | 33 | > /**  * item635 — No = 635 アイテム「焦げた料理」を使用した時の効果  *  * (org原典: newDTW_item(食料... | 1 | 0 |
| item636 | untranspiled | 34 | > /**  * item636 — No = 636 アイテム「サンドイッチ」を使用した時の効果  *  * (org原典: newDTW_item(食... | 1 | 0 |
| item639 | untranspiled | 33 | > /**  * item639 — No = 639 アイテム「カエルの丸焼き」を使用した時の効果  *  * (org原典: newDTW_item(... | 1 | 0 |
| item640 | untranspiled | 33 | > /**  * item640 — No = 640 アイテム「焦げた食べ物」を使用した時の効果  *  * (org原典: newDTW_item(食... | 1 | 0 |
| item641 | untranspiled | 34 | > /**  * item641 — No = 641 アイテム「消し炭」を使用した時の効果  *  * (org原典: newDTW_item(食料))... | 2 | 0 |
| item647 | untranspiled | 35 | > /**  * item647 — No = 647 アイテム「オレンジ」を使用した時の効果  *  * (org原典: newDTW_item(食料)... | 1 | 0 |
| item648 | untranspiled | 35 | > /**  * item648 — No = 648 アイテム「鎌倉カスター」を使用した時の効果  *  * (org原典: newDTW_item(食... | 1 | 0 |
| item650 | untranspiled | 38 | > /**  * item650 — No = 650 アイテム「カエル」を使用した時の効果  *  * (org原典: newDTW_item(食料))... | 1 | 0 |
| item651 | untranspiled | 38 | > /**  * item651 — No = 651 アイテム「大きいカエル」を使用した時の効果  *  * (org原典: newDTW_item(食... | 1 | 0 |
| item652 | untranspiled | 38 | > /**  * item652 — No = 652 アイテム「カエルの死体」を使用した時の効果  *  * (org原典: newDTW_item(食... | 1 | 0 |
| item653 | untranspiled | 35 | > /**  * item653 — No = 653 アイテム「超巨大なカエル」を使用した時の効果  *  * (org原典: newDTW_item(... | 1 | 0 |
| item654 | untranspiled | 43 | > /**  * item654 — No = 654 アイテム「ヤドクガエル」を使用した時の効果  *  * (org原典: newDTW_item(食... | 2 | 0 |
| item655 | untranspiled | 38 | > /**  * item655 — No = 655 アイテム「ザリガニ」を使用した時の効果  *  * (org原典: newDTW_item(食料)... | 1 | 0 |

## func

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| AutoDraw | support | 139 | > /**  * func000 — IPC Renderer  *  * Electronアプリケーションで使用されるIPC Renderer という ... | 1 | 368 |
| func0009 | transpiled | 342 | > /**  * func009 — func009 ゲーム基本動作フレーム処理  *  * newDTW のゲームの根幹となる処理  *  * (org... | 26 | 27 |
| func0019 | untranspiled | 1061 | > /**  * func019 — func019 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)  *  * (org原典: n... | 60 | 2 |
| func0050 | transpiled | 32 | > /**  * func050 — func050 メッセージを上へゆっくりとスクロール (ページ切り替え) なくても切り替えはできるが、文面の切り替え... | 1 | 46 |
| func009 | transpiled | 342 | > /**  * func009 — func009 ゲーム基本動作フレーム処理  *  * newDTW のゲームの根幹となる処理  *  * (org... | 26 | 144 |
| func010 | untranspiled | 35 | > /**  * func010 — func010 Cキーを押した際のその場所での旋回処理  *  * (org原典: newDTW_func0)  *... | 1 | 1 |
| func011 | untranspiled | 219 | > /**  * func011 — func011 不明  *  * (org原典: newDTW_func0)  * // @org-injected... | 2 | 3 |
| func012 | untranspiled | 232 | > /**  * func012 — func012 不明  *  * (org原典: newDTW_func0)  * // @org-injected... | 12 | 2 |
| func013 | untranspiled | 89 | > /**  * func013 — func013 不明  *  * (org原典: newDTW_func0)  * // @org-injected... | 4 | 1 |
| func014 | untranspiled | 294 | > /**  * func014 — func014 不明  *  * (org原典: newDTW_func0)  * // @org-injected... | 6 | 1 |
| func015 | untranspiled | 359 | > /**  * func015 — func015 ディアボロの移動処理(座標計算処理)  *  * (org原典: newDTW_func0)  * ... | 10 | 4 |
| func016 | untranspiled | 141 | > /**  * func016 — func016 不明  *  * (org原典: newDTW_func0)  * // @org-injected... | 2 | 14 |
| func017 | untranspiled | 55 | > /**  * func017 — func017 不明  *  * (org原典: newDTW_func0)  * // @org-injected... | 0 | 9 |
| func018 | untranspiled | 60 | > /**  * func018 — func018 不明  *  * (org原典: newDTW_func0)  * // @org-injected... | 0 | 12 |
| func0186 | untranspiled | 14 |  | 1 | 1 |
| func019 | transpiled | 1061 | > /**  * func019 — func019 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)  *  * (org原典: n... | 60 | 137 |
| func0190 | untranspiled | 20 |  | 1 | 1 |
| func020 | untranspiled | 479 | > /**  * func020 — imoprt  *  * (org原典: newDTW_func0)  * // @org-injected  */ | 15 | 1 |
| func023 | transpiled | 23 |  | 0 | 33 |
| func024 | untranspiled | 21 |  | 0 | 3 |
| func0348 | untranspiled | 38 | > /**  * func348 — func348 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 0 | 1 |
| func0352 | untranspiled | 779 | > /**  * func352 — func352 装備disc攻撃モーションドット座標指定  *  * (org原典: newDTW_func3)  ... | 2 | 2 |
| func0353 | untranspiled | 744 | > /**  * func353 — func353 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 1 |
| func0354 | untranspiled | 3315 | > /**  * func354 — func354 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 4 | 14 |
| func0357 | untranspiled | 31 | > /**  * func357 — func357 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 2 |
| func0358 | transpiled | 96 | > /**  * func358 — func358 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 8 | 44 |
| func0382 | transpiled | 96 | > /**  * func382 — func382 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 1 |
| func0411 | untranspiled | 1275 |  | 2 | 0 |
| func043 | untranspiled | 83 |  | 5 | 1 |
| func044 | transpiled | 35 | > /**  * func044 — func044 不明  *  * (org原典: newDTW_func0)  * // @org-injected... | 4 | 2 |
| func0457 | transpiled | 38 | > /**  * func457 — func457 体力を回復させてくれと選択した時、体力回復後の状態異常回復の動作処理  *  * (org原典: n... | 2 | 2 |
| func0458 | transpiled | 46 | > /**  * func458 — func458 恐竜の化石に関するもの(一巡後の世界のみで効果があるようになっている)  *  * (org原典: ... | 0 | 2 |
| func0459 | transpiled | 51 | > /**  * func459 — func459 道具画面(所持数0)の表示(メニュー画面/道具)  *  * (org原典: newDTW_func... | 3 | 2 |
| func047 | untranspiled | 104 | > /**  * func047 — func047 不明  *  * (org原典: newDTW_func0)  * // @org-injected... | 2 | 9 |
| func048 | transpiled | 105 | > /**  * func048 — func048 メッセージBOX生成処理  *  * (org原典: newDTW_func0)  * // @or... | 1 | 2 |
| func049 | untranspiled | 46 | > /**  * func049 — func049 メッセージBOXへメッセージ設定処理  *  * (org原典: newDTW_func0)  * ... | 0 | 1 |
| func0493 | transpiled | 337 | > /**  * func493 — func493 装備disc能力値の設定  *  * (org原典: newDTW_func4)  * // @or... | 0 | 4 |
| func050 | untranspiled | 32 | > /**  * func050 — func050 メッセージを上へゆっくりとスクロール (ページ切り替え) なくても切り替えはできるが、文面の切り替え... | 1 | 47 |
| func0536 | untranspiled | 590 | > /**  * func536 — func536 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 0 | 2 |
| func0537 | untranspiled | 46 | > /**  * func537 — func537 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 0 | 2 |
| func060 | untranspiled | 389 | > /**  * func060 — func060 ダンジョンの階段を先に進んだ時の動作処理  *  * (org原典: newDTW_dungeon_... | 19 | 3 |
| func061 | untranspiled | 57 | > /**  * func061 — func061 不明  *  * (org原典: newDTW_func0)  * // @org-injected... | 0 | 2 |
| func062 | untranspiled | 24 | > /**  * func062 — func062 ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加  *  * (org原典: newDT... | 0 | 7 |
| func063 | untranspiled | 92 | > /**  * func063 — func063 ダンジョン内の階段機能  *  * (org原典: newDTW_dungeon_main / DO... | 0 | 1 |
| func0658 | untranspiled | 699 | > /**  * func658 — func658 敵が攻撃を受けた時の動作処理  *  * (org原典: newDTW_func6)  * // @... | 6 | 1 |
| func0660 | untranspiled | 1112 | > /**  * func660 — func660 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 15 | 1 |
| func0697 | untranspiled | 69 | > /**  * func697 — func697 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 1 | 1 |
| func070 | transpiled | 423 | > /**  * func070 — func070 アイテムの表示用アイコン座標指定  *  * (org原典: newDTW_func0)  * //... | 0 | 5 |
| func073 | untranspiled | 38 | > /**  * func073 — func073 不明 配列格納  *  * (org原典: newDTW_func0)  * // @org-inj... | 0 | 1 |
| func076 | untranspiled | 205 | > /**  * func076 — func076 各ダンジョンの絵文字読込処理  *  * (org原典: newDTW_dungeon_main /... | 1 | 14 |
| func077 | untranspiled | 187 | > /**  * func077 — func077 画像描画関係  *  * (org原典: newDTW_func0)  * // @org-inje... | 0 | 1 |
| func078 | untranspiled | 66 | > /**  * func078 — func078 不明 (ロード関係)  *  * (org原典: newDTW_func0)  * // @org-... | 0 | 1 |
| func079 | untranspiled | 857 |  | 7 | 1 |
| func0799 | transpiled | 58 | > /**  * func0799 — func799 口座へ入金、口座から出金した時の表示  *  * ヴェネチアホテルや亀、酒場の設定  *  * (... | 6 | 0 |
| func0800 | transpiled | 58 | > /**  * func0800 — func800 不明  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDTW_du... | 6 | 0 |
| func0801 | transpiled | 68 | > /**  * func0801 — func801 不明  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDTW_du... | 6 | 0 |
| func0802 | transpiled | 58 | > /**  * func0802 — func802 ヴェネチアホテルに設置してあるPC設定  *  * ヴェネチアホテルや亀、酒場の設定  *  * ... | 6 | 0 |
| func0803 | transpiled | 58 | > /**  * func0803 — func803 ヴェネチアホテルに設置してあるPC設定  *  * ヴェネチアホテルや亀、酒場の設定  *  * ... | 6 | 0 |
| func0804 | untranspiled | 86 | > /**  * func0804 — func804 ヴェネチアホテルに設置してあるPC設定  *  * ヴェネチアホテルや亀、酒場の設定  *  * ... | 9 | 0 |
| func0805 | transpiled | 79 | > /**  * func0805 — func805 ヴェネチアホテルに設置してあるPC設定  *  * ヴェネチアホテルや亀、酒場の設定  *  * ... | 5 | 0 |
| func0806 | untranspiled | 48 | > /**  * func0806 — func806 不明  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDTW_du... | 4 | 0 |
| func0807 | transpiled | 122 | > /**  * func0807 — func807 不明  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDTW_du... | 6 | 0 |
| func0808 | untranspiled | 97 | > /**  * func0808 — func808 不明  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDTW_du... | 15 | 0 |
| func0809 | transpiled | 40 | > /**  * func0809 — func809 不明  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDTW_du... | 6 | 0 |
| func0810 | transpiled | 57 | > /**  * func0810 — func810 ヴェネチアホテルに設置してあるPC設定  *  * ヴェネチアホテルや亀、酒場の設定  *  * ... | 6 | 0 |
| func0811 | transpiled | 33 | > /**  * func0811 — func811 ヴェネチアホテルに設置してあるPC設定  *  * ヴェネチアホテルや亀、酒場の設定  *  * ... | 1 | 0 |
| func0812 | transpiled | 30 | > /**  * func0812 — func812 不明  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDTW_du... | 1 | 0 |
| func0813 | transpiled | 86 | > /**  * func0813 — func813 不明  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDTW_du... | 6 | 0 |
| func0814 | transpiled | 162 | > /**  * func0814 — func814 ヴェネチアホテルに設置してあるPC設定  *  * ヴェネチアホテルや亀、酒場の設定  *  * ... | 6 | 0 |
| func0815 | transpiled | 42 | > /**  * func0815 — func815 不明  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDTW_du... | 7 | 0 |
| func0816 | transpiled | 40 | > /**  * func0816 — func816 不明  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDTW_du... | 6 | 0 |
| func0817 | untranspiled | 110 | > /**  * func0817 — func817 不明  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDTW_du... | 20 | 0 |
| func0818 | transpiled | 28 | > /**  * func0818 — func818 ヴェネチアホテルのPCへ話しかけた時のメッセージ処理  *  * ヴェネチアホテルや亀、酒場の設定... | 1 | 0 |
| func0819 | transpiled | 51 | > /**  * func0819 — func819 不明  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDTW_du... | 4 | 0 |
| func0820 | transpiled | 48 | > /**  * func0820 — func820 不明  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDTW_du... | 4 | 0 |
| func0821 | transpiled | 94 | > /**  * func0821 — func821 不明  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDTW_du... | 5 | 0 |
| func0822 | transpiled | 48 | > /**  * func0822 — func822 不明  *  * ヴェネチアホテルや亀、酒場の設定  *  * (org原典: newDTW_du... | 4 | 0 |
| func0823 | transpiled | 61 | > /**  * func0823 — func823 ヴェネチアホテルのPC を起動した時のメッセージフレーム  *  * ヴェネチアホテルや亀、酒場の... | 5 | 0 |
| func0824 | transpiled | 28 |  | 2 | 0 |
| func0825 | untranspiled | 83 |  | 9 | 0 |
| func0826 | untranspiled | 267 | > /**  * func0826 — func826 レクイエムの大迷宮の入り口へ入ろうとした際のメッセージ処理  *  * ヴェネチアホテルや亀、酒場... | 11 | 0 |
| func0827 | transpiled | 100 | > /**  * func0827 — func827 ダンジョン「レクイエムの大迷宮」へ入った時の初期化処理  *  * (org原典: newDTW_... | 6 | 0 |
| func0828 | transpiled | 36 | > /**  * func0828 — func828 ディアボロの試練の入り口へ入ろうとした際のメッセージ処理  *  * ヴェネチアホテルや亀、酒場の... | 2 | 0 |
| func0829 | transpiled | 96 | > /**  * func0829 — func829 ダンジョン「ディアボロの試練」へ入った時の初期化処理  *  * (org原典: newDTW_d... | 8 | 0 |
| func0830 | untranspiled | 101 | > /**  * func0830 — func830 ダンジョンへ侵入した時に必ず一番はじめに読み込まれる処理  *  * (org原典: newDTW... | 8 | 0 |
| func0831 | untranspiled | 129 | > /**  * func0831 — func831 持ち込み不可ダンジョン侵入忠告メッセージ処理  *  * (org原典: newDTW_dunge... | 5 | 0 |
| func0832 | untranspiled | 179 | > /**  * func0832 — func832 NPC プッチ神父との会話メッセージ  *  * ヴェネチアホテルや亀、酒場の設定  *  * (... | 10 | 0 |
| func0833 | transpiled | 51 | > /**  * func0833 — func833 NPC DIOとの会話メッセージ  *  * ヴェネチアホテルや亀、酒場の設定  *  * (or... | 6 | 0 |
| func0834 | transpiled | 82 | > /**  * func0834 — func834 ダンジョン「一巡後の世界」へ入った時の初期化処理  *  * (org原典: newDTW_dun... | 6 | 0 |
| func0835 | transpiled | 51 | > /**  * func0835 — func835 NPC ロッコ・バロッコ所長に話しかけた時のメッセージ処理  *  * ヴェネチアホテルや亀、酒場... | 4 | 1 |
| func0836 | untranspiled | 311 | > /**  * func0836 — func836 ダンジョン「鉄獄(鉄の牢獄)」へ入った時の初期化処理  *  * (org原典: newDTW_d... | 7 | 0 |
| func0837 | transpiled | 67 | > /**  * func0837 — func837 店のアイテムを購入せずに帰還した際、NPC マリリン・マンソンの登場処理  *  * ヴェネチアホ... | 6 | 1 |
| func0838 | transpiled | 47 | > /**  * func0838 — func838 店のアイテムを購入せずに帰還した際、NPC マリリン・マンソンの登場処理  *  * ヴェネチアホ... | 5 | 1 |
| func0839 | untranspiled | 90 | > /**  * func0839 — func839 マップ移動やイベント発生フラグ処理  *  * newDTW のゲームの根幹となる処理  *  *... | 7 | 1 |
| func0840 | untranspiled | 134 | > /**  * func0840 — func840 選択肢処理(はい、いいえ & 買う、やめる等)  *  * newDTW のゲームの根幹となる処理... | 8 | 1 |
| func0841 | transpiled | 91 | > /**  * func0841 — func841 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 5 | 0 |
| func0842 | transpiled | 70 | > /**  * func0842 — func842 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 6 | 0 |
| func0843 | untranspiled | 74 | > /**  * func0843 — func843 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 5 | 0 |
| func0844 | transpiled | 42 | > /**  * func0844 — func844 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 6 | 0 |
| func0845 | transpiled | 42 | > /**  * func0845 — func845 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 6 | 0 |
| func0846 | transpiled | 64 | > /**  * func0846 — func846 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 7 | 0 |
| func0847 | transpiled | 50 | > /**  * func0847 — func847 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 6 | 1 |
| func0848 | transpiled | 232 | > /**  * func0848 — func848 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 6 | 0 |
| func0849 | transpiled | 49 | > /**  * func0849 — func849 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 4 | 0 |
| func0850 | untranspiled | 42 | > /**  * func0850 — func850 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 4 | 0 |
| func0851 | untranspiled | 56 | > /**  * func0851 — func851 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 3 | 0 |
| func0852 | untranspiled | 56 | > /**  * func0852 — func852 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 3 | 0 |
| func0853 | untranspiled | 239 | > /**  * func0853 — func853 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 4 | 3 |
| func0898 | transpiled | 827 | > /**  * func0898 — func898 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 53 | 49 |
| func0899 | transpiled | 73 | > /**  * func0899 — func899 不明  *  * (org原典: newDTW_func8)  * // @org-injecte... | 0 | 1 |
| func0900 | untranspiled | 149 |  | 9 | 2 |
| func0901 | untranspiled | 23 |  | 0 | 2 |
| func0902 | untranspiled | 23 |  | 0 | 2 |
| func0903 | untranspiled | 23 |  | 0 | 2 |
| func0904 | untranspiled | 24 |  | 0 | 2 |
| func0905 | untranspiled | 23 |  | 0 | 1 |
| func0906 | untranspiled | 24 |  | 0 | 1 |
| func0907 | untranspiled | 145 |  | 0 | 2 |
| func0908 | untranspiled | 38 |  | 2 | 0 |
| func0909 | transpiled | 21 |  | 1 | 0 |
| func0910 | transpiled | 229 |  | 11 | 10 |
| func0911 | transpiled | 30 |  | 5 | 4 |
| func0912 | untranspiled | 233 |  | 8 | 1 |
| func0913 | untranspiled | 90 |  | 0 | 1 |
| func0914 | untranspiled | 339 |  | 1 | 1 |
| func0915 | untranspiled | 22 |  | 0 | 2 |
| func0916 | untranspiled | 25 |  | 2 | 2 |
| func0917 | transpiled | 67 |  | 0 | 2 |
| func0918 | untranspiled | 56 |  | 3 | 1 |
| func0919 | untranspiled | 38 |  | 0 | 1 |
| func0920 | untranspiled | 106 |  | 4 | 1 |
| func0921 | untranspiled | 159 |  | 6 | 1 |
| func0922 | untranspiled | 314 |  | 4 | 1 |
| func0923 | untranspiled | 54 |  | 0 | 1 |
| func0924 | untranspiled | 59 |  | 3 | 0 |
| func0925 | untranspiled | 48 |  | 0 | 1 |
| func0926 | untranspiled | 33 |  | 0 | 1 |
| func0927 | transpiled | 21 |  | 1 | 0 |
| func0928 | transpiled | 70 |  | 5 | 2 |
| func0929 | untranspiled | 438 |  | 3 | 2 |
| func0930 | untranspiled | 47 |  | 4 | 0 |
| func0931 | untranspiled | 35 |  | 2 | 0 |
| func0932 | untranspiled | 350 |  | 2 | 2 |
| func0933 | transpiled | 32 |  | 0 | 1 |
| func0934 | untranspiled | 80 |  | 0 | 2 |
| func0935 | untranspiled | 54 |  | 9 | 2 |
| func0936 | untranspiled | 48 |  | 3 | 1 |
| func0937 | untranspiled | 32 |  | 0 | 1 |
| func0938 | untranspiled | 62 |  | 1 | 1 |
| func0939 | untranspiled | 39 |  | 3 | 3 |
| func0940 | untranspiled | 410 |  | 1 | 2 |
| func0945 | untranspiled | 33 |  | 0 | 1 |
| func0946 | untranspiled | 36 |  | 0 | 1 |
| func0947 | untranspiled | 44 |  | 1 | 1 |
| func0948 | untranspiled | 852 |  | 0 | 1 |
| func0949 | untranspiled | 44 |  | 1 | 1 |
| func0950 | untranspiled | 161 |  | 0 | 1 |
| func0951 | untranspiled | 44 |  | 1 | 1 |
| func0952 | untranspiled | 666 |  | 0 | 1 |
| func0953 | untranspiled | 82 |  | 0 | 1 |
| func0954 | untranspiled | 121 |  | 8 | 0 |
| func0955 | untranspiled | 24 |  | 1 | 0 |
| func0956 | untranspiled | 25 |  | 0 | 0 |
| func0957 | untranspiled | 52 |  | 0 | 1 |
| func0958 | untranspiled | 551 |  | 11 | 2 |
| func0959 | untranspiled | 23 |  | 0 | 2 |
| func0960 | untranspiled | 27 |  | 1 | 0 |
| func0961 | untranspiled | 35 |  | 2 | 1 |
| func0962 | untranspiled | 92 |  | 0 | 1 |
| func0963 | untranspiled | 27 |  | 1 | 2 |
| func0964 | untranspiled | 59 |  | 1 | 8 |
| func0965 | transpiled | 34 |  | 4 | 1 |
| func0966 | untranspiled | 62 |  | 4 | 6 |
| func0967 | untranspiled | 35 |  | 0 | 1 |
| func0968 | transpiled | 247 |  | 5 | 2 |
| func0969 | transpiled | 34 |  | 0 | 1 |
| func0970 | untranspiled | 177 |  | 10 | 1 |
| func0971 | untranspiled | 60 |  | 0 | 1 |
| func0972 | untranspiled | 34 |  | 0 | 2 |
| func0973 | transpiled | 21 |  | 1 | 1 |
| func0974 | untranspiled | 32 |  | 4 | 2 |
| func0975 | untranspiled | 32 |  | 0 | 1 |
| func0976 | untranspiled | 58 |  | 3 | 1 |
| func0977 | transpiled | 19 |  | 0 | 1 |
| func0978 | untranspiled | 137 |  | 4 | 1 |
| func0979 | untranspiled | 36 |  | 0 | 1 |
| func0980 | untranspiled | 49 |  | 5 | 1 |
| func0981 | transpiled | 20 |  | 0 | 1 |
| func0982 | untranspiled | 35 |  | 4 | 1 |
| func0983 | transpiled | 300 |  | 0 | 2 |
| func0984 | untranspiled | 36 |  | 2 | 0 |
| func0985 | untranspiled | 664 |  | 10 | 2 |
| func0986 | untranspiled | 37 |  | 0 | 1 |
| func0987 | transpiled | 45 |  | 0 | 1 |
| func0988 | untranspiled | 68 |  | 4 | 9 |
| func0989 | untranspiled | 35 |  | 2 | 1 |
| func0990 | untranspiled | 83 |  | 0 | 1 |
| func0991 | untranspiled | 27 |  | 1 | 2 |
| func0992 | untranspiled | 59 |  | 1 | 8 |
| func0993 | untranspiled | 49 |  | 0 | 2 |
| func0994 | untranspiled | 86 |  | 1 | 1 |
| func0995 | transpiled | 55 |  | 1 | 1 |
| func0996 | untranspiled | 91 |  | 12 | 2 |
| func0997 | untranspiled | 179 |  | 2 | 0 |
| func0998 | untranspiled | 121 |  | 11 | 0 |
| func0999 | untranspiled | 26 |  | 0 | 1 |
| func1000 | untranspiled | 26 |  | 0 | 1 |
| func1001 | untranspiled | 26 |  | 0 | 1 |
| func1002 | untranspiled | 63 |  | 2 | 0 |
| func1003 | untranspiled | 73 |  | 6 | 0 |
| func1004 | untranspiled | 71 |  | 0 | 1 |
| func1005 | transpiled | 20 |  | 0 | 0 |
| func1006 | untranspiled | 244 |  | 7 | 0 |
| func1007 | untranspiled | 89 |  | 15 | 0 |
| func1008 | untranspiled | 43 |  | 2 | 0 |
| func1009 | untranspiled | 67 |  | 4 | 0 |
| func1010 | untranspiled | 82 |  | 0 | 0 |
| func1011 | transpiled | 183 |  | 45 | 0 |
| func1012 | untranspiled | 2203 |  | 22 | 0 |
| func1013 | transpiled | 29 |  | 1 | 2 |
| func1014 | untranspiled | 104 |  | 2 | 3 |
| func1015 | untranspiled | 140 |  | 3 | 3 |
| func1016 | transpiled | 56 |  | 0 | 4 |
| func1017 | untranspiled | 148 |  | 5 | 1 |
| func1018 | untranspiled | 132 |  | 4 | 1 |
| func1019 | untranspiled | 109 |  | 7 | 1 |
| func1020 | untranspiled | 47 |  | 3 | 1 |
| func1021 | untranspiled | 277 |  | 5 | 1 |
| func1022 | untranspiled | 99 |  | 4 | 1 |
| func1023 | untranspiled | 296 |  | 4 | 1 |
| func1024 | untranspiled | 228 |  | 3 | 1 |
| func1025 | untranspiled | 212 |  | 4 | 1 |
| func1026 | untranspiled | 43 |  | 2 | 1 |
| func1027 | untranspiled | 179 |  | 8 | 1 |
| func1028 | untranspiled | 60 |  | 6 | 1 |
| func1029 | untranspiled | 123 |  | 5 | 1 |
| func1030 | untranspiled | 78 |  | 3 | 1 |
| func1031 | untranspiled | 143 |  | 6 | 1 |
| func1032 | untranspiled | 119 |  | 5 | 1 |
| func1033 | untranspiled | 221 |  | 5 | 1 |
| func1034 | untranspiled | 181 |  | 8 | 1 |
| func1035 | untranspiled | 79 |  | 4 | 1 |
| func1036 | untranspiled | 117 |  | 5 | 1 |
| func1037 | untranspiled | 106 |  | 4 | 1 |
| func1038 | untranspiled | 86 |  | 3 | 1 |
| func1039 | untranspiled | 140 |  | 6 | 1 |
| func1040 | untranspiled | 137 |  | 11 | 1 |
| func1041 | untranspiled | 265 |  | 5 | 1 |
| func1042 | untranspiled | 109 |  | 3 | 1 |
| func1043 | untranspiled | 118 |  | 4 | 1 |
| func1044 | untranspiled | 121 |  | 7 | 1 |
| func1045 | untranspiled | 199 |  | 6 | 1 |
| func1046 | untranspiled | 118 |  | 5 | 1 |
| func1047 | untranspiled | 95 |  | 5 | 1 |
| func1048 | untranspiled | 71 |  | 6 | 1 |
| func1049 | transpiled | 21 |  | 1 | 1 |
| func1050 | untranspiled | 258 |  | 7 | 1 |
| func1051 | untranspiled | 119 |  | 7 | 1 |
| func1052 | untranspiled | 109 |  | 7 | 1 |
| func1053 | untranspiled | 101 |  | 6 | 1 |
| func1054 | untranspiled | 63 |  | 5 | 0 |
| func1055 | untranspiled | 131 |  | 5 | 1 |
| func1056 | untranspiled | 150 |  | 5 | 1 |
| func138 | untranspiled | 87 | > /**  * func138 — func138 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理  * ... | 1 | 1 |
| func143 | untranspiled | 23 | > /**  * func143 — func143 不明  *  * (org原典: newDTW_login / DONE)  * // @org-i... | 2 | 1 |
| func157 | untranspiled | 42 |  | 3 | 0 |
| func158 | untranspiled | 79 | > /**  * func158 — func158 オープニング戦キャラ配置処理  *  * (org原典: newDTW_events / DONE)... | 3 | 1 |
| func164 | untranspiled | 66 |  | 0 | 1 |
| func165 | untranspiled | 54 |  | 5 | 1 |
| func166 | untranspiled | 182 |  | 12 | 4 |
| func167 | untranspiled | 26 |  | 4 | 1 |
| func168 | untranspiled | 331 |  | 3 | 6 |
| func169 | untranspiled | 84 |  | 8 | 3 |
| func170 | untranspiled | 139 |  | 3 | 1 |
| func171 | untranspiled | 130 |  | 2 | 1 |
| func172 | untranspiled | 28 |  | 7 | 2 |
| func173 | transpiled | 78 |  | 8 | 5 |
| func174 | untranspiled | 59 |  | 1 | 1 |
| func175 | untranspiled | 128 |  | 3 | 1 |
| func176 | untranspiled | 48 |  | 0 | 1 |
| func177 | transpiled | 1078 |  | 0 | 4 |
| func178 | untranspiled | 27 |  | 1 | 9 |
| func179 | untranspiled | 56 |  | 2 | 1 |
| func181 | untranspiled | 90 |  | 2 | 1 |
| func183 | untranspiled | 69 |  | 4 | 1 |
| func184 | untranspiled | 16 |  | 1 | 1 |
| func185 | untranspiled | 38 |  | 3 | 0 |
| func186 | untranspiled | 14 |  | 1 | 0 |
| func187 | untranspiled | 20 |  | 1 | 4 |
| func188 | untranspiled | 26 |  | 1 | 1 |
| func189 | untranspiled | 20 |  | 1 | 1 |
| func190 | untranspiled | 20 |  | 1 | 1 |
| func191 | untranspiled | 91 |  | 2 | 0 |
| func192 | untranspiled | 41 |  | 3 | 0 |
| func197 | untranspiled | 134 |  | 2 | 1 |
| func198 | transpiled | 21 |  | 1 | 0 |
| func199 | transpiled | 113 |  | 7 | 3 |
| func200 | untranspiled | 97 | > /**  * func200 — func200 マップの色設定  *  * (org原典: newDTW_func2)  * // @org-inj... | 0 | 1 |
| func201 | untranspiled | 60 | > /**  * func201 — func201 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 5 | 2 |
| func202 | transpiled | 27 | > /**  * func202 — func202 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 1 | 0 |
| func203 | transpiled | 295 | > /**  * func203 — func203 メッセージ色(メニュー/設定/システム)の設定動作処理  *  * (org原典: newDTW_f... | 5 | 2 |
| func204 | untranspiled | 88 | > /**  * func204 — func204 メッセージ色(メニュー/設定/システム)の設定表示  *  * (org原典: newDTW_fun... | 0 | 1 |
| func205 | untranspiled | 24 | > /**  * func205 — 画面サイズ設定: 初期化処理  *  * ※ MenuController + menuConfigs.screen... | 0 | 0 |
| func206 | untranspiled | 23 | > /**  * func206 — 画面サイズ設定: 入力処理 (旧API互換)  *  * ※ MenuController.run() に置き換え。... | 0 | 0 |
| func207 | untranspiled | 24 | > /**  * func207 — 画面サイズ設定: 描画処理 (旧API互換)  *  * ※ MenuController.render() に置き... | 0 | 1 |
| func208 | transpiled | 29 | > /**  * func208 — func208 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 2 | 0 |
| func209 | transpiled | 129 | > /**  * func209 — func209 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 8 | 2 |
| func210 | untranspiled | 115 | > /**  * func210 — func210 キーコンフィグ設定  *  * (org原典: newDTW_func2)  * // @org-i... | 0 | 1 |
| func211 | transpiled | 141 | > /**  * func211 — func211 キーコンフィグ設定のキー名称  *  * (org原典: newDTW_func2)  * // @... | 0 | 1 |
| func212 | transpiled | 45 | > /**  * func212 — func212 キーコンフィグ設定の方向キー  *  * (org原典: newDTW_func2)  * // @... | 1 | 3 |
| func213 | untranspiled | 66 | > /**  * func213 — func213 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 0 | 1 |
| func214 | transpiled | 33 | > /**  * func214 — func214 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 1 | 1 |
| func215 | transpiled | 31 | > /**  * func215 — func215 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 1 | 0 |
| func216 | transpiled | 513 | > /**  * func216 — func216 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 8 | 2 |
| func217 | transpiled | 34 | > /**  * func217 — func217 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 0 | 1 |
| func218 | transpiled | 54 | > /**  * func218 — func218 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 0 | 1 |
| func219 | untranspiled | 144 | > /**  * func219 — func219 ジョイコン設定  *  * (org原典: newDTW_func2)  * // @org-inj... | 1 | 1 |
| func220 | untranspiled | 85 | > /**  * func220 — func220 ジョイコン設定キー名称  *  * (org原典: newDTW_func2)  * // @org... | 0 | 1 |
| func221 | transpiled | 40 | > /**  * func221 — func221 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 2 | 1 |
| func222 | transpiled | 182 | > /**  * func222 — func222 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 5 | 2 |
| func223 | transpiled | 70 | > /**  * func223 — func223 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 3 | 2 |
| func224 | untranspiled | 23 | > /**  * func224 — func224 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 2 | 1 |
| func225 | untranspiled | 167 | > /**  * func225 — func225 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 6 | 2 |
| func226 | untranspiled | 43 | > /**  * func226 — func226 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 1 | 2 |
| func227 | untranspiled | 153 | > /**  * func227 — func227 装備データ出力処理  *  * (org原典: newDTW_func2)  * // @org-i... | 4 | 2 |
| func228 | untranspiled | 19 | > /**  * func228 — func228 装備データ出力完了  *  * (org原典: newDTW_func2)  * // @org-i... | 0 | 1 |
| func230 | untranspiled | 51 | > /**  * func230 — func230 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 0 | 4 |
| func235 | untranspiled | 269 | > /**  * func235 — func235 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 0 | 1 |
| func236 | transpiled | 31 | > /**  * func236 — func236 ダンジョン攻略中に冒険を諦める関数1  *  * (org原典: newDTW_func2)  * ... | 3 | 2 |
| func237 | transpiled | 28 | > /**  * func237 — func237 ダンジョン攻略中に冒険を諦める関数2  *  * (org原典: newDTW_func2)  * ... | 2 | 1 |
| func238 | transpiled | 57 | > /**  * func238 — func238 ダンジョン攻略中に冒険を諦める関数3  *  * (org原典: newDTW_func2)  * ... | 6 | 3 |
| func239 | transpiled | 28 | > /**  * func239 — func239 ダンジョンを抜け出す際の動作処理の実行  *  * (org原典: newDTW_func2)  *... | 1 | 1 |
| func240 | untranspiled | 60 | > /**  * func240 — func240 セーブするファイル名設定  *  * (org原典: newDTW_func2)  * // @or... | 1 | 1 |
| func241 | untranspiled | 115 | > /**  * func241 — func241 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 0 | 1 |
| func242 | untranspiled | 88 | > /**  * func242 — func242 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 0 | 2 |
| func246 | untranspiled | 134 | > /**  * func246 — func246 ダンジョンごとのモンスターハウス発生率設定処理  *  * (org原典: newDTW_dunge... | 4 | 1 |
| func247 | transpiled | 238 | > /**  * func247 — func247 ダンジョン関係  *  * (org原典: newDTW_dungeon_main / DONE) ... | 32 | 1 |
| func248 | untranspiled | 319 | > /**  * func248 — func248 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 0 | 5 |
| func249 | untranspiled | 181 | > /**  * func249 — func249 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 3 | 1 |
| func250 | untranspiled | 112 | > /**  * func250 — func250 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 0 | 1 |
| func251 | untranspiled | 130 | > /**  * func251 — func251 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 0 | 1 |
| func252 | untranspiled | 53 | > /**  * func252 — func252 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 0 | 1 |
| func253 | untranspiled | 273 | > /**  * func253 — func253 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 2 | 1 |
| func254 | untranspiled | 54 | > /**  * func254 — func254 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 1 | 1 |
| func255 | untranspiled | 71 | > /**  * func255 — func255 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 5 | 1 |
| func256 | transpiled | 42 | > /**  * func256 — func256 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func257 | transpiled | 63 | > /**  * func257 — func257 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 0 | 1 |
| func258 | transpiled | 37 | > /**  * func258 — func258 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func259 | transpiled | 41 | > /**  * func259 — func259 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func260 | transpiled | 37 | > /**  * func260 — func260 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func261 | transpiled | 39 | > /**  * func261 — func261 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func262 | transpiled | 39 | > /**  * func262 — func262 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func263 | transpiled | 39 | > /**  * func263 — func263 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func264 | transpiled | 38 | > /**  * func264 — func264 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func265 | transpiled | 33 | > /**  * func265 — func265 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func266 | transpiled | 37 | > /**  * func266 — func266 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func267 | transpiled | 37 | > /**  * func267 — func267 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func268 | transpiled | 37 | > /**  * func268 — func268 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func269 | transpiled | 40 | > /**  * func269 — func269 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func270 | transpiled | 40 | > /**  * func270 — func270 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func271 | transpiled | 38 | > /**  * func271 — func271 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func272 | transpiled | 39 | > /**  * func272 — func272 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func273 | transpiled | 40 | > /**  * func273 — func273 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func274 | transpiled | 37 | > /**  * func274 — func274 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func275 | transpiled | 37 | > /**  * func275 — func275 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func276 | transpiled | 37 | > /**  * func276 — func276 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func277 | transpiled | 37 | > /**  * func277 — func277 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func278 | transpiled | 40 | > /**  * func278 — func278 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func279 | transpiled | 40 | > /**  * func279 — func279 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func280 | transpiled | 40 | > /**  * func280 — func280 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func281 | transpiled | 37 | > /**  * func281 — func281 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func282 | transpiled | 37 | > /**  * func282 — func282 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func283 | transpiled | 37 | > /**  * func283 — func283 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func284 | transpiled | 37 | > /**  * func284 — func284 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func285 | transpiled | 37 | > /**  * func285 — func285 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func286 | transpiled | 37 | > /**  * func286 — func286 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func287 | transpiled | 40 | > /**  * func287 — func287 不明  *  * ダンジョンで読み込まれるランダムマップ。  *  * (org原典: newDTW... | 0 | 1 |
| func323 | untranspiled | 101 | > /**  * func323 — func323 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 4 | 1 |
| func324 | transpiled | 390 | > /**  * func324 — func324 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 3 | 2 |
| func324X | transpiled | 45 |  | 1 | 1 |
| func325 | transpiled | 69 | > /**  * func325 — func325 幻覚の迷宮でハーミットパープルを発動したときの処理  *  * (org原典: newDTW_fun... | 0 | 1 |
| func326 | transpiled | 79 | > /**  * func326 — func326 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 8 | 1 |
| func327 | transpiled | 48 | > /**  * func327 — func327 スーパーフライの鉄塔描写処理  *  * (org原典: newDTW_func3)  * // @... | 0 | 1 |
| func328 | transpiled | 85 | > /**  * func328 — func328 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 1 |
| func329 | untranspiled | 30 | > /**  * func329 — func329 画面全体に黒いブラインドをかける処理  *  * (org原典: newDTW_func3)  * ... | 0 | 1 |
| func330 | transpiled | 571 | > /**  * func330 — func330 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 1 |
| func331 | transpiled | 260 | > /**  * func331 — func331 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理  *  * (or... | 2 | 72 |
| func332 | untranspiled | 32 | > /**  * func332 — func332  不明  *  * (org原典: newDTW_func3)  * // @org-injecte... | 0 | 1 |
| func333 | untranspiled | 32 | > /**  * func333 — func333 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 0 | 1 |
| func334 | transpiled | 66 | > /**  * func334 — func334 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 0 | 1 |
| func335 | transpiled | 45 | > /**  * func335 — func335 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 9 |
| func336 | transpiled | 47 | > /**  * func336 — func336 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 7 |
| func337 | transpiled | 447 | > /**  * func337 — func337 メッセージ処理関係呼び出し  *  * (org原典: newDTW_func3)  * // @o... | 64 | 273 |
| func338 | untranspiled | 39 | > /**  * func338 — func338 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 0 | 19 |
| func339 | untranspiled | 28 | > /**  * func339 — func339 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 2 | 19 |
| func340 | transpiled | 80 | > /**  * func340 — func340 キー入力による選択処理  *  * (org原典: newDTW_func3)  * // @org... | 2 | 17 |
| func341 | transpiled | 19 | > /**  * func341 — func341 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 0 | 2 |
| func342 | transpiled | 530 | > /**  * func342 — func342 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 0 | 1 |
| func343 | transpiled | 48 | > /**  * func343 — func343 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 0 | 1 |
| func344 | transpiled | 106 | > /**  * func344 — func344 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 0 | 1 |
| func345 | transpiled | 1357 | > /**  * func345 — func345 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 3 | 2 |
| func346 | transpiled | 188 | > /**  * func346 — func346 射撃discの攻撃時に表示されるスタンド本体ドット絵設定  *  * (org原典: newDTW_... | 0 | 1 |
| func347 | untranspiled | 214 | > /**  * func347 — func347 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 0 | 1 |
| func348 | untranspiled | 38 | > /**  * func348 — func348 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 0 | 13 |
| func349 | transpiled | 154 | > /**  * func349 — func349 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 1 |
| func350 | untranspiled | 154 | > /**  * func350 — func350 おそらく射撃攻撃のモーション設定  *  * (org原典: newDTW_func3)  * //... | 0 | 1 |
| func351 | untranspiled | 303 | > /**  * func351 — func351 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 0 | 1 |
| func352 | untranspiled | 779 | > /**  * func352 — func352 装備disc攻撃モーションドット座標指定  *  * (org原典: newDTW_func3)  ... | 2 | 1 |
| func353 | untranspiled | 744 | > /**  * func353 — func353 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 1 |
| func354 | transpiled | 3315 | > /**  * func354 — func354 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 4 | 51 |
| func354X | untranspiled | 3351 | > /**  * func354X — func354X 不明  *  * (org原典: newDTW_func3)  * // @org-inject... | 2 | 1 |
| func355 | untranspiled | 54 | > /**  * func355 — func355 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 0 | 1 |
| func356 | transpiled | 37 | > /**  * func356 — func356 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 3 | 3 |
| func357 | transpiled | 31 | > /**  * func357 — func357 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 2 |
| func358 | transpiled | 96 | > /**  * func358 — func358 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 8 | 19 |
| func359 | untranspiled | 99 | > /**  * func359 — fun359 敵図鑑の並び処理  *  * (org原典: newDTW_func3)  * // @org-inj... | 2 | 1 |
| func360 | transpiled | 80 | > /**  * func360 — func360 敵図鑑機能  *  * (org原典: newDTW_func3)  * // @org-injec... | 0 | 1 |
| func361 | transpiled | 198 | > /**  * func361 — func361 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 9 | 3 |
| func362 | transpiled | 39 | > /**  * func362 — func362 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 5 | 2 |
| func363 | untranspiled | 167 | > /**  * func363 — func363 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 3 | 1 |
| func364 | untranspiled | 38 | > /**  * func364 — func364 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 0 | 1 |
| func365 | untranspiled | 130 | > /**  * func365 — func365 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 2 |
| func366 | transpiled | 124 | > /**  * func366 — func366 敵図鑑(各敵の分類)  *  * (org原典: newDTW_func3)  * // @org-... | 1 | 1 |
| func367 | untranspiled | 256 | > /**  * func367 — func367 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 4 | 1 |
| func368 | untranspiled | 111 | > /**  * func368 — func368 アイテム欄の呼び出し関数  *  * (org原典: newDTW_func3)  * // @or... | 4 | 2 |
| func369 | untranspiled | 82 | > /**  * func369 — func369 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 5 | 2 |
| func370 | untranspiled | 54 | > /**  * func370 — func370 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 1 |
| func371 | untranspiled | 33 | > /**  * func371 — func371 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 0 |
| func372 | transpiled | 57 | > /**  * func372 — func372 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 5 | 2 |
| func373 | untranspiled | 77 | > /**  * func373 — func373 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 2 | 1 |
| func374 | transpiled | 38 | > /**  * func374 — func374 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 5 | 1 |
| func375 | transpiled | 27 | > /**  * func375 — func375 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 0 |
| func376 | transpiled | 59 | > /**  * func376 — func376 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 5 | 2 |
| func377 | untranspiled | 94 | > /**  * func377 — func377 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 3 | 1 |
| func378 | transpiled | 57 | > /**  * func378 — func378 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 5 | 2 |
| func379 | untranspiled | 69 | > /**  * func379 — func379 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 0 | 1 |
| func380 | untranspiled | 888 | > /**  * func380 — func380 状態異常確認呼び出し  *  * (org原典: newDTW_func3)  * // @org-... | 3 | 0 |
| func381 | transpiled | 121 | > /**  * func381 — func381 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 4 | 2 |
| func382 | untranspiled | 96 | > /**  * func382 — func382 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 1 |
| func383 | transpiled | 34 | > /**  * func383 — func383 アイテムの出現数を増やす動作処理  *  * (org原典: newDTW_func3)  * //... | 1 | 2 |
| func384 | transpiled | 438 | > /**  * func384 — func384 アイテムをフロアへ追加する処理  *  * (org原典: newDTW_func3)  * // ... | 5 | 9 |
| func385 | untranspiled | 1131 | > /**  * func385 — func385 各ダンジョンごとの出現アイテム&出現確率管理(合成の空き容量もここで設定している)  *  * (o... | 5 | 4 |
| func386 | untranspiled | 25 | > /**  * func386 — func386  床に落ちているアイテムを「消し炭」にする  *  * (org原典: newDTW_dungeon... | 0 | 1 |
| func387 | untranspiled | 56 | > /**  * func387 — func387 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 0 | 1 |
| func388 | untranspiled | 206 | > /**  * func388 — func388 おそらくレアdiscの出現確率設定1 ??  *  * (org原典: newDTW_dungeon... | 1 | 1 |
| func389 | transpiled | 245 | > /**  * func389 — func389 おそらくレアdiscの出現確率設定2 ??  *  * (org原典: newDTW_dungeon... | 0 | 1 |
| func390 | untranspiled | 72 | > /**  * func390 — func390 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 1 |
| func391 | untranspiled | 48 | > /**  * func391 — func391 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 1 |
| func392 | untranspiled | 35 | > /**  * func392 — func392 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 1 |
| func393 | untranspiled | 61 | > /**  * func393 — func393 ダンジョン関係  *  * (org原典: newDTW_dungeon_main / DONE) ... | 1 | 1 |
| func394 | untranspiled | 47 | > /**  * func394 — func394 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 1 | 0 |
| func395 | untranspiled | 68 | > /**  * func395 — func395 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 0 | 7 |
| func396 | transpiled | 129 | > /**  * func396 — func396 床のアイテム表示処理  *  * (org原典: newDTW_func3)  * // @org-... | 1 | 1 |
| func397 | transpiled | 353 | > /**  * func397 — func397 所持、または床に落ちているアイテムのアイコン表示  *  * (org原典: newDTW_func... | 0 | 11 |
| func398 | untranspiled | 60 | > /**  * func398 — func398 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 0 | 4 |
| func399 | transpiled | 59 | > /**  * func399 — func399 不明  *  * (org原典: newDTW_func3)  * // @org-injected... | 0 | 1 |
| func400 | untranspiled | 137 | > /**  * func400 — func400 アイテムを拾う際の動作処理  *  * (org原典: newDTW_func4)  * // @o... | 10 | 3 |
| func401 | untranspiled | 52 | > /**  * func401 — func401 射撃discを拾った際、同じものを既に所持していた時にまとめる動作処理  *  * (org原典: ... | 3 | 2 |
| func402 | untranspiled | 127 | > /**  * func402 — func402 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 2 | 1 |
| func403 | untranspiled | 72 | > /**  * func403 — func403 装備したdiscを床に置く時(取り外す際)の動作処理  *  * (org原典: newDTW_fu... | 8 | 1 |
| func404 | untranspiled | 164 | > /**  * func404 — func404 アイテムを置く時の動作処理  *  * (org原典: newDTW_func4)  * // @o... | 19 | 2 |
| func405 | transpiled | 195 | > /**  * func405 — func405 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 0 | 8 |
| func406 | transpiled | 28 | > /**  * func406 — func406 アイテムメニューからの "打つ" 選択時、射撃攻撃動作呼び出し処理  *  * (org原典: ne... | 1 | 1 |
| func407 | untranspiled | 45 | > /**  * func407 — func407 アイテム欄を開いた時の表示イニシャル処理 (1ページ目、カーソル一番上等)  *  * (org原典... | 3 | 1 |
| func408 | untranspiled | 51 | > /**  * func408 — func408 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 2 | 1 |
| func409 | transpiled | 33 | > /**  * func409 — func409 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 3 | 1 |
| func410 | transpiled | 75 | > /**  * func410 — func410 装備したdiscを投げる時(取り外す際)の動作処理  *  * (org原典: newDTW_fun... | 8 | 2 |
| func411 | transpiled | 318 | > /**  * func411 — func411 アイテムを投げた時の動作処理  *  * (org原典: newDTW_func4)  * // @... | 17 | 2 |
| func412 | untranspiled | 49 | > /**  * func412 — func412 アイテムを投げて床に落ちた時のアイテム表示処理  *  * (org原典: newDTW_func4... | 1 | 1 |
| func413 | untranspiled | 60 | > /**  * func413 — func413 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 0 | 1 |
| func414 | untranspiled | 182 | > /**  * func414 — func414 ヤバいもの関係の容量設定？？  *  * (org原典: newDTW_func4)  * // @... | 11 | 6 |
| func415 | transpiled | 32 | > /**  * func415 — func415 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 5 | 3 |
| func416 | transpiled | 42 | > /**  * func416 — func416 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 0 | 1 |
| func417 | untranspiled | 67 | > /**  * func417 — func417 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 5 | 1 |
| func418 | untranspiled | 72 | > /**  * func418 — func418 遠投状態(アヌビス神装備)でアイテムを投げた時の動作処理  *  * (org原典: newDTW_... | 8 | 1 |
| func419 | untranspiled | 84 | > /**  * func419 — func419 アイテムに乗った時の動作処理  *  * (org原典: newDTW_func4)  * // @... | 6 | 1 |
| func420 | untranspiled | 554 | > /**  * func420 — func420 各アイテムを使った際、item_listのIDに応じて効果を割り振り  *  * (org原典: n... | 22 | 2 |
| func421 | untranspiled | 47 | > /**  * func421 — func421 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 6 | 1 |
| func422 | untranspiled | 46 | > /**  * func422 — func422 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 5 | 1 |
| func423 | untranspiled | 43 | > /**  * func423 — func423 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 5 | 1 |
| func424 | untranspiled | 82 | > /**  * func424 — func424 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 0 | 3 |
| func425 | untranspiled | 43 | > /**  * func425 — func425 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 6 | 3 |
| func426 | untranspiled | 32 | > /**  * func426 — func426 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 0 | 35 |
| func427 | untranspiled | 32 | > /**  * func427 — func427 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 0 | 32 |
| func428 | untranspiled | 32 | > /**  * func428 — func428 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 0 | 29 |
| func429 | untranspiled | 32 | > /**  * func429 — func429 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 0 | 7 |
| func430 | untranspiled | 46 | > /**  * func430 — func430 配列宣言処理  *  * (org原典: newDTW_func4)  * // @org-inje... | 2 | 14 |
| func431 | untranspiled | 28 | > /**  * func431 — func431 BGM選曲関数呼び出し  *  * (org原典: newDTW_func4)  * // @org... | 0 | 1 |
| func432 | untranspiled | 63 | > /**  * func432 — func432 装備disc、射撃discの合成数や修正値、数などの為の配列か?  *  * (org原典: new... | 1 | 1 |
| func433 | transpiled | 162 | > /**  * func433 — func433 アイテム配列の "数" 増減？関数  *  * (org原典: newDTW_func4)  * /... | 1 | 31 |
| func434 | untranspiled | 147 | > /**  * func434 — func434 アイテムリストを開いている時の配列初期化  *  * (org原典: newDTW_func4)  ... | 1 | 3 |
| func435 | untranspiled | 46 | > /**  * func435 — func435 お金を拾った時の動作処理  *  * (org原典: newDTW_func4)  * // @or... | 2 | 1 |
| func436 | untranspiled | 40 | > /**  * func436 — func436 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 0 | 3 |
| func437 | untranspiled | 62 | > /**  * func437 — func437 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 3 | 6 |
| func438 | transpiled | 40 | > /**  * func438 — func438 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 4 | 1 |
| func439 | untranspiled | 74 | > /**  * func439 — func439 アヴドゥルのdisc効果  *  * (org原典: newDTW_item(記憶disc))  *... | 10 | 1 |
| func440 | untranspiled | 50 | > /**  * func440 — func440 アヴドゥルのdisc効果(全て識別できた場合(ランダム))  *  * (org原典: newDTW... | 3 | 1 |
| func441 | untranspiled | 210 | > /**  * func441 — func441 ギアッチョのdisc効果  *  * (org原典: newDTW_item(記憶disc))  *... | 15 | 1 |
| func443 | transpiled | 40 | > /**  * func443 — func443 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 4 | 1 |
| func444 | untranspiled | 248 | > /**  * func444 — func444 discに対してコミックを読んだ時の強化処理  *  * (org原典: newDTW_func4)... | 15 | 1 |
| func445 | untranspiled | 124 | > /**  * func445 — func445 ヤバいものに対してコミックを読んだ時の強化処理  *  * (org原典: newDTW_func4... | 9 | 1 |
| func446 | untranspiled | 69 | > /**  * func446 — func446 不明  *  * (org原典: newDTW_func4)  * // @org-injected... | 7 | 1 |
| func447 | untranspiled | 50 | > /**  * func447 — func447 魔法のランプを使用した際の動作処理  *  * (org原典: newDTW_item(その他)) ... | 5 | 1 |
| func448 | untranspiled | 70 | > /**  * func448 — func448 不明  *  * (org原典: newDTW_item(その他))  * // @org-inje... | 4 | 2 |
| func449 | untranspiled | 50 | > /**  * func449 — func449 魔法のランプでジャッジメントを召喚した時のメッセージ  *  * (org原典: newDTW_it... | 0 | 1 |
| func450 | untranspiled | 65 | > /**  * func450 — func450 ジャッジメントの問に答え、ジャッジメントが去る時の動作処理  *  * (org原典: newDTW... | 10 | 1 |
| func451 | untranspiled | 62 | > /**  * func451 — func451 願いの数を増やしてくれと選択した時の動作処理  *  * (org原典: newDTW_item(そ... | 4 | 1 |
| func452 | untranspiled | 40 | > /**  * func452 — func452 お金持ちになりたいと選択した時の動作処理  *  * (org原典: newDTW_item(その他... | 4 | 1 |
| func453 | untranspiled | 40 | > /**  * func453 — func453 満腹になりたいと選択した時の動作処理  *  * (org原典: newDTW_item(その他))... | 3 | 1 |
| func454 | untranspiled | 40 | > /**  * func454 — func454 体力を回復させてくれと選択した時の動作処理  *  * (org原典: newDTW_item(その... | 4 | 1 |
| func455 | untranspiled | 84 | > /**  * func455 — func455 敵の動きをとめてくれと選択した時の動作処理  *  * (org原典: newDTW_item(その... | 1 | 1 |
| func456 | untranspiled | 36 | > /**  * func456 — func456 アヴドゥルを生き返らせてくれと選択した時の動作処理  *  * (org原典: newDTW_ite... | 4 | 1 |
| func457 | transpiled | 38 | > /**  * func457 — func457 体力を回復させてくれと選択した時、体力回復後の状態異常回復の動作処理  *  * (org原典: n... | 2 | 4 |
| func458 | untranspiled | 46 | > /**  * func458 — func458 恐竜の化石に関するもの(一巡後の世界のみで効果があるようになっている)  *  * (org原典: ... | 0 | 4 |
| func459 | transpiled | 51 | > /**  * func459 — func459 道具画面(所持数0)の表示(メニュー画面/道具)  *  * (org原典: newDTW_func... | 3 | 3 |
| func468 | untranspiled | 117 | > /**  * func468 — func468 アイテムを整理した時の配列入れ替え関数  *  * (org原典: newDTW_func4)  *... | 0 | 0 |
| func492 | transpiled | 3429 | > /**  * func492 — func492 各アイテムリスト  *  * (org原典: newDTW_func4)  * // @org-in... | 4 | 82 |
| func493 | untranspiled | 337 | > /**  * func493 — func493 装備disc能力値の設定  *  * (org原典: newDTW_func4)  * // @or... | 0 | 5 |
| func495 | untranspiled | 286 | > /**  * func495 — func495 装備disc関係??  *  * (org原典: newDTW_func4)  * // @org-... | 0 | 1 |
| func496 | transpiled | 618 | > /**  * func496 — func496 装備discの共鳴組み合わせ関数  *  * (org原典: newDTW_func4)  * //... | 0 | 1 |
| func497 | untranspiled | 261 | > /**  * func497 — func497 スタンドの共鳴発動時のメッセージ表示  *  * (org原典: newDTW_func4)  * ... | 3 | 1 |
| func498 | untranspiled | 1077 | > /**  * func498 — func498 消費アイテム効果  *  * (org原典: newDTW_func4)  * // @org-in... | 9 | 1 |
| func501 | untranspiled | 49 | > /**  * func501 — func501 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 3 | 1 |
| func502 | untranspiled | 156 | > /**  * func502 — func502 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 0 | 6 |
| func503 | untranspiled | 64 | > /**  * func503 — func503 未識別状態のアイテムの説明を見た時のメッセージ処理  *  * (org原典: newDTW_fun... | 0 | 1 |
| func504 | untranspiled | 187 | > /**  * func504 — func504 n.datファイルへ書き込む内容  *  * (org原典: newDTW_func5)  * //... | 0 | 8 |
| func505 | untranspiled | 45 | > /**  * func505 — func505 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 1 | 7 |
| func506 | untranspiled | 220 | > /**  * func506 — func506 discの発動をした際に、修正値の減少させる(0の時はdisc消滅させる)関数  *  * (org... | 7 | 75 |
| func507 | untranspiled | 31 | > /**  * func507 — func507 スタンドパワーが力尽きて消滅した時の表示  *  * (org原典: newDTW_func5)  ... | 3 | 1 |
| func508 | untranspiled | 30 | > /**  * func508 — func508 スタンドパワーが力尽きて消滅した時の表示2  *  * (org原典: newDTW_func5) ... | 3 | 72 |
| func509 | transpiled | 30 | > /**  * func509 — func509 discの発動をしようとして、発動できない場所の時の動作処理  *  * (org原典: newDT... | 2 | 1 |
| func510 | untranspiled | 46 | > /**  * func510 — func510 発動しようとした際、discが呪われていた時の動作処理  *  * (org原典: newDTW_f... | 4 | 1 |
| func511 | untranspiled | 459 | > /**  * func511 — func511 各discごとの発動動作処理 (スタンド能力)  *  * (org原典: newDTW_func5... | 7 | 1 |
| func512 | untranspiled | 107 | > /**  * func512 — func512 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 2 | 1 |
| func513 | untranspiled | 61 | > /**  * func513 — func513 射撃discヘブンズドアーの発動時メッセージ  *  * (org原典: newDTW_func5)... | 4 | 1 |
| func514 | untranspiled | 59 | > /**  * func514 — func514 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 1 | 1 |
| func515 | untranspiled | 58 | > /**  * func515 — func515 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 1 | 1 |
| func516 | untranspiled | 57 | > /**  * func516 — func516 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 1 | 4 |
| func517 | untranspiled | 57 | > /**  * func517 — func517 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 1 | 1 |
| func518 | untranspiled | 57 | > /**  * func518 — func518 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 1 | 1 |
| func519 | untranspiled | 54 | > /**  * func519 — func519 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 1 | 1 |
| func520 | untranspiled | 35 | > /**  * func520 — func520 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 0 | 1 |
| func521 | untranspiled | 34 | > /**  * func521 — func521 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 0 | 1 |
| func522 | untranspiled | 77 | > /**  * func522 — func522 disc同士の合成関数(クレイジーDの発動能力)1  *  * (org原典: newDTW_fun... | 8 | 1 |
| func523 | untranspiled | 305 | > /**  * func523 — func523 disc同士の合成関数(クレイジーDの発動能力)2  *  * (org原典: newDTW_fun... | 17 | 1 |
| func525 | untranspiled | 78 | > /**  * func525 — func525 ボーイⅡマンの発動能力1  *  * (org原典: newDTW_func5 / DONE)  *... | 8 | 1 |
| func527 | untranspiled | 87 | > /**  * func527 — func527 ボーイⅡマンの発動能力3  *  * (org原典: newDTW_func5 / DONE)  *... | 5 | 2 |
| func528 | untranspiled | 110 | > /**  * func528 — func528 ボーイⅡマンの発動能力4  *  * (org原典: newDTW_func5 / DONE)  *... | 2 | 1 |
| func529 | untranspiled | 224 | > /**  * func529 — func529 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 7 | 3 |
| func530 | untranspiled | 80 | > /**  * func530 — func530 聖なる弓矢の発動動作処理  *  * (org原典: newDTW_func5 / DONE)  *... | 4 | 1 |
| func531 | untranspiled | 171 | > /**  * func531 — func531 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 6 | 4 |
| func535 | untranspiled | 34 | > /**  * func535 — func535 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 1 | 1 |
| func536 | untranspiled | 590 | > /**  * func536 — func536 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 0 | 15 |
| func537 | untranspiled | 46 | > /**  * func537 — func537 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 0 | 2 |
| func538 | transpiled | 396 | > /**  * func538 — func538 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 1 | 3 |
| func539 | transpiled | 313 | > /**  * func539 — func539 各罠ごとのアイコン処理  *  * (org原典: newDTW_func5)  * // @org... | 0 | 4 |
| func540 | transpiled | 49 | > /**  * func540 — func540 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 1 | 3 |
| func541 | untranspiled | 2215 | > /**  * func541 — func541 各罠を踏んだ時の動作処理  *  * (org原典: newDTW_func5)  * // @or... | 29 | 3 |
| func542 | untranspiled | 245 | > /**  * func542 — func542 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 3 | 3 |
| func543 | untranspiled | 6680 | > /**  * func543 — func543 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 62 | 1 |
| func544 | untranspiled | 40 | > /**  * func544 — func544 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 3 | 2 |
| func545 | untranspiled | 37 | > /**  * func545 — func545 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 1 | 1 |
| func546 | untranspiled | 143 | > /**  * func546 — func546 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 0 | 1 |
| func547 | untranspiled | 503 | > /**  * func547 — func547 敵が罠(キッスのシール、ソフトマシーンの仕込み)を踏んだ時の動作処理  *  * (org原典: n... | 12 | 2 |
| func548 | transpiled | 35 | > /**  * func548 — func548 地上へ帰還する  *  * (org原典: newDTW_func5)  * // @org-inj... | 3 | 5 |
| func549 | transpiled | 42 | > /**  * func549 — func549 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 2 | 2 |
| func550 | transpiled | 67 | > /**  * func550 — func550 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 3 | 2 |
| func551 | transpiled | 35 | > /**  * func551 — func551 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 3 | 2 |
| func552 | untranspiled | 75 | > /**  * func552 — func552 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 6 | 3 |
| func553 | transpiled | 121 | > /**  * func553 — func553 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 0 | 2 |
| func554 | transpiled | 261 | > /**  * func554 — func554 罠リスト  *  * (org原典: newDTW_func5)  * // @org-inject... | 1 | 3 |
| func555 | untranspiled | 343 | > /**  * func555 — func555 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 5 | 2 |
| func556 | transpiled | 1428 | > /**  * func556 — func556 敵をフロアへ出現させる処理  *  * (org原典: newDTW_func5)  * // @o... | 6 | 45 |
| func557 | untranspiled | 94 | > /**  * func557 — func557 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 2 | 2 |
| func558 | untranspiled | 83 | > /**  * func558 — func558 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 0 | 3 |
| func559 | untranspiled | 35 | > /**  * func559 — func559 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 0 | 2 |
| func560 | untranspiled | 45 | > /**  * func560 — func560 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 1 | 1 |
| func561 | untranspiled | 31 | > /**  * func561 — func561 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 1 | 1 |
| func562 | untranspiled | 185 | > /**  * func562 — func562 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 1 | 1 |
| func563 | transpiled | 93 | > /**  * func563 — func563 ダンジョン主指定処理  *  * (org原典: newDTW_dungeon_main / DON... | 1 | 1 |
| func564 | untranspiled | 219 | > /**  * func564 — func564 オーラ敵生成処理  *  * (org原典: newDTW_dungeon_main / DONE)... | 1 | 2 |
| func565 | transpiled | 69 | > /**  * func565 — func565 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 2 | 2 |
| func566 | transpiled | 1255 | > /**  * func566 — func566 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 1 | 2 |
| func567 | transpiled | 1507 | > /**  * func567 — func567 敵キャラアイコンの指定 (各imageからドットを指定する)  *  * (org原典: newDT... | 1 | 4 |
| func568 | transpiled | 178 | > /**  * func568 — func568 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 1 | 7 |
| func569 | untranspiled | 2839 | > /**  * func569 — func569 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 6 | 1 |
| func570 | untranspiled | 469 | > /**  * func570 — func570 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 0 | 1 |
| func571 | untranspiled | 304 | > /**  * func571 — func571 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 0 | 1 |
| func572 | untranspiled | 48 | > /**  * func572 — func572 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 0 | 1 |
| func573 | untranspiled | 197 | > /**  * func573 — func573 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 6 | 1 |
| func574 | untranspiled | 287 | > /**  * func574 — func574 おそらく敵のワープ機能のグラフィック処理  *  * (org原典: newDTW_func5)  ... | 3 | 1 |
| func575 | untranspiled | 1550 | > /**  * func575 — func575 ディアボロと敵のターン交代処理?(敵の位置座標処理)  *  * ここがおかしくなると、ディアボロの... | 3 | 1 |
| func576 | untranspiled | 1277 | > /**  * func576 — func576 敵特殊行動発動フラグ処理  *  * (org原典: newDTW_func5)  * // @or... | 2 | 1 |
| func577 | transpiled | 32 | > /**  * func577 — func577 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 0 | 1 |
| func578 | untranspiled | 39 | > /**  * func578 — func578 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 1 | 4 |
| func579 | untranspiled | 137 | > /**  * func579 — func579 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 2 | 1 |
| func581 | untranspiled | 806 | > /**  * func581 — func581 各敵の能力動作処理設定  *  * (org原典: newDTW_func5)  * // @org... | 5 | 1 |
| func582 | untranspiled | 128 | > /**  * func582 — func582 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 0 | 1 |
| func583 | untranspiled | 193 | > /**  * func583 — func583 敵の射撃攻撃モーション処理(ドット絵座標設定等)  *  * (org原典: newDTW_func... | 0 | 1 |
| func584 | untranspiled | 77 | > /**  * func584 — func584 射撃攻撃を受けた時の回避動作処理(弾丸を止める、燃え尽きる等)  *  * (org原典: newD... | 3 | 5 |
| func585 | untranspiled | 505 | > /**  * func585 — func585 ラングラングラーの唾吐きかけ動作処理  *  * (org原典: newDTW_func5)  * ... | 10 | 1 |
| func586 | untranspiled | 361 | > /**  * func586 — func586 不明  *  * (org原典: newDTW_func5)  * // @org-injected... | 3 | 3 |
| func601 | untranspiled | 56 | > /**  * func601 — func601 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 1 | 5 |
| func615 | untranspiled | 82 | > /**  * func615 — func615 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 1 | 1 |
| func616 | untranspiled | 64 | > /**  * func616 — func616 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 3 | 1 |
| func619 | untranspiled | 50 | > /**  * func619 — func619 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 0 | 23 |
| func620 | untranspiled | 230 | > /**  * func620 — func620 各敵の特殊能力(ディアボロへの攻撃)割り振り処理  *  * (org原典: newDTW_func... | 0 | 1 |
| func621 | transpiled | 20 | > /**  * func621 — func621 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 0 | 1 |
| func622 | transpiled | 55 | > /**  * func622 — func622 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 0 | 8 |
| func624 | untranspiled | 129 | > /**  * func624 — func624 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 2 | 2 |
| func625 | transpiled | 306 | > /**  * func625 — func625 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 0 | 2 |
| func626 | transpiled | 3110 | > /**  * func626 — func626 敵リスト  *  * (org原典: newDTW_func6)  * // @org-inject... | 0 | 56 |
| func627 | transpiled | 75 | > /**  * func627 — func627 各ダンジョンごとの出現敵設定  *  * (org原典: newDTW_dungeon_main /... | 5 | 7 |
| func632 | transpiled | 644 | > /**  * func632 — func632 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 0 | 1 |
| func635 | transpiled | 47 | > /**  * func635 — func635 ディアボロの攻撃動作処理  *  * (org原典: newDTW_func6)  * // @or... | 1 | 3 |
| func636 | transpiled | 1253 | > /**  * func636 — func636 ディアボロが攻撃or話しかけた時の動作処理  *  * (org原典: newDTW_func6) ... | 74 | 4 |
| func637 | untranspiled | 82 | > /**  * func637 — func637 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 4 | 1 |
| func638 | untranspiled | 171 | > /**  * func638 — func638 敵を攻撃した時のダメージ計算  *  * (org原典: newDTW_func6)  * // @... | 2 | 5 |
| func639 | untranspiled | 83 | > /**  * func639 — func639 敵の回避処理  *  * (org原典: newDTW_func6)  * // @org-inje... | 0 | 2 |
| func640 | untranspiled | 48 | > /**  * func640 — func640 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 0 | 1 |
| func641 | untranspiled | 96 | > /**  * func641 — func641 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 0 | 2 |
| func642 | untranspiled | 144 | > /**  * func642 — func642 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 0 | 3 |
| func643 | untranspiled | 619 | > /**  * func643 — func643 3方向攻撃処理?  *  * (org原典: newDTW_func6)  * // @org-in... | 5 | 1 |
| func644 | untranspiled | 264 | > /**  * func644 — func644 No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備... | 4 | 1 |
| func645 | untranspiled | 72 | > /**  * func645 — func645 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 0 | 1 |
| func647 | transpiled | 432 | > /**  * func647 — func647 射撃攻撃動作処理  *  * (org原典: newDTW_func6)  * // @org-in... | 13 | 8 |
| func648 | untranspiled | 137 | > /**  * func648 — func648 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 1 | 1 |
| func649 | untranspiled | 96 | > /**  * func649 — func649 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 0 | 1 |
| func651 | untranspiled | 463 | > /**  * func651 — func651 攻撃動作処理  *  * (org原典: newDTW_func6)  * // @org-inje... | 11 | 2 |
| func652 | untranspiled | 336 | > /**  * func652 — func652 No = 113 クラッシュのDISCを攻撃装備している時の水属性媒体から遠隔攻撃処理  *  * ... | 5 | 1 |
| func653 | untranspiled | 207 | > /**  * func653 — func653 No = 118 ダイバーダウンのDISCを攻撃装備している時の壁属性媒体から遠隔装備  *  * ... | 6 | 1 |
| func654 | untranspiled | 381 | > /**  * func654 — func654 敵の攻撃動作処理  *  * (org原典: newDTW_func6)  * // @org-in... | 12 | 3 |
| func655 | untranspiled | 158 | > /**  * func655 — func655 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 7 | 1 |
| func656 | untranspiled | 78 | > /**  * func656 — func656 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 3 | 2 |
| func658 | transpiled | 699 | > /**  * func658 — func658 敵が攻撃を受けた時の動作処理  *  * (org原典: newDTW_func6)  * // @... | 6 | 16 |
| func659 | untranspiled | 181 | > /**  * func659 — func659 敵ボスキャラの状態異常回復処理(レクイエムジョルノ、ウンガロ、離婚した承太郎)  *  * (org... | 5 | 2 |
| func660 | untranspiled | 1112 | > /**  * func660 — func660 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 15 | 6 |
| func661 | untranspiled | 154 | > /**  * func661 — func661 射撃discの攻撃力設定  *  * (org原典: newDTW_func6)  * // @or... | 2 | 2 |
| func662 | untranspiled | 114 | > /**  * func662 — func662 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 3 | 1 |
| func667 | transpiled | 52 | > /**  * func667 — func667 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 3 | 2 |
| func668 | untranspiled | 237 | > /**  * func668 — func668 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 4 | 4 |
| func669 | untranspiled | 77 | > /**  * func669 — func669 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 2 | 7 |
| func671 | untranspiled | 41 | > /**  * func671 — func671 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 0 | 1 |
| func672 | transpiled | 90 | > /**  * func672 — func672 ダンジョンを抜け出す際の動作処理  *  * (org原典: newDTW_dungeon_main... | 5 | 2 |
| func673 | transpiled | 70 | > /**  * func673 — func673 ダンジョンから抜け出した際のイベントフラグ読込  *  * (org原典: newDTW_dunge... | 11 | 4 |
| func674 | transpiled | 18 | > /**  * func674 — func674 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 0 | 1 |
| func676 | untranspiled | 221 | > /**  * func676 — func676 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 5 | 2 |
| func677 | untranspiled | 65 | > /**  * func677 — func677 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 1 | 1 |
| func678 | untranspiled | 73 | > /**  * func678 — func678 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 1 | 1 |
| func679 | transpiled | 24 | > /**  * func679 — func679 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 0 | 3 |
| func680 | untranspiled | 67 | > /**  * func680 — func680 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 4 | 2 |
| func681 | transpiled | 96 | > /**  * func681 — func681 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 0 | 4 |
| func682 | untranspiled | 57 | > /**  * func682 — func682 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 0 | 6 |
| func683 | untranspiled | 96 | > /**  * func683 — func683 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 3 | 3 |
| func684 | untranspiled | 70 | > /**  * func684 — func684 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 1 | 1 |
| func688 | untranspiled | 58 | > /**  * func688 — func688 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 2 | 2 |
| func689 | untranspiled | 43 | > /**  * func689 — func689 ダンジョンを制覇したときの動作処理 (階段出現)  *  * (org原典: newDTW_dung... | 1 | 2 |
| func690 | transpiled | 95 | > /**  * func690 — func690 エコーズの成長処理  *  * (org原典: newDTW_func6)  * // @org-i... | 3 | 2 |
| func691 | transpiled | 38 | > /**  * func691 — func691 ヤク中の少年を倒した後にブチャラティ出現メッセージ処理  *  * (org原典: newDTW_f... | 4 | 2 |
| func692 | transpiled | 30 | > /**  * func692 — func692 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 0 | 2 |
| func693 | transpiled | 39 | > /**  * func693 — func693 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 1 | 1 |
| func694 | transpiled | 40 | > /**  * func694 — func694 スーパーフライが攻撃を跳ね返す処理  *  * (org原典: newDTW_func6)  * /... | 3 | 1 |
| func695 | untranspiled | 68 | > /**  * func695 — func695 敵からのダメージを反射する際の動作処理  *  * (org原典: newDTW_func6)  *... | 5 | 4 |
| func696 | untranspiled | 41 | > /**  * func696 — func696 ダメージを反射する際の動作処理  *  * (org原典: newDTW_func6)  * // ... | 3 | 1 |
| func697 | untranspiled | 69 | > /**  * func697 — func697 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 1 | 3 |
| func698 | untranspiled | 217 | > /**  * func698 — func698 シアハートアタックの爆発処理  *  * (org原典: newDTW_func6)  * // @... | 7 | 3 |
| func699 | untranspiled | 210 | > /**  * func699 — func699 シアハートアタックの爆発処理  *  * (org原典: newDTW_func6)  * // @... | 6 | 5 |
| func700 | untranspiled | 60 | > /**  * func700 — func700 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 3 | 7 |
| func701 | untranspiled | 192 | > /**  * func701 — func701 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 4 | 2 |
| func703 | transpiled | 36 | > /**  * func703 — func703 ハーミットパープルを発動後、地図作成を防がれた相手を倒した時の処理  *  * (org原典: ne... | 2 | 0 |
| func704 | untranspiled | 48 | > /**  * func704 — func704 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 0 | 2 |
| func705 | transpiled | 593 | > /**  * func705 — func705 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 26 | 28 |
| func720 | untranspiled | 65 | > /**  * func720 — func720 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 0 | 3 |
| func721 | untranspiled | 69 | > /**  * func721 — func721 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 0 | 2 |
| func723 | untranspiled | 40 | > /**  * func723 — func723 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 0 | 5 |
| func724 | untranspiled | 45 | > /**  * func724 — func724 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 0 | 11 |
| imeget | support | 139 | > /**  * func000 — IPC Renderer  *  * Electronアプリケーションで使用されるIPC Renderer という ... | 0 | 0 |
| imeset | support | 139 | > /**  * func000 — IPC Renderer  *  * Electronアプリケーションで使用されるIPC Renderer という ... | 0 | 1 |
| makepal | support | 139 | > /**  * func000 — IPC Renderer  *  * Electronアプリケーションで使用されるIPC Renderer という ... | 0 | 1 |
| setMessage | support | 139 | > /**  * func000 — IPC Renderer  *  * Electronアプリケーションで使用されるIPC Renderer という ... | 4 | 448 |

## initialize

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func0006 | untranspiled | 29 | > /**  * func006 — func006 一巡後の世界のみのフラグ処理  *  * newDTW のゲームの根幹となる処理  *  * (or... | 3 | 2 |
| func004 | untranspiled | 378 | > /**  * func004 — func004 ゲーム初期化処理  *  * newDTW のゲームの根幹となる処理  *  * (org原典: n... | 6 | 0 |
| func005 | untranspiled | 44 | > /**  * func005 — func005 セーブデータを読み込む前のフラグ確認処理(ホテルのイベントフラグ、BGM再生曲、マップ背景画像)  ... | 7 | 1 |
| func006 | untranspiled | 29 | > /**  * func006 — func006 一巡後の世界のみのフラグ処理  *  * newDTW のゲームの根幹となる処理  *  * (or... | 3 | 13 |
| func007 | untranspiled | 48 | > /**  * func007 — func007 配列初期化処理  *  * newDTW のゲームの根幹となる処理  *  * (org原典: ne... | 4 | 2 |
| func008 | untranspiled | 464 | > /**  * func008 — 関数宣言  *  * newDTW のゲームの根幹となる処理  *  * (org原典: newDTW_mainfr... | 24 | 2 |
| func139 | untranspiled | 487 | > /**  * func139 — func139 データ読込み処理(00.datファル、01 ~ 03.datセーブデータ解析処理)  *  * ne... | 1 | 2 |
| func180 | untranspiled | 54 |  | 0 | 4 |
| func182 | untranspiled | 60 |  | 0 | 7 |
| func229 | untranspiled | 459 | > /**  * func229 — func229 セーブファイルからデータ読み出し関数  *  * (org原典: newDTW_func2)  * ... | 3 | 1 |
| func231 | untranspiled | 425 | > /**  * func231 — func231 プレイデータを保存するセーブ機能  *  * (org原典: newDTW_func2)  * //... | 3 | 10 |
| func232 | untranspiled | 26 | > /**  * func232 — func232 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 0 | 1 |
| func233 | untranspiled | 252 | > /**  * func233 — func233 不明  *  * (org原典: newDTW_func2)  * // @org-injected... | 2 | 10 |
| func234 | untranspiled | 44 | > /**  * func234 — func234 セーブして終了処理  *  * (org原典: newDTW_func2)  * // @org-i... | 2 | 0 |

## items

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| applyItem | support | 116 | > /**  * Item registry runtime.  *  * - ITEMS: 各 data/*.ts で定義されたアイテム定義を集約し f... | 0 | 1 |
| getItemDef | support | 116 | > /**  * Item registry runtime.  *  * - ITEMS: 各 data/*.ts で定義されたアイテム定義を集約し f... | 0 | 0 |
| isMigrated | support | 116 | > /**  * Item registry runtime.  *  * - ITEMS: 各 data/*.ts で定義されたアイテム定義を集約し f... | 0 | 0 |
| postProcessItem | support | 116 | > /**  * Item registry runtime.  *  * - ITEMS: 各 data/*.ts で定義されたアイテム定義を集約し f... | 0 | 1 |

## keyconf

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func0080 | untranspiled | 612 | > /**  * func080 — func080 各キー入力確認  *  * (org原典: newDTW_func0)  * // @org-inj... | 6 | 2 |
| func051 | transpiled | 26 | > /**  * func051 — func051 キー入力待ち処理  *  * (org原典: newDTW_func0)  * // @org-in... | 2 | 109 |
| func052 | untranspiled | 26 | > /**  * func052 — func052 Shiftキー入力待ち処理  *  * (org原典: newDTW_func0)  * // @o... | 2 | 1 |
| func080 | transpiled | 612 | > /**  * func080 — func080 各キー入力確認  *  * (org原典: newDTW_func0)  * // @org-inj... | 6 | 66 |

## memory

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func442 | untranspiled | 107 | > /**  * func442 — func442 プッチ神父 disc効果  *  * (org原典: newDTW_item(記憶disc))  *... | 12 | 1 |
| item560 | untranspiled | 46 | > /**  * item560 — No = 560 仗助のdiscの効果  *  * (org原典: newDTW_item(記憶disc))  * ... | 2 | 0 |
| item561 | untranspiled | 31 | > /**  * item561 — No = 561  空き のdiscの効果  *  * (org原典: newDTW_item(記憶disc))  ... | 3 | 0 |
| item562 | untranspiled | 32 | > /**  * item562 — No = 562 康一のdiscの効果  *  * (org原典: newDTW_item(記憶disc))  * ... | 3 | 0 |
| item563 | untranspiled | 23 | > /**  * item563 — No = 563 ンドゥールのdiscの効果  *  * (org原典: newDTW_item(記憶disc)) ... | 2 | 0 |
| item564 | untranspiled | 29 | > /**  * item564 — No = 564 噴上裕也のdiscの効果  *  * (org原典: newDTW_item(記憶disc))  ... | 3 | 0 |
| item565 | untranspiled | 21 | > /**  * item565 — No = 565 プッチ神父のdiscの効果  *  * (org原典: newDTW_item(記憶disc)) ... | 1 | 0 |
| item566 | untranspiled | 48 | > /**  * item566 — No = 566 ケンゾーのdiscの効果  *  * (org原典: newDTW_item(記憶disc))  ... | 3 | 0 |
| item567 | untranspiled | 17 | > /**  * item567 — No = 567 アヴドゥルのdiscの効果  *  * (org原典: newDTW_item(記憶disc)) ... | 0 | 0 |
| item568 | untranspiled | 48 | > /**  * item568 — No = 568 ジョンガリ・Aのdiscの効果  *  * (org原典: newDTW_item(記憶disc)... | 3 | 0 |
| item569 | untranspiled | 75 | > /**  * item569 — No = 569 ポルナレフのdiscの効果  *  * (org原典: newDTW_item(記憶disc)) ... | 3 | 0 |
| item570 | untranspiled | 62 | > /**  * item570 — No = 570 ジョナサンのdiscの効果  *  * (org原典: newDTW_item(記憶disc)) ... | 3 | 0 |
| item571 | untranspiled | 196 | > /**  * item571 — No = 571 ボインゴのdiscの効果  *  * (org原典: newDTW_item(記憶disc))  ... | 3 | 0 |
| item572 | untranspiled | 48 | > /**  * item572 — No = 572 承太郎のdiscの効果  *  * (org原典: newDTW_item(記憶disc))  *... | 3 | 0 |
| item573 | untranspiled | 28 | > /**  * item573 — No = 573 重ちーのdiscの効果  *  * (org原典: newDTW_item(記憶disc))  *... | 3 | 0 |
| item574 | untranspiled | 27 | > /**  * item574 — No = 574 エンポリオのdiscの効果  *  * (org原典: newDTW_item(記憶disc)) ... | 2 | 0 |
| item575 | untranspiled | 34 | > /**  * item575 — No = 575 マニッシュボーイのdiscの効果  *  * (org原典: newDTW_item(記憶disc... | 2 | 0 |
| item576 | untranspiled | 20 | > /**  * item576 — No = 576 破裂するdiscの効果  *  * (org原典: newDTW_item(記憶disc))  *... | 1 | 0 |
| item577 | untranspiled | 66 | > /**  * item577 — No = 577 ミキタカのdiscの効果  *  * (org原典: newDTW_item(記憶disc))  ... | 2 | 0 |
| item578 | untranspiled | 28 | > /**  * item578 — No = 578 サンドマンのdiscの効果  *  * (org原典: newDTW_item(記憶disc)) ... | 1 | 0 |
| item579 | untranspiled | 50 | > /**  * item579 — No = 579 ペットショップのdiscの効果  *  * (org原典: newDTW_item(記憶disc)... | 4 | 0 |
| item580 | untranspiled | 56 | > /**  * item580 — No = 580 ドッピオのdiscの効果  *  * (org原典: newDTW_item(記憶disc))  ... | 3 | 0 |
| item582 | untranspiled | 46 | > /**  * item582 — No = 582 水が熱湯になるdiscの効果  *  * (org原典: newDTW_item(記憶disc))... | 3 | 0 |
| item583 | untranspiled | 28 | > /**  * item583 — No = 583 ディアボロのdiscの効果  *  * (org原典: newDTW_item(記憶disc)) ... | 2 | 0 |
| item584 | untranspiled | 59 | > /**  * item584 — No = 584 ヌケサクのdiscの効果  *  * (org原典: newDTW_item(記憶disc))  ... | 3 | 0 |
| item585 | untranspiled | 31 | > /**  * item585 — No = 585 億泰のdiscの効果  *  * (org原典: newDTW_item(記憶disc))  * ... | 2 | 0 |
| item586 | untranspiled | 71 | > /**  * item586 — No = 586 ペッシのdiscの効果  *  * (org原典: newDTW_item(記憶disc))  *... | 4 | 0 |
| item587 | untranspiled | 50 | > /**  * item587 — No = 587 吉良吉影のdiscの効果  *  * (org原典: newDTW_item(記憶disc))  ... | 2 | 0 |
| item588 | untranspiled | 74 | > /**  * item588 — No = 588 J・ガイルのdiscの効果  *  * (org原典: newDTW_item(記憶disc)) ... | 4 | 0 |
| item589 | untranspiled | 40 | > /**  * item589 — No = 589 プロシュート兄貴のdiscの効果  *  * (org原典: newDTW_item(記憶disc... | 3 | 0 |
| item590 | untranspiled | 17 | > /**  * item590 — No = 590 ギアッチョのdiscの効果  *  * (org原典: newDTW_item(記憶disc)) ... | 0 | 0 |
| item591 | untranspiled | 50 | > /**  * item591 — No = 591 ポコロコのdiscの効果  *  * (org原典: newDTW_item(記憶disc))  ... | 2 | 0 |
| item592 | untranspiled | 15 | > /**  * item592 — No = 592 ジョニィのdiscの効果  *  * (org原典: newDTW_item(記憶disc))  ... | 0 | 0 |
| item593 | untranspiled | 15 | > /**  * item593 — No = 593 リンゴォのdiscの効果  *  * (org原典: newDTW_item(記憶disc))  ... | 0 | 0 |
| item594 | untranspiled | 15 | > /**  * item594 — No = 594 ツェペリ男爵のdiscの効果  *  * (org原典: newDTW_item(記憶disc))... | 0 | 0 |

## menu

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func0053 | transpiled | 145 | > /**  * func053 — メニュー画面呼び出し (2x2グリッドメニュー)  *  * カーソル位置:  *   var_247 (1=左列 ... | 3 | 30 |
| func0054 | transpiled | 48 | > /**  * func054 — func054 メニュー画面を開いた時の表示(道具、足元、状態、設定)  *  * (org原典: newDTW_f... | 0 | 41 |
| func0195 | untranspiled | 21 | > /**  * func195 — ゲームスピード設定: 入力処理 (旧API互換)  *  * ※ 統合ハンドラ MenuController.run... | 0 | 2 |
| func0460 | transpiled | 707 | > /**  * func460 — 道具画面 (メニュー画面/道具) の表示処理  *  * 道具一覧パネル + アイテム選択時のサブメニュー描画を担当... | 4 | 2 |
| func0461 | untranspiled | 504 | > /**  * func461 — 道具画面 (メニュー画面/道具) の入力ハンドラ  *  * var_220:    0=道具一覧表示 / 1=アイ... | 19 | 2 |
| func0464 | untranspiled | 121 | > /**  * func464 — 装備disc サブメニュー入力ハンドラ (攻撃/防御/能力 3項目)  *  * 道具画面で装備disc (item... | 7 | 2 |
| func053 | untranspiled | 145 | > /**  * func053 — メニュー画面呼び出し (2x2グリッドメニュー)  *  * カーソル位置:  *   var_247 (1=左列 ... | 3 | 20 |
| func054 | untranspiled | 48 | > /**  * func054 — func054 メニュー画面を開いた時の表示(道具、足元、状態、設定)  *  * (org原典: newDTW_f... | 0 | 6 |
| func055 | untranspiled | 141 | > /**  * func055 — 設定画面(メニュー画面)呼び出し  *  * var_500 (0-4): 5項目の設定メニューカーソル位置  * ... | 4 | 3 |
| func056 | untranspiled | 95 | > /**  * func056 — func056 メニュー画面の"設定"の表示 (マップON、履歴、資料、システム、終了)  *  * (org原典:... | 0 | 1 |
| func057 | untranspiled | 124 | > /**  * func057 — メニュー画面の"資料"の処理 (ハイスコア/コミックス/死因リスト/敵図鑑)  *  * var_505 (0-3)... | 4 | 6 |
| func058 | untranspiled | 134 | > /**  * func058 — func058 メニュー画面の設定からいける"資料"の表示  *  * (org原典: newDTW_func0) ... | 1 | 1 |
| func064 | untranspiled | 67 | > /**  * func064 — func064 足元確認呼び出し  *  * (org原典: newDTW_func0)  * // @org-in... | 9 | 1 |
| func068 | untranspiled | 82 | > /**  * func068 — func068 不明  *  * (org原典: newDTW_func0)  * // @org-injected... | 1 | 1 |
| func069 | untranspiled | 202 | > /**  * func069 — func069 現在装備しているdisc表示欄の設定？  *  * (org原典: newDTW_func0)  *... | 5 | 1 |
| func193 | untranspiled | 91 | > /**  * func193 — システム設定メニュー入力処理  *  * var_899 (0-7): メニューカーソル位置  *   0=ゲームス... | 4 | 5 |
| func194 | untranspiled | 21 | > /**  * func194 — ゲームスピード設定: 初期化処理  *  * ※ 旧実装は init/input/display を3ファイルに分け... | 0 | 0 |
| func195 | untranspiled | 21 | > /**  * func195 — ゲームスピード設定: 入力処理 (旧API互換)  *  * ※ 統合ハンドラ MenuController.run... | 0 | 1 |
| func196 | untranspiled | 20 | > /**  * func196 — ゲームスピード設定: 描画処理 (旧API互換)  *  * ※ 統合ハンドラ MenuController.ren... | 0 | 1 |
| func460 | untranspiled | 707 | > /**  * func460 — 道具画面 (メニュー画面/道具) の表示処理  *  * 道具一覧パネル + アイテム選択時のサブメニュー描画を担当... | 4 | 1 |
| func461 | transpiled | 504 | > /**  * func461 — 道具画面 (メニュー画面/道具) の入力ハンドラ  *  * var_220:    0=道具一覧表示 / 1=アイ... | 19 | 27 |
| func462 | untranspiled | 140 | > /**  * func462 — アイテムIDからカテゴリ (item_class1) とサブメニュー高さ (item_class2) を決定  * ... | 5 | 5 |
| func463 | untranspiled | 659 | > /**  * func463 — 道具画面のサブメニュー (使う/装備/投げる/置く/拾う等) の入力ハンドラ  *  * func462 で分類され... | 22 | 4 |
| func464 | untranspiled | 121 | > /**  * func464 — 装備disc サブメニュー入力ハンドラ (攻撃/防御/能力 3項目)  *  * 道具画面で装備disc (item... | 7 | 2 |
| func465 | untranspiled | 89 | > /**  * func465 — アイテム使用サブメニュー入力ハンドラ (使う/やめる 2項目)  *  * 特定アイテム (使うdisc 等) にカ... | 5 | 1 |
| func466 | untranspiled | 75 | > /**  * func466 — 同種・未識別アイテム (主に射撃disc 400-499) の自動スタック  *  * 所持アイテム配列 var_2... | 1 | 1 |
| func467 | untranspiled | 164 | > /**  * func467 — Shift キーで所持アイテムを整理する  *  * 11本のバブルソートパスを順次実行して所持アイテム配列 var... | 3 | 1 |
| func469 | untranspiled | 250 | > /**  * func469 — ヤバいものへの "入れる" 処理  *  * 道具画面でヤバいもの (id 800-899) にカーソルを合わせ、選... | 14 | 1 |
| func470 | untranspiled | 240 | > /**  * func470 — ヤバいものへアイテムを入れた際の特殊動作処理 (id 805/806/807/815/818)  *  * func... | 3 | 1 |
| func471 | untranspiled | 113 | > /**  * func471 — ヤバいもの容器 (808/809/816) へアイテムを入れた時の特殊処理  *  * func469 (入れる) ... | 2 | 1 |
| func472 | untranspiled | 31 | > /**  * func472 — ｸﾞｯﾁｮの死体に「ピザ・モッツァレラ」(食材600-605) を入れた時の演出  *  * func469 内、y... | 1 | 1 |
| func473 | untranspiled | 320 | > /**  * func473 — 「押す」動作処理 (850-854)  *  * 道具画面で「押す」を選んだアイテムへの動作分岐。アイテム ID 別... | 9 | 1 |
| func474 | untranspiled | 81 | > /**  * func474 — ヤバいもの容器からアイテム取り出し → 所持アイテム末尾へ追加  *  * 道具画面で「ヤバいもの」内のアイテムを「... | 8 | 1 |
| func475 | untranspiled | 47 | > /**  * func475 — 足元アイテム書き込み (var_233[0] → var_78[id])  *  * func478 で var_7... | 0 | 1 |
| func476 | untranspiled | 53 | > /**  * func476 — ヤバいもの (容器) 内アイテムのフィールドを 25 個の作業用グローバルへ展開  *  * var_486[var... | 2 | 1 |
| func477 | untranspiled | 31 | > /**  * func477 — アイテム拾い時に所持数 20 個超になる場合の拒否処理  *  * func400 (アイテム拾い) / func4... | 3 | 2 |
| func478 | untranspiled | 49 | > /**  * func478 — 足元アイテム (var_77/var_78) を仮想スロット var_233[0] にロード  *  * 道具画面の... | 0 | 2 |
| func479 | untranspiled | 34 | > /**  * func479 — 足元アイテムの実体を消去 (var_77 マップから削除 + var_78 スロット解放)  *  * func32... | 0 | 6 |
| func480 | untranspiled | 101 | > /**  * func480 — 道具画面: 所持アイテムと足元アイテムを 1:1 交換  *  * 道具画面で「足元と交換」を選んだ時の処理。  *... | 12 | 2 |
| func481 | untranspiled | 27 | > /**  * func481 — (廃止) デバッグ用のアイテム ID 1234123 注入  *  * Ver0.1309 で使用停止。原典では足元... | 0 | 0 |
| func482 | untranspiled | 25 | > /**  * func482 — アイテム名変更 UI 起動 (func483 初期化 → func484 入力ループへ)  *  * 道具画面でアイ... | 3 | 1 |
| func483 | untranspiled | 37 | > /**  * func483 — アイテム「名前変更」UI 初期化  *  * 道具画面で「名前を付ける」を選んだ際の入力ボックス座標/状態の準備。 ... | 1 | 1 |
| func484 | untranspiled | 338 | > /**  * func484 — アイテム名入力 UI のキー入力ループ  *  * func485 描画の対となる入力処理。func080 (キー入... | 7 | 1 |
| func485 | untranspiled | 219 | > /**  * func485 — アイテム名入力 UI 描画 (キーボード+履歴+カーソル)  *  * func484 (入力ループ) から毎フレー... | 1 | 1 |
| func486 | untranspiled | 72 | > /**  * func486 — アイテム名入力 UI: カーソル位置 → 文字 を入力バッファへ書込  *  * func484 (キー入力ループ)... | 0 | 1 |
| func487 | untranspiled | 97 | > /**  * func487 — アイテム名入力 UI: 濁点 ﾞ / 半濁点 ﾟ で前文字を変換 (3-state 循環)  *  * func48... | 0 | 1 |
| func488 | untranspiled | 108 | > /**  * func488 — アイテム名変更 確定 (容器系: 800-899) + 識別ノート保存  *  * 入力中の名前バッファ (var_... | 2 | 1 |
| func489 | untranspiled | 90 | > /**  * func489 — アイテム名変更 確定 (足元アイテム経路) + 識別ノート保存  *  * func488 の足元アイテム版。var... | 2 | 1 |
| func490 | untranspiled | 29 | > /**  * func490 — ノート (var_754) から 1行取得し var_1924 に格納  *  * notesel + notege... | 0 | 2 |
| func491 | untranspiled | 29 | > /**  * func491 — アイテム名入力 確定: バッファ→文字列化 → ターン進行  *  * func484 (アイテム名入力UI 入力ル... | 1 | 0 |
| func494 | untranspiled | 86 | > /**  * func494 — 装備 disc 全解除 + 共鳴再計算  *  * 全装備 disc を一度クリア (Gvar.equip_disc... | 6 | 15 |
| func499 | untranspiled | 185 | > /**  * func499 — フロア内ワープ実行 (ワープタイル踏みorワープ系効果)  *  * func494 (ワープタイル踏み) や va... | 9 | 7 |
| func500 | untranspiled | 109 | > /**  * func500 — 「おんぶ」状態のモンスターからのダメージ処理 (背中攻撃)  *  * プレーヤーの向き var_199 に対応する... | 3 | 1 |
| funcLangConfig | untranspiled | 14 | > /**  * funcLangConfig — 言語設定: 入力処理 (旧API互換)  *  * ※ MenuController.run() に置... | 0 | 0 |
| funcLangDisplay | untranspiled | 15 | > /**  * funcLangDisplay — 言語設定: 描画処理 (旧API互換)  *  * ※ MenuController.render(... | 0 | 1 |
| funcLangInit | untranspiled | 15 | > /**  * funcLangInit — 言語設定: 初期化処理  *  * ※ MenuController + menuConfigs.lang... | 0 | 0 |
| render | support | 156 | > /**  * MenuController — 統合シンプルメニューシステム  *  * HSP由来の冗長なメニュー実装を統合。各メニュー項目につき ... | 1 | 0 |
| run | support | 156 | > /**  * MenuController — 統合シンプルメニューシステム  *  * HSP由来の冗長なメニュー実装を統合。各メニュー項目につき ... | 0 | 0 |

## mondai

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func0941 | untranspiled | 37 |  | 1 | 1 |
| func0942 | untranspiled | 39 |  | 1 | 3 |
| func0943 | untranspiled | 164 |  | 8 | 2 |
| func0944 | untranspiled | 152 |  | 2 | 1 |

## music

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func0084 | untranspiled | 23 | > /**  * func084 — func084 効果音デフォルト音量設定  *  * (org原典: newDTW_audio)  * // @or... | 0 | 2 |
| func0096 | untranspiled | 29 | > /**  * func096 — func096 効果音設定?  *  * (org原典: newDTW_audio)  * // @org-inje... | 0 | 1 |
| func0099 | transpiled | 19 | > /**  * func099 — func099 SE(ID142)選曲  *  * (org原典: newDTW_audio)  * // @org... | 0 | 30 |
| func0112 | untranspiled | 22 | > /**  * func112 — func112 不明  *  * (org原典: newDTW_audio)  * // @org-injected... | 0 | 2 |
| func0114 | untranspiled | 24 | > /**  * func114 — func114 亀の中の選曲(BGM "20th Century Boy")  *  * (org原典: newDT... | 0 | 1 |
| func0117 | untranspiled | 22 | > /**  * func117 — func117 BGM(ID982)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 2 |
| func0131 | untranspiled | 22 | > /**  * func131 — func131 BGM(ID985)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 1 |
| func0132 | untranspiled | 22 | > /**  * func132 — func132 BGM(ID984)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 1 |
| func081 | untranspiled | 832 | > /**  * func081 — 関数宣言  *  * (org原典: newDTW_list_SE)  * // @org-injected  */ | 0 | 0 |
| func082 | untranspiled | 441 | > /**  * func082 — func082 効果音呼び出し関数2  *  * (org原典: newDTW_list_SE)  * // @or... | 0 | 0 |
| func083 | untranspiled | 21 | > /**  * func083 — func083 効果音上限設定処理 (最大値:137)  *  * (org原典: newDTW_audio)  *... | 0 | 0 |
| func084 | untranspiled | 23 | > /**  * func084 — func084 効果音デフォルト音量設定  *  * (org原典: newDTW_audio)  * // @or... | 0 | 3 |
| func085 | untranspiled | 30 | > /**  * func085 — func085 効果音下限設定処理  *  * (org原典: newDTW_audio)  * // @org-i... | 0 | 0 |
| func086 | untranspiled | 30 | > /**  * func086 — func086 BGM上限設定処理 (最大値:150)  *  * (org原典: newDTW_audio)  *... | 0 | 0 |
| func087 | untranspiled | 26 | > /**  * func087 — func087 BGMデフォルト音量設定  *  * (org原典: newDTW_audio)  * // @or... | 0 | 0 |
| func088 | untranspiled | 26 | > /**  * func088 — func088 BGM下限設定処理  *  * (org原典: newDTW_audio)  * // @org-i... | 0 | 0 |
| func089 | untranspiled | 66 | > /**  * func089 — func089 各装備discごとの攻撃音設定  *  * (org原典: newDTW_audio)  * // ... | 0 | 0 |
| func090 | untranspiled | 18 | > /**  * func090 — func090 SE(ID141)選曲  *  * (org原典: newDTW_audio)  * // @org... | 0 | 0 |
| func091 | untranspiled | 19 | > /**  * func091 — func091 SE(ID103)選曲  *  * (org原典: newDTW_audio)  * // @org... | 0 | 0 |
| func092 | untranspiled | 20 | > /**  * func092 — func092 SE(ID103)選曲  *  * (org原典: newDTW_audio)  * // @org... | 0 | 0 |
| func093 | untranspiled | 47 | > /**  * func093 — func093 効果音設定?  *  * (org原典: newDTW_audio)  * // @org-inje... | 0 | 0 |
| func094 | untranspiled | 19 | > /**  * func094 — func094 メッセージ送りの際の効果音  *  * (org原典: newDTW_audio)  * // @o... | 0 | 0 |
| func095 | untranspiled | 41 | > /**  * func095 — func095 敵の攻撃時効果音設定  *  * (org原典: newDTW_audio)  * // @org-... | 0 | 0 |
| func096 | untranspiled | 29 | > /**  * func096 — func096 効果音設定?  *  * (org原典: newDTW_audio)  * // @org-inje... | 0 | 0 |
| func097 | untranspiled | 38 | > /**  * func097 — func097 射撃攻撃時の効果音設定  *  * (org原典: newDTW_audio)  * // @org... | 0 | 0 |
| func098 | untranspiled | 19 | > /**  * func098 — func098 SE(ID103)選曲  *  * (org原典: newDTW_audio)  * // @org... | 0 | 0 |
| func099 | untranspiled | 19 | > /**  * func099 — func099 SE(ID142)選曲  *  * (org原典: newDTW_audio)  * // @org... | 0 | 15 |
| func100 | untranspiled | 41 | > /**  * func100 — func100 効果音設定?  *  * (org原典: newDTW_audio)  * // @org-inje... | 0 | 0 |
| func101 | untranspiled | 495 |  | 0 | 0 |
| func102 | untranspiled | 56 | > /**  * func102 — func102 各ボリューム調整キーを押した時の表示  *  * (org原典: newDTW_audio)  * ... | 1 | 0 |
| func103 | untranspiled | 32 | > /**  * func103 — func103 ダンジョン内のテーマソング "0.mp3" 設定  *  * (org原典: newDTW_audi... | 0 | 0 |
| func104 | untranspiled | 25 | > /**  * func104 — func104 BGM用mp3ファイル再生  *  * (org原典: newDTW_audio)  * // @o... | 0 | 0 |
| func105 | untranspiled | 30 | > /**  * func105 — func105 discを装備した際のBGM選曲  *  * (org原典: newDTW_audio)  * //... | 0 | 0 |
| func106 | untranspiled | 44 | > /**  * func106 — func106 BGM選曲呼び出し割り振り  *  * (org原典: newDTW_audio)  * // @o... | 0 | 1 |
| func107 | untranspiled | 21 | > /**  * func107 — func107 不明  *  * (org原典: newDTW_audio)  * // @org-injected... | 0 | 0 |
| func108 | untranspiled | 18 | > /**  * func108 — func108 BGM用mp3ファイル再生停止  *  * (org原典: newDTW_audio)  * // ... | 0 | 0 |
| func109 | untranspiled | 29 | > /**  * func109 — func109 タイトル画面でのオープニング曲再生  *  * (org原典: newDTW_audio)  * /... | 0 | 0 |
| func110 | untranspiled | 27 | > /**  * func110 — func110 不明  *  * (org原典: newDTW_audio)  * // @org-injected... | 0 | 0 |
| func111 | untranspiled | 24 | > /**  * func111 — func111 不明  *  * (org原典: newDTW_audio)  * // @org-injected... | 0 | 0 |
| func112 | untranspiled | 22 | > /**  * func112 — func112 不明  *  * (org原典: newDTW_audio)  * // @org-injected... | 0 | 0 |
| func113 | untranspiled | 24 | > /**  * func113 — func113 ヴェネチアホテルのBGMを選曲  *  * (org原典: newDTW_audio / DONE)... | 0 | 0 |
| func114 | untranspiled | 24 | > /**  * func114 — func114 亀の中の選曲(BGM "20th Century Boy")  *  * (org原典: newDT... | 0 | 0 |
| func114b | untranspiled | 24 | > /**  * func114b — func114b 酒場の選曲(BGM "")  *  * (org原典: newDTW_audio / DONE)... | 0 | 0 |
| func115 | untranspiled | 30 | > /**  * func115 — func115 不明  *  * (org原典: newDTW_audio)  * // @org-injected... | 0 | 0 |
| func116 | untranspiled | 22 | > /**  * func116 — func116 BGM(ID990)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 0 |
| func117 | untranspiled | 22 | > /**  * func117 — func117 BGM(ID982)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 1 |
| func118 | untranspiled | 22 | > /**  * func118 — func118 BGM(ID986)選曲(エンヤホテル)  *  * (org原典: newDTW_audio)  ... | 0 | 0 |
| func119 | untranspiled | 22 | > /**  * func119 — func119 BGM(ID998)選曲(虹村屋敷)  *  * (org原典: newDTW_audio)  * ... | 0 | 0 |
| func120 | untranspiled | 22 | > /**  * func120 — func120 BGM(ID978)選曲(吉良屋敷)  *  * (org原典: newDTW_audio)  * ... | 0 | 0 |
| func121 | untranspiled | 22 | > /**  * func121 — func121 BGM(ID977)選曲(杜王町埠頭)  *  * (org原典: newDTW_audio)  *... | 0 | 0 |
| func122 | untranspiled | 22 | > /**  * func122 — func122 BGM(ID999)選曲(GERの発動で帰還する際のBGM)  *  * (org原典: newDT... | 0 | 0 |
| func123 | untranspiled | 22 | > /**  * func123 — func123 BGM(ID997)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 0 |
| func124 | untranspiled | 27 | > /**  * func124 — func124 BGM(ID994)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 0 |
| func125 | untranspiled | 27 | > /**  * func125 — func125 BGM(ID993)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 0 |
| func126 | untranspiled | 27 | > /**  * func126 — func126 BGM(ID991)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 0 |
| func127 | untranspiled | 27 | > /**  * func127 — func127 BGM(ID992)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 0 |
| func128 | untranspiled | 27 | > /**  * func128 — func128 BGM(ID983)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 0 |
| func129 | untranspiled | 22 | > /**  * func129 — func129 BGM(ID996)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 0 |
| func130 | untranspiled | 22 | > /**  * func130 — func130 BGM(ID998)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 0 |
| func131 | untranspiled | 22 | > /**  * func131 — func131 BGM(ID985)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 0 |
| func132 | untranspiled | 22 | > /**  * func132 — func132 BGM(ID984)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 0 |
| func133 | untranspiled | 22 | > /**  * func133 — func133 BGM(ID981)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 0 |
| func134 | untranspiled | 22 | > /**  * func134 — func134 BGM(ID980)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 0 |
| func135 | untranspiled | 21 | > /**  * func135 — func135 BGM(ID980)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 0 |
| func136 | untranspiled | 25 | > /**  * func136 — func136 BGM(ID987)選曲  *  * (org原典: newDTW_audio)  * // @or... | 0 | 0 |
| func137 | untranspiled | 42 | > /**  * func137 — func137 不明(BGM選曲フラグ処理?)  *  * (org原典: newDTW_audio)  * // ... | 0 | 0 |
| preloadAllSoundEffects | support | 163 |  | 0 | 0 |

## npc

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func725 | untranspiled | 42 | > /**  * func725 — func725 サーフェス関係??  *  * (org原典: newDTW_func7)  * // @org-i... | 3 | 1 |
| func726 | untranspiled | 50 | > /**  * func726 — func726 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 3 | 1 |
| func727 | untranspiled | 30 | > /**  * func727 — func727 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 3 | 1 |
| func728 | untranspiled | 42 | > /**  * func728 — func728 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 3 | 1 |
| func729 | untranspiled | 28 | > /**  * func729 — func729 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 1 | 5 |
| func730 | untranspiled | 36 | > /**  * func730 — func730 ダンジョンをうろついているスピードワゴンに話しかけた際のメッセージ処理  *  * (org原典: ... | 4 | 1 |
| func731 | untranspiled | 29 | > /**  * func731 — func731 スピードワゴンが仲間になったときのメッセージ処理  *  * (org原典: newDTW_func... | 3 | 1 |
| func732 | untranspiled | 23 | > /**  * func732 — func732 仲間になるのを拒んだときのスピードワゴンの処理  *  * (org原典: newDTW_func7... | 3 | 2 |
| func733 | untranspiled | 86 | > /**  * func733 — func733 仲間になったスピードワゴンに話しかけたときのメッセージ処理  *  * (org原典: newDTW... | 7 | 1 |
| func734 | untranspiled | 26 | > /**  * func734 — func734 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 5 | 1 |
| func735 | untranspiled | 26 | > /**  * func735 — func735 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 5 | 1 |
| func736 | untranspiled | 28 | > /**  * func736 — func736 岸辺露伴に話しかけた時の初期化処理  *  * (org原典: newDTW_func7)  * /... | 2 | 1 |
| func737 | untranspiled | 38 | > /**  * func737 — func737 岸辺露伴に話しかけた時の選択処理？  *  * (org原典: newDTW_func7)  * /... | 4 | 2 |
| func738 | untranspiled | 37 | > /**  * func738 — func738 ダンジョンをうろついているイギーに話しかけた際のメッセージ処理  *  * (org原典: newD... | 4 | 1 |
| func739 | untranspiled | 29 | > /**  * func739 — func739 イギーを仲間にした時のメッセージ処理  *  * (org原典: newDTW_func7)  * ... | 3 | 3 |
| func740 | untranspiled | 23 | > /**  * func740 — func740 イギー関係  *  * (org原典: newDTW_func7)  * // @org-injec... | 3 | 3 |
| func741 | untranspiled | 99 | > /**  * func741 — func741 イギー関係(砂DIOを仕込む)  *  * (org原典: newDTW_func7)  * // ... | 8 | 2 |
| func742 | untranspiled | 31 | > /**  * func742 — func742 イギー関係(砂DIOを仕込ませた)  *  * (org原典: newDTW_func7)  * /... | 4 | 1 |
| func743 | untranspiled | 38 | > /**  * func743 — func743 ツェッペリ男爵関係  *  * (org原典: newDTW_func7)  * // @org-i... | 4 | 1 |
| func744 | untranspiled | 29 | > /**  * func744 — func744 ツェッペリ男爵関係  *  * (org原典: newDTW_func7)  * // @org-i... | 3 | 1 |
| func745 | untranspiled | 23 | > /**  * func745 — func745 ツェッペリ男爵関係  *  * (org原典: newDTW_func7)  * // @org-i... | 3 | 7 |
| func746 | untranspiled | 109 | > /**  * func746 — func746 ツェッペリ男爵関係  *  * (org原典: newDTW_func7)  * // @org-i... | 8 | 1 |
| func747 | untranspiled | 54 | > /**  * func747 — func747 ツェッペリ男爵関係  *  * (org原典: newDTW_func7)  * // @org-i... | 4 | 1 |
| func748 | untranspiled | 42 | > /**  * func748 — func748 ペッシ関係  *  * (org原典: newDTW_func7)  * // @org-injec... | 5 | 1 |
| func749 | untranspiled | 34 | > /**  * func749 — func749 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 3 | 1 |
| func750 | untranspiled | 40 | > /**  * func750 — func750 ペッシ関係  *  * (org原典: newDTW_func7)  * // @org-injec... | 3 | 1 |
| func751 | untranspiled | 23 | > /**  * func751 — func751 ペッシ関係  *  * (org原典: newDTW_func7)  * // @org-injec... | 2 | 1 |
| func752 | untranspiled | 102 | > /**  * func752 — func752 ペッシ関係  *  * (org原典: newDTW_func7)  * // @org-injec... | 9 | 1 |
| func753 | untranspiled | 108 | > /**  * func753 — func753 ペッシ関係  *  * (org原典: newDTW_func7)  * // @org-injec... | 9 | 1 |
| func754 | untranspiled | 328 | > /**  * func754 — func754 ペッシ関係  *  * (org原典: newDTW_func7)  * // @org-injec... | 5 | 1 |
| func755 | untranspiled | 55 | > /**  * func755 — func755 SPW 財団の男関係  *  * (org原典: newDTW_func7)  * // @org-... | 7 | 1 |
| func756 | untranspiled | 33 | > /**  * func756 — func756 幽霊のポルナレフ関係  *  * (org原典: newDTW_func7)  * // @org-... | 3 | 1 |
| func757 | untranspiled | 29 | > /**  * func757 — func757 キャラに話しかけた時のメッセージ(コメントなし)  *  * (org原典: newDTW_func... | 3 | 1 |
| func758 | untranspiled | 45 | > /**  * func758 — func758 ボインゴに話しかけた時のメッセージ処理  *  * (org原典: newDTW_func7)  *... | 7 | 1 |
| func759 | untranspiled | 65 | > /**  * func759 — func759 ヨーヨーマッ関係  *  * (org原典: newDTW_func7)  * // @org-in... | 3 | 1 |
| func769 | untranspiled | 35 | > /**  * func769 — func769 サヴェジガーデン作戦の鳩へ話しかけた時の動作処理  *  * (org原典: newDTW_func... | 3 | 1 |
| func770 | untranspiled | 27 | > /**  * func770 — func770 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 2 | 1 |
| func771 | untranspiled | 54 | > /**  * func771 — func771 ムーディーブルース以外でアイテムを送る手段(サウェッジガーデン？アバッキオ？)  *  * (org... | 9 | 1 |
| func772 | untranspiled | 243 | > /**  * func772 — func772 ムーディーブルース以外でアイテムを送る手段(サウェッジガーデン？アバッキオ？)  *  * (org... | 9 | 2 |
| func773 | untranspiled | 55 | > /**  * func773 — func773 鮮血のシャボンへ話しかけた時のメッセージ処理  *  * (org原典: newDTW_func7)... | 6 | 1 |
| func774 | untranspiled | 27 | > /**  * func774 — func774 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 2 | 2 |
| func775 | untranspiled | 65 | > /**  * func775 — func775 ムーディーブルース以外でアイテムを送る手段(サウェッジガーデン？)  *  * (org原典: ne... | 8 | 1 |
| func776 | untranspiled | 95 | > /**  * func776 — func776 ヤバいものへアイテムを入れた時の動作処理  *  * (org原典: newDTW_func7)  ... | 7 | 2 |
| func777 | untranspiled | 107 | > /**  * func777 — func777 ヤバいものからアイテムを取り出す時の動作処理  *  * (org原典: newDTW_func7)... | 5 | 1 |
| func787 | untranspiled | 37 | > /**  * func787 — func787 アバッキオ関係  *  * (org原典: newDTW_func7)  * // @org-inj... | 3 | 1 |
| func788 | untranspiled | 63 | > /**  * func788 — func788 アバッキオ関係  *  * (org原典: newDTW_func7)  * // @org-inj... | 3 | 1 |
| func789 | untranspiled | 30 | > /**  * func789 — func789 アバッキオ関係  *  * (org原典: newDTW_func7)  * // @org-inj... | 3 | 1 |
| func790 | untranspiled | 30 | > /**  * func790 — func790 アバッキオ関係  *  * (org原典: newDTW_func7)  * // @org-inj... | 3 | 1 |
| func791 | untranspiled | 45 | > /**  * func791 — func791 アバッキオ関係  *  * (org原典: newDTW_func7)  * // @org-inj... | 4 | 1 |
| func792 | untranspiled | 28 | > /**  * func792 — func792 アバッキオ関係  *  * (org原典: newDTW_func7)  * // @org-inj... | 3 | 1 |
| func793 | untranspiled | 69 | > /**  * func793 — func793 間田へ話しかけた時のメッセージ処理  *  * (org原典: newDTW_func7)  * /... | 3 | 1 |
| func794 | untranspiled | 30 | > /**  * func794 — func794 ヤク中の少年関係  *  * (org原典: newDTW_func7)  * // @org-in... | 3 | 1 |
| func795 | untranspiled | 34 | > /**  * func795 — func795 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 3 | 1 |

## root

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| getAvailableLanguages | support | 161 | > /**  * i18n — Internationalization module for newDTW  *  * Uses Japanese te... | 0 | 0 |
| getLanguage | support | 161 | > /**  * i18n — Internationalization module for newDTW  *  * Uses Japanese te... | 0 | 3 |
| initI18n | support | 161 | > /**  * i18n — Internationalization module for newDTW  *  * Uses Japanese te... | 1 | 0 |
| installAutoTranslate | support | 161 | > /**  * i18n — Internationalization module for newDTW  *  * Uses Japanese te... | 1 | 0 |
| isReady | support | 161 | > /**  * i18n — Internationalization module for newDTW  *  * Uses Japanese te... | 0 | 0 |
| loadLanguage | support | 161 | > /**  * i18n — Internationalization module for newDTW  *  * Uses Japanese te... | 0 | 1 |
| parse | support | 24 | > // Ambient types for the external sumi GUI library (sumi-canvas), which is ... | 0 | 0 |
| setLanguage | support | 161 | > /**  * i18n — Internationalization module for newDTW  *  * Uses Japanese te... | 0 | 0 |
| t | support | 161 | > /**  * i18n — Internationalization module for newDTW  *  * Uses Japanese te... | 0 | 12 |
| tf | support | 161 | > /**  * i18n — Internationalization module for newDTW  *  * Uses Japanese te... | 1 | 151 |

## shop

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func706 | untranspiled | 69 | > /**  * func706 — func706 トニオさんの店 レストラン・トラサルディーへ入店した時のメッセージ表示  *  * (org原典: ... | 2 | 4 |
| func707 | untranspiled | 163 | > /**  * func707 — func707 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 6 | 1 |
| func708 | untranspiled | 25 | > /**  * func708 — func708 トニオさんに話しかけて、アイテムを売る際のメッセージ処理  *  * (org原典: newDTW_... | 4 | 1 |
| func709 | untranspiled | 24 | > /**  * func709 — func709 トニオさんに話しかけてアイテムを購入する際のメッセージ処理  *  * (org原典: newDTW... | 4 | 3 |
| func710 | untranspiled | 21 | > /**  * func710 — func710 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 1 | 1 |
| func711 | untranspiled | 50 | > /**  * func711 — func711 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 6 | 2 |
| func712 | untranspiled | 21 | > /**  * func712 — func712 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 1 | 1 |
| func713 | untranspiled | 66 | > /**  * func713 — func713 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 8 | 5 |
| func714 | untranspiled | 52 | > /**  * func714 — func714 店での購入時のメッセージ表示  *  * (org原典: newDTW_func7)  * // @... | 0 | 1 |
| func715 | untranspiled | 49 | > /**  * func715 — func715 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 1 | 1 |
| func716 | untranspiled | 31 | > /**  * func716 — func716 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 3 | 1 |
| func717 | untranspiled | 23 | > /**  * func717 — func717 不明  *  * (org原典: newDTW_func7)  * // @org-injected... | 1 | 2 |
| func718 | untranspiled | 28 | > /**  * func718 — func718 トニオさんの店を出る際のメッセージ処理  *  * (org原典: newDTW_func7)  *... | 4 | 2 |
| func719 | untranspiled | 24 | > /**  * func719 — func719 トニオさんの店で購入する際に、所持金が足らない時のメッセージ処理  *  * (org原典: new... | 3 | 3 |
| func722 | untranspiled | 60 | > /**  * func722 — func722 アイテムを所持した状態で店から出た際の動作処理(泥棒状態認定)  *  * (org原典: newD... | 4 | 6 |

## stand

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func0524 | transpiled | 126 | > /**  * func524 — func524 セックスピストルズの発動能力  *  * (org原典: newDTW_func5 / DONE) ... | 10 | 4 |
| func0526 | untranspiled | 61 | > /**  * func526 — func526 ボーイⅡマンの発動能力2  *  * (org原典: newDTW_func5 / DONE)  *... | 6 | 2 |
| func0534 | untranspiled | 205 | > /**  * func534 — func534 ハイウェイ・トゥ・ヘルの発動処理(移動中の自動発動)  *  * (org原典: newDTW_fu... | 5 | 2 |
| func524 | untranspiled | 126 | > /**  * func524 — func524 セックスピストルズの発動能力  *  * (org原典: newDTW_func5 / DONE) ... | 10 | 4 |
| func526 | untranspiled | 61 | > /**  * func526 — func526 ボーイⅡマンの発動能力2  *  * (org原典: newDTW_func5 / DONE)  *... | 6 | 2 |
| func532 | untranspiled | 56 | > /**  * func532 — func532 GER 発動動作処理  *  * (org原典: newDTW_func5 / DONE)  * /... | 5 | 0 |
| func533 | untranspiled | 290 | > /**  * func533 — func533 ムーディーブルースの発動によってアイテムを倉庫に送る動作処理  *  * (org原典: newDT... | 16 | 0 |
| func534 | untranspiled | 205 | > /**  * func534 — func534 ハイウェイ・トゥ・ヘルの発動処理(移動中の自動発動)  *  * (org原典: newDTW_fu... | 5 | 1 |
| func646 | untranspiled | 67 | > /**  * func646 — func646 不明  *  * (org原典: newDTW_func6)  * // @org-injected... | 7 | 0 |
| func650 | untranspiled | 170 | > /**  * func650 — func650 射撃セックスピストルズの攻撃動作処理  *  * (org原典: newDTW_func6)  * ... | 3 | 0 |
| func675 | untranspiled | 199 | > /**  * func675 — func675 スタンド バイツァ・ダスト 発動処理  *  * (org原典: newDTW_func6)  * ... | 10 | 0 |
| item100 | untranspiled | 39 | > /**  * item100 — No = 100 スタープラチナの発動能力  *  * 各スタンドの発動能力設定。  *  * (org原典: ne... | 6 | 0 |
| item101 | untranspiled | 122 | > /**  * item101 — No = 101 シルバーチャリオッツの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典:... | 9 | 0 |
| item102 | untranspiled | 58 | > /**  * item102 — No = 102 キングクリムゾンの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: n... | 6 | 0 |
| item103 | untranspiled | 104 | > /**  * item103 — No = 103 エコーズAct3の発動能力  *  * 各スタンドの発動能力設定。  *  * (org原典: n... | 5 | 0 |
| item104 | untranspiled | 238 | > /**  * item104 — No = 104 ザ・ハンドの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: newD... | 6 | 0 |
| item105 | untranspiled | 243 | > /**  * item105 — No = 105 チリペッパーの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: new... | 6 | 0 |
| item106 | untranspiled | 46 | > /**  * item106 — No = 106 クレイジーDの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: new... | 4 | 0 |
| item107 | untranspiled | 163 | > /**  * item107 — No = 107 デス13の発動能力  *  * 各スタンドの発動能力設定。  *  * (org原典: newDT... | 7 | 0 |
| item108 | untranspiled | 92 | > /**  * item108 — No = 108 スティッキー・フィンガーズの発動処理  *  * 各スタンドの発動能力設定。  *  * (org... | 7 | 0 |
| item109 | untranspiled | 133 | > /**  * item109 — No = 109 マジシャンズレッドの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ... | 10 | 0 |
| item110 | untranspiled | 17 | > /**  * item110 — No = 110 B･D･ザ･ハウスのDISCの発動の処理  *  * 各スタンドの発動能力設定。  *  * (o... | 0 | 0 |
| item111 | untranspiled | 44 | > /**  * item111 — No = 111 ザ・ワールドの発動能力  *  * 各スタンドの発動能力設定。  *  * (org原典: new... | 6 | 0 |
| item112 | untranspiled | 98 | > /**  * item112 — No = 112 キラークイーン(No = 394 キラータイガークイーン)の発動処理  *  * 各スタンドの発動... | 8 | 0 |
| item113 | untranspiled | 89 | > /**  * item113 — No = 113 クラッシュの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: newD... | 6 | 0 |
| item114 | untranspiled | 121 | > /**  * item114 — No = 114 ホワイトスネイクの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: n... | 7 | 0 |
| item115 | untranspiled | 68 | > /**  * item115 — No = 115 Gエクスペリエンスの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ... | 6 | 0 |
| item116 | untranspiled | 86 | > /**  * item116 — No = 116 ハーミットパープルの発動能力  *  * 各スタンドの発動能力設定。  *  * (org原典: ... | 7 | 0 |
| item117 | untranspiled | 228 | > /**  * item117 — No = 117 ダークブルームーンの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ... | 9 | 0 |
| item118 | untranspiled | 164 | > /**  * item118 — No = 118 ダイバーダウンの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ne... | 6 | 0 |
| item119 | untranspiled | 31 | > /**  * item119 — No = 119 スパイス・ガールの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: n... | 5 | 0 |
| item120 | untranspiled | 44 | > /**  * item120 — No = 120 ストーンフリーの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ne... | 6 | 0 |
| item121 | untranspiled | 195 | > /**  * item121 — No = 121 パープルヘイズの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ne... | 7 | 0 |
| item122 | untranspiled | 35 | > /**  * item122 — No = 122 アヌビス神の発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: newD... | 5 | 0 |
| item123 | untranspiled | 165 | > /**  * item123 — No = 123 クリームの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: newDT... | 10 | 0 |
| item124 | untranspiled | 171 | > /**  * item124 — No = 124 ムーディー・ブルースの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典:... | 6 | 0 |
| item200 | untranspiled | 43 | > /**  * item200 — No = 200 スーパーフライの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ne... | 6 | 0 |
| item201 | untranspiled | 52 | > /**  * item201 — No = 201 イエローテンパランスの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典:... | 6 | 0 |
| item202 | untranspiled | 167 | > /**  * item202 — No = 202 ホワイトアルバムの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: n... | 5 | 0 |
| item203 | untranspiled | 149 | > /**  * item203 — No = 203 ザ・フールの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: newD... | 8 | 0 |
| item204 | untranspiled | 199 | > /**  * item204 — No = 204 シアハートアタックの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ... | 9 | 0 |
| item205 | untranspiled | 151 | > /**  * item205 — No = 205 クラフトワークの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ne... | 5 | 0 |
| item206 | untranspiled | 131 | > /**  * item206 — No = 206 オアシスの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: newDT... | 6 | 0 |
| item207 | untranspiled | 174 | > /**  * item207 — No = 207 グレイトフル・デッドの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典:... | 7 | 0 |
| item208 | untranspiled | 19 | > /**  * item208 — No = 208 C-MOONの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: new... | 0 | 0 |
| item250 | untranspiled | 19 | > /**  * item250 — No = 250 オー!ロンサム・ミーの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典:... | 0 | 0 |
| item251 | untranspiled | 19 | > /**  * item251 — No = 251 シビル・ウォーの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ne... | 0 | 0 |
| item252 | untranspiled | 19 | > /**  * item252 — No = 252 クリーム・スターターの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典:... | 0 | 0 |
| item253 | untranspiled | 19 | > /**  * item253 — No = 253 スケアリー・モンスターズの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原... | 0 | 0 |
| item254 | untranspiled | 19 | > /**  * item254 — No = 254 C・ザ・レインボーの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ... | 0 | 0 |
| item255 | untranspiled | 19 | > /**  * item255 — No = 255 イン・ア・サイレント・ウェイの発動処理  *  * 各スタンドの発動能力設定。  *  * (or... | 0 | 0 |
| item256 | untranspiled | 19 | > /**  * item256 — No = 256 チョコレイト・ディスコの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典... | 0 | 0 |
| item257 | untranspiled | 19 | > /**  * item257 — No = 257 T・O・T・B ワンの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典:... | 0 | 0 |
| item258 | untranspiled | 19 | > /**  * item258 — No = 258 ボールブレイカー&スキャンの発動処理  *  * 各スタンドの発動能力設定。  *  * (org... | 0 | 0 |
| item259 | untranspiled | 19 | > /**  * item259 — No = 259 TATOO YOU!の発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典:... | 0 | 0 |
| item260 | untranspiled | 19 | > /**  * item260 — No = 260 20th Century Boyの発動処理  *  * 各スタンドの発動能力設定。  *  * (... | 0 | 0 |
| item261 | untranspiled | 19 | > /**  * item261 — No = 261 タスクact4の発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ne... | 0 | 0 |
| item262 | untranspiled | 19 | > /**  * item262 — No = 262 D4Cラブトレインの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ... | 0 | 0 |
| item300 | untranspiled | 57 | > /**  * item300 — No = 300 パール・ジャムの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ne... | 6 | 0 |
| item301 | untranspiled | 141 | > /**  * item301 — No = 301 ハーヴェストの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: new... | 8 | 0 |
| item302 | untranspiled | 218 | > /**  * item302 — No = 302 ハイウェイ・トゥ・ヘルの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典... | 8 | 0 |
| item303 | untranspiled | 40 | > /**  * item303 — No = 303 ドラゴンズ・ドリームの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典:... | 6 | 0 |
| item304 | untranspiled | 272 | > /**  * item304 — No = 304 ウェザーリポートの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: n... | 10 | 0 |
| item305 | untranspiled | 32 | > /**  * item305 — No = 305 シンデレラの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: newD... | 5 | 0 |
| item306 | untranspiled | 57 | > /**  * item306 — No = 306 マンハッタン・トランスファーの発動処理  *  * 各スタンドの発動能力設定。  *  * (or... | 7 | 0 |
| item307 | untranspiled | 93 | > /**  * item307 — No = 307 不明disc(オシリス神?) の発動処理  *  * 各スタンドの発動能力設定。  *  * (o... | 5 | 0 |
| item308 | untranspiled | 95 | > /**  * item308 — No = 308 エボニーデビルの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ne... | 8 | 0 |
| item309 | untranspiled | 47 | > /**  * item309 — No = 309 ソフト・マシーンの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: n... | 6 | 0 |
| item310 | untranspiled | 43 | > /**  * item310 — No = 310 エンプレスの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: newD... | 7 | 0 |
| item311 | untranspiled | 83 | > /**  * item311 — No = 311 チープトリックの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ne... | 7 | 0 |
| item312 | untranspiled | 74 | > /**  * item312 — No = 312 エアロスミスの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: new... | 6 | 0 |
| item313 | untranspiled | 228 | > /**  * item313 — No = 313 ハイウェイスターの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: n... | 9 | 0 |
| item314 | untranspiled | 32 | > /**  * item314 — No = 314 ストレイキャットの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: n... | 5 | 0 |
| item315 | untranspiled | 51 | > /**  * item315 — No = 315 エピタフの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: newDT... | 7 | 0 |
| item316 | untranspiled | 146 | > /**  * item316 — No = 316 サバイバーの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: newD... | 6 | 0 |
| item317 | untranspiled | 46 | > /**  * item317 — No = 317 キッスの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: newDTW... | 6 | 0 |
| item318 | untranspiled | 195 | > /**  * item318 — No = 318 ジャンピングJフラッシュの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原... | 7 | 0 |
| item319 | untranspiled | 40 | > /**  * item319 — No = 319 ボーイⅡマンの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: new... | 4 | 0 |
| item320 | untranspiled | 30 | > /**  * item320 — No = 320 メタリカの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: newDT... | 5 | 0 |
| item393 | untranspiled | 143 | > /**  * item393 — No = 393 ボヘミアンラプソディの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典:... | 10 | 0 |
| item395 | untranspiled | 168 | > /**  * item395 — No = 395 バイツァ・ダストの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: n... | 6 | 0 |
| item396 | untranspiled | 37 | > /**  * item396 — No = 396 メイド・イン・ヘブンの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典:... | 5 | 0 |
| item397 | untranspiled | 39 | > /**  * item397 — No = 397 ヘビー・ウェザーの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: n... | 6 | 0 |
| item398 | untranspiled | 44 | > /**  * item398 — No = 398 スタプラ・ザワールドの発動能力  *  * 各スタンドの発動能力設定。  *  * (org原典:... | 6 | 0 |
| item399 | untranspiled | 82 | > /**  * item399 — No = 399 Gエクスペリエンスレクイエムの発動処理  *  * 各スタンドの発動能力設定。  *  * (or... | 5 | 0 |
| item400 | untranspiled | 47 | > /**  * item400 — No = 400 ハイエロファントグリーンの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原... | 6 | 0 |
| item401 | untranspiled | 56 | > /**  * item401 — No = 401 フー・ファイターズの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ... | 5 | 2 |
| item402 | untranspiled | 26 | > /**  * item402 — No = 402 エンペラーの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: newD... | 4 | 0 |
| item403 | untranspiled | 39 | > /**  * item403 — No = 403 セックス・ピストルズの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典:... | 3 | 0 |
| item404 | untranspiled | 46 | > /**  * item404 — No = 404 ホルス神の発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: newDT... | 6 | 0 |
| item405 | untranspiled | 46 | > /**  * item405 — No = 405 エコーズAct2の発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: n... | 6 | 0 |
| item406 | untranspiled | 46 | > /**  * item406 — No = 406 エコーズAct1の発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: n... | 6 | 0 |
| item407 | untranspiled | 164 | > /**  * item407 — No = 407 ハイエロファントエメラルドの発動処理  *  * 各スタンドの発動能力設定。  *  * (org... | 6 | 0 |
| item408 | untranspiled | 47 | > /**  * item408 — No = 408 マン・イン・ザ・ミラーの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典... | 6 | 0 |
| item409 | untranspiled | 47 | > /**  * item409 — No = 409 ラバーズの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: newDT... | 6 | 0 |
| item410 | untranspiled | 47 | > /**  * item410 — No = 410 不明disc(没ハイウェイスター。かつては射撃discだった?)の発動処理  *  * 各スタンド... | 6 | 0 |
| item411 | untranspiled | 92 | > /**  * item411 — No = 411 タワー・オブ・グレーの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典:... | 8 | 0 |
| item412 | untranspiled | 126 | > /**  * item412 — No = 412 ヘブンズドアーの発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ne... | 6 | 0 |
| item413 | untranspiled | 48 | > /**  * item413 — No = 413 不明disc(没discサーフィス?) の発動処理  *  * 各スタンドの発動能力設定。  * ... | 7 | 0 |
| item414 | untranspiled | 63 | > /**  * item414 — No = 414 タスクact2の発動処理  *  * 各スタンドの発動能力設定。  *  * (org原典: ne... | 7 | 0 |
| item415 | untranspiled | 47 | > /**  * item415 — No = 415 タスクact1の発動処理  *  * Ver0.1401にて追加  *  * (org原典: ne... | 6 | 0 |

## title

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| func139A | untranspiled | 162 |  | 2 | 0 |
| func140 | untranspiled | 85 | > /**  * func140 — func140 不明  *  * (org原典: newDTW_login / DONE)  * // @org-i... | 10 | 6 |
| func141 | untranspiled | 56 | > /**  * func141 — func141 不明  *  * (org原典: newDTW_login / DONE)  * // @org-i... | 1 | 1 |
| func142 | untranspiled | 170 | > /**  * func142 — func142 タイトル画面キー操作処理  *  * (org原典: newDTW_login / DONE)  *... | 9 | 6 |
| func144 | untranspiled | 108 | > /**  * func144 — func144 ログイン画面(タイトル画面/ログイン)動作処理  *  * (org原典: newDTW_login... | 10 | 4 |
| func145 | untranspiled | 48 | > /**  * func145 — func145 不明  *  * (org原典: newDTW_login / DONE)  * // @org-i... | 10 | 2 |
| func146 | untranspiled | 119 | > /**  * func146 — func146 ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)  *  * (or... | 2 | 5 |
| func147 | untranspiled | 60 | > /**  * func147 — func147 不明  *  * (org原典: newDTW_login / DONE)  * // @org-i... | 6 | 1 |
| func148 | untranspiled | 172 | > /**  * func148 — func148 ボス日記選択画面(タイトル画面/ログイン画面/ボス日記選択画面)の表示  *  * (org原典: ... | 2 | 2 |
| func149 | untranspiled | 62 | > /**  * func149 — func149 ボス日記消去選択時の表示  *  * (org原典: newDTW_login / DONE)  *... | 1 | 1 |
| funcLoginLang | untranspiled | 122 | > /**  * funcLoginLang — ログイン画面「言語設定」サブメニュー  *  * func147 から var_64==4 で呼び出され... | 1 | 1 |

## util

| name | status | LOC | header | #callees | #callers |
| --- | --- | ---: | --- | ---: | ---: |
| updateBufferResolution | support | 27 | > // updateBufferResolution.ts (共通モジュール例) | 0 | 1 |

## 5. NO-HEADER

await_, bgscr, boxf, bsave, buffer, button, chdir, chgdisp, chkbox, clrobj
cls, color, color1, combox, data_update_for_debug, delete_, dialog, dirinfo, dirlist, DMINIT
DMPLAY, DMSTOP, DSGETMASTERVOLUME, DSLOADMEMORY, DSPLAY, DSSETMASTERVOLUME, DSSETVOLUME, end, exist, font
func0186, func0190, func021, func022, func023, func024, func025, func026, func027, func028
func029, func030, func031, func032, func033, func034, func035, func036, func037, func038
func039, func040, func041, func0411, func042, func043, func079, func0824, func0825, func0900
func0901, func0902, func0903, func0904, func0905, func0906, func0907, func0908, func0909, func0910
func0911, func0912, func0913, func0914, func0915, func0916, func0917, func0918, func0919, func0920
func0921, func0922, func0923, func0924, func0925, func0926, func0927, func0928, func0929, func0930
func0931, func0932, func0933, func0934, func0935, func0936, func0937, func0938, func0939, func0940
func0941, func0942, func0943, func0944, func0945, func0946, func0947, func0948, func0949, func0950
func0951, func0952, func0953, func0954, func0955, func0956, func0957, func0958, func0959, func0960
func0961, func0962, func0963, func0964, func0965, func0966, func0967, func0968, func0969, func0970
func0971, func0972, func0973, func0974, func0975, func0976, func0977, func0978, func0979, func0980
func0981, func0982, func0983, func0984, func0985, func0986, func0987, func0988, func0989, func0990
func0991, func0992, func0993, func0994, func0995, func0996, func0997, func0998, func0999, func1000
func1001, func1002, func1003, func1004, func1005, func1006, func1007, func1008, func1009, func101
func1010, func1011, func1012, func1013, func1014, func1015, func1016, func1017, func1018, func1019
func1020, func1021, func1022, func1023, func1024, func1025, func1026, func1027, func1028, func1029
func1030, func1031, func1032, func1033, func1034, func1035, func1036, func1037, func1038, func1039
func1040, func1041, func1042, func1043, func1044, func1045, func1046, func1047, func1048, func1049
func1050, func1051, func1052, func1053, func1054, func1055, func1056, func139A, func157, func164
func165, func166, func167, func168, func169, func170, func171, func172, func173, func174
func175, func176, func177, func178, func179, func180, func181, func182, func183, func184
func185, func186, func187, func188, func189, func190, func191, func192, func197, func198
func199, func324X, gcopy, getkey, getstr, ginfo, gmode, grotate, gsel, gzoom
HMMINIT, InitInput, input, instr, is_changed, line, listbox, mes, mkdir, noteadd
notedel, noteget, noteinfo, noteload, notesave, notesel, objinfo, objmode, objprm, objsel
objsize, oncmd_gosub, onexit, onexit_goto, onkey, palette, peek, picload, poke, pos
preloadAllSoundEffects, pset, randomize, redraw, reset_input, ResetKey, rnd, screen_, sendmsg, stick
strmid, title, width
