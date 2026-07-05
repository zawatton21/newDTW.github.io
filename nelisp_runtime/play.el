;;; play.el --- interactive pure-elisp play driver -*- coding: utf-8; -*-
;;
;; HUMAN RUNBOOK (5 terminals, run from the repo root):
;;
;; 1. Bridge
;;    node C:/Users/kuroz/Cowork/Notes/dev/sumi/backends/cairo-elisp/sprite-bridge.js
;;
;; 2. Native watcher window
;;    C:/Users/kuroz/AppData/Local/Temp/sumi-sprite-live.exe
;;
;; 3. Frame feeder
;;    node tools/live_feed_loop.js
;;
;; 4. Play driver
;;    Copy-Item 'C:/Users/kuroz/Cowork/Notes/dev/newDTW-nelisp/nelisp_runtime/gamedata-state.el' 'nelisp_runtime/gamedata-state.el' -Force
;;    $env:NODE_PATH='C:/Users/kuroz/Cowork/Notes/dev/newDTW-nelisp/node_modules'
;;    node tools/statediff_to_elisp.mjs nelisp_runtime/gamedata-simple.el
;;    node tools/generate_nelisp_conditional_runtime.js --names-file build/nelisp-conditional-runtime-names.txt
;;    Get-Content nelisp_runtime/game-runner.el,nelisp_runtime/gamedata-simple.el,nelisp_runtime/gamedata-conditional.el,nelisp_runtime/gamedata-state.el,nelisp_runtime/sumi-json.el,nelisp_runtime/play.el | Set-Content build/_play-bundle.el
;;    emacs -Q --batch --eval "(progn (prefer-coding-system 'utf-8) (setq coding-system-for-write 'utf-8))" -l build/_play-bundle.el
;;
;; 5. Real keyboard input server
;;    node tools/key_input_server.js

(defconst gr-play-build-dir
  (expand-file-name "../build" (file-name-directory (or load-file-name buffer-file-name))))

(defconst gr-play-key-state-path
  (expand-file-name "key-state.txt" gr-play-build-dir))

(defconst gr-play-frame-path
  (expand-file-name "frame-current.json" gr-play-build-dir))

(defvar gr-play-duration-seconds 300
  "How long the interactive play loop runs before exiting.")

(defvar gr-play-report-every 25
  "Print one status line every N frames.")

(defvar gr-play-key-stale-seconds 0.25
  "Treat key-state.txt as stale after this many seconds.")

(defvar gr-play-idle-sleep-seconds 0.04
  "Sleep this long when no key is currently held.")

(defvar gr-play-frame-count 0)
(defvar gr-play-start-time 0.0)
(defvar gr-play-last-token "IDLE")
(defvar gr-play-last-seq 0)
(defvar gr-play-held-codes nil)
(defvar gr-play-quit-requested nil)
(defvar gr-play-orig-func009 nil)
(defvar gr-play-orig-func337 nil)
(defvar gr-play-worldgen-saved-func009 nil)
(defvar gr-play-saved-native-func015 nil)
(defvar gr-play-saved-native-func338 nil)
(defvar gr-play-redraw-count 0)
(defvar gr-play-loop-count 0)
(defvar gr-play-dumped-count 0)
(defvar gr-play-skipped-count 0)
(defvar gr-play-draw-seconds 0.0)
(defvar gr-play-serialize-seconds 0.0)
(defvar gr-play-io-seconds 0.0)
(defvar gr-play-last-record-count nil)
(defvar gr-play-last-player-x nil)
(defvar gr-play-last-player-y nil)
(defvar gr-play-last-floor nil)
(defvar gr-play-last-dungeon nil)
(defvar gr-play-redraw-key-queries nil)

