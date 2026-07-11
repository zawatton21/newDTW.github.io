# newDTW NeLisp port — forward development plan (handoff to codex)

Authoritative forward plan as of 2026-07-08. Development is handed to
anvil-orchestrator + codex; the human owner + Claude act as management
(scope, judge, verify, approve). This document is what codex executes
against between sessions. Read it top to bottom before picking up work.
Runtime coverage and inventory are verified by the elisp audit reports
under `build/`.

## 0. Prime directives (never violate)

- **NEVER reintroduce browser/script-language game runtime source.** If
  behaviour is wrong, extend the elisp runtime and verifiers
  (`nelisp_runtime/*.el`). Any local legacy checkout is an ignored
  reference copy, not part of the tracked runtime.
- **NEVER write to the player's real save directory**
  `C:/Users/kuroz/newDTW`. Use `build/saves-test` / `build/saves-play`
  redirects only.
- **Repository artifacts in English** (design docs, code comments,
  docstrings, commit messages). Chat prose to the owner is Japanese; do
  not confuse the two.
- **AOT dialect constraint** (renderer, dev/sumi cairo-elisp): never
  nest a user-function call inside another call's argument list or a
  primitive comparison — bind intermediate results to locals first
  (nested calls have produced 0xC0000005 crashes).
- **Process discipline**: kill only processes you spawned, by PID.
  NEVER kill emacs by image name — the anvil daemon runs as emacs.exe.
  A PowerShell/collect timeout is NOT a crash; let long steps finish.
- **Commits**: the integrator (Claude) commits both repos. Codex stages
  changes and reports; if the sandbox cannot write `dev/sumi` or deploy
  to Temp, stage under `newDTW-nelisp/build/patched-renderer/` and say
  so.

## 1. Verification doctrine (the hard-won lesson — read this twice)

Increments S, T, and U each passed run-tile-probe, run-live-probe
(LIVE-MESSAGE-WHITE / LIVE-MESSAGE-OK green), dump renders, curated live
replays, and even a saved "buffer0_live_fixed.png" — and the player
STILL saw the message window broken every time. **Those oracles lie.**

Rule going forward, for any change with a visible result:

- The ONLY sufficient proof is a PNG captured **from the actual running
  live native window** (`sumi-sprite-live.exe`) while it is fed by the
  **real** pipeline (renderer <- pure-elisp feeder <- game driver). Compare it, when
  possible, against a known-good reference captured from the SAME
  running window (e.g. the title menu, which the player confirms renders
  correctly).
- `sumi-sprite-dump.exe`, hand-assembled frames, curated replays, and
  forced-state probes are **necessary but NOT sufficient**. Keep them
  green as regression guards, but never close a visible-result task on
  them alone.
- When in doubt, put the artifact in front of the human owner — the live
  window in their hands is the final gate.

## 2. Current state snapshot (2026-07-08)

Working (live-verified in the native window):
- Load-to-title, title menu (renders correctly: translucent + white),
  login roster, new-game edge detection, dungeon entry.
- Dungeon: 8-way movement + rotate, collision, idle/water animation,
  enemy turns, combat damage, hunger, direct keyboard input, Japanese
  text, lossless frame pipeline.
- Item/disc pickup (inventory increments, ground clears), pickup message
  opens, status screen opens and closes with X, message text is white.
- Battle attack handoff and item-menu rendering are covered by
  `run-battle.el` and `run-menu.el` in the Elisp port gate.
- Full initialization and standalone world generation are covered by
  `run-init.el` and `run-worldgen.el` in the Elisp port gate.
- Main-loop input decoding and movement handoff are covered by
  `run-mainloop.el` in the Elisp port gate.
- Game-speed settings are covered by `run-settings-probe.el`, including
  `animationDelay` update and redirected `00.dat` persistence.
