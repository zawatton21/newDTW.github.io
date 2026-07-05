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
  "Set of event names mirrored from stateDiffRunner.ts EVENT_NAMES.")

(defconst gr-data-root "C:/Users/kuroz/newDTW"
  "TS adapter data root mirrored from src/renderer/adapter/bload.ts.")

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
  ;; Mirrors src/renderer/nelisp_bridge/stateDiffRunner.ts EVENT_NAMES.
  (puthash name t gr-event-names))

(defun gr-ensure-state ()
  "Ensure the runtime state hash exists."
  (unless (hash-table-p gr-state)
    (setq gr-state (make-hash-table :test 'equal))))

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

(defun gr-index-ref (arr i)
  "Index ARR at I for strings, lists, and vectors."
  (if (and (gr-sequencep arr) (integerp i) (>= i 0) (< i (length arr)))
      (elt arr i)
    nil))

(defun gr-random (n)
  "Return a pseudo-random integer in [0, N)."
  (if (and (integerp n) (> n 0))
      (random n)
    0))

(defun gr-data-path (file-name)
  "Resolve FILE-NAME under `gr-data-root'."
  (expand-file-name (format "%s" (or file-name "")) gr-data-root))

(defun gr-file-exists (file-name)
  "Mirror Adap.exist for non-audio files and update strsize."
  (let* ((path (gr-data-path file-name))
         (attrs (file-attributes path 'string))
         (size (and attrs (nth 7 attrs)))
         (ext (downcase (or (file-name-extension path t) "")))
         (exists (if attrs 1 0)))
    (unless (member ext '(".wav" ".mp3"))
      (gr-set "strsize" (if (integerp size) size 0)))
    exists))

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
Mirrors src/renderer/adapter/bload.ts path resolution and literal file read.
For non-audio data, the TS adapter msgpack-decodes the file before selecting
an entry by OFFSET; this pure elisp runtime stops at the raw-byte boundary and
fails explicitly instead of inventing a decoder."
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
        (error "gr-bload msgpack decode unsupported for %s (bytes=%s data-size=%s offset=%s destination=%s)"
               path
               (buffer-size)
               data-size
               offset
               destination))))))

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

(defun gr-item-info-dim (count)
  "Mirror Class.ItemInfo.dim."
  (gr-record-dim count 30))

(defun gr-charactor-info-dim (count)
  "Mirror Class.CharactorInfo.dim."
  (gr-record-dim count 40))

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
     (t i))))

