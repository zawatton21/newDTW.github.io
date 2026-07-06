;;; play.el --- interactive pure-elisp play driver -*- coding: utf-8; lexical-binding: t; -*-
;;
;; HUMAN RUNBOOK (4 terminals, run from the repo root):
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
;;    node tools/build_play_bundle.js
;;    $env:HOME=(Resolve-Path build/emacs-home)
;;    emacs -Q --batch --eval "(progn (prefer-coding-system 'utf-8) (setq coding-system-for-write 'utf-8))" -l build/play-bundle-loader.el
;;
;; Optional fallback keyboard input server
;;    node tools/key_input_server.js
;;
;; When the native GTK window supports direct focused input, terminal 5 is not
;; needed. Keep the key input server as a fallback only.

(defconst gr-play-build-dir
  (expand-file-name "../build" (file-name-directory (or load-file-name buffer-file-name))))

(defconst gr-play-runtime-dir
  (file-name-directory (or load-file-name buffer-file-name)))

(defconst gr-play-key-state-path
  (expand-file-name "key-state.txt" gr-play-build-dir))

(defconst gr-play-frame-path
  (expand-file-name "frame-current.json" gr-play-build-dir))

(defconst gr-play-frames-dir
  (expand-file-name "frames" gr-play-build-dir))

(defconst gr-play-opening-profile-path
  (expand-file-name "play-opening-profile.txt" gr-play-build-dir))

(defconst gr-play-saves-dir
  (expand-file-name "saves-play" gr-play-build-dir))

(defvar gr-play-duration-seconds 300
  "How long the interactive play loop runs before exiting.")

(defvar gr-play-report-every 25
  "Print one status line every N frames.")

(defvar gr-play-key-stale-seconds 0.75
  "Treat key-state.txt as stale after this many seconds.")

(defvar gr-play-pending-key-max-age-seconds 1.0
  "Treat a latched unconsumed press as missed after this many seconds.")

(defvar gr-play-idle-sleep-seconds 0.0
  "Sleep this long when no key is currently held.")

(defvar gr-play-opening-poll-sleep-seconds 0.01
  "Sleep this long between title/login input polls.")

(defvar gr-play-frame-count 0)
(defvar gr-play-start-time 0.0)
(defvar gr-play-last-token "IDLE")
(defvar gr-play-last-seq 0)
(defvar gr-play-held-codes nil)
(defvar gr-play-file-held-codes nil)
(defvar gr-play-pending-presses nil)
(defvar gr-play-synced-keycodes nil)
(defvar gr-play-read-error-count 0)
(defvar gr-play-received-press-count 0)
(defvar gr-play-consumed-press-count 0)
(defvar gr-play-missed-press-count 0)
(defvar gr-play-quit-requested nil)
(defvar gr-play-orig-func009 nil)
(defvar gr-play-orig-func337 nil)
(defvar gr-play-orig-gr-emit nil)
(defvar gr-play-worldgen-saved-func009 nil)
(defvar gr-play-saved-native-func015 nil)
(defvar gr-play-saved-native-func338 nil)
(defvar gr-play-saved-native-func005 nil)
(defvar gr-play-saved-native-func150 nil)
(defvar gr-play-redraw-count 0)
(defvar gr-play-loop-count 0)
(defvar gr-play-title-frame-count 0)
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
(defvar gr-play-last-input-was-new nil)
(defvar gr-play-depth-log nil)
(defvar gr-play-first-frame-histogram nil)
(defvar gr-play-first-frame-missing nil)
(defvar gr-play-first-frame-state nil)
(defvar gr-play-first-player-frame-histogram nil)
(defvar gr-play-first-enemy-frame-histogram nil)
(defvar gr-play-opening-active nil)
(defvar gr-play-opening-result nil)
(defvar gr-play-opening-title-loops 0)
(defvar gr-play-opening-login-loops 0)
(defvar gr-play-opening-render-seconds 0.0)
(defvar gr-play-opening-poll-seconds 0.0)
(defvar gr-play-opening-sleep-seconds 0.0)
(defvar gr-play-frame-seq 0)
(defvar gr-play-queue-overflow-logged nil)
(defvar gr-play-opening-guard-seq 0)
(defvar gr-play-opening-release-seen nil)
(defvar gr-play-opening-login-rendered nil)
(defvar gr-play-session-data-root nil)