- Consumable item-use effects are covered by `run-item-use-probe.el`;
  the probe verifies the Elisp `func498 -> item600` food dispatcher/effect,
  message, shared `func433` inventory consumption/slot compaction, full
  `func420` use-effect startup (`1214=3`, SE119, "ate" message), and
  missing-call-free execution.  Additional food effects are covered through
  `item602`, `item603`, `item604`, `item605`, `item630`, `item631`,
  `item632`, `item633`, `item634`, `item635`, `item636`, `item639`,
  `item640`, `item641`, `item647`, `item648`, `item650`, `item651`,
  `item652`, `item653`, `item654`, and `item655`, verifying large-food
  max-stomach increase, burnt-food caps, alternate small-food paths, tooth
  flagging, max-stomach full refill/increase, HP recovery/max-HP increase
  foods, spirit restore/increase foods, vision-state clearing, movement
  status cleanup, floor stomach-lock state, stomachache max-stomach
  reduction, damage food, heavy-stomach state, SE111/SE162/SE164, status
  flag reset, and messages. The same probe now covers
  selected memory DISC effects through `item560`, `item561`, `item562`,
  `item563`, `item564`, `item565`, `item566`, `item567`, `item568`,
  `item569`, `item570`, `item571`, `item572`, `item573`, `item574`,
  `item575`, `item576`, `item577`, `item578`, `item579`, `item580`,
  `item582`, `item583`, `item584`, `item585`, `item586`, `item587`,
  `item588`, `item589`, `item590`,
  and `item591`,
  verifying memory-use flag reset, animation flag cleanup, direction/status
  flags, trap reveal, item-selection/menu modes, FF DISC charge overwrite,
  direct and random level up/down, no-target summon cleanup, defense buff,
  shooting/attitude/Hamon/star/coward buffs, map/slow/sleep flags, status
  cleanup, prophecy selection, warp-dispatch handoff, enemy wakeup, bomb
  disarm, retreat/menu mode flags, broad buff flags,
  SE102/SE118/SE123/SE132/SE134/SE142/SE151/SE153/SE154/SE164/SE168/SE175/SE182/SE184/SE216/SE219/SE232, and messages. The
  same probe now covers selected extra item effects through `item701`,
  `item712`, `item713`, `item714`, `item715`, `item716`, `item718`,
  `item719`, `item720`, `item722`, `item723`, `item724`, `item726`,
  `item727`, `item728`, `item729`, `item730`, `item731`, `item732`,
  `item797`, `item798`, `item799`, and `item9999`, verifying hostage floor placement
  and blocked use, HP refill/slow state, summon flag cleanup, UV-light
  no-target cleanup, nutrition satiety refill, outside-dungeon no-op phone
  handling, effect handoff/arrow rejection, time-stop flags/warp cleanup,
  Caesar death-state flags, no-op activation branches, vampire/invisible/
  full-heal/ultimate-life status effects, wallet additions including torn
  wallet branches, Tusk no-op handling, max-HP debug item state, paper
  inflate success/blocked branches, equipped DISC +10 and max-revision
  updates, SE111/SE134/SE143/SE168/SE174/SE176/SE182/SE185/SE207, and
  messages. The
  same probe now covers
  equip-DISC paths
  through the `func420 -> func493 -> func432 -> func494 -> func496 ->
  func497` path, verifying attack, defense, ability, and shooting equip
  flags, equipped disc ids, inventory preservation, equip sound, and equip
  messages. It also verifies normal unequip for the same four equip classes,
  ensuring flags and equipped ids clear while inventory rows remain. The same
  probe also covers placing an inventory item on the floor (`func403 ->
  func404 -> func405 ->
  func724 -> func398 -> func430 -> func433`), including floor-grid
  insertion, inventory slot compaction, SE133, and the placement message.
  The blocked placement branch (`func403 -> func404`) is covered too,
  preserving the inventory item/count, leaving the floor grid untouched,
  closing the item menu, and emitting the cannot-place message without the
  placement SE or turn advance.  The no-floor-slot placement branch
  (`func403 -> func404 -> func405`) is also covered, preserving inventory
  state, leaving the floor grid untouched, closing the item menu, and
  emitting the no-place message without `func724`, inventory consumption,
  placement SE, or turn advance.
  It also covers floor/inventory exchange through `func480`, verifying row
  field swaps, floor position/grid preservation, menu close, turn advance, and
  the exchange message.  The generated `func480` exchange loop now writes
  vector-backed `"VarN"` fields through `gr-prop-set` so the translated Elisp
  path actually mutates inventory and floor rows.  Normal floor pickup is
  covered through `func400 -> func492 -> func398`, verifying inventory-row
  copy, count increment, floor-grid/row clearing, pickup SE/message, and
  missing-call-free execution.  The full-inventory refusal branch of
  `func400` is covered as well, preserving the floor item/grid and inventory
  count while emitting the cannot-pick-up message without the pickup SE.
  Floor pickup stacking is now covered through
  `func400 -> func401`, verifying shooting-DISC charge merge,
  floor-grid/row clearing, pickup SE, stack message, and inventory
  preservation.  Equipped shooting-DISC use
  is now covered through `func647 -> func421`, verifying projectile travel,
  shooting SE, remaining-shot decrement, flag cleanup, and turn advance.
  The enemy-hit shooting path is covered too (`func647 -> func660 -> func661
  -> func705 -> func421`), verifying target lookup from the enemy grid,
  deterministic HP reduction, hit SE/message, remaining-shot decrement, and
  turn advance.
  Floor temporary-slot transfer is covered through `func478` and `func475`,
  verifying floor-row load into `var_233[0]`, writeback from `var_233[0]` to
  `var_78`, the original field-copy ranges, and the generated Elisp
  vector-backed `"VarN"` writes.  Floor item removal is covered through
  `func479`, verifying `var_77` grid clearing, `var_78` row identity/position
  clearing, and preservation of the untouched row fields.
  Item-name input primitives are covered through `func483`, `func486`, and
  `func487`, verifying input-state initialization, kana table insertion, and
  dakuten/handakuten conversion without entering the save-writing rename
  commit path.  Rename entry is covered through `func482 -> func483 ->
  func492 -> func484`, verifying item-name defaulting and the handoff into
  the input loop without committing a save.  Non-committing `func484`
  input-loop actions are covered too,
  verifying one-character insertion, X/backspace buffer rollback, and
  cancel-to-turn state reset without executing the save-writing name commit.
  The non-committing history-list mode of `func484` is also covered,
  verifying row wraparound, page switching, and X return to keyboard mode
  without entering `func488`/`func489`.  Name-input drawing is covered
  through `func485`, verifying keyboard-mode title/cursor/input-buffer
  rendering and history-list rows/page cursor rendering from emitted GUI text
  commands.  The save-writing name commit paths are now covered through
  `func488` and `func489` with redirected probe data, verifying keyboard
  input-name construction, item-name registry updates, identified-name flags,
  note-buffer insertion/history shifting, redirected notesave output, menu
  return, and missing-call-free execution without touching the real save
  directory.  The adjacent name helpers are covered too: `func490` reads an
  identified-name line back from the redirected note buffer, and `func491`
  now builds the finalized input name through an Elisp loop instead of the
  unsupported transpiled `slice().join()` callback chain.
  Inventory sorting is covered through `func467 -> func466 -> func468`,
  verifying the Elisp callback-based sort passes, row-field swaps, equipped
  shooting-DISC flag migration, selected shooting slot refresh, page reset,
  and redraw handoff.
  Storage send is covered as well (`func771 -> func772 -> func430 ->
  func433`), including storage-grid insertion, storage-row copy,
  inventory slot compaction, carrier enemy cleanup, and the
  Savages Garden completion message.  The forbidden storage-send branches
  are covered too: non-empty container items and cursed equipped items now
  preserve inventory/equipment state, leave the item menu open, and emit the
  expected refusal messages without entering `func772`.  Container insert is
  now covered through `func469 -> func470 -> func433 -> func471`, verifying
  food insertion into the paper bag, container capacity/count updates,
  inventory compaction, SE130, and the insertion message.  The runtime
  `gr-index-ref` also supports vector-backed `"VarN"` reads now, matching
  generated Elisp paths that access inventory/floor rows through object-style
  keys.  Container extraction is covered through `func474 -> func492 ->
  func433 -> func434`, verifying container-to-inventory row copy, source
  container-slot clearing, container capacity/count updates, message/menu
  state, and turn advance.  The full-inventory refusal branch of `func474`
  is covered too, preserving container/inventory state, closing the menu,
  resetting mode flags, and emitting the cannot-extract message without turn
  advance.  Container-slot placement is covered through `func476 -> func404
  -> func405 -> func724 -> func398 -> func433 -> func434`, verifying
  container-to-floor row transfer, source container-slot clearing, capacity
  and count updates, placement SE/message, and turn advance.  Full-carry
  rejection is covered through `func477`, verifying menu/operation flag reset
  and the cannot-carry message.
