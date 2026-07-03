;;; run-demo.el --- run the game-runner on NeLisp and print results -*- coding: utf-8; -*-
;; Load order (via nelisp.exe --load): game-runner.el, gamedata-simple.el,
;; gamedata-conditional.el, this.

;; (1) Synthetic IR: exercises literals, state-slot-ref, math-add, bitwise-xor,
;;     and core-call into a sub-function.
(gr-reset)
(gr-defun "tsynth"
          '((1 10)
            (2 (("math-add" (("state-slot-ref" 1)) 5)))   ; 10+5 = 15
            (3 (("bitwise-xor" 12 10)))                    ; 12^10 = 6
            (4 (("state-slot-ref" 2)))                     ; = 15
            ("core-call" "Func.tsub")))
(gr-defun "tsub" '((5 99)))
(gr-run-func "tsynth")
(princ (format "SYNTH s1=%s s2=%s s3=%s s4=%s s5=%s  (expect 10 15 6 15 99)\n"
               (gr-get 1) (gr-get 2) (gr-get 3) (gr-get 4) (gr-get 5)))

;; (2) Real migrated function: func214 sets slots 655..660 then calls func212,
;;     which reads them and calls func211 through the native conditional bridge.
(gr-reset)
(gr-run-func "func214")
(princ (format "FUNC214 655..660 = %s %s %s %s %s %s  (expect 90 88 65 83 16 67)\n"
               (gr-get 655) (gr-get 656) (gr-get 657) (gr-get 658) (gr-get 659) (gr-get 660)))
(princ (format "FUNC214 919 = %s  (func212 ran)\n" (gr-get 919)))
(princ (format "FUNC214 913..918 = %s %s %s %s %s %s  (expect [ Z ] [ X ] [ A ] [ S ] [ C ] [ SHIFT ])\n"
               (gr-get 913) (gr-get 914) (gr-get 915) (gr-get 916) (gr-get 917) (gr-get 918)))
(princ (format "trace (debug-print ids) = %s\n" (reverse gr-trace)))
(princ (format "missing (unloaded core-calls) = %s\n" (reverse gr-missing)))
(princ "DEMO-OK\n")
