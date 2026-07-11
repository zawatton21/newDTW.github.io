;;; run-opening-probe.el --- scripted title/login opening probe -*- coding: utf-8; lexical-binding: t; -*-

(require 'cl-lib)

(defconst gr-opening-probe-runtime-dir
  (file-name-directory (or load-file-name buffer-file-name)))

(defconst gr-opening-probe-repo-root
  (expand-file-name ".." gr-opening-probe-runtime-dir))

(defconst gr-opening-probe-build-dir
  (expand-file-name "build" gr-opening-probe-repo-root))

(defconst gr-opening-probe-key-state-path
  (expand-file-name "key-state.txt" gr-opening-probe-build-dir))

(defvar gr-opening-probe-seq 0)
(defvar gr-opening-probe-timers nil)

(defun gr-opening-probe-write-key-state (token keycode &optional held)
  "Write one opening key-state record."
  (let ((tmp-path (concat gr-opening-probe-key-state-path ".tmp"))
        (coding-system-for-write 'utf-8))
    (setq gr-opening-probe-seq (1+ gr-opening-probe-seq))
    (make-directory gr-opening-probe-build-dir t)
    (with-temp-file tmp-path
      (insert (format "%s %d\n" token gr-opening-probe-seq))
      (insert (format "%d\n" (or keycode 0)))
      (insert "HELD")
      (dolist (code held)
        (insert (format " %d" code)))
      (insert "\n"))
    (rename-file tmp-path gr-opening-probe-key-state-path t)))

(defun gr-opening-probe-idle ()
  "Write an idle input state."
  (gr-opening-probe-write-key-state "IDLE" 0 nil))

(defun gr-opening-probe-press-z ()
  "Write a held Z input state."
  (gr-opening-probe-write-key-state "LIVE" 90 '(90)))

(defun gr-opening-probe-schedule-input ()
  "Schedule title and login confirm inputs."
  (setq gr-opening-probe-timers
        (list
         (run-at-time 0.60 0.80 #'gr-opening-probe-press-z)
         (run-at-time 0.75 0.80 #'gr-opening-probe-idle))))

(defun gr-opening-probe-cancel-input ()
  "Cancel pending opening input timers."
  (dolist (timer gr-opening-probe-timers)
    (when (timerp timer)
      (cancel-timer timer)))
  (setq gr-opening-probe-timers nil))

(defun gr-opening-probe-assert (label value)
  "Signal a probe failure unless VALUE is non-nil."
  (unless value
    (error "OPENING-PROBE-FAIL %s" label)))

(defun gr-opening-probe-setenv-clean (name value)
  "Set NAME to VALUE after removing duplicate entries from `process-environment'."
  (let ((prefix (concat (regexp-quote name) "=")))
    (setq process-environment
          (cl-remove-if
           (lambda (entry)
             (string-match-p (concat "\\`" prefix) entry))
           process-environment)))
  (setenv name value))

(defun gr-opening-probe-main ()
  "Run the opening probe through the normal non-skip boot path."
  (let ((runtime-dir gr-opening-probe-runtime-dir))
    (setq default-directory gr-opening-probe-repo-root)
    (gr-opening-probe-setenv-clean "SUMI_AUDIO" "0")
    (gr-opening-probe-setenv-clean "GR_PLAY_DURATION_SECONDS" "0.3")
    (gr-opening-probe-setenv-clean "GR_PLAY_FAST_OPENING_STORY" "1")
    (gr-opening-probe-setenv-clean "GR_PLAY_DIRECT_BIN" "0")
    (gr-opening-probe-setenv-clean "GR_PLAY_SCRIPTED_OPENING" "1")
    (gr-opening-probe-setenv-clean
     "GR_DATA_ROOT"
     (expand-file-name "build/opening-probe-data" gr-opening-probe-repo-root))
    (gr-opening-probe-setenv-clean
     "HOME"
     (expand-file-name "build/emacs-home" gr-opening-probe-repo-root))
    (gr-opening-probe-setenv-clean "GR_PLAY_SKIP_OPENING" nil)
    (when (file-exists-p gr-opening-probe-key-state-path)
      (delete-file gr-opening-probe-key-state-path))
    (gr-opening-probe-idle)
    (unwind-protect
        (progn
          (load-file (expand-file-name "game-runner.el" runtime-dir))
          (load-file (expand-file-name "gamedata-simple.el" runtime-dir))
          (load-file (expand-file-name "gamedata-conditional.el" runtime-dir))
          (load-file (expand-file-name "gamedata-state.el" runtime-dir))
          (load-file (expand-file-name "sumi-json.el" runtime-dir))
          (load-file (expand-file-name "play.el" runtime-dir)))
      (gr-opening-probe-cancel-input))
    (princ
     (format
      "OPENING-PROBE result=%S load=%d title=%d login=%d story=%d hotel=%d player=%s,%s dumped=%d\n"
      gr-play-opening-result
      gr-play-load-screen-frame-count
      gr-play-title-frame-count
      gr-play-opening-login-loops
      gr-play-opening-story-frame-count
      gr-play-hotel-start-count
      (or (gr-get 66) 0)
      (or (gr-get 67) 0)
      gr-play-dumped-count))
    (gr-opening-probe-assert "load-screen" (> gr-play-load-screen-frame-count 0))
    (gr-opening-probe-assert "title-frames" (> gr-play-title-frame-count 0))
    (gr-opening-probe-assert "login-loop" (> gr-play-opening-login-loops 0))
    (gr-opening-probe-assert "new-game" (eq gr-play-opening-result 'new-game))
    (gr-opening-probe-assert "story-frames" (> gr-play-opening-story-frame-count 0))
    (gr-opening-probe-assert "generated-story" gr-play-opening-story-used-generated)
    (gr-opening-probe-assert "story-messages" (> gr-play-opening-story-message-count 10))
    (gr-opening-probe-assert "hotel-start" (> gr-play-hotel-start-count 0))
    (gr-opening-probe-assert "hotel-player-x" (= (gr-num (or (gr-get 66) 0)) 13))
    (gr-opening-probe-assert "hotel-player-y" (= (gr-num (or (gr-get 67) 0)) 10))
    (princ "OPENING-PROBE-OK\n")))

(when noninteractive
  (gr-opening-probe-main))

;;; run-opening-probe.el ends here