- Push-item rejection is covered through `func473`, verifying that an item
  with no remaining pushes preserves inventory/count, resets push mode flags,
  closes the item menu, emits the refusal message, and does not play the push
  SE or advance the turn.  The successful `item850` push path is covered too,
  verifying push-count decrement, HP restoration, status-condition cleanup via
  `func457`, Hamon-strength flag update, push SE/effect SEs, flag reset, menu
  close, and turn advance.
- Restaurant shop behaviour is covered by `run-hotel-probe.el`; the
  probe verifies the shop price message, payment total, purchase confirm
  path (`func716 -> func720 -> func718`), wallet subtraction, paid-flag
  clearing, purchase SE139, thank-you message, and insufficient-funds
  path (`func716 -> func719`) with wallet restoration.
- NPC/ally interaction behaviour is covered by `run-npc-probe.el`; the
  probe verifies deterministic talk branches for `func725`, `func726`,
  `func727`, and `func728`, named/disabled NPC talk through `func734` and
  `func735`, HP-ratio metadata through `func729`, Speedwagon recruit
  handoff through `func730`, Speedwagon/Iggy join and leave through
  `func731`/`func732` and `func739`/`func740`, and low-HP ally talk through
  `func733`.  Iggy/Zeppeli battle-side ally behaviour is also covered:
  `func741` prompts and hands off the sand-DIO choice, `func742` applies the
  sand-DIO placement state and turn advance, `func746` prompts and hands off
  the Hamon choice, and `func747` applies the Hamon effect branch while
  keeping animation/draw work stubbed.  Okuyasu behaviour is covered through
  `func748` recruit prompts, `func749` punch-event state transfer with the
  attack animation stubbed, `func750` punched-join state, and `func752`
  fishing-choice handoff.  Pesci fishing behaviour is covered through
  `func753` fishing-choice handoff and the no-target/no-trap miss branch of
  `func754`, including animation tick count, cleanup state, and turn advance.
  The big-catch branch of `func754` is covered too, verifying new enemy
  creation, enemy-grid placement, position/terrain updates, animation tick
  count, cleanup state, `func331` handoff, and turn advance.
  Information/special NPC behaviour is covered through `func755` SPW
  next-floor enemy information, `func756`/`func757` simple special talks,
  `func758` Boingo next-floor prophecy, and `func759` Yo-Yo Ma choice handoff,
  with next-floor generation and retire-name lookup stubbed.
  Additional special-object/NPC flow is covered through `func760` money-short
  messaging, the `func762 -> func763 -> func764` turn chain, `func765`,
  `func766`, and `func768` object talks, the `func767` wall-hole handoff to
  `func0887`, and `func769` Savage Garden storage choice handoff.  Savage
  Garden and blood-bubble item-menu flows now cover `func770`/`func774`
  menu opening, `func771`/`func775` non-empty container rejection, `func771`
  cursed equipped-item rejection with `func426`-`func429` stubbed, and
  `func773` empty blood-bubble choice handoff, with `func461` item-menu
  redraw work stubbed.  Blood-bubble storage mutation is covered through
  `func775 -> func776` successful insertion, including item-row copy into
  `987`, inventory compaction via `func433`, mode/menu reset, message, and
  turn advance.  Extraction is covered through `func777`, including
  successful `987`-to-inventory restore and full-inventory rejection.
  Rohan/Bohemian Rhapsody special flow now covers `func778` initial quest
  choice, `func779` acceptance, `func780` refusal retry, `func781` Bohemian
  DISC presentation choice, `func783` in-progress reminder, and `func784`
  manga reaction with drawing ticks stubbed.  The reward setup path
  `func782` is covered as well, verifying Rohan/Stroheim row updates,
  reward NPC creation and grid movement, message flow, draw-call count, and
  handoff to `func785` with the ending loop stubbed.
  Turtle room and Abbacchio side flows now cover `func786` storage guide,
  `func787` return confirmation, `func788` Moody Blues return effect with
  `func173` handoff stubbed, `func789`/`func790` tea choices, and
  `func791`/`func792` tea damage versus Gold Experience protection.
  Additional special choices and bank input setup now cover `func794` drug
  boy choice handoff, `func796`/`func797` bank deposit/withdraw input setup
  with `func798` loop stubbed, and `func798` Z-confirm deposit/withdraw
  mutations with `func0854` handoff stubbed.
  Legacy message-window events now cover `func799`-`func803` simple dialogs,
  `func805` Yo-Yo Ma service choice, `func807` Under World intro/repeat cave
  choice, `func809` Under World refusal, `func810` Moody Blues replay choice,
  `func811`/`func812` replay-mode open/close, and `func813` D'Arby bet
  choice, with old `func0050`/`func0053`/`func0054`/`func0099`/`func0358`
  window helpers stubbed for deterministic coverage.  D'Arby/Osiris and
  room-object branches now cover `func814` intro/repeat choice,
  `func815` accept with `func0995` handoff stubbed, `func816` refusal,
  `func818` cancel, `func819` normal/active globe text, `func820` book,
  `func821` wall handoff/blocked/opened/normal branches, and `func822`
  bed-under text.  The adjacent legacy storage/blood-bubble variants now
  cover `func823` Savage Garden choice, `func824` item-menu open,
  `func0825` container/cursed rejection through the legacy storage-send
  path, `func827` empty/occupied blood bubble choice, `func828` item-menu
  open, and `func829` container/cursed rejection, with `func0493`,
  `func0524`, `func0354`, and equip recalculation helpers stubbed where
  needed.  Additional Rohan legacy variants now cover `func833` alternate
  accept, `func834` refusal retry choice, `func835` Bohemian DISC
  presentation choice, `func837` DISC explanation, and `func838` intro
  dialog.  Turtle/Abbacchio/guide variants now cover `func841` turtle
  storage guide, `func842` Moody Blues return choice, `func844`/`func845`
  tea choices, `func846` tea damage, `func847` Gold Experience protection,
  all seven `func848` Hazamada advice branches, and `func849` drug-boy
  choice.  Bank/Pericolo UI flow now covers the real `func0854`
  deposit/withdraw completion, `func0855` bank input window drawing,
  `func0856` Pericolo close animation, `func0857` empty/stock entry paths,
  and the non-recursive `func0858 -> func0860` cancel, normal purchase
  confirmation, and account-shortage confirmation branches, with `func492`
  item-name lookup stubbed for deterministic menu text.  The Pericolo
  purchase completion paths now cover `func0861 -> func0862` and direct
  account-funded `func0862`, verifying wallet/account payment, stock
  compaction, delivery-list insertion, paid-flag reset, close animation, and
  main-loop return.  Polpo ally reservation now covers `func0864` entry,
  booked close, `func0865` wallet payment/account-shortage/no-account
  branches, and `func0866` account-funded confirmation.  SPW enemy
  investigation now covers `func0868` empty/enemy entry, `func0869` wallet
  payment/account-shortage/no-account branches, `func0870` account-funded
  confirmation, `func0871` investigation registration, and `func0872` close,
  with heavy result drawing stubbed through `func356`.
  Hotel computer/destination UI now covers `func0873` disabled/enabled
  computer entry, `func0874` cancel plus deposit/withdraw/Pericolo/Polpo/SPW
  handoffs, `func0878` computer menu drawing, `func0875` destination
  selection/cancel branches, `func0876`/`func0877` transition fade helpers
  with frame helpers stubbed, and `func0879`/`func0880`/`func0881`/`func0885`
  hotel/travel/Requiem confirmation choices.
  Dungeon transition coverage now includes `func0886` Requiem, `func0888`
  trial entry plus carried-item rejection, `func0889` new-game trial entry,
  `func0893` heaven entry, `func0895` iron-prison entry plus carried-item
  rejection, direct `func0890` rejection messaging, `func0887` trial
  choice setup, `func0891` Pucci locked/unlocked paths, `func0892` DIO
  Made in Heaven unlock detection, and `func0894` iron-prison choice setup.
  Shop unpaid-item enforcement now covers `func0896 -> func0897` for both
  direct inventory theft and theft from inside a carried container, including
  item-name lookup, item removal, message emission, and post-theft flag reset.
  Common choice input now directly covers real `func0898` cursor up/down,
  accept dispatch, and decline/cancel return handling.
  Choice-window drawing now directly covers real `func0899` labels for
  default yes/no, shop buy/cancel, hotel room/outside, hotel bar/outside,
  punch/leave, and receive/refuse states.
  Map-editor state coverage now directly probes real `func0900`
  initialization for normal and 2x window setup, `func0901`-`func0906`
  helper controls, `func0907` enemy special-option UI branches, `func0909`
  dummy-button dispatch, `func0910` one-step scroll/cursor updates,
  `func0911` draw-pipeline dispatch, `func0912` side-info rendering,
  `func0913` minimap rendering, `func0914` main-map rendering, `func0915`
  theme combo rendering, `func0916` theme remap/redraw dispatch, `func0918`
  map overlay rendering, `func0919` grid rendering, `func0920` cursor/tool
  preview rendering, `func0921` existing-cell selection for enemy/start/
  item/DISC/stairs/terrain cells, `func0926` warning text modes, `func0917`
  map-theme selection mapping, and `func0925` cell cleanup for
  start/enemy/item/DISC occupants.  It also covers `func0933` exit-tile
  normalization and
  `func0938` item placement for stand DISC correction/curse flags, money
  values, and container allocation metadata.  `func0922` now has direct
  coverage for palette mode selection, minimap jump/clamp updates, and map
  cell placement branches for room/corridor/wall/water cleanup, stairs,
  start, enemy, item, money, DISC, and blocked-special placement warnings,
  with recursive redraw stopped in the probe.
  `func0923` now has direct coverage for
  directional exit-tile recomputation (`21`/`22`/`23`/`24`) from adjacent
  room cells.  `func0929` now has direct handcrafted-map coverage for
  terrain decoding, stairs/start markers, item/enemy/DISC dispatch, room
  visitation flags, and directional exit metadata.  The same increment fixed
  the Elisp `peek` helper to return the actual character code for previously
  unmapped map characters such as `>`, `@`, `A`, and `WXYZ`, and resets the
  `func0929` scan index before its second parsing pass.  `func0934` now has
  direct coverage for default problem-map generation, initial camera/direction
  state, and object selection emission.  The problem-editor catalog builders
  `func0947`, `func0949`, and `func0951` are covered for representative item,
  trap, and enemy list generation, payload formatting, and terminator entries.
  Problem-file handling now directly covers `func0940` redirected map/metadata
  loading, `func0942` redirected problem status classification, and the
  `func0945` decode-loop metadata path without touching real files.  The
  `func0940` map-line append path now uses string concatenation instead of the
  broken numeric coercion emitted by the original transpilation.  Problem-mode
  return/list setup now covers `func0939` normal return, changed/unchanged
  problem status-save branches, and `func0941` list initialization plus first
  and second progress gating flags.
  Network/log helper coverage now directly probes `func0961` message send
  wrapping, `func0962` log color classification, `func0963` stair movement
  notification, `func0964` dungeon movement notification, `func0965` periodic
  network dispatch, `func0966` status payload construction, `func0967`
  peer-info title updates, `func0968` send-location rejection handoff, and
  `func0969` peer-status list compaction.  The same probe now covers
  `func0971` item-send payload construction, `func0976` queued enemy summon
  dispatch, `func0977`/`func0981` remote event flag setters, `func0979`
  enemy removal/network payload emission, `func0974`/`func0980`/`func0982`
  remote event actions with draw loops stubbed, and representative `func0983`
  DISC-name resolution.  It also covers `func0984` connection close/login
  return branches, `func0986` peer-table copy, `func0987` dungeon label
  mapping, `func0988` extended status payloads, `func0989` extended message
  sending, `func0991`/`func0992` movement notifications, `func0993` window
  count messages, `func0994` peer-list drawing, and `func0995` Osiris setup
  animation/state initialization.
  Enemy ability helper coverage now directly probes `func1011` dispatch for
  all mapped enemy ability ids, `func1013` target-name resolution, `func1015`
  representative ability flag assignment, and `func1016` sprite coordinate
  calculation.  The same probe now runs representative ability bodies
  (`func1017`, `func1018`, `func1019`, `func1020`, `func1021`,
  `func1022`, `func1023`, `func1024`, `func1025`, `func1026`,
  `func1027`, `func1028`, `func1029`, `func1030`, `func1031`,
  `func1032`, `func1033`, `func1034`, `func1035`, `func1036`,
  `func1037`, `func1038`, `func1039`, `func1040`, `func1041`,
  `func1042`, `func1043`, `func1044`, `func1045`, `func1046`,
  `func1047`, `func1048`, `func1049`, `func1050`, `func1051`,
  `func1052`, `func1053`, `func1055`, `func1056`, and `func683`)
  with drawing/wait work stubbed,
  verifying power consumption, status flags, enemy-row mutation, summon/effect
  cleanup, and direct helper handoff.
