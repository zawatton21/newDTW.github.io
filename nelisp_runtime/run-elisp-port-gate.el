;;; run-elisp-port-gate.el --- run the active Elisp runtime verification gate -*- coding: utf-8; lexical-binding: t; -*-

(require 'cl-lib)

(defconst gr-gate-repo-root
  (expand-file-name ".." (file-name-directory (or load-file-name buffer-file-name))))

(defconst gr-gate-emacs
  (or (and invocation-directory
           (expand-file-name invocation-name invocation-directory))
      invocation-name))

(defconst gr-gate-checks
  '((:name "build"
     :script "nelisp_runtime/build-play-bundle.el"
     :markers ("STATE-DIFF-ELISP-SOURCE"
               "CONDITIONAL-RUNTIME-OK"
               "\"loader\": \"build/play-bundle-loader.el\""))
    (:name "smoke"
     :script "nelisp_runtime/run-state-diff-smoke.el"
     :markers ("nelisp elisp state-diff runner smoke: PASS"))
    (:name "init"
     :script "nelisp_runtime/run-init.el"
     :markers ("INIT-SLOTS"
               "INIT-SAMPLE version="
               "INIT-WORLDGEN"
               "INIT-WORLDGEN-OK"))
    (:name "worldgen"
     :script "nelisp_runtime/run-worldgen.el"
     :markers ("WORLDGEN floor-cells="
               "WORLDGEN dims="
               "WORLDGEN enemies="
               "WORLDGEN-OK"
               "WORLDGEN-DUMP"))
    (:name "tile-probe"
     :script "nelisp_runtime/run-tile-probe.el"
     :markers ("TILE-PROBE-OK"
               "ENEMY-PROBE-OK"
               "DISC-PICKUP-OK"
               "MONEY-PICKUP-MESSAGE-OK"
               "ITEM-SCREEN-OK"
               "FOOD-INVENTORY-USE-OK"
               "FOOD-MENU-USE-OK"
               "FOOD-LIST-USE-OK"
               "STAIRS-DOWN-OK"
               "SHOP-ITEM-MESSAGE-OK"
               "ROTATE-ARROW-OK"))
    (:name "live-attack"
     :script "nelisp_runtime/run-live-attack-probe.el"
     :markers ("LIVE-ATTACK-OK"))
    (:name "live-probe"
     :script "nelisp_runtime/run-live-probe.el"
     :markers ("LIVE-STATUS-CLOSE-OK"
               "LIVE-PICKUP-OK"
               "LIVE-MESSAGE-OK"
               "LIVE-INPUT-REPEAT-OK"))
    (:name "mainloop"
     :script "nelisp_runtime/run-mainloop.el"
     :markers ("MAINLOOP-STEP"
               "MAINLOOP-OK"))
    (:name "battle"
     :script "nelisp_runtime/run-battle.el"
     :markers ("BATTLE-SEED"
               "BATTLE-TRACE"
               "BATTLE-OK"))
    (:name "menu"
     :script "nelisp_runtime/run-menu.el"
     :markers ("MENU-SEED"
               "MENU-TEXTS"
               "MENU-OK"))
    (:name "settings"
     :script "nelisp_runtime/run-settings-probe.el"
     :markers ("SETTINGS-GAME-SPEED"
               "SETTINGS-GAME-SPEED-OK"))
    (:name "music"
     :script "nelisp_runtime/run-music-probe.el"
     :markers ("MUSIC-PROBE-VOLUME"
               "MUSIC-PROBE-BGM-MAP"
               "MUSIC-PROBE-DYNAMIC"
               "MUSIC-PROBE-STATEFUL"
               "MUSIC-PROBE-SELECTORS"
               "MUSIC-PROBE-OK"))
    (:name "map-editor"
     :script "nelisp_runtime/run-map-editor-probe.el"
     :markers ("MAP-EDITOR-PROBE-EDITOR-INIT"
               "MAP-EDITOR-PROBE-EDITOR-CONTROLS"
               "MAP-EDITOR-PROBE-DRAW-HELPERS"
               "MAP-EDITOR-PROBE-RENDER-EXTRAS"
               "MAP-EDITOR-PROBE-THEME"
               "MAP-EDITOR-PROBE-CLEANUP"
               "MAP-EDITOR-PROBE-SCROLL"
               "MAP-EDITOR-PROBE-EXIT-NORMALIZE"
               "MAP-EDITOR-PROBE-EXIT-RECOMPUTE"
               "MAP-EDITOR-PROBE-ITEM-DISC"
               "MAP-EDITOR-PROBE-ITEM-CURSED-DISC"
               "MAP-EDITOR-PROBE-ITEM-MONEY"
               "MAP-EDITOR-PROBE-ITEM-CONTAINER"
               "MAP-EDITOR-PROBE-CLICK-SELECTS"
               "MAP-EDITOR-PROBE-CELL-SELECTS"
               "MAP-EDITOR-PROBE-CELL-PLACEMENTS"
               "MAP-EDITOR-PROBE-MAP-LOAD"
               "MAP-EDITOR-PROBE-DEFAULT-MAP"
               "MAP-EDITOR-PROBE-CATALOGS"
               "MAP-EDITOR-PROBE-PROBLEM-LOAD"
               "MAP-EDITOR-PROBE-PROBLEM-STATUS"
               "MAP-EDITOR-PROBE-DECODE-LOOP"
               "MAP-EDITOR-PROBE-PROBLEM-RETURN"
               "MAP-EDITOR-PROBE-PROBLEM-LIST-INIT"
               "MAP-EDITOR-PROBE-OK"))
    (:name "network"
     :script "nelisp_runtime/run-network-probe.el"
     :markers ("NETWORK-PROBE-COLORS"
               "NETWORK-PROBE-STAIRS"
               "NETWORK-PROBE-DUNGEONS"
               "NETWORK-PROBE-PERIODIC"
               "NETWORK-PROBE-MESSAGE-SEND"
               "NETWORK-PROBE-STATUS"
               "NETWORK-PROBE-PEER-TITLE"
               "NETWORK-PROBE-PEER-REMOVE"
               "NETWORK-PROBE-SEND-LOCATION-REJECT"
               "NETWORK-PROBE-ITEM-PAYLOAD"
               "NETWORK-PROBE-SIMPLE-FLAGS"
               "NETWORK-PROBE-ENEMY-SEND"
               "NETWORK-PROBE-ENEMY-SUMMON"
               "NETWORK-PROBE-REMOTE-ACTIONS"
               "NETWORK-PROBE-DISC-NAME"
               "NETWORK-PROBE-CONNECTION-CLOSE"
               "NETWORK-PROBE-PEER-COPY"
               "NETWORK-PROBE-DUNGEON-LABELS"
               "NETWORK-PROBE-EXTENDED-STATUS"
               "NETWORK-PROBE-MESSAGE-SEND-EXTENDED"
               "NETWORK-PROBE-FLOOR-DUNGEON-EXTENDED"
               "NETWORK-PROBE-WINDOW-COUNT"
               "NETWORK-PROBE-PEER-LIST-DRAW"
               "NETWORK-PROBE-OSIRIS-SETUP"
               "NETWORK-PROBE-OK"))
    (:name "ability"
     :script "nelisp_runtime/run-ability-probe.el"
     :markers ("ABILITY-PROBE-NAME"
               "ABILITY-PROBE-SPRITES"
               "ABILITY-PROBE-FLAGS"
               "ABILITY-PROBE-DISPATCH"
               "ABILITY-PROBE-OK"))
    (:name "item-use"
     :script "nelisp_runtime/run-item-use-probe.el"
     :markers ("ITEM-USE-FOOD"
               "ITEM-USE-DISPATCH"
               "ITEM-USE-CONSUME"
               "ITEM-USE-EFFECT"
               "ITEM-USE-EQUIP-ATTACK"
               "ITEM-USE-EQUIP-DEFENSE"
               "ITEM-USE-EQUIP-ABILITY"
               "ITEM-USE-EQUIP-SHOOTING"
               "ITEM-USE-UNEQUIP-ATTACK"
               "ITEM-USE-UNEQUIP-DEFENSE"
               "ITEM-USE-UNEQUIP-ABILITY"
               "ITEM-USE-UNEQUIP-SHOOTING"
               "ITEM-USE-PLACE"
               "ITEM-USE-PLACE-BLOCKED"
               "ITEM-USE-PLACE-NO-SPACE"
               "ITEM-USE-FLOOR-EXCHANGE"
               "ITEM-USE-FLOOR-PICKUP"
               "ITEM-USE-FLOOR-PICKUP-FULL"
               "ITEM-USE-FLOOR-PICKUP-STACK"
               "ITEM-USE-SHOOTING-DISC"
               "ITEM-USE-SHOOTING-HIT"
               "ITEM-USE-STORAGE"
               "ITEM-USE-STORAGE-CONTAINER-BLOCK"
               "ITEM-USE-STORAGE-CURSED-BLOCK"
               "ITEM-USE-CONTAINER-INSERT"
               "ITEM-USE-PUSH-EMPTY"
               "ITEM-USE-PUSH-HAMON"
               "ITEM-USE-PROBE-OK"))
    (:name "opening-probe"
     :script "nelisp_runtime/run-opening-probe.el"
     :markers ("PLAY-LOAD-SCREEN"
               "PLAY-OPENING-STORY"
               "PLAY-OPENING"
               "PLAY-START"
               "OPENING-PROBE-OK"))
    (:name "opening-story-probe"
     :script "nelisp_runtime/run-opening-story-probe.el"
     :markers ("OPENING-STORY-PROBE"
               "OPENING-STORY-PROBE-OK"))
    (:name "hotel-probe"
     :script "nelisp_runtime/run-hotel-probe.el"
     :markers ("HOTEL-RENDER"
               "HOTEL-TRANSITION"
               "HOTEL-SHOP"
               "HOTEL-SHOP-PURCHASE"
               "HOTEL-SHOP-SHORTFALL"
               "HOTEL-FLOOR-SHOP"
               "HOTEL-PROBE-OK"))
    (:name "npc-probe"
     :script "nelisp_runtime/run-npc-probe.el"
     :markers ("NPC-PROBE-SURFACE"
               "NPC-PROBE-METADATA"
               "NPC-PROBE-RECRUIT"
               "NPC-PROBE-SPEEDWAGON-JOIN"
               "NPC-PROBE-IGGY-JOIN"
               "NPC-PROBE-SPEEDWAGON-TALK"
               "NPC-PROBE-IGGY-SAND-CHOICE"
               "NPC-PROBE-IGGY-SAND-PLACE"
               "NPC-PROBE-ZEPPELI-HAMON-CHOICE"
               "NPC-PROBE-ZEPPELI-HAMON-EFFECT"
               "NPC-PROBE-OKUYASU-RECRUIT"
               "NPC-PROBE-OKUYASU-PUNCH"
               "NPC-PROBE-OKUYASU-PUNCHED-JOIN"
               "NPC-PROBE-OKUYASU-FISHING-CHOICE"
               "NPC-PROBE-PESCI-FISHING-CHOICE"
               "NPC-PROBE-PESCI-FISHING-MISS"
               "NPC-PROBE-PESCI-FISHING-BIG-CATCH"
               "NPC-PROBE-SPW-NEXT-FLOOR-INFO"
               "NPC-PROBE-POLNAREFF-TALK"
               "NPC-PROBE-SILENT-TALK"
               "NPC-PROBE-BOINGO-NEXT-FLOOR-INFO"
               "NPC-PROBE-YOYOMA-CHOICE"
               "NPC-PROBE-MONEY-SHORT"
               "NPC-PROBE-SHORT-TURN-CHAIN"
               "NPC-PROBE-GLOBE-TALK"
               "NPC-PROBE-BOOK-TALK"
               "NPC-PROBE-WALL-HOLE-EVENT"
               "NPC-PROBE-BED-UNDER-TALK"
               "NPC-PROBE-SAVAGE-GARDEN-CHOICE"
               "NPC-PROBE-SAVAGE-GARDEN-MENU"
               "NPC-PROBE-SAVAGE-GARDEN-CONTAINER-REJECT"
               "NPC-PROBE-SAVAGE-GARDEN-CURSED-REJECT"
               "NPC-PROBE-BLOOD-BUBBLE-EMPTY-CHOICE"
               "NPC-PROBE-BLOOD-BUBBLE-MENU"
               "NPC-PROBE-BLOOD-BUBBLE-CONTAINER-REJECT"
               "NPC-PROBE-BLOOD-BUBBLE-INSERT-SUCCESS"
               "NPC-PROBE-BLOOD-BUBBLE-EXTRACT-SUCCESS"
               "NPC-PROBE-BLOOD-BUBBLE-EXTRACT-FULL-REJECT"
               "NPC-PROBE-ROHAN-QUEST-CHOICE"
               "NPC-PROBE-ROHAN-QUEST-ACCEPT"
               "NPC-PROBE-ROHAN-QUEST-REFUSE"
               "NPC-PROBE-ROHAN-BOHEMIAN-CHOICE"
               "NPC-PROBE-ROHAN-QUEST-PROGRESS"
               "NPC-PROBE-ROHAN-MANGA-REACTION"
               "NPC-PROBE-ROHAN-BOHEMIAN-REWARD"
               "NPC-PROBE-TURTLE-STORAGE-GUIDE"
               "NPC-PROBE-ABACCHIO-RETURN-CHOICE"
               "NPC-PROBE-ABACCHIO-RETURN-EXIT"
               "NPC-PROBE-ABACCHIO-TEA-CHOICE"
               "NPC-PROBE-ABACCHIO-TEA-RETRY"
               "NPC-PROBE-ABACCHIO-TEA-DAMAGE"
               "NPC-PROBE-ABACCHIO-TEA-GE-PROTECT"
               "NPC-PROBE-DRUG-BOY-CHOICE"
               "NPC-PROBE-BANK-DEPOSIT-SETUP"
               "NPC-PROBE-BANK-WITHDRAW-SETUP"
               "NPC-PROBE-BANK-DEPOSIT-CONFIRM"
               "NPC-PROBE-BANK-WITHDRAW-CONFIRM"
               "NPC-PROBE-LEGACY-SQUALO-DIALOG"
               "NPC-PROBE-LEGACY-TIZZANO-DIALOG"
               "NPC-PROBE-LEGACY-REIMI-DIALOG"
               "NPC-PROBE-LEGACY-JOHNNY-DIALOG"
               "NPC-PROBE-LEGACY-BARTENDER-DIALOG"
               "NPC-PROBE-LEGACY-UNDERWORLD-REFUSE"
               "NPC-PROBE-YOYOMA-SERVICE-CHOICE"
               "NPC-PROBE-UNDERWORLD-CHOICE-INTRO"
               "NPC-PROBE-UNDERWORLD-CHOICE-REPEAT"
               "NPC-PROBE-MOODY-REPLAY-CHOICE"
               "NPC-PROBE-MOODY-REPLAY-MODE"
               "NPC-PROBE-DARBY-BET-CHOICE"
               "NPC-PROBE-DARBY-OSIRIS-CHOICE-INTRO"
               "NPC-PROBE-DARBY-OSIRIS-CHOICE-REPEAT"
               "NPC-PROBE-DARBY-OSIRIS-ACCEPT"
               "NPC-PROBE-DARBY-OSIRIS-REFUSE"
               "NPC-PROBE-DARBY-OSIRIS-CANCEL"
               "NPC-PROBE-ROOM-GLOBE-NORMAL"
               "NPC-PROBE-ROOM-GLOBE-ACTIVE"
               "NPC-PROBE-ROOM-BOOK"
               "NPC-PROBE-ROOM-BED-UNDER"
               "NPC-PROBE-WALL-HANDOFF"
               "NPC-PROBE-WALL-BLOCKED"
               "NPC-PROBE-WALL-OPENED"
               "NPC-PROBE-WALL-NORMAL"
               "NPC-PROBE-LEGACY-SAVAGE-GARDEN-CHOICE"
               "NPC-PROBE-LEGACY-SAVAGE-GARDEN-MENU"
               "NPC-PROBE-LEGACY-SAVAGE-GARDEN-CONTAINER-REJECT"
               "NPC-PROBE-LEGACY-SAVAGE-GARDEN-CURSED-REJECT"
               "NPC-PROBE-LEGACY-BLOOD-BUBBLE-EMPTY-CHOICE"
               "NPC-PROBE-LEGACY-BLOOD-BUBBLE-OCCUPIED-CHOICE"
               "NPC-PROBE-LEGACY-BLOOD-BUBBLE-MENU"
               "NPC-PROBE-LEGACY-BLOOD-BUBBLE-CONTAINER-REJECT"
               "NPC-PROBE-LEGACY-BLOOD-BUBBLE-CURSED-REJECT"
               "NPC-PROBE-ROHAN-ALT-ACCEPT"
               "NPC-PROBE-ROHAN-ALT-REFUSE-CHOICE"
               "NPC-PROBE-ROHAN-ALT-DISC-CHOICE"
               "NPC-PROBE-ROHAN-ALT-DISC-INFO"
               "NPC-PROBE-ROHAN-ALT-INTRO"
               "NPC-PROBE-LEGACY-TURTLE-STORAGE-GUIDE"
               "NPC-PROBE-LEGACY-ABACCHIO-RETURN-CHOICE"
               "NPC-PROBE-LEGACY-ABACCHIO-TEA-CHOICE"
               "NPC-PROBE-LEGACY-ABACCHIO-TEA-RETRY"
               "NPC-PROBE-LEGACY-ABACCHIO-TEA-DAMAGE"
               "NPC-PROBE-LEGACY-ABACCHIO-TEA-GE-PROTECT"
               "NPC-PROBE-HAZAMADA-ADVICE"
               "NPC-PROBE-LEGACY-DRUG-BOY-CHOICE"
               "NPC-PROBE-BANK-COMPLETE-DEPOSIT"
               "NPC-PROBE-BANK-COMPLETE-WITHDRAW"
               "NPC-PROBE-BANK-INPUT-DRAW"
               "NPC-PROBE-PERICOLO-CLOSE-ANIMATION"
               "NPC-PROBE-PERICOLO-ENTRY-EMPTY"
               "NPC-PROBE-PERICOLO-ENTRY-STOCK"
               "NPC-PROBE-PERICOLO-INPUT-CANCEL"
               "NPC-PROBE-PERICOLO-INPUT-BUY"
               "NPC-PROBE-PERICOLO-INPUT-SHORTAGE-ACCOUNT"
               "NPC-PROBE-PERICOLO-DELIVERY-WALLET"
               "NPC-PROBE-PERICOLO-DELIVERY-ACCOUNT"
               "NPC-PROBE-POLPO-ENTRY-CHOICE"
               "NPC-PROBE-POLPO-ENTRY-BOOKED"
               "NPC-PROBE-POLPO-CONFIRM-WALLET"
               "NPC-PROBE-POLPO-CONFIRM-ACCOUNT-CHOICE"
               "NPC-PROBE-POLPO-CONFIRM-ACCOUNT"
               "NPC-PROBE-POLPO-CONFIRM-NO-ACCOUNT"
               "NPC-PROBE-SPW-ENTRY-EMPTY"
               "NPC-PROBE-SPW-ENTRY-CHOICE"
               "NPC-PROBE-SPW-CONFIRM-WALLET"
               "NPC-PROBE-SPW-CONFIRM-ACCOUNT-CHOICE"
               "NPC-PROBE-SPW-CONFIRM-ACCOUNT"
               "NPC-PROBE-SPW-CONFIRM-NO-ACCOUNT"
               "NPC-PROBE-COMPUTER-ENTRY-DISABLED"
               "NPC-PROBE-COMPUTER-ENTRY-ENABLED"
               "NPC-PROBE-COMPUTER-MENU-CANCEL"
               "NPC-PROBE-COMPUTER-MENU-DEPOSIT"
               "NPC-PROBE-COMPUTER-MENU-WITHDRAW"
               "NPC-PROBE-COMPUTER-MENU-PERICOLO"
               "NPC-PROBE-COMPUTER-MENU-POLPO"
               "NPC-PROBE-COMPUTER-MENU-SPW"
               "NPC-PROBE-COMPUTER-MENU-DRAW"
               "NPC-PROBE-DESTINATION-SELECT-ONE"
               "NPC-PROBE-DESTINATION-SELECT-TWO"
               "NPC-PROBE-DESTINATION-SELECT-THREE"
               "NPC-PROBE-DESTINATION-SELECT-FOUR-HOTEL"
               "NPC-PROBE-DESTINATION-SELECT-FOUR-TOWN"
               "NPC-PROBE-DESTINATION-SELECT-FIVE"
               "NPC-PROBE-DESTINATION-CANCEL"
               "NPC-PROBE-TRANSITION-FADE-OUT"
               "NPC-PROBE-TRANSITION-FADE-IN"
               "NPC-PROBE-HOTEL-CHOICE-RETURN"
               "NPC-PROBE-HOTEL-CHOICE-TRAVEL"
               "NPC-PROBE-HOTEL-CHOICE-OUTSIDE"
               "NPC-PROBE-HOTEL-CHOICE-REQUIEM"
               "NPC-PROBE-TRANSITION-REQUIEM"
               "NPC-PROBE-TRANSITION-TRIAL-BLOCKED"
               "NPC-PROBE-TRANSITION-TRIAL"
               "NPC-PROBE-TRANSITION-NEW-GAME-TRIAL"
               "NPC-PROBE-TRANSITION-HEAVEN"
               "NPC-PROBE-TRANSITION-IRON-PRISON-BLOCKED"
               "NPC-PROBE-TRANSITION-IRON-PRISON"
               "NPC-PROBE-CHOICE-TRIAL"
               "NPC-PROBE-CHOICE-PUCCI-LOCKED"
               "NPC-PROBE-CHOICE-PUCCI-UNLOCKED"
               "NPC-PROBE-CHOICE-IRON-PRISON"
               "NPC-PROBE-DIO-ADVICE-LOCKED"
               "NPC-PROBE-DIO-ADVICE-UNLOCK"
               "NPC-PROBE-CARRY-REJECT"
               "NPC-PROBE-UNPAID-THEFT-INVENTORY"
               "NPC-PROBE-UNPAID-THEFT-CONTAINER"
               "NPC-PROBE-CHOICE-INPUT-DOWN"
               "NPC-PROBE-CHOICE-INPUT-UP"
               "NPC-PROBE-CHOICE-INPUT-ACCEPT"
               "NPC-PROBE-CHOICE-INPUT-DECLINE"
               "NPC-PROBE-CHOICE-INPUT-CANCEL"
               "NPC-PROBE-CHOICE-DISPLAY-DEFAULT"
               "NPC-PROBE-CHOICE-DISPLAY-SHOP"
               "NPC-PROBE-CHOICE-DISPLAY-HOTEL-RETURN"
               "NPC-PROBE-CHOICE-DISPLAY-HOTEL-OUTSIDE"
               "NPC-PROBE-CHOICE-DISPLAY-PUNCH"
               "NPC-PROBE-CHOICE-DISPLAY-GIFT"
               "NPC-PROBE-OK"))
    (:name "death-probe"
     :script "nelisp_runtime/run-death-probe.el"
     :markers ("DEATH-PROBE"
               "DEATH-PROBE-OK"))
    (:name "saveload"
     :script "nelisp_runtime/run-saveload.el"
     :markers ("SAVELOAD-SAVED"
               "SAVELOAD-TRACE"
               "SAVELOAD-OK"))
    (:name "live-start"
     :script "nelisp_runtime/start-live.el"
     :args ("--skip-opening" "--duration" "2" "--no-build")
     :markers ("START-LIVE directBin=driver:"
               "PLAY-FPS"
               "PLAY-FEED-TIME"))
    (:name "audit"
     :script "nelisp_runtime/elisp-port-audit.el"
     :args ("--" "--report" "build/nelisp-port-audit.json")
     :markers ("ELISP-PORT-AUDIT"
               "activeNelispJsTools=0"
               "activeBuildJsTsFallbacks=0"
               "activeRuntimeJsTsCommands=0"
               "trackedScriptLanguage=0"
               "physicalScriptLanguage=0"
               "referenceSourceJsTs=0")))
  "Active verification commands for the Elisp-only game runtime.")

