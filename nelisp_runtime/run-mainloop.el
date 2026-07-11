;;; run-mainloop.el --- scripted pure-elisp main loop verification -*- coding: utf-8; -*-

(defconst gr-mainloop-runtime-dir
  (file-name-directory (or load-file-name buffer-file-name)))

(defconst gr-mainloop-build-dir
  (expand-file-name "../build" gr-mainloop-runtime-dir))

(defvar gr-mainloop-current-key 0)
(defvar gr-mainloop-frame-count 0)

(load-file (expand-file-name "game-runner.el" gr-mainloop-runtime-dir))
(load-file (expand-file-name "gamedata-simple.el" gr-mainloop-runtime-dir))
(load-file (expand-file-name "gamedata-conditional.el" gr-mainloop-runtime-dir))
(when (fboundp 'gr-install-live-native-overrides)
  (gr-install-live-native-overrides))
(setq gr-worldgen-autorun nil)
(load-file (expand-file-name "run-worldgen.el" gr-mainloop-runtime-dir))

(defun gr-mainloop-read-key-state (keycode)
  "Return one scripted key state for KEYCODE."
  (if (equal (gr-num keycode) gr-mainloop-current-key) 1 0))

(defun gr-mainloop-reset-key (_keycode)
  "Keep the scripted key stable for this frame."
  0)

(defun gr-mainloop-tile-at (x y)
  "Return map tile at X,Y."
  (gr-index-ref (gr-index-ref (gr-get 71) x) y))

(defun gr-mainloop-floor-p (tile)
  "Return non-nil when TILE is walkable floor for this probe."
  (and (numberp tile) (>= tile 1) (<= tile 12)))

(defun gr-mainloop-find-step ()
  "Return (START-X START-Y DEST-X DEST-Y KEY DIR) for one legal step."
  (let ((limit-x (gr-num (or (gr-get 31) 0)))
        (limit-y (gr-num (or (gr-get 32) 0)))
        (x 1)
        (y 1)
        (result nil))
    (while (and (< y (1- limit-y)) (null result))
      (setq x 1)
      (while (and (< x (1- limit-x)) (null result))
        (when (gr-mainloop-floor-p (gr-mainloop-tile-at x y))
          (dolist (candidate `((0 1 ,(gr-get 650) 2)
                               (1 0 ,(gr-get 648) 6)
                               (-1 0 ,(gr-get 647) 4)
                               (0 -1 ,(gr-get 649) 8)))
            (let* ((dx (nth 0 candidate))
                   (dy (nth 1 candidate))
                   (nx (+ x dx))
                   (ny (+ y dy)))
              (when (and (null result)
                         (gr-mainloop-floor-p (gr-mainloop-tile-at nx ny)))
                (setq result (list x y nx ny (nth 2 candidate) (nth 3 candidate)))))))
        (setq x (1+ x)))
      (setq y (1+ y)))
    result))

(defun gr-mainloop-clear-volatile-state ()
  "Clear interaction flags that would redirect the main loop."
  (dolist (slot '(127 128 132 154 195 196 198 217 220 221 231 243 405 407
                  498 499 508 509 548 630 632 633 634 635 636 755 765
                  900 901 902 903 904 905 1189 1190 1191 1192 1193 1194
                  1195 1196 1197 1198 1200 1201 1202 1203 1204 1205 1206
                  1207 1208 1209 1210 1211 1212 1214 1218 1220 1224))
    (gr-set slot 0))
  (dolist (name '("key_Z_on" "key_X_on" "key_A_on" "key_S_on" "key_C_on"
                  "key_F_on" "key_Shift_on" "open_item_menue"
                  "time_paused" "time_paused_count"))
    (gr-set name 0)))

(defun gr-mainloop-bootstrap (test-root)
  "Initialize runtime and generate one dungeon floor under TEST-ROOT."
  (make-directory test-root t)
  (let ((source-00 (expand-file-name "00.dat" gr-data-root))
        (target-00 (expand-file-name "00.dat" test-root)))
    (when (file-exists-p source-00)
      (copy-file source-00 target-00 t)))
  (setq gr-data-root (or (getenv "GR_DATA_ROOT") test-root))
  (setq max-lisp-eval-depth 200000)
  (setq max-specpdl-size 200000)
  (setq gr-depth-limit 5000)
  (setq gr-step-budget 2000000)
  (random "run-mainloop")
  (gr-reset)
  (gr-set "stat" 1)
  (gr-set "hwnd" 0)
  (let ((saved-func139A (gethash "func139A" gr-native-funcs)))
    (unwind-protect
        (progn
          (gr-defnative "func139A" (lambda (&rest _args) nil))
          (gr-init-main-bootstrap-state)
          (gr-run-func "func004")
          (gr-capture-main-bootstrap-state))
      (if saved-func139A
          (gr-defnative "func139A" saved-func139A)
        (remhash "func139A" gr-native-funcs))))
  (gr-worldgen-seed-base-state)
  (gr-worldgen-run t)
  (gr-restore-main-bootstrap-state)
  (gr-mainloop-clear-volatile-state))

(defun gr-mainloop-run-step (step)
  "Run one real input decode and movement handoff for STEP."
  (let ((saved-func009 (gethash "func009" gr-native-funcs))
        (saved-read gr-read-key-state-fn)
        (saved-reset gr-reset-key-fn)
        (err nil)
        (trace nil))
    (setq gr-mainloop-current-key (nth 4 step)
          gr-mainloop-frame-count 0
          gr-mainloop-orig-func009 saved-func009
          gr-read-key-state-fn #'gr-mainloop-read-key-state
          gr-reset-key-fn #'gr-mainloop-reset-key
          gr-sumi nil
          gr-trace nil
          gr-missing nil
          gr-step-count 0
          gr-step-budget 50000)
    (gr-set 66 (nth 0 step))
    (gr-set 67 (nth 1 step))
    (gr-set 236 (nth 0 step))
    (gr-set 237 (nth 1 step))
    (gr-set 199 (nth 5 step))
    (gr-mainloop-clear-volatile-state)
    (unwind-protect
        (progn
          (gr-defnative "func009"
                        (lambda (&rest _args)
                          (setq gr-mainloop-frame-count
                                (1+ gr-mainloop-frame-count))
                          nil))
          (condition-case caught
              (progn
                (gr-run-func "func080")
                (cond
                 ((equal (gr-get 254) 1)
                  (gr-set 66 (1- (gr-num (gr-get 66))))
                  (gr-set 199 4))
                 ((equal (gr-get 257) 1)
                  (gr-set 66 (1+ (gr-num (gr-get 66))))
                  (gr-set 199 6))
                 ((equal (gr-get 255) 1)
                  (gr-set 67 (1- (gr-num (gr-get 67))))
                  (gr-set 199 8))
                 ((equal (gr-get 259) 1)
                  (gr-set 67 (1+ (gr-num (gr-get 67))))
                  (gr-set 199 2)))
                (gr-run-func "func015"))
            (error
             (setq err caught)))
          (setq trace (reverse gr-trace))
          (list :start (list (nth 0 step) (nth 1 step))
                :dest (list (nth 2 step) (nth 3 step))
                :end (list (gr-get 66) (gr-get 67))
                :key (nth 4 step)
                :dir (nth 5 step)
                :flags (list (gr-get 254) (gr-get 257) (gr-get 255) (gr-get 259))
                :frames gr-mainloop-frame-count
                :turn (gr-get 217)
                :trace trace
                :missing (reverse gr-missing)
                :error err))
      (if saved-func009
          (gr-defnative "func009" saved-func009)
        (remhash "func009" gr-native-funcs))
      (setq gr-read-key-state-fn saved-read
            gr-reset-key-fn saved-reset
            gr-mainloop-current-key 0))))

(let* ((repo-root (expand-file-name ".." gr-mainloop-runtime-dir))
       (test-root (expand-file-name "build/mainloop-test-data" repo-root))
       (step nil)
       (result nil)
       (ok nil))
  (gr-mainloop-bootstrap test-root)
  (setq step (gr-mainloop-find-step))
  (unless step
    (error "mainloop probe could not find a legal step"))
  (setq result (gr-mainloop-run-step step))
  (setq ok (and (equal (plist-get result :end) (plist-get result :dest))
                (member 19 (plist-get result :trace))
                (> (gr-num (plist-get result :frames)) 0)
                (null (plist-get result :missing))
                (null (plist-get result :error))))
  (princ (format "MAINLOOP-STEP %S\n" result))
  (if ok
      (princ "MAINLOOP-OK\n")
    (princ "MAINLOOP-FAIL\n")
    (kill-emacs 1)))

;;; run-mainloop.el ends here
