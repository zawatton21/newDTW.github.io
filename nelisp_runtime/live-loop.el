;;; live-loop.el --- resident elisp loop driving live player/enemy motion -*- coding: utf-8; -*-
;;
;; Usage: concatenate with the rest of the interpreter/runtime, in this order,
;; then load the concatenation (this file replaces run-map-dump.el -- do not
;; load both in the same session, they both seed gr-state):
;;
;;   cat nelisp_runtime/{game-runner.el,gamedata-simple.el,gamedata-conditional.el,\
;;       gamedata-state.el,sumi-json.el,live-loop.el} > _live.el
;;   emacs -Q --batch \
;;     --eval "(progn (prefer-coding-system 'utf-8) (setq coding-system-for-write 'utf-8))" \
;;     -l _live.el
;;
;; Run from the repo root -- `gr-live-frame-path' below is relative to CWD.
;; On load this file seeds gr-state once (gr-reset + gr-seed-state) and then
;; runs an autonomous simulation loop for `gr-live-duration-seconds' (override
;; by (setq gr-live-duration-seconds N) in an --eval BEFORE `-l' this file --
;; a defvar only takes effect if the variable is still unbound, so a prior
;; --eval setq sticks). Each tick:
;;   1. steps the player one cell along walkable var_71 floor, turning at
;;      obstacles/map edges (deterministic clockwise-turn patrol);
;;   2. steps the first active var_83 enemy one cell toward the player,
;;      keeping the var_82 occupancy grid in sync;
;;   3. clears the per-frame sumi collectors and redraws via func337;
;;   4. writes the frame JSON to `gr-live-frame-path' atomically (write a
;;      .tmp file, then rename-file over the real path) for
;;      tools/live_feed_loop.js to pick up and forward to the sumi bridge.
;; Prints "FRAME N player=X,Y" every `gr-live-report-every' frames and
;; "LIVE-LOOP-DONE N" (N = total frames written) when the loop ends.
;;
;; Input-driven play (set `gr-live-input-mode' t via --eval BEFORE -l this
;; file, same convention as `gr-live-duration-seconds'): step 1 above is
;; replaced by `gr-live-step-player-input', which polls `gr-live-input-path'
;; (default "build/key-state.txt", written by tools/key_input_server.js) for
;; a new "<TOKEN> <SEQ>" line once per tick and moves the player one cell in
;; TOKEN's direction the first tick a given SEQ is seen -- one keypress, one
;; step, no key repeat/auto-move.  Steps 2-4 (enemy chase, collector clear,
;; frame write) are unchanged in either mode.

(defvar gr-live-duration-seconds 60
  "How long `gr-live-run' runs before returning, in seconds.")

(defvar gr-live-tick-seconds 0.15
  "Sleep between simulation ticks, in seconds.")

(defvar gr-live-report-every 20
  "Print a progress line every N frames.")

(defvar gr-live-frame-path "build/frame-current.json"
  "Output path for the current frame JSON (relative to CWD = repo root).")

(defvar gr-live-player-dir 6
  "Current player patrol heading: numpad-style 8/2/4/6 = up/down/left/right.")

(defvar gr-live-enemy-idx nil
  "var_83 index of the enemy under our control, set by `gr-live-find-enemy'.")

(defconst gr-live-dir-order '(6 2 4 8)
  "Clockwise direction cycle (right down left up) used for patrol turning.")

(defconst gr-live-dir-delta
  '((8 . (0 . -1)) (2 . (0 . 1)) (4 . (-1 . 0)) (6 . (1 . 0)))
  "numpad direction code -> (dx . dy) cell delta.")

