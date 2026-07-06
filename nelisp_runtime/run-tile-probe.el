;;; run-tile-probe.el --- water-edge movement regression probe -*- coding: utf-8; -*-

(defun gr-tile-probe-tile-at (x y)
  "Return var_71[X][Y]."
  (gr-index-ref (gr-index-ref (gr-get 71) x) y))

(defun gr-tile-probe-floor-p (tile)
  "Return non-nil when TILE is a normal walkable floor."
  (and (numberp tile) (>= tile 1) (<= tile 12)))

(defun gr-tile-probe-adjacent-to-void-p (x y)
  "Return non-nil when X,Y touches at least one void tile."
  (let ((neighbors (list (list (1- x) y)
                         (list (1+ x) y)
                         (list x (1- y))
                         (list x (1+ y))))
        (found nil))
    (while (and neighbors (not found))
      (let* ((cell (car neighbors))
             (tile (gr-tile-probe-tile-at (nth 0 cell) (nth 1 cell))))
        (when (equal tile 0)
          (setq found t)))
      (setq neighbors (cdr neighbors)))
    found))

(defun gr-tile-probe-find-edge-path ()
  "Return (START-X START-Y DEST-X DEST-Y DIR VOID-X VOID-Y) for a floor edge walk."
  (let ((limit-x (gr-num (or (gr-get 31) 0)))
        (limit-y (gr-num (or (gr-get 32) 0)))
        (x 1)
        (y 1)
        (result nil))
    (while (and (< y (1- limit-y)) (null result))
      (setq x 1)
      (while (and (< x (1- limit-x)) (null result))
        (when (and (gr-tile-probe-floor-p (gr-tile-probe-tile-at x y))
                   (gr-tile-probe-adjacent-to-void-p x y))
          (dolist (candidate '((1 0 6) (-1 0 4) (0 1 2) (0 -1 8)))
            (let* ((dx (nth 0 candidate))
                   (dy (nth 1 candidate))
                   (dir (nth 2 candidate))
                   (nx (+ x dx))
                   (ny (+ y dy)))
              (when (and (null result)
                         (gr-tile-probe-floor-p (gr-tile-probe-tile-at nx ny))
                         (gr-tile-probe-adjacent-to-void-p nx ny))
                (setq result (list x y nx ny dir))))))
        (setq x (1+ x)))
      (setq y (1+ y)))
    result))

(defun gr-tile-probe-find-void-step (start-x start-y)
  "Return (START-X START-Y VOID-X VOID-Y DIR) for one direct void step."
  (let ((candidates '((1 0 6) (-1 0 4) (0 1 2) (0 -1 8)))
        (result nil))
    (while (and candidates (null result))
      (let* ((candidate (car candidates))
             (dx (nth 0 candidate))
             (dy (nth 1 candidate))
             (dir (nth 2 candidate))
             (nx (+ start-x dx))
             (ny (+ start-y dy)))
        (when (equal (gr-tile-probe-tile-at nx ny) 0)
          (setq result (list start-x start-y nx ny dir))))
      (setq candidates (cdr candidates)))
    result))

(defvar gr-tile-probe-func009-count 0)
(defvar gr-tile-probe-func019-count 0)
(defvar gr-tile-probe-orig-func009 nil)
(defvar gr-tile-probe-orig-func019 nil)
(defvar gr-tile-probe-orig-func080 nil)

(defun gr-tile-probe-wrap-func009 (&rest _args)
  "Count blocked/void fallbacks without entering the main loop."
  (setq gr-tile-probe-func009-count (1+ gr-tile-probe-func009-count))
  nil)

(defun gr-tile-probe-wrap-func019 (&rest _args)
  "Count successful turn handoffs without running enemy AI."
  (setq gr-tile-probe-func019-count (1+ gr-tile-probe-func019-count))
  nil)

(defun gr-tile-probe-wrap-func080 (&rest _args)
  "Keep key polling side-effect free."
  nil)

(defun gr-tile-probe-install-wrappers ()
  "Install local wrappers for the probe."
  (setq gr-tile-probe-orig-func009 (gethash "func009" gr-native-funcs))
  (setq gr-tile-probe-orig-func019 (gethash "func019" gr-native-funcs))
  (setq gr-tile-probe-orig-func080 (gethash "func080" gr-native-funcs))
  (gr-defnative "func009" #'gr-tile-probe-wrap-func009)
  (gr-defnative "func019" #'gr-tile-probe-wrap-func019)
  (gr-defnative "func080" #'gr-tile-probe-wrap-func080))

(defun gr-tile-probe-restore-wrappers ()
  "Restore wrappers replaced for the probe."
  (when gr-tile-probe-orig-func009
    (gr-defnative "func009" gr-tile-probe-orig-func009))
  (when gr-tile-probe-orig-func019
    (gr-defnative "func019" gr-tile-probe-orig-func019))
  (when gr-tile-probe-orig-func080
    (gr-defnative "func080" gr-tile-probe-orig-func080)))

(defun gr-tile-probe-run-move (start-x start-y dest-x dest-y dir)
  "Run func015 once from START-X,START-Y to DEST-X,DEST-Y in DIR."
  (setq gr-tile-probe-func009-count 0
        gr-tile-probe-func019-count 0)
  (gr-set 66 dest-x)
  (gr-set 67 dest-y)
  (gr-set 236 start-x)
  (gr-set 237 start-y)
  (gr-set 199 dir)
  (gr-set 125 0)
  (gr-set 126 0)
  (gr-set 128 0)
  (gr-set 159 0)
  (gr-set 178 0)
  (gr-set 213 0)
  (gr-set 214 0)
  (gr-set 217 0)
  (gr-set 218 0)
  (gr-set 219 0)
  (gr-set "key_X_on" 0)
  (gr-set 211 15)
  (gr-set 212 0)
  (gr-run-func "func015")
  (list :x (gr-get 66)
        :y (gr-get 67)
        :hp (gr-get 211)
        :blocked gr-tile-probe-func009-count
        :turn gr-tile-probe-func019-count))

(defun gr-tile-probe-set-cell (grid x y value)
  "Set GRID[X][Y] to VALUE when the coordinates are in range."
  (let ((row (and (vectorp grid) (gr-index-ref grid x))))
    (when (and (vectorp row) (>= y 0) (< y (length row)))
      (aset row y value))))

(defun gr-tile-probe-find-item-slot ()
  "Return the first free floor-item slot."
  (let ((rows (gr-get 78))
        (idx 1)
        (found 0))
    (while (and (vectorp rows) (< idx (length rows)) (= found 0))
      (when (equal (gr-prop-ref (aref rows idx) "Var0") 0)
        (setq found idx))
      (setq idx (1+ idx)))
    found))

(defun gr-tile-probe-clear-item-slot (slot)
  "Zero every field in floor item SLOT."
  (let ((rows (gr-get 78))
        (row nil)
        (idx 0))
    (when (and (vectorp rows) (> slot 0) (< slot (length rows)))
      (setq row (aref rows slot))
      (while (< idx (length row))
        (aset row idx 0)
        (setq idx (1+ idx))))))

(defun gr-tile-probe-place-item (x y item-id &optional amount-or-rarity step-only-flag)
  "Place ITEM-ID on map cell X,Y and return the allocated floor slot."
  (let* ((slot (gr-tile-probe-find-item-slot))
         (rows (gr-get 78))
         (row nil)
         (old-slot (gr-index-ref (gr-index-ref (gr-get 77) x) y)))
    (unless (> slot 0)
      (error "item probe could not find a free floor-item slot"))
    (when (and (numberp old-slot) (> old-slot 0))
      (gr-tile-probe-clear-item-slot old-slot))
     (setq row (aref rows slot))
     (gr-tile-probe-clear-item-slot slot)
     (gr-prop-set row "Var0" item-id)
    (gr-prop-set row "Var1" x)
    (gr-prop-set row "Var2" y)
    (gr-prop-set row "Var3" 1)
    (gr-prop-set row "Var6" 0)
    (gr-prop-set row "Var7" 0)
     (gr-prop-set row "Var11" (or step-only-flag 0))
     (gr-prop-set row "Var13" (or amount-or-rarity 1))
     (gr-prop-set row "Var15" 0)
     (gr-tile-probe-set-cell (gr-get 77) x y slot)
     slot))

(defun gr-tile-probe-clear-belongings ()
  "Reset the inventory rows used by func400 item pickup."
  (let ((rows (gr-get 233))
        (idx 0)
        (row nil)
        (slot 1))
    (gr-set 224 0)
    (gr-set 225 0)
    (while (and (vectorp rows) (< slot (length rows)))
      (setq row (aref rows slot))
      (setq idx 0)
      (while (< idx (length row))
        (aset row idx 0)
        (setq idx (1+ idx)))
      (setq slot (1+ slot)))))

(defun gr-tile-probe-run-move-with-real-turn (start-x start-y dest-x dest-y dir)
  "Run one move through real func019 but stub enemy-phase func020."
  (let ((saved-func009 (gethash "func009" gr-native-funcs))
        (saved-func020 (gethash "func020" gr-native-funcs))
        (saved-func080 (gethash "func080" gr-native-funcs)))
    (unwind-protect
        (progn
          (setq gr-trace nil
                gr-missing nil
                gr-sumi nil)
          (gr-defnative "func009" #'gr-tile-probe-wrap-func009)
          (gr-defnative "func020" (lambda (&rest _args) nil))
          (gr-defnative "func080" #'gr-tile-probe-wrap-func080)
          (gr-set 66 dest-x)
          (gr-set 67 dest-y)
          (gr-set 236 start-x)
          (gr-set 237 start-y)
          (gr-set 199 dir)
          (gr-set 125 0)
          (gr-set 126 0)
          (gr-set 128 0)
          (gr-set 159 0)
          (gr-set 178 0)
          (gr-set 213 0)
          (gr-set 214 0)
          (gr-set 217 0)
          (gr-set 218 0)
          (gr-set 219 0)
          (gr-set "key_X_on" 0)
          (gr-run-func "func015")
          (list :x (gr-get 66)
                :y (gr-get 67)
                :wallet (gr-get "wallet")
                :items (gr-get 224)
                :floor-item-menu gr-tile-probe-func009-count
                :trace (reverse gr-trace)
                :missing (reverse gr-missing)))
      (if saved-func009
          (gr-defnative "func009" saved-func009)
        (when gr-native-funcs
          (remhash "func009" gr-native-funcs)))
      (if saved-func020
          (gr-defnative "func020" saved-func020)
        (when gr-native-funcs
          (remhash "func020" gr-native-funcs)))
      (if saved-func080
          (gr-defnative "func080" saved-func080)
        (when gr-native-funcs
          (remhash "func080" gr-native-funcs))))))

(defun gr-tile-probe-setup-ground-pickup-state (item-id)
  "Mirror func009.ts floor-item pickup-menu setup for ITEM-ID."
  (gr-set 213 0)
  (gr-set 214 0)
  (gr-set 198 0)
  (gr-set 195 0)
  (gr-set 196 0)
  (gr-set "open_item_menue" 1)
  (gr-set 220 0)
  (gr-set 221 1)
  (gr-set 222 10)
  (gr-set 223 (+ (gr-num (gr-get 224)) 10))
  (gr-set 225 0)
  (gr-set "item_page_number" 3)
  (gr-set "Y_axis_item_position" 45)
  (gr-set 229 44)
  (gr-set 230 45)
  (gr-set 231 1)
  (gr-set "belongings_item_list" item-id))

(defun gr-tile-probe-with-disabled-natives (names thunk)
  "Temporarily remove native and IR implementations NAMES while THUNK runs."
  (let ((saved nil))
    (dolist (name names)
      (push (list name
                  (and gr-native-funcs (gethash name gr-native-funcs))
                  (and gr-funcs (gethash name gr-funcs)))
            saved)
      (when gr-native-funcs
        (remhash name gr-native-funcs))
      (when gr-funcs
        (remhash name gr-funcs)))
    (unwind-protect
        (funcall thunk)
      (dolist (entry saved)
        (let ((name (nth 0 entry))
              (native (nth 1 entry))
              (ir (nth 2 entry)))
          (if native
              (gr-defnative name native)
            (when gr-native-funcs
              (remhash name gr-native-funcs)))
          (if ir
              (puthash name ir gr-funcs)
            (when gr-funcs
              (remhash name gr-funcs))))))))

(defun gr-tile-probe-dump-frame (test-root label)
  "Write current frame records to TEST-ROOT/LABEL-frame.el and return the path."
  (let ((path (expand-file-name (format "%s-frame.el" label) test-root))
        (coding-system-for-write 'utf-8))
    (with-temp-file path
      (prin1 (reverse gr-sumi) (current-buffer))
      (insert "\n"))
    path))

(defun gr-tile-probe-frame-records (predicate)
  "Return chronological gr-sumi records matching PREDICATE."
  (let ((out nil))
    (dolist (entry (reverse gr-sumi))
      (when (funcall predicate entry)
        (push entry out)))
    (nreverse out)))

(defun gr-tile-probe-run-disc-menu-missing (item-id)
  "Return the old missing list for the floor-disc pickup menu."
  (gr-tile-probe-clear-belongings)
  (gr-tile-probe-setup-ground-pickup-state item-id)
  (setq gr-trace nil
        gr-missing nil
        gr-sumi nil)
  (gr-tile-probe-with-disabled-natives
   '("func463" "func464" "func465")
   (lambda ()
     (gr-run-func "func462")
     (reverse gr-missing))))

(defun gr-tile-probe-run-disc-pickup (start-x start-y dest-x dest-y dir item-id)
  "Walk onto a disc, then confirm the pickup submenu and return evidence."
  (let ((move nil)
        (slot 0)
        (saved-func051 nil)
        (saved-func080 nil)
        (saved-func420 nil)
        (before-items 0))
    (gr-tile-probe-clear-belongings)
    (setq before-items (gr-num (or (gr-get 224) 0)))
    (setq slot (gr-tile-probe-place-item dest-x dest-y item-id 1 1))
    (setq move (gr-tile-probe-run-move-with-real-turn start-x start-y dest-x dest-y dir))
    (gr-tile-probe-setup-ground-pickup-state item-id)
    (setq saved-func051 (gethash "func051" gr-native-funcs))
    (setq saved-func080 (gethash "func080" gr-native-funcs))
    (setq saved-func420 (gethash "func420" gr-native-funcs))
    (unwind-protect
        (progn
          (setq gr-trace nil
                gr-missing nil
                gr-sumi nil)
          (gr-defnative "func051" (lambda (&rest _args) nil))
          (gr-defnative "func080" (lambda (&rest _args) nil))
          (gr-defnative "func420" (lambda (&rest _args) nil))
          (gr-set "key_Z_on" 1)
          (gr-set "key_A_on" 0)
          (gr-set "key_X_on" 0)
          (gr-run-func "func462")
          (list :move move
                :slot slot
                :before-items before-items
                :after-items (gr-get 224)
                :picked-id (gr-prop-ref (gr-index-ref (gr-get 233) (gr-get 224)) "Var0")
                :picked-row (gr-index-ref (gr-get 233) (gr-get 224))
                :ground-slot (gr-index-ref (gr-index-ref (gr-get 77) dest-x) dest-y)
                :missing (reverse gr-missing)
                :trace (reverse gr-trace)))
      (gr-set "key_Z_on" 0)
      (gr-set "key_A_on" 0)
      (gr-set "key_X_on" 0)
      (if saved-func051
          (gr-defnative "func051" saved-func051)
        (when gr-native-funcs
          (remhash "func051" gr-native-funcs)))
      (if saved-func080
          (gr-defnative "func080" saved-func080)
        (when gr-native-funcs
          (remhash "func080" gr-native-funcs)))
      (if saved-func420
          (gr-defnative "func420" saved-func420)
        (when gr-native-funcs
          (remhash "func420" gr-native-funcs))))))

(defun gr-tile-probe-find-adjacent-floor (x y)
  "Return an adjacent floor cell near X,Y, or nil."
  (let ((candidates '((-1 1) (0 1) (1 1) (-1 0) (1 0) (-1 -1) (0 -1) (1 -1)))
        (found nil))
    (while (and candidates (null found))
      (let* ((candidate (car candidates))
             (nx (+ x (nth 0 candidate)))
             (ny (+ y (nth 1 candidate))))
        (when (and (gr-tile-probe-floor-p (gr-tile-probe-tile-at nx ny))
                   (equal (gr-index-ref (gr-index-ref (gr-get 82) nx) ny) 0))
          (setq found (list nx ny))))
      (setq candidates (cdr candidates)))
    found))

(defun gr-tile-probe-run-money-pickup (test-root start-x start-y dest-x dest-y dir amount)
  "Walk onto money, render one frame, and return evidence."
  (let ((move nil)
        (frame-path nil)
        (text-records nil)
        (frame-records nil))
    (gr-tile-probe-place-item dest-x dest-y 1 amount)
    (setq move (gr-tile-probe-run-move-with-real-turn start-x start-y dest-x dest-y dir))
    (setq gr-sumi nil
          gr-trace nil
          gr-missing nil)
    (gr-run-func "func337")
    (setq frame-path (gr-tile-probe-dump-frame test-root "money-pickup"))
    (setq text-records
          (gr-tile-probe-frame-records
           (lambda (entry)
             (and (equal (car entry) "gui-draw-text")
                  (stringp (nth 1 entry))
                  (> (length (nth 1 entry)) 0)))))
    (setq frame-records
          (gr-tile-probe-frame-records
           (lambda (entry)
             (and (equal (car entry) "gui-draw-image-scaled")
                  (= (or (nth 1 entry) -1) 12)
                  (= (or (nth 2 entry) -1) 0)
                  (= (or (nth 3 entry) -1) 0)
                  (= (or (nth 4 entry) -1) 40)
                  (= (or (nth 5 entry) -1) 64)))))
    (list :move move
          :frame frame-path
          :text-records text-records
          :frame-records frame-records
          :comments-row1 (gr-get "comments_row1")
          :message-open (gr-get 198)
          :missing (reverse gr-missing)
          :trace (reverse gr-trace))))

(defun gr-tile-probe-run-rotate-arrow (test-root)
  "Render one held-C frame and return the arrow draw evidence."
  (let ((saved-func009 (gethash "func009" gr-native-funcs))
        (saved-func051 (gethash "func051" gr-native-funcs))
        (saved-func080 (gethash "func080" gr-native-funcs))
        (enemy-idx (gr-tile-probe-find-enemy-slot))
        (placement nil)
        (rows (gr-get 83))
        (occ (gr-get 82))
        (row nil)
        (frame-path nil)
        (arrow-records nil)
        (result nil))
    (unwind-protect
        (progn
          (unless (> enemy-idx 0)
            (error "rotate probe could not find a live enemy slot"))
          (setq placement (gr-tile-probe-find-adjacent-floor (gr-get 66) (gr-get 67)))
          (unless placement
            (error "rotate probe could not place an adjacent enemy"))
          (gr-tile-probe-clear-other-enemies enemy-idx)
          (setq row (aref rows enemy-idx))
          (gr-prop-set row "Var1" (nth 0 placement))
          (gr-prop-set row "Var2" (nth 1 placement))
          (gr-tile-probe-set-cell occ (nth 0 placement) (nth 1 placement) enemy-idx)
          (setq gr-sumi nil
                gr-trace nil
                gr-missing nil)
          (gr-defnative "func009" (lambda (&rest _args) nil))
          (gr-defnative "func051" (lambda (&rest _args) nil))
          (gr-defnative "func080" (lambda (&rest _args) nil))
          ;; Let func010 enter the rotate overlay, then make func012 take the
          ;; X-exit path after drawing one frame instead of recursing on held C.
          (gr-set "key_X_on" 1)
          (gr-set "key_A_on" 0)
          (gr-set "key_C_on" 0)
          (gr-run-func "func010")
          (setq frame-path (gr-tile-probe-dump-frame test-root "rotate-arrow"))
          (setq arrow-records
                (gr-tile-probe-frame-records
                 (lambda (entry)
                   (and (equal (car entry) "gui-draw-image-scaled")
                        (= (or (nth 1 entry) -1) 3)
                        (member (nth 2 entry) '(280 320 360 400 440 480 520 560))
                        (= (or (nth 3 entry) -1) 360)
                        (= (or (nth 4 entry) -1) 40)
                        (= (or (nth 5 entry) -1) 40))))))
           (setq result
                 (list :frame frame-path
                       :arrow-records arrow-records
                       :enemy-slot enemy-idx
                       :enemy-pos placement
                       :missing (reverse gr-missing)
                       :trace (reverse gr-trace))))
      (gr-set "key_X_on" 0)
      (gr-set "key_A_on" 0)
      (gr-set "key_C_on" 0)
      (if saved-func009
          (gr-defnative "func009" saved-func009)
        (when gr-native-funcs
          (remhash "func009" gr-native-funcs)))
      (if saved-func051
          (gr-defnative "func051" saved-func051)
        (when gr-native-funcs
          (remhash "func051" gr-native-funcs)))
      (if saved-func080
          (gr-defnative "func080" saved-func080)
        (when gr-native-funcs
          (remhash "func080" gr-native-funcs)))
    result))

(defun gr-tile-probe-find-enemy-slot ()
  "Return the first live enemy slot."
  (let ((rows (gr-get 83))
        (idx 1)
        (found 0))
    (while (and (vectorp rows) (< idx (length rows)) (equal found 0))
      (when (and (not (equal (gr-prop-ref (aref rows idx) "Var0") 0))
                 (> (gr-num (or (gr-prop-ref (aref rows idx) "Var3") 0)) 0))
        (setq found idx))
      (setq idx (1+ idx)))
    found))

(defun gr-tile-probe-clear-other-enemies (keep-idx)
  "Zero every enemy row except KEEP-IDX and clear the occupancy map."
  (let ((rows (gr-get 83))
        (occ (gr-get 82))
        (idx 1)
        (row nil)
        (x 0)
        (y 0)
        (slot 0))
    (while (and (vectorp rows) (< idx (length rows)))
      (setq row (aref rows idx))
      (setq x (gr-num (or (gr-prop-ref row "Var1") 0)))
      (setq y (gr-num (or (gr-prop-ref row "Var2") 0)))
      (when (and (> x 0) (> y 0))
        (gr-tile-probe-set-cell occ x y 0))
      (unless (equal idx keep-idx)
        (setq slot 0)
        (while (< slot (length row))
          (aset row slot 0)
          (setq slot (1+ slot))))
      (setq idx (1+ idx)))
    (gr-set 97 1)))

(defun gr-tile-probe-find-enemy-placement (player-x player-y)
  "Return (EX EY) near PLAYER-X,PLAYER-Y on clear floor."
  (let ((candidates '((2 0) (-2 0) (0 2) (0 -2)
                      (2 1) (2 -1) (-2 1) (-2 -1)
                      (1 2) (-1 2) (1 -2) (-1 -2)
                      (3 0) (-3 0) (0 3) (0 -3)))
        (found nil))
    (while (and candidates (null found))
      (let* ((candidate (car candidates))
             (dx (nth 0 candidate))
             (dy (nth 1 candidate))
             (enemy-x (+ player-x dx))
             (enemy-y (+ player-y dy)))
        (when (and (gr-tile-probe-floor-p (gr-tile-probe-tile-at enemy-x enemy-y))
                   (equal (gr-index-ref (gr-index-ref (gr-get 82) enemy-x) enemy-y) 0))
          (setq found (list enemy-x enemy-y))))
      (setq candidates (cdr candidates)))
    found))

(defun gr-tile-probe-run-enemy-move (start-x start-y dest-x dest-y dir)
  "Run one real move and return enemy-phase evidence."
  (let* ((enemy-idx (gr-tile-probe-find-enemy-slot))
         (rows (gr-get 83))
         (occ (gr-get 82))
         (placement (gr-tile-probe-find-enemy-placement dest-x dest-y))
         (row nil)
         (before nil)
         (after nil)
         (hp-before 0)
         (hp-after 0)
         (trace nil))
    (unless (and (> enemy-idx 0) placement)
      (error "enemy probe could not place a test enemy"))
    (gr-tile-probe-clear-other-enemies enemy-idx)
    (setq row (aref rows enemy-idx))
    (gr-set 66 start-x)
    (gr-set 67 start-y)
    (gr-set 236 start-x)
    (gr-set 237 start-y)
    (gr-set 199 dir)
    (gr-set 125 0)
    (gr-set 126 0)
    (gr-set 128 0)
    (gr-set 159 0)
    (gr-set 178 0)
    (gr-set 213 0)
    (gr-set 214 0)
    (gr-set 217 0)
    (gr-set 218 0)
    (gr-set 219 0)
    (gr-set "key_X_on" 0)
    (gr-set 211 15)
    (gr-set 212 0)
    (gr-tile-probe-set-cell occ (gr-num (or (gr-prop-ref row "Var1") 0))
                            (gr-num (or (gr-prop-ref row "Var2") 0)) 0)
    (gr-prop-set row "Var1" (nth 0 placement))
    (gr-prop-set row "Var2" (nth 1 placement))
    (gr-prop-set row "Var3" 5)
    (gr-prop-set row "Var10" (gr-tile-probe-tile-at (nth 0 placement) (nth 1 placement)))
    (gr-prop-set row "Var7" 0)
    (gr-prop-set row "Var8" 0)
    (gr-prop-set row "Var9" 0)
    (gr-prop-set row "Var12" 0)
    (gr-prop-set row "Var13" 0)
    (gr-prop-set row "Var15" 0)
    (gr-prop-set row "Var17" 0)
    (gr-prop-set row "Var18" 0)
    (gr-prop-set row "Var20" 0)
    (gr-tile-probe-set-cell occ (nth 0 placement) (nth 1 placement) enemy-idx)
    (setq before (list (gr-prop-ref row "Var1") (gr-prop-ref row "Var2")))
    (setq hp-before (gr-num (or (gr-get 211) 0)))
    (let ((saved-func009 (gethash "func009" gr-native-funcs))
          (saved-func080 (gethash "func080" gr-native-funcs)))
      (unwind-protect
          (progn
            (setq gr-trace nil)
            (gr-defnative "func009" #'gr-tile-probe-wrap-func009)
            (gr-defnative "func080" #'gr-tile-probe-wrap-func080)
            (gr-run-func "func015"))
        (when saved-func009
          (gr-defnative "func009" saved-func009))
        (when saved-func080
          (gr-defnative "func080" saved-func080))))
    (setq after (list (gr-prop-ref row "Var1") (gr-prop-ref row "Var2")))
    (setq hp-after (gr-num (or (gr-get 211) 0)))
    (setq trace (reverse gr-trace))
    (list :before before
          :after after
          :slot enemy-idx
          :hp-before hp-before
          :hp-after hp-after
          :acted (or (not (equal before after))
                     (/= hp-before hp-after)
                     (member 654 trace)
                     (member 655 trace)
                     (member 656 trace)
                     (member 705 trace))
          :trace trace)))

(let* ((runtime-dir (file-name-directory (or load-file-name buffer-file-name)))
       (repo-root (expand-file-name ".." runtime-dir))
       (test-root (expand-file-name "build/tile-probe-data" repo-root))
       (path nil)
       (walk nil)
       (void-step nil)
       (blocked nil)
       (enemy-move nil)
       (money-pickup nil)
       (disc-pickup nil)
       (disc-missing-old nil)
       (rotate-arrow nil))
  (load-file (expand-file-name "game-runner.el" runtime-dir))
  (load-file (expand-file-name "gamedata-simple.el" runtime-dir))
  (load-file (expand-file-name "gamedata-conditional.el" runtime-dir))
  (setq gr-worldgen-autorun nil)
  (load-file (expand-file-name "run-worldgen.el" runtime-dir))
  (make-directory test-root t)
  (let ((source-00 (expand-file-name "00.dat" gr-data-root))
        (target-00 (expand-file-name "00.dat" test-root)))
    (when (file-exists-p source-00)
      (copy-file source-00 target-00 t)))
  (setq gr-data-root (or (getenv "GR_DATA_ROOT") test-root))
  (setq max-lisp-eval-depth 200000)
  (setq max-specpdl-size 200000)
  (setq gr-depth-limit 5000)
  (setq gr-step-budget 2000000)
  (gr-reset)
  (gr-set "stat" 1)
  (gr-set "hwnd" 0)
  (let ((saved-func139A (gethash "func139A" gr-native-funcs)))
    (unwind-protect
        (progn
          (gr-defnative "func139A" (lambda (&rest _args) nil))
          (gr-run-func "func004"))
      (if saved-func139A
          (gr-defnative "func139A" saved-func139A)
        (when gr-native-funcs
          (remhash "func139A" gr-native-funcs)))))
  (gr-worldgen-seed-base-state)
  (gr-worldgen-run t)
  (setq path (gr-tile-probe-find-edge-path))
  (unless path
    (error "tile probe could not find a floor edge path"))
  (setq void-step (gr-tile-probe-find-void-step (nth 0 path) (nth 1 path)))
  (unless void-step
    (error "tile probe could not find an adjacent void step"))
  (gr-tile-probe-install-wrappers)
  (unwind-protect
      (progn
        (setq walk (gr-tile-probe-run-move (nth 0 path) (nth 1 path) (nth 2 path) (nth 3 path) (nth 4 path)))
        (setq blocked (gr-tile-probe-run-move (nth 0 void-step) (nth 1 void-step)
                                              (nth 2 void-step) (nth 3 void-step) (nth 4 void-step)))
        (gr-tile-probe-restore-wrappers)
        (setq enemy-move (gr-tile-probe-run-enemy-move (nth 0 path) (nth 1 path) (nth 2 path) (nth 3 path) (nth 4 path)))
        (setq disc-missing-old (gr-tile-probe-run-disc-menu-missing 101))
        (setq disc-pickup (gr-tile-probe-run-disc-pickup (nth 0 path) (nth 1 path) (nth 2 path) (nth 3 path) (nth 4 path) 101))
        (setq money-pickup (gr-tile-probe-run-money-pickup test-root (nth 0 path) (nth 1 path) (nth 2 path) (nth 3 path) (nth 4 path) 123))
        (setq rotate-arrow (gr-tile-probe-run-rotate-arrow test-root))
        (gr-tile-probe-install-wrappers)
        (princ (format "TILE-PROBE-PATH start=%s,%s dest=%s,%s dir=%s\n"
                       (nth 0 path) (nth 1 path) (nth 2 path) (nth 3 path) (nth 4 path)))
        (princ (format "TILE-PROBE-WALK %S\n" walk))
        (princ (format "TILE-PROBE-BLOCK %S\n" blocked))
        (princ (format "ENEMY-PROBE %S\n" enemy-move))
        (princ (format "DISC-PICKUP-OLD-MISSING %S\n" disc-missing-old))
        (princ (format "DISC-PICKUP %S\n" disc-pickup))
        (princ (format "MONEY-PICKUP %S\n" money-pickup))
        (princ (format "MONEY-FRAME-EXCERPT text=%S frame=%S\n"
                       (plist-get money-pickup :text-records)
                       (plist-get money-pickup :frame-records)))
        (princ (format "ROTATE-ARROW %S\n" rotate-arrow))
        (princ (format "ROTATE-ARROW-EXCERPT %S\n" (plist-get rotate-arrow :arrow-records)))
        ;; Tile and enemy verdicts are separate concerns: the tile fix is
        ;; deterministic, while enemy turns depend on the (still under
        ;; investigation) func019 -> func020 handoff and the layout.
        (if (and (= (gr-num (plist-get walk :x)) (nth 2 path))
                 (= (gr-num (plist-get walk :y)) (nth 3 path))
                 (= (gr-num (or (plist-get walk :hp) 0)) 15)
                 (= (or (plist-get walk :blocked) 0) 0)
                 (= (or (plist-get walk :turn) 0) 1)
                 (= (gr-num (plist-get blocked :x)) (nth 0 void-step))
                 (= (gr-num (plist-get blocked :y)) (nth 1 void-step))
                 (> (or (plist-get blocked :blocked) 0) 0))
            (princ "TILE-PROBE-OK\n")
          (princ "TILE-PROBE-FAIL\n"))
        (if (plist-get enemy-move :acted)
            (princ "ENEMY-PROBE-OK\n")
          (princ "ENEMY-PROBE-FAIL\n"))
        (if (and (= (gr-num (or (plist-get disc-pickup :after-items) 0))
                    (1+ (gr-num (or (plist-get disc-pickup :before-items) 0))))
                 (= (gr-num (or (plist-get disc-pickup :picked-id) 0)) 101)
                 (= (gr-num (or (plist-get disc-pickup :ground-slot) 1)) 0))
            (princ "DISC-PICKUP-OK\n")
          (princ "DISC-PICKUP-FAIL\n"))
        (if (and (equal (plist-get money-pickup :message-open) 1)
                 (string-match-p "123 Gを拾った" (format "%s" (plist-get money-pickup :comments-row1)))
                 (plist-get money-pickup :text-records)
                 (plist-get money-pickup :frame-records))
            (princ "MONEY-PICKUP-MESSAGE-OK\n")
          (princ "MONEY-PICKUP-MESSAGE-FAIL\n"))
        (if (plist-get rotate-arrow :arrow-records)
            (princ "ROTATE-ARROW-OK\n")
          (princ "ROTATE-ARROW-FAIL\n")))
    (gr-tile-probe-restore-wrappers)))
