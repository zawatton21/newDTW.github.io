;;; run-mainloop.el --- scripted pure-elisp main loop verification -*- coding: utf-8; -*-

(defconst gr-mainloop-build-dir
  (expand-file-name "../build" (file-name-directory (or load-file-name buffer-file-name))))

(defconst gr-mainloop-key-state-path
  (expand-file-name "key-state.txt" gr-mainloop-build-dir))

(defvar gr-mainloop-last-seq 0)
(defvar gr-mainloop-last-token "IDLE")
(defvar gr-mainloop-last-keycode 0)
(defvar gr-mainloop-held-codes nil)
(defvar gr-mainloop-frame-count 0)
(defvar gr-mainloop-frame-limit 16)
(defvar gr-mainloop-trace-lines nil)
(defvar gr-mainloop-orig-func009 nil)
(defvar gr-mainloop-diag-mode t
  "When non-nil, print per-query key diagnostics for func080 tracing.")
(defvar gr-mainloop-script-events nil)
(defvar gr-mainloop-script-index 0)
(defvar gr-mainloop-script-seq 0)
(defvar gr-mainloop-script-log nil)
(defvar gr-mainloop-query-log nil)
(defvar gr-mainloop-current-script-name nil)
(defvar gr-mainloop-current-script-path nil)
(defvar gr-mainloop-worldgen-saved-func009 nil)
(defvar gr-mainloop-saved-native-func015 nil)
(defvar gr-mainloop-saved-native-func338 nil)
(defvar gr-mainloop-seeded-state nil)