- Music/BGM coverage now directly probes generated Elisp `func083` and
  `func084` for sound-effect volume initialization, and verifies the runtime
  music helper bridge for fixed BGM mappings, current-BGM replay, received-BGM
  resume, DISC-driven BGM replacement/restore, and music stop events without
  enabling real audio output.  The bridge also consumes migrated music helpers
  that previously required TypeScript-side game logic: SE/BGM volume up/down
  (`func085`-`func088`), attack SE selection (`func089`), special SE selection
  (`func100`), guarded BGM replay (`func112`), Guccio-corpse DISC playback
  (`func115`), and special-BGM restoration (`func137`).  It now also consumes
  sound selector helpers `func083`/`func084` and `func090`-`func099` directly
  in Elisp, including attack/effect/enemy/shooting SE branch selection, so the
  live feeder no longer needs TypeScript-side music helpers for those cases.
- The live play path writes direct binary frames by default, can skip exact
  duplicate frames with `GR_PLAY_DEDUP_FRAMES`, compacts redundant render
  state commands, and avoids the duplicate first-pass enemy draw in
  `func326`.
- The native live renderer starts at 680x680 with internal coordinates kept at
  340. Function-key size control is handled in the renderer tick loop as well
  as GTK key events: F1 toggles 340/680, F2 forces 680, and F3 forces 340.

