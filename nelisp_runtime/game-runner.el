;;; game-runner.el --- interpret newDTW state-diff IR on the NeLisp runtime  -*- lexical-binding: t; -*-

;; The migrated game logic exists as pure-data state-diff IR in
;; `gamedata-simple.el' and `gamedata-conditional.el'.  Each function is a list
;; of entries; this is the Elisp interpreter for that IR, so the non-GUI game
;; logic runs as pure Elisp on NeLisp.  GUI/IO primitives (dtw-draw-*, game-*)
;; are collected as a sumi command stream to feed the native sumi cairo-elisp
;; renderer.
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
(defvar gr-native-funcs nil "Hash: \"funcNNN\" -> native elisp function.")
(defvar gr-sumi nil "Collected GUI/IO commands (reverse order).")
(defvar gr-trace nil "Collected dtw-debug-print ids (reverse order).")
(defvar gr-missing nil "Names of core-called funcs not loaded (reverse).")
(defvar gr-depth 0 "Recursion guard depth.")
(defvar gr-depth-limit 400 "Maximum recursion depth before scan-visible failure.")
(defvar gr-read-key-state-fn nil "Optional function: keycode -> current key state integer.")
(defvar gr-reset-key-fn nil "Optional function: keycode -> clear current key state.")
(defvar gr-step-budget nil "Maximum number of executed IR entries, or nil for unlimited.")
(defvar gr-step-count 0 "Executed IR entry count for the current run.")
(defvar gr-event-names (make-hash-table :test 'equal)
  "Set of event names handled by the Elisp state-diff runtime.")
(defvar gr-event-symbols (make-hash-table :test 'eq)
  "Interned event names for hot dispatch.")
(defconst gr--missing-sentinel (make-symbol "gr-missing-sentinel"))
(defconst gr-entry-ops '(core-call dtw-debug-print index-set)
  "Entry ops handled directly by `gr-exec-entry'.")
(defconst gr-expr-ops '(state-slot-ref math-add math-sub math-mul bitwise-and
                        bitwise-or bitwise-xor math-div math-floor math-trunc
                        math-abs math-mod dtw-random dtw-read-key-state
                        index-ref i18n-format)
  "Expression ops handled directly by `gr-eval-op'.")

(defvar gr-data-root "C:/Users/kuroz/newDTW"
  "Default legacy data root used by bload/bsave-compatible file access.")

(defvar gr-bsave-cache (make-hash-table :test 'equal)
  "Per-path msgpack maps used by `gr-bsave' during a save sequence.")
(defvar gr-note-selected 0
  "Currently selected note buffer id, mirroring Adap.notesel.")
(defvar gr-note-buffers (make-hash-table :test 'equal)
  "Hash of note buffer id to vector of lines.")

(dolist (name '(
                "catch"
                "core-call"
                "array-is-array"
                "array-create"
                "array-from"
                "base64-to-bytes"
                "buffer-from"
                "bytes-to-base64"
                "bitwise-and"
                "bitwise-or"
                "bitwise-xor"
                "charactor-info-dim"
                "charactor-info-load"
                "canvas-clear-rect"
                "canvas-get-context"
                "canvas-get-image-data"
                "collection-get"
                "collection-has"
                "calc-sell-price"
                "control"
                "control-stop"
                "nelisp-loop"
                "nelisp-if"
                "nelisp-break"
                "nelisp-lambda"
                "nelisp-eq"
                "nelisp-lt"
                "nelisp-gt"
                "nelisp-le"
                "nelisp-ge"
                "nelisp-not"
                "window-add-event-listener"
                "method-send"
                "date-now"
                "date-get-date"
                "date-get-full-year"
                "date-get-month"
                "dtw-create-buffer"
                "dtw-debug-print"
                "dtw-dir-info"
                "dtw-dim"
                "dtw-draw-line"
                "dtw-draw-image"
                "dtw-draw-point"
                "dtw-draw-text"
                "dtw-fill-rect"
                "dtw-file-exists"
                "dtw-get-info"
                "dtw-get-time"
                "dtw-ime-get-context"
                "dtw-ime-get-open-status"
                "dtw-is-changed"
                "dtw-limit"
                "dtw-load-file"
                "dtw-load-image"
                "dtw-load-sound-memory"
                "dtw-note-get"
                "dtw-note-info"
                "dtw-parse-int"
                "dtw-peek-char"
                "dtw-play-sound"
                "dtw-random"
                "dtw-read-key-state"
                "dtw-read-file"
                "dtw-read-stick"
                "dtw-tcp-put"
                "dtw-undefined-adapter"
                "dtw-object-size"
                "dtw-draw-image-scaled"
                "dtw-combo-box"
                "dtw-button"
                "dtw-note-select"
                "dtw-object-select"
                "dtw-resize-window"
                "dtw-clear-objects"
                "dtw-dialog"
                "dtw-on-exit"
                "dtw-set-title"
                "dtw-change-directory"
                "dtw-await"
                "dtw-note-add"
                "dtw-on-key"
                "dtw-get-string"
                "dtw-network-close"
                "dtw-reset-input"
                "dtw-screen"
                "dtw-send-message"
                "dtw-end"
                "dtw-note-load"
                "dtw-set-window-long"
                "dtw-change-display"
                "dtw-input"
                "dtw-object-parameter"
                "dtw-poke"
                "dtw-reset-key"
                "dtw-set-color-index"
                "dtw-delete-file"
                "dtw-set-sound-volume"
                "dtw-note-save"
                "dtw-tcp-get-line"
                "dtw-clear-screen"
                "dtw-background-screen"
                "dtw-check-box"
                "dtw-check-joystick"
                "dtw-dir-list"
                "dtw-music-init"
                "dtw-music-load-memory"
                "dtw-music-play"
                "dtw-music-stop"
                "dtw-set-master-sound-volume"
                "dtw-draw-image-rotated"
                "dtw-ime-release-context"
                "dtw-list-box"
                "dtw-network-fail"
                "dtw-note-delete"
                "dtw-on-command-gosub"
                "dtw-tcp-count"
                "dtw-get-master-sound-volume"
                "dtw-get-window-long"
                "dtw-hmm-init"
                "dtw-ime-set-open-status"
                "dtw-message-box"
                "dtw-make-directory"
                "dtw-object-mode"
                "dtw-randomize"
                "dtw-set-window-position"
                "dtw-show-window"
                "dtw-tcp-is-connected"
                "dtw-tcp-open"
                "dtw-redraw"
                "dtw-save-file"
                "dtw-select-buffer"
                "dtw-set-blend-mode"
                "dtw-set-color"
                "dtw-set-font"
                "dtw-set-palette"
                "dtw-set-position"
                "dtw-string-dim"
                "dtw-string-mid"
                "dtw-string-search"
                "dtw-object-info"
                "dtw-wait"
                "dynamic-call"
                "dom-create-element"
                "dom-get-element-by-id"
                "dom-get-elements-by-tag-name"
                "effect-call"
                "alert-call"
                "base64-decode-string"
                "base64-encode-string"
                "fetch-call"
                "game-animate-message"
                "game-auto-draw"
                "game-draw-frame"
                "game-draw-sparkle"
                "game-set-message"
                "game-wait-key-release"
                "format-item-name"
                "func-ime-set"
                "func-make-palette"
                "fs-exists-helper"
                "fs-mkdir-async"
                "fs-read-file-async"
                "fs-read-file-sync"
                "fs-stat-async"
                "fs-write-file-async"
                "fs-ls-available"
                "fs-ls-revive"
                "fs-is-dir-path"
                "index-ref"
                "index-set"
                "in"
                "instanceof"
                "i18n-format"
                "i18n-get-language"
                "i18n-load-language"
                "i18n-set-language"
                "i18n-translate"
                "item-info-dim"
                "item-info-load"
                "item-apply"
                "item-get-def"
                "item-is-migrated"
                "item-pick"
                "item-post-process"
                "json-parse"
                "json-stringify"
                "logical-and"
                "logical-or"
                "math-abs"
                "math-add"
                "math-floor"
                "math-max"
                "math-min"
                "math-mul"
                "math-random"
                "math-round"
                "math-trunc"
                "method-join"
                "method-map"
                "method-contains"
                "method-enabled"
                "method-every"
                "method-find"
                "method-apply"
                "method-bind"
                "method-is-destroyed"
                "method-save"
                "method-pop"
                "method-slice"
                "method-subarray"
                "music-call"
                "menu-render"
                "menu-run"
                "menu-item-enter"
                "menu-current-mode"
                "menu-find-category"
                "menu-load-cursor"
                "new"
                "nullish"
                "object-assign"
                "path-basename"
                "path-dirname"
                "path-extname"
                "path-join"
                "path-resolve"
                "process-cwd"
                "promise-all"
                "promise-catch"
                "promise-reject"
                "promise-resolve"
                "promise-then"
                "module-require"
                "prop-ref"
                "prop-set"
                "reflect-construct"
                "response-json"
                "storage-get-item"
                "storage-key"
                "collection-keys"
                "input-buffer-full"
                "local-helper-call"
                "console-log"
                "console-error"
                "console-warn"
                "method-send"
                "window-add-event-listener"
                "dom-append-child"
                "event-prevent-default"
                "location-reload"
                "method-for-each"
                "collection-set"
                "collection-push"
                "collection-splice"
                "function-call"
                "node-callback"
                "ipc-once"
                "storage-clear"
                "storage-set-item"
                "object-define-property"
                "window-close"
                "window-move-to"
                "window-resize-to"
                "fs-unlink-sync"
                "fs-watch"
                "callback-before"
                "callback-next"
                "config-on-confirm"
                "config-save-value"
                "canvas-arc"
                "canvas-fill"
                "canvas-fill-rect"
                "canvas-fill-text"
                "canvas-line-to"
                "canvas-move-to"
                "canvas-put-image-data"
                "canvas-rotate"
                "canvas-stroke"
                "canvas-draw-image"
                "canvas-begin-path"
                "canvas-translate"
                "canvas-set-transform"
                "canvas-save"
                "canvas-restore"
                "media-play"
                "media-pause"
                "media-load"
                "msgpack-decode"
                "msgpack-encode"
                "typeof"
                "to-string"
                "timer-set-timeout"
                "string-char-code-at"
                "string-concat"
                "state-slot-ref"
                "state-string-concat"
                "string-includes"
                "string-last-index-of"
                "string-replace"
                "string-split"
                "string-starts-with"
                "value-call"))
  ;; Event names accepted by the Elisp state-diff runtime.
  (puthash name t gr-event-names)
  (puthash (intern name) t gr-event-symbols))

(defun gr-sequencep (x)
  "Compatibility helper for sequence-like values."
  (or (listp x) (vectorp x) (stringp x)))

(defun gr-string-prefix-p (prefix s)
  "Compatibility helper for literal PREFIX test."
  (and (stringp prefix)
       (stringp s)
       (<= (length prefix) (length s))
       (equal prefix (substring s 0 (length prefix)))))

(defun gr-string-search (needle haystack start)
  "Find NEEDLE in HAYSTACK from START, or nil."
  (let ((i start)
        (nlen (length needle))
        (hlen (length haystack))
        (found nil))
    (while (and (not found) (<= (+ i nlen) hlen))
      (if (equal needle (substring haystack i (+ i nlen)))
          (setq found i)
        (setq i (1+ i))))
    found))

(defun gr-instr (haystack start needle)
  "Mirror Adap.instr: return the first index of NEEDLE or -1."
  (let ((idx (gr-string-search (format "%s" needle)
                               (format "%s" haystack)
                               (max 0 (gr-num start)))))
    (if idx idx -1)))

(defun gr-gettime (field)
  "Mirror the small Adap.gettime subset used by newDTW."
  (let* ((decoded (decode-time (current-time)))
         (day (nth 3 decoded))
         (month (nth 4 decoded))
         (year (nth 5 decoded)))
    (cond
     ((equal (gr-num field) 0) year)
     ((equal (gr-num field) 1) month)
     ((equal (gr-num field) 3) day)
     (t nil))))

(defun gr-index-ref (arr i)
  "Index ARR at I, matching the TS runtime's loose numeric-key lookup.

The source runtime can read both array slots and object properties such as
`obj[6]` / `obj.Var6`.  Save data and bridge probes rely on that behavior, so
returning nil for non-sequences creates false zero tiles once `gr-num'
coerces nil to 0."
  (cond
   ((and (gr-sequencep arr) (integerp i) (>= i 0) (< i (length arr)))
    (elt arr i))
   ((and (gr-sequencep arr)
         (stringp i)
         (string-match "^Var\\([0-9]+\\)$" i))
    (let ((idx (string-to-number (match-string 1 i))))
      (and (>= idx 0) (< idx (length arr)) (elt arr idx))))
   ((hash-table-p arr)
    (or (gethash i arr)
        (gethash (format "Var%s" i) arr)
        (gethash (intern (format "Var%s" i)) arr)
        (gethash (number-to-string i) arr)))
   ((and (listp arr) (integerp i))
    (let ((cell (or (assoc i arr)
                    (assoc (number-to-string i) arr)
                    (assoc (format "Var%s" i) arr)
                    (assoc (intern (format "Var%s" i)) arr))))
      (and cell (cdr cell))))
   (t nil)))

(defun gr-random (n)
  "Return a pseudo-random integer in [0, N)."
  (if (and (integerp n) (> n 0))
      (random n)
    0))

(defun gr-data-path (file-name)
  "Resolve FILE-NAME under `gr-data-root'."
  (expand-file-name (format "%s" (or file-name "")) gr-data-root))

(defun gr-msgpack-read-byte ()
  "Read the next msgpack byte from the current unibyte buffer."
  (let ((byte (char-after)))
    (unless byte
      (error "gr-msgpack: unexpected EOF"))
    (forward-char 1)
    byte))

(defun gr-msgpack-read-n (count)
  "Read COUNT raw bytes from the current unibyte buffer."
  (let ((start (point))
        (end (+ (point) count)))
    (when (> end (point-max))
      (error "gr-msgpack: unexpected EOF reading %s bytes" count))
    (goto-char end)
    (buffer-substring-no-properties start end)))

(defun gr-msgpack-read-uint (count)
  "Read COUNT big-endian bytes as an unsigned integer."
  (let ((value 0)
        (idx 0)
        (bytes (gr-msgpack-read-n count)))
    (while (< idx count)
      (setq value (+ (* value 256) (aref bytes idx)))
      (setq idx (1+ idx)))
    value))

(defun gr-msgpack-read-int (count)
  "Read COUNT big-endian bytes as a signed integer."
  (let* ((unsigned (gr-msgpack-read-uint count))
         (bits (* count 8))
         (limit (expt 2 bits))
         (sign-bit (expt 2 (1- bits))))
    (if (>= unsigned sign-bit)
        (- unsigned limit)
      unsigned)))

(defun gr-msgpack-decode-value ()
  "Decode one bounded msgpack value from the current buffer."
  (let ((tag (gr-msgpack-read-byte)))
    (cond
     ((<= tag #x7f) tag)
     ((>= tag #xe0) (- tag 256))
     ((and (>= tag #xa0) (<= tag #xbf))
      (decode-coding-string (gr-msgpack-read-n (- tag #xa0)) 'utf-8 t))
     ((and (>= tag #x90) (<= tag #x9f))
      (gr-msgpack-decode-array (- tag #x90)))
     ((and (>= tag #x80) (<= tag #x8f))
      (gr-msgpack-decode-map (- tag #x80)))
     ((equal tag #xc0) nil)
     ((equal tag #xc2) nil)
     ((equal tag #xc3) t)
     ((equal tag #xcc) (gr-msgpack-read-uint 1))
     ((equal tag #xcd) (gr-msgpack-read-uint 2))
     ((equal tag #xce) (gr-msgpack-read-uint 4))
     ((equal tag #xd0) (gr-msgpack-read-int 1))
     ((equal tag #xd1) (gr-msgpack-read-int 2))
     ((equal tag #xd2) (gr-msgpack-read-int 4))
     ((equal tag #xd9)
      (decode-coding-string (gr-msgpack-read-n (gr-msgpack-read-uint 1)) 'utf-8 t))
     ((equal tag #xda)
      (decode-coding-string (gr-msgpack-read-n (gr-msgpack-read-uint 2)) 'utf-8 t))
     ((equal tag #xdc) (gr-msgpack-decode-array (gr-msgpack-read-uint 2)))
     ((equal tag #xde) (gr-msgpack-decode-map (gr-msgpack-read-uint 2)))
     (t (error "gr-msgpack: unsupported tag 0x%02x" tag)))))

(defun gr-msgpack-decode-array (length)
  "Decode a msgpack array of LENGTH values."
  (let ((items nil)
        (idx 0))
    (while (< idx length)
      (push (gr-msgpack-decode-value) items)
      (setq idx (1+ idx)))
    (apply #'vector (nreverse items))))

(defun gr-msgpack-decode-map (length)
  "Decode a msgpack map of LENGTH key/value pairs."
  (let ((table (make-hash-table :test 'equal))
        (idx 0)
        key)
    (while (< idx length)
      (setq key (gr-msgpack-decode-value))
      (puthash key (gr-msgpack-decode-value) table)
      (setq idx (1+ idx)))
    table))

(defun gr-msgpack-decode-buffer ()
  "Decode the current unibyte buffer as bounded msgpack."
  (goto-char (point-min))
  (gr-msgpack-decode-value))

(defun gr-msgpack-map-ref (table key)
  "Read KEY from decoded msgpack TABLE, trying numeric-string aliases."
  (cond
   ((hash-table-p table)
    (or (gethash key table)
        (and (numberp key) (gethash (number-to-string key) table))
        (and (stringp key)
             (string-match-p "\\`[0-9]+\\'" key)
             (gethash (string-to-number key) table))))
   (t nil)))

(defun gr-msgpack-encode-byte (byte)
  "Encode BYTE as a one-byte unibyte string."
  (unibyte-string (logand byte #xff)))

(defun gr-msgpack-encode-uint (value count)
  "Encode VALUE as COUNT big-endian bytes."
  (let ((out nil)
        (idx (1- count)))
    (while (>= idx 0)
      (push (logand (ash value (* -8 idx)) #xff) out)
      (setq idx (1- idx)))
    (apply #'unibyte-string (nreverse out))))

(defun gr-msgpack-seq-to-list (value)
  "Return VALUE as a plain list for msgpack encoding."
  (cond
   ((null value) nil)
   ((vectorp value) (append value nil))
   ((listp value) value)
   (t (error "gr-msgpack: expected sequence, got %S" value))))

(defun gr-msgpack-encode-string (value)
  "Encode VALUE as msgpack UTF-8 string."
  (let* ((bytes (encode-coding-string (format "%s" value) 'utf-8 t))
         (len (length bytes)))
    (cond
     ((<= len 31)
      (concat (gr-msgpack-encode-byte (+ #xa0 len)) bytes))
     ((<= len 255)
      (concat (gr-msgpack-encode-byte #xd9)
              (gr-msgpack-encode-uint len 1)
              bytes))
     ((<= len 65535)
      (concat (gr-msgpack-encode-byte #xda)
              (gr-msgpack-encode-uint len 2)
              bytes))
     (t (error "gr-msgpack: string too long (%s bytes)" len)))))

(defun gr-msgpack-encode-array (value)
  "Encode VALUE as msgpack array."
  (let* ((items (gr-msgpack-seq-to-list value))
         (len (length items))
         (body (unibyte-string)))
    (dolist (item items)
      (setq body (concat body (gr-msgpack-encode-value item))))
    (cond
     ((<= len 15)
      (concat (gr-msgpack-encode-byte (+ #x90 len)) body))
     ((<= len 65535)
      (concat (gr-msgpack-encode-byte #xdc)
              (gr-msgpack-encode-uint len 2)
              body))
     (t (error "gr-msgpack: array too long (%s items)" len)))))

(defun gr-msgpack-key-sort (a b)
  "Stable ordering for msgpack map keys A and B."
  (let ((an (and (numberp a) a))
        (bn (and (numberp b) b)))
    (cond
     ((and an bn) (< an bn))
     ((numberp a) t)
     ((numberp b) nil)
     (t (string< (format "%s" a) (format "%s" b))))))

(defun gr-msgpack-encode-map (value)
  "Encode VALUE as msgpack map."
  (let ((keys nil)
        (body (unibyte-string)))
    (maphash (lambda (key _val) (push key keys)) value)
    (setq keys (sort keys #'gr-msgpack-key-sort))
    (dolist (key keys)
      (setq body
            (concat body
                    (gr-msgpack-encode-value key)
                    (gr-msgpack-encode-value (gethash key value)))))
    (let ((len (length keys)))
      (cond
       ((<= len 15)
        (concat (gr-msgpack-encode-byte (+ #x80 len)) body))
       ((<= len 65535)
        (concat (gr-msgpack-encode-byte #xde)
                (gr-msgpack-encode-uint len 2)
                body))
       (t (error "gr-msgpack: map too large (%s keys)" len))))))

(defun gr-msgpack-encode-value (value)
  "Encode VALUE using the bounded msgpack subset used by the save system."
  (cond
   ((null value) (gr-msgpack-encode-byte #xc0))
   ((eq value t) (gr-msgpack-encode-byte #xc3))
   ((hash-table-p value) (gr-msgpack-encode-map value))
   ((or (vectorp value) (listp value)) (gr-msgpack-encode-array value))
   ((stringp value) (gr-msgpack-encode-string value))
   ((integerp value)
    (cond
     ((and (>= value 0) (<= value 127))
      (gr-msgpack-encode-byte value))
     ((and (< value 0) (>= value -32))
      (gr-msgpack-encode-byte (+ 256 value)))
     ((and (>= value 0) (<= value 255))
      (concat (gr-msgpack-encode-byte #xcc)
              (gr-msgpack-encode-uint value 1)))
     ((and (>= value 0) (<= value 65535))
      (concat (gr-msgpack-encode-byte #xcd)
              (gr-msgpack-encode-uint value 2)))
     ((and (>= value 0) (<= value 4294967295))
      (concat (gr-msgpack-encode-byte #xce)
              (gr-msgpack-encode-uint value 4)))
     ((and (>= value -128) (<= value 127))
      (concat (gr-msgpack-encode-byte #xd0)
              (gr-msgpack-encode-uint (logand value #xff) 1)))
     ((and (>= value -32768) (<= value 32767))
      (concat (gr-msgpack-encode-byte #xd1)
              (gr-msgpack-encode-uint (logand value #xffff) 2)))
     ((and (>= value -2147483648) (<= value 2147483647))
      (concat (gr-msgpack-encode-byte #xd2)
              (gr-msgpack-encode-uint (logand value #xffffffff) 4)))
     (t (error "gr-msgpack: integer out of range %s" value))))
   (t (error "gr-msgpack: unsupported value %S" value))))

(defun gr-file-exists (file-name)
  "Mirror Adap.exist for non-audio files and update strsize."
  (let* ((path (gr-data-path file-name))
         (attrs (file-attributes path 'string))
         (size (and attrs (nth 7 attrs)))
         (ext (downcase (or (file-name-extension path t) "")))
         (exists (if attrs 1 0)))
    (unless (member ext '(".wav" ".mp3"))
      (gr-set "strsize" (if attrs
                            (if (integerp size) size 0)
                          -1)))
    exists))

(defun gr-delete-file (file-name)
  "Mirror Adap.delete_ within `gr-data-root'."
  (let ((path (gr-data-path file-name)))
    (remhash path gr-bsave-cache)
    (when (file-exists-p path)
      (delete-file path))
    0))

(defun gr-read-key-state (keycode)
  "Read KEYCODE through the optional TS-mirrored key hook."
  (if (functionp gr-read-key-state-fn)
      (gr-num (funcall gr-read-key-state-fn (gr-num keycode)))
    0))

(defun gr-reset-key (keycode)
  "Mirror Adap.ResetKey for native transpiled code."
  (let* ((idx (gr-num keycode))
         (keys (gr-get "pushing_key_list")))
    (when (functionp gr-reset-key-fn)
      (funcall gr-reset-key-fn idx))
    (when (and (vectorp keys) (>= idx 0) (< idx (length keys)))
      (aset keys idx 0))
    0))

(defun gr-bload (file-name data-size offset destination)
  "Strict Adap.bload shim for native transpiled code.
Preserves legacy bload path resolution and literal file read behavior.
For non-audio data, this decodes the bounded msgpack subset used by 00.dat and
the save files, then applies the legacy OFFSET selection."
  (let* ((path (gr-data-path file-name))
         (ext (downcase (or (file-name-extension path t) ""))))
    (cond
     ((member ext '(".wav" ".mp3"))
      (list :kind 'audio :path path :data-size data-size :offset offset :destination destination))
     ((not (file-exists-p path))
      (error "gr-bload missing file: %s" path))
     (t
      (with-temp-buffer
        (set-buffer-multibyte nil)
        (insert-file-contents-literally path)
        (let* ((decoded (gr-msgpack-decode-buffer))
               (key (if (null offset) "0" offset))
               (value (gr-msgpack-map-ref decoded key)))
          (when (and (hash-table-p decoded) (null value))
            (error "gr-bload missing key %s in %s" key path))
          ;; 00.dat stores the message palette tables at offsets 200/300/400.
          ;; The TS code loads those offsets into var_25_x/26_x/27_x and later
          ;; expects the active message color scalar.  In practice the live save
          ;; file carries the full 1-based palette vector, so mirror the runtime
          ;; behavior the game uses elsewhere and pick slot 7 (default white).
          (when (and (string-equal (file-name-nondirectory path) "00.dat")
                     (member (and offset (gr-num offset)) '(200 300 400))
                     (gr-sequencep value))
            (setq value (or (gr-index-ref value 7) value)))
          value))))))

(defun gr-bsave (file-name data data-size offset)
  "Mirror Adap.bsave for the bounded msgpack save subset."
  (let* ((path (gr-data-path file-name))
         (key (format "%s" (if (null offset) 0 offset)))
         (table (or (gethash path gr-bsave-cache)
                    (let ((decoded
                           (if (file-exists-p path)
                               (with-temp-buffer
                                 (set-buffer-multibyte nil)
                                 (insert-file-contents-literally path)
                                 (gr-msgpack-decode-buffer))
                             nil)))
                      (puthash path
                               (if (hash-table-p decoded)
                                   decoded
                                 (make-hash-table :test 'equal))
                               gr-bsave-cache))))
         (encoded nil))
    (make-directory (file-name-directory path) t)
    (puthash key data table)
    (setq encoded (gr-msgpack-encode-value table))
    (with-temp-buffer
      (set-buffer-multibyte nil)
      (insert encoded)
      (let ((coding-system-for-write 'no-conversion))
        (write-region (point-min) (point-max) path nil 'silent)))
    data))

(defun gr-note-select (id)
  "Mirror Adap.notesel."
  (setq gr-note-selected (gr-num id))
  gr-note-selected)

(defun gr-note-load (file-name)
  "Mirror Adap.noteload into the selected note buffer."
  (let ((data (gr-bload file-name nil nil nil)))
    (puthash gr-note-selected
             (cond
              ((vectorp data) data)
              ((listp data) (vconcat data))
              ((stringp data) (vconcat (split-string data "\n")))
              ((null data) [])
              (t (vector data)))
             gr-note-buffers)
    data))

(defun gr-note-get (line-num)
  "Mirror Adap.noteget for the selected note buffer."
  (let ((lines (gethash gr-note-selected gr-note-buffers))
        (idx (gr-num line-num)))
    (or (and (vectorp lines) (>= idx 0) (< idx (length lines)) (aref lines idx))
        "")))

(defun gr-note-set (line-num value)
  "Set LINE-NUM in the selected note buffer to VALUE."
  (let* ((idx (gr-num line-num))
         (lines (gethash gr-note-selected gr-note-buffers))
         (current-length (if (vectorp lines) (length lines) 0)))
    (when (< current-length (1+ idx))
      (let ((grown (make-vector (1+ idx) "")))
        (when (vectorp lines)
          (let ((i 0))
            (while (< i current-length)
              (aset grown i (aref lines i))
              (setq i (1+ i)))))
        (setq lines grown)
        (puthash gr-note-selected lines gr-note-buffers)))
    (aset lines idx (format "%s" (or value "")))
    value))

(defun gr-note-info (info-type)
  "Mirror the Adap.noteinfo subset used by question-list code."
  (let ((lines (gethash gr-note-selected gr-note-buffers)))
    (cond
     ((equal (gr-num info-type) 0) (if (vectorp lines) (length lines) 0))
     ((equal (gr-num info-type) 1)
      (if (vectorp lines)
          (let ((sum 0) (idx 0))
            (while (< idx (length lines))
              (setq sum (+ sum (length (format "%s" (aref lines idx))) 1))
              (setq idx (1+ idx)))
            sum)
        0))
     (t 0))))

(defun gr-note-save (file-name)
  "Mirror Adap.notesave for the selected note buffer."
  (gr-bsave file-name (or (gethash gr-note-selected gr-note-buffers) []) nil nil))

(defun gr-contains (seq value)
  "Return non-nil when SEQ contains VALUE."
  (cond
   ((vectorp seq)
    (let ((idx 0) (found nil))
      (while (and (not found) (< idx (length seq)))
        (when (equal (aref seq idx) value) (setq found t))
        (setq idx (1+ idx)))
      found))
   ((listp seq) (not (null (member value seq))))
   ((stringp seq) (not (null (gr-string-search (format "%s" value) seq 0))))
   (t nil)))

(defun gr-gvar-key (key)
  "Translate dynamic Gvar keys such as var_900 to runtime slots."
  (let ((s (format "%s" key)))
    (if (string-match "\\`var_\\([0-9]+\\)\\'" s)
        (string-to-number (match-string 1 s))
      s)))

(defun gr-call (fn &rest args)
  "Call a transpiled callback or runtime function name."
  (cond
   ((functionp fn) (apply fn args))
   ((stringp fn) (apply #'gr-run-func fn args))
   (t nil)))

(defun gr-make-array (length1 &optional length2 length3 length4)
  "Mirror Adap.dim for up to 3 dimensions."
  (when (not (or (null length4) (equal length4 nil)))
    (error "gr-make-array: length4 unsupported"))
  (let ((n1 (max 0 (gr-num length1)))
        (n2 (and (not (null length2)) (gr-num length2)))
        (n3 (and (not (null length3)) (gr-num length3))))
    (if (null length2)
        (make-vector n1 0)
      (apply #'vector
             (let ((i 0) (rows nil))
               (while (< i n1)
                 (push (if (null length3)
                           (make-vector n2 0)
                         (apply #'vector
                                (let ((j 0) (cells nil))
                                  (while (< j n2)
                                    (push (make-vector n3 0) cells)
                                    (setq j (1+ j)))
                                  (nreverse cells))))
                       rows)
                 (setq i (1+ i)))
               (nreverse rows))))))

(defun gr-make-string-array (_length1 &optional length2 length3)
  "Mirror Adap.sdim."
  (if (null length2)
      ""
    (let ((n2 (max 0 (gr-num length2)))
          (n3 (and (not (null length3)) (gr-num length3))))
      (apply #'vector
             (let ((i 0) (rows nil))
               (while (< i n2)
                 (push (if (null length3)
                           ""
                         (apply #'vector
                                (let ((j 0) (cells nil))
                                  (while (< j n3)
                                    (push "" cells)
                                    (setq j (1+ j)))
                                  (nreverse cells))))
                       rows)
                 (setq i (1+ i)))
               (nreverse rows))))))

(defun gr-record-dim (count width)
  "Create COUNT vector-backed VarN records of WIDTH slots."
  (apply #'vector
         (let ((i 0) (rows nil))
           (while (< i (max 0 (gr-num count)))
             (push (make-vector width 0) rows)
             (setq i (1+ i)))
           (nreverse rows))))

(defconst gr-main-bootstrap-array-size 512
  "Safe boot-time capacity for array-backed bootstrap globals.")
(defconst gr-main-bootstrap-slots '(25 26 27 494 664 691)
  "Load-bearing bootstrap slots mirrored by the NeLisp runtime.")

(defvar gr-main-bootstrap-snapshot nil
  "Copy of the func004-populated bootstrap arrays.")

(defun gr-copy-vector-prefix (source target)
  "Copy the overlapping prefix from SOURCE into TARGET."
  (let ((idx 0)
        (limit (min (length source) (length target))))
    (while (< idx limit)
      (aset target idx (aref source idx))
      (setq idx (1+ idx))))
  target)

(defun gr-ensure-vector-slot (slot length)
  "Ensure SLOT holds a vector of at least LENGTH entries."
  (let* ((current (gr-get slot))
         (need (max 0 (gr-num length)))
         (target (if (and (vectorp current) (>= (length current) need))
                     current
                   (let ((fresh (gr-make-array need)))
                     (when (vectorp current)
                       (gr-copy-vector-prefix current fresh))
                     fresh))))
    (gr-set slot target)
    target))

(defun gr-init-main-bootstrap-state ()
  "Initialize load-bearing pre-func004 bootstrap globals."
  (gr-set 754 1)
  (gr-set 2156 2)
  (dolist (slot gr-main-bootstrap-slots)
    (gr-ensure-vector-slot slot gr-main-bootstrap-array-size)))

(defun gr-capture-main-bootstrap-state ()
  "Snapshot the current bootstrap arrays for later restoration."
  (setq gr-main-bootstrap-snapshot
        (mapcar
         (lambda (slot)
           (let ((value (gr-get slot)))
             (cons slot
                   (if (vectorp value)
                       (copy-sequence value)
                     value))))
         gr-main-bootstrap-slots)))

(defun gr-restore-main-bootstrap-state ()
  "Restore the last captured bootstrap arrays."
  (dolist (entry gr-main-bootstrap-snapshot)
    (gr-set (car entry)
            (let ((value (cdr entry)))
              (if (vectorp value)
                  (copy-sequence value)
                value)))))

(defun gr-item-info-dim (count)
  "Mirror Class.ItemInfo.dim."
  (gr-record-dim count 30))

(defun gr-charactor-info-dim (count)
  "Mirror Class.CharactorInfo.dim."
  (gr-record-dim count 40))

(defun gr-item-info-load (data)
  "Mirror Class.ItemInfo.Load."
  (let ((src (gr-msgpack-seq-to-list data))
        (out (make-vector 30 0))
        (idx 0))
    (dolist (value src)
      (when (< idx 30)
        (aset out idx value)
        (setq idx (1+ idx))))
    out))

(defun gr-charactor-info-load (data)
  "Mirror Class.CharactorInfo.Load."
  (let ((src (gr-msgpack-seq-to-list data))
        (out (make-vector 40 0))
        (idx 0))
    (dolist (value src)
      (when (< idx 40)
        (aset out idx value)
        (setq idx (1+ idx))))
    out))

(defun gr-record-save (data)
  "Mirror ItemInfo/CharactorInfo.Save for vector-backed records."
  (cond
   ((vectorp data) data)
   ((listp data) (apply #'vector data))
   (t (error "gr-record-save: unsupported record %S" data))))

(defun gr-peek-char (string-data index)
  "Mirror Adap.peek for the map-template strings."
  (let* ((s (format "%s" (or string-data "")))
         (i (gr-num index))
         (ch (and (>= i 0) (< i (length s)) (aref s i))))
    (cond
     ((equal ch ?1) 49) ((equal ch ?2) 50) ((equal ch ?3) 51)
     ((equal ch ?4) 52) ((equal ch ?5) 53) ((equal ch ?6) 54)
     ((equal ch ?7) 55) ((equal ch ?8) 56) ((equal ch ?9) 57)
     ((equal ch ?x) 120) ((equal ch ?y) 121) ((equal ch ?z) 122)
     ((equal ch ?#) 35) ((equal ch ?.) 46) ((equal ch ?^) 94)
     ((equal ch ?I) 73)
     ((equal ch ?a) 97) ((equal ch ?b) 98) ((equal ch ?c) 99)
     ((equal ch ?d) 100) ((equal ch ?e) 101) ((equal ch ?f) 102)
     ((equal ch ?g) 103) ((equal ch ?h) 104) ((equal ch ?i) 105)
     ((equal ch ?j) 106) ((equal ch ?k) 107) ((equal ch ?l) 108)
     (t (or ch 0)))))

(defun gr-num (x)
  "Coerce X to a number, matching the generated runtime's legacy numeric fallback."
  (cond
   ((numberp x) x)
   ((stringp x) (string-to-number x))
   (t 0)))

(defun gr-prop-ref (obj prop)
  "Read PROP from OBJ for vector-backed VarN records and hash tables."
  (cond
   ((hash-table-p obj)
    (or (gethash prop obj)
        (gethash (intern prop) obj)))
   ((and (stringp prop)
         (equal prop "length")
         (or (vectorp obj) (listp obj) (stringp obj)))
    (length obj))
   ((and (or (vectorp obj) (listp obj))
         (stringp prop)
         (string-match "^Var\\([0-9]+\\)$" prop))
    (gr-index-ref obj (string-to-number (match-string 1 prop))))
   (t nil)))

(defun gr-prop-set (obj prop val)
  "Write PROP on OBJ for vector-backed VarN records and hash tables."
  (cond
   ((hash-table-p obj)
    (puthash prop val obj))
   ((and (vectorp obj)
         (stringp prop)
         (string-match "^Var\\([0-9]+\\)$" prop))
    (let ((idx (string-to-number (match-string 1 prop))))
      (when (and (>= idx 0) (< idx (length obj)))
        (aset obj idx val))))
   ((and (listp obj)
         (stringp prop)
         (string-match "^Var\\([0-9]+\\)$" prop))
    (let ((idx (string-to-number (match-string 1 prop))))
      (when (and (>= idx 0) (< idx (length obj)))
        (setcar (nthcdr idx obj) val))))
   (t nil))
  val)

(defconst gr-bgm-special-ids '(988 990 987 996 998 984 982 986 981 980 985 978 977)
  "BGM ids that keep priority over ordinary dungeon/equipment music.")

(defconst gr-bgm-file-overrides
  '((100 . "116.mp3") (102 . "099.mp3") (208 . "207.mp3")
    (250 . "207.mp3") (251 . "207.mp3") (252 . "207.mp3")
    (253 . "207.mp3") (254 . "207.mp3") (255 . "207.mp3")
    (256 . "207.mp3") (257 . "207.mp3") (258 . "207.mp3")
    (259 . "207.mp3") (260 . "207.mp3") (261 . "207.mp3")
    (262 . "207.mp3") (263 . "207.mp3") (393 . "990.mp3")
    (397 . "304.mp3") (398 . "116.mp3") (399 . "115.mp3")
    (406 . "405.mp3") (413 . "0.mp3") (415 . "414.mp3")
    (416 . "414.mp3") (417 . "414.mp3") (418 . "414.mp3")
    (419 . "414.mp3") (977 . "105.mp3") (979 . "315.mp3")
    (982 . "115.mp3") (983 . "203.mp3") (984 . "313.mp3")
    (565 . "995.mp3"))
  "BGM ids whose source id and mp3 file name intentionally differ.")

(defconst gr-music-func-bgm-ids
  '(("music-func109" . 102) ("music-func110" . 315)
    ("music-func111" . 0) ("music-func113" . 988)
    ("music-func114" . 989) ("music-func114b" . 976)
    ("music-func116" . 990) ("music-func117" . 115)
    ("music-func118" . 986) ("music-func119" . 998)
    ("music-func120" . 978) ("music-func121" . 105)
    ("music-func122" . 999) ("music-func123" . 997)
    ("music-func124" . 994) ("music-func125" . 993)
    ("music-func126" . 991) ("music-func127" . 992)
    ("music-func128" . 203) ("music-func129" . 996)
    ("music-func130" . 998) ("music-func131" . 985)
    ("music-func132" . 313) ("music-func133" . 981)
    ("music-func134" . 980) ("music-func135" . 980)
    ("music-func136" . 987))
  "Music helper events that map to a fixed BGM id.")

(defun gr-bgm-file-for-id (id)
  "Return the mp3 file name for BGM ID."
  (let* ((n (gr-num id))
         (override (cdr (assq n gr-bgm-file-overrides))))
    (cond
     ((equal n 0) "0.mp3")
     (override override)
     (t (format "%d.mp3" n)))))

(defun gr-emit-raw (op &rest args)
  "Collect OP and ARGS without audio helper translation."
  (push (cons op args) gr-sumi))

(defun gr-emit-bgm-id (id)
  "Set BGM state to ID and emit its resolved mp3 file."
  (let ((file (gr-bgm-file-for-id id)))
    (gr-set "bgm_list_id" (gr-num id))
    (gr-set "bgm_file_name" file)
    (gr-emit-raw "dtw-music-play-file" file)))

(defun gr-emit-current-bgm ()
  "Replay the current `bgm_list_id' and update receive state."
  (gr-emit-bgm-id (or (gr-get "bgm_list_id") 0))
  (gr-set "receive_bgm_id" (gr-get "bgm_list_id"))
  (unless (equal (gr-get 678) 1)
    (gr-set 634 1)))

(defun gr-attack-sound-for-disc (disc-id)
  "Return the attack SE id for DISC-ID."
  (let ((id (gr-num disc-id)))
    (cond
     ((member id '(101 122)) 112)
     ((member id '(113 117 107 394)) 113)
     ((equal id 105) 120)
     ((equal id 201) 123)
     ((equal id 116) 127)
     ((equal id 109) 128)
     ((member id '(100 102 104 106 108 111 112 114
                       115 118 119 120 121 203 304 123
                       395 397 398 399))
      121)
     ((member id '(103 124 205 207 301 309)) 122)
     (t 102))))

(defun gr-special-sound-for-var488 (value)
  "Return the special SE id selected by original func100 for VALUE."
  (let ((v (gr-num value)))
    (cond
     ((or (equal v 800)
          (and (>= v 750) (< v 800))
          (and (>= v 900) (< v 1000)))
      203)
     ((or (and (>= v 805) (<= v 809))
          (equal v 854))
      204)
     ((member v '(850 851)) 205)
     (t 171))))

(defun gr-sound-for-var672 (value)
  "Return the attack/effect SE id selected by original func093."
  (let ((v (gr-num value)))
    (cond
     ((member v '(3 13)) 124)
     ((member v '(2 22)) 114)
     ((member v '(9 10)) 123)
     ((equal v 29) 147)
     ((member v '(122 129)) 112)
     ((member v '(14 66 110 162)) 222)
     ((equal v 44) 223)
     ((equal v 51) 224)
     ((equal v 17) 155)
     (t 102))))

(defun gr-enemy-attack-sound (enemy-id)
  "Return the enemy attack SE for ENEMY-ID, or nil when silent."
  (let ((id (gr-num enemy-id)))
    (cond
     ((equal id 56) 110)
     ((equal id 136) 194)
     ((equal id 21) 169)
     ((member id '(95 121 126)) 176)
     ((member id '(113 132)) 121)
     ((member id '(47 67)) nil)
     (t 109))))

(defun gr-enemy-hit-sound (enemy-id)
  "Return the hit SE selected by original func096 for ENEMY-ID."
  (let ((id (gr-num enemy-id)))
    (cond
     ((member id '(151 171 132)) 111)
     ((equal id 113) 115)
     ((equal id 136) 195)
     (t 103))))

(defun gr-shooting-sound (item-id)
  "Return shooting SE selected by original func097 for ITEM-ID."
  (let ((id (gr-num item-id)))
    (cond
     ((member id '(408 412 405 406 699)) 107)
     ((member id '(411 409)) 124)
     ((member id '(400 407)) 176)
     ((equal id 404) 215)
     ((equal id 698) 128)
     ((member id '(487 488 489)) 169)
     (t 109))))

(defun gr-emit-se-volume-range ()
  "Emit per-SE volume updates for the configured sound range."
  (gr-set 670 100)
  (let ((idx 0)
        (limit (gr-num (or (gr-get 668) 0))))
    (while (< idx limit)
      (gr-emit-raw "dtw-set-sound-volume" (gr-get 670) (gr-get "se_volume"))
      (gr-set 670 (+ (gr-num (gr-get 670)) 1))
      (setq idx (1+ idx)))))

(defun gr-handle-se-volume (delta)
  "Apply SE volume DELTA and emit volume updates."
  (gr-set "se_volume" (+ (gr-num (or (gr-get "se_volume") 0)) delta))
  (when (< (gr-num (gr-get "se_volume")) 0)
    (gr-set "se_volume" 0))
  (when (> (gr-num (gr-get "se_volume")) 150)
    (gr-set "se_volume" 150))
  (gr-emit-se-volume-range)
  (gr-set 635 1)
  (gr-set 636 0)
  (gr-set 632 0)
  (gr-set 633 0))

(defun gr-handle-bgm-volume (delta)
  "Apply BGM volume DELTA and emit a master-volume update."
  (gr-set "bgm_volume" (+ (gr-num (or (gr-get "bgm_volume") 0)) delta))
  (when (< (gr-num (gr-get "bgm_volume")) 0)
    (gr-set "bgm_volume" 0))
  (when (> (gr-num (gr-get "bgm_volume")) 150)
    (gr-set "bgm_volume" 150))
  (gr-emit-raw "dtw-set-master-sound-volume" (gr-get "bgm_volume"))
  (gr-set 636 1)
  (gr-set 635 0)
  (gr-set 632 0)
  (gr-set 633 0))

(defun gr-handle-music-command (op)
  "Handle translated music helper OP.  Return non-nil when consumed."
  (cond
   ((equal op "music-func083")
    (gr-set 668 137)
    (gr-emit-se-volume-range)
    t)
   ((equal op "music-func084")
    (gr-set "se_volume" 60)
    (gr-emit-se-volume-range)
    t)
   ((equal op "music-func085")
    (gr-handle-se-volume -1)
    t)
   ((equal op "music-func086")
    (gr-handle-se-volume 1)
    t)
   ((equal op "music-func087")
    (gr-handle-bgm-volume 1)
    t)
   ((equal op "music-func088")
    (gr-handle-bgm-volume -1)
    t)
   ((equal op "music-func089")
    (let ((sound (gr-attack-sound-for-disc (gr-get "kougeki_disc_id"))))
      (gr-set "se_file_name" sound)
      (gr-emit-raw "dtw-play-sound" sound))
    t)
   ((equal op "music-func090")
    (gr-emit-raw "dtw-play-sound" 141)
    t)
   ((equal op "music-func091")
    (gr-set "se_file_name" 103)
    (gr-emit-raw "dtw-play-sound" 103)
    t)
   ((equal op "music-func092")
    (gr-set "se_file_name" 103)
    (gr-emit-raw "dtw-play-sound" 103)
    (gr-set 672 0)
    t)
   ((equal op "music-func093")
    (let ((sound (gr-sound-for-var672 (gr-get 672))))
      (gr-set "se_file_name" sound)
      (gr-emit-raw "dtw-play-sound" sound)
      (gr-set 672 0))
    t)
   ((equal op "music-func094")
    (gr-emit-raw "dtw-play-sound" 173)
    t)
   ((equal op "music-func095")
    (let* ((row (gr-index-ref (gr-get 83) (gr-get 673)))
           (sound (gr-enemy-attack-sound (gr-prop-ref row "Var0"))))
      (when sound
        (gr-set "se_file_name" sound)
        (gr-emit-raw "dtw-play-sound" sound)))
    t)
   ((equal op "music-func096")
    (let ((sound (gr-enemy-hit-sound (gr-get 674))))
      (gr-set "se_file_name" sound)
      (gr-emit-raw "dtw-play-sound" sound)
      (gr-set 674 0))
    t)
   ((equal op "music-func097")
    (let ((sound (gr-shooting-sound (gr-get 340))))
      (gr-set "se_file_name" sound)
      (gr-emit-raw "dtw-play-sound" sound))
    t)
   ((equal op "music-func098")
    (gr-set "se_file_name" 103)
    (gr-emit-raw "dtw-play-sound" 103)
    t)
   ((equal op "music-func099")
    (gr-set "se_file_name" 142)
    (gr-emit-raw "dtw-play-sound" 142)
    t)
   ((equal op "music-func100")
    (let ((sound (gr-special-sound-for-var488 (gr-get 488))))
      (gr-set "se_file_name" sound)
      (gr-emit-raw "dtw-play-sound" sound)
      (gr-set 488 0))
    t)
   ((equal op "music-func102")
    nil)
   ((equal op "music-func108")
    (gr-emit-raw "dtw-music-stop")
    t)
   ((equal op "music-func103")
    (gr-emit-current-bgm)
    t)
   ((equal op "music-func105")
    (unless (or (equal (gr-get "receive_bgm_id") (gr-get "belongings_item_list"))
                (equal (gr-get "dungeon_number") 99)
                (member (gr-get 681) gr-bgm-special-ids))
      (gr-emit-bgm-id (gr-get "belongings_item_list"))
      (gr-set "receive_bgm_id" (gr-get "bgm_list_id")))
    t)
   ((equal op "music-func106")
    (unless (or (equal (gr-get "dungeon_number") 99)
                (member (gr-get 681) gr-bgm-special-ids))
      (when (equal (gr-get "receive_bgm_id") (gr-get "belongings_item_list"))
        (cond
         ((equal (gr-get 681) 989) (gr-emit-bgm-id 989))
         ((equal (gr-get 681) 976) (gr-emit-bgm-id 976))
         (t (gr-emit-bgm-id 0)))
        (gr-set "receive_bgm_id" (gr-get "bgm_list_id"))))
    t)
   ((equal op "music-func107")
    (gr-emit-bgm-id (or (gr-get "receive_bgm_id") 0))
    t)
   ((equal op "music-func112")
    (gr-set 678 1)
    (gr-emit-current-bgm)
    (gr-set 678 0)
    t)
   ((equal op "music-func115")
    (gr-set 678 0)
    (let* ((table (gr-get 486))
           (bag (gr-index-ref table (gr-get 682)))
           (row (gr-index-ref bag (gr-get 683)))
           (id (gr-index-ref row 0)))
      (gr-set "bgm_list_id" id)
      (when (and (>= (gr-num id) 100)
                 (or (< (gr-num id) 500)
                     (equal (gr-num id) 565)))
        (gr-emit-current-bgm)))
    (gr-set 678 0)
    t)
   ((equal op "music-func137")
    (when (equal (gr-get "receive_bgm_id") 987)
      (gr-set "bgm_list_id" (gr-get 684))
      (gr-set 681 0)
      (when (member (gr-get 684) '(996 998 985 984 981))
        (gr-set 681 (gr-get 684)))
      (gr-set 678 1)
      (gr-emit-current-bgm)
      (gr-set 678 0))
    t)
   ((assoc op gr-music-func-bgm-ids)
    (gr-emit-bgm-id (cdr (assoc op gr-music-func-bgm-ids)))
    (gr-set "receive_bgm_id" (gr-get "bgm_list_id"))
    t)
   (t nil)))

(defun gr-emit (op &rest args)
  "Collect a GUI/IO command in the sumi stream."
  (unless (gr-handle-music-command op)
    (when (and (equal op "gui-draw-text") args)
      (let ((text (car args)))
        (when (or (null text) (equal text "nil"))
          (setcar args ""))))
    (apply #'gr-emit-raw op args)))

(defun gr-sync-equipped-disc-ids ()
  "Refresh equipped disc ids from the authoritative inventory slot flags."
  (let ((rows (gr-get 233))
        (limit (gr-num (or (gr-get 224) 0)))
        (slot 1)
        (attack-slot 0)
        (defense-slot 0)
        (ability-slot 0)
        (shoot-slot 0))
    (while (<= slot limit)
      (when (equal (gr-index-ref (gr-get 476) slot) 1)
        (setq attack-slot slot))
      (when (equal (gr-index-ref (gr-get 477) slot) 1)
        (setq defense-slot slot))
      (when (equal (gr-index-ref (gr-get 478) slot) 1)
        (setq ability-slot slot))
      (when (equal (gr-index-ref (gr-get 479) slot) 1)
        (setq shoot-slot slot))
      (setq slot (1+ slot)))
    (gr-set 553 attack-slot)
    (gr-set 554 defense-slot)
    (gr-set 555 ability-slot)
    (gr-set 556 shoot-slot)
    (gr-set "kougeki_disc_id"
            (or (gr-prop-ref (gr-index-ref rows attack-slot) "Var0") 0))
    (gr-set "bougyo_disc_id"
            (or (gr-prop-ref (gr-index-ref rows defense-slot) "Var0") 0))
    (gr-set "nouryoku_disc_id"
            (or (gr-prop-ref (gr-index-ref rows ability-slot) "Var0") 0))
    (gr-set "shageki_disc_id"
            (or (gr-prop-ref (gr-index-ref rows shoot-slot) "Var0") 0))))

(defun gr-reset ()
  "Reset interpreter state (keeps loaded functions)."
  (setq gr-state (make-hash-table :test 'equal))
  (clrhash gr-bsave-cache)
  (clrhash gr-note-buffers)
  (setq gr-note-selected 0)
  (setq gr-sumi nil
        gr-trace nil
        gr-missing nil
        gr-depth 0
        gr-main-bootstrap-snapshot nil))

(defun gr-op-name-p (name)
  "Non-nil when NAME is a known IR op string."
  (or (member (intern-soft name) gr-entry-ops)
      (member (intern-soft name) gr-expr-ops)
      (gethash name gr-event-names)))

(defun gr-normalize-ir (node &optional form-kind)
  "Convert hot IR op strings in NODE into interned symbols."
  (cond
   ((vectorp node)
    node)
   ((not (consp node))
    node)
   ((eq form-kind 'expr)
    (let ((op (car node))
          (args (cdr node)))
      (cons (if (and (stringp op) (gr-op-name-p op)) (intern op) op)
            (mapcar #'gr-normalize-ir args))))
   ((and (null (cdr node)) (consp (car node)))
    (list (gr-normalize-ir (car node) 'expr)))
   ((numberp (car node))
    (list (car node) (gr-normalize-ir (nth 1 node))))
   ((and (stringp (car node)) (gr-op-name-p (car node)))
    (cons (intern (car node)) (mapcar #'gr-normalize-ir (cdr node))))
   (t
    (mapcar #'gr-normalize-ir node))))

(defun gr-defun (name ir)
  "Register IR for NAME."
  (unless (hash-table-p gr-funcs) (setq gr-funcs (make-hash-table :test 'equal)))
  (puthash name (gr-normalize-ir ir) gr-funcs))

(defun gr-defnative (name fn)
  "Register native elisp implementation FN for NAME."
  (unless (hash-table-p gr-native-funcs) (setq gr-native-funcs (make-hash-table :test 'equal)))
  (puthash name fn gr-native-funcs))

;; func139 ends by entering the title flow; keep the data-loading verification
;; path focused on the loader itself when running batch checks.
(gr-defnative "func0956" (lambda (&rest _args) nil))
(gr-defnative "func183" (lambda (&rest _args) nil))
(gr-defnative "func505" (lambda (&rest _args) nil))

(defun gr-native-setMessage (row1 &optional row2 color-index do-wait-key do-animation play-sound)
  "Append a message to the live message buffer."
  (gr-set "comments_row1" "")
  (gr-set "comments_row2" "")
  (gr-set 295 "")
  (gr-set "comments_row1a" "")
  (gr-set "comments_row2a" "")
  (gr-set 298 "")
  (gr-set "animationStep" 0)
  (gr-set "comments_row1" (gr-i18n-t row1))
  (gr-set "comments_row2" (gr-i18n-t (or row2 "")))
  (gr-set 198 1)
  (gr-set 300 0)
  (let* ((idx (gr-num (or color-index 7)))
         (var25 (gr-get 25))
         (var26 (gr-get 26))
         (var27 (gr-get 27)))
    (gr-set "var_25_x" (gr-index-ref var25 idx))
    (gr-set "var_26_x" (gr-index-ref var26 idx))
    (gr-set "var_27_x" (gr-index-ref var27 idx)))
  (gr-run-func "func047")
  (when play-sound
    (gr-run-func "func094"))
  (when do-wait-key
    (gr-run-func "func340"))
  (when do-animation
    (gr-run-func "func050"))
  nil)

(defun gr-native-AutoDraw (count)
  "Run the live auto-draw hook COUNT times."
  (let ((idx 0)
        (limit (gr-num count)))
    (while (< idx limit)
      (gr-run-func "func337")
      (setq idx (1+ idx))))
  nil)

(gr-defnative "setMessage" #'gr-native-setMessage)
(gr-defnative "AutoDraw" #'gr-native-AutoDraw)

(defun gr-inventory-used-count ()
  "Return the number of non-empty inventory rows in `var_233'."
  (let ((rows (gr-get 233))
        (slot 1)
        (count 0))
    (while (<= slot 20)
      (when (> (gr-num (or (gr-prop-ref (gr-index-ref rows slot) "Var0") 0)) 0)
        (setq count (1+ count)))
      (setq slot (1+ slot)))
    count))

(defun gr-sync-inventory-count ()
  "Repair `var_224' from the authoritative inventory rows."
  (gr-set 224 (gr-inventory-used-count)))

(defun gr-play-sound (id)
  "Emit a sound command matching Adap.DSPLAY."
  (gr-emit "dtw-play-sound" id))

(defun gr-live-native-func053 (&rest _args)
  "Minimal live main-menu handler for dungeon/status/ground actions."
  (catch 'gr-return
    (while t
      (gr-run-func "func337")
      (gr-run-func "func080")
      (when (equal (gr-get "key_X_on") 1)
        (gr-set 195 0)
        (gr-set 196 0)
        (gr-run-func "func009")
        (throw 'gr-return nil))
      (when (and (equal (gr-get 255) 1) (equal (gr-get 248) 2))
        (gr-set 248 1)
        (gr-set 246 45)
        (gr-play-sound 100))
      (when (and (equal (gr-get 259) 1) (equal (gr-get 248) 1))
        (gr-set 248 2)
        (gr-set 246 63)
        (gr-play-sound 100))
      (when (and (equal (gr-get 254) 1) (equal (gr-get 247) 2))
        (gr-set 247 1)
        (gr-set 245 19)
        (gr-play-sound 100))
      (when (and (equal (gr-get 257) 1) (equal (gr-get 247) 1))
        (gr-set 247 2)
        (gr-set 245 67)
        (gr-play-sound 100))
      (gr-set 497 (+ (* (1- (gr-num (or (gr-get 247) 1))) 2)
                     (gr-num (or (gr-get 248) 1))))
      (when (or (equal (gr-get "key_Z_on") 1) (equal (gr-get "key_A_on") 1))
        (cond
         ((equal (gr-get 497) 1)
          (gr-set 195 0)
          (gr-set 196 0)
          (gr-set "item_page_number" 1)
          (gr-set "Y_axis_item_position" 45)
          (gr-set 225 1)
          (gr-set 223 (+ (gr-num (or (gr-get 224) 0)) 10))
          (gr-set 220 0)
          (gr-set 230 45)
          (gr-play-sound 212)
          (gr-run-func "func051")
          (gr-set "open_item_menue" 1)
          (gr-run-func "func461")
          (throw 'gr-return nil))
         ((equal (gr-get 497) 2)
          (gr-set 195 0)
          (gr-set 196 0)
          (gr-play-sound 212)
          (gr-run-func "func051")
          (gr-run-func "func064")
          (throw 'gr-return nil))
         ((equal (gr-get 497) 3)
          (gr-set 195 0)
          (gr-set 196 0)
          (gr-play-sound 212)
          (gr-run-func "func051")
          (gr-set 498 1)
          (gr-run-func "func380")
          (throw 'gr-return nil))
         ((equal (gr-get 497) 4)
          (gr-set 195 0)
          (gr-set 196 0)
          (gr-set 499 1)
          (gr-set 500 0)
          (gr-set 245 19)
          (gr-set 246 45)
          (gr-play-sound 212)
          (gr-run-func "func051")
          (gr-run-func "func055")
          (throw 'gr-return nil)))))))

(defconst gr-live-game-speed-delays [30 40 50 60 70])
(defconst gr-live-game-speed-labels ["超速" "速い" "標準" "遅い" "超遅"])

(defun gr-live-game-speed-cursor ()
  "Return the menu cursor index for the current `animationDelay'."
  (let ((delay (gr-num (or (gr-get "animationDelay") 50))))
    (cond
     ((= delay 30) 0)
     ((= delay 40) 1)
     ((= delay 50) 2)
     ((= delay 60) 3)
     ((= delay 70) 4)
     (t 2))))

(defun gr-live-game-speed-save (idx)
  "Persist game speed cursor IDX to animationDelay and 00.dat."
  (let ((delay (aref gr-live-game-speed-delays
                     (max 0 (min 4 (gr-num idx))))))
    (gr-set "animationDelay" delay)
    (gr-bsave "00.dat"
              (let ((gr_tmp delay))
                (gr-set "data" gr_tmp)
                gr_tmp)
              nil
              0)
    delay))

(defun gr-live-native-func194 (&rest _args)
  "Live game-speed configuration menu."
  (catch 'gr-return
    (gr-set 906 (gr-live-game-speed-cursor))
    (while t
      (gr-run-func "func337")
      (gr-run-func "func080")
      (when (or (equal (gr-get "key_Z_on") 1)
                (equal (gr-get "key_A_on") 1))
        (gr-play-sound 212)
        (gr-run-func "func051")
        (gr-live-game-speed-save (gr-get 906))
        (gr-set 900 0)
        (gr-run-func "func193")
        (throw 'gr-return nil))
      (when (equal (gr-get "key_X_on") 1)
        (gr-run-func "func051")
        (gr-set 900 0)
        (gr-run-func "func193")
        (throw 'gr-return nil))
      (when (equal (gr-get 255) 1)
        (gr-play-sound 100)
        (gr-set 906 (if (equal (gr-get 906) 0)
                        4
                      (1- (gr-num (gr-get 906))))))
      (when (equal (gr-get 259) 1)
        (gr-play-sound 100)
        (gr-set 906 (if (equal (gr-get 906) 4)
                        0
                      (1+ (gr-num (gr-get 906)))))))))

(defun gr-live-native-func196 (&rest _args)
  "Draw the live game-speed option box."
  (let ((idx 0))
    (gr-emit "gui-set-color" 0 0 0)
    (gr-emit "gui-set-alpha" 100)
    (gr-emit "gui-set-position" 42 137)
    (gr-emit "gui-draw-image-scaled" 12 0 0 113 123 42 137 113 123)
    (gr-emit "gui-set-alpha" 255)
    (gr-emit "gui-set-color" 255 255 255)
    (gr-emit "gui-draw-line" 45 139 150 139)
    (gr-emit "gui-draw-line" 45 256 150 256)
    (gr-emit "gui-draw-line" 44 140 44 254)
    (gr-emit "gui-draw-line" 152 140 152 254)
    (gr-emit "gui-draw-point" 45 140)
    (gr-emit "gui-draw-point" 151 140)
    (gr-emit "gui-draw-point" 45 255)
    (gr-emit "gui-draw-point" 151 255)
    (while (< idx (length gr-live-game-speed-labels))
      (gr-emit "gui-set-position" 85 (+ 150 (* idx 20)))
      (gr-emit "gui-draw-text" (aref gr-live-game-speed-labels idx))
      (setq idx (1+ idx)))
    (gr-emit "gui-set-position" 50 (+ 147 (* (gr-num (or (gr-get 906) 0)) 20)))
    (gr-emit "gui-draw-image-scaled" 8 70 50 25 20
             50 (+ 147 (* (gr-num (or (gr-get 906) 0)) 20)) 25 20)))

(defun gr-live-native-func380 (&rest _args)
  "Minimal status-open initializer for the live runtime."
  (let ((rows (gr-make-string-array 1000 70 3))
        (idx 1))
    (while (< idx 70)
      (let ((row (gr-index-ref rows idx)))
        (when (vectorp row)
          (aset row 1 "")
          (aset row 2 "0")))
      (setq idx (1+ idx)))
    (gr-set 1706 rows)
    (gr-set 1707 1)
    (gr-set 1721 1)
    (gr-set 498 1)
    (gr-run-func "func381")))

(defun gr-live-native-func461 (&rest _args)
  "Minimal live item-page handler covering the foot-item pickup path."
  (catch 'gr-return
    (while t
      (gr-set 198 0)
      (gr-run-func "func337")
      (gr-run-func "func080")
      (when (or (equal (gr-get "key_Z_on") 1) (equal (gr-get "key_A_on") 1))
        (when (equal (gr-get "item_page_number") 3)
          (gr-set 221 1)
          (gr-set 229 44)
          (gr-set 222 10)
          (gr-set 231 1)
          (gr-play-sound 212)
          (gr-run-func "func462")
          (throw 'gr-return nil)))
      (when (equal (gr-get "key_X_on") 1)
        (gr-set "open_item_menue" 0)
        (gr-set 1240 0)
        (gr-set 1999 0)
        (gr-set 2000 0)
        (gr-set 2001 0)
        (gr-set 1950 0)
        (gr-set 217 0)
        (gr-set 2002 0)
        (gr-set 2003 0)
        (gr-set 2004 0)
        (gr-set 2005 0)
        (gr-set 1945 0)
        (gr-set 1252 0)
        (gr-set 2006 0)
        (gr-set 2007 0)
        (gr-set 1208 0)
        (gr-set 234 0)
        (gr-set 231 0)
        (gr-set 220 0)
        (gr-set 1667 0)
        (gr-set 2008 0)
        (gr-set 1965 0)
        (gr-play-sound 212)
        (gr-run-func "func009")
        (throw 'gr-return nil)))))

(defun gr-live-native-func463 (&rest _args)
  "Minimal live sub-menu handler covering floor-item pickup confirm/cancel."
  (catch 'gr-return
    (while t
      (gr-run-func "func337")
      (gr-run-func "func080")
      (when (equal (gr-get "key_X_on") 1)
        (gr-set 221 0)
        (gr-set 231 0)
        (gr-play-sound 212)
        (gr-run-func "func051")
        (gr-run-func "func461")
        (throw 'gr-return nil))
      (when (and (or (equal (gr-get "key_Z_on") 1) (equal (gr-get "key_A_on") 1))
                 (equal (gr-get 231) 1)
                 (equal (gr-get 222) 10))
        (gr-play-sound 212)
        (gr-set 231 0)
        (gr-set 198 0)
        (gr-set "open_item_menue" 0)
        (gr-set 221 0)
        (gr-sync-inventory-count)
        (gr-run-func "func400")
        (gr-set 217 1)
        (gr-run-func "func019")
        (throw 'gr-return nil)))))

(defun gr-live-native-func048 (&rest _args)
  "Draw the live message window with text on the topmost layer."
  (catch 'gr-return
    (push 48 gr-trace)
    (when (equal (gr-get 195) 1)
      (gr-set 198 0)
      (gr-set 300 0)
      (throw 'gr-return nil))
    ;; The 100/255 source alpha is still too opaque after the 2x native
    ;; presentation transform.  Keep the blue message backing translucent.
    (gr-emit "gui-set-alpha" 60)
    (gr-emit "gui-set-color" 0 0 128)
    (gr-emit "gui-fill-rect" 20 250 330 314)
    (gr-emit "gui-set-color" 255 255 255)
    (gr-emit "gui-draw-line" 23 252 325 252)
    (gr-emit "gui-draw-line" 23 312 325 312)
    (gr-emit "gui-draw-line" 22 253 22 310)
    (gr-emit "gui-draw-line" 327 253 327 310)
    (gr-emit "gui-draw-point" 23 253)
    (gr-emit "gui-draw-point" 326 253)
    (gr-emit "gui-draw-point" 23 311)
    (gr-emit "gui-draw-point" 326 311)
    (unless (numberp (gr-get "animationOffset"))
      (gr-set "animationOffset" 9))
    ;; Text must be last; otherwise the decorative message layer softens it.
    (gr-emit "gui-set-alpha" 255)
    (gr-run-func "func049")
    (gr-emit "gui-set-alpha" 255)
    (throw 'gr-return nil)))

(defun gr-live-current-floor-item ()
  "Return the floor item row under the player, or nil."
  (let* ((x (gr-num (or (gr-get 66) 0)))
         (y (gr-num (or (gr-get 67) 0)))
         (slot (gr-live-map-cell (gr-get 77) x y))
         (rows (gr-get 78)))
    (when (and (vectorp rows) (integerp slot) (> slot 0) (< slot (length rows)))
      (gr-set 321 slot)
      (aref rows slot))))

(defun gr-live-floor-item-extra-price (row)
  "Return the shop price adjustment for floor item ROW."
  (+ (* (+ (gr-num (or (gr-prop-ref row "Var3") 0))
           (gr-num (or (gr-prop-ref row "Var4") 0)))
        50)
     (if (equal (gr-prop-ref row "Var0") 800)
         0
       (* (gr-num (or (gr-prop-ref row "Var7") 0)) 100))
     (if (> (gr-num (or (gr-prop-ref row "Var19") 0)) 1)
         (* (gr-num (gr-prop-ref row "Var19")) 500)
       0)))

(defun gr-live-floor-item-price (row)
  "Return the displayed shop price for floor item ROW."
  (let ((price 0)
        (item-id (gr-num (or (gr-prop-ref row "Var0") 0))))
    (gr-set "belongings_item_list" item-id)
    (gr-set "disc_rarity" (gr-prop-ref row "Var13"))
    (gr-run-func "func492")
    (setq price (+ (gr-num (or (gr-get "buying_price") 0))
                   (gr-live-floor-item-extra-price row)))
    (when (and (>= item-id 800) (< item-id 900))
      (let* ((bag-id (gr-prop-ref row "Var6"))
             (bag (gr-index-ref (gr-get 486) bag-id))
             (idx 0))
        (while (< idx 10)
          (let ((entry (and (vectorp bag) (gr-index-ref bag idx))))
            (when (and (vectorp entry)
                       (> (gr-num (or (gr-index-ref entry 0) 0)) 0)
                       (equal (gr-index-ref entry 11) 1))
              (gr-set "belongings_item_list" (gr-index-ref entry 0))
              (gr-set "disc_rarity" (gr-index-ref entry 13))
              (gr-run-func "func492")
              (let ((entry-extra
                     (+ (* (+ (gr-num (or (gr-index-ref entry 3) 0))
                              (gr-num (or (gr-index-ref entry 4) 0)))
                           50)
                        (if (> (gr-num (or (gr-index-ref entry 19) 0)) 1)
                            (* (gr-num (gr-index-ref entry 19)) 500)
                          0))))
                (setq price (+ price
                               (gr-num (or (gr-get "buying_price") 0))
                               entry-extra)))))
          (setq idx (1+ idx)))))
    (gr-set 1925 price)
    price))

(defun gr-live-format-floor-item-name (row)
  "Return a non-empty display name for floor item ROW."
  (let ((item-id (gr-num (or (gr-prop-ref row "Var0") 0)))
        (name nil)
        (disp nil))
    (gr-set "belongings_item_list" item-id)
    (gr-set "disc_rarity" (gr-prop-ref row "Var13"))
    (gr-run-func "func492")
    (setq name (gr-get "item_name"))
    (unless (and (stringp name) (> (length name) 0))
      (setq name (if (> item-id 0)
                     (format "商品%d" item-id)
                   "商品データ未取得")))
    (cond
     ((equal item-id 1)
      (setq disp (format "%s G" (gr-num (or (gr-prop-ref row "Var13") 0)))))
     ((and (>= item-id 100) (< item-id 400))
      (setq disp name)
      (when (equal (gr-prop-ref row "Var14") 1)
        (when (> (gr-num (or (gr-prop-ref row "Var4") 0)) 0)
          (setq disp (format "%s+%s" disp (gr-prop-ref row "Var4"))))
        (when (> (gr-num (or (gr-prop-ref row "Var19") 0)) 1)
          (setq disp (format "%s ★%s" disp (gr-prop-ref row "Var19"))))))
     ((and (>= item-id 400) (< item-id 500))
      (setq disp (format "%s(%s)" name (gr-num (or (gr-prop-ref row "Var3") 0)))))
     ((and (>= item-id 800) (< item-id 900))
      (setq disp (format "%s(%s)" name (gr-num (or (gr-prop-ref row "Var7") 0)))))
     (t
      (setq disp name)))
    (gr-set "disp_item_name" disp)
    disp))

(defun gr-live-native-func398 (&rest _args)
  "Build the live floor-item display name without empty shop messages."
  (catch 'gr-return
    (push 398 gr-trace)
    (let ((row (or (and (vectorp (gr-get 78))
                        (integerp (gr-get 321))
                        (> (gr-get 321) 0)
                        (< (gr-get 321) (length (gr-get 78)))
                        (aref (gr-get 78) (gr-get 321)))
                   (gr-live-current-floor-item))))
      (gr-live-format-floor-item-name row))
    (throw 'gr-return nil)))

(defun gr-live-native-func419 (&rest _args)
  "Show the message for stepping on a floor item or shop item."
  (catch 'gr-return
    (push 419 gr-trace)
    (when (equal (gr-get 342) 1)
      (throw 'gr-return nil))
    (gr-set 240 0)
    (let* ((row (gr-live-current-floor-item))
           (name nil))
      (gr-run-func "func398")
      (setq name (gr-get "disp_item_name"))
      (unless (and (stringp name) (> (length name) 0))
        (setq name (gr-live-format-floor-item-name row)))
      (if (and row (equal (gr-prop-ref row "Var11") 1))
          (gr-run-func "setMessage"
                       (format "%s" name)
                       (format "値段 %s G" (gr-live-floor-item-price row))
                       7 nil nil nil)
        (gr-run-func "setMessage"
                     (format "%sに乗った" name)
                     "" 7 nil nil nil)))
    (gr-run-func "AutoDraw" 5)
    (throw 'gr-return nil)))

(defun gr-live-map-cell (grid x y)
  "Return GRID[X][Y], or nil when out of range."
  (let ((row (and (vectorp grid) (>= x 0) (< x (length grid))
                  (gr-index-ref grid x))))
    (and (vectorp row) (>= y 0) (< y (length row))
         (gr-index-ref row y))))

(defun gr-live-set-map-cell (grid x y value)
  "Set GRID[X][Y] to VALUE when in range."
  (let ((row (and (vectorp grid) (>= x 0) (< x (length grid))
                  (gr-index-ref grid x))))
    (when (and (vectorp row) (>= y 0) (< y (length row)))
      (aset row y value))))

(defun gr-live-floor-tile-p (tile)
  "Return non-nil when TILE is passable in the live fallback turn."
  (and (numberp tile) (>= tile 1) (<= tile 12)))

(defun gr-live-enemy-live-p (row)
  "Return non-nil when ROW is a live enemy row."
  (and (vectorp row)
       (> (gr-num (or (gr-prop-ref row "Var0") 0)) 0)
       (> (gr-num (or (gr-prop-ref row "Var3") 0)) 0)
       (not (equal (gr-prop-ref row "Var11") 1))))

(defun gr-live-sign (value)
  "Return -1, 0, or 1 for VALUE."
  (cond ((< value 0) -1)
        ((> value 0) 1)
        (t 0)))

(defun gr-live-enemy-step-candidates (ex ey px py)
  "Return simple chase step candidates from EX,EY toward PX,PY."
  (let* ((dx (- px ex))
         (dy (- py ey))
         (sx (gr-live-sign dx))
         (sy (gr-live-sign dy)))
    (if (>= (abs dx) (abs dy))
        (list (list (+ ex sx) ey)
              (list ex (+ ey sy)))
      (list (list ex (+ ey sy))
            (list (+ ex sx) ey)))))

(defun gr-live-run-light-enemy-turn ()
  "Run a bounded enemy turn for the live fallback attack path."
  (let ((rows (gr-get 83))
        (tiles (gr-get 71))
        (occ (gr-get 82))
        (px (gr-num (or (gr-get 66) 0)))
        (py (gr-num (or (gr-get 67) 0)))
        (idx 1)
        (moved 0)
        row ex ey candidates target nx ny)
    (when (vectorp rows)
      (while (< idx (length rows))
        (setq row (aref rows idx))
        (when (gr-live-enemy-live-p row)
          (setq ex (gr-num (or (gr-prop-ref row "Var1") 0))
                ey (gr-num (or (gr-prop-ref row "Var2") 0)))
          (cond
           ((and (<= (abs (- ex px)) 1)
                 (<= (abs (- ey py)) 1))
            (gr-set 211 (max 0 (- (gr-num (or (gr-get 211) 0)) 1))))
           (t
            (setq candidates (gr-live-enemy-step-candidates ex ey px py)
                  target nil)
            (while (and candidates (null target))
              (setq nx (nth 0 (car candidates))
                    ny (nth 1 (car candidates)))
              (when (and (gr-live-floor-tile-p (gr-live-map-cell tiles nx ny))
                         (equal (gr-live-map-cell occ nx ny) 0)
                         (not (and (= nx px) (= ny py))))
                (setq target (list nx ny)))
              (setq candidates (cdr candidates)))
            (when target
              (gr-live-set-map-cell occ ex ey 0)
              (gr-prop-set row "Var1" (nth 0 target))
              (gr-prop-set row "Var2" (nth 1 target))
              (gr-live-set-map-cell occ (nth 0 target) (nth 1 target) idx)
              (setq moved (1+ moved))))))
        (setq idx (1+ idx))))
    (gr-set 338 (+ (gr-num (or (gr-get 338) 0)) 1))
    (gr-set 195 0)
    (gr-set 220 0)
    (gr-set 234 0)
    (gr-set 339 0)
    (gr-set 340 0)
    (gr-set 341 0)
    (gr-set 217 1)
    moved))

(defun gr-live-native-func651 (&rest _args)
  "Minimal live attack animation/turn handoff for func636 fallback paths."
  (catch 'gr-return
    (push 651 gr-trace)
    (let ((x (gr-get 347))
          (y (gr-get 348))
          (target (gr-get 314))
          (enemy nil)
          (hp 0))
      (when (and (vectorp (gr-get 74))
                 (integerp x)
                 (integerp y))
        (let ((row (gr-index-ref (gr-get 74) x)))
          (when (and (vectorp row) (>= y 0) (< y (length row)))
            (aset row y 2))))
      (gr-play-sound 89)
      (setq enemy (and (vectorp (gr-get 83))
                       (integerp target)
                       (> target 0)
                       (< target (length (gr-get 83)))
                       (aref (gr-get 83) target)))
      (when (and enemy (> (gr-num (gr-prop-ref enemy "Var0")) 0))
        (setq hp (gr-num (gr-prop-ref enemy "Var3")))
        ;; The full func651 has many disc-specific branches.  This live
        ;; fallback keeps basic combat responsive until that function is
        ;; transpiled: a real target takes a small deterministic hit, then
        ;; the normal enemy turn pipeline runs.
        (gr-prop-set enemy "Var3" (max 0 (- hp 5)))
        (when (<= (gr-num (gr-prop-ref enemy "Var3")) 0)
          (gr-prop-set enemy "Var11" 1)))
      (gr-live-run-light-enemy-turn)
      (throw 'gr-return nil))))

(defun gr-live-native-func324X (&rest _args)
  "Fast live background-copy pass used by func337."
  (catch 'gr-return
    (gr-run-func "func324")
    (let* ((paused (or (equal (gr-get "time_paused") 1)
                       (>= (gr-num (gr-get "time_paused_count")) 1)))
           (src (if paused 24 0))
           (dest (if paused 24 0)))
      (gr-emit "gui-select-buffer" 36)
      (gr-emit "gui-draw-image-grid-40" src 0 0 9 9 40)
      (gr-set 1154 360)
      (gr-set 1155 360)
      (gr-set "__pos_x" 320)
      (gr-set "__pos_y" 320)
      (gr-emit "gui-select-buffer" dest)
      (throw 'gr-return nil))))

(defun gr-live-native-func325 (&rest _args)
  "Fast live mini-map/backdrop overlay pass."
  (catch 'gr-return
    (push 325 gr-trace)
    (when (equal (gr-get 490) 1)
      (gr-emit "gui-set-color" 0 0 0)
      (gr-emit "gui-fill-rect" 0 0 680 680))
    (when (equal (gr-get 262) 1)
      (throw 'gr-return nil))
    (when (and (equal (gr-get "special_floor") 7)
               (equal (gr-get 132) 0))
      (when (equal (gr-get 490) 1)
        (gr-emit "gui-set-color" 255 255 255)
        (gr-emit "gui-draw-text-at" 70 164.4 "ここでは地図が役に立たない！"))
      (throw 'gr-return nil))
    (when (or (equal (gr-get 501) 0)
              (equal (gr-get 490) 1))
      (let ((alpha (gr-num (or (gr-get 690) 255))))
        (when (member (gr-get "y_axis_map_image") '(7 13 19 24))
          (setq alpha (min 255 (+ alpha 20))))
        (when (equal (gr-get 490) 1)
          (setq alpha 255))
        (gr-emit "gui-set-color" 0 0 0)
        (gr-emit "gui-set-alpha" alpha)
        (gr-emit "gui-draw-image-sheet-grid-40" 4 15 0 9 8 40 0 10)
        (gr-emit "gui-set-alpha" (if (equal (gr-get 490) 1) 255 200))
        (gr-emit "gui-draw-image-sheet-grid-40" 7 15 0 9 8 40 0 10)
        (gr-emit "gui-set-alpha" 255)))
    (throw 'gr-return nil)))

(defun gr-live-native-func324-tile-sx (kind variant edge)
  "Return the source X for the common live map tile KIND."
  (cond
   ((and (not (equal kind 0)) (<= (gr-num kind) 12))
    (cond
     ((<= (gr-num variant) 4) 0)
     ((<= (gr-num variant) 7) 40)
     (t 80)))
   ((equal kind 14)
    (cond
     ((<= (gr-num variant) 4) 120)
     ((<= (gr-num variant) 7) 160)
     (t 200)))
   ((equal kind 0)
    (cond
     ((<= (gr-num variant) 5) 240)
     ((<= (gr-num variant) 7) 280)
     ((<= (gr-num variant) 9) 320)
     (t 240)))
   ((equal kind 13)
    (cond
     ((<= (gr-num edge) 3) 1520)
     ((<= (gr-num edge) 7) 1560)
     (t 1600)))
   (t nil)))

(defun gr-live-native-func324-tile-sx-fast (kind variant edge)
  "Numeric fast path for common live map tile KIND."
  (cond
   ((and (/= kind 0) (<= kind 12))
    (cond
     ((<= variant 4) 0)
     ((<= variant 7) 40)
     (t 80)))
   ((= kind 14)
    (cond
     ((<= variant 4) 120)
     ((<= variant 7) 160)
     (t 200)))
   ((= kind 0)
    (cond
     ((<= variant 5) 240)
     ((<= variant 7) 280)
     ((<= variant 9) 320)
     (t 240)))
   ((= kind 13)
    (cond
     ((<= edge 3) 1520)
     ((<= edge 7) 1560)
     (t 1600)))
   (t nil)))

(defun gr-live-native-func324-position (col row dir scroll floor-shift)
  "Return screen position for map COL/ROW in facing DIR."
  (let ((x (* col 40))
        (y (+ (* row 40) floor-shift)))
    (cond
     ((equal dir 4) (setq x (- x scroll)))
     ((equal dir 6) (setq x (+ x scroll)))
     ((equal dir 8) (setq y (- y scroll)))
     ((equal dir 2) (setq y (+ y scroll)))
     ((equal dir 1) (setq x (- x scroll)
                          y (+ y scroll)))
     ((equal dir 3) (setq x (+ x scroll)
                          y (+ y scroll)))
     ((equal dir 7) (setq x (- x scroll)
                          y (- y scroll)))
     ((equal dir 9) (setq x (+ x scroll)
                          y (- y scroll))))
    (cons x y)))

(defun gr-live-native-map-cell-position (x y &optional y-offset)
  "Return screen position for map cell X/Y relative to the player."
  (let* ((col (+ (- (gr-num x) (gr-num (gr-get 66))) 4))
         (row (+ (- (gr-num y) (gr-num (gr-get 67))) 4))
         (scroll (if (or (equal (gr-get 217) 1)
                         (equal (gr-get 1824) 1))
                     0
                   (* 10 (gr-num (gr-get 409)))))
         (pos (gr-live-native-func324-position
               col row (gr-get 199) scroll (or y-offset 0))))
    pos))

(defun gr-live-native-func324 (&rest _args)
  "Fast live map tile pass used by func324X."
  (catch 'gr-return
    (push 324 gr-trace)
    (gr-emit "gui-set-alpha" 255)
    (let* ((floor-shift (cond
                         ((equal (gr-get 585) 1) 2)
                         ((equal (gr-get 585) 2) 5)
                         ((equal (gr-get 585) 3) 10)
                         (t 0)))
           (scroll (if (equal (gr-get 217) 1)
                       0
                     (* 10 (gr-num (gr-get 409)))))
           (base-x (max 0 (- (gr-num (gr-get 66)) 5)))
           (base-y (max 0 (- (gr-num (gr-get 67)) 5)))
           (dir (gr-get 199))
           (map71 (gr-get 71))
           (map87 (gr-get 87))
           (yimg (* (gr-num (gr-get "y_axis_map_image")) 40))
           (edge (gr-num (gr-get 1153)))
           (row 0))
      (gr-set 1145 floor-shift)
      (gr-set 778 scroll)
      (while (< row 11)
        (let* ((col 0)
               (map-y (+ base-y row))
               (base-screen-y (+ (* (1- row) 40) floor-shift)))
          (while (< col 11)
            (let* ((map-x (+ base-x col))
                   (row71 (and (vectorp map71)
                               (< map-x (length map71))
                               (aref map71 map-x)))
                   (row87 (and (vectorp map87)
                               (< map-x (length map87))
                               (aref map87 map-x)))
                   (kind (and (vectorp row71)
                              (< map-y (length row71))
                              (aref row71 map-y)))
                   (variant (and (vectorp row87)
                                 (< map-y (length row87))
                                 (aref row87 map-y)))
                   (sx (and kind variant
                            (gr-live-native-func324-tile-sx-fast
                             (gr-num kind) (gr-num variant) edge))))
              (when sx
                (let ((x (* (1- col) 40))
                      (y base-screen-y))
                  (cond
                   ((equal dir 4) (setq x (- x scroll)))
                   ((equal dir 6) (setq x (+ x scroll)))
                   ((equal dir 8) (setq y (- y scroll)))
                   ((equal dir 2) (setq y (+ y scroll)))
                   ((equal dir 1) (setq x (- x scroll)
                                        y (+ y scroll)))
                   ((equal dir 3) (setq x (+ x scroll)
                                        y (+ y scroll)))
                   ((equal dir 7) (setq x (- x scroll)
                                        y (- y scroll)))
                   ((equal dir 9) (setq x (+ x scroll)
                                        y (- y scroll))))
                  (gr-emit "gui-draw-image-scaled"
                           5 sx yimg 40 40 x y 40 40))))
            (setq col (1+ col))))
        (setq row (1+ row)))
      (gr-set 1154 360)
      (gr-set 1155 360)
      (when (and (equal (gr-get 262) 1) (not (equal (gr-get 595) 2)))
        (gr-run-func "func163"))
      (when (and (equal (gr-get 262) 1) (equal (gr-get 595) 2))
        (gr-run-func "func163b"))
      (when (equal (gr-get "special_floor") 9)
        (gr-run-func "func164"))
      (throw 'gr-return nil))))

(defun gr-live-status-draw-text (x y text)
  "Draw live HUD TEXT at X/Y."
  (gr-emit "gui-draw-text-at" x y
           (cond
            ((stringp text) text)
            ((numberp text) (number-to-string text))
            ((null text) "")
            (t (format "%s" text)))))

(defun gr-live-status-number-x (value x1 x2 x3 x4 x5 x6)
  "Return a right-aligned HUD X position for VALUE using digit breakpoints."
  (let ((n (abs (truncate (gr-num value)))))
    (cond
     ((>= n 100000) x6)
     ((>= n 10000) x5)
     ((>= n 1000) x4)
     ((>= n 100) x3)
     ((>= n 10) x2)
     (t x1))))

(defun gr-live-native-func342 (&rest _args)
  "Fast live HUD/status text draw."
  (catch 'gr-return
    (push 342 gr-trace)
    (when (equal (gr-get 1233) 1)
      (throw 'gr-return nil))
    (let* ((base-y (gr-num (or (gr-get 41) 0)))
           (label-y (+ base-y 3))
           (value-y base-y)
           (x42 (gr-num (or (gr-get 42) 0)))
           (x43 (gr-num (or (gr-get 43) 0)))
           (x45 (gr-num (or (gr-get 45) 0)))
           (x46 (gr-num (or (gr-get 46) 0)))
           (x47 (gr-num (or (gr-get 47) 0)))
           (x48 (gr-num (or (gr-get 48) 0)))
           (x49 (gr-num (or (gr-get 49) 0)))
           (x50 (gr-num (or (gr-get 50) 0)))
           (x51 (gr-num (or (gr-get 51) 0)))
           (x52 (gr-num (or (gr-get 52) 0)))
           (x53 (gr-num (or (gr-get 53) 0)))
           (x54 (gr-num (or (gr-get 54) 0)))
           (x55 (gr-num (or (gr-get 55) 0)))
           (x56 (gr-num (or (gr-get 56) 0)))
           (x57 (gr-num (or (gr-get 57) 0)))
           (x58 (gr-num (or (gr-get 58) 0)))
           (x59 (gr-num (or (gr-get 59) 0)))
           (hp (gr-get 211))
           (max-hp (gr-get 352))
           (wallet (gr-get "wallet"))
           (level (gr-get "current_level"))
           (floor (if (equal (gr-get 262) 1) 1 (gr-get "current_floor")))
           (floor-label-x (if (>= (gr-num floor) 100) 45 35))
           (floor-x (if (< (gr-num floor) 10)
                        x42
                      x43))
           (level-x x46)
           (hp-x (gr-live-status-number-x
                  hp x48 x49 x50 x50 x50 x50))
           (max-hp-x x52)
           (wallet-x (gr-live-status-number-x
                      wallet x53 x54 x55 x56 x57 x58)))
      (gr-emit "gui-set-alpha" 255)
      (gr-set "line_size" 20)
      (gr-set "font_size" 16)
      (gr-set 44 floor-label-x)
      (gr-emit "gui-set-color" 95 160 200)
      (gr-live-status-draw-text floor-label-x label-y "F")
      (gr-live-status-draw-text x45 label-y "Lv")
      (gr-live-status-draw-text x47 label-y "HP")
      (gr-live-status-draw-text x51 label-y "/")
      (gr-live-status-draw-text x59 label-y "G")
      (if (<= (gr-num (gr-get 350)) 0)
          (gr-emit "gui-set-color" 255 255 0)
        (gr-emit "gui-set-color" 255 255 255))
      (gr-live-status-draw-text floor-x value-y floor)
      (gr-live-status-draw-text level-x value-y level)
      (gr-live-status-draw-text hp-x value-y hp)
      (gr-live-status-draw-text max-hp-x value-y max-hp)
      (gr-live-status-draw-text wallet-x value-y wallet)
      (throw 'gr-return nil))))

(defun gr-live-native-func343 (&rest _args)
  "Fast live HP bar draw."
  (catch 'gr-return
    (push 343 gr-trace)
    (when (equal (gr-get 1233) 1)
      (throw 'gr-return nil))
    (let* ((max-hp (gr-num (gr-get 352)))
           (hp (max 0 (gr-num (gr-get 211))))
           (bar-x (cond
                   ((>= max-hp 300) 30)
                   ((> max-hp 200) (- 330 max-hp))
                   (t 130)))
           (bar-end (+ bar-x max-hp))
           (hp-end (+ bar-x hp)))
      (gr-set 1235 bar-x)
      (gr-emit "gui-set-color" 255 255 255)
      (gr-emit "gui-fill-rect" (1- bar-x) 24 (1+ bar-end) 31)
      (gr-emit "gui-set-color" 255 0 0)
      (gr-emit "gui-fill-rect" bar-x 25 bar-end 30)
      (when (> hp 0)
        (gr-emit "gui-set-color" 255 255 255)
        (gr-emit "gui-fill-rect" bar-x 25 (1+ hp-end) 30)
        (cond
         ((>= (gr-num (gr-get 130)) 1)
          (gr-emit "gui-set-color" 0 0 255))
         ((or (>= (gr-num (gr-get 134)) 1)
              (>= (gr-num (gr-get 135)) 1)
              (>= (gr-num (gr-get 136)) 1)
              (>= (gr-num (gr-get 137)) 1))
          (gr-emit "gui-set-color" 255 0 255))
         (t
          (gr-emit "gui-set-color" 0 255 0)))
        (gr-emit "gui-fill-rect" bar-x 25 hp-end 30))
      (gr-set "line_size" 11)
      (gr-emit "gui-set-color" 255 255 255)
      (gr-live-status-draw-text (- bar-x 18) 24 "HP")
      (throw 'gr-return nil))))

(defvar gr-live-original-func396 nil
  "Generated func396 implementation used as the live fallback.")

(defun gr-live-native-func396-fallback (&rest args)
  "Call the generated func396 fallback without recursing into the live override."
  (if (and gr-live-original-func396
           (not (eq gr-live-original-func396 #'gr-live-native-func396)))
      (apply gr-live-original-func396 args)
    nil))

(defun gr-live-motion-pixels ()
  "Return the current tile-slide pixel offset."
  (pcase (gr-num (gr-get 409))
    (1 10)
    (2 20)
    (3 30)
    (4 40)
    (_ 0)))

(defun gr-live-apply-motion-offset (grid-x grid-y extra-x)
  "Return screen position for GRID-X/GRID-Y with current live motion state."
  (let* ((tile-w (gr-num (gr-get 35)))
         (tile-h (gr-num (gr-get 36)))
         (base-x (* (gr-num grid-x) tile-w))
         (base-y (* (gr-num grid-y) tile-h))
         (shift (gr-live-motion-pixels))
         (dir (gr-num (gr-get 199)))
         (x (+ base-x (gr-num extra-x)))
         (y base-y))
    (unless (or (equal (gr-get 217) 1)
                (equal (gr-get 1824) 1))
      (pcase dir
        ((or 4 1 7) (setq x (- x shift)))
        ((or 6 3 9) (setq x (+ x shift))))
      (pcase dir
        ((or 8 7 9) (setq y (- y shift)))
        ((or 2 1 3) (setq y (+ y shift)))))
    (cons x y)))

(defun gr-live-native-func396 (&rest args)
  "Fast live floor-item draw for the common non-blinking item state."
  (catch 'gr-return
    (push 396 gr-trace)
    (let* ((slot (gr-live-grid-ref (gr-get 77) (gr-get 447) (gr-get 449)))
           (rows (gr-get 78))
           (row (and (vectorp rows)
                     (integerp slot)
                     (>= slot 0)
                     (< slot (length rows))
                     (aref rows slot))))
      (unless (vectorp row)
        (throw 'gr-return nil))
      (gr-set 1813 slot)
      (when (and (equal (gr-get 103) 0)
                 (equal (gr-prop-ref row "Var10") 0))
        (throw 'gr-return nil))
      (when (and (equal (gr-index-ref (gr-get "equip_disc") 368) 1)
                 (equal (gr-prop-ref row "Var15") 1))
        (throw 'gr-return
               (apply #'gr-live-native-func396-fallback args)))
      (let* ((px (gr-num (gr-get 66)))
             (py (gr-num (gr-get 67)))
             (item-x (gr-num (gr-prop-ref row "Var1")))
             (item-y (gr-num (gr-prop-ref row "Var2")))
             (grid-x (+ (- item-x px) 4))
             (grid-y (+ (- item-y py) 4))
             (pos (gr-live-apply-motion-offset grid-x grid-y 0)))
        (gr-set 1814 (max 0 (1- px)))
        (gr-set 1815 (min (gr-num (gr-get 33)) (1+ px)))
        (gr-set 1816 (min (gr-num (gr-get 34)) (1+ py)))
        (gr-set 1817 (max 0 (1- py)))
        (gr-set 1818 grid-x)
        (gr-set 1819 grid-y)
        (gr-set 1820 item-x)
        (gr-set 1821 item-y)
        (gr-set "belongings_item_list" (gr-prop-ref row "Var0"))
        (gr-set 1248 (gr-prop-ref row "Var13"))
        (gr-set 1822 (gr-live-motion-pixels))
        (gr-set 1823 0)
        (gr-emit "gui-set-alpha" 255)
        (gr-set "__pos_x" (car pos))
        (gr-set "__pos_y" (cdr pos))
        (gr-emit "gui-set-position" (car pos) (cdr pos))
        (gr-run-func "func397")
        (throw 'gr-return nil)))))

(defvar gr-live-original-func397 nil
  "Generated func397 implementation used as the live fallback.")

(defconst gr-live-func397-exact-sprites
  '((1   . (9 0 0))
    (630 . (9 0 200))
    (631 . (9 40 200))
    (632 . (9 160 200))
    (633 . (9 80 200))
    (634 . (9 120 200))
    (635 . (9 200 240))
    (636 . (9 240 240))
    (639 . (9 0 240))
    (640 . (9 200 240))
    (641 . (9 120 120))
    (644 . (9 240 160))
    (645 . (9 280 160))
    (646 . (9 320 160))
    (647 . (9 360 240))
    (648 . (9 80 240))
    (652 . (9 80 40))
    (654 . (14 160 0))
    (655 . (9 320 200))
    (700 . (9 0 80)))
  "Exact simple item-id sprites for func397.")

(defun gr-live-func397-range-sprite (item-id)
  "Return the simple range sprite for ITEM-ID, or nil."
  (cond
   ((and (>= item-id 100) (< item-id 400)) '(9 40 0))
   ((and (>= item-id 400) (< item-id 450)) '(9 240 0))
   ((and (>= item-id 450) (< item-id 500)) '(9 120 0))
   ((and (>= item-id 500) (< item-id 600)) '(9 280 0))
   ((and (>= item-id 600) (< item-id 630)) '(9 0 40))
   ((and (>= item-id 650) (< item-id 654) (not (= item-id 652))) '(9 120 40))
   (t nil)))

(defun gr-live-native-func397-fallback (&rest args)
  "Call the generated func397 fallback without recursing into the live override."
  (if (and gr-live-original-func397
           (not (eq gr-live-original-func397 #'gr-live-native-func397)))
      (apply gr-live-original-func397 args)
    nil))

(defun gr-live-native-func397 (&rest args)
  "Fast live item icon draw for simple func397 cases."
  (catch 'gr-return
    (push 397 gr-trace)
    (let* ((item-id (gr-num (gr-get "belongings_item_list")))
           (sprite (or (cdr (assq item-id gr-live-func397-exact-sprites))
                       (gr-live-func397-range-sprite item-id))))
      (if sprite
          (progn
            (gr-emit "gui-draw-image-scaled"
                     (nth 0 sprite) (nth 1 sprite) (nth 2 sprite) 40 40
                     (or (gr-get "__pos_x") 0)
                     (or (gr-get "__pos_y") 0)
                     40 40)
            (throw 'gr-return nil))
        (throw 'gr-return
               (apply #'gr-live-native-func397-fallback args))))))

(defvar gr-live-original-func539 nil
  "Generated func539 implementation used as the live fallback.")

(defvar gr-live-original-func626 nil
  "Generated func626 implementation used as the live fallback.")

(defvar gr-live-original-func566 nil
  "Generated func566 implementation used as the live fallback.")

(defvar gr-live-original-func568 nil
  "Generated func568 implementation used as the live fallback.")

(defvar gr-live-func626-cache (make-hash-table :test 'equal)
  "Cached func626 enemy metadata keyed by enemy_list id.")

(defconst gr-live-func539-simple-sprites
  '((1  . (14 0 0 40 40))
    (3  . (14 0 80 40 40))
    (4  . (14 0 120 40 40))
    (5  . (14 0 160 40 40))
    (7  . (14 160 40 40 40))
    (8  . (14 120 120 40 40))
    (10 . (14 0 280 40 40))
    (11 . (14 0 320 40 40))
    (12 . (14 0 360 40 40))
    (13 . (14 40 240 40 40))
    (15 . (14 120 280 40 40))
    (16 . (14 40 320 40 40))
    (17 . (14 80 280 40 40))
    (18 . (14 80 360 40 40))
    (19 . (14 440 440 40 40))
    (20 . (14 160 400 40 40))
    (21 . (14 40 120 40 40))
    (22 . (14 80 120 40 40))
    (23 . (14 120 40 40 40))
    (24 . (14 80 440 40 40))
    (25 . (14 400 440 40 40))
    (26 . (14 400 360 40 40))
    (27 . (14 440 360 40 40))
    (28 . (14 440 400 40 40))
    (29 . (14 520 440 40 40))
    (30 . (14 560 400 40 40))
    (78 . (14 440 80 40 40))
    (80 . (14 440 120 40 40))
    (81 . (14 480 400 40 40))
    (82 . (14 400 320 40 40))
    (83 . (14 400 240 40 40))
    (85 . (14 360 440 40 40))
    (87 . (34 320 640 40 40)))
  "Simple func539 object sprites with no extra alpha or animation side effects.")

(defun gr-live-native-func539-fallback (&rest args)
  "Call the generated func539 fallback without recursing into the live override."
  (if (and gr-live-original-func539
           (not (eq gr-live-original-func539 #'gr-live-native-func539)))
      (apply gr-live-original-func539 args)
    nil))

(defun gr-live-native-func539 (&rest args)
  "Fast live object sprite draw for simple func539 cases."
  (catch 'gr-return
    (let* ((kind (gr-num (gr-get 888)))
           (sprite (cdr (assq kind gr-live-func539-simple-sprites))))
      (if sprite
          (progn
            (gr-emit "gui-set-alpha" 255)
            (gr-emit "gui-draw-image-scaled"
                     (nth 0 sprite) (nth 1 sprite) (nth 2 sprite)
                     (nth 3 sprite) (nth 4 sprite)
                     (or (gr-get "__pos_x") 0)
                     (or (gr-get "__pos_y") 0)
                     (nth 3 sprite) (nth 4 sprite))
            (throw 'gr-return nil))
        (throw 'gr-return
               (apply #'gr-live-native-func539-fallback args))))))

(defun gr-live-native-func553 (&rest _args)
  "Fast live trap/stairs tile draw."
  (catch 'gr-return
    (push 553 gr-trace)
    (when (not (equal (gr-get 262) 0))
      (throw 'gr-return nil))
    (let* ((x (gr-get 447))
           (y (gr-get 449))
           (kind (gr-live-grid-ref (gr-get 73) x y))
           (pos (gr-live-native-map-cell-position x y))
           (yimg (* (gr-num (gr-get "y_axis_map_image")) 40))
           (boss-floor (or (and (equal (gr-get "dungeon_number") 1)
                                (equal (gr-get "current_floor") 12))
                           (and (equal (gr-get "dungeon_number") 2)
                                (equal (gr-get "current_floor") 30))
                           (and (equal (gr-get "dungeon_number") 3)
                                (equal (gr-get "current_floor") 99))
                           (and (equal (gr-get "dungeon_number") 5)
                                (equal (gr-get "current_floor") (gr-get 20))))))
      (gr-emit "gui-set-alpha" 255)
      (cond
       ((equal kind 1)
        (gr-emit "gui-draw-image-scaled"
                 5 1200 (if boss-floor 0 yimg) 40 40
                 (car pos) (cdr pos) 40 40))
       ((equal kind 2)
        (gr-emit "gui-draw-image-scaled"
                 5 1640 yimg 40 40
                 (car pos) (cdr pos) 40 40))))
    (throw 'gr-return nil)))

(defvar gr-live-original-func345 nil
  "Generated func345 implementation used as the live fallback.")

(defconst gr-live-player-normal-base-x
  '((2 . 0) (4 . 120) (8 . 240) (6 . 360)
    (1 . 480) (7 . 600) (3 . 720) (9 . 840)))

(defun gr-live-zero-slots-p (&rest slots)
  "Return non-nil when every numeric SLOT currently has value 0."
  (catch 'gr-not-zero
    (dolist (slot slots t)
      (unless (equal (gr-get slot) 0)
        (throw 'gr-not-zero nil)))))

(defun gr-live-player-normal-frame-x (dir step)
  "Return source X for the normal player DIR and STEP, or nil."
  (let ((base (cdr (assq dir gr-live-player-normal-base-x))))
    (when base
      (+ base
         (cond
          ((or (= step 4) (= step 5) (= step 10) (= step 11)) 40)
          ((and (>= step 6) (<= step 9)) 80)
          (t 0))))))

(defun gr-live-native-func345-fallback (&rest args)
  "Call the generated func345 fallback without recursing into the live override."
  (if (and gr-live-original-func345
           (not (eq gr-live-original-func345 #'gr-live-native-func345)))
      (apply gr-live-original-func345 args)
    nil))

(defun gr-live-draw-opening-player ()
  "Draw the protagonist for the opening animation on screen buffer 0."
  (let* ((fall-frame (gr-num (or (gr-get 773) 0)))
         (rise-frame (gr-num (or (gr-get 777) 0)))
         (y nil)
         (source-x nil))
    (cond
     ((and (>= fall-frame 1) (<= fall-frame 6))
      (setq y (gr-num (or (gr-get 774) 0))
            source-x 40))
     ((and (>= fall-frame 7) (<= fall-frame 15))
      (setq y (aref [110 112 110 100 105 110 120 130 160]
                    (- fall-frame 7))
            source-x 40))
     ((and (>= rise-frame 1) (<= rise-frame 6))
      (setq y (aref [120 100 90 85 100 100] (1- rise-frame))
            source-x 240))
     ((and (>= rise-frame 7) (<= rise-frame 12))
      (setq y (gr-num (or (gr-get 774) 0))
            source-x 240)))
    (when y
      (gr-emit "gui-select-buffer" 0)
      (gr-emit "gui-set-alpha" 255)
      (gr-emit "gui-set-position" 160 y)
      (gr-emit "gui-draw-image-scaled" 3 source-x 0 40 40 160 y 40 40))))

(defun gr-live-native-func345 (&rest args)
  "Fast live player draw for the common unmodified state."
  (catch 'gr-return
    (push 345 gr-trace)
    (let* ((dir (gr-num (gr-get 199)))
           (step (gr-num (gr-get 1226)))
           (sx (gr-live-player-normal-frame-x dir step)))
      (if (and sx
               (equal (gr-get 374) 0)
               (<= (gr-num (gr-get 123)) 0)
               (> (gr-num (gr-get 211)) 0)
               (< (gr-num (gr-get 218)) 30)
               (< (gr-num (gr-get 1238)) 5)
               (equal (gr-get 1061) 0)
               (gr-live-zero-slots-p
                1201 144 472 758 1240 1241 1242 1243 1244 1245
                1246 1250 1251 1252 1254 1255 1256 1257 1258
                1259 1260 1261 1262 1263 1264 1265 1266 1268
                470 471 1054 219 128 243 1220 1191 1190 108
                389 1223 178 157 240 1214 1218 1224))
          (progn
            (gr-set 764 4)
            (gr-set 763 4)
            (gr-set "__pos_x" 160)
            (gr-set "__pos_y" 150)
            (gr-emit "gui-set-alpha" 255)
            (when (or (equal (gr-live-grid-ref (gr-get 71) (gr-get 66) (gr-get 67)) 0)
                      (>= (gr-num (gr-get 131)) 1))
              (gr-emit "gui-set-color" 0 0 0)
              (gr-emit "gui-set-alpha" 255))
            (gr-emit "gui-set-position" 160 150)
            (gr-emit "gui-draw-image-scaled" 3 sx 0 40 40 160 150 40 40)
            (gr-set 1269 dir)
            (gr-emit "gui-set-alpha" 255)
            (throw 'gr-return nil))
        (throw 'gr-return (apply #'gr-live-native-func345-fallback args))))))

(defun gr-live-grid-ref (grid x y)
  "Return GRID[X][Y] for the dense vector grids used by live dungeon draws."
  (let ((row (and (vectorp grid)
                  (integerp x)
                  (>= x 0)
                  (< x (length grid))
                  (aref grid x))))
    (and (vectorp row)
         (integerp y)
         (>= y 0)
         (< y (length row))
         (aref row y))))

(defun gr-live-native-func326 (&rest _args)
  "Fast live dungeon-object draw pass used by func337."
  (catch 'gr-return
    (push 326 gr-trace)
    (let* ((base-x (- (gr-num (gr-get 66)) 5))
           (base-y (- (gr-num (gr-get 67)) 5))
           (grid65 (gr-get 65))
           (grid73 (gr-get 73))
           (grid77 (gr-get 77))
           (grid80 (gr-get 80))
           (grid82 (gr-get 82))
           (draw-items (and (equal (gr-get 127) 0)
                            (equal (gr-get 132) 0)))
           (dungeon-number (gr-get "dungeon_number"))
           (draw-dungeon0-items (and (equal dungeon-number 0)
                                     (equal (gr-get 595) 1)))
           (draw-dungeon-items (not (equal dungeon-number 0)))
           (x 0)
           (y 0))
      (setq y base-y)
      (while (< y (+ base-y 11))
        (gr-set 449 y)
        (setq x base-x)
        (while (< x (+ base-x 11))
          (gr-set 447 x)
          (when (>= (gr-num (gr-live-grid-ref grid73 x y)) 1)
            (gr-run-func "func553"))
          (when draw-items
            (when (not (equal (gr-live-grid-ref grid77 x y) 0))
              (when (or draw-dungeon-items draw-dungeon0-items)
                (gr-run-func "func396")))
            (when (not (equal (gr-live-grid-ref grid80 x y) 0))
              (gr-run-func "func538"))
            (when (equal (gr-live-grid-ref grid65 x y) 1)
              (gr-run-func "func344")))
          (setq x (1+ x)))
        (setq y (1+ y)))
      (when (and (equal (gr-get 1162) 1) draw-items)
        (gr-run-func "func621"))
      (setq y base-y)
      (while (< y (+ base-y 11))
        (gr-set 449 y)
        (setq x base-x)
        (while (< x (+ base-x 11))
          (gr-set 447 x)
          (when (equal (gr-live-grid-ref grid65 x y) 1)
            (gr-run-func "func345"))
          (when (and draw-items
                     (not (equal (gr-live-grid-ref grid82 x y) 0)))
            (gr-run-func "func565"))
          (when (>= (gr-num (gr-get 146)) 1)
            (gr-run-func "func327"))
          (setq x (1+ x)))
        (setq y (1+ y)))
      (throw 'gr-return nil))))

(defun gr-live-positive-p (key)
  "Return non-nil when runtime KEY holds a positive numeric value."
  (> (gr-num (gr-get key)) 0))

(defun gr-live-ge1-p (key)
  "Return non-nil when runtime KEY holds a numeric value >= 1."
  (>= (gr-num (gr-get key)) 1))

(defun gr-live-inc-wrap (key limit &optional reset-key reset-value)
  "Increment KEY and wrap it to zero when it reaches LIMIT.
When RESET-KEY is non-nil, set it to RESET-VALUE on wrap."
  (let ((value (1+ (gr-num (gr-get key)))))
    (gr-set key value)
    (when (>= value limit)
      (gr-set key 0)
      (when reset-key
        (gr-set reset-key (or reset-value 0))))))

(defun gr-live-enemy-var (enemy idx)
  "Return ENEMY VarIDX with a fast vector/list path."
  (cond
   ((and (vectorp enemy) (< idx (length enemy))) (aref enemy idx))
   ((and (listp enemy) (< idx (length enemy))) (nth idx enemy))
   (t (gr-prop-ref enemy (format "Var%s" idx)))))

(defun gr-live-set-enemy-var (enemy idx value)
  "Set ENEMY VarIDX to VALUE with a fast vector/list path."
  (cond
   ((and (vectorp enemy) (< idx (length enemy))) (aset enemy idx value))
   ((and (listp enemy) (< idx (length enemy))) (setcar (nthcdr idx enemy) value))
   (t (gr-prop-set enemy (format "Var%s" idx) value)))
  value)

(defun gr-live-bump-enemy-var32 (enemy)
  "Increment ENEMY Var32 modulo 12."
  (let ((value (1+ (gr-num (gr-live-enemy-var enemy 32)))))
    (gr-live-set-enemy-var enemy 32 (if (>= value 12) 0 value))))

(defun gr-live-update-enemy-frame-counters (pause-count)
  "Update live enemy Var32 animation counters."
  (let ((idx 1)
        (target (gr-get 152))
        (enemies (gr-get 83))
        (limit (gr-num (gr-get 97))))
    (while (<= idx limit)
      (let ((enemy (gr-index-ref enemies idx)))
        (when (not (equal (gr-live-enemy-var enemy 0) 0))
          (when (and (/= pause-count 0) (equal target idx))
            (gr-live-bump-enemy-var32 enemy))
          (when (= pause-count 0)
            (gr-live-bump-enemy-var32 enemy))))
      (setq idx (1+ idx)))))

(defun gr-live-native-func337 (&rest _args)
  "Fast live frame draw/update driver."
  (catch 'gr-return
    (push 337 gr-trace)
    (let* ((time-paused (equal (gr-get "time_paused") 1))
           (pause-count (gr-num (gr-get "time_paused_count")))
           (paused-or-count (or time-paused (>= pause-count 1))))
      (gr-emit "gui-present" 2)
      (when paused-or-count
        (gr-emit "gui-select-buffer" 24))
      (gr-run-func "func324X")
      (gr-run-func "func326")
      ;; Object helpers may leave a work buffer selected.  Opening animation
      ;; state (773/774/777) must be composed on the visible screen buffer.
      (when (equal (gr-get 374) 1)
        (gr-live-draw-opening-player))
      (when (equal (gr-get 772) 1) (gr-run-func "func353"))
      (gr-run-func "func330")
      (gr-run-func "func328")
      (when (gr-live-ge1-p 243) (gr-run-func "func352"))
      (when (gr-live-ge1-p 1189) (gr-run-func "func355"))
      (when (equal (gr-get 271) 1) (gr-run-func "func354"))
      (when (gr-live-ge1-p 1190) (gr-run-func "func413"))
      (when (equal (gr-get 1191) 1) (gr-run-func "func412"))
      (when (gr-live-ge1-p 1192) (gr-run-func "func583"))
      (when (gr-live-ge1-p 1193) (gr-run-func "func348"))
      (when (equal (gr-get 1194) 1) (gr-run-func "func347"))
      (when (equal (gr-get 1195) 1) (gr-run-func "func648"))
      (when (equal (gr-get 1196) 1) (gr-run-func "func671"))
      (when (gr-live-positive-p 1197) (gr-run-func "func350"))
      (when (gr-live-positive-p 1198) (gr-run-func "func582"))
      (when (or (equal (gr-get 127) 1) (gr-live-ge1-p 132))
        (gr-run-func "func329"))
      (gr-run-func "func325")
      (gr-run-func "func342")
      (gr-run-func "func343")
      (when time-paused
        (gr-emit "gui-select-buffer" 25)
        (gr-emit "gui-draw-image-scaled" 24 0 0 340 340 0 0 340 340)
        (gr-emit "gui-select-buffer" 0)
        (gr-emit "gui-set-alpha" 255)
        (gr-emit "gui-draw-image-scaled" 25 0 0 340 340 0 0 340 340)
        (when (and (equal (gr-get 490) 0) (not (equal (gr-get 502) 6)))
          (gr-run-func "func345"))
        (when (gr-live-ge1-p 243)
          (gr-run-func "func352")))
      (when (>= pause-count 1)
        (gr-emit "gui-select-buffer" 25)
        (gr-emit "gui-draw-image-scaled" 24 0 0 340 340 0 0 340 340)
        (gr-emit "gui-select-buffer" 0)
        (gr-emit "gui-set-alpha" 255)
        (gr-emit "gui-draw-image-scaled" 25 0 0 340 340 0 0 340 340)
        (when (and (equal (gr-get 127) 0) (equal (gr-get 132) 0))
          (when (gr-live-ge1-p 154)
            (gr-run-func "func345")
            (when (gr-live-ge1-p 243)
              (gr-run-func "func352")))
          (gr-set 1199 1)
          (gr-run-func "func565")
          (gr-set 1199 0)))
      (when (gr-live-ge1-p 755) (gr-run-func "func334"))
      (when (equal (gr-get 1200) 1) (gr-run-func "func674"))
      (when (equal (gr-get 198) 1) (gr-run-func "func048"))
      (when (or (>= (gr-num (gr-get 634)) 10)
                (gr-live-ge1-p 635)
                (gr-live-ge1-p 636)
                (gr-live-ge1-p 633)
                (gr-live-ge1-p 632)
                (gr-live-ge1-p 1201))
        (gr-emit "music-func102"))
      (when (equal (gr-get "open_item_menue") 1) (gr-run-func "func460"))
      (when (equal (gr-get 1202) 1) (gr-run-func "func714"))
      (when (equal (gr-get 1203) 1) (gr-run-func "func485"))
      (when (equal (gr-get 195) 1)
        (gr-run-func "func068")
        (gr-run-func "func069"))
      (when (equal (gr-get 196) 1) (gr-run-func "func054"))
      (when (equal (gr-get 405) 1) (gr-run-func "func063"))
      (when (equal (gr-get 548) 1) (gr-run-func "func0899"))
      (when (equal (gr-get 1204) 1) (gr-run-func "func0878"))
      (when (gr-live-ge1-p 1205) (gr-run-func "func0855"))
      (when (equal (gr-get 1206) 1) (gr-run-func "func0859"))
      (when (equal (gr-get 499) 1) (gr-run-func "func056"))
      (when (equal (gr-get 1207) 1) (gr-run-func "func449"))
      (when (and (equal (gr-get 765) 1)
                 (memq (gr-get 766) '(0 1 2)))
        (gr-run-func "func341"))
      (when (equal (gr-get 508) 1) (gr-run-func "func058"))
      (let ((mode502 (gr-get 502)))
        (when (equal mode502 1) (gr-run-func "func363"))
        (when (equal mode502 3) (gr-run-func "func373"))
        (when (equal mode502 5) (gr-run-func "func377"))
        (when (equal mode502 6) (gr-run-func "func379")))
      (when (gr-live-ge1-p 511) (gr-run-func "func360"))
      (when (equal (gr-get 1208) 1) (gr-run-func "func528"))
      (when (equal (gr-get 498) 1) (gr-run-func "func382"))
      (when (equal (gr-get 1209) 1) (gr-run-func "func367"))
      (when (gr-live-ge1-p 373) (gr-run-func "func078"))
      (when (equal (gr-get 509) 1) (gr-run-func "func197"))
      (when (equal (gr-get 900) 1) (gr-run-func "func196"))
      (when (equal (gr-get 901) 1) (gr-run-func "func204"))
      (when (equal (gr-get 904) 1) (gr-run-func "func207"))
      (when (equal (gr-get 905) 1) (gr-run-func "func200"))
      (when (equal (gr-get 902) 1) (gr-run-func "func210"))
      (when (equal (gr-get 903) 1) (gr-run-func "func219"))
      (when (equal (gr-get "lang_menu_open") 1) (gr-run-func "funcLangDisplay"))
      (when (gr-live-ge1-p 630) (gr-run-func "func228"))
      (when (equal (gr-get 1210) 1) (gr-run-func "func0994"))
      (when (gr-live-ge1-p 10) (gr-run-func "func338"))
      (gr-emit "gui-present" 1)
      (when (gr-live-positive-p 243)
        (gr-live-inc-wrap 243 12))
      (when (gr-live-positive-p 1211)
        (gr-live-inc-wrap 1211 15))
      (when (gr-live-positive-p 742)
        (gr-live-inc-wrap 742 15))
      (when (gr-live-positive-p 747)
        (let ((value (1+ (gr-num (gr-get 747)))))
          (gr-set 747 value)
          (when (= value 15)
            (gr-set 747 0)
            (gr-set 1212 0))))
      (when (gr-live-positive-p 1197)
        (let ((value (1+ (gr-num (gr-get 1197)))))
          (gr-set 1197 value)
          (when (= value 10) (gr-set 1197 0))))
      (when (gr-live-positive-p 1198)
        (let ((value (1+ (gr-num (gr-get 1198)))))
          (gr-set 1198 value)
          (when (= value 10) (gr-set 1198 0))))
      (when (gr-live-positive-p 1189)
        (let ((value (1+ (gr-num (gr-get 1189)))))
          (gr-set 1189 value)
          (when (= value 10)
            (gr-set 1189 0)
            (gr-set 1213 0))))
      (when (equal (gr-get 68) 1)
        (let ((value (1+ (gr-num (gr-get 599)))))
          (gr-set 599 value)
          (when (= value 20)
            (gr-set 599 0)
            (gr-set 68 0))))
      (gr-live-inc-wrap 784 6)
      (unless paused-or-count
        (gr-live-inc-wrap 1153 12)
        (gr-live-inc-wrap 1164 6))
      (when (gr-live-ge1-p 1214)
        (gr-live-inc-wrap 1215 6))
      (when (equal (gr-get 108) 1)
        (gr-set 1216 (1+ (gr-num (gr-get 1216)))))
      (when (equal (gr-get 1196) 1)
        (let ((value (1+ (gr-num (gr-get 1217)))))
          (gr-set 1217 value)
          (when (= value 10)
            (gr-set 1217 0)
            (gr-set 1196 0))))
      (when (gr-live-ge1-p 1190)
        (gr-live-inc-wrap 1190 10))
      (when (gr-live-ge1-p 1218)
        (gr-live-inc-wrap 1219 26))
      (when (equal (gr-get 1220) 1)
        (let ((value (1+ (gr-num (gr-get 1221)))))
          (gr-set 1221 value)
          (when (>= value 8) (gr-set 1222 1))
          (when (= value 10)
            (gr-set 1221 0)
            (gr-set 1220 0)
            (gr-set 1222 0)
            (when (equal (gr-get 1223) 1)
              (gr-set 1223 0)))))
      (when (gr-live-ge1-p 1224)
        (let ((value (1+ (gr-num (gr-get 1225)))))
          (gr-set 1225 value)
          (when (and (not (equal (gr-get 1224) 10)) (>= value 10))
            (gr-set 1225 0))))
      (when (gr-live-ge1-p 634)
        (let ((value (1+ (gr-num (gr-get 634)))))
          (gr-set 634 value)
          (gr-set 632 0)
          (gr-set 633 0)
          (when (= value 100) (gr-set 634 0))))
      (when (gr-live-ge1-p 632) (gr-live-inc-wrap 632 30))
      (when (gr-live-ge1-p 633) (gr-live-inc-wrap 633 30))
      (when (gr-live-ge1-p 635) (gr-live-inc-wrap 635 30))
      (when (gr-live-ge1-p 636) (gr-live-inc-wrap 636 30))
      (when (gr-live-ge1-p 630) (gr-live-inc-wrap 630 30))
      (when (= pause-count 0)
        (gr-live-inc-wrap 1226 12))
      (unless time-paused
        (gr-live-update-enemy-frame-counters pause-count))
      (when (equal (gr-get 765) 0)
        (let ((value (1+ (gr-num (gr-get 300)))))
          (gr-set 300 value)
          (when (> value 40)
            (gr-set 300 0)
            (gr-set 198 0)
            (gr-set "comments_row1" "")
            (gr-set "comments_row2" "")
            (gr-set 295 "")
            (gr-set "comments_row1a" "")
            (gr-set "comments_row2a" "")
            (gr-set 298 ""))))
      (let ((value (1+ (gr-num (gr-get 1228)))))
        (gr-set 1228 value)
        (when (= value 2)
          (gr-set 1228 0)
          (when (gr-live-positive-p 1229)
            (let ((v (1+ (gr-num (gr-get 1229)))))
              (gr-set 1229 v)
              (when (> v 5)
                (gr-set 1229 0))))))
      (when (gr-live-ge1-p 407)
        (gr-set 1230 0)
        (when (equal (gr-get 407) 1) (gr-run-func "func0958"))
        (when (equal (gr-get 407) 2) (gr-run-func "func0985"))
        (gr-emit "gui-select-buffer" (gr-get 1230)))
      (throw 'gr-return nil))))

(defconst gr-live-func626-vars
  '("enemy_name" "enemy_power" "enemy_defence" "enemy_exp_point"
    "enemy_hp" 1637 1654 972 "enemy_description" 1656 1657 1658 1619)
  "Runtime slots populated by func626 enemy metadata lookup.")

(defun gr-live-func626-capture ()
  "Capture func626 output slots into an alist."
  (let ((vars gr-live-func626-vars)
        (out nil))
    (while vars
      (push (cons (car vars) (gr-get (car vars))) out)
      (setq vars (cdr vars)))
    out))

(defun gr-live-func626-restore (entry)
  "Restore cached func626 ENTRY."
  (while entry
    (gr-set (caar entry) (cdar entry))
    (setq entry (cdr entry))))

(defun gr-live-native-func626 (&rest args)
  "Cached enemy metadata lookup for func626."
  (catch 'gr-return
    (push 626 gr-trace)
    (let* ((enemy-id (gr-get "enemy_list"))
           (cached (gethash enemy-id gr-live-func626-cache)))
      (if cached
          (gr-live-func626-restore cached)
        (if (and gr-live-original-func626
                 (not (eq gr-live-original-func626 #'gr-live-native-func626)))
            (progn
              (apply gr-live-original-func626 args)
              (puthash enemy-id (gr-live-func626-capture) gr-live-func626-cache))
          (gr-set "enemy_name" "")
          (gr-set "enemy_power" 0)
          (gr-set "enemy_defence" 0)
          (gr-set "enemy_exp_point" 0)
          (gr-set "enemy_hp" 0)
          (gr-set 1637 0)
          (gr-set 1654 100)
          (gr-set 972 0)
          (gr-set "enemy_description" "")
          (gr-set 1656 "")
          (gr-set 1657 "")
          (gr-set 1658 "")
          (gr-set 1619 0))))
    (throw 'gr-return nil)))

(defun gr-live-native-func566-fallback (args)
  "Run generated func566 fallback with ARGS."
  (if (and gr-live-original-func566
           (not (eq gr-live-original-func566 #'gr-live-native-func566)))
      (apply gr-live-original-func566 args)
    nil))

(defun gr-live-func566-visible-bounds (enemy)
  "Populate func566 visibility bounds for ENEMY."
  (let* ((px (gr-num (gr-get 66)))
         (py (gr-num (gr-get 67)))
         (ex (gr-num (gr-live-enemy-var enemy 1)))
         (ey (gr-num (gr-live-enemy-var enemy 2)))
         (max-x (gr-num (gr-get 31)))
         (max-y (gr-num (gr-get 34))))
    (gr-set 2579 (max 0 (- px 2)))
    (gr-set 2580 (min max-x (+ px 2)))
    (gr-set 2581 (min max-y (+ py 2)))
    (gr-set 2582 (max 0 (- py 2)))
    (gr-set 2583 ex)
    (gr-set 2584 ey)
    (gr-set 2585 (max 0 (1- ex)))
    (gr-set 2586 (1+ ex))
    (gr-set 2587 (1+ ey))
    (gr-set 2588 (max 0 (1- ey)))
    (gr-set 2589 (max 0 (- ex 2)))
    (gr-set 2590 (+ ex 2))
    (gr-set 2591 (+ ey 2))
    (gr-set 2592 (max 0 (- ey 2)))))

(defun gr-live-func566-set-scroll-position ()
  "Set func566 normal enemy screen position."
  (let* ((base-x (* (gr-num (gr-get 764)) (gr-num (gr-get 35))))
         (base-y (- (* (gr-num (gr-get 763)) (gr-num (gr-get 36))) 10))
         (scroll (gr-num (gr-get 2577)))
         (dir (gr-get 199))
         (x base-x)
         (y base-y))
    (unless (equal (gr-get 217) 1)
      (cond
       ((equal dir 4) (setq x (- base-x scroll)))
       ((equal dir 6) (setq x (+ base-x scroll)))
       ((equal dir 8) (setq y (- base-y scroll)))
       ((equal dir 2) (setq y (+ base-y scroll)))
       ((equal dir 1) (setq x (- base-x scroll)
                            y (+ base-y scroll)))
       ((equal dir 3) (setq x (+ base-x scroll)
                            y (+ base-y scroll)))
       ((equal dir 7) (setq x (- base-x scroll)
                            y (- base-y scroll)))
       ((equal dir 9) (setq x (+ base-x scroll)
                            y (- base-y scroll)))))
    (gr-set "__pos_x" x)
    (gr-set "__pos_y" y)
    (gr-emit "gui-set-position" x y)))

(defun gr-live-native-func566 (&rest args)
  "Fast path for normal live enemy drawing."
  (catch 'gr-return
    (let* ((enemy (gr-index-ref (gr-get 83) (gr-get 1641)))
           (var6 (gr-num (gr-live-enemy-var enemy 6)))
           (var7 (gr-num (gr-live-enemy-var enemy 7)))
           (var12 (gr-num (gr-live-enemy-var enemy 12)))
           (var18 (gr-num (gr-live-enemy-var enemy 18)))
           (var21 (gr-num (gr-live-enemy-var enemy 21)))
           (var32 (gr-live-enemy-var enemy 32))
           (var15 (gr-live-enemy-var enemy 15)))
      (if (not (and (= var6 0)
                    (= var7 0)
                    (= var12 0)
                    (= var18 0)
                    (not (and (= var21 1) (equal (gr-get 2578) 1)))
                    (not (equal var32 99))
                    (not (equal (gr-get "time_paused") 1))
                    (not (and (equal var15 4)
                              (not (equal (gr-get 409) 0))))))
          (progn
            (gr-live-native-func566-fallback args)
            (throw 'gr-return nil))
        (gr-emit "gui-set-alpha" 255)
        (gr-live-func566-set-scroll-position)
        (gr-live-func566-visible-bounds enemy)
        (gr-set 1642 1)
        (gr-run-func "func567")
        (throw 'gr-return nil)))))

(defun gr-live-native-func568 (&rest args)
  "Fast return for enemies with no live overlay state."
  (catch 'gr-return
    (push 568 gr-trace)
    (let* ((enemy (gr-index-ref (gr-get 83) (gr-get 1641)))
           (enemy-id (gr-live-enemy-var enemy 0))
           (has-overlay
            (or (equal (gr-live-enemy-var enemy 31) 5)
                (and (not (equal (gr-live-enemy-var enemy 14) 0))
                     (not (memq (gr-num enemy-id) '(23 50 53 90 147 170))))
                (and (>= (gr-num (gr-live-enemy-var enemy 17)) 1)
                     (not (memq (gr-num enemy-id) '(23 50 53 75 90))))
                (and (equal (gr-live-enemy-var enemy 19) 1)
                     (not (memq (gr-num enemy-id) '(23 50 53))))
                (memq (gr-live-enemy-var enemy 20) '(1 2))
                (and (not (equal (gr-live-enemy-var enemy 23) 0))
                     (not (memq (gr-num enemy-id) '(23 50 53 90 118))))
                (and (not (equal (gr-live-enemy-var enemy 13) 0))
                     (not (equal (gr-live-enemy-var enemy 13) 99))
                     (not (equal enemy-id 50)))
                (>= (gr-num (gr-live-enemy-var enemy 39)) 2)
                (>= (gr-num (gr-live-enemy-var enemy 24)) 1)
                (and (equal (gr-get "dungeon_number") 5)
                     (>= (gr-num (gr-live-enemy-var enemy 16)) 1000)
                     (equal (gr-live-enemy-var enemy 13) 0)))))
      (when has-overlay
        (when (and gr-live-original-func568
                   (not (eq gr-live-original-func568 #'gr-live-native-func568)))
          (apply gr-live-original-func568 args)))
      (throw 'gr-return nil))))

(defun gr-live-native-func565 (&rest _args)
  "Fast live enemy draw setup."
  (catch 'gr-return
    (push 565 gr-trace)
    (let* ((grid82 (gr-get 82))
           (enemy-id (gr-live-grid-ref grid82 (gr-get 447) (gr-get 449))))
      (when (and (>= (gr-num (gr-get "time_paused_count")) 1)
                 (equal (gr-get 1199) 1))
        (setq enemy-id (gr-get 152)))
      (gr-set 1641 enemy-id)
      (let* ((enemy (gr-index-ref (gr-get 83) enemy-id))
             (enemy-x (gr-live-enemy-var enemy 1))
             (enemy-y (gr-live-enemy-var enemy 2)))
        (gr-set 764 (+ (- (gr-num enemy-x) (gr-num (gr-get 66))) 4))
        (gr-set 763 (+ (- (gr-num enemy-y) (gr-num (gr-get 67))) 4))
        (gr-set 2575 enemy-x)
        (gr-set 2576 enemy-y)
        (when (equal (gr-live-grid-ref grid82 enemy-x enemy-y) 0)
          (throw 'gr-return nil))
        (gr-set "enemy_list" (gr-live-enemy-var enemy 0))
        (gr-run-func "func626")
        (gr-set 1640 (gr-live-enemy-var enemy 5))
        (gr-set 2577 (pcase (gr-get 409)
                       (0 0)
                       (1 10)
                       (2 20)
                       (3 30)
                       (4 40)
                       (_ 0)))
        (when (and (equal (gr-live-enemy-var enemy 15) 3)
                   (memq (gr-get 409) '(2 3)))
          (gr-set 764 (+ (- (gr-num (gr-live-enemy-var enemy 35))
                            (gr-num (gr-get 66)))
                         4))
          (gr-set 763 (+ (- (gr-num (gr-live-enemy-var enemy 36))
                            (gr-num (gr-get 67)))
                         4))
          (gr-set 1640 (gr-live-enemy-var enemy 37))
          (gr-set 2577 (if (equal (gr-get 409) 2) 20 30)))
        (gr-run-func "func566")
        (throw 'gr-return nil)))))

(defun gr-install-live-native-overrides ()
  "Register live-runtime native handlers after generated data is loaded."
  (let ((generated-func345 (and (boundp 'gr-native-funcs)
                                (gethash "func345" gr-native-funcs))))
    (when (and generated-func345
               (not (eq generated-func345 #'gr-live-native-func345)))
      (setq gr-live-original-func345 generated-func345)))
  (let ((generated-func396 (and (boundp 'gr-native-funcs)
                                (gethash "func396" gr-native-funcs))))
    (when (and generated-func396
               (not (eq generated-func396 #'gr-live-native-func396)))
      (setq gr-live-original-func396 generated-func396)))
  (let ((generated-func397 (and (boundp 'gr-native-funcs)
                                (gethash "func397" gr-native-funcs))))
    (when (and generated-func397
               (not (eq generated-func397 #'gr-live-native-func397)))
      (setq gr-live-original-func397 generated-func397)))
  (let ((generated-func539 (and (boundp 'gr-native-funcs)
                                (gethash "func539" gr-native-funcs))))
    (when (and generated-func539
               (not (eq generated-func539 #'gr-live-native-func539)))
      (setq gr-live-original-func539 generated-func539)))
  (let ((generated-func626 (and (boundp 'gr-native-funcs)
                                (gethash "func626" gr-native-funcs))))
    (when (and generated-func626
               (not (eq generated-func626 #'gr-live-native-func626)))
      (setq gr-live-original-func626 generated-func626)))
  (let ((generated-func566 (and (boundp 'gr-native-funcs)
                                (gethash "func566" gr-native-funcs))))
    (when (and generated-func566
               (not (eq generated-func566 #'gr-live-native-func566)))
      (setq gr-live-original-func566 generated-func566)))
  (let ((generated-func568 (and (boundp 'gr-native-funcs)
                                (gethash "func568" gr-native-funcs))))
    (when (and generated-func568
               (not (eq generated-func568 #'gr-live-native-func568)))
      (setq gr-live-original-func568 generated-func568)))
  (gr-defnative "func324" #'gr-live-native-func324)
  (gr-defnative "func324X" #'gr-live-native-func324X)
  (gr-defnative "func325" #'gr-live-native-func325)
  (gr-defnative "func326" #'gr-live-native-func326)
  (gr-defnative "func337" #'gr-live-native-func337)
  (gr-defnative "func342" #'gr-live-native-func342)
  (gr-defnative "func343" #'gr-live-native-func343)
  (gr-defnative "func396" #'gr-live-native-func396)
  (gr-defnative "func397" #'gr-live-native-func397)
  (gr-defnative "func539" #'gr-live-native-func539)
  (gr-defnative "func565" #'gr-live-native-func565)
  (gr-defnative "func566" #'gr-live-native-func566)
  (gr-defnative "func568" #'gr-live-native-func568)
  (gr-defnative "func626" #'gr-live-native-func626)
  (gr-defnative "func553" #'gr-live-native-func553)
  (gr-defnative "func345" #'gr-live-native-func345)
  (gr-defnative "func048" #'gr-live-native-func048)
  (gr-defnative "func053" #'gr-live-native-func053)
  (gr-defnative "func194" #'gr-live-native-func194)
  (gr-defnative "func196" #'gr-live-native-func196)
  (gr-defnative "func380" #'gr-live-native-func380)
  (gr-defnative "func398" #'gr-live-native-func398)
  (gr-defnative "func419" #'gr-live-native-func419)
  (gr-defnative "func651" #'gr-live-native-func651))

(gr-install-live-native-overrides)

(defun gr-i18n-t (value)
  "Minimal runtime translation shim for title/login text."
  (if (stringp value) value ""))

(defun gr-get (slot)
  (let ((value (gethash slot gr-state gr--missing-sentinel)))
    (if (eq value gr--missing-sentinel)
        (if (integerp slot) 0 nil)
      value)))

(defun gr-set (slot val)
  (puthash slot val gr-state))

(defun gr-step-tick ()
  "Advance the shared step budget, if enabled."
  (when gr-step-budget
    (setq gr-step-count (1+ gr-step-count))
    (when (> gr-step-count gr-step-budget)
      (error "step-budget"))))

(defun gr-expr-p (x)
  "Non-nil if X is a wrapped expression node ((op args...))."
  (and (consp x) (null (cdr x)) (consp (car x))
       (let ((op (caar x)))
         (or (symbolp op) (stringp op)))))

(defun gr-eval (x)
  "Evaluate an IR expression node X to a value."
  (cond
   ((gr-expr-p x) (gr-eval-op (car x)))
   ((vectorp x) x)
   (t x)))                              ; number / string / nil literal

(defun gr-eval-op (form)
  "Evaluate an expression op FORM = (OP ARG...)."
  (let ((op (car form)))
    (when (stringp op) (setq op (intern op)))
    (cond
     ((eq op 'state-slot-ref) (gr-get (gr-eval (nth 1 form))))
     ((eq op 'math-add) (+ (gr-num (gr-eval (nth 1 form))) (gr-num (gr-eval (nth 2 form)))))
     ((eq op 'math-sub) (- (gr-num (gr-eval (nth 1 form))) (gr-num (gr-eval (nth 2 form)))))
     ((eq op 'math-mul) (* (gr-num (gr-eval (nth 1 form))) (gr-num (gr-eval (nth 2 form)))))
     ((eq op 'bitwise-and) (logand (gr-num (gr-eval (nth 1 form))) (gr-num (gr-eval (nth 2 form)))))
     ((eq op 'bitwise-or)  (logior (gr-num (gr-eval (nth 1 form))) (gr-num (gr-eval (nth 2 form)))))
     ((eq op 'bitwise-xor) (logxor (gr-num (gr-eval (nth 1 form))) (gr-num (gr-eval (nth 2 form)))))
     ((eq op 'math-div) (/ (gr-num (gr-eval (nth 1 form))) (gr-num (gr-eval (nth 2 form)))))
     ((eq op 'math-floor) (floor (gr-num (gr-eval (nth 1 form)))))
     ((eq op 'math-trunc) (truncate (gr-num (gr-eval (nth 1 form)))))
     ((eq op 'math-abs) (abs (gr-num (gr-eval (nth 1 form)))))
     ((eq op 'math-mod) (mod (gr-num (gr-eval (nth 1 form))) (gr-num (gr-eval (nth 2 form)))))
     ((eq op 'dtw-random) (gr-random (gr-num (gr-eval (nth 1 form)))))
     ((eq op 'dtw-read-key-state)
      (gr-read-key-state (gr-eval (nth 1 form))))
     ((eq op 'index-ref)
      (gr-index-ref (gr-eval (nth 1 form)) (gr-eval (nth 2 form))))
     ((eq op 'i18n-format)
      (apply #'gr-format
             (gr-eval (nth 1 form))
             (mapcar #'gr-eval (nthcdr 2 form))))
     (t (list 'gr-unknown-expr op)))))

(defun gr-replace-all (s from to)
  "Replace every literal FROM in S with TO."
  (let ((out "") (start 0) (idx nil) (flen (length from)))
    (while (setq idx (gr-string-search from s start))
      (setq out (concat out (substring s start idx) to))
      (setq start (+ idx flen)))
    (concat out (substring s start))))

(defun gr-format (fmt &rest args)
  "Replace {i} placeholders in FMT with the corresponding ARGS."
  (let ((i 0))
    (dolist (a args)
      (setq fmt (gr-replace-all fmt (format "{%d}" i) (format "%s" a)))
      (setq i (1+ i)))
    fmt))

(defun gr-exec-entry (e)
  "Execute one IR entry E."
  (gr-step-tick)
  (cond
   ((null e) nil)
   ((numberp (car e))                   ; (SLOT VALUE) state write
    (gr-set (car e) (gr-eval (nth 1 e))))
   ((or (stringp (car e)) (symbolp (car e)))
    (let ((op (car e)))
      (when (stringp op) (setq op (intern op)))
      (cond
       ((eq op 'dtw-debug-print) (push (gr-eval (nth 1 e)) gr-trace))
       ((eq op 'core-call)
        (let ((nm (gr-eval (nth 1 e)))
              (args (mapcar #'gr-eval (nthcdr 2 e))))
          (when (stringp nm)
            (when (gr-string-prefix-p "Func." nm) (setq nm (substring nm 5)))
            (apply #'gr-run-func nm args))))
       ((eq op 'index-set)
        (let ((arr (gr-eval (nth 1 e))) (i (gr-eval (nth 2 e))) (v (gr-eval (nth 3 e))))
          (when (and (arrayp arr) (integerp i) (>= i 0) (< i (length arr)))
            (aset arr i v))))
       ((gethash op gr-event-symbols)
        (push (cons (symbol-name op) (mapcar #'gr-eval (cdr e))) gr-sumi))
       ((= (length e) 2)
        (gr-set (if (symbolp op) (symbol-name op) op) (gr-eval (nth 1 e))))
       (t                               ; GUI/IO primitive -> sumi stream
        (push (cons (if (symbolp op) (symbol-name op) op)
                    (mapcar #'gr-eval (cdr e)))
              gr-sumi)))))
   ((consp (car e))                     ; nested sequence of entries
    (dolist (sub e) (gr-exec-entry sub)))
   (t nil)))

(defun gr-run-func (name &rest args)
  "Run the IR or native implementation registered for NAME."
  (let* ((resolved-name name)
         (ir (and (hash-table-p gr-funcs) (gethash resolved-name gr-funcs)))
         (native (and (hash-table-p gr-native-funcs) (gethash resolved-name gr-native-funcs))))
    (when (and (null ir)
               (not (functionp native))
               (stringp resolved-name)
               (string-match "\\`func\\(0+[0-9]+\\)\\'" resolved-name))
      (let* ((digits (match-string 1 resolved-name))
             (trimmed (replace-regexp-in-string "\\`0+" "" digits))
             (normalized
              (concat "func"
                      (if (< (length trimmed) 3)
                          (concat (make-string (- 3 (length trimmed)) ?0) trimmed)
                        trimmed))))
        (setq ir (and (hash-table-p gr-funcs) (gethash normalized gr-funcs))
              native (and (hash-table-p gr-native-funcs) (gethash normalized gr-native-funcs)))
        (when (or ir (functionp native))
          (setq resolved-name normalized))))
    (cond
     ((>= gr-depth gr-depth-limit) (error "depth-limit %s" resolved-name))
     ((equal resolved-name "func069")
      (gr-sync-equipped-disc-ids)
      (setq gr-depth (1+ gr-depth))
      (unwind-protect
          (if (functionp native)
              (apply native args)
            (dolist (entry ir) (gr-exec-entry entry)))
        (setq gr-depth (1- gr-depth))))
     ((functionp native)
      (setq gr-depth (1+ gr-depth))
      (unwind-protect
          (apply native args)
        (setq gr-depth (1- gr-depth))))
     ((null ir) (push resolved-name gr-missing))
     (t (setq gr-depth (1+ gr-depth))
        (unwind-protect
            (dolist (entry ir) (gr-exec-entry entry))
          (setq gr-depth (1- gr-depth)))))))

(provide 'game-runner)
;;; game-runner.el ends here