(defun gr-mainloop-clone-value (value)
  "Deep-copy VALUE for deterministic script replays."
  (cond
   ((hash-table-p value)
    (let ((copy (make-hash-table :test 'equal)))
      (maphash (lambda (k v)
                 (puthash k (gr-mainloop-clone-value v) copy))
               value)
      copy))
   ((vectorp value)
    (let* ((len (length value))
           (copy (make-vector len 0))
           (idx 0))
      (while (< idx len)
        (aset copy idx (gr-mainloop-clone-value (aref value idx)))
        (setq idx (1+ idx)))
      copy))
   ((listp value)
    (mapcar #'gr-mainloop-clone-value value))
   (t value)))

(defun gr-mainloop-save-seeded-state ()
  "Capture the seeded worldgen state after bootstrap."
  (setq gr-mainloop-seeded-state (gr-mainloop-clone-value gr-state)))

(defun gr-mainloop-restore-seeded-state ()
  "Restore the captured seeded state before each scripted replay."
  (setq gr-state (gr-mainloop-clone-value gr-mainloop-seeded-state)))

(defun gr-mainloop-worldgen-seed-base-state ()
  "Seed the minimum pre-worldgen state used by run-worldgen.el."
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
  (gr-set "special_floor" 0)
  (gr-set "dungeon_number" 1)
  (gr-set "current_floor" 1)
  (gr-set "dungeon1_floor" 1)
  (gr-set "dungeon2_floor" 0)
  (gr-set "dungeon3_floor" 0)
  (gr-set "time_paused" 0)
  (gr-set "time_paused_count" 0)
  (gr-set "count_buying_price" 0)
  (gr-set "y_axis_map_image" 0)
  (gr-set "open_item_menue" 0)
  (gr-set "taskact1_on" 0)
  (gr-set "equip_disc" (gr-make-array 500))
  (gr-set 493 (gr-make-array 20))
  (gr-set 704 (gr-make-array 300))
  (gr-set 25 (gr-make-array 30))
  (gr-set 26 (gr-make-array 30))
  (gr-set 27 (gr-make-array 30)))

(defun gr-mainloop-parse-int-list (parts)
  "Convert PARTS to a list of integers, skipping invalid items."
  (let ((out nil)
        (n nil))
    (dolist (part parts)
      (setq n (string-to-number part))
      (when (> n 0)
        (push n out)))
    (nreverse out)))

(defun gr-mainloop-now-string ()
  "Return a stable timestamp string for diagnostics."
  (format-time-string "%Y-%m-%dT%H:%M:%S.%3N" (current-time)))

(defun gr-mainloop-read-key-file ()
  "Read build/key-state.txt in the extended token/keycode/HELD format."
  (when (file-exists-p gr-mainloop-key-state-path)
    (condition-case nil
        (with-temp-buffer
          (insert-file-contents gr-mainloop-key-state-path)
          (let* ((raw (buffer-string))
                 (attrs (file-attributes gr-mainloop-key-state-path))
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
                              (gr-mainloop-parse-int-list (cdr held-line))
                            nil)
                    :raw raw
                    :mtime (and mtime (format-time-string "%Y-%m-%dT%H:%M:%S.%3N" mtime))))))
      (error nil))))

(defun gr-mainloop-refresh-input ()
  "Load the next scripted key-state snapshot when SEQ advances."
  (let ((record (gr-mainloop-read-key-file))
        (held nil))
    (when (and record (> (or (plist-get record :seq) 0) gr-mainloop-last-seq))
      (setq gr-mainloop-last-seq (plist-get record :seq))
      (setq gr-mainloop-last-token (plist-get record :token))
      (setq gr-mainloop-last-keycode (plist-get record :keycode))
      (setq gr-mainloop-held-codes (make-hash-table :test 'equal))
      (setq held (plist-get record :held))
      (dolist (code held)
        (puthash code 1 gr-mainloop-held-codes))
      record)))

(defun gr-mainloop-write-key-record (token keycode held note)
  "Write one scripted input snapshot and record NOTE for diagnostics."
  (let* ((tmp-path (concat gr-mainloop-key-state-path ".tmp"))
         (coding-system-for-write 'utf-8)
         (held-line (if held
                        (format "HELD %s" (mapconcat #'number-to-string held " "))
                      "HELD"))
         (raw nil)
         (seq nil)
         (line nil))
    (make-directory gr-mainloop-build-dir t)
    (setq gr-mainloop-script-seq (1+ gr-mainloop-script-seq))
    (setq seq gr-mainloop-script-seq)
    (setq raw (format "%s %s\n%s\n%s\n" token seq keycode held-line))
    (write-region raw nil tmp-path nil 'silent)
    (rename-file tmp-path gr-mainloop-key-state-path t)
    (setq line (format "writer script=%s frame=%d ts=%s seq=%d token=%s key=%s held=%s note=%s"
                       gr-mainloop-current-script-name
                       gr-mainloop-frame-count
                       (gr-mainloop-now-string)
                       seq token keycode held note))
    (push line gr-mainloop-script-log)
    (when gr-mainloop-diag-mode
      (princ (format "%s\n" line)))))

(defun gr-mainloop-script-events-for (moves)
  "Expand MOVES into press/release snapshots."
  (let ((events nil))
    (dolist (move moves)
      (push (list :token (car move)
                  :keycode (cdr move)
                  :held (list (cdr move))
                  :note "press")
            events)
      (push (list :token "IDLE"
                  :keycode 0
                  :held nil
                  :note "release")
            events))
    (nreverse events)))

(defun gr-mainloop-install-script (name moves)
  "Install a scripted sequence NAME with MOVES."
  (setq gr-mainloop-current-script-name name)
  (setq gr-mainloop-script-events (gr-mainloop-script-events-for moves))
  (setq gr-mainloop-script-index 0)
  (setq gr-mainloop-script-seq 0)
  (setq gr-mainloop-script-log nil)
  (setq gr-mainloop-query-log nil)
  (setq gr-mainloop-last-seq 0)
  (setq gr-mainloop-last-token "IDLE")
  (setq gr-mainloop-last-keycode 0)
  (setq gr-mainloop-held-codes (make-hash-table :test 'equal))
  (gr-mainloop-write-key-record "IDLE" 0 nil "initial"))

(defun gr-mainloop-advance-script-frame ()
  "Publish the next scripted key snapshot for the current frame."
  (let ((event (nth gr-mainloop-script-index gr-mainloop-script-events)))
    (if event
        (progn
          (setq gr-mainloop-script-index (1+ gr-mainloop-script-index))
          (gr-mainloop-write-key-record (plist-get event :token)
                                        (plist-get event :keycode)
                                        (plist-get event :held)
                                        (plist-get event :note)))
      (when (or (not (equal gr-mainloop-last-token "IDLE"))
                (> gr-mainloop-last-keycode 0)
                (> (hash-table-count gr-mainloop-held-codes) 0))
        (gr-mainloop-write-key-record "IDLE" 0 nil "tail-release")))))

(defun gr-mainloop-read-key-state (keycode)
  "Return the held state for KEYCODE from the scripted input file."
  (let ((record nil)
        (idx (gr-num keycode))
        (state 0)
        (line nil))
    (unless (hash-table-p gr-mainloop-held-codes)
      (setq gr-mainloop-held-codes (make-hash-table :test 'equal)))
    (setq record (or (gr-mainloop-refresh-input)
                     (gr-mainloop-read-key-file)))
    (setq state (gethash idx gr-mainloop-held-codes 0))
    (when gr-mainloop-diag-mode
      (setq line (format "query script=%s frame=%d ts=%s key=%d state=%d file-seq=%s file-token=%s file-key=%s file-mtime=%s raw=%S"
                         gr-mainloop-current-script-name
                         gr-mainloop-frame-count
                         (gr-mainloop-now-string)
                         idx
                         state
                         (or (plist-get record :seq) gr-mainloop-last-seq)
                         (or (plist-get record :token) gr-mainloop-last-token)
                         (or (plist-get record :keycode) gr-mainloop-last-keycode)
                         (or (plist-get record :mtime) "n/a")
                         (or (plist-get record :raw) "")))
      (push line gr-mainloop-query-log)
      (princ (format "%s\n" line)))
    state))

(defun gr-mainloop-reset-key (keycode)
  "Mirror ResetKey for the scripted batch input source."
  (when (hash-table-p gr-mainloop-held-codes)
    (remhash (gr-num keycode) gr-mainloop-held-codes))
  0)

(defun gr-mainloop-log-frame ()
  "Record one func009 entry for the final trace."
  (let ((line (format "frame %d pos=%s,%s key=%s/%s"
                      gr-mainloop-frame-count
                      (or (gr-get 66) 0)
                      (or (gr-get 67) 0)
                      gr-mainloop-last-token
                      gr-mainloop-last-keycode)))
    (push line gr-mainloop-trace-lines)
    (princ (format "%s\n" line))))

(defun gr-mainloop-func009-wrapper (&rest args)
  "Bounded wrapper around the native func009 entry."
  (setq gr-mainloop-frame-count (1+ gr-mainloop-frame-count))
  (gr-mainloop-advance-script-frame)
  (gr-mainloop-log-frame)
  (when (> gr-mainloop-frame-count gr-mainloop-frame-limit)
    (throw 'gr-mainloop-stop 'frame-limit))
  (apply gr-mainloop-orig-func009 args))

(defun gr-mainloop-write-frame-dump ()
  "Render the current frame and write build/mainloop-frame.json."
  (let* ((out-path (expand-file-name "mainloop-frame.json" gr-mainloop-build-dir))
         (tmp-path (concat out-path ".tmp"))
         (coding-system-for-write 'utf-8)
         (json nil))
    (setq gr-sumi nil gr-trace nil gr-missing nil gr-step-count 0)
    (condition-case err
        (gr-run-func "func337")
      (error
       (princ (format "MAINLOOP-FRAME-ERROR %s\n" err))))
    (setq json (if (fboundp 'gr-sumi-to-json)
                   (gr-sumi-to-json)
                 (prin1-to-string gr-sumi)))
    (write-region json nil tmp-path nil 'silent)
    (rename-file tmp-path out-path t)
    (princ (format "MAINLOOP-FRAME %s commands=%s\n" out-path (length gr-sumi)))))

(defun gr-mainloop-with-loop-disabled (thunk)
  "Run THUNK with func009 temporarily replaced by a no-op."
  (setq gr-mainloop-worldgen-saved-func009 (gethash "func009" gr-native-funcs))
  (unwind-protect
      (progn
        (gr-defnative "func009" (lambda (&rest _args) nil))
        (funcall thunk))
    (when gr-mainloop-worldgen-saved-func009
      (gr-defnative "func009" gr-mainloop-worldgen-saved-func009))
    (setq gr-mainloop-worldgen-saved-func009 nil)))

(defun gr-mainloop-func015 (&rest _args)
  "Minimal local movement continuation for the scripted loop verification."
  (push 15 gr-trace)
  (gr-run-func "func019"))

(defun gr-mainloop-func338 (&rest _args)
  "No-op render helper for batch mainloop verification."
  (push 338 gr-trace)
  nil)

(defun gr-mainloop-install-local-missing-natives ()
  "Install local natives needed by the 306-function corpus verification."
  (setq gr-mainloop-saved-native-func015 (gethash "func015" gr-native-funcs))
  (setq gr-mainloop-saved-native-func338 (gethash "func338" gr-native-funcs))
  (gr-defnative "func015" #'gr-mainloop-func015)
  (gr-defnative "func338" #'gr-mainloop-func338))

(defun gr-mainloop-restore-local-missing-natives ()
  "Restore any natives replaced for the scripted loop verification."
  (if gr-mainloop-saved-native-func015
      (gr-defnative "func015" gr-mainloop-saved-native-func015)
    (when gr-native-funcs
      (remhash "func015" gr-native-funcs)))
  (if gr-mainloop-saved-native-func338
      (gr-defnative "func338" gr-mainloop-saved-native-func338)
    (when gr-native-funcs
      (remhash "func338" gr-native-funcs)))
  (setq gr-mainloop-saved-native-func015 nil)
  (setq gr-mainloop-saved-native-func338 nil))

(defun gr-mainloop-tile-at (x y)
  "Return the current map tile at X,Y."
  (let ((tiles (gr-get 71)))
    (and tiles
         (gr-index-ref (gr-index-ref tiles x) y))))

(defun gr-mainloop-preview-path (start-x start-y moves)
  "Return a path preview over var_71 for MOVES from START-X/START-Y."
  (let ((x start-x)
        (y start-y)
        (entries nil)
        (dx 0)
        (dy 0)
        (tile nil))
    (push (format "start=%d,%d tile=%s" x y (gr-mainloop-tile-at x y)) entries)
    (dolist (move moves)
      (setq dx 0 dy 0)
      (cond
       ((equal (car move) "RIGHT") (setq dx 1))
       ((equal (car move) "LEFT") (setq dx -1))
       ((equal (car move) "DOWN") (setq dy 1))
       ((equal (car move) "UP") (setq dy -1)))
      (setq x (+ x dx))
      (setq y (+ y dy))
      (setq tile (gr-mainloop-tile-at x y))
      (push (format "%s->%d,%d tile=%s" (car move) x y tile) entries))
    (nreverse entries)))

(defun gr-mainloop-run-script (name moves expected-x expected-y)
  "Run one scripted verification NAME over MOVES."
  (let ((status "MAINLOOP-PARTIAL")
        (start-x 0)
        (start-y 0)
        (end-x 0)
        (end-y 0)
        (path-lines nil))
    (gr-mainloop-restore-seeded-state)
    (setq gr-sumi nil gr-trace nil gr-missing nil gr-depth 0)
    (setq start-x (gr-num (or (gr-get 66) 0)))
    (setq start-y (gr-num (or (gr-get 67) 0)))
    (setq path-lines (gr-mainloop-preview-path start-x start-y moves))
    (dolist (line path-lines)
      (princ (format "MAINLOOP-PATH %s %s\n" name line)))
    (setq gr-step-count 0
          gr-trace nil
          gr-missing nil
          gr-mainloop-frame-count 0
          gr-mainloop-trace-lines nil
          gr-read-key-state-fn #'gr-mainloop-read-key-state
          gr-reset-key-fn #'gr-mainloop-reset-key)
    (gr-mainloop-install-script name moves)
    (condition-case err
        (catch 'gr-mainloop-stop
          (gr-run-func "func009"))
      (error
       (princ (format "MAINLOOP-ERROR %s %s\n" name err))))
    (setq end-x (gr-num (or (gr-get 66) 0)))
    (setq end-y (gr-num (or (gr-get 67) 0)))
    (princ (format "MAINLOOP-POS %s start=%s,%s end=%s,%s expected=%s,%s\n"
                   name start-x start-y end-x end-y expected-x expected-y))
    (dolist (line (nreverse gr-mainloop-trace-lines))
      (princ (format "MAINLOOP-TRACE %s %s\n" name line)))
    (when (and (= end-x expected-x) (= end-y expected-y))
      (setq status "MAINLOOP-OK"))
    (princ (format "%s %s\n" status name))
    (when (and (equal status "MAINLOOP-OK") (equal name "script-1"))
      (gr-mainloop-write-frame-dump))
    status))

(let* ((runtime-dir (file-name-directory (or load-file-name buffer-file-name)))
       (repo-root (expand-file-name ".." runtime-dir))
       (test-root (expand-file-name "build/mainloop-test-data" repo-root))
       (old-budget gr-step-budget)
      (old-depth gr-depth-limit)
      (worldgen-floors 0)
      (worldgen-dungeon 0)
      (script-1 '(("RIGHT" . 39)
                  ("RIGHT" . 39)
                  ("RIGHT" . 39)
                  ("RIGHT" . 39)
                  ("DOWN" . 40)
                  ("DOWN" . 40)))
      (script-2 '(("DOWN" . 40)
                  ("DOWN" . 40)
                  ("RIGHT" . 39)
                  ("RIGHT" . 39)
                  ("RIGHT" . 39)))
      (status-1 nil)
      (status-2 nil))
  (unwind-protect
      (progn
        (setq gr-step-budget 2000000)
        (setq gr-depth-limit 400)
        (make-directory test-root t)
        (let ((source-00 (expand-file-name "00.dat" gr-data-root))
              (target-00 (expand-file-name "00.dat" test-root)))
          (when (file-exists-p source-00)
            (copy-file source-00 target-00 t)))
        (setq gr-data-root (or (getenv "GR_DATA_ROOT") test-root))

        ;; Worldgen-first sequence, matching the run-worldgen bootstrap, but
        ;; without entering the interactive loop from func006.
        (gr-reset)
        (gr-mainloop-worldgen-seed-base-state)
        (setq gr-step-count 0)
        (gr-mainloop-with-loop-disabled
         (lambda ()
           (condition-case err
               (gr-run-func "func006")
             (error
              (princ (format "MAINLOOP-WORLDGEN-ERROR %s\n" err))))))
        (setq worldgen-floors (or (gr-get "current_floor") 0))
        (setq worldgen-dungeon (or (gr-get "dungeon_number") 0))
        (gr-mainloop-save-seeded-state)
        (princ (format "MAINLOOP-WORLDGEN dungeon=%s floor=%s\n" worldgen-dungeon worldgen-floors))

        (gr-mainloop-install-local-missing-natives)
        (setq gr-mainloop-orig-func009 (gethash "func009" gr-native-funcs))
        (gr-defnative "func009" #'gr-mainloop-func009-wrapper)

        (setq status-1 (gr-mainloop-run-script "script-1" script-1 27 11))
        (setq status-2 (gr-mainloop-run-script "script-2" script-2 26 11))
        (when (and (equal status-1 "MAINLOOP-OK")
                   (equal status-2 "MAINLOOP-OK"))
          (princ "MAINLOOP-OK\n"))
        (when gr-missing
          (princ (format "MAINLOOP-MISSING %s\n" (delete-dups (reverse gr-missing))))))
    (setq gr-step-budget old-budget)
    (setq gr-depth-limit old-depth)
    (gr-mainloop-restore-local-missing-natives)
    (when gr-mainloop-orig-func009
      (gr-defnative "func009" gr-mainloop-orig-func009))))

(provide 'run-mainloop)
