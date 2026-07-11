;;; run-opening-story-probe.el --- full func150 opening story probe -*- coding: utf-8; lexical-binding: t; -*-

(require 'cl-lib)

(defconst gr-opening-story-probe-runtime-dir
  (file-name-directory (or load-file-name buffer-file-name)))

(defconst gr-opening-story-probe-repo-root
  (expand-file-name ".." gr-opening-story-probe-runtime-dir))

(defvar gr-opening-story-probe-saved-autodraw nil)
(defvar gr-opening-story-probe-saved-func337 nil)
(defvar gr-opening-story-probe-saved-func339 nil)
(defvar gr-opening-story-probe-saved-func159 nil)
(defvar gr-opening-story-probe-saved-set-message nil)
(defvar gr-opening-story-probe-func337-count 0)
(defvar gr-opening-story-probe-func339-count 0)
(defvar gr-opening-story-probe-func159-count 0)
(defvar gr-opening-story-probe-messages nil)

(defun gr-opening-story-probe-fail (label &rest args)
  "Signal an opening story probe failure with LABEL and ARGS."
  (error "OPENING-STORY-PROBE-FAIL %s" (apply #'format label args)))

(defun gr-opening-story-probe-assert (label value)
  "Signal a probe failure unless VALUE is non-nil."
  (unless value
    (gr-opening-story-probe-fail "%s" label)))

(defun gr-opening-story-probe-prepare-data-root ()
  "Seed the probe data root with a complete base save file."
  (let* ((data-root (expand-file-name "build/opening-story-probe-data"
                                      gr-opening-story-probe-repo-root))
         (seed-00 (expand-file-name "build/tile-probe-data/00.dat"
                                    gr-opening-story-probe-repo-root))
         (target-00 (expand-file-name "00.dat" data-root)))
    (make-directory data-root t)
    (when (file-exists-p seed-00)
      (copy-file seed-00 target-00 t))
    data-root))

(defun gr-opening-story-probe-activate-data-root ()
  "Force all bload/bsave paths into the isolated probe data root."
  (let ((data-root (gr-opening-story-probe-prepare-data-root)))
    (setenv "GR_DATA_ROOT" data-root)
    (setq gr-data-root data-root)
    data-root))

(defun gr-opening-story-probe-wrap-func337 (&rest _args)
  "Count opening story draw frames without serializing them."
  (setq gr-opening-story-probe-func337-count
        (1+ gr-opening-story-probe-func337-count))
  (push 337 gr-trace)
  nil)

(defun gr-opening-story-probe-wrap-func339 (&rest _args)
  "Count wait frames without sleeping."
  (setq gr-opening-story-probe-func339-count
        (1+ gr-opening-story-probe-func339-count))
  (push 339 gr-trace)
  nil)

(defun gr-opening-story-probe-wrap-func159 (&rest _args)
  "Stop once func150 has handed off to the hotel-side setup."
  (setq gr-opening-story-probe-func159-count
        (1+ gr-opening-story-probe-func159-count))
  (push 159 gr-trace)
  nil)

(defun gr-opening-story-probe-wrap-set-message
    (row1 &optional row2 color-index _do-wait-key _do-animation _play-sound)
  "Capture opening story messages without waiting for input."
  (push (list row1 (or row2 "")) gr-opening-story-probe-messages)
  (when gr-opening-story-probe-saved-set-message
    (funcall gr-opening-story-probe-saved-set-message
             row1 row2 color-index nil nil nil)))

(defun gr-opening-story-probe-install-wrappers ()
  "Install wrappers that make the full opening deterministic in batch."
  (setq gr-opening-story-probe-saved-autodraw (gethash "AutoDraw" gr-native-funcs)
        gr-opening-story-probe-saved-func337 (gethash "func337" gr-native-funcs)
        gr-opening-story-probe-saved-func339 (gethash "func339" gr-native-funcs)
        gr-opening-story-probe-saved-func159 (gethash "func159" gr-native-funcs)
        gr-opening-story-probe-saved-set-message (gethash "setMessage" gr-native-funcs))
  (gr-defnative "AutoDraw" (lambda (&rest _args) nil))
  (gr-defnative "func337" #'gr-opening-story-probe-wrap-func337)
  (gr-defnative "func339" #'gr-opening-story-probe-wrap-func339)
  (gr-defnative "func159" #'gr-opening-story-probe-wrap-func159)
  (gr-defnative "setMessage" #'gr-opening-story-probe-wrap-set-message))

(defun gr-opening-story-probe-restore-one (name saved)
  "Restore native NAME to SAVED, or remove it when SAVED is nil."
  (if saved
      (gr-defnative name saved)
    (remhash name gr-native-funcs)))

(defun gr-opening-story-probe-restore-wrappers ()
  "Restore wrapped natives."
  (gr-opening-story-probe-restore-one "AutoDraw" gr-opening-story-probe-saved-autodraw)
  (gr-opening-story-probe-restore-one "func337" gr-opening-story-probe-saved-func337)
  (gr-opening-story-probe-restore-one "func339" gr-opening-story-probe-saved-func339)
  (gr-opening-story-probe-restore-one "func159" gr-opening-story-probe-saved-func159)
  (gr-opening-story-probe-restore-one "setMessage" gr-opening-story-probe-saved-set-message))

(defun gr-opening-story-probe-run ()
  "Run the generated full func150 story and return evidence."
  (setq gr-trace nil
        gr-missing nil
        gr-sumi nil
        gr-opening-story-probe-func337-count 0
        gr-opening-story-probe-func339-count 0
        gr-opening-story-probe-func159-count 0
        gr-opening-story-probe-messages nil)
  (gr-set 725 1)
  (gr-set 726 1)
  (gr-set 734 0)
  (gr-opening-story-probe-install-wrappers)
  (unwind-protect
      (gr-run-func "func150")
    (gr-opening-story-probe-restore-wrappers))
  (list :messages (nreverse gr-opening-story-probe-messages)
        :func337-count gr-opening-story-probe-func337-count
        :func339-count gr-opening-story-probe-func339-count
        :func159-count gr-opening-story-probe-func159-count
        :save-file (gr-data-path "01.dat")
        :extra-save-file (gr-data-path "01e.dat")
        :save-exists (file-exists-p (gr-data-path "01.dat"))
        :extra-save-exists (file-exists-p (gr-data-path "01e.dat"))
        :ivents-flag (gr-get "ivents_flag")
        :player (list (gr-get 66) (gr-get 67))
        :trace (reverse gr-trace)
        :missing (reverse gr-missing)))

(defun gr-opening-story-probe-main ()
  "Run the full generated opening-story probe."
  (let ((runtime-dir gr-opening-story-probe-runtime-dir)
        (result nil))
    (setq default-directory gr-opening-story-probe-repo-root)
    (setenv "SUMI_AUDIO" "0")
    (setenv "GR_PLAY_DIRECT_BIN" "0")
    (setenv "GR_DATA_ROOT" (gr-opening-story-probe-prepare-data-root))
    (setenv "HOME" (expand-file-name "build/emacs-home" gr-opening-story-probe-repo-root))
    (load-file (expand-file-name "game-runner.el" runtime-dir))
    (load-file (expand-file-name "gamedata-simple.el" runtime-dir))
    (load-file (expand-file-name "gamedata-state.el" runtime-dir))
    (load-file (expand-file-name "gamedata-conditional.el" runtime-dir))
    (load-file (expand-file-name "sumi-json.el" runtime-dir))
    (gr-reset)
    (gr-opening-story-probe-activate-data-root)
    (setq result (gr-opening-story-probe-run))
    (princ (format "OPENING-STORY-PROBE %S\n" result))
    (gr-opening-story-probe-assert "trace"
                                   (and (member 150 (plist-get result :trace))
                                        (member 233 (plist-get result :trace))
                                        (member 158 (plist-get result :trace))
                                        (member 504 (plist-get result :trace))
                                        (member 230 (plist-get result :trace))
                                        (member 159 (plist-get result :trace))))
    (gr-opening-story-probe-assert "messages"
                                   (and (> (length (plist-get result :messages)) 15)
                                        (cl-some
                                         (lambda (message)
                                           (or (string-match-p "レクイエム" (car message))
                                               (string-match-p "レクイエム" (cadr message))))
                                         (plist-get result :messages))
                                        (cl-some
                                         (lambda (message)
                                           (or (string-match-p "転機" (car message))
                                               (string-match-p "転機" (cadr message))))
                                         (plist-get result :messages))))
    (gr-opening-story-probe-assert "draw-frames"
                                   (> (plist-get result :func337-count) 100))
    (gr-opening-story-probe-assert "wait-frames"
                                   (> (plist-get result :func339-count) 0))
    (gr-opening-story-probe-assert "save"
                                   (and (plist-get result :save-exists)
                                        (plist-get result :extra-save-exists)))
    (gr-opening-story-probe-assert "handoff"
                                   (= (plist-get result :func159-count) 1))
    (gr-opening-story-probe-assert "missing" (null (plist-get result :missing)))
    (princ "OPENING-STORY-PROBE-OK\n")))

(when noninteractive
  (gr-opening-story-probe-main))

;;; run-opening-story-probe.el ends here
