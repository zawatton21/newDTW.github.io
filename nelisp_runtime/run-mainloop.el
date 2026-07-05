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
(defvar gr-mainloop-frame-limit 12)
(defvar gr-mainloop-trace-lines nil)
(defvar gr-mainloop-orig-func009 nil)

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

(defun gr-mainloop-read-key-file ()
  "Read build/key-state.txt in the extended token/keycode/HELD format."
  (when (file-exists-p gr-mainloop-key-state-path)
    (condition-case nil
        (with-temp-buffer
          (insert-file-contents gr-mainloop-key-state-path)
          (let* ((lines (split-string (buffer-string) "\r?\n" t))
                 (header (and lines (split-string (car lines) "[ \t]+" t)))
                 (token (and (= (length header) 2) (nth 0 header)))
                 (seq (and (= (length header) 2) (string-to-number (nth 1 header))))
                 (keycode (and (nth 1 lines) (string-to-number (nth 1 lines))))
                 (held-line (and (nth 2 lines) (split-string (nth 2 lines) "[ \t]+" t))))
            (when (and token (> seq 0))
              (list :token token
                    :seq seq
                    :keycode keycode
                    :held (if (and held-line (equal (car held-line) "HELD"))
                              (gr-mainloop-parse-int-list (cdr held-line))
                            nil)))))
      (error nil))))

(defun gr-mainloop-refresh-input ()
  "Load the next scripted key-state snapshot when SEQ advances."
  (let ((record (gr-mainloop-read-key-file))
        (held nil))
    (when (and record (> (plist-get record :seq) gr-mainloop-last-seq))
      (setq gr-mainloop-last-seq (plist-get record :seq))
      (setq gr-mainloop-last-token (plist-get record :token))
      (setq gr-mainloop-last-keycode (plist-get record :keycode))
      (setq gr-mainloop-held-codes (make-hash-table :test 'equal))
      (setq held (plist-get record :held))
      (dolist (code held)
        (puthash code 1 gr-mainloop-held-codes))
      t)))

(defun gr-mainloop-read-key-state (keycode)
  "Return the held state for KEYCODE from the scripted input file."
  (unless (hash-table-p gr-mainloop-held-codes)
    (setq gr-mainloop-held-codes (make-hash-table :test 'equal)))
  (gr-mainloop-refresh-input)
  (let ((state (gethash (gr-num keycode) gr-mainloop-held-codes 0)))
    (when (and (equal state 0) (= (hash-table-count gr-mainloop-held-codes) 0))
      (sleep-for 0.05))
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
    (setq json (gr-sumi-to-json))
    (write-region json nil tmp-path nil 'silent)
    (rename-file tmp-path out-path t)
    (princ (format "MAINLOOP-FRAME %s commands=%s\n" out-path (length gr-sumi)))))

(let ((old-budget gr-step-budget)
      (old-depth gr-depth-limit)
      (start-x 0)
      (start-y 0)
      (end-x 0)
      (end-y 0)
      (expected-x 0)
      (expected-y 0)
      (status "MAINLOOP-PARTIAL")
      (worldgen-floors 0)
      (worldgen-dungeon 0))
  (unwind-protect
      (progn
        (setq gr-step-budget 2000000)
        (setq gr-depth-limit 400)

        ;; Worldgen-first sequence, matching the run-worldgen bootstrap.
        (gr-reset)
        (gr-mainloop-worldgen-seed-base-state)
        (setq gr-step-count 0)
        (condition-case err
            (gr-run-func "func006")
          (error
           (princ (format "MAINLOOP-WORLDGEN-ERROR %s\n" err))))
        (setq worldgen-floors (or (gr-get "current_floor") 0))
        (setq worldgen-dungeon (or (gr-get "dungeon_number") 0))
        (princ (format "MAINLOOP-WORLDGEN dungeon=%s floor=%s\n" worldgen-dungeon worldgen-floors))

        ;; Real dungeon snapshot for the real main-loop chain.
        (gr-reset)
        (gr-seed-state)
        (setq start-x (gr-num (or (gr-get 66) 0)))
        (setq start-y (gr-num (or (gr-get 67) 0)))
        (setq expected-x (+ start-x 4))
        (setq expected-y (+ start-y 2))
        (setq gr-step-count 0
              gr-trace nil
              gr-missing nil
              gr-mainloop-last-seq 0
              gr-mainloop-last-token "IDLE"
              gr-mainloop-last-keycode 0
              gr-mainloop-frame-count 0
              gr-mainloop-trace-lines nil
              gr-mainloop-held-codes (make-hash-table :test 'equal)
              gr-read-key-state-fn #'gr-mainloop-read-key-state
              gr-reset-key-fn #'gr-mainloop-reset-key)

        (setq gr-mainloop-orig-func009 (gethash "func009" gr-native-funcs))
        (gr-defnative "func009" #'gr-mainloop-func009-wrapper)

        (condition-case err
            (catch 'gr-mainloop-stop
              (gr-run-func "func009"))
          (error
           (princ (format "MAINLOOP-ERROR %s\n" err))))

        (setq end-x (gr-num (or (gr-get 66) 0)))
        (setq end-y (gr-num (or (gr-get 67) 0)))
        (princ (format "MAINLOOP-POS start=%s,%s end=%s,%s expected=%s,%s\n"
                       start-x start-y end-x end-y expected-x expected-y))

        (when (and (= end-x expected-x) (= end-y expected-y))
          (setq status "MAINLOOP-OK"))
        (princ (format "%s\n" status))
        (when (equal status "MAINLOOP-OK")
          (gr-mainloop-write-frame-dump))
        (when gr-missing
          (princ (format "MAINLOOP-MISSING %s\n" (delete-dups (reverse gr-missing))))))
    (setq gr-step-budget old-budget)
    (setq gr-depth-limit old-depth)
    (when gr-mainloop-orig-func009
      (gr-defnative "func009" gr-mainloop-orig-func009))))

(provide 'run-mainloop)
