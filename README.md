# newDTW — Diavolo The Wanderer (Engine Study)

> An engine-level rebuild of a classic fan-made mystery dungeon roguelike
> originally created by KMQ SOFT. Maintained as a personal technical study
> and archive; **no binaries are distributed** (see *Project Status & Provenance*).

<a href="https://github.com/sponsors/zawatton"><img src="https://img.shields.io/badge/Sponsor_%E2%9D%A4_Support_this_project-pink?style=for-the-badge" alt="Sponsor"></a>

<p align="center">
  <img src="assets/screenshots/title.png" alt="Title screen — JOJO 20th Anniversary ディアボロの大冒険" width="340">
</p>

## What is this?

**Diavolo The Wanderer** (ディアボロの大冒険) is a mystery dungeon roguelike set in the JoJo's Bizarre Adventure universe. The original game, created by KMQ SOFT using HSP (Hot Soup Processor), became a cult classic in Japan before development ended in 2008.

**newDTW** is now a NeLisp runtime port:
- **Reference port &rarr; NeLisp runtime** — the tracked active game path is generated and executed by Emacs Lisp runtime files under `nelisp_runtime/`
- **Native live renderer** — `sumi-sprite-live.exe` receives frames from the pure-elisp direct-bin feeder
- **No web runtime** — the tracked project no longer carries browser shell, package manifest, web build config, or script-language game source
- **Engine source shared publicly** — game logic and tooling live in this repo; audio and other licence-restricted assets do not (see *Audio Assets & Distribution Policy*)

## Features

- Classic mystery dungeon gameplay with Stand abilities and items from JoJo Parts 1-6
- 1,050+ game functions fully ported from original HSP source
- 28,000+ sprite cells with per-pixel rendering via SpriteManager
- Map theme system for custom dungeon tilesets
- Backwards-compatible `gcopy` adapter — original rendering calls work alongside new sprite API

## Quick Start

### Run Locally (NeLisp)

```bash
git clone https://github.com/zawatton/newDTW.github.io.git
cd newDTW.github.io
emacs -Q --batch -l nelisp_runtime/build-play-bundle.el
emacs -Q --batch -l nelisp_runtime/start-live.el
```

**Requirements:** Emacs and the native `sumi-sprite-live.exe` renderer.

**Audio note:** `assets/bgm/` and `assets/se/` are not included in this repository (see *Audio Assets & Distribution Policy* below). The game runs silent without them; add your own locally-sourced files to re-enable sound during development.

### Development Workflow

For active development, use the elisp live launcher. It builds the play bundle,
starts the direct-bin feed loop, and drives the native renderer.

```bash
emacs -Q --batch -l nelisp_runtime/start-live.el
```

**Automated checks**:

```bash
emacs -Q --batch -l nelisp_runtime/run-elisp-port-gate.el
emacs -Q --batch -l nelisp_runtime/run-state-diff-smoke.el
emacs -Q --batch -l nelisp_runtime/run-tile-probe.el
emacs -Q --batch -l nelisp_runtime/run-live-attack-probe.el
emacs -Q --batch -l nelisp_runtime/run-live-probe.el
emacs -Q --batch -l nelisp_runtime/run-opening-probe.el
emacs -Q --batch -l nelisp_runtime/run-hotel-probe.el
emacs -Q --batch -l nelisp_runtime/start-live.el -- --skip-opening --duration 2
emacs -Q --batch -l nelisp_runtime/elisp-port-audit.el -- --report build/nelisp-port-audit.json
```

**Generated documentation:**

```bash
emacs -Q --batch -l nelisp_runtime/elisp-port-audit.el -- --report build/nelisp-port-audit.json
```

### Internationalization (i18n)

The tracked active runtime is elisp:

- Translation dictionaries live in `assets/lang/<code>.json` (currently `en.json`)
- Runtime text is emitted through the NeLisp frame pipeline.

## Project Structure

