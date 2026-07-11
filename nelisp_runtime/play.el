;;; play.el --- interactive pure-elisp play driver -*- coding: utf-8; lexical-binding: t; -*-
;;
;; HUMAN RUNBOOK (preferred, run from the repo root):
;;
;;    emacs -Q --batch -l nelisp_runtime/start-live.el
;;
;; Manual split-run equivalent:
;;
;; 1. Native watcher window
;;    C:/Users/kuroz/AppData/Local/Temp/sumi-sprite-live.exe
;; 2. Pure-elisp direct-bin frame feeder
;;    emacs -Q --batch -l nelisp_runtime/live-feed-loop.el -- \
;;      --direct-bin C:/Users/kuroz/Cowork/Notes/dev/sumi/backends/cairo-elisp/sumi-sprite.bin
;; 3. Play driver
;;    emacs -Q --batch -l nelisp_runtime/build-play-bundle.el
;;    $env:HOME=(Resolve-Path build/emacs-home)
;;    emacs -Q --batch --eval "(progn (prefer-coding-system 'utf-8) (setq coding-system-for-write 'utf-8))" -l build/play-bundle-loader.el
;;
;; Keyboard input is handled by the native GTK window and written directly to
;; build/key-state.txt by the renderer.

(require 'cl-lib)

(defconst gr-play-build-dir
  (expand-file-name "../build" (file-name-directory (or load-file-name buffer-file-name))))

(defconst gr-play-runtime-dir
  (file-name-directory (or load-file-name buffer-file-name)))

(defconst gr-play-key-state-path
  (expand-file-name "key-state.txt" gr-play-build-dir))

(defconst gr-play-frame-path
  (expand-file-name "frame-current.json" gr-play-build-dir))

(defconst gr-play-frame-seq-path
  (expand-file-name "frame-current.seq" gr-play-build-dir))

(defconst gr-play-default-direct-bin-path
  (expand-file-name "../../sumi/backends/cairo-elisp/sumi-sprite.bin" gr-play-runtime-dir))

(defconst gr-play-frames-dir
  (expand-file-name "frames" gr-play-build-dir))

(defconst gr-play-opening-profile-path
  (expand-file-name "play-opening-profile.txt" gr-play-build-dir))

(defconst gr-play-saves-dir
  (expand-file-name "saves-play" gr-play-build-dir))

(defvar gr-play-duration-seconds
  (or (and (getenv "GR_PLAY_DURATION_SECONDS")
           (string-to-number (getenv "GR_PLAY_DURATION_SECONDS")))
      300)
  "How long the interactive play loop runs before exiting.")

(defvar gr-play-report-every 25
  "Print one status line every N frames.")

(defvar gr-play-dedup-frames
  (not (string= (or (getenv "GR_PLAY_DEDUP_FRAMES") "1") "0"))
  "When non-nil, compare full frame records to skip duplicate dumps.")

(defvar gr-play-direct-bin-enabled
  (not (string= (or (getenv "GR_PLAY_DIRECT_BIN") "1") "0"))
  "When non-nil, write renderer binary frames directly instead of JSON.")

(defvar gr-play-direct-bin-path
  (expand-file-name (or (getenv "GR_PLAY_DIRECT_BIN_PATH")
                        gr-play-default-direct-bin-path))
  "Path to the sumi-sprite-live binary handoff file.")
(defvar gr-play-renderer-path
  (and (getenv "GR_PLAY_RENDERER_PATH")
       (expand-file-name (getenv "GR_PLAY_RENDERER_PATH")))
  "Optional renderer executable launched after direct-bin output is warm.")
(defvar gr-play-renderer-launch-seq 2
  "Launch the renderer after this many direct-bin frames have been written.")
(defvar gr-play-renderer-started nil)

(defvar gr-play-direct-bin-loaded nil
  "Non-nil after the live binary packer has been loaded.")

(defvar gr-play-key-stale-seconds 0.75
  "Treat key-state.txt as stale after this many seconds.")

(defvar gr-play-pending-key-max-age-seconds 1.0
  "Treat a latched unconsumed press as missed after this many seconds.")

(defvar gr-play-idle-sleep-seconds
  (or (and (getenv "GR_PLAY_IDLE_SLEEP_SECONDS")
           (string-to-number (getenv "GR_PLAY_IDLE_SLEEP_SECONDS")))
      0.0)
  "Sleep this long when no key is currently held.")

(defvar gr-play-forced-animation-delay
  (and (getenv "GR_PLAY_ANIMATION_DELAY")
       (string-to-number (getenv "GR_PLAY_ANIMATION_DELAY")))
  "When non-nil, force animationDelay after boot for speed diagnostics.")

(defvar gr-play-last-speed-pacing-delay nil
  "Last frame pacing delay derived from animationDelay.")

(defvar gr-live-feed-library-only nil)
(defvar gr-live-feed-direct-bin nil)
(defvar gr-live-feed-bin-seq nil)
(defvar gr-live-feed-scheduled-paths nil)
(defvar gr-live-feed-pending-deletes nil)

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
(defvar gr-play-function-key-down nil
  "Hash of live function-key codes already handled while held.")
(defvar gr-play-read-error-count 0)
(defvar gr-play-received-press-count 0)
(defvar gr-play-consumed-press-count 0)
(defvar gr-play-missed-press-count 0)
(defvar gr-play-quit-requested nil)
(defvar gr-play-orig-func009 nil)
(defvar gr-play-orig-func337 nil)
(defvar gr-play-orig-func080 nil)
(defvar gr-play-orig-func020 nil)
(defvar gr-play-orig-gr-emit nil)
(defvar gr-play-worldgen-saved-func009 nil)
(defvar gr-play-saved-native-func338 nil)
(defvar gr-play-saved-native-func005 nil)
(defvar gr-play-saved-native-func150 nil)
(defvar gr-play-redraw-count 0)
(defvar gr-play-loop-count 0)
(defvar gr-play-enemy-turn-count 0)
(defvar gr-play-title-frame-count 0)
(defvar gr-play-dumped-count 0)
(defvar gr-play-skipped-count 0)
(defvar gr-play-deduped-json-write-count 0)
(defvar gr-play-draw-seconds 0.0)
(defvar gr-play-serialize-seconds 0.0)
(defvar gr-play-io-seconds 0.0)
(defvar gr-play-last-frame-json nil)
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
(defvar gr-play-live-active nil
  "Non-nil while the live func009 play loop runs (post-opening).")
(defvar gr-play-in-func337-draw nil
  "Dynamically t while the func337 dungeon-draw wrapper runs its draw+dump.")
(defvar gr-play-opening-result nil)
(defvar gr-play-opening-title-loops 0)
(defvar gr-play-opening-login-loops 0)
(defvar gr-play-load-screen-frame-count 0)
(defvar gr-play-load-screen-sleep-seconds 0.02)
(defvar gr-play-opening-story-frame-count 0)
(defvar gr-play-opening-story-message-count 0)
(defvar gr-play-opening-story-wait-count 0)
(defvar gr-play-opening-story-used-generated nil)
(defvar gr-play-opening-story-sleep-seconds 0.04)
(defvar gr-play-opening-render-seconds 0.0)
(defvar gr-play-opening-poll-seconds 0.0)
(defvar gr-play-opening-sleep-seconds 0.0)
(defvar gr-play-frame-seq 0)
(defvar gr-play-queue-overflow-logged nil)
(defvar gr-play-static-setup-frames-left 8
  "Number of upcoming frames that should include static setup records.")

(defvar gr-play-include-static-setup-every-direct-bin-frame
  (not (string= (or (getenv "GR_PLAY_STATIC_SETUP_EVERY_DIRECT_BIN_FRAME") "1") "0"))
  "When non-nil, direct-bin frames are self-contained for late renderer starts.")
(defvar gr-play-opening-guard-seq 0)
(defvar gr-play-opening-release-seen nil)
(defvar gr-play-opening-login-rendered nil)
(defvar gr-play-scripted-opening
  (equal (getenv "GR_PLAY_SCRIPTED_OPENING") "1")
  "When non-nil, drive title/login confirms deterministically for probes.")
(defvar gr-play-start-in-hotel
  (and (not (equal (getenv "GR_PLAY_SKIP_OPENING") "1"))
       (not (equal (getenv "GR_PLAY_START_IN_HOTEL") "0")))
  "When non-nil, route a new-game opening to the Venice hotel hub.")
(defvar gr-play-hotel-start-count 0)
(defvar gr-play-session-data-root nil)
(defvar gr-play-post-init-hook nil
  "Optional function run after boot/init, before the live loop starts.")
(defvar gr-play-before-key-poll-hook nil
  "Optional function run immediately before each live func080 key poll.")
(defvar gr-play-after-frame-hook nil
  "Optional function run after each dumped redraw frame.")
(defvar gr-play-profile-funcs
  '("func324" "func324X" "func326" "func337" "func353" "func330" "func328" "func325"
    "func342" "func343" "func345" "func352" "func396" "func397" "func538" "func539" "func553" "func565" "func566" "func568" "func626" "func048" "func460"
    "func054" "func196" "func338")
  "Function names sampled by the optional live profiler.")