In flight:
- Continue live-window fidelity checks and gameplay parity fixes using only
  `nelisp_runtime/*.el` and the native renderer pipeline.

Renderer repo (dev/sumi) HEAD: 7f8656e (increment U).

## 3. Prioritized roadmap

### P0 — finish the message window (increment W, closed)
The live message window now renders with the expected blue backing and white
text in the native window.  The fix keeps boot-composed work buffers available
to later direct-bin frames, so late renderer starts no longer lose the
message-box backing.

### P1 — 680x680 window via 2x output scale (increment V, closed)
The native renderer keeps internal coordinates at 340 and scales the final
buffer-0 presentation to 680.  On the current 150% DPI Windows runtime, the
renderer compensates only the native outer-window request so the captured live
window frame measures 680x680 while game coordinates and draw buffers remain
unchanged.  Function keys are handled by GTK key events: F1 toggles 340/680,
F2 forces 680, and F3 forces 340.

### P2 — opening & meta flow
Execute in this order; each is its own increment with a live-window
proof:
1. **Load screen** at boot before the title (candidate func139A) —
   verified by `run-opening-probe.el`.
2. **Opening story event sequence** when selecting 冒険に出る with no
   save data — the title/login new-game path now runs the generated
   Elisp `func150` sequence instead of the short preview. `run-opening-
   probe.el` verifies the boot path uses the generated sequence, and
   `run-opening-story-probe.el` verifies the original story logic: 17
   story messages, 235 draw frames, 80 wait frames, the save-file
   handoff, and the final `func159` transition while redirecting saves
   into `build/opening-story-probe-data`.