```
nelisp_runtime/
  game-runner.el                 State-diff runtime interpreter
  gamedata-conditional.el        Checked-in NeLisp native runtime source
  gamedata-simple.el             Generated simple state-diff functions
  build-play-bundle.el           Pure-elisp bundle builder
  start-live.el                  Native live launcher
  live-feed-loop.el              Pure-elisp direct-bin frame feeder
assets/
  sprites/          Individual sprite PNGs + manifest.json
  img/              Legacy sprite sheets
  lang/             i18n translation dictionaries (en.json, ...)
docs/               NeLisp development plan and audit notes
```

## Contributing

Contributions welcome — code, pixel art, translations, bug reports.

Join the development on Discord: DM **zawatton** to get started.

### Adding Content

Content changes should be represented in the NeLisp runtime data and
verified through the elisp audit and live renderer.

## Roadmap

- [x] **NeLisp live runtime** — build, run, test, and audit now use Emacs Lisp directly
- [ ] Custom version content (v0.14-0.16 features)
- [ ] Parts 7 & 8 characters and Stands
- [x] Internationalization scaffolding — Japanese / English (in-game language switcher)
- [ ] Translation dictionary expansion (effects messages, dialogs)
- [ ] Internationalization (Chinese, others)
- [ ] Original BGM to resolve copyright

## Project Status & Provenance

