;;; run-map-dump.el --- dump func337 with a real captured map state -*- coding: utf-8; -*-
;; Load order (concatenate, then `emacs -Q --batch -l`):
;;   game-runner.el gamedata-simple.el gamedata-conditional.el
;;   gamedata-state.el sumi-json.el this.
;;
;; gr-seed-state (gamedata-state.el) seeds gr-state with a live-captured
;; dungeon-floor snapshot (Gvar slot mapping mirrored from
;; src/renderer/nelisp_bridge/stateDiffRunner.ts). With that state in place,
;; func324's map-tile loop (called from func324X, called from func337) has
;; real var_71/var_87/var_346/var_35/var_36/var_66/var_67 etc. to read, so the
;; dumped sumi frame should contain real gui-draw-image-scaled map tile blits
;; instead of only fill-rect/text.
;;
;; NOTE: `gr-dump-sumi' calls `gr-reset' internally right before running NAME,
;; which would wipe any state seeded beforehand -- so the seed has to run
;; *after* that internal reset. Pass `gr-seed-state' in as SEED-FN rather than
;; calling (gr-reset) (gr-seed-state) here first (see sumi-json.el).

(gr-dump-sumi "func337" 200000 #'gr-seed-state)
