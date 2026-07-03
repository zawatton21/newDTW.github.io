;;; run-demo-conditional.el --- verify conditional demo output -*- coding: utf-8; -*-

(gr-reset)
(gr-run-func "func214")

(let ((checks '((913 "[ Z ]")
                (914 "[ X ]")
                (915 "[ A ]")
                (916 "[ S ]")
                (917 "[ C ]")
                (918 "[ SHIFT ]")))
      (ok t))
  (dolist (check checks)
    (let ((slot (car check))
          (want (nth 1 check))
          (got nil))
      (setq got (gr-get slot))
      (princ (format "%s\n" got))
      (when (not (equal got want))
        (setq ok nil)
        (princ (format "COND-DEMO-FAIL slot=%s got=%s want=%s\n" slot got want)))))
  (when ok
    (princ "COND-DEMO-OK\n")))