(defvar gr-play-profile-table nil
  "Hash table of function profile stats when enabled.")

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
          (let ((trigger-code (or (plist-get record :keycode) 0))
                (trigger-enqueued nil))
            (dolist (code held)
              (unless (> (gethash code old-held 0) 0)
                (gr-play-enqueue-press seq code)
                (when (= code trigger-code)
                  (setq trigger-enqueued t))))
            (when (and (> trigger-code 0)
                       (not trigger-enqueued))
              (gr-play-enqueue-press seq trigger-code)))
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
  ;; The native runtime still sees a held key on the next poll after
  ;; ResetKey; clearing the held table here destroys simultaneous-arrow
  ;; state and prevents hold-to-repeat movement.  Only the one-shot press
  ;; latch should be forgotten.
  (let ((needle (gr-num keycode))
        (pending gr-play-pending-presses)
        (kept nil)
        (entry nil))
    (while pending
      (setq entry (car pending))
      (setq pending (cdr pending))
      (unless (= (or (plist-get entry :keycode) -1) needle)
        (push entry kept)))
    (setq gr-play-pending-presses (nreverse kept)))
  (gr-play-sync-pushing-key-list)
  0)

(defun gr-play-emit-control-frame (&rest commands)
  "Emit COMMANDS as an immediate control frame."
  (setq gr-sumi nil)
  (dolist (command commands)
    (apply #'gr-emit command))
  (if (if gr-play-direct-bin-enabled
          (progn
            (gr-play-write-direct-bin-frame gr-sumi)
            t)
        (gr-play-write-frame (gr-play-frame-records-to-json gr-sumi)))
      (setq gr-play-dumped-count (1+ gr-play-dumped-count))
    (setq gr-play-skipped-count (1+ gr-play-skipped-count)))
  (setq gr-play-last-frame-records nil)
  (setq gr-sumi nil))

(defun gr-play-current-key-active-p (keycode)
  "Return non-nil when KEYCODE is currently held."
  (> (gethash keycode gr-play-held-codes 0) 0))

(defun gr-play-toggle-output-size ()
  "Toggle the live output size using the original window-size state slot."
  (if (equal (gr-get 10) 1)
      (progn
        (gr-set 10 0)
        (gr-play-emit-control-frame (list "dtw-resize-window" 340 340)))
    (gr-set 10 1)
    (gr-play-emit-control-frame (list "dtw-resize-window" 680 680))))

(defun gr-play-handle-function-key-settings ()
  "Handle live function-key settings.  Return non-nil when a key was handled."
  (gr-play-refresh-input)
  (unless (hash-table-p gr-play-function-key-down)
    (setq gr-play-function-key-down (make-hash-table :test 'equal)))
  (let ((handled nil))
    (dolist (entry '((112 . size) (113 . bgm-down) (114 . bgm-up)
                     (115 . se-down) (116 . se-up) (118 . bgm-stop)
                     (123 . size)))
      (let* ((keycode (car entry))
             (action (cdr entry))
             (active (gr-play-current-key-active-p keycode))
             (was-active (> (gethash keycode gr-play-function-key-down 0) 0)))
        (cond
         ((and active (not was-active))
          (puthash keycode 1 gr-play-function-key-down)
          (setq handled t)
          (pcase action
            ('size (gr-play-toggle-output-size))
            ('bgm-down (gr-play-emit-control-frame (list "music-func088")))
            ('bgm-up (gr-play-emit-control-frame (list "music-func087")))
            ('se-down (gr-play-emit-control-frame (list "music-func085")))
            ('se-up (gr-play-emit-control-frame (list "music-func086")))
            ('bgm-stop (gr-play-emit-control-frame (list "dtw-music-stop")))))
         ((not active)
          (puthash keycode 0 gr-play-function-key-down)))))
    handled))

(defun gr-play-rename-file-retry (from to &optional ok-if-missing)
  "Rename FROM to TO, retrying briefly for Windows reader locks."
  (let ((tries 0)
        (done nil)
        (last-error nil))
    (while (and (not done) (< tries 20))
      (condition-case err
          (progn
            (rename-file from to ok-if-missing)
            (setq done t))
        (file-error
         (setq last-error err)
         (setq tries (1+ tries))
         (sleep-for 0.005))))
    (unless done
      (signal (car last-error) (cdr last-error)))))

(defun gr-play-write-frame (json)
  "Atomically write JSON to the live frame handoff path."
  (if (equal json gr-play-last-frame-json)
      (progn
        (setq gr-play-deduped-json-write-count
              (1+ gr-play-deduped-json-write-count))
        nil)
    (let* ((seq (setq gr-play-frame-seq (1+ gr-play-frame-seq)))
           (current-tmp-path (concat gr-play-frame-path ".tmp"))
           (seq-tmp-path (concat gr-play-frame-seq-path ".tmp"))
           (coding-system-for-write 'utf-8))
      (unless (file-directory-p (file-name-directory gr-play-frame-path))
        (make-directory (file-name-directory gr-play-frame-path) t))
      (write-region json nil current-tmp-path nil 'silent)
      (gr-play-rename-file-retry current-tmp-path gr-play-frame-path t)
      (write-region (format "%d\n" seq) nil seq-tmp-path nil 'silent)
      (gr-play-rename-file-retry seq-tmp-path gr-play-frame-seq-path t)
      (setq gr-play-last-frame-json json)
      t)))

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
      (delete-file gr-play-frame-path))
    (when (file-exists-p gr-play-frame-seq-path)
      (delete-file gr-play-frame-seq-path))))

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

(defvar gr-play-setup-records-json-body nil
  "Cached JSON object list for `gr-play-setup-records' in chronological order.")

(defconst gr-play-required-load-images
  '((36 . "img_enemy5a.gif")
    (37 . "img_enemy5b.gif"))
  "Image buffers that live play can reference before the setup harvester sees them.

Boss buffers 36/37 are absent from the title/opening bootstrap path, so a
setup stream harvested only from observed frames omits their `gui-load-image'
records.  Pre-seeding them keeps the live stream self-contained for boss draws.")

(defun gr-play-live-enemy-positions ()
  "Return live enemy positions as ((IDX X Y) ...)."
  (let ((rows (gr-get 83))
        (idx 1)
        (row nil)
        (out nil))
    (while (and (vectorp rows) (< idx (length rows)))
      (setq row (aref rows idx))
      (when (and row
                 (not (equal (gr-prop-ref row "Var0") 0))
                 (> (gr-num (or (gr-prop-ref row "Var3") 0)) 0))
        (push (list idx
                    (gr-num (or (gr-prop-ref row "Var1") 0))
                    (gr-num (or (gr-prop-ref row "Var2") 0)))
              out))
      (setq idx (1+ idx)))
    (nreverse out)))

(defun gr-play-collect-setup-records ()
  "Harvest screen/load-image records from the current `gr-sumi'."
  (dolist (entry (reverse gr-sumi))
    (let ((op (car entry)))
      (when (member op '("gui-screen" "dtw-screen" "gui-load-image" "dtw-load-image"))
        (let ((key (format "%s:%s" op (cadr entry))))
          (unless (gethash key gr-play-setup-seen)
            (puthash key t gr-play-setup-seen)
            (push entry gr-play-setup-records)
            (setq gr-play-setup-records-json-body nil))))))
  (dolist (entry gr-play-required-load-images)
    (let* ((buffer-id (car entry))
           (image-name (cdr entry))
           (key (format "gui-load-image:%s" buffer-id)))
      (unless (gethash key gr-play-setup-seen)
        (puthash key t gr-play-setup-seen)
        (push (list "gui-load-image" buffer-id image-name) gr-play-setup-records)
        (setq gr-play-setup-records-json-body nil)))))

(defun gr-play-get-setup-records-json-body ()
  "Return cached setup records as a JSON object list."
  (unless gr-play-setup-records-json-body
    (setq gr-play-setup-records-json-body
          (gr-sumi-records-json-body gr-play-setup-records)))
  gr-play-setup-records-json-body)

(defvar gr-play-boot-composition nil
  "Boot-time static work-buffer composition ops, newest-first.
func004 fills some work buffers once (e.g. buffer 12 = the blue
message-box background via buffer(12)+color+boxf).  The per-frame dump
clears `gr-sumi' each redraw, so without replay those buffers are
blitted empty (the transparent message box).  Captured once after boot
and replayed at the head of every frame.")

(defvar gr-play-boot-composition-json-body nil
  "Cached JSON object list for `gr-play-boot-composition'.")

(defconst gr-play-per-frame-buffers '(0 4 7 10 32)
  "Buffers the screen or per-frame draws recompose, so boot state is moot.")

(defconst gr-play-transient-boot-buffers '(36 37)
  "Boot-only buffers that must never be replayed into live frames.")

(defun gr-play-capture-boot-composition ()
  "Harvest static boot-time work-buffer composition from `gr-sumi'.

Window backgrounds are built once at boot and then blitted every frame.
Some of those buffers are not pure fills: they also receive image blits,
so the older \"keep only fill/no-blit buffers\" rule dropped them and
left live windows transparent.  Keep all boot-composed work buffers
except the known per-frame and transient loaders (`36' / `37')."
  (let ((cur 0)
        (order nil)                     ; buffer ids in first-seen order
        (ops (make-hash-table))         ; buffer id -> chronological op list
        (has-op (make-hash-table)))
    (dolist (entry (reverse gr-sumi))   ; chronological order
      (let ((op (car entry)))
        (cond
         ((member op '("gui-select-buffer" "dtw-select-buffer"))
          (setq cur (gr-num (cadr entry))))
         ((or (memq cur gr-play-per-frame-buffers)
              (memq cur gr-play-transient-boot-buffers))
          nil)
         ((= cur 0) nil)
         ((member op '("gui-load-image" "dtw-load-image"
                       "gui-screen" "dtw-screen" "dtw-create-buffer"))
          nil)
         (t
          (unless (gethash cur ops) (push cur order))
          (push entry (gethash cur ops))
          (puthash cur t has-op)))))
    ;; Emit, per kept buffer, a select + its ops.  chrono ends up
    ;; newest-first (push while walking chronological), matching the
    ;; gr-sumi convention gr-sumi-records-json-body reverses.
    (let ((chrono nil)
          (kept nil))
      (dolist (id (nreverse order))
        (when (gethash id has-op)
          (setq kept t)
          (push (cons "gui-select-buffer" (list id)) chrono)
          ;; (gethash id ops) is newest-first; reverse to chronological
          ;; before pushing so the final push order stays consistent.
          (dolist (entry (reverse (gethash id ops)))
            (push entry chrono))))
      ;; Restore the draw target to the screen so the frame's own content
      ;; (which assumes it starts at buffer 0) is not misdirected into the
      ;; last composed work buffer.
      (when kept
        (push (cons "gui-select-buffer" (list 0)) chrono))
      (setq gr-play-boot-composition chrono)
      (setq gr-play-boot-composition-json-body nil))))

(defun gr-play-get-boot-composition-json-body ()
  "Return cached boot-composition records as a JSON object list."
  (unless (cl-some (lambda (entry)
                     (and (member (car entry) '("gui-select-buffer" "dtw-select-buffer"
                                                "gui-screen" "dtw-screen"))
                          (equal (gr-num (cadr entry)) 12)))
                   gr-play-boot-composition)
    ;; func004 creates buffer 12 once as the blue message/window backing
    ;; surface.  If boot harvesting misses it, later gcopy(12,...) draws a
    ;; transparent box.
    (setq gr-play-boot-composition
          (append (list (cons "gui-select-buffer" (list 0))
                        (cons "gui-fill-rect" (list 0 0 340 340))
                        (cons "gui-set-color" (list 0 0 200))
                        (cons "gui-select-buffer" (list 12))
                        (cons "gui-screen" (list 12 340 340)))
                  gr-play-boot-composition))
    (setq gr-play-boot-composition-json-body nil))
  (unless gr-play-boot-composition-json-body
    (setq gr-play-boot-composition-json-body
          (gr-sumi-records-json-body gr-play-boot-composition)))
  gr-play-boot-composition-json-body)

(defun gr-play-position-feeds-text-p (tail)
  "Return non-nil when the set-position at TAIL feeds a later text draw."
  (let ((rest (cdr tail))
        (feeds-text nil)
        (done nil))
    (while (and rest (not done))
      (let ((op (caar rest)))
        (cond
         ((member op '("gui-draw-text" "dtw-draw-text"))
          (setq feeds-text t
                done t))
         ((member op '("gui-set-position" "dtw-set-position"))
          (setq done t))))
      (setq rest (cdr rest)))
    feeds-text))

(defun gr-play-compact-positional-image-records (records)
  "Drop redundant set-position records that do not feed text.

Image, fill, line and point records already carry their own coordinates in
this runtime stream.  Only draw-text depends on the current position state."
  (let ((chrono (reverse records))
        (tail nil)
        (out nil))
    (setq tail chrono)
    (while chrono
      (let ((entry (car chrono))
            (drop nil))
        (when (member (car entry) '("gui-set-position" "dtw-set-position"))
          (setq drop (not (gr-play-position-feeds-text-p tail))))
        (unless drop
          (push entry out)))
      (setq chrono (cdr chrono)
            tail chrono))
    out))

(defun gr-play-compact-alpha-image-records (records)
  "Fold alpha immediately followed by scaled-image into one JSON record."
  (let ((chrono (reverse records))
        (out nil))
    (while chrono
      (let ((entry (car chrono))
            (next-entry (cadr chrono)))
        (if (and next-entry
                 (member (car entry) '("gui-set-alpha" "dtw-set-alpha"))
                 (member (car next-entry)
                         '("gui-draw-image-scaled" "dtw-draw-image-scaled")))
            (progn
              (push (cons "gui-draw-image-scaled-alpha"
                          (cons (or (cadr entry) 255) (cdr next-entry)))
                    out)
              (setq chrono (cdr chrono)))
          (push entry out)))
      (setq chrono (cdr chrono)))
    out))

(defun gr-play-compact-position-text-records (records)
  "Fold set-position immediately followed by draw-text into one JSON record."
  (let ((chrono (reverse records))
        (out nil))
    (while chrono
      (let ((entry (car chrono))
            (next-entry (cadr chrono)))
        (if (and next-entry
                 (member (car entry) '("gui-set-position" "dtw-set-position"))
                 (member (car next-entry) '("gui-draw-text" "dtw-draw-text")))
            (progn
              (push (cons "gui-draw-text-at"
                          (list (or (cadr entry) 0)
                                (or (caddr entry) 0)
                                (or (cadr next-entry) "")))
                    out)
              (setq chrono (cdr chrono)))
          (push entry out)))
      (setq chrono (cdr chrono)))
    out))

(defun gr-play-compact-render-state-records (records)
  "Drop redundant state records inside one frame.

The renderer keeps color, alpha, and target-buffer state.  A frame must
still establish its first observed state, but repeating the same state
again before it changes only increases pack/write work."
  (let ((chrono (reverse records))
        (out nil)
        (current-color :unknown)
        (current-alpha :unknown)
        (current-buffer :unknown))
    (dolist (entry chrono)
      (let ((op (car entry))
            (drop nil)
            (value nil))
        (cond
         ((member op '("gui-set-color" "dtw-set-color"))
          (setq value (cdr entry))
          (if (equal value current-color)
              (setq drop t)
            (setq current-color value)))
         ((member op '("gui-set-alpha" "dtw-set-alpha"))
          (setq value (cadr entry))
          (if (equal value current-alpha)
              (setq drop t)
            (setq current-alpha value)))
         ((member op '("gui-select-buffer" "dtw-select-buffer"))
          (setq value (cadr entry))
          (if (equal value current-buffer)
              (setq drop t)
            (setq current-buffer value))))
        (unless drop
          (push entry out))))
    out))

(defun gr-play-frame-records-to-json (records)
  "Serialize RECORDS with setup + boot composition prepended in wire order.
Order: screen/load-image setup, then boot-time work-buffer fills (e.g.
buffer 12's blue message box), then the frame's own draws — so any
frame is self-contained for a consumer that starts or resyncs."
  (let* ((records (gr-play-compact-render-state-records
                   (gr-play-compact-position-text-records
                    (gr-play-compact-alpha-image-records
                     (gr-play-compact-positional-image-records records)))))
         (include-static (or (and gr-play-direct-bin-enabled
                                  gr-play-include-static-setup-every-direct-bin-frame)
                             (> gr-play-static-setup-frames-left 0)))
         (setup-body (if include-static (gr-play-get-setup-records-json-body) ""))
         (boot-body (if include-static (gr-play-get-boot-composition-json-body) ""))
         (frame-body (gr-sumi-records-json-body records))
         (parts (delq nil
                      (list (and (> (length setup-body) 0) setup-body)
                            (and (> (length boot-body) 0) boot-body)
                            (and (> (length frame-body) 0) frame-body)))))
    (when (and include-static
               (not (and gr-play-direct-bin-enabled
                         gr-play-include-static-setup-every-direct-bin-frame)))
      (setq gr-play-static-setup-frames-left (1- gr-play-static-setup-frames-left)))
    (concat "[" (mapconcat #'identity parts ",") "]")))

(defun gr-play-ensure-direct-bin-packer ()
  "Load the live binary packer once when direct-bin output is enabled."
  (when (and gr-play-direct-bin-enabled (not gr-play-direct-bin-loaded))
    (setq gr-live-feed-library-only t)
    (load (expand-file-name "live-feed-loop.el" gr-play-runtime-dir) nil t)
    (setq gr-live-feed-direct-bin gr-play-direct-bin-path)
    (setq gr-live-feed-bin-seq 0)
    (setq gr-live-feed-scheduled-paths (make-hash-table :test 'equal))
    (setq gr-live-feed-pending-deletes (make-hash-table :test 'equal))
    (gr-live-feed-load-title-stream-table)
    (setq gr-play-direct-bin-loaded t)))

(defun gr-play-record-to-feed-record (entry)
  "Convert one gr-sumi ENTRY to the feeder record alist shape."
  (let ((op (car entry))
        (args (cdr entry))
        (nums nil)
        (text nil))
    (dolist (arg args)
      (cond
       ((member op '("gui-draw-text" "dtw-draw-text"))
        (when (null text)
          (setq text (if (null arg) "" (format "%s" arg)))))
       ((numberp arg)
        (push arg nums))
       ((null arg)
        (push 0 nums))
       ((and (null text) (stringp arg))
        (setq text arg))))
    (vector op (nreverse nums) text)))

(defun gr-play-frame-records-to-feed-records (records)
  "Return RECORDS plus static setup in chronological feeder-record order."
  (let* ((records (gr-play-compact-render-state-records
                   (gr-play-compact-position-text-records
                    (gr-play-compact-alpha-image-records
                     (gr-play-compact-positional-image-records records)))))
         (include-static (or (and gr-play-direct-bin-enabled
                                  gr-play-include-static-setup-every-direct-bin-frame)
                             (> gr-play-static-setup-frames-left 0)))
          (wire-records (append (when include-static (reverse gr-play-setup-records))
                                (when include-static (reverse gr-play-boot-composition))
                                (reverse records))))
    (when (and include-static
               (not (and gr-play-direct-bin-enabled
                         gr-play-include-static-setup-every-direct-bin-frame)))
      (setq gr-play-static-setup-frames-left (1- gr-play-static-setup-frames-left)))
    (mapcar #'gr-play-record-to-feed-record wire-records)))

(defun gr-play-write-direct-bin-frame (records)
  "Write RECORDS directly to the native renderer binary handoff."
  (gr-play-ensure-direct-bin-packer)
  (prog1
      (gr-live-feed-write-direct-bin
       (gr-play-frame-records-to-feed-records records))
    (gr-play-maybe-start-renderer)))

(defun gr-play-powershell-quote (value)
  "Quote VALUE as a single-quoted PowerShell string."
  (concat "'" (replace-regexp-in-string "'" "''" value nil t) "'"))

(defun gr-play-maybe-start-renderer ()
  "Start the native renderer once the direct-bin stream is warm."
  (when (and gr-play-direct-bin-enabled
             gr-play-renderer-path
             (file-exists-p gr-play-renderer-path)
             (not gr-play-renderer-started)
             (boundp 'gr-live-feed-bin-seq)
             (>= gr-live-feed-bin-seq gr-play-renderer-launch-seq))
    (setq gr-play-renderer-started t)
    (if (eq system-type 'windows-nt)
        (call-process
         "powershell" nil nil nil
         "-NoProfile"
         "-Command"
         (format
          "$running=Get-CimInstance Win32_Process | Where-Object { $_.Name -eq 'sumi-sprite-live.exe' }; if(-not $running){ Start-Process -FilePath %s -WorkingDirectory %s }"
          (gr-play-powershell-quote gr-play-renderer-path)
          (gr-play-powershell-quote (file-name-directory gr-play-renderer-path))))
      (start-process "sumi-sprite-live" nil gr-play-renderer-path))
    (princ (format "PLAY-RENDERER-START path=%s seq=%d\n"
                   gr-play-renderer-path
                   gr-live-feed-bin-seq))))

(defun gr-play-dump-current-frame ()
  "Serialize and dump the current `gr-sumi' frame if it changed."
  (gr-play-collect-setup-records)
  (let ((record-count (length gr-sumi))
        (frame-records nil)
        (serialize-start 0.0)
        (io-start 0.0)
        (json nil)
        (histogram nil)
        (should-dump nil)
        (wrote nil))
    (when (or (null gr-play-first-frame-histogram)
              (null gr-play-first-player-frame-histogram)
              (null gr-play-first-enemy-frame-histogram))
      (setq histogram (gr-play-buffer-histogram)))
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
      (setq should-dump t)
      (when (and gr-play-dedup-frames
                 (<= gr-play-static-setup-frames-left 0))
        ;; Replay the harvested setup/boot records in the comparison tree
        ;; after the startup replay window has closed.  The exact `equal'
        ;; comparison is intentionally retained; hash-only checks previously
        ;; dropped real animation frames after a collision.
        (setq frame-records
              (append gr-sumi gr-play-setup-records gr-play-boot-composition))
        (when (gr-play-frame-unchanged-p frame-records)
          (setq should-dump nil)))
      (if (not should-dump)
          (setq gr-play-skipped-count (1+ gr-play-skipped-count))
        (if gr-play-direct-bin-enabled
            (progn
              (setq serialize-start (float-time))
              (gr-play-get-boot-composition-json-body)
              (setq gr-play-serialize-seconds
                    (+ gr-play-serialize-seconds (- (float-time) serialize-start)))
              (setq io-start (float-time))
              (gr-play-write-direct-bin-frame gr-sumi)
              (setq wrote t)
              (setq gr-play-io-seconds
                    (+ gr-play-io-seconds (- (float-time) io-start))))
          (setq serialize-start (float-time))
          (setq json (gr-play-frame-records-to-json gr-sumi))
          (setq gr-play-serialize-seconds
                (+ gr-play-serialize-seconds (- (float-time) serialize-start)))
          (setq io-start (float-time))
          (setq wrote (gr-play-write-frame json))
          (unless wrote
            (setq gr-play-skipped-count (1+ gr-play-skipped-count)))
          (setq gr-play-io-seconds
                (+ gr-play-io-seconds (- (float-time) io-start))))
        (when wrote
          (setq gr-play-dumped-count (1+ gr-play-dumped-count)))))))

(defun gr-play-dump-initial-bgm ()
  "Emit the default dungeon BGM once after boot reaches live play."
  (setq gr-sumi nil)
  (gr-emit "dtw-music-play-file" "0.mp3")
  (if (if gr-play-direct-bin-enabled
          (progn
            (gr-play-write-direct-bin-frame gr-sumi)
            t)
        (gr-play-write-frame (gr-play-frame-records-to-json gr-sumi)))
      (setq gr-play-dumped-count (1+ gr-play-dumped-count))
    (setq gr-play-skipped-count (1+ gr-play-skipped-count)))
  (setq gr-sumi nil))

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
  (gr-worldgen-run t)
  (gr-restore-main-bootstrap-state))

(defun gr-play-find-active-enemy-slot ()
  "Return an active enemy slot suitable for func162's hotel escort move."
  (catch 'found
    (let ((idx 1))
      (while (<= idx 100)
        (let* ((base (+ 900 (* (- idx 1) 13)))
               (active (gr-num (or (gr-get (+ base 1)) 0)))
               (hp (gr-num (or (gr-get (+ base 5)) 0))))
          (when (or (> active 0) (> hp 0))
            (throw 'found idx)))
        (setq idx (1+ idx))))
    0))

(defun gr-play-bootstrap-hotel-start ()
  "Route a new-game bootstrap to the Venice hotel hub without entering func009."
  (let ((enemy-slot (gr-play-find-active-enemy-slot))
        (saved-func009 (gethash "func009" gr-native-funcs))
        (saved-autodraw (gethash "AutoDraw" gr-native-funcs)))
    (unless (> enemy-slot 0)
      (error "hotel start could not find an active enemy slot"))
    (gr-set 771 enemy-slot)
    (unwind-protect
        (progn
          (gr-defnative "func009" (lambda (&rest _args) nil))
          (gr-defnative "AutoDraw" (lambda (&rest _args) nil))
          (gr-run-func "func162"))
      (if saved-func009
          (gr-defnative "func009" saved-func009)
        (remhash "func009" gr-native-funcs))
      (if saved-autodraw
          (gr-defnative "AutoDraw" saved-autodraw)
        (remhash "AutoDraw" gr-native-funcs)))
    (setq gr-play-hotel-start-count (1+ gr-play-hotel-start-count))
    (princ (format "PLAY-HOTEL-START player=%s,%s enemy-slot=%s count=%d\n"
                   (or (gr-get 66) 0)
                   (or (gr-get 67) 0)
                   enemy-slot
                   gr-play-hotel-start-count))))

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

func229, func233, and the captured gamedata-state all enter play with
max HP 15, current HP 15, and the KO flag cleared."
  (gr-set 352 15)
  (gr-set 211 15)
  (gr-set 212 0)
  ;; Hunger must be positive or the per-turn HP regen in func019
  ;; (legacy func019 branch, gated on var_350 > 0) never runs, so HP only ever
  ;; goes down.  100/100 matches the captured live new-game state
  ;; (gamedata-state.el: var_350=100, var_567=100).
  (gr-set 350 100)
  (gr-set 567 100)
  ;; Fresh runs start unpoisoned (legacy func019 poison branch drains 5 HP per turn
  ;; while var_135 >= 1).
  (gr-set 135 0)
  ;; New-game worldgen can leave var_224 at the old title/default value
  ;; even when the authoritative inventory rows are empty, which makes the
  ;; live pickup path hit func400's "inventory full" branch immediately.
  (when (fboundp 'gr-sync-inventory-count)
    (gr-sync-inventory-count))
  (when gr-play-forced-animation-delay
    (gr-set "animationDelay" gr-play-forced-animation-delay)))

(defun gr-play-speed-pacing-seconds ()
  "Return live frame pacing seconds derived from animationDelay."
  (pcase (gr-num (or (gr-get "animationDelay") 40))
    ;; Rendering is currently the bottleneck, so only the intentionally slow
    ;; menu settings add artificial delay.
    ((or 30 40 50) 0.0)
    (60 0.01)
    (70 0.02)
    (_ 0.0)))

(defun gr-play-apply-speed-pacing ()
  "Apply per-frame pacing for the in-game speed setting."
  (let ((delay (gr-play-speed-pacing-seconds)))
    (setq gr-play-last-speed-pacing-delay delay)
    (when (> delay 0.0)
      (sleep-for delay))))

(defun gr-play-floor-tile-p (tile)
  "Return non-nil when TILE is a normal walkable floor."
  (and (numberp tile) (>= tile 1) (<= tile 12)))

(defun gr-play-set-grid-cell (grid x y value)
  "Set GRID[X][Y] to VALUE when the coordinates are in range."
  (let ((row (and (vectorp grid) (gr-index-ref grid x))))
    (when (and (vectorp row) (>= y 0) (< y (length row)))
      (aset row y value))))

(defun gr-play-find-probe-corridor (tiles occ)
  "Return (PLAYER-X PLAYER-Y ENEMY-X ENEMY-Y TILE) for a clear corridor."
  (let ((max-x (gr-num (or (gr-get 33) 0)))
        (max-y (gr-num (or (gr-get 34) 0)))
        (x 5)
        (y 5)
        (tile nil)
        (ok nil)
        (found nil))
    (while (and (null found) (< y (- max-y 4)))
      (setq x 5)
      (while (and (null found) (< x (- max-x 8)))
        (setq ok t)
        (let ((step 0))
          (while (and ok (<= step 4))
            (setq tile (and (vectorp tiles)
                            (gr-index-ref (gr-index-ref tiles (+ x step)) y)))
            (unless (and (gr-play-floor-tile-p tile)
                         (equal (gr-index-ref (gr-index-ref occ (+ x step)) y) 0))
              (setq ok nil))
            (setq step (1+ step))))
        (when ok
          (setq found (list x y (+ x 4) y tile)))
        (setq x (1+ x)))
      (setq y (1+ y)))
    found))

(defun gr-play-maybe-place-probe-enemy ()
  "Optionally move one live enemy near the player for scripted probe runs."
  (when (equal (getenv "GR_PLAY_FORCE_NEARBY_ENEMY") "1")
    (let* ((rows (gr-get 83))
           (occ (gr-get 82))
           (tiles (gr-get 71))
           (idx 1)
           (enemy-idx nil)
           (row nil)
           (player-x (gr-num (or (gr-get 66) 0)))
           (player-y (gr-num (or (gr-get 67) 0)))
           (placement nil))
      (while (and (vectorp rows) (< idx (length rows)) (null enemy-idx))
        (setq row (aref rows idx))
        (when (and row
                   (not (equal (gr-prop-ref row "Var0") 0))
                   (> (gr-num (or (gr-prop-ref row "Var3") 0)) 0))
          (setq enemy-idx idx))
        (setq idx (1+ idx)))
      (when enemy-idx
        (setq row (aref rows enemy-idx))
        (setq idx 1)
        (while (and (vectorp rows) (< idx (length rows)))
          (let ((other (aref rows idx)))
            (when other
              (gr-play-set-grid-cell occ
                                     (gr-num (or (gr-prop-ref other "Var1") 0))
                                     (gr-num (or (gr-prop-ref other "Var2") 0))
                                     0)
              (unless (= idx enemy-idx)
                (let ((slot 0))
                    (while (< slot (length other))
                      (aset other slot 0)
                      (setq slot (1+ slot)))))))
          (setq idx (1+ idx)))
        (setq placement (gr-play-find-probe-corridor tiles occ))
        (when placement
          (gr-play-set-grid-cell (gr-get 65) player-x player-y 0)
          (setq player-x (nth 0 placement)
                player-y (nth 1 placement))
          (gr-set 66 player-x)
          (gr-set 67 player-y)
          (gr-set 236 player-x)
          (gr-set 237 player-y)
          (gr-set 201 (nth 4 placement))
          (gr-play-set-grid-cell (gr-get 65) player-x player-y 1)
          (gr-play-set-grid-cell occ
                                 (gr-num (or (gr-prop-ref row "Var1") 0))
                                 (gr-num (or (gr-prop-ref row "Var2") 0))
                                 0)
          (gr-prop-set row "Var1" (nth 2 placement))
          (gr-prop-set row "Var2" (nth 3 placement))
          (gr-prop-set row "Var3" 5)
          (gr-prop-set row "Var10" (nth 4 placement))
          (gr-prop-set row "Var7" 0)
          (gr-prop-set row "Var8" 0)
          (gr-prop-set row "Var9" 0)
          (gr-prop-set row "Var12" 0)
          (gr-prop-set row "Var13" 0)
          (gr-prop-set row "Var15" 0)
          (gr-prop-set row "Var17" 0)
          (gr-prop-set row "Var18" 0)
          (gr-prop-set row "Var20" 0)
          (gr-play-set-grid-cell occ (nth 2 placement) (nth 3 placement) enemy-idx)
          (gr-set 97 1)
          (princ (format "PLAY-PROBE-ENEMY idx=%s pos=%s,%s player=%s,%s\n"
                         enemy-idx
                         (nth 2 placement)
                         (nth 3 placement)
                         player-x
                         player-y)))))))

(defun gr-play-func338 (&rest _args)
  "No-op render helper."
  (push 338 gr-trace)
  nil)

(defun gr-play-func005 (&rest _args)
  "Existing-save path sentinel for the opening flow."
  (push 5 gr-trace)
  (unless (> gr-play-opening-story-frame-count 0)
    (gr-play-render-opening-story-preview))
  (setq gr-play-opening-result 'new-game)
  (throw 'gr-play-opening-done 'new-game))

(defun gr-play-draw-opening-story-frame (lines)
  "Draw and dump one short opening-story frame with LINES."
  (setq gr-sumi nil)
  (gr-emit "gui-present" 0)
  (gr-emit "gui-set-color" 0 0 0)
  (gr-emit "gui-fill-rect" 0 0 340 340)
  (gr-emit "gui-set-color" 0 0 128)
  (gr-emit "gui-fill-rect" 12 224 316 78)
  (gr-emit "gui-set-color" 255 255 255)
  (gr-emit "gui-set-font" 16)
  (let ((y 244))
    (dolist (line lines)
      (gr-emit "gui-set-position" 24 y)
      (gr-emit "gui-draw-text" line)
      (setq y (+ y 20))))
  (gr-play-dump-current-frame)
  (sleep-for gr-play-opening-story-sleep-seconds)
  (setq gr-play-opening-story-frame-count
        (1+ gr-play-opening-story-frame-count)))

(defun gr-play-render-opening-story-preview ()
  "Render a small fallback slice of func150's story sequence."
  (let ((old-last-frame gr-play-last-frame-records)
        (gr-play-opening-story-sleep-seconds
         (if (equal (getenv "GR_PLAY_FAST_OPENING_STORY") "1")
             0.0
           gr-play-opening-story-sleep-seconds)))
    (unwind-protect
        (progn
          (setq gr-play-last-frame-records nil)
          (dolist (lines '(("ディアボロ「おまえには 死んだことを"
                            "        後悔する時間をも…")
                           ("ディアボロ「与えんッ！！」")
                           ("ジョルノ「無駄アァァァァ！！」")
                           ("ディアボロはＧ・Ｅ・レクイエムの能力により"
                            "永遠に死に続けることとなった。")
                           ("しかしある時、転機が訪れた…")))
            (gr-play-draw-opening-story-frame lines))
          (princ (format "PLAY-OPENING-STORY frames=%d\n"
                         gr-play-opening-story-frame-count)))
      (setq gr-play-last-frame-records old-last-frame))))

(defun gr-play-run-generated-opening-story ()
  "Run the generated Elisp func150 opening sequence in the play bootstrap."
  (let* ((fast (equal (getenv "GR_PLAY_FAST_OPENING_STORY") "1"))
         (saved-func150 gr-play-saved-native-func150)
         (saved-func159 (gethash "func159" gr-native-funcs))
         (saved-func337 (gethash "func337" gr-native-funcs))
         (saved-func339 (gethash "func339" gr-native-funcs))
         (saved-autodraw (gethash "AutoDraw" gr-native-funcs))
         (saved-set-message (gethash "setMessage" gr-native-funcs))
         (old-last-frame gr-play-last-frame-records))
    (if (not saved-func150)
        (gr-play-render-opening-story-preview)
      (unwind-protect
          (progn
            (setq gr-play-last-frame-records nil
                  gr-play-opening-story-used-generated t)
            (gr-defnative "func159"
                          (lambda (&rest _args)
                            (push 159 gr-trace)
                            nil))
            (gr-defnative "func337"
                          (lambda (&rest args)
                            (setq gr-play-opening-story-frame-count
                                  (1+ gr-play-opening-story-frame-count))
                            (if fast
                                (progn
                                  (push 337 gr-trace)
                                  nil)
                              (setq gr-sumi nil)
                              ;; func340's message-advance loop redraws through
                              ;; func337 every poll while it waits for Z.  Reset
                              ;; the per-run step budget each redraw (as the
                              ;; dungeon loop does per frame) so a human-paced
                              ;; wait cannot exhaust gr-step-budget and abort the
                              ;; opening.
                              (setq gr-step-count 0)
                              (let ((result (apply saved-func337 args)))
                                (gr-play-dump-current-frame)
                                (sleep-for gr-play-opening-story-sleep-seconds)
                                result))))
            (gr-defnative "func339"
                          (lambda (&rest args)
                            (setq gr-play-opening-story-wait-count
                                  (1+ gr-play-opening-story-wait-count))
                            (if fast
                                (progn
                                  (push 339 gr-trace)
                                  nil)
                              (apply saved-func339 args))))
            (when fast
              (gr-defnative "AutoDraw" (lambda (&rest _args) nil)))
            (gr-defnative "setMessage"
                          (lambda (row1 &optional row2 color-index do-wait-key do-animation play-sound)
                            (setq gr-play-opening-story-message-count
                                  (1+ gr-play-opening-story-message-count))
                            (funcall saved-set-message
                                     row1 row2 color-index
                                     (and (not fast) do-wait-key)
                                     (and (not fast) do-animation)
                                     (and (not fast) play-sound))))
            (funcall saved-func150)
            (princ (format
                    "PLAY-OPENING-STORY frames=%d messages=%d waits=%d generated=1\n"
                    gr-play-opening-story-frame-count
                    gr-play-opening-story-message-count
                    gr-play-opening-story-wait-count)))
        (if saved-func159
            (gr-defnative "func159" saved-func159)
          (remhash "func159" gr-native-funcs))
        (if saved-func337
            (gr-defnative "func337" saved-func337)
          (remhash "func337" gr-native-funcs))
        (if saved-func339
            (gr-defnative "func339" saved-func339)
          (remhash "func339" gr-native-funcs))
        (if saved-autodraw
            (gr-defnative "AutoDraw" saved-autodraw)
          (remhash "AutoDraw" gr-native-funcs))
        (if saved-set-message
            (gr-defnative "setMessage" saved-set-message)
          (remhash "setMessage" gr-native-funcs))
        (setq gr-play-last-frame-records old-last-frame)))))

(defun gr-play-func150 (&rest _args)
  "New-game path sentinel for the opening flow."
  (push 150 gr-trace)
  (gr-play-run-generated-opening-story)
  (setq gr-play-opening-result 'new-game)
  (throw 'gr-play-opening-done 'new-game))

(defun gr-play-log-enemy-movement (before-x before-y enemy-before)
  "Log enemy position changes after a player action completes."
  (let ((enemy-after nil))
    (setq enemy-after (gr-play-live-enemy-positions))
    (when (and enemy-before enemy-after
               (not (equal enemy-before enemy-after)))
      (princ (format "PLAY-ENEMY-MOVE before=%S after=%S player=%s,%s trace=%S\n"
                     enemy-before
                     enemy-after
                     (gr-get 66)
                     (gr-get 67)
                     (reverse gr-trace))))))

(defun gr-play-func020-wrapper (&rest args)
  "Count enemy turns in the live loop, then delegate to the real func020."
  (setq gr-play-enemy-turn-count (1+ gr-play-enemy-turn-count))
  (apply gr-play-orig-func020 args))

(defun gr-play-profile-run-func (orig name &rest args)
  "Profile selected `gr-run-func' calls around ORIG."
  (let* ((resolved (if (and (stringp name)
                            (string-prefix-p "Func." name))
                       (substring name 5)
                     name))
         (sample (and gr-play-profile-table
                      (member resolved gr-play-profile-funcs))))
    (if (not sample)
        (apply orig name args)
      (let* ((start (float-time))
             (result (apply orig name args))
             (elapsed (- (float-time) start))
             (stat (or (gethash resolved gr-play-profile-table)
                       (list 0 0.0))))
        (setcar stat (1+ (car stat)))
        (setcar (cdr stat) (+ (cadr stat) elapsed))
        (puthash resolved stat gr-play-profile-table)
        result))))

(defun gr-play-enable-profiler ()
  "Enable lightweight profiling for selected live draw functions."
  (when (and (getenv "GR_PLAY_FUNC_PROFILE")
             (not gr-play-profile-table))
    (setq gr-play-profile-table (make-hash-table :test 'equal))
    (advice-add 'gr-run-func :around #'gr-play-profile-run-func)))

(defun gr-play-print-profile ()
  "Print collected function profile stats."
  (when gr-play-profile-table
    (let (rows)
      (maphash (lambda (name stat)
                 (push (list name (car stat) (cadr stat)) rows))
               gr-play-profile-table)
      (dolist (row (sort rows (lambda (a b) (> (nth 2 a) (nth 2 b)))))
        (princ (format "PLAY-PROFILE func=%s count=%d seconds=%.4f avg=%.6f\n"
                       (nth 0 row)
                       (nth 1 row)
                       (nth 2 row)
                       (/ (nth 2 row) (max 1 (nth 1 row)))))))))

(defun gr-play-install-local-missing-natives ()
  "Install local natives needed by the play loop."
  (setq gr-play-saved-native-func338 (gethash "func338" gr-native-funcs))
  (setq gr-play-saved-native-func005 (gethash "func005" gr-native-funcs))
  (setq gr-play-saved-native-func150 (gethash "func150" gr-native-funcs))
  (gr-defnative "func338" #'gr-play-func338)
  (gr-defnative "func005" #'gr-play-func005)
  (gr-defnative "func150" #'gr-play-func150))

(defun gr-play-restore-local-missing-natives ()
  "Restore natives replaced by the play loop."
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
  (setq gr-play-saved-native-func338 nil)
  (setq gr-play-saved-native-func005 nil)
  (setq gr-play-saved-native-func150 nil))

(defun gr-play-gr-emit-wrapper (op &rest args)
  "Capture title/login frames that use Adap.redraw directly."
  (when (and (not gr-play-in-func337-draw)
             (or gr-play-opening-active gr-play-live-active)
             (equal op "gui-present")
             (numberp (car args))
             (= (car args) 0))
    (setq gr-sumi nil))
  (apply gr-play-orig-gr-emit op args)
  (when (and (not gr-play-in-func337-draw)
             (or gr-play-opening-active gr-play-live-active)
             (equal op "gui-present")
             (numberp (car args))
             (= (car args) 1))
    (when gr-play-opening-active
      (setq gr-play-title-frame-count (1+ gr-play-title-frame-count)))
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
    ;; The regular login loop keeps slot state 725 nonzero, while generated
    ;; func146 draws its cursor only when it is zero.  Overlay the cursor in
    ;; the live path so the selected entry remains visible.
    (let ((cursor (max 0 (min 5 (gr-num (or (gr-get 64) 0))))))
      ;; func146/func148 may leave a work buffer selected.  The cursor must be
      ;; drawn on the visible screen buffer, otherwise the command succeeds
      ;; but never appears in the presented frame.
      (gr-emit "gui-select-buffer" 0)
      (gr-emit "gui-set-alpha" 255)
      (gr-emit "gui-draw-image-scaled" 8 70 50 25 20
               12 (+ 37 (* cursor 20)) 25 20))
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

(defun gr-play-render-load-screen-frame (progress alpha)
  "Render and dump one boot load-screen frame with PROGRESS and ALPHA."
  (setq gr-sumi nil)
  (gr-set 60 progress)
  (gr-set 18 alpha)
  (gr-run-func "func138")
  (gr-play-dump-current-frame)
  (sleep-for gr-play-load-screen-sleep-seconds)
  (setq gr-play-load-screen-frame-count (1+ gr-play-load-screen-frame-count)))

(defun gr-play-func139A-load-screen (&rest _args)
  "Render only func139A's boot load-screen segment, then return."
  (push 139 gr-trace)
  ;; func004 has already emitted screen/load-image setup into gr-sumi.
  ;; Capture it before clearing gr-sumi for individual load frames.
  (gr-play-collect-setup-records)
  (let ((idx 0)
        (old-last-frame gr-play-last-frame-records))
    (unwind-protect
        (progn
          (setq gr-play-last-frame-records nil)
          (while (< idx 25)
            (gr-play-render-load-screen-frame idx (min 255 (* idx 10)))
            (setq idx (1+ idx)))
          (gr-play-render-load-screen-frame 25 255)
          (princ (format "PLAY-LOAD-SCREEN frames=%d\n"
                         gr-play-load-screen-frame-count)))
      (setq gr-play-last-frame-records old-last-frame)))
  nil)

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
      ;; The step budget is per-iteration (the dungeon loop resets it too);
      ;; an unattended title/login screen must not exhaust it (a 30min idle
      ;; title blew the 2M budget and booted a broken state).
      (setq gr-step-count 0)
      (gr-play-opening-render-login)
      (when gr-play-scripted-opening
        (setq gr-play-opening-result
              (if (gr-play-opening-new-game-slot-p) 'new-game 'resume))
        (when (eq gr-play-opening-result 'new-game)
          (gr-play-run-generated-opening-story))
        (setq done t))
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
          (when (eq gr-play-opening-result 'new-game)
            (gr-play-run-generated-opening-story))
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
      (setq gr-step-count 0)
      (setq render-start (float-time))
      (gr-run-func "func141")
      (setq gr-play-opening-render-seconds
            (+ gr-play-opening-render-seconds (- (float-time) render-start)))
      (when gr-play-scripted-opening
        (setq entered-login t)
        (gr-play-opening-note-screen-transition))
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
          gr-play-load-screen-frame-count 0
          gr-play-opening-story-frame-count 0
          gr-play-opening-guard-seq gr-play-last-seq
          gr-play-opening-release-seen t
          gr-play-opening-login-rendered nil)
    (unwind-protect
        (let ((saved-func139A (gethash "func139A" gr-native-funcs)))
          (unwind-protect
              (progn
                (setq gr-depth-limit (max gr-depth-limit 5000))
                (gr-defnative "func139A" #'gr-play-func139A-load-screen)
                (gr-init-main-bootstrap-state)
                (gr-run-func "func004")
                (gr-capture-main-bootstrap-state)
                ;; Capture func004's one-time work-buffer fills (buffer 12
                ;; blue box etc.) now, before the title/worldgen paths clear
                ;; gr-sumi, so they replay at the head of every frame.
                (gr-play-capture-boot-composition)
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
  (princ (format "PLAY-STATUS redraw=%d loop=%d enemy_turns=%d dumped=%d skipped=%d dedup=%d player=%s,%s floor=%s token=%s speed=%s pace=%.3f consumed=%d/%d missed=%d readerr=%d\n"
                 gr-play-redraw-count
                 gr-play-loop-count
                 gr-play-enemy-turn-count
                 gr-play-dumped-count
                 gr-play-skipped-count
                 gr-play-deduped-json-write-count
                 (or (gr-get 66) 0)
                 (or (gr-get 67) 0)
                 (or (gr-get "current_floor") 0)
                 gr-play-last-token
                 (or (gr-get "animationDelay") 0)
                 (or gr-play-last-speed-pacing-delay 0.0)
                 gr-play-consumed-press-count
                 gr-play-received-press-count
                 gr-play-missed-press-count
                 gr-play-read-error-count)))

(defun gr-play-func337-wrapper (&rest args)
  "Dump one frame per redraw by wrapping the real func337."
  (let ((draw-start (float-time))
        (result nil))
    (setq gr-play-redraw-key-queries nil)
    (let ((gr-play-in-func337-draw t))
      (setq gr-sumi nil)
      (setq result (apply gr-play-orig-func337 args))
      (setq gr-play-draw-seconds
            (+ gr-play-draw-seconds (- (float-time) draw-start)))
      (setq gr-play-redraw-count (1+ gr-play-redraw-count))
      (gr-play-dump-current-frame))
    (when (functionp gr-play-after-frame-hook)
      (funcall gr-play-after-frame-hook))
    (gr-play-apply-speed-pacing)
    (when (= 0 (mod gr-play-redraw-count gr-play-report-every))
      (gr-play-log-status))
    result))

(defun gr-play-func080-wrapper (&rest args)
  "Run the live key-poll hook, then delegate to the real func080."
  (when (functionp gr-play-before-key-poll-hook)
    (funcall gr-play-before-key-poll-hook))
  (unless (gr-play-handle-function-key-settings)
    (apply gr-play-orig-func080 args)))

(defun gr-play-func009-wrapper (&rest args)
  "Loop pacing/termination wrapper around the real func009."
  (if (> gr-play-loop-count 0)
      (throw 'gr-play-trampoline 'continue)
    (let ((stop nil)
          (done nil)
          (before-x 0)
          (before-y 0)
          (enemy-before nil))
      (while (not done)
        (setq gr-play-loop-count (1+ gr-play-loop-count))
        (gr-play-log-depth)
        (setq gr-step-count 0)
        (setq before-x (gr-num (or (gr-get 66) 0)))
        (setq before-y (gr-num (or (gr-get 67) 0)))
        (setq enemy-before (gr-play-live-enemy-positions))
        (condition-case err
            (progn
              (setq gr-trace nil gr-missing nil)
              (setq stop
                    (catch 'gr-play-frame-stop
                      (catch 'gr-play-trampoline
                        (apply gr-play-orig-func009 args)
                        nil)
                      nil))
              (gr-play-log-enemy-movement before-x before-y enemy-before))
          (error
           (princ (format "PLAY-FRAME-ERROR loop=%d redraw=%d %s\n"
                          gr-play-loop-count
                          gr-play-redraw-count
                          (error-message-string err)))
           (princ (format "PLAY-FRAME-TRACE %S\n" (nreverse gr-trace)))
           (when (equal (getenv "GR_PLAY_FRAME_BACKTRACE") "1")
             (princ (format "PLAY-FRAME-BACKTRACE %S\n%s\n"
                            err
                            (with-output-to-string
                              (backtrace)))))
           (setq done t)))
        (when (or stop
                  gr-play-quit-requested
                  (>= (- (float-time) gr-play-start-time) gr-play-duration-seconds))
          (setq done t)))
      (throw 'gr-play-stop 'done)))
  nil)

(defun gr-play-bootstrap-direct ()
  "Boot straight into the dungeon, mirroring run-init.el (no title flow)."
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
          (gr-init-main-bootstrap-state)
          (gr-run-func "func004")
          (gr-capture-main-bootstrap-state)
          ;; The direct boot path bypasses func139A's load-screen wrapper,
          ;; so capture screen/load-image setup here before later draws clear
          ;; `gr-sumi'.  Without this, a late-started direct-bin renderer has
          ;; no surfaces or images and stays white.
          (gr-play-collect-setup-records)
          ;; Capture func004's one-time work-buffer fills before worldgen
          ;; clears gr-sumi (see gr-play-capture-boot-composition).
          (gr-play-capture-boot-composition))
      (setq gr-depth-limit old-depth)
      (if saved-func139A
          (gr-defnative "func139A" saved-func139A)
        (when gr-native-funcs
          (remhash "func139A" gr-native-funcs))))))

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
              gr-play-deduped-json-write-count 0
              gr-play-renderer-started nil
              gr-play-draw-seconds 0.0
              gr-play-serialize-seconds 0.0
              gr-play-io-seconds 0.0
              gr-play-last-frame-json nil
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
              gr-play-enemy-turn-count 0
              gr-play-static-setup-frames-left 5
              gr-play-setup-records nil
              gr-play-setup-seen (make-hash-table :test 'equal)
              gr-play-setup-records-json-body nil
              gr-play-boot-composition nil
              gr-play-boot-composition-json-body nil
              gr-play-quit-requested nil
              gr-play-opening-title-loops 0
              gr-play-opening-login-loops 0
              gr-play-load-screen-frame-count 0
              gr-play-opening-story-frame-count 0
              gr-play-opening-story-message-count 0
              gr-play-opening-story-wait-count 0
              gr-play-opening-story-used-generated nil
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
              gr-play-function-key-down (make-hash-table :test 'equal)
              gr-play-read-error-count 0
              gr-play-received-press-count 0
              gr-play-consumed-press-count 0
              gr-play-missed-press-count 0)

        (gr-play-install-local-missing-natives)
        ;; Bind the key-read/reset hooks BEFORE the opening bootstrap.  The
        ;; opening story's message-advance loop (func340 -> func080 ->
        ;; gr-read-key-state) reads keys through gr-read-key-state-fn; when it
        ;; was bound only after the opening (below), gr-read-key-state returned
        ;; 0 for the whole opening, key_Z_on never became 1, and Z could not
        ;; advance the opening messages (the wait loop spun until the step
        ;; budget tripped and fell back to the dungeon).
        (setq gr-read-key-state-fn #'gr-play-read-key-state)
        (setq gr-reset-key-fn #'gr-play-reset-key)
        (setq gr-play-orig-gr-emit (symbol-function 'gr-emit))
        (fset 'gr-emit #'gr-play-gr-emit-wrapper)
        (condition-case err
            (progn
              ;; GR_PLAY_SKIP_OPENING=1 boots straight into the dungeon
              ;; (the v2/v3 path).  The title/login opening composes into
              ;; work canvases across frames, so it needs the lossless
              ;; frame pipeline (pending) to display reliably.
                (if (equal (getenv "GR_PLAY_SKIP_OPENING") "1")
                  (gr-play-bootstrap-direct)
                (gr-play-bootstrap-opening))
              (if (eq gr-play-opening-result 'resume)
                  (gr-play-bootstrap-resume-init)
                (gr-play-bootstrap-real-init)
                (when (and gr-play-start-in-hotel
                           (eq gr-play-opening-result 'new-game))
                  (gr-play-bootstrap-hotel-start))))
          (error
           ;; Never continue on the partial state a failed opening leaves
           ;; behind (a blown step budget mid-title once booted a player at
           ;; 0,0 into the void).  Fall back to the clean direct boot.
           (princ (format "PLAY-BOOTSTRAP-ERROR %s (falling back to direct boot)\n"
                          (error-message-string err)))
           (condition-case err2
               (progn
                 (setq gr-play-opening-result nil)
                 (gr-play-bootstrap-direct)
                 (gr-play-bootstrap-real-init))
             (error
              (princ (format "PLAY-BOOTSTRAP-ERROR direct boot also failed: %s\n"
                             (error-message-string err2)))))))
        (gr-play-apply-post-init-state)
        (when (functionp gr-play-post-init-hook)
          (funcall gr-play-post-init-hook))
        (gr-play-dump-initial-bgm)
        (gr-play-maybe-place-probe-enemy)
        ;; Generated gamedata is loaded after game-runner.el and can replace
        ;; live native handlers.  Reinstall them before entering func009.
        (when (fboundp 'gr-install-live-native-overrides)
          (gr-install-live-native-overrides))

        (setq gr-play-orig-func009 (gethash "func009" gr-native-funcs))
        (setq gr-play-orig-func337 (gethash "func337" gr-native-funcs))
        (setq gr-play-orig-func080 (gethash "func080" gr-native-funcs))
        (setq gr-play-orig-func020 (gethash "func020" gr-native-funcs))
        (setq gr-read-key-state-fn #'gr-play-read-key-state)
        (setq gr-reset-key-fn #'gr-play-reset-key)
        (when (getenv "GR_PLAY_DURATION_SECONDS")
          (setq gr-play-duration-seconds
                (string-to-number (getenv "GR_PLAY_DURATION_SECONDS"))))
        (setq gr-play-start-time (float-time))
        (gr-play-enable-profiler)
        (princ (format "PLAY-START player=%s,%s duration=%s\n"
                       (or (gr-get 66) 0)
                       (or (gr-get 67) 0)
                       gr-play-duration-seconds))
        (when gr-play-orig-func009
          (gr-defnative "func009" #'gr-play-func009-wrapper))
        (when gr-play-orig-func337
          (gr-defnative "func337" #'gr-play-func337-wrapper))
        (when gr-play-orig-func080
          (gr-defnative "func080" #'gr-play-func080-wrapper))
        (when gr-play-orig-func020
          (gr-defnative "func020" #'gr-play-func020-wrapper))
        (unwind-protect
            (progn
              (setq gr-play-live-active t)
              (catch 'gr-play-stop
                (gr-run-func "func009")))
          (setq gr-play-live-active nil))
        (setq gr-play-frame-count gr-play-redraw-count)
        (princ
         (format
          "PLAY-FPS redraw=%d title=%d dumped=%d skipped=%d dedup=%d elapsed=%.3f fps=%.3f draw=%.3f serialize=%.3f io=%.3f speed=%s pace=%.3f\n"
          gr-play-redraw-count
          gr-play-title-frame-count
          gr-play-dumped-count
          gr-play-skipped-count
          gr-play-deduped-json-write-count
          (max 0.001 (- (float-time) gr-play-start-time))
          (/ (float gr-play-redraw-count)
             (max 0.001 (- (float-time) gr-play-start-time)))
          gr-play-draw-seconds
          gr-play-serialize-seconds
          gr-play-io-seconds
          (or (gr-get "animationDelay") 0)
          (or gr-play-last-speed-pacing-delay 0.0)))
        (when (boundp 'gr-live-feed-pack-seconds)
          (princ
           (format
            "PLAY-FEED-TIME normalize=%.3f pack=%.3f pack-command=%.3f pack-compact=%.3f pack-finish=%.3f write=%.3f head=%.3f last-bytes=%d\n"
            gr-live-feed-normalize-seconds
            gr-live-feed-pack-seconds
            gr-live-feed-pack-command-seconds
            gr-live-feed-pack-compact-seconds
            gr-live-feed-pack-finish-seconds
            gr-live-feed-write-seconds
            gr-live-feed-head-seconds
            gr-live-feed-last-packed-bytes)))
        (when (and (fboundp 'gr-live-feed-profile-summary)
                   gr-live-feed-profile-enabled)
          (princ (format "PLAY-FEED-HIST %S\n"
                         (gr-live-feed-profile-summary))))
        (princ
         (format "PLAY-INPUT consumed=%d/%d missed=%d readerr=%d pending=%d\n"
                 gr-play-consumed-press-count
                 gr-play-received-press-count
                 gr-play-missed-press-count
                 gr-play-read-error-count
                 (length gr-play-pending-presses)))
        (gr-play-print-profile)
        (princ (format "PLAY-DEPTH-LOG %S\n" (nreverse gr-play-depth-log)))
        (princ (format "PLAY-DONE %d\n" gr-play-redraw-count)))
    (setq gr-step-budget old-budget)
    (setq gr-depth-limit old-depth)
    (setq gr-read-key-state-fn nil)
    (setq gr-reset-key-fn nil)
    (when gr-play-orig-func020
      (gr-defnative "func020" gr-play-orig-func020))
    (when gr-play-orig-gr-emit
      (fset 'gr-emit gr-play-orig-gr-emit))
    (gr-play-restore-local-missing-natives)
    (when gr-play-orig-func080
      (gr-defnative "func080" gr-play-orig-func080))
    (when gr-play-orig-func337
      (gr-defnative "func337" gr-play-orig-func337))
    (when gr-play-orig-func009
      (gr-defnative "func009" gr-play-orig-func009))))

(when (fboundp 'gr-install-live-native-overrides)
  (gr-install-live-native-overrides))

(provide 'play)