This repository is a **fork** of [github.com/newDTW/newDTW.github.io](https://github.com/newDTW/newDTW.github.io). This fork has since moved the tracked active runtime to NeLisp; the project as a whole still inherits several unresolved intellectual-property questions that potential users should understand before cloning:

- **Upstream licence is unspecified.** The upstream repository does not carry a `LICENSE` file. Under GitHub's Terms of Service, public repositories without a licence permit forking and viewing, but do not grant any redistribution or re-use rights beyond that. This fork therefore cannot, and does not, claim to be cleanly "open-source" in the formal sense.
- **Inherited subject matter.** The original game is a fan-derivative work referencing *JoJo's Bizarre Adventure* (© Hirohiko Araki / Shueisha) and uses music loosely inspired by real-world artists. None of those rights have been cleared.
- **Why this fork still exists.** The maintainer ( [zawatton](https://github.com/zawatton) ) played the original KMQ SOFT game as a child and considers the engine and gameplay a work worth preserving as a technical study. The fork is kept public so that the reference port and NeLisp runtime remain visible and auditable, not as a distribution channel for the game itself.

**Current policy (see the sections below for enforcement details):**

1. **No binary distribution.** GitHub Releases do not carry runnable builds.
2. **No redistribution of audio or other licence-restricted assets.** `assets/bgm/` and `assets/se/` are gitignored; only the license ledger README files are tracked.
3. **Runtime tolerates missing assets.** The engine keeps running silently when audio is absent, so the repository alone constitutes a complete engine study without needing to ship any licence-encumbered material.
4. **Eventual clean-room direction (aspirational).** Replace audio track-by-track with originally-authored / CC0 material and, if ever pursued for public release, rename JoJo-specific identifiers to create an independently-clearable derivative.

If you are the upstream maintainer or a rights holder and you would like changes to how this fork is presented or maintained, please open an issue on this repository or contact the maintainer directly.

---

## Credits

### Original Game
- **KMQ SOFT** (Clive, Munier, qra) — original *Diavolo The Wanderer* (v0.13)

### Upstream Reference Port
- [github.com/newDTW/newDTW.github.io](https://github.com/newDTW/newDTW.github.io) — the initial reference port that this repository forks from.

### Custom Versions
- Anonymous contributors — v0.14-0.16

### Open Source Version
- **zawatton** — reference rebuild, SpriteManager, tooling

### Pixel Art Contributors
Many anonymous artists contributed enemy sprites, Stand DISCs, and items. See the full credits in the Japanese section below.

---

## Audio Assets & Distribution Policy

This repository contains the **game engine source only**. The following are deliberately **not** included and **not distributed** by this project:

- Background music tracks (`assets/bgm/`)
- Sound effects (`assets/se/`)
- Any pre-built binary release of the game with those assets embedded

**Why:** The original audio assets were not produced with redistribution rights. The upstream *Diavolo The Wanderer* project itself halted in 2008 in part because the combined licensing obligations (source music, JoJo IP, etc.) could not be resolved. newDTW inherits the same constraint and does not attempt to work around it.

**What this means in practice:**

- No binaries are published to GitHub Releases.
- `assets/bgm/` and `assets/se/` are in `.gitignore`; only their `README.md` ledger files are tracked.
- The active NeLisp runtime tolerates missing audio so the game continues to play without sound.

**Long-term goal:** replace the audio track-by-track with original, CC0, or otherwise redistributable material so a proper public release becomes possible. See Roadmap item *"Original BGM to resolve copyright"*. Contributions toward this are welcome — see `assets/bgm/README.md` and `assets/se/README.md` for the license ledger format.

---

## License

See [LICENSE.md](LICENSE.md) for the terms this fork's maintainer applies to the code they personally wrote and contributed.

**Important caveats:**

- The upstream repository ([github.com/newDTW/newDTW.github.io](https://github.com/newDTW/newDTW.github.io)) does not specify a licence, so the portions of this tree inherited from upstream (and, transitively, from the original KMQ SOFT HSP source) are **not** covered by any clear grant of rights from their authors.
- `LICENSE.md` does not grant — and cannot grant — any rights to audio, sprite, character-name, or other third-party subject matter that may appear or may once have appeared in this tree. Such material is governed by the rights of its respective owners.
- Forking, cloning, and viewing this repository are permitted by GitHub's Terms of Service. Redistribution of the code beyond a personal fork, and any distribution of binaries built from it, are not endorsed by this repository's current policy.

---

<details>
<summary><strong>日本語README (Japanese)</strong></summary>

## はじめに

こちらは、ディアボロの大冒険の二次創作版 (自称オープンソース化プロジェクト)です。

KMQ SOFT が作成した「ジョジョの奇妙な冒険」の二次創作ローグライクゲーム「ディアボロの大冒険」。かつて一世を風靡したディアボロの大冒険ですが、その原作版の開発は2008年9月30日を持って終了しました。

こちらはファンの一人が作成した[ブラウザ版ディアボロの大冒険](https://github.com/newDTW/newDTW.github.io)のソースコードをフォークし、現在は NeLisp ランタイムを主軸にしています。

## 構想

この newDTW は原作 Ver 0.13 を踏襲したブラウザ版から出発し、現在は Emacs Lisp での実行経路を主軸にしています。今後の開発構想としては以下の通りです。

- **NeLisp ライブ実行** — build/run/test/audit は Emacs Lisp 直実行に移行済み
- 原作の開発が終了した後にファンによって開発されたカスタム版である Ver 0.14 ~ 0.16 の要素を追加
- 「ジョジョの奇妙な冒険」の第7部、第8部の要素を追加
- 日本語だけでなく英語や中国語など海外のプレイヤーを意識した多言語化
- BGMなどの著作権問題のクリア

## スタッフクレジット

### Special Thanks

#### ゲーム開発
- 原作者 (ver0.13まで): クライブ さま・ムニエル さま・qra さま (KMQ SOFTの御三方)
- カスタム版 ver0.14~0.16 の開発: 名も無き波紋使い
- 本オープンソース版: zawatton

#### ドット絵開発
ドット絵を作成していただいた方々、本当にありがとうございます。

- ゲーム全体: KMQ SOFT の御三方
- 敵キャラドット絵修正: 「名も無きスタンド使い」(30+ characters)
- スタンドDISC: 「名も無きスタンド使い」
- その他アイテム: 「名も無きスタンド使い」

</details>