(defun gr-play-buffer-histogram ()
  "Return an alist of source buffer id -> blit count for the current gr-sumi."
  (let ((table (make-hash-table :test 'equal))
        (entry nil)
        (buf nil))
    (dolist (entry gr-sumi)
      (when (and (consp entry)
                 (equal (car entry) "gui-draw-image-scaled")
                 (numberp (nth 1 entry)))
        (setq buf (nth 1 entry))
        (puthash buf (1+ (gethash buf table 0)) table)))
    (let ((out nil))
      (maphash (lambda (key value) (push (cons key value) out)) table)
      (sort out (lambda (a b) (< (car a) (car b)))))))

(defun gr-play-log-depth ()
  "Log recursion depth every 100 loops."
  (when (= 0 (mod gr-play-loop-count 100))
    (push (cons gr-play-loop-count gr-depth) gr-play-depth-log)
    (princ (format "PLAY-DEPTH loop=%d depth=%d\n" gr-play-loop-count gr-depth))))

(defun gr-play-held-codes-list ()
  "Return the current held keycodes as a sorted list."
  (let ((out nil))
    (when (hash-table-p gr-play-held-codes)
      (maphash (lambda (key _value)
                 (push key out))
               gr-play-held-codes))
    (sort out #'<)))

(defun gr-play-parse-int-list (parts)
  "Convert PARTS to a list of positive integers."
  (let ((out nil)
        (n nil))
    (dolist (part parts)
      (setq n (string-to-number part))
      (when (> n 0)
        (push n out)))
    (nreverse out)))

(defun gr-play-copy-hash (table)
  "Return a shallow copy of hash TABLE."
  (let ((copy (make-hash-table :test 'equal)))
    (when (hash-table-p table)
      (maphash (lambda (key value)
                 (puthash key value copy))
               table))
    copy))

(defun gr-play-make-held-table (held)
  "Return a hash table containing the integers in HELD."
  (let ((table (make-hash-table :test 'equal)))
    (dolist (code held)
      (puthash code 1 table))
    table))

(defun gr-play-enqueue-press (seq keycode)
  "Latch a newly observed press identified by SEQ and KEYCODE."
  (setq gr-play-received-press-count (1+ gr-play-received-press-count))
  (setq gr-play-pending-presses
        (append gr-play-pending-presses
                (list (list :seq seq
                            :keycode keycode
                            :time (float-time))))))

(defun gr-play-effective-keycodes ()
  "Return the sorted union of live held keys and pending press keys."
  (let ((table (make-hash-table :test 'equal))
        (out nil))
    (when (hash-table-p gr-play-held-codes)
      (maphash (lambda (key value)
                 (when (> value 0)
                   (puthash key 1 table)))
               gr-play-held-codes))
    (dolist (entry gr-play-pending-presses)
      (puthash (plist-get entry :keycode) 1 table))
    (maphash (lambda (key _value)
               (push key out))
             table)
    (sort out #'<)))

(defun gr-play-sync-pushing-key-list ()
  "Mirror live held and pending keys into `pushing_key_list'."
  (let ((keys (gr-get "pushing_key_list"))
        (active (gr-play-effective-keycodes)))
    (when (vectorp keys)
      (dolist (code gr-play-synced-keycodes)
        (when (and (integerp code) (>= code 0) (< code (length keys)))
          (aset keys code 0)))
      (dolist (code active)
        (when (and (integerp code) (>= code 0) (< code (length keys)))
          (aset keys code 1)))
      (setq gr-play-synced-keycodes active))))

(defun gr-play-drop-expired-pending-presses ()
  "Expire latched presses that aged out without being consumed."
  (let ((now (float-time))
        (kept nil)
        (dropped 0))
    (dolist (entry gr-play-pending-presses)
      (if (> (- now (or (plist-get entry :time) now))
             gr-play-pending-key-max-age-seconds)
          (setq dropped (1+ dropped))
        (push entry kept)))
    (when (> dropped 0)
      (setq gr-play-missed-press-count (+ gr-play-missed-press-count dropped)))
    (setq gr-play-pending-presses (nreverse kept))
    (gr-play-sync-pushing-key-list)))

(defun gr-play-consume-pending-press (keycode)
  "Consume and report whether a latched press exists for KEYCODE."
  (let ((needle (gr-num keycode))
        (pending gr-play-pending-presses)
        (kept nil)
        (found nil)
        (entry nil))
    (while pending
      (setq entry (car pending))
      (setq pending (cdr pending))
      (if (and (not found)
               (= (or (plist-get entry :keycode) -1) needle))
          (setq found t)
        (push entry kept)))
    (setq gr-play-pending-presses (nreverse kept))
    (when found
      (setq gr-play-consumed-press-count (1+ gr-play-consumed-press-count))
      (princ
       (format "PLAY-CONSUME seq=%s key=%s consumed=%d/%d missed=%d\n"
               (or (plist-get entry :seq) 0)
               needle
               gr-play-consumed-press-count
               gr-play-received-press-count
               gr-play-missed-press-count)))
    (gr-play-sync-pushing-key-list)
    found))

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
      (error
       (setq gr-play-read-error-count (1+ gr-play-read-error-count))
       nil))))

(defun gr-play-record-stale-p (record)
  "Return non-nil if RECORD is missing or older than the stale window."
  (let ((mtime (and record (plist-get record :mtime))))
    (or (null record)
        (null mtime)
        (> (- (float-time) (float-time mtime)) gr-play-key-stale-seconds))))

(defun gr-play-refresh-input ()
  "Refresh held keys from the current key-state.txt snapshot."
  (let ((record (gr-play-read-key-record))
        (held nil)
        (next-held nil)
        (old-held nil)
        (seq 0))
    (setq gr-play-last-input-was-new nil)
    (gr-play-drop-expired-pending-presses)
    (if (gr-play-record-stale-p record)
        (progn
          (setq gr-play-held-codes (make-hash-table :test 'equal))
          (setq gr-play-file-held-codes (make-hash-table :test 'equal))
          (setq gr-play-last-token "IDLE")
          (gr-play-sync-pushing-key-list)
          nil)
      (progn
        (setq seq (or (plist-get record :seq) 0))
        (setq gr-play-last-input-was-new (> seq gr-play-last-seq))
        (when gr-play-last-input-was-new
          (setq gr-play-last-token (or (plist-get record :token) "IDLE"))
          (setq gr-play-last-seq seq)
          (setq held (plist-get record :held))
          (setq next-held (gr-play-make-held-table held))
          (setq old-held
                (if (hash-table-p gr-play-file-held-codes)
                    gr-play-file-held-codes
                  (make-hash-table :test 'equal)))
          (dolist (code held)
            (unless (> (gethash code old-held 0) 0)
              (gr-play-enqueue-press seq code)))
          (when (and (null held)
                     (> (or (plist-get record :keycode) 0) 0)
                     (= 0 (gethash (plist-get record :keycode) old-held 0)))
            (gr-play-enqueue-press seq (plist-get record :keycode)))
          (setq gr-play-file-held-codes next-held)
          (setq gr-play-held-codes (gr-play-copy-hash next-held))
          (gr-play-sync-pushing-key-list)
          (when (equal gr-play-last-token "QUIT")
            (setq gr-play-quit-requested t)))
        record))))

(defun gr-play-read-key-state (keycode)
  "Return the current held state for KEYCODE from the live key file."
  (let ((record (gr-play-refresh-input))
        (idx (gr-num keycode))
        (value 0)
        (consumed nil))
    (unless (hash-table-p gr-play-held-codes)
      (setq gr-play-held-codes (make-hash-table :test 'equal)))
    (when (or gr-play-quit-requested
              (and (> gr-play-start-time 0)
                   (>= (- (float-time) gr-play-start-time) gr-play-duration-seconds)))
      (throw 'gr-play-frame-stop 'done))
    (when (and (not gr-play-last-input-was-new)
               (or (null record)
                   (= 0 (hash-table-count gr-play-held-codes))))
      (sleep-for gr-play-idle-sleep-seconds))
    (setq consumed (gr-play-consume-pending-press idx))
    (setq value
          (if (or (> (gethash idx gr-play-held-codes 0) 0)
                  consumed)
              1
            0))
    value))

(defun gr-play-reset-key (keycode)
  "Mirror ResetKey for the live key source."
  (when (hash-table-p gr-play-held-codes)
    (remhash (gr-num keycode) gr-play-held-codes))
  (gr-play-sync-pushing-key-list)
  0)

(defun gr-play-write-frame (json)
  "Atomically write JSON to build/frame-current.json and build/frames/."
  (let* ((seq (setq gr-play-frame-seq (1+ gr-play-frame-seq)))
         (frame-path (expand-file-name (format "frame-%06d.json" seq) gr-play-frames-dir))
         (frame-tmp-path (concat frame-path ".tmp"))
         (current-tmp-path (concat gr-play-frame-path ".tmp"))
         (coding-system-for-write 'utf-8))
    (unless (file-directory-p (file-name-directory gr-play-frame-path))
      (make-directory (file-name-directory gr-play-frame-path) t))
    (unless (file-directory-p gr-play-frames-dir)
      (make-directory gr-play-frames-dir t))
    (write-region json nil frame-tmp-path nil 'silent)
    (rename-file frame-tmp-path frame-path t)
    (write-region json nil current-tmp-path nil 'silent)
    (rename-file current-tmp-path gr-play-frame-path t)
    (when (and (not gr-play-queue-overflow-logged)
               (> (length (directory-files gr-play-frames-dir nil "^frame-[0-9]+\\.json$")) 2000))
      (setq gr-play-queue-overflow-logged t)
      (princ (format "PLAY-QUEUE-OVERFLOW dir=%s files=%d\n"
                     gr-play-frames-dir
                     (length (directory-files gr-play-frames-dir nil "^frame-[0-9]+\\.json$")))))))

(defun gr-play-init-frame-queue ()
  "Reset build/frames/ for a fresh ordered frame-dump session."
  (let ((files nil))
    (setq gr-play-frame-seq 0)
    (setq gr-play-queue-overflow-logged nil)
    (unless (file-directory-p gr-play-frames-dir)
      (make-directory gr-play-frames-dir t))
    (setq files (directory-files gr-play-frames-dir t "^frame-[0-9]+\\.json$"))
    (dolist (file files)
      (when (file-regular-p file)
        (delete-file file)))
    (when (file-exists-p gr-play-frame-path)
      (delete-file gr-play-frame-path))))

(defun gr-play-write-opening-profile (line)
  "Persist opening profiling LINE in build/play-opening-profile.txt."
  (let ((tmp-path (concat gr-play-opening-profile-path ".tmp"))
        (coding-system-for-write 'utf-8))
    (unless (file-directory-p (file-name-directory gr-play-opening-profile-path))
      (make-directory (file-name-directory gr-play-opening-profile-path) t))
    (write-region (concat line "\n") nil tmp-path nil 'silent)
    (rename-file tmp-path gr-play-opening-profile-path t)))

(defun gr-play-snapshot-state ()
  "Return the stable player/floor state for frame de-duplication."
  (list (gr-num (or (gr-get 66) 0))
        (gr-num (or (gr-get 67) 0))
        (gr-num (or (gr-get "current_floor") 0))
        (gr-num (or (gr-get "dungeon_number") 0))))

(defvar gr-play-last-frame-records nil
  "Exact record tree of the last dumped frame, or nil before any dump.")

(defun gr-play-frame-unchanged-p (records)
  "Return non-nil when RECORDS matches the previously dumped frame exactly.

`sxhash-equal' collided on successive idle-animation frames in practice,
which caused the dumper to drop real sprite/water updates.  Compare the
expanded frame record tree instead so distinct redraws are never
suppressed by a hash collision, while unchanged frames still skip JSON
serialization."
  (if (and gr-play-last-frame-records
           (equal records gr-play-last-frame-records))
      t
    (setq gr-play-last-frame-records (copy-tree records))
    nil))

(defun gr-play-record-snapshot (record-count snapshot)
  "Persist RECORD-COUNT and SNAPSHOT as the latest dumped frame state."
  (setq gr-play-last-record-count record-count
        gr-play-last-player-x (nth 0 snapshot)
        gr-play-last-player-y (nth 1 snapshot)
        gr-play-last-floor (nth 2 snapshot)
        gr-play-last-dungeon (nth 3 snapshot)))

(defvar gr-play-setup-records nil
  "Session-persistent setup records (screen / load-image), newest first.
The game emits each gui-load-image exactly once; if the feeder's poll
misses that frame, every consumer downstream blits empty buffers forever
(the gray-screen failure).  Harvesting them here and replaying them at
the head of every dumped frame makes any frame self-contained.")

(defvar gr-play-setup-seen (make-hash-table :test 'equal)
  "Dedup keys (op:buffer-id) already captured into `gr-play-setup-records'.")

(defun gr-play-collect-setup-records ()
  "Harvest screen/load-image records from the current `gr-sumi'."
  (dolist (entry (reverse gr-sumi))
    (let ((op (car entry)))
      (when (member op '("gui-screen" "dtw-screen" "gui-load-image" "dtw-load-image"))
        (let ((key (format "%s:%s" op (cadr entry))))
          (unless (gethash key gr-play-setup-seen)
            (puthash key t gr-play-setup-seen)
            (push entry gr-play-setup-records)))))))

(defun gr-play-dump-current-frame ()
  "Serialize and dump the current `gr-sumi' frame if it changed."
  (gr-play-collect-setup-records)
  (let ((record-count (length gr-sumi))
        (snapshot (gr-play-snapshot-state))
        (frame-records nil)
        (serialize-start 0.0)
        (io-start 0.0)
        (json nil)
        (histogram (gr-play-buffer-histogram)))
    (when (null gr-play-first-frame-histogram)
      (setq gr-play-first-frame-histogram histogram)
      (setq gr-play-first-frame-missing (reverse gr-missing))
      (setq gr-play-first-frame-state
            (list :var199 (gr-get 199)
                  :var1226 (gr-get 1226)
                  :var217 (gr-get 217)
                  :var211 (gr-get 211)
                  :enemy-facing (and (vectorp (gr-get 83))
                                     (> (length (gr-get 83)) 1)
                                     (gr-prop-ref (aref (gr-get 83) 1) "Var5"))))
      (princ (format "PLAY-HIST first=%S\n" histogram))
      (princ (format "PLAY-MISSING first=%S\n" gr-play-first-frame-missing))
      (princ (format "PLAY-GATE first=%S\n" gr-play-first-frame-state)))
    (when (and (null gr-play-first-player-frame-histogram)
               (assoc 3 histogram))
      (setq gr-play-first-player-frame-histogram histogram)
      (princ (format "PLAY-HIST player=%S\n" histogram)))
    (when (and (null gr-play-first-enemy-frame-histogram)
               (or (assoc 6 histogram) (assoc 21 histogram) (assoc 27 histogram) (assoc 13 histogram)))
      (setq gr-play-first-enemy-frame-histogram histogram)
      (princ (format "PLAY-HIST enemy=%S\n" histogram)))
    (if (= record-count 0)
        (setq gr-play-skipped-count (1+ gr-play-skipped-count))
      ;; Replay the harvested setup at the head of the frame (gr-sumi is
      ;; newest-first, so appending puts it first after the reversal).
      (setq frame-records (append gr-sumi gr-play-setup-records))
      (if (gr-play-frame-unchanged-p frame-records)
          (setq gr-play-skipped-count (1+ gr-play-skipped-count))
        (setq serialize-start (float-time))
        (setq json (let ((gr-sumi frame-records))
                     (gr-sumi-to-json)))
        (setq gr-play-serialize-seconds
              (+ gr-play-serialize-seconds (- (float-time) serialize-start)))
        (setq io-start (float-time))
        (gr-play-write-frame json)
        (setq gr-play-io-seconds
              (+ gr-play-io-seconds (- (float-time) io-start)))
        (setq gr-play-dumped-count (1+ gr-play-dumped-count))
        (gr-play-record-snapshot record-count snapshot)))))

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

(defun gr-play-ensure-worldgen-runtime ()
  "Load the shared worldgen helpers used by run-init.el."
  (unless (fboundp 'gr-worldgen-run)
    (let ((saved-autorun (and (boundp 'gr-worldgen-autorun) gr-worldgen-autorun)))
      (setq gr-worldgen-autorun nil)
      (load-file (expand-file-name "run-worldgen.el" gr-play-runtime-dir))
      (setq gr-worldgen-autorun saved-autorun))))

(defun gr-play-bootstrap-real-init ()
  "Mirror run-init.el after the title/login opening has started the game."
  (gr-play-ensure-worldgen-runtime)
  (setq gr-data-root (or (getenv "GR_DATA_ROOT") gr-data-root))
  (gr-worldgen-seed-base-state)
  (setq gr-worldgen-use-existing-state t)
  (gr-worldgen-run t))

(defun gr-play-bootstrap-resume-init ()
  "Mirror the batch resume load path used by run-saveload.el."
  (gr-play-ensure-worldgen-runtime)
  (setq gr-data-root (or gr-play-session-data-root
                         (getenv "GR_DATA_ROOT")
                         gr-data-root))
  (gr-run-func "func229"))

(defun gr-play-reset-session-saves ()
  "Point interactive play at an isolated save root under build/saves-play/."
  (let* ((source-root (or (getenv "GR_DATA_ROOT") gr-data-root))
         (keep-saves (equal (getenv "GR_PLAY_KEEP_SAVES") "1"))
         (slot-files '("01.dat" "01e.dat" "01n.dat"
                       "02.dat" "02e.dat" "02n.dat"
                       "03.dat" "03e.dat" "03n.dat"))
         (source-00 (expand-file-name "00.dat" source-root))
         (target-00 (expand-file-name "00.dat" gr-play-saves-dir)))
    (make-directory gr-play-saves-dir t)
    (unless keep-saves
      (dolist (name slot-files)
        (let ((path (expand-file-name name gr-play-saves-dir)))
          (when (file-exists-p path)
            (delete-file path)))))
    (when (file-exists-p source-00)
      (copy-file source-00 target-00 t))
    (setq gr-play-session-data-root gr-play-saves-dir
          gr-data-root gr-play-saves-dir)))

(defun gr-play-apply-post-init-state ()
  "Restore the live-loop HP state that func004/worldgen do not populate.

func229.ts, func233.ts, and the captured gamedata-state all enter play with
max HP 15, current HP 15, and the KO flag cleared."
  (gr-set 352 15)
  (gr-set 211 15)
  (gr-set 212 0))

(defun gr-play-func338 (&rest _args)
  "No-op render helper."
  (push 338 gr-trace)
  nil)

(defun gr-play-func005 (&rest _args)
  "Resume path sentinel for the opening flow."
  (push 5 gr-trace)
  (setq gr-play-opening-result 'resume)
  (throw 'gr-play-opening-done 'resume))

(defun gr-play-func150 (&rest _args)
  "New-game path sentinel for the opening flow."
  (push 150 gr-trace)
  (setq gr-play-opening-result 'new-game)
  (throw 'gr-play-opening-done 'new-game))

(defun gr-play-install-local-missing-natives ()
  "Install local natives needed by the play loop."
  (setq gr-play-saved-native-func015 (gethash "func015" gr-native-funcs))
  (setq gr-play-saved-native-func338 (gethash "func338" gr-native-funcs))
  (setq gr-play-saved-native-func005 (gethash "func005" gr-native-funcs))
  (setq gr-play-saved-native-func150 (gethash "func150" gr-native-funcs))
  (gr-defnative "func338" #'gr-play-func338)
  (gr-defnative "func005" #'gr-play-func005)
  (gr-defnative "func150" #'gr-play-func150))

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
  (if gr-play-saved-native-func005
      (gr-defnative "func005" gr-play-saved-native-func005)
    (when gr-native-funcs
      (remhash "func005" gr-native-funcs)))
  (if gr-play-saved-native-func150
      (gr-defnative "func150" gr-play-saved-native-func150)
    (when gr-native-funcs
      (remhash "func150" gr-native-funcs)))
  (setq gr-play-saved-native-func015 nil)
  (setq gr-play-saved-native-func338 nil)
  (setq gr-play-saved-native-func005 nil)
  (setq gr-play-saved-native-func150 nil))

(defun gr-play-gr-emit-wrapper (op &rest args)
  "Capture title/login frames that use Adap.redraw directly."
  (when (and gr-play-opening-active
             (equal op "gui-present")
             (numberp (car args))
             (= (car args) 0))
    (setq gr-sumi nil))
  (apply gr-play-orig-gr-emit op args)
  (when (and gr-play-opening-active
             (equal op "gui-present")
             (numberp (car args))
             (= (car args) 1))
    (setq gr-play-title-frame-count (1+ gr-play-title-frame-count))
    (gr-play-dump-current-frame)))

(defun gr-play-opening-held-p (keycode)
  "Return non-nil when KEYCODE is currently held in the key file."
  (and (hash-table-p gr-play-held-codes)
       (> (gethash keycode gr-play-held-codes 0) 0)))

(defun gr-play-opening-note-screen-transition ()
  "Require a release and later SEQ before the next opening confirm is valid."
  (setq gr-play-opening-guard-seq gr-play-last-seq
        gr-play-opening-release-seen nil))

(defun gr-play-opening-track-release (record)
  "Notice when a full key release happened after RECORD during opening."
  (when (and record
             (> (or (plist-get record :seq) 0) gr-play-opening-guard-seq)
             (not (hash-table-p gr-play-held-codes)))
    (setq gr-play-opening-release-seen t))
  (when (and record
             (> (or (plist-get record :seq) 0) gr-play-opening-guard-seq)
             (hash-table-p gr-play-held-codes)
             (= 0 (hash-table-count gr-play-held-codes)))
    (setq gr-play-opening-release-seen t)))

(defun gr-play-opening-confirm-ready-p (record)
  "Return non-nil when RECORD is a fresh post-release confirm candidate."
  (and record
       gr-play-last-input-was-new
       (> (or (plist-get record :seq) 0) gr-play-opening-guard-seq)
       gr-play-opening-release-seen))

(defun gr-play-opening-render-login ()
  "Render the login/save-slot screen once."
  (let ((start (float-time)))
    (setq gr-sumi nil)
    (gr-emit "gui-present" 0)
    (unless gr-play-opening-login-rendered
      (setq gr-play-opening-login-rendered t))
    (gr-run-func "func146")
    (gr-run-func "func148")
    (gr-emit "gui-present" 1)
    (setq gr-play-opening-render-seconds
          (+ gr-play-opening-render-seconds (- (float-time) start)))))

(defun gr-play-opening-new-game-slot-p ()
  "Return non-nil when the selected save slot has no existing save file."
  (let ((slot (or (gr-get 726) 1))
        (file-name nil))
    (setq file-name
          (cond
           ((= slot 1) "01.dat")
           ((= slot 2) "02.dat")
           ((= slot 3) "03.dat")
           (t "01.dat")))
    (gr-file-exists file-name)
    (= (or (gr-get "strsize") -1) -1)))

(defun gr-play-opening-login-loop ()
  "Drive the login/new-game selection until the dungeon boot should start."
  (let ((done nil)
        (record nil)
        (poll-start 0.0))
    (gr-set 725 1)
    (gr-set 726 1)
    (gr-set 734 0)
    (while (not done)
      (setq gr-play-opening-login-loops (1+ gr-play-opening-login-loops))
      (gr-play-opening-render-login)
      (setq poll-start (float-time))
      (setq record (gr-play-refresh-input))
      (gr-play-opening-track-release record)
      (setq gr-play-opening-poll-seconds
            (+ gr-play-opening-poll-seconds (- (float-time) poll-start)))
      (when (gr-play-opening-confirm-ready-p record)
        (cond
         ((gr-play-opening-held-p 38)
          (gr-set 726 (max 1 (1- (or (gr-get 726) 1)))))
         ((gr-play-opening-held-p 40)
          (gr-set 726 (min 3 (1+ (or (gr-get 726) 1)))))
         ((or (gr-play-opening-held-p 90) (gr-play-opening-held-p 65))
          (setq gr-play-opening-result
                (if (gr-play-opening-new-game-slot-p) 'new-game 'resume))
          (setq done t))
         ((gr-play-opening-held-p 88)
          (setq done t))))
      (unless done
        (setq poll-start (float-time))
        (sleep-for gr-play-opening-poll-sleep-seconds)
        (setq gr-play-opening-sleep-seconds
              (+ gr-play-opening-sleep-seconds (- (float-time) poll-start)))))))

(defun gr-play-opening-title-loop ()
  "Render the title screen until confirm input enters the login screen."
  (let ((entered-login nil)
        (record nil)
        (render-start 0.0)
        (poll-start 0.0))
    (gr-set 64 0)
    (while (not entered-login)
      (setq gr-play-opening-title-loops (1+ gr-play-opening-title-loops))
      (setq render-start (float-time))
      (gr-run-func "func141")
      (setq gr-play-opening-render-seconds
            (+ gr-play-opening-render-seconds (- (float-time) render-start)))
      (setq poll-start (float-time))
      (setq record (gr-play-refresh-input))
      (setq gr-play-opening-poll-seconds
            (+ gr-play-opening-poll-seconds (- (float-time) poll-start)))
      (when (and record gr-play-last-input-was-new)
        (when (or (gr-play-opening-held-p 90)
                  (gr-play-opening-held-p 65)
                  (gr-play-opening-held-p 88)
                  (gr-play-opening-held-p 87)
                  (gr-play-opening-held-p 83)
                  (gr-play-opening-held-p 37)
                  (gr-play-opening-held-p 38)
                  (gr-play-opening-held-p 39)
                  (gr-play-opening-held-p 40))
          (setq entered-login t)
          (gr-play-opening-note-screen-transition))))
      (unless entered-login
        (setq poll-start (float-time))
        (sleep-for gr-play-opening-poll-sleep-seconds)
        (setq gr-play-opening-sleep-seconds
              (+ gr-play-opening-sleep-seconds (- (float-time) poll-start))))))

(defun gr-play-bootstrap-opening ()
  "Run func004 through the title/login flow until a boot path is selected."
  (let ((old-depth gr-depth-limit))
    (gr-play-reset-session-saves)
    (gr-reset)
    (gr-set "stat" 1)
    (gr-set "hwnd" 0)
    (setq gr-play-opening-active t
          gr-play-opening-result nil
          gr-play-title-frame-count 0
          gr-play-opening-guard-seq gr-play-last-seq
          gr-play-opening-release-seen t
          gr-play-opening-login-rendered nil)
    (unwind-protect
        (let ((saved-func139A (gethash "func139A" gr-native-funcs)))
          (unwind-protect
              (progn
                (setq gr-depth-limit (max gr-depth-limit 5000))
                (gr-defnative "func139A" (lambda (&rest _args) nil))
                (gr-run-func "func004")
                (when saved-func139A
                  (gr-defnative "func139A" saved-func139A))
                (gr-play-opening-title-loop)
                (gr-play-opening-login-loop))
            (if saved-func139A
                (gr-defnative "func139A" saved-func139A)
              (when gr-native-funcs
                (remhash "func139A" gr-native-funcs)))))
      (setq gr-play-opening-active nil)
      (setq gr-depth-limit old-depth)))
  (let ((line
          (format
           "PLAY-OPENING title_loops=%d login_loops=%d render=%.3f poll=%.3f sleep=%.3f result=%S"
          gr-play-opening-title-loops
          gr-play-opening-login-loops
          gr-play-opening-render-seconds
          gr-play-opening-poll-seconds
          gr-play-opening-sleep-seconds
          gr-play-opening-result)))
    (princ (concat line "\n"))
    (gr-play-write-opening-profile line))
  (unless (memq gr-play-opening-result '(new-game resume))
    (error "opening flow did not select a playable path (result=%S)" gr-play-opening-result)))

(defun gr-play-log-status ()
  "Print one periodic movement/status line."
  (princ (format "PLAY-STATUS redraw=%d loop=%d dumped=%d skipped=%d player=%s,%s floor=%s token=%s consumed=%d/%d missed=%d readerr=%d\n"
                 gr-play-redraw-count
                 gr-play-loop-count
                 gr-play-dumped-count
                 gr-play-skipped-count
                 (or (gr-get 66) 0)
                 (or (gr-get 67) 0)
                 (or (gr-get "current_floor") 0)
                 gr-play-last-token
                 gr-play-consumed-press-count
                 gr-play-received-press-count
                 gr-play-missed-press-count
                 gr-play-read-error-count)))

(defun gr-play-func337-wrapper (&rest args)
  "Dump one frame per redraw by wrapping the real func337."
  (let ((draw-start (float-time))
        (result nil))
    (setq gr-play-redraw-key-queries nil)
    (setq gr-sumi nil)
    (setq result (apply gr-play-orig-func337 args))
    (setq gr-play-draw-seconds
          (+ gr-play-draw-seconds (- (float-time) draw-start)))
    (setq gr-play-redraw-count (1+ gr-play-redraw-count))
    (gr-play-dump-current-frame)
    (when (= 0 (mod gr-play-redraw-count gr-play-report-every))
      (gr-play-log-status))
    result))

(defun gr-play-func009-wrapper (&rest args)
  "Loop pacing/termination wrapper around the real func009."
  (if (> gr-play-loop-count 0)
      (throw 'gr-play-trampoline 'continue)
    (let ((stop nil)
          (done nil))
      (while (not done)
        (setq gr-play-loop-count (1+ gr-play-loop-count))
        (gr-play-log-depth)
        (setq gr-step-count 0)
        (condition-case err
            (progn
              (setq gr-trace nil gr-missing nil)
              (setq stop
                    (catch 'gr-play-frame-stop
                      (catch 'gr-play-trampoline
                        (apply gr-play-orig-func009 args)
                        nil)
                      nil)))
          (error
           (princ (format "PLAY-FRAME-ERROR loop=%d redraw=%d %s\n"
                          gr-play-loop-count
                          gr-play-redraw-count
                          (error-message-string err)))
           (setq done t)))
        (when (or stop
                  gr-play-quit-requested
                  (>= (- (float-time) gr-play-start-time) gr-play-duration-seconds))
          (setq done t))))
    (throw 'gr-play-stop 'done))
  nil)

(let ((old-budget gr-step-budget)
      (old-depth gr-depth-limit))
  (unwind-protect
      (progn
        (setq gr-step-budget 2000000)
        ;; The dungeon draw chain (func009 -> func337 -> per-enemy status
        ;; icons like func568) legitimately nests past 400 once enemies
        ;; carry status effects; 400 killed a live session at loop 302.
        (setq gr-depth-limit 2000)
        ;; Each gr level costs several interpreter frames, so the elisp
        ;; ceiling must scale with gr-depth-limit (the death chain blew
        ;; the default at loop 186 of a live session).
        (setq max-lisp-eval-depth 200000)
        (setq max-specpdl-size 200000)
        (gr-play-init-frame-queue)
        (setq gr-play-frame-count 0
              gr-play-last-frame-records nil
              gr-play-redraw-count 0
              gr-play-loop-count 0
              gr-play-title-frame-count 0
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
              gr-play-depth-log nil
              gr-play-first-frame-histogram nil
              gr-play-first-frame-missing nil
              gr-play-first-frame-state nil
              gr-play-first-player-frame-histogram nil
              gr-play-first-enemy-frame-histogram nil
              gr-play-quit-requested nil
              gr-play-opening-title-loops 0
              gr-play-opening-login-loops 0
              gr-play-opening-render-seconds 0.0
              gr-play-opening-poll-seconds 0.0
              gr-play-opening-sleep-seconds 0.0
              gr-play-opening-guard-seq 0
              gr-play-opening-release-seen t
              gr-play-opening-login-rendered nil
              gr-play-session-data-root nil
              gr-play-last-seq 0
              gr-play-last-token "IDLE"
              gr-play-held-codes (make-hash-table :test 'equal)
              gr-play-file-held-codes (make-hash-table :test 'equal)
              gr-play-pending-presses nil
              gr-play-synced-keycodes nil
              gr-play-read-error-count 0
              gr-play-received-press-count 0
              gr-play-consumed-press-count 0
              gr-play-missed-press-count 0)

        (gr-play-install-local-missing-natives)
        (setq gr-play-orig-gr-emit (symbol-function 'gr-emit))
        (fset 'gr-emit #'gr-play-gr-emit-wrapper)
        (condition-case err
            (progn
              ;; GR_PLAY_SKIP_OPENING=1 boots straight into the dungeon
              ;; (the v2/v3 path).  The title/login opening composes into
              ;; work canvases across frames, so it needs the lossless
              ;; frame pipeline (pending) to display reliably.
                (if (equal (getenv "GR_PLAY_SKIP_OPENING") "1")
                  ;; Mirror run-init.el: init without entering the title flow.
                  (let ((saved-func139A (gethash "func139A" gr-native-funcs))
                        (old-depth gr-depth-limit))
                    (gr-play-reset-session-saves)
                    (gr-reset)
                    (gr-set "stat" 1)
                    (gr-set "hwnd" 0)
                    (unwind-protect
                        (progn
                          (setq gr-depth-limit (max gr-depth-limit 5000))
                          (gr-defnative "func139A" (lambda (&rest _args) nil))
                          (gr-run-func "func004"))
                      (setq gr-depth-limit old-depth)
                      (if saved-func139A
                          (gr-defnative "func139A" saved-func139A)
                        (when gr-native-funcs
                          (remhash "func139A" gr-native-funcs)))))
                (gr-play-bootstrap-opening))
              (if (eq gr-play-opening-result 'resume)
                  (gr-play-bootstrap-resume-init)
                (gr-play-bootstrap-real-init)))
          (error
           (princ (format "PLAY-BOOTSTRAP-ERROR %s\n" (error-message-string err)))))
        (gr-play-apply-post-init-state)

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
          "PLAY-FPS redraw=%d title=%d dumped=%d elapsed=%.3f fps=%.3f draw=%.3f serialize=%.3f io=%.3f\n"
          gr-play-redraw-count
          gr-play-title-frame-count
          gr-play-dumped-count
          (max 0.001 (- (float-time) gr-play-start-time))
          (/ (float gr-play-redraw-count)
             (max 0.001 (- (float-time) gr-play-start-time)))
          gr-play-draw-seconds
          gr-play-serialize-seconds
          gr-play-io-seconds))
        (princ
         (format "PLAY-INPUT consumed=%d/%d missed=%d readerr=%d pending=%d\n"
                 gr-play-consumed-press-count
                 gr-play-received-press-count
                 gr-play-missed-press-count
                 gr-play-read-error-count
                 (length gr-play-pending-presses)))
        (princ (format "PLAY-DEPTH-LOG %S\n" (nreverse gr-play-depth-log)))
        (princ (format "PLAY-DONE %d\n" gr-play-redraw-count)))
    (setq gr-step-budget old-budget)
    (setq gr-depth-limit old-depth)
    (setq gr-read-key-state-fn nil)
    (setq gr-reset-key-fn nil)
    (when gr-play-orig-gr-emit
      (fset 'gr-emit gr-play-orig-gr-emit))
    (gr-play-restore-local-missing-natives)
    (when gr-play-orig-func337
      (gr-defnative "func337" gr-play-orig-func337))
    (when gr-play-orig-func009
      (gr-defnative "func009" gr-play-orig-func009))))

(provide 'play)
