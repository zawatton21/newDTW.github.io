;;; sumi-json.el --- export gr-sumi as sumi JSON -*- coding: utf-8; -*-

(defun gr-json-escape (s)
  "Escape S for JSON string output."
  (let ((out "")
        (i 0)
        (ch nil))
    (while (< i (length s))
      (setq ch (aref s i))
      (setq out
            (concat
             out
             (cond
              ((= ch ?\\) "\\\\")
              ((= ch ?\") "\\\"")
              ((= ch ?\b) "\\b")
              ((= ch ?\f) "\\f")
              ((= ch ?\n) "\\n")
              ((= ch ?\r) "\\r")
              ((= ch ?\t) "\\t")
              ((< ch 32) (format "\\u%04x" ch))
              (t (char-to-string ch)))))
      (setq i (1+ i)))
    out))

(defun gr-sumi-record-to-json (entry)
  "Convert one gr-sumi ENTRY to a sumi JSON record string."
  (let ((op (car entry))
        (args (cdr entry))
        (nums nil)
        (text nil)
        (arg nil)
        (parts nil))
    (dolist (arg args)
      (cond
       ((numberp arg)
        (setq nums (append nums (list arg))))
       ((null arg)
        (setq nums (append nums (list 0))))
       ((and (null text) (stringp arg))
        (setq text arg))))
    (setq parts
          (list
           (concat "\"name\":\"" (gr-json-escape (format "%s" op)) "\"")
           (concat
            "\"nums\":["
            (mapconcat (lambda (n) (format "%s" n)) nums ",")
            "]")))
    (when text
      (setq parts
            (append parts
                    (list
                     (concat "\"text\":\"" (gr-json-escape text) "\"")))))
    (concat "{" (mapconcat #'identity parts ",") "}")))

(defun gr-sumi-to-json ()
  "Return gr-sumi as one JSON array string in chronological order."
  (let ((items nil))
    (dolist (entry (reverse gr-sumi))
      (setq items (append items (list (gr-sumi-record-to-json entry)))))
    (concat "[" (mapconcat #'identity items ",") "]")))

(defun gr-dump-sumi (name &optional budget)
  "Run NAME and print one sumi JSON line plus an OK marker."
  (let ((old-budget gr-step-budget)
        (old-depth gr-depth-limit)
        (have-key-hook (boundp 'gr-read-key-state-fn))
        (old-key-hook nil)
        (json nil))
    (when have-key-hook
      (setq old-key-hook gr-read-key-state-fn))
    (unwind-protect
        (progn
          (gr-reset)
          (setq gr-step-count 0)
          (when have-key-hook
            (setq gr-read-key-state-fn (lambda (_keycode) 0)))
          (setq gr-step-budget (or budget 200000))
          (setq gr-depth-limit 200)
          (condition-case _err
              (gr-run-func name)
            (error nil))
          (setq json (gr-sumi-to-json))
          (princ json)
          (princ "\n")
          (princ (format "SUMI-DUMP-OK %s %s\n" name (length gr-sumi))))
      (setq gr-step-budget old-budget)
      (setq gr-depth-limit old-depth)
      (when have-key-hook
        (setq gr-read-key-state-fn old-key-hook)))))