3. **Venice hotel hub** (func162 path) with its
   event processing — non-skip new-game now routes through `func162` to
   player position 13,10; `run-opening-probe.el` and
   `run-hotel-probe.el` verify the connection.
4. **Ranking-on-death flow** — `func672 -> func673 -> func227 ->
   func173 -> func165` is wired and verified by `run-death-probe.el`;
   the probe confirms death count increment, `disc.txt` recording, and
   the ranking-screen handoff.
5. **Return to the Venice hotel** after ranking — `run-death-probe.el`
   now confirms `func166 -> func178 -> func167 -> func159` reaches the
   hotel-side main loop (`func009`) with dungeon number/current floor
   reset to 0. The post-death event (`func154`) is executed in the probe
   with key waits and frame dumping suppressed; its four event messages
   and `func335`/`func336` animation hooks are verified. Live-window proof
   remains required before closing the visible meta-flow increment.
6. **Save/load round trip** — `run-saveload.el` verifies `func231` save
   and `func229` load in `build/saves-test`, confirming wallet and
   player position restoration without writing to the player's real save
   directory.

### P3 — technical debt (fold in opportunistically; don't let it block)
- **Probe determinism**: `run-tile-probe.el` now seeds Emacs RNG with a
  fixed string before worldgen, making DISC-PICKUP / ITEM-SCREEN path
  selection deterministic for sequential gate runs.
