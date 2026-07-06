;;; sumi-json.el --- export gr-sumi as sumi JSON -*- coding: utf-8; -*-

(defun gr-json-escape-into (s)
  "Insert S escaped for JSON string output into the current buffer."
  (let ((i 0)
        (ch nil))
    (while (< i (length s))
      (setq ch (aref s i))
      (insert
       (cond
        ((= ch ?\\) "\\\\")
        ((= ch ?\") "\\\"")
        ((= ch ?\b) "\\b")
        ((= ch ?\f) "\\f")
        ((= ch ?\n) "\\n")
        ((= ch ?\r) "\\r")
        ((= ch ?\t) "\\t")
        ((< ch 32) (format "\\u%04x" ch))
        (t (char-to-string ch))))
      (setq i (1+ i)))))

(defun gr-json-escape (s)
  "Escape S for JSON string output."
  (with-temp-buffer
    (gr-json-escape-into s)
    (buffer-string)))

(defun gr-sumi-record-to-json-into (entry)
  "Insert one gr-sumi ENTRY as a sumi JSON record."
  (let ((op (car entry))
        (args (cdr entry))
        (nums nil)
        (text nil)
        (arg nil)
        (first-num t))
    (dolist (arg args)
      (cond
       ((numberp arg)
        (push arg nums))
       ((null arg)
        (push 0 nums))
       ((and (null text) (stringp arg))
        (setq text arg))))
    (insert "{\"name\":\"")
    (gr-json-escape-into (format "%s" op))
    (insert "\",\"nums\":[")
    (dolist (n (nreverse nums))
      (unless first-num
        (insert ","))
      (setq first-num nil)
      (insert (format "%s" n)))
    (insert "]")
    (when text
      (insert ",\"text\":\"")
      (gr-json-escape-into text)
      (insert "\""))
    (insert "}")))

(defun gr-sumi-record-to-json (entry)
  "Convert one gr-sumi ENTRY to a sumi JSON record string."
  (with-temp-buffer
    (gr-sumi-record-to-json-into entry)
    (buffer-string)))

(defun gr-sumi-records-json-body (records)
  "Return RECORDS as a comma-joined JSON object list in chronological order."
  (with-temp-buffer
    (let ((first t))
      (dolist (entry (reverse records))
        (unless first
          (insert ","))
        (setq first nil)
        (gr-sumi-record-to-json-into entry)))
    (buffer-string)))

(defun gr-sumi-to-json ()
  "Return gr-sumi as one JSON array string in chronological order."
  (with-temp-buffer
    (insert "[")
    (insert (gr-sumi-records-json-body gr-sumi))
    (insert "]")
    (buffer-string)))

(defun gr-dump-sumi (name &optional budget seed-fn)
  "Run NAME and print one sumi JSON line plus an OK marker.
If SEED-FN is non-nil, call it with no arguments right after the internal
`gr-reset' and before NAME runs, so callers can seed `gr-state' (e.g. with
`gr-seed-state' from gamedata-state.el) without it being wiped by the reset
below -- `gr-reset' unconditionally replaces `gr-state' with a fresh empty
hash table, so seeding before calling `gr-dump-sumi' has no effect."
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
          (when seed-fn (funcall seed-fn))
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
