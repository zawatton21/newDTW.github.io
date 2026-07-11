;;; run-state-diff-smoke.el --- smoke-test the elisp state-diff runner -*- coding: utf-8; lexical-binding: t; -*-

(require 'cl-lib)

(defconst gr-smoke-repo-root
  (expand-file-name ".." (file-name-directory (or load-file-name buffer-file-name))))

(defconst gr-smoke-runtime-dir
  (expand-file-name "nelisp_runtime" gr-smoke-repo-root))

(load (expand-file-name "game-runner.el" gr-smoke-runtime-dir) nil t)

(defun gr-smoke-fail (message &rest args)
  "Signal a smoke test failure."
  (error "NELISP-RUNNER-SMOKE-FAIL: %s" (apply #'format message args)))

(defun gr-smoke-equal (label actual expected)
  "Assert that ACTUAL equals EXPECTED for LABEL."
  (unless (equal actual expected)
    (gr-smoke-fail "%s expected=%S actual=%S" label expected actual)))

(defun gr-smoke-true (label value)
  "Assert that VALUE is non-nil for LABEL."
  (unless value
    (gr-smoke-fail "%s expected truthy actual=%S" label value)))

(defun gr-smoke-run ()
  "Run a focused smoke test for `game-runner.el'."
  (gr-reset)
  (gr-set 10 7)
  (gr-smoke-equal "state read" (gr-get 10) 7)
  (gr-smoke-equal "math-add" (gr-eval '((math-add 2 5))) 7)
  (gr-smoke-equal "math-floor" (gr-eval '((math-floor 3.8))) 3)
  (gr-smoke-equal "math-trunc" (gr-eval '((math-trunc -3.8))) -3)
  (gr-smoke-equal "math-mod" (gr-eval '((math-mod 11 4))) 3)
  (gr-smoke-equal "bitwise-and" (gr-eval '((bitwise-and 6 3))) 2)
  (gr-smoke-equal "i18n-format" (gr-eval '((i18n-format "A{0}B{1}" 1 "x"))) "A1Bx")

  (let ((vec (vector 1 2 3)))
    (gr-smoke-equal "index-ref" (gr-eval `((index-ref ,vec 1))) 2)
    (gr-exec-entry `("index-set" ,vec 1 9))
    (gr-smoke-equal "index-set" (aref vec 1) 9))

  (let ((row (vector 0 0 0)))
    (gr-prop-set row "Var2" 42)
    (gr-smoke-equal "prop-set/ref vector" (gr-prop-ref row "Var2") 42))

  (let ((table (make-hash-table :test 'equal)))
    (gr-prop-set table "label" "ok")
    (gr-smoke-equal "prop-set/ref hash" (gr-prop-ref table "label") "ok"))

  (gr-defun "smoke-child" '((20 ((math-add ((state-slot-ref 10)) 3)))
                            ("dtw-debug-print" 123)))
  (gr-defun "smoke-main" '(("core-call" "Func.smoke-child")
                           ("dtw-play-sound" 211)
                           (21 ((index-ref [4 5 6] 2)))))
  (gr-run-func "smoke-main")
  (gr-smoke-equal "core-call write" (gr-get 20) 10)
  (gr-smoke-equal "vector literal read" (gr-get 21) 6)
  (gr-smoke-equal "trace" gr-trace '(123))
  (gr-smoke-true "sumi event" (member '("dtw-play-sound" 211) gr-sumi))

  (gr-run-func "missing-func-for-smoke")
  (gr-smoke-equal "missing func" gr-missing '("missing-func-for-smoke"))
  (princ "nelisp elisp state-diff runner smoke: PASS\n"))

(when noninteractive
  (gr-smoke-run))

;;; run-state-diff-smoke.el ends here