(defun gr-num (x)
  "Coerce X to a number, matching the generated runtime's TS-style fallback."
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

(defun gr-emit (op &rest args)
  "Collect a GUI/IO command in the sumi stream."
  (push (cons op args) gr-sumi))

(defun gr-reset ()
  "Reset interpreter state (keeps loaded functions)."
  (setq gr-state (make-hash-table :test 'equal))
  (setq gr-sumi nil gr-trace nil gr-missing nil gr-depth 0))

(defun gr-defun (name ir)
  "Register IR for NAME."
  (unless (hash-table-p gr-funcs) (setq gr-funcs (make-hash-table :test 'equal)))
  (puthash name ir gr-funcs))

(defun gr-defnative (name fn)
  "Register native elisp implementation FN for NAME."
  (unless (hash-table-p gr-native-funcs) (setq gr-native-funcs (make-hash-table :test 'equal)))
  (puthash name fn gr-native-funcs))

(defun gr-get (slot)
  (gr-ensure-state)
  (gethash slot gr-state))

(defun gr-set (slot val)
  (gr-ensure-state)
  (puthash slot val gr-state))

(defun gr-step-tick ()
  "Advance the shared step budget, if enabled."
  (when gr-step-budget
    (setq gr-step-count (1+ gr-step-count))
    (when (> gr-step-count gr-step-budget)
      (error "step-budget"))))

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
     ((equal op "math-add") (+ (gr-num (gr-eval (nth 1 form))) (gr-num (gr-eval (nth 2 form)))))
     ((equal op "math-sub") (- (gr-num (gr-eval (nth 1 form))) (gr-num (gr-eval (nth 2 form)))))
     ((equal op "math-mul") (* (gr-num (gr-eval (nth 1 form))) (gr-num (gr-eval (nth 2 form)))))
     ((equal op "bitwise-and") (logand (gr-num (gr-eval (nth 1 form))) (gr-num (gr-eval (nth 2 form)))))
     ((equal op "bitwise-or")  (logior (gr-num (gr-eval (nth 1 form))) (gr-num (gr-eval (nth 2 form)))))
     ((equal op "bitwise-xor") (logxor (gr-num (gr-eval (nth 1 form))) (gr-num (gr-eval (nth 2 form)))))
     ((equal op "math-div") (/ (gr-num (gr-eval (nth 1 form))) (gr-num (gr-eval (nth 2 form)))))
     ((equal op "math-floor") (floor (gr-num (gr-eval (nth 1 form)))))
     ((equal op "math-trunc") (truncate (gr-num (gr-eval (nth 1 form)))))
     ((equal op "math-abs") (abs (gr-num (gr-eval (nth 1 form)))))
     ((equal op "math-mod") (mod (gr-num (gr-eval (nth 1 form))) (gr-num (gr-eval (nth 2 form)))))
     ((equal op "dtw-random") (gr-random (gr-num (gr-eval (nth 1 form)))))
     ((equal op "dtw-read-key-state")
      (gr-read-key-state (gr-eval (nth 1 form))))
     ((equal op "index-ref")
      (gr-index-ref (gr-eval (nth 1 form)) (gr-eval (nth 2 form))))
     ((equal op "i18n-format")
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
   ((stringp (car e))
    (let ((op (car e)))
      (cond
       ((equal op "dtw-debug-print") (push (gr-eval (nth 1 e)) gr-trace))
       ((equal op "core-call")
        (let ((nm (gr-eval (nth 1 e)))
              (args (mapcar #'gr-eval (nthcdr 2 e))))
          (when (stringp nm)
            (when (gr-string-prefix-p "Func." nm) (setq nm (substring nm 5)))
            (apply #'gr-run-func nm args))))
       ((equal op "index-set")
        (let ((arr (gr-eval (nth 1 e))) (i (gr-eval (nth 2 e))) (v (gr-eval (nth 3 e))))
          (when (and (arrayp arr) (integerp i) (>= i 0) (< i (length arr)))
            (aset arr i v))))
       ((gethash op gr-event-names)
        (push (cons op (mapcar #'gr-eval (cdr e))) gr-sumi))
       ((= (length e) 2)
        (gr-set op (gr-eval (nth 1 e))))
       (t                               ; GUI/IO primitive -> sumi stream
        (push (cons op (mapcar #'gr-eval (cdr e))) gr-sumi)))))
   ((consp (car e))                     ; nested sequence of entries
    (dolist (sub e) (gr-exec-entry sub)))
   (t nil)))

(defun gr-run-func (name &rest args)
  "Run the IR or native implementation registered for NAME."
  (let ((ir (and (hash-table-p gr-funcs) (gethash name gr-funcs)))
        (native (and (hash-table-p gr-native-funcs) (gethash name gr-native-funcs))))
    (cond
     ((>= gr-depth gr-depth-limit) (error "depth-limit %s" name))
     ((functionp native)
      (setq gr-depth (1+ gr-depth))
      (unwind-protect
          (apply native args)
        (setq gr-depth (1- gr-depth))))
     ((null ir) (push name gr-missing))
     (t (setq gr-depth (1+ gr-depth))
        (unwind-protect
            (dolist (entry ir) (gr-exec-entry entry))
          (setq gr-depth (1- gr-depth)))))))

(provide 'game-runner)
;;; game-runner.el ends here
