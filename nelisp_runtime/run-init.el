;;; run-init.el --- full initialization + worldgen verification -*- coding: utf-8; -*-

(let* ((runtime-dir (file-name-directory (or load-file-name buffer-file-name)))
       (repo-root (expand-file-name ".." runtime-dir)))
  (load-file (expand-file-name "game-runner.el" runtime-dir))
  (load-file (expand-file-name "gamedata-simple.el" runtime-dir))
  (load-file (expand-file-name "gamedata-conditional.el" runtime-dir))
  (setq gr-worldgen-autorun nil)
  (load-file (expand-file-name "run-worldgen.el" runtime-dir))
  (setq max-lisp-eval-depth 10000)
  (setq max-specpdl-size 10000)
  (setq gr-data-root (or (getenv "GR_DATA_ROOT") gr-data-root))
  (gr-reset)
  ;; Batch check stops at the loader boundary: the real func139A title flow
  ;; blocks on interactive input (unbounded recursion in batch), so no-op it
  ;; here (moved from game-runner.el when the title flow was transpiled).
  (gr-defnative "func139A" (lambda (&rest _args) nil))
  (gr-set "stat" 1)
  (gr-set "hwnd" 0)
  (gr-init-main-bootstrap-state)
  (condition-case err
      (gr-run-func "func004")
    (error
     (princ (format "INIT-ERROR %s\n" err))))
  (gr-capture-main-bootstrap-state)
  (princ (format "INIT-SLOTS %s\n" (hash-table-count gr-state)))
  (princ (format "INIT-SAMPLE version=%s title=%s\n"
                 (gr-get "version_number")
                 (gr-get "game_title")))
  (princ (format "INIT-SAMPLE iron-last-floor=%s iron-name=%s iron-boss=%s\n"
                 (gr-get 20)
                 (gr-get 21)
                 (gr-get 24)))
  (princ (format "INIT-SAMPLE animation-delay=%s save-slot=%s palette7=%s,%s,%s\n"
                 (gr-get "animationDelay")
                 (gr-get 726)
                 (gr-index-ref (gr-get 25) 7)
                 (gr-index-ref (gr-get 26) 7)
                 (gr-index-ref (gr-get 27) 7)))
  (princ (format "INIT-SAMPLE keybinds=%s,%s,%s,%s,%s,%s\n"
                 (gr-get 655)
                 (gr-get 656)
                 (gr-get 657)
                 (gr-get 658)
                 (gr-get 659)
                 (gr-get 660)))
  (princ (format "INIT-SAMPLE window=%s,%s fullscreen=%s\n"
                 (gr-get 8)
                 (gr-get 9)
                 (gr-get 11)))
  (when gr-missing
    (princ (format "INIT-MISSING %s\n" (reverse gr-missing))))
  (gr-worldgen-seed-base-state)
  (setq gr-worldgen-use-existing-state t)
  (gr-worldgen-run t)
  (gr-restore-main-bootstrap-state))