(defun gr-play-held-codes-list ()
  "Return the current held keycodes as a sorted list."
  (let ((out nil))
    (when (hash-table-p gr-play-held-codes)
      (maphash (lambda (key _value)
                 (push key out))
               gr-play-held-codes))
    (sort out #'<)))

(defun gr-play-worldgen-seed-base-state ()
  "Seed the minimum pre-worldgen state used by func006."
  (gr-set 20 50)
  (gr-set 31 56)
  (gr-set 32 38)
  (gr-set 33 56)
  (gr-set 34 37)
  (gr-set 35 40)
  (gr-set 36 40)
  (gr-set 37 6)
  (gr-set 38 6)
  (gr-set 68 0)
  (gr-set 69 0)
  (gr-set 70 0)
  (gr-set 85 0)
  (gr-set 86 0)
  (gr-set 95 0)
  (gr-set 96 0)
  (gr-set 107 0)
  (gr-set 200 0)
  (gr-set 201 0)
  (gr-set 202 0)
  (gr-set 203 0)
  (gr-set 224 20)
  (gr-set 247 1)
  (gr-set 3121 0)
  (gr-set 211 15)
  (gr-set 212 0)
  (gr-set 350 100)
  (gr-set 352 15)
  (gr-set 565 8)
  (gr-set 566 8)
  (gr-set 567 100)
  (gr-set 568 0)
  (gr-set 580 0)
  (gr-set 581 0)
  (gr-set 647 37)
  (gr-set 648 39)
  (gr-set 649 38)
  (gr-set 650 40)
  (gr-set 651 36)
  (gr-set 652 33)
  (gr-set 653 35)
  (gr-set 654 34)
  (gr-set 655 90)
  (gr-set 656 88)
  (gr-set 657 65)
  (gr-set 658 83)
  (gr-set 659 16)
  (gr-set 660 67)
  (gr-set 662 (+ 8192 2048 4096 16384 65536 32768 131072 262144 524288 1048576))
  (gr-set 692 8192)
  (gr-set 693 2048)
  (gr-set 694 4096)
  (gr-set 695 16384)
  (gr-set 696 65536)
  (gr-set 697 32768)
  (gr-set 698 131072)
  (gr-set 699 262144)
  (gr-set 700 524288)
  (gr-set 701 1048576)
  (gr-set "special_floor" 0)
  (gr-set "dungeon_number" 1)
  (gr-set "current_floor" 1)
  (gr-set "current_level" 1)
  (gr-set "dungeon1_floor" 1)
  (gr-set "dungeon2_floor" 0)
  (gr-set "dungeon3_floor" 0)
  (gr-set "time_paused" 0)
  (gr-set "time_paused_count" 0)
  (gr-set "wallet" 0)
  (gr-set "count_buying_price" 0)
  (gr-set "y_axis_map_image" 0)
  (gr-set "open_item_menue" 0)
  (gr-set "taskact1_on" 0)
  (gr-set "equip_disc" (gr-make-array 500))
  (gr-set 493 (gr-make-array 20))
  (gr-set 704 (gr-make-array 300))
  (gr-set 25 (gr-make-array 30))
  (gr-set 26 (gr-make-array 30))
  (gr-set 27 (gr-make-array 30))
  (let ((var691 (gr-make-array 20))
        (var664 (gr-make-array 20)))
    (aset var691 1 90)
    (aset var691 2 88)
    (aset var691 3 65)
    (aset var691 4 83)
    (aset var691 5 16)
    (aset var691 6 67)
    (aset var664 1 8192)
    (aset var664 2 2048)
    (aset var664 3 4096)
    (aset var664 4 16384)
    (aset var664 5 65536)
    (aset var664 6 32768)
    (aset var664 7 131072)
    (aset var664 8 262144)
    (aset var664 9 524288)
    (aset var664 10 1048576)
    (gr-set 691 var691)
    (gr-set 664 var664)))

(defun gr-play-parse-int-list (parts)
  "Convert PARTS to a list of positive integers."
  (let ((out nil)
        (n nil))
    (dolist (part parts)
      (setq n (string-to-number part))
      (when (> n 0)
        (push n out)))
    (nreverse out)))

(defun gr-play-read-key-record ()
  "Read build/key-state.txt in key_input_server format."
  (when (file-exists-p gr-play-key-state-path)
    (condition-case nil
        (with-temp-buffer
          (insert-file-contents gr-play-key-state-path)
          (let* ((raw (buffer-string))
                 (attrs (file-attributes gr-play-key-state-path))
                 (mtime (and attrs (file-attribute-modification-time attrs)))
                 (lines (split-string raw "\r?\n" t))
                 (header (and lines (split-string (car lines) "[ \t]+" t)))
                 (token (and (= (length header) 2) (nth 0 header)))
                 (seq (and (= (length header) 2) (string-to-number (nth 1 header))))
                 (keycode (and (nth 1 lines) (string-to-number (nth 1 lines))))
                 (held-line (and (nth 2 lines) (split-string (nth 2 lines) "[ \t]+" t))))
            (when token
              (list :token token
                    :seq seq
                    :keycode keycode
                    :held (if (and held-line (equal (car held-line) "HELD"))
                              (gr-play-parse-int-list (cdr held-line))
                            nil)
                    :mtime mtime))))
      (error nil))))

(defun gr-play-record-stale-p (record)
  "Return non-nil if RECORD is missing or older than the stale window."
  (let ((mtime (and record (plist-get record :mtime))))
    (or (null record)
        (null mtime)
        (> (- (float-time) (float-time mtime)) gr-play-key-stale-seconds))))

(defun gr-play-refresh-input ()
  "Refresh held keys from the current key-state.txt snapshot."
  (let ((record (gr-play-read-key-record))
        (held nil))
    (if (gr-play-record-stale-p record)
        (progn
          (setq gr-play-held-codes (make-hash-table :test 'equal))
          (setq gr-play-last-token "IDLE")
          nil)
      (progn
        (setq gr-play-last-token (or (plist-get record :token) "IDLE"))
        (setq gr-play-last-seq (or (plist-get record :seq) gr-play-last-seq))
        (setq gr-play-held-codes (make-hash-table :test 'equal))
        (setq held (plist-get record :held))
        (dolist (code held)
          (puthash code 1 gr-play-held-codes))
        (when (equal gr-play-last-token "QUIT")
          (setq gr-play-quit-requested t))
        record))))

(defun gr-play-read-key-state (keycode)
  "Return the current held state for KEYCODE from the live key file."
  (let ((record (gr-play-refresh-input))
        (idx (gr-num keycode))
        (value 0))
    (unless (hash-table-p gr-play-held-codes)
      (setq gr-play-held-codes (make-hash-table :test 'equal)))
    (when (or gr-play-quit-requested
              (and (> gr-play-start-time 0)
                   (>= (- (float-time) gr-play-start-time) gr-play-duration-seconds)))
      (throw 'gr-play-frame-stop 'done))
    (when (or (null record)
              (= 0 (hash-table-count gr-play-held-codes)))
      (sleep-for gr-play-idle-sleep-seconds))
    (setq value (gethash idx gr-play-held-codes 0))
    value))

(defun gr-play-reset-key (keycode)
  "Mirror ResetKey for the live key source."
  (when (hash-table-p gr-play-held-codes)
    (remhash (gr-num keycode) gr-play-held-codes))
  0)

(defun gr-play-write-frame (json)
  "Atomically write JSON to build/frame-current.json."
  (let ((tmp-path (concat gr-play-frame-path ".tmp"))
        (coding-system-for-write 'utf-8))
    (unless (file-directory-p (file-name-directory gr-play-frame-path))
      (make-directory (file-name-directory gr-play-frame-path) t))
    (write-region json nil tmp-path nil 'silent)
    (rename-file tmp-path gr-play-frame-path t)))

(defun gr-play-snapshot-state ()
  "Return the stable player/floor state for frame de-duplication."
  (list (gr-num (or (gr-get 66) 0))
        (gr-num (or (gr-get 67) 0))
        (gr-num (or (gr-get "current_floor") 0))
        (gr-num (or (gr-get "dungeon_number") 0))))

(defun gr-play-snapshot-unchanged-p (record-count snapshot)
  "Return non-nil when RECORD-COUNT and SNAPSHOT match the last dump."
  (and (equal gr-play-last-record-count record-count)
       (equal gr-play-last-player-x (nth 0 snapshot))
       (equal gr-play-last-player-y (nth 1 snapshot))
       (equal gr-play-last-floor (nth 2 snapshot))
       (equal gr-play-last-dungeon (nth 3 snapshot))))

(defun gr-play-record-snapshot (record-count snapshot)
  "Persist RECORD-COUNT and SNAPSHOT as the latest dumped frame state."
  (setq gr-play-last-record-count record-count
        gr-play-last-player-x (nth 0 snapshot)
        gr-play-last-player-y (nth 1 snapshot)
        gr-play-last-floor (nth 2 snapshot)
        gr-play-last-dungeon (nth 3 snapshot)))

(defun gr-play-with-loop-disabled (thunk)
  "Run THUNK with func009 temporarily replaced by a no-op."
  (setq gr-play-worldgen-saved-func009 (gethash "func009" gr-native-funcs))
  (unwind-protect
      (progn
        (gr-defnative "func009" (lambda (&rest _args) nil))
        (funcall thunk))
    (when gr-play-worldgen-saved-func009
      (gr-defnative "func009" gr-play-worldgen-saved-func009))
    (setq gr-play-worldgen-saved-func009 nil)))

(defun gr-play-func015 (&rest _args)
  "Minimal local movement continuation."
  (push 15 gr-trace)
  (gr-run-func "func019"))

(defun gr-play-func338 (&rest _args)
  "No-op render helper."
  (push 338 gr-trace)
  nil)

(defun gr-play-install-local-missing-natives ()
  "Install local natives needed by the play loop."
  (setq gr-play-saved-native-func015 (gethash "func015" gr-native-funcs))
  (setq gr-play-saved-native-func338 (gethash "func338" gr-native-funcs))
  (gr-defnative "func015" #'gr-play-func015)
  (gr-defnative "func338" #'gr-play-func338))

(defun gr-play-restore-local-missing-natives ()
  "Restore natives replaced by the play loop."
  (if gr-play-saved-native-func015
      (gr-defnative "func015" gr-play-saved-native-func015)
    (when gr-native-funcs
      (remhash "func015" gr-native-funcs)))
  (if gr-play-saved-native-func338
      (gr-defnative "func338" gr-play-saved-native-func338)
    (when gr-native-funcs
      (remhash "func338" gr-native-funcs)))
  (setq gr-play-saved-native-func015 nil)
  (setq gr-play-saved-native-func338 nil))

(defun gr-play-log-status ()
  "Print one periodic movement/status line."
  (princ (format "PLAY-STATUS redraw=%d loop=%d dumped=%d skipped=%d player=%s,%s floor=%s token=%s\n"
                 gr-play-redraw-count
                 gr-play-loop-count
                 gr-play-dumped-count
                 gr-play-skipped-count
                 (or (gr-get 66) 0)
                 (or (gr-get 67) 0)
                 (or (gr-get "current_floor") 0)
                 gr-play-last-token)))

(defun gr-play-func337-wrapper (&rest args)
  "Dump one frame per redraw by wrapping the real func337."
  (let ((draw-start (float-time))
        (serialize-start 0.0)
        (io-start 0.0)
        (record-count 0)
        (snapshot nil)
        (json nil)
        (result nil))
    (setq gr-play-redraw-key-queries nil)
    (setq gr-sumi nil)
    (setq result (apply gr-play-orig-func337 args))
    (setq gr-play-draw-seconds
          (+ gr-play-draw-seconds (- (float-time) draw-start)))
    (setq gr-play-redraw-count (1+ gr-play-redraw-count))
    (setq record-count (length gr-sumi))
    (setq snapshot (gr-play-snapshot-state))
    (if (or (= record-count 0)
            (gr-play-snapshot-unchanged-p record-count snapshot))
        (setq gr-play-skipped-count (1+ gr-play-skipped-count))
      (setq serialize-start (float-time))
      (setq json (gr-sumi-to-json))
      (setq gr-play-serialize-seconds
            (+ gr-play-serialize-seconds (- (float-time) serialize-start)))
      (setq io-start (float-time))
      (gr-play-write-frame json)
      (setq gr-play-io-seconds
            (+ gr-play-io-seconds (- (float-time) io-start)))
      (setq gr-play-dumped-count (1+ gr-play-dumped-count))
      (gr-play-record-snapshot record-count snapshot))
    (when (= 0 (mod gr-play-redraw-count gr-play-report-every))
      (gr-play-log-status))
    result))

(defun gr-play-func009-wrapper (&rest args)
  "Loop pacing/termination wrapper around the real func009."
  (let ((stop nil))
    (setq gr-play-loop-count (1+ gr-play-loop-count))
    (setq gr-step-count 0)
    (condition-case err
        (progn
          (setq gr-trace nil gr-missing nil)
          (setq stop (catch 'gr-play-frame-stop
                       (apply gr-play-orig-func009 args)
                       nil))
          nil)
      (error
       (princ (format "PLAY-FRAME-ERROR loop=%d redraw=%d %s\n"
                      gr-play-loop-count
                      gr-play-redraw-count
                      (error-message-string err)))))
    (when (or stop
              gr-play-quit-requested
              (>= (- (float-time) gr-play-start-time) gr-play-duration-seconds))
      (throw 'gr-play-stop 'done)))
  nil)

(let ((old-budget gr-step-budget)
      (old-depth gr-depth-limit))
  (unwind-protect
      (progn
        (setq gr-step-budget 2000000)
        (setq gr-depth-limit 400)
        (setq gr-play-frame-count 0
              gr-play-redraw-count 0
              gr-play-loop-count 0
              gr-play-dumped-count 0
              gr-play-skipped-count 0
              gr-play-draw-seconds 0.0
              gr-play-serialize-seconds 0.0
              gr-play-io-seconds 0.0
              gr-play-last-record-count nil
              gr-play-last-player-x nil
              gr-play-last-player-y nil
              gr-play-last-floor nil
              gr-play-last-dungeon nil
              gr-play-quit-requested nil
              gr-play-last-seq 0
              gr-play-last-token "IDLE"
              gr-play-held-codes (make-hash-table :test 'equal))

        (gr-reset)
        (gr-play-worldgen-seed-base-state)
        (setq gr-step-count 0)
        (gr-play-with-loop-disabled
         (lambda ()
           (condition-case err
               (gr-run-func "func006")
             (error
              (princ (format "PLAY-WORLDGEN-ERROR %s\n" (error-message-string err)))))))

        (gr-play-install-local-missing-natives)
        (setq gr-play-orig-func009 (gethash "func009" gr-native-funcs))
        (setq gr-play-orig-func337 (gethash "func337" gr-native-funcs))
        (setq gr-read-key-state-fn #'gr-play-read-key-state)
        (setq gr-reset-key-fn #'gr-play-reset-key)
        (setq gr-play-start-time (float-time))
        (princ (format "PLAY-START player=%s,%s duration=%s\n"
                       (or (gr-get 66) 0)
                       (or (gr-get 67) 0)
                       gr-play-duration-seconds))
        (when gr-play-orig-func009
          (gr-defnative "func009" #'gr-play-func009-wrapper))
        (when gr-play-orig-func337
          (gr-defnative "func337" #'gr-play-func337-wrapper))
        (catch 'gr-play-stop
          (gr-run-func "func009"))
        (setq gr-play-frame-count gr-play-redraw-count)
        (princ
         (format
          "PLAY-FPS redraw=%d dumped=%d elapsed=%.3f fps=%.3f draw=%.3f serialize=%.3f io=%.3f\n"
          gr-play-redraw-count
          gr-play-dumped-count
          (max 0.001 (- (float-time) gr-play-start-time))
          (/ (float gr-play-redraw-count)
             (max 0.001 (- (float-time) gr-play-start-time)))
          gr-play-draw-seconds
          gr-play-serialize-seconds
          gr-play-io-seconds))
        (princ (format "PLAY-DONE %d\n" gr-play-redraw-count)))
    (setq gr-step-budget old-budget)
    (setq gr-depth-limit old-depth)
    (setq gr-read-key-state-fn nil)
    (setq gr-reset-key-fn nil)
    (gr-play-restore-local-missing-natives)
    (when gr-play-orig-func337
      (gr-defnative "func337" gr-play-orig-func337))
    (when gr-play-orig-func009
      (gr-defnative "func009" gr-play-orig-func009))))

(provide 'play)