- **AOT `if` fall-through (cosmetic)**: on normal window close,
  `run_key_selftest` still executes once (SELFTEST-MID/FINAL print after
  `g_main_loop_run` returns) — the AOT `if` appears to run the else
  branch after a true then branch completes. Harmless post-close, but
  worth confirming/guarding; may indicate a general AOT `if` codegen
  quirk to investigate in dev/nelisp.
- **AOT nested-call codegen**: the dialect constraint (§0) is a
  workaround for a real dev/nelisp compiler limitation (nested
  user-calls in arg position crash). Fixing the compiler removes the
  constraint.
- **Corpus alias inflation**: transpiler corpus alias count drifted
  (381 -> 454); audit and prune from
  `build/nelisp-conditional-runtime-names.txt`.

## 4. Working method

- Dispatch via `orchestrator-submit-and-collect` (provider codex,
  `cwd = C:/Users/kuroz/Cowork/Notes/dev` so both repos are writable,
  `collect_timeout_sec` short to return pending, `timeout_sec` generous).
- Keep task notes in the active conversation or elisp audit reports; do
  not add temporary task markdown files to the repo root.
- Integrator (Claude) independently verifies (re-run + live-window
  eyeball + regression), then commits both repos with the
  `Co-Authored-By` trailer and records a worklog entry.
- One increment at a time when it touches the renderer (concurrent
  renderer edits conflict). Use git worktrees for any genuine parallel
  work in the same repo.

