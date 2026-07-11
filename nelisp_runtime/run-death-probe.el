;;; run-death-probe.el --- scripted death/ranking flow probe -*- coding: utf-8; lexical-binding: t; -*-

(require 'cl-lib)

(defconst gr-death-probe-runtime-dir
  (file-name-directory (or load-file-name buffer-file-name)))

(defconst gr-death-probe-repo-root
  (expand-file-name ".." gr-death-probe-runtime-dir))

(defvar gr-death-probe-saved-autodraw nil)
(defvar gr-death-probe-saved-func337 nil)
(defvar gr-death-probe-saved-func080 nil)
(defvar gr-death-probe-saved-func165 nil)
(defvar gr-death-probe-saved-func009 nil)
(defvar gr-death-probe-saved-func168 nil)
(defvar gr-death-probe-saved-func180 nil)
(defvar gr-death-probe-saved-func338 nil)
(defvar gr-death-probe-saved-func339 nil)
(defvar gr-death-probe-saved-ranking-autodraw nil)
(defvar gr-death-probe-saved-ranking-func337 nil)
(defvar gr-death-probe-saved-ranking-set-message nil)
(defvar gr-death-probe-saved-set-message nil)
(defvar gr-death-probe-func080-count 0)
(defvar gr-death-probe-func165-count 0)
(defvar gr-death-probe-func009-count 0)
(defvar gr-death-probe-func337-count 0)
(defvar gr-death-probe-ranking-input-count 0)
(defvar gr-death-probe-messages nil)
(defvar gr-death-probe-event-messages nil)

(defun gr-death-probe-fail (label &rest args)
  "Signal a death probe failure with LABEL and ARGS."
  (error "DEATH-PROBE-FAIL %s" (apply #'format label args)))

(defun gr-death-probe-assert (label value)
  "Signal a probe failure unless VALUE is non-nil."
  (unless value
    (gr-death-probe-fail "%s" label)))

(defun gr-death-probe-wrap-func080 (&rest _args)
  "Confirm the death message immediately."
  (setq gr-death-probe-func080-count (1+ gr-death-probe-func080-count))
  (gr-set "key_Z_on" 1)
  nil)

(defun gr-death-probe-wrap-func165 (&rest _args)
  "Stop at the post-death hotel/ranking screen handoff."
  (setq gr-death-probe-func165-count (1+ gr-death-probe-func165-count))
  (push 165 gr-trace)
  nil)

(defun gr-death-probe-wrap-func009 (&rest _args)
  "Stop after returning to the hotel-side main loop."
  (setq gr-death-probe-func009-count (1+ gr-death-probe-func009-count))
  nil)

(defun gr-death-probe-wrap-ranking-func080 (&rest _args)
  "Press Z once for the ranking screen, then release it."
  (setq gr-death-probe-ranking-input-count (1+ gr-death-probe-ranking-input-count))
  (if (= gr-death-probe-ranking-input-count 1)
      (progn
        (gr-set "key_Z_on" 1)
        (gr-set "key_A_on" 0)
        (gr-set "key_X_on" 0))
    (gr-set "key_Z_on" 0)
    (gr-set "key_A_on" 0)
    (gr-set "key_X_on" 0))
  nil)

(defun gr-death-probe-wrap-set-message (row1 &optional row2 color-index do-wait-key do-animation play-sound)
  "Capture death messages while preserving native message state updates."
  (push (list row1 (or row2 "")) gr-death-probe-messages)
  (when gr-death-probe-saved-set-message
    (funcall gr-death-probe-saved-set-message
             row1 row2 color-index do-wait-key do-animation play-sound)))

(defun gr-death-probe-wrap-event-set-message (row1 &optional row2 color-index _do-wait-key _do-animation _play-sound)
  "Capture post-death event messages without waiting for input."
  (push (list row1 (or row2 "")) gr-death-probe-event-messages)
  (when gr-death-probe-saved-ranking-set-message
    (funcall gr-death-probe-saved-ranking-set-message
             row1 row2 color-index nil nil nil)))

(defun gr-death-probe-install-wrappers ()
  "Install probe wrappers for drawing and input functions."
  (setq gr-death-probe-saved-autodraw (gethash "AutoDraw" gr-native-funcs)
        gr-death-probe-saved-func337 (gethash "func337" gr-native-funcs)
        gr-death-probe-saved-func080 (gethash "func080" gr-native-funcs)
        gr-death-probe-saved-func165 (gethash "func165" gr-native-funcs)
        gr-death-probe-saved-set-message (gethash "setMessage" gr-native-funcs))
  (gr-defnative "AutoDraw" (lambda (&rest _args) nil))
  (gr-defnative "func337" (lambda (&rest _args) nil))
  (gr-defnative "func080" #'gr-death-probe-wrap-func080)
  (gr-defnative "func165" #'gr-death-probe-wrap-func165)
  (gr-defnative "setMessage" #'gr-death-probe-wrap-set-message))

(defun gr-death-probe-restore-one (name saved)
  "Restore native NAME to SAVED, or remove it when SAVED is nil."
  (if saved
      (gr-defnative name saved)
    (remhash name gr-native-funcs)))

(defun gr-death-probe-restore-wrappers ()
  "Restore probe wrappers."
  (gr-death-probe-restore-one "AutoDraw" gr-death-probe-saved-autodraw)
  (gr-death-probe-restore-one "func337" gr-death-probe-saved-func337)
  (gr-death-probe-restore-one "func080" gr-death-probe-saved-func080)
  (gr-death-probe-restore-one "func165" gr-death-probe-saved-func165)
  (gr-death-probe-restore-one "setMessage" gr-death-probe-saved-set-message))

(defun gr-death-probe-install-ranking-return-wrappers ()
  "Install wrappers for the ranking close/return path."
  (setq gr-death-probe-saved-func009 (gethash "func009" gr-native-funcs)
        gr-death-probe-saved-func080 (gethash "func080" gr-native-funcs)
        gr-death-probe-saved-func168 (gethash "func168" gr-native-funcs)
        gr-death-probe-saved-func180 (gethash "func180" gr-native-funcs)
        gr-death-probe-saved-func338 (gethash "func338" gr-native-funcs)
        gr-death-probe-saved-func339 (gethash "func339" gr-native-funcs)
        gr-death-probe-saved-ranking-autodraw (gethash "AutoDraw" gr-native-funcs)
        gr-death-probe-saved-ranking-func337 (gethash "func337" gr-native-funcs)
        gr-death-probe-saved-ranking-set-message (gethash "setMessage" gr-native-funcs))
  (gr-defnative "func009" #'gr-death-probe-wrap-func009)
  (gr-defnative "func080" #'gr-death-probe-wrap-ranking-func080)
  (gr-defnative "func168" (lambda (&rest _args) nil))
  (gr-defnative "func180" (lambda (&rest _args) nil))
  (gr-defnative "func338" (lambda (&rest _args) nil))
  (gr-defnative "func339" (lambda (&rest _args) nil))
  (gr-defnative "AutoDraw" (lambda (&rest _args) nil))
  (gr-defnative "func337" (lambda (&rest _args)
                            (setq gr-death-probe-func337-count
                                  (1+ gr-death-probe-func337-count))
                            nil))
  (gr-defnative "setMessage" #'gr-death-probe-wrap-event-set-message))

(defun gr-death-probe-restore-ranking-return-wrappers ()
  "Restore wrappers for the ranking close/return path."
  (gr-death-probe-restore-one "func009" gr-death-probe-saved-func009)
  (gr-death-probe-restore-one "func080" gr-death-probe-saved-func080)
  (gr-death-probe-restore-one "func168" gr-death-probe-saved-func168)
  (gr-death-probe-restore-one "func180" gr-death-probe-saved-func180)
  (gr-death-probe-restore-one "func338" gr-death-probe-saved-func338)
  (gr-death-probe-restore-one "func339" gr-death-probe-saved-func339)
  (gr-death-probe-restore-one "AutoDraw" gr-death-probe-saved-ranking-autodraw)
  (gr-death-probe-restore-one "func337" gr-death-probe-saved-ranking-func337)
  (gr-death-probe-restore-one "setMessage" gr-death-probe-saved-ranking-set-message))

(defun gr-death-probe-clear-bites-the-dust ()
  "Clear the Bites the Dust escape flag for a deterministic death path."
  (let ((equip (gr-get "equip_disc")))
    (when (and (vectorp equip) (< 395 (length equip)))
      (aset equip 395 0))))

(defun gr-death-probe-prepare-data-root ()
  "Seed the probe data root with a complete base save file."
  (let* ((data-root (expand-file-name "build/death-probe-data" gr-death-probe-repo-root))
         (seed-00 (expand-file-name "build/tile-probe-data/00.dat" gr-death-probe-repo-root))
         (target-00 (expand-file-name "00.dat" data-root)))
    (make-directory data-root t)
    (when (file-exists-p seed-00)
      (copy-file seed-00 target-00 t))
    data-root))

(defun gr-death-probe-run-flow ()
  "Run the death/ranking handoff path and return evidence."
  (let ((before-deaths (gr-num (or (gr-get 998) 0)))
        (disc-file (gr-data-path "disc.txt")))
    (setq gr-sumi nil
          gr-trace nil
          gr-missing nil
          gr-death-probe-messages nil
          gr-death-probe-func080-count 0
          gr-death-probe-func165-count 0)
    (when (file-exists-p disc-file)
      (delete-file disc-file))
    (gr-death-probe-clear-bites-the-dust)
    (gr-set 375 0)
    (gr-set 407 0)
    (gr-set 1061 0)
    (gr-set 386 0)
    (gr-set 404 0)
    (gr-set 1041 0)
    (gr-set "time_paused_count" 0)
    (gr-set "dungeon_number" 1)
    (gr-set "current_floor" 1)
    (gr-set "key_Z_on" 0)
    (gr-set "key_A_on" 0)
    (gr-set "key_X_on" 0)
    (gr-death-probe-install-wrappers)
    (unwind-protect
        (gr-run-func "func672")
      (gr-death-probe-restore-wrappers))
    (list :before-deaths before-deaths
          :after-deaths (gr-get 998)
          :disc-file disc-file
          :disc-file-exists (file-exists-p disc-file)
          :messages (nreverse gr-death-probe-messages)
          :func080-count gr-death-probe-func080-count
          :func165-count gr-death-probe-func165-count
          :ivents-flag (gr-get "ivents_flag")
          :ranking-mode (gr-get 767)
          :trace (reverse gr-trace)
          :missing (reverse gr-missing))))

(defun gr-death-probe-run-ranking-return ()
  "Close the ranking screen and return to the hotel-side main loop."
  (setq gr-trace nil
        gr-missing nil
        gr-death-probe-func009-count 0
        gr-death-probe-func337-count 0
        gr-death-probe-event-messages nil
        gr-death-probe-ranking-input-count 0)
  (gr-set "key_Z_on" 0)
  (gr-set "key_A_on" 0)
  (gr-set "key_X_on" 0)
  (gr-death-probe-install-ranking-return-wrappers)
  (unwind-protect
      (gr-run-func "func166")
    (gr-death-probe-restore-ranking-return-wrappers))
  (list :func009-count gr-death-probe-func009-count
        :func337-count gr-death-probe-func337-count
        :event-messages (nreverse gr-death-probe-event-messages)
        :input-count gr-death-probe-ranking-input-count
        :dungeon-number (gr-get "dungeon_number")
        :current-floor (gr-get "current_floor")
        :ranking-mode (gr-get 767)
        :go-to-hotel (gr-get "go_to_hotel")
        :player (list (gr-get 66) (gr-get 67))
        :trace (reverse gr-trace)
        :missing (reverse gr-missing)))

(defun gr-death-probe-main ()
  "Run the death/ranking probe after a normal direct bootstrap."
  (let ((runtime-dir gr-death-probe-runtime-dir)
        (result nil)
        (return-result nil))
    (setq default-directory gr-death-probe-repo-root)
    (setenv "SUMI_AUDIO" "0")
    (setenv "GR_PLAY_SKIP_OPENING" "1")
    (setenv "GR_PLAY_DURATION_SECONDS" "0.1")
    (setenv "GR_PLAY_DIRECT_BIN" "0")
    (setenv "GR_DATA_ROOT" (gr-death-probe-prepare-data-root))
    (setenv "HOME" (expand-file-name "build/emacs-home" gr-death-probe-repo-root))
    (load-file (expand-file-name "game-runner.el" runtime-dir))
    (load-file (expand-file-name "gamedata-simple.el" runtime-dir))
    (load-file (expand-file-name "gamedata-conditional.el" runtime-dir))
    (load-file (expand-file-name "gamedata-state.el" runtime-dir))
    (load-file (expand-file-name "sumi-json.el" runtime-dir))
    (load-file (expand-file-name "play.el" runtime-dir))
    (setq result (gr-death-probe-run-flow))
    (setq return-result (gr-death-probe-run-ranking-return))
    (princ (format "DEATH-PROBE %S\n" result))
    (princ (format "DEATH-RETURN-PROBE %S\n" return-result))
    (gr-death-probe-assert "death-trace"
                           (and (member 672 (plist-get result :trace))
                                (member 673 (plist-get result :trace))
                                (member 227 (plist-get result :trace))
                                (member 173 (plist-get result :trace))
                                (member 165 (plist-get result :trace))))
    (gr-death-probe-assert "death-count"
                           (= (gr-num (plist-get result :after-deaths))
                              (1+ (plist-get result :before-deaths))))
    (gr-death-probe-assert "death-message"
                           (cl-some
                            (lambda (message)
                              (string-match-p "再起不能" (car message)))
                            (plist-get result :messages)))
    (gr-death-probe-assert "disc-record" (plist-get result :disc-file-exists))
    (gr-death-probe-assert "death-confirm" (> (plist-get result :func080-count) 0))
    (gr-death-probe-assert "post-death-handoff" (> (plist-get result :func165-count) 0))
    (gr-death-probe-assert "post-death-event" (= (gr-num (plist-get result :ivents-flag)) 5))
    (gr-death-probe-assert "death-missing" (null (plist-get result :missing)))
    (gr-death-probe-assert "return-trace"
                           (and (member 166 (plist-get return-result :trace))
                                (member 178 (plist-get return-result :trace))
                                (member 167 (plist-get return-result :trace))
                                (member 159 (plist-get return-result :trace))))
    (gr-death-probe-assert "return-loop-stop"
                           (> (plist-get return-result :func009-count) 0))
    (gr-death-probe-assert "return-death-event"
                           (member 154 (plist-get return-result :trace)))
    (gr-death-probe-assert "return-event-messages"
                           (and (= (length (plist-get return-result :event-messages)) 4)
                                (cl-some
                                 (lambda (message)
                                   (or (string-match-p "レクイエム" (car message))
                                       (string-match-p "レクイエム" (cadr message))))
                                 (plist-get return-result :event-messages))))
    (gr-death-probe-assert "return-event-render"
                           (> (plist-get return-result :func337-count) 0))
    (gr-death-probe-assert "return-input" (> (plist-get return-result :input-count) 1))
    (gr-death-probe-assert "return-dungeon"
                           (and (= (gr-num (plist-get return-result :dungeon-number)) 0)
                                (= (gr-num (plist-get return-result :current-floor)) 0)))
    (gr-death-probe-assert "return-ranking-mode"
                           (= (gr-num (plist-get return-result :ranking-mode)) 0))
    (gr-death-probe-assert "return-hotel-flag"
                           (= (gr-num (plist-get return-result :go-to-hotel)) 0))
    (gr-death-probe-assert "return-missing" (null (plist-get return-result :missing)))
    (princ "DEATH-PROBE-OK\n")))

(when noninteractive
  (gr-death-probe-main))

;;; run-death-probe.el ends here