(defun gr-gate-missing-markers (output markers)
  "Return required MARKERS that are not present in OUTPUT."
  (cl-remove-if (lambda (marker) (string-match-p (regexp-quote marker) output))
                markers))

(defun gr-gate-run-check (check)
  "Run one CHECK and return non-nil on success."
  (let* ((name (plist-get check :name))
         (script (plist-get check :script))
         (args (plist-get check :args))
         (markers (plist-get check :markers))
         (buffer (get-buffer-create (format " *gr-gate-%s*" name)))
         (process-environment
          (append '("SUMI_AUDIO=0"
                    "GR_PLAY_ANIMATION_DELAY=30"
                    "GR_PLAY_DIRECT_BIN=1")
                  (cl-remove-if
                   (lambda (entry)
                     (string-match-p
                      "\\`\\(?:SUMI_AUDIO\\|GR_PLAY_ANIMATION_DELAY\\|GR_PLAY_DIRECT_BIN\\|GR_LIVE_FEED_PROFILE\\|GR_PLAY_FUNC_PROFILE\\|GR_LIVE_FEED_ATOMIC_WRITES\\)="
                      entry))
                   process-environment)))
         (status nil))
    (with-current-buffer buffer
      (erase-buffer))
    (setq status
          (let ((default-directory gr-gate-repo-root))
            (apply #'call-process
                   gr-gate-emacs
                   nil
                   buffer
                   nil
                   (append (list "-Q" "--batch" "-l" script) args))))
    (let* ((output (with-current-buffer buffer (buffer-string)))
           (missing (gr-gate-missing-markers output markers)))
    (if (and (eq status 0) (null missing))
        (progn
          (princ (format "ELISP-PORT-GATE-%s-OK\n" (upcase name)))
          t)
      (princ (format "ELISP-PORT-GATE-%s-FAIL status=%S missing=%S\n"
                     (upcase name) status missing))
      (princ output)
      nil))))

(defun gr-gate-main ()
  "Run all Elisp port gate checks."
  (let ((ok t))
    (dolist (check gr-gate-checks)
      (unless (gr-gate-run-check check)
        (setq ok nil)))
    (if ok
        (princ "ELISP-PORT-GATE-OK\n")
      (princ "ELISP-PORT-GATE-FAIL\n")
      (kill-emacs 1))))

(when noninteractive
  (gr-gate-main))

;;; run-elisp-port-gate.el ends here