(defvar gr-live-input-mode nil
  "When non-nil, the player is driven by `gr-live-step-player-input' (real
keypresses relayed through `gr-live-input-path' by tools/key_input_server.js)
instead of the synthetic clockwise patrol in `gr-live-step-player'.  Default
nil so the existing patrol demo is unaffected; set with a --eval BEFORE -l
this file, same convention as `gr-live-duration-seconds'.  Enemy chase is
identical in both modes.")

(defvar gr-live-input-path "build/key-state.txt"
  "Path (relative to CWD = repo root) that tools/key_input_server.js writes
\"<TOKEN> <SEQ>\" lines to; polled once per tick when `gr-live-input-mode'.")

(defvar gr-live-input-last-seq 0
  "Last SEQ consumed from `gr-live-input-path'.  A keypress only moves the
player on the first tick its SEQ is observed (SEQ > this value); seeded from
whatever is already on disk at `gr-live-run' startup so a stale keypress
left over from a previous session is not replayed as the first move.")

(defconst gr-live-input-dir-alist
  '(("UP" . 8) ("DOWN" . 2) ("LEFT" . 4) ("RIGHT" . 6))
  "Direction token written by tools/key_input_server.js -> numpad heading
code, using the same 8/2/4/6 = up/down/left/right convention as
`gr-live-dir-delta'.")

(defconst gr-live-grid-size 70
  "Width/height of the var_71/var_82 dungeon grids.")

(defun gr-live-in-bounds-p (x y)
  "Non-nil if (X . Y) is inside the 70x70 dungeon grid."
  (and (integerp x) (integerp y)
       (>= x 0) (< x gr-live-grid-size)
       (>= y 0) (< y gr-live-grid-size)))

(defun gr-live-floor-p (x y)
  "Non-nil if (X . Y) is in-bounds and walkable.
var_71 semantics (confirmed against the item-placement/room logic and by
rendering the result): 0 = ungenerated void outside the dungeon rooms,
13 = solid wall/pillar block, and the 1..12 family = generated walkable
floor variants (the captured snapshot's room is all value 1). Only 1..12
is walkable -- treating 0 as floor lets actors wander off into the void."
  (and (gr-live-in-bounds-p x y)
       (let ((v (gr-index-ref (gr-index-ref (gr-get 71) x) y)))
         (and (integerp v) (>= v 1) (<= v 12)))))

(defun gr-live-enemy-slot-free-p (x y)
  "Non-nil if (X . Y) has no other enemy occupying var_82."
  (and (gr-live-in-bounds-p x y)
       (let ((v (gr-index-ref (gr-index-ref (gr-get 82) x) y)))
         (or (null v) (equal v 0)))))

(defun gr-live-dir-index (dir)
  "Position of DIR in `gr-live-dir-order', or nil."
  (let ((lst gr-live-dir-order) (i 0) (found nil))
    (while (and (not found) lst)
      (when (equal (car lst) dir) (setq found i))
      (setq lst (cdr lst))
      (setq i (1+ i)))
    found))

(defun gr-live-find-enemy ()
  "Return the first active (Var0 non-zero) index >=1 in var_83, or nil."
  (let ((records (gr-get 83)) (idx nil) (i 1) (n 0))
    (when (arrayp records)
      (setq n (length records))
      (while (and (not idx) (< i n))
        (let ((rec (gr-index-ref records i)))
          (when (and (vectorp rec) (> (length rec) 0) (not (equal (aref rec 0) 0)))
            (setq idx i)))
        (setq i (1+ i))))
    idx))

(defun gr-live-step-player ()
  "Advance the player one cell along walkable floor, turning at obstacles.
Tries the current heading first, then cycles clockwise through the other
three headings; if all four are blocked the player stays put this tick."
  (let* ((px (gr-num (gr-get 66)))
         (py (gr-num (gr-get 67)))
         (start (or (gr-live-dir-index gr-live-player-dir) 0))
         (i 0)
         (moved nil))
    (while (and (not moved) (< i 4))
      (let* ((dir (nth (mod (+ start i) 4) gr-live-dir-order))
             (delta (cdr (assq dir gr-live-dir-delta)))
             (nx (+ px (car delta)))
             (ny (+ py (cdr delta))))
        (when (gr-live-floor-p nx ny)
          (gr-set 66 nx)
          (gr-set 67 ny)
          (setq gr-live-player-dir dir)
          (setq moved t)))
      (setq i (1+ i)))
    moved))

(defun gr-live-read-key-state ()
  "Read and parse `gr-live-input-path' as \"TOKEN SEQ\".
Returns (TOKEN . SEQ) with SEQ coerced to a number, or nil if the file is
absent, empty, malformed, or names a token not in `gr-live-input-dir-alist'.
Plain elisp file I/O only (insert-file-contents into a temp buffer) -- no
subr-x dependency, matching the rest of this runtime's style."
  (when (file-exists-p gr-live-input-path)
    (condition-case nil
        (with-temp-buffer
          (insert-file-contents gr-live-input-path)
          (let ((parts (split-string (buffer-string) "[ \t\r\n]+" t)))
            (when (= (length parts) 2)
              (let ((token (nth 0 parts))
                    (seq (string-to-number (nth 1 parts))))
                (when (and (assoc token gr-live-input-dir-alist) (> seq 0))
                  (cons token seq))))))
      (error nil))))

(defun gr-live-step-player-input ()
  "Advance the player one cell per NEW keypress from `gr-live-input-path'.
A keypress counts as new when its SEQ is greater than
`gr-live-input-last-seq' (which this function updates unconditionally once a
new SEQ is seen, whether or not the move below actually succeeds -- so a
keypress into a wall is still consumed, not retried next tick).  No file, no
new SEQ, or a target cell that fails `gr-live-floor-p' all leave the player
standing still this tick.  Does not touch enemy state."
  (let ((ks (gr-live-read-key-state)))
    (when (and ks (> (cdr ks) gr-live-input-last-seq))
      (setq gr-live-input-last-seq (cdr ks))
      (let* ((dir (cdr (assoc (car ks) gr-live-input-dir-alist)))
             (delta (cdr (assq dir gr-live-dir-delta)))
             (px (gr-num (gr-get 66)))
             (py (gr-num (gr-get 67)))
             (nx (+ px (car delta)))
             (ny (+ py (cdr delta))))
        (when (gr-live-floor-p nx ny)
          (gr-set 66 nx)
          (gr-set 67 ny)
          (setq gr-live-player-dir dir)
          t)))))

(defun gr-live-step-target-ok (x y px py)
  "Non-nil if (X . Y) is a legal enemy destination.
In bounds, walkable floor, not occupied by another enemy, and not the
player's own cell (so the enemy visibly chases rather than overlapping it)."
  (and (gr-live-floor-p x y)
       (gr-live-enemy-slot-free-p x y)
       (not (and (equal x px) (equal y py)))))

(defun gr-live-step-enemy ()
  "Advance the controlled enemy one cell toward the player.
Greedy chase: try to close the axis with the larger gap first, falling back
to the other axis; updates both the var_83 record (Var1/Var2) and the var_82
occupancy grid (clear old cell, mark new cell with our index)."
  (when gr-live-enemy-idx
    (let ((rec (gr-index-ref (gr-get 83) gr-live-enemy-idx)))
      (when (and (vectorp rec) (not (equal (aref rec 0) 0)))
        (let* ((ex (gr-num (gr-prop-ref rec "Var1")))
               (ey (gr-num (gr-prop-ref rec "Var2")))
               (px (gr-num (gr-get 66)))
               (py (gr-num (gr-get 67)))
               (dx (cond ((> px ex) 1) ((< px ex) -1) (t 0)))
               (dy (cond ((> py ey) 1) ((< py ey) -1) (t 0)))
               (nx nil) (ny nil) (moved nil))
          (if (>= (abs (- px ex)) (abs (- py ey)))
              (progn
                (when (and (/= dx 0) (gr-live-step-target-ok (+ ex dx) ey px py))
                  (setq nx (+ ex dx) ny ey moved t))
                (when (and (not moved) (/= dy 0) (gr-live-step-target-ok ex (+ ey dy) px py))
                  (setq nx ex ny (+ ey dy) moved t)))
            (progn
              (when (and (/= dy 0) (gr-live-step-target-ok ex (+ ey dy) px py))
                (setq nx ex ny (+ ey dy) moved t))
              (when (and (not moved) (/= dx 0) (gr-live-step-target-ok (+ ex dx) ey px py))
                (setq nx (+ ex dx) ny ey moved t))))
          (when moved
            (when (gr-live-in-bounds-p ex ey)
              (aset (gr-index-ref (gr-get 82) ex) ey 0))
            (aset (gr-index-ref (gr-get 82) nx) ny gr-live-enemy-idx)
            (gr-prop-set rec "Var1" nx)
            (gr-prop-set rec "Var2" ny))
          moved)))))

(defun gr-live-write-frame (json)
  "Atomically write JSON to `gr-live-frame-path' (write .tmp, then rename)."
  (let ((tmp-path (concat gr-live-frame-path ".tmp"))
        (coding-system-for-write 'utf-8))
    (unless (file-directory-p (file-name-directory gr-live-frame-path))
      (make-directory (file-name-directory gr-live-frame-path) t))
    (write-region json nil tmp-path nil 'silent)
    (rename-file tmp-path gr-live-frame-path t)))

(defun gr-live-run ()
  "Seed state once, then simulate+redraw+stream frames for `gr-live-duration-seconds'."
  (gr-reset)
  (gr-seed-state)
  (setq gr-live-enemy-idx (gr-live-find-enemy))
  (when gr-live-input-mode
    ;; Seed the consumed-SEQ watermark from whatever is already on disk so a
    ;; keypress left over from a previous session (or the key server started
    ;; before this loop) is not replayed as the first move.
    (let ((ks (gr-live-read-key-state)))
      (when ks (setq gr-live-input-last-seq (cdr ks)))))
  (princ (format "LIVE-LOOP-START player=%s,%s enemy-idx=%s duration=%s input-mode=%s\n"
                 (gr-get 66) (gr-get 67) gr-live-enemy-idx gr-live-duration-seconds
                 gr-live-input-mode))
  (let ((start (float-time))
        (frame 0))
    (while (< (- (float-time) start) gr-live-duration-seconds)
      (if gr-live-input-mode (gr-live-step-player-input) (gr-live-step-player))
      (when gr-live-enemy-idx (gr-live-step-enemy))
      (setq gr-sumi nil gr-trace nil gr-missing nil)
      (setq gr-step-count 0)
      (condition-case err
          (gr-run-func "func337")
        (error (princ (format "FRAME-ERROR %s\n" (error-message-string err)))))
      (gr-live-write-frame (gr-sumi-to-json))
      (setq frame (1+ frame))
      (when (= 0 (mod frame gr-live-report-every))
        (princ (format "FRAME %d player=%s,%s\n" frame (gr-get 66) (gr-get 67))))
      (sleep-for gr-live-tick-seconds))
    (princ (format "LIVE-LOOP-DONE %d\n" frame))))

(gr-live-run)

(provide 'live-loop)
;;; live-loop.el ends here
