;;; statediff-to-elisp.el --- export simple state-diff IR to elisp -*- lexical-binding: t; -*-

(require 'json)
(require 'cl-lib)

(defvar gr-statediff-suppress-main nil
  "Non-nil prevents this file from running its CLI main when loaded.")

(defconst gr-statediff-repo-root
  (expand-file-name ".." (file-name-directory (or load-file-name buffer-file-name))))

(defconst gr-statediff-default-out
  (expand-file-name "nelisp_runtime/gamedata-simple.el" gr-statediff-repo-root))

(defconst gr-statediff-sources
  '("src/renderer/nelisp_bridge/generatedSimpleStateDiff.ts"))

(defconst gr-statediff-entry-ops
  '("core-call"
    "dtw-debug-print"
    "index-set"))

(defconst gr-statediff-expr-ops
  '("state-slot-ref"
    "math-add"
    "math-sub"
    "math-mul"
    "math-div"
    "math-floor"
    "math-trunc"
    "math-abs"
    "math-mod"
    "bitwise-and"
    "bitwise-or"
    "bitwise-xor"
    "dtw-random"
    "dtw-read-key-state"
    "index-ref"
    "i18n-format"))

(defun gr-statediff-json-array-p (value)
  "Return non-nil when VALUE is a JSON array represented as vector/list."
  (or (vectorp value) (listp value)))

(defun gr-statediff-seq (value)
  "Return VALUE as a list."
  (cond
   ((vectorp value) (append value nil))
   ((listp value) value)
   (t nil)))

(defun gr-statediff-string-prefix-p (prefix string)
  "Return non-nil when STRING starts with PREFIX."
  (and (stringp string)
       (<= (length prefix) (length string))
       (string= prefix (substring string 0 (length prefix)))))

(defun gr-statediff-expr-node-p (value)
  "Return non-nil when VALUE is a wrapped expression node."
  (let ((items (gr-statediff-seq value)))
    (and (= (length items) 1)
         (let* ((inner (gr-statediff-seq (car items)))
                (op (car inner)))
           (and inner
                (stringp op)
                (member op gr-statediff-expr-ops))))))

(defun gr-statediff-entry-node-p (value)
  "Return non-nil when VALUE is an entry node."
  (let* ((items (gr-statediff-seq value))
         (op (car items)))
    (and items
         (stringp op)
         (or (member op gr-statediff-entry-ops)
             (gr-statediff-string-prefix-p "dtw-" op)
             (gr-statediff-string-prefix-p "game-" op)))))

(defun gr-statediff-escape-string (text)
  "Escape TEXT for an elisp string literal."
  (replace-regexp-in-string
   "\""
   "\\\\\""
   (replace-regexp-in-string "\\\\" "\\\\\\\\" text nil t)
   nil t))

(defun gr-statediff-to-elisp (value &optional mode)
  "Convert JSON VALUE to the elisp IR syntax using MODE."
  (setq mode (or mode 'value))
  (cond
   ((gr-statediff-json-array-p value)
    (let ((items (gr-statediff-seq value)))
      (cond
       ((and (eq mode 'entry) (stringp (car items)))
        (concat "("
                (mapconcat #'identity
                           (cons (car items)
                                 (mapcar (lambda (item)
                                           (gr-statediff-to-elisp item 'value))
                                         (cdr items)))
                           " ")
                ")"))
       ((and (eq mode 'expr) (stringp (car items)))
        (concat "("
                (mapconcat #'identity
                           (cons (car items)
                                 (mapcar (lambda (item)
                                           (gr-statediff-to-elisp item 'value))
                                         (cdr items)))
                           " ")
                ")"))
       ((gr-statediff-expr-node-p value)
        (concat "("
                (mapconcat (lambda (item)
                             (gr-statediff-to-elisp item 'expr))
                           items
                           " ")
                ")"))
       ((gr-statediff-entry-node-p value)
        (gr-statediff-to-elisp value 'entry))
       (t
        (concat "("
                (mapconcat (lambda (item)
                             (gr-statediff-to-elisp item 'value))
                           items
                           " ")
                ")")))))
   ((null value) "nil")
   ((eq value :json-false) "nil")
   ((stringp value)
    (concat "\"" (gr-statediff-escape-string value) "\""))
   ((numberp value)
    (number-to-string value))
   ((eq value t) "t")
   (t "nil")))

(defun gr-statediff-load-ts-object (path)
  "Read the first top-level object literal assigned in TS file PATH."
  (let* ((text (with-temp-buffer
                 (insert-file-contents path)
                 (buffer-string)))
         (eq-pos (string-match "=[[:space:]]*{" text)))
    (unless eq-pos
      (error "no object literal in %s" path))
    (let* ((start (string-match "{" text eq-pos))
           (end (cl-position ?} text :from-end t))
           (json-text (substring text start (1+ end))))
      (setq json-text
            (replace-regexp-in-string ",\\([[:space:]\n\r]*[]}]\\)" "\\1" json-text))
      (let ((json-object-type 'alist)
            (json-array-type 'list)
            (json-key-type 'string)
            (json-false :json-false))
        (json-read-from-string json-text)))))

(defun gr-statediff-parse-args ()
  "Return output path from command line."
  (or (car command-line-args-left)
      gr-statediff-default-out))

(defun gr-statediff-main ()
  "Generate gamedata-simple.el from migrated state-diff data."
  (let ((out (expand-file-name (gr-statediff-parse-args)))
        (lines (list
                ";;; gamedata-simple.el --- generated state-diff IR (do not edit) -*- coding: utf-8; lexical-binding: t; -*-"
                ";; Generated by nelisp_runtime/statediff-to-elisp.el from the migrated state-diff data."
                ""))
        (body-lines nil)
        (count 0))
    (dolist (rel gr-statediff-sources)
      (dolist (entry (gr-statediff-load-ts-object (expand-file-name rel gr-statediff-repo-root)))
        (let ((name (car entry))
              (ir (cdr entry)))
          (push (format "(gr-defun %s '%s)"
                        (json-encode-string name)
                        (gr-statediff-to-elisp ir))
                body-lines)
          (setq count (1+ count)))))
    (setq lines (append lines
                        (nreverse body-lines)
                        (list ""
                              "(provide 'gamedata-simple)"
                              "")))
    (make-directory (file-name-directory out) t)
    (let ((coding-system-for-write 'utf-8-unix))
      (with-temp-file out
        (insert (mapconcat #'identity lines "\n"))))
    (princ (format "OK: %d functions -> %s\n" count out))))

(when (and noninteractive (not gr-statediff-suppress-main))
  (gr-statediff-main))

;;; statediff-to-elisp.el ends here
