;;; game-runner.el --- interpret newDTW state-diff IR on the NeLisp runtime  -*- lexical-binding: t; -*-

;; The migrated game logic exists as a pure-data state-diff IR (see
;; src/renderer/nelisp_bridge/generated*.ts).  Each function is a list of
;; entries; this is the elisp interpreter for that IR, so the non-GUI game
;; logic runs as pure elisp on NeLisp (target/nelisp.exe).  GUI/IO primitives
;; (dtw-draw-*, game-*) are collected as a sumi command stream to feed the
;; native sumi cairo-elisp renderer.
;;
;; Entry forms (a function body is a list of these):
;;   (SLOT VALUE)                      ; state write: state[SLOT] = eval(VALUE)
;;   ("core-call" "Func.funcNNN")      ; run another function
;;   ("dtw-debug-print" N)             ; trace
;;   ("index-set" ARR IDX VAL)         ; ARR[IDX] = eval(VAL)  (side-effecting)
;;   ("OTHER" ARG...)                  ; GUI/IO primitive -> collected as sumi
;; Expression forms (appear as a VALUE, wrapped one level: ((op args...))):
;;   (("state-slot-ref" SLOT))         ; read state[SLOT]
;;   (("math-add" A B)) (("math-sub" A B)) (("math-mul" A B))
;;   (("bitwise-and" A B)) (("bitwise-or" A B)) (("bitwise-xor" A B))
;;   (("index-ref" ARR IDX))           ; eval(ARR)[eval(IDX)]
;;   (("i18n-format" FMT ARG...))      ; {0}.. substitution (minimal)
;;   bare number / string              ; literal

(defvar gr-state nil "Hash: slot -> value.")
(defvar gr-funcs nil "Hash: \"funcNNN\" -> IR list.")
(defvar gr-sumi nil "Collected GUI/IO commands (reverse order).")
(defvar gr-trace nil "Collected dtw-debug-print ids (reverse order).")
(defvar gr-missing nil "Names of core-called funcs not loaded (reverse).")
(defvar gr-depth 0 "Recursion guard depth.")

(defun gr-reset ()
  "Reset interpreter state (keeps loaded functions)."
  (setq gr-state (make-hash-table :test 'equal))
  (setq gr-sumi nil gr-trace nil gr-missing nil gr-depth 0))

(defun gr-defun (name ir)
  "Register IR for NAME."
  (unless (hash-table-p gr-funcs) (setq gr-funcs (make-hash-table :test 'equal)))
  (puthash name ir gr-funcs))

(defun gr-get (slot) (gethash slot gr-state))
(defun gr-set (slot val) (puthash slot val gr-state))

(defun gr-expr-p (x)
  "Non-nil if X is a wrapped expression node ((op args...))."
  (and (consp x) (null (cdr x)) (consp (car x)) (stringp (caar x))))

(defun gr-eval (x)
  "Evaluate an IR expression node X to a value."
  (cond
   ((gr-expr-p x) (gr-eval-op (car x)))
   ((vectorp x) x)
   (t x)))                              ; number / string / nil literal

(defun gr-eval-op (form)
  "Evaluate an expression op FORM = (OP ARG...)."
  (let ((op (car form)))
    (cond
     ((equal op "state-slot-ref") (gr-get (gr-eval (nth 1 form))))
     ((equal op "math-add") (+ (gr-eval (nth 1 form)) (gr-eval (nth 2 form))))
     ((equal op "math-sub") (- (gr-eval (nth 1 form)) (gr-eval (nth 2 form))))
     ((equal op "math-mul") (* (gr-eval (nth 1 form)) (gr-eval (nth 2 form))))
     ((equal op "bitwise-and") (logand (gr-eval (nth 1 form)) (gr-eval (nth 2 form))))
     ((equal op "bitwise-or")  (logior (gr-eval (nth 1 form)) (gr-eval (nth 2 form))))
     ((equal op "bitwise-xor") (logxor (gr-eval (nth 1 form)) (gr-eval (nth 2 form))))
     ((equal op "index-ref")
      (let ((arr (gr-eval (nth 1 form))) (i (gr-eval (nth 2 form))))
        (if (and (sequencep arr) (integerp i) (>= i 0) (< i (length arr)))
            (elt arr i)
          nil)))
     ((equal op "i18n-format")
      (let ((fmt (gr-eval (nth 1 form))) (args (mapcar #'gr-eval (nthcdr 2 form))) (i 0))
        (dolist (a args)
          (setq fmt (gr-replace-all fmt (format "{%d}" i) (format "%s" a)))
          (setq i (1+ i)))
        fmt))
     (t (list 'gr-unknown-expr op)))))

(defun gr-replace-all (s from to)
  "Replace every literal FROM in S with TO."
  (let ((out "") (start 0) (idx nil) (flen (length from)))
    (while (setq idx (string-search from s start))
      (setq out (concat out (substring s start idx) to))
      (setq start (+ idx flen)))
    (concat out (substring s start))))

(defun gr-exec-entry (e)
  "Execute one IR entry E."
  (cond
   ((null e) nil)
   ((numberp (car e))                   ; (SLOT VALUE) state write
    (gr-set (car e) (gr-eval (nth 1 e))))
   ((stringp (car e))
    (let ((op (car e)))
      (cond
       ((equal op "dtw-debug-print") (push (gr-eval (nth 1 e)) gr-trace))
       ((equal op "core-call")
        (let ((nm (gr-eval (nth 1 e))))
          (when (stringp nm)
            (when (string-prefix-p "Func." nm) (setq nm (substring nm 5)))
            (gr-run-func nm))))
       ((equal op "index-set")
        (let ((arr (gr-eval (nth 1 e))) (i (gr-eval (nth 2 e))) (v (gr-eval (nth 3 e))))
          (when (and (arrayp arr) (integerp i) (>= i 0) (< i (length arr)))
            (aset arr i v))))
       (t                               ; GUI/IO primitive -> sumi stream
        (push (cons op (mapcar #'gr-eval (cdr e))) gr-sumi)))))
   ((consp (car e))                     ; nested sequence of entries
    (dolist (sub e) (gr-exec-entry sub)))
   (t nil)))

(defun gr-run-func (name)
  "Run the IR registered for NAME."
  (let ((ir (and (hash-table-p gr-funcs) (gethash name gr-funcs))))
    (cond
     ((>= gr-depth 100000) (error "gr-run-func: recursion limit at %s" name))
     ((null ir) (push name gr-missing))
     (t (setq gr-depth (1+ gr-depth))
        (dolist (entry ir) (gr-exec-entry entry))
        (setq gr-depth (1- gr-depth))))))

(provide 'game-runner)
;;; game-runner.el ends here