## 5. Key pointers

- Pipeline: `nelisp_runtime/play.el` (game driver) -> `build/frames/*` ->
  `nelisp_runtime/live-feed-loop.el --direct-bin .../sumi-sprite.bin`
  (pure-elisp feeder/packer, writes sequenced bins) ->
  `sumi-sprite-live.exe` (GTK4 window; self-test gate at line ~647 must
  stay `(if (= 0 0) …)`).
- Preferred live launcher: `nelisp_runtime/start-live.el` starts the
  native renderer, pure-elisp direct-bin feeder, bundle build, and play
  loader. Run it directly with Emacs.
- There is no package manifest or browser build path in the tracked
  runtime. Build, run, test, and audit commands are direct Emacs batch
  invocations.
- Renderer build: `emacs -Q --batch -l dev/sumi/backends/cairo-elisp/build-live.el` (OBJ-OK
  x2), then deploy the live exe to
  `C:/Users/kuroz/AppData/Local/Temp/sumi-sprite-live.exe`.
- Runtime interpreter: `nelisp_runtime/game-runner.el` (state-diff IR).
- Normal play bundle builder: `nelisp_runtime/build-play-bundle.el`
  (uses checked-in Elisp runtime sources only, byte-compiles them, and
  generates the loader; also runs the conditional runtime coverage check
  below). It must not regenerate runtime data from JavaScript or
  TypeScript sources.
- Historical simple state-diff exporter:
  `nelisp_runtime/statediff-to-elisp.el` is not part of the normal play
  bundle path; `nelisp_runtime/gamedata-simple.el` is the active Elisp
  source.
- Conditional runtime coverage check:
  `nelisp_runtime/conditional-runtime-check.el` verifies the
  `gamedata-conditional.el` closure and keeps
  `build/nelisp-conditional-runtime-expanded-names.txt` normalized
  during normal play bundle builds. It also writes
  `build/nelisp-conditional-runtime-report.json`.
- Conditional runtime source: `nelisp_runtime/gamedata-conditional.el`
  is the checked-in elisp runtime source; coverage is verified by
  `nelisp_runtime/conditional-runtime-check.el`.
- Elisp port audit/registry: `nelisp_runtime/elisp-port-audit.el`
  writes `build/nelisp-port-audit.json` and
  `build/nelisp-runtime-registry.json` from elisp runtime sources.
  The audit also reports tracked and physical script-language inventory:
  `trackedScriptLanguageCount`, `trackedJsTsCount`,
  `physicalScriptLanguageCount`, `activeBuildJsTsFallbackCount`,
  `activeRuntimeJsTsCommandCount`, `nonSourceTrackedJsTsCount`, and
  `referenceSourceJsTsCount` must stay 0 in the tracked runtime and
  worktree.
- NeLisp tests:
  `emacs -Q --batch -l nelisp_runtime/run-elisp-port-gate.el`,
  `emacs -Q --batch -l nelisp_runtime/run-state-diff-smoke.el`,
  `emacs -Q --batch -l nelisp_runtime/run-init.el`,
  `emacs -Q --batch -l nelisp_runtime/run-worldgen.el`,
  `emacs -Q --batch -l nelisp_runtime/run-tile-probe.el`,
  `emacs -Q --batch -l nelisp_runtime/run-live-attack-probe.el`,
  `emacs -Q --batch -l nelisp_runtime/run-live-probe.el`,
  `emacs -Q --batch -l nelisp_runtime/run-mainloop.el`,
  `emacs -Q --batch -l nelisp_runtime/run-battle.el`,
  `emacs -Q --batch -l nelisp_runtime/run-menu.el`,
  `emacs -Q --batch -l nelisp_runtime/run-settings-probe.el`,
  `emacs -Q --batch -l nelisp_runtime/run-item-use-probe.el`,
  `emacs -Q --batch -l nelisp_runtime/run-opening-probe.el`,
  `emacs -Q --batch -l nelisp_runtime/run-opening-story-probe.el`,
  `emacs -Q --batch -l nelisp_runtime/run-hotel-probe.el`,
  `emacs -Q --batch -l nelisp_runtime/run-death-probe.el`,
  `emacs -Q --batch -l nelisp_runtime/run-saveload.el`,
  `emacs -Q --batch -l nelisp_runtime/start-live.el -- --skip-opening --duration 2`,
  and
  `emacs -Q --batch -l nelisp_runtime/elisp-port-audit.el -- --report build/nelisp-port-audit.json`.
