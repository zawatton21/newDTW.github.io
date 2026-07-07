;;; run-live-probe.el --- live func009 pickup/status probe -*- coding: utf-8; lexical-binding: t; -*-

(defconst gr-live-probe-build-dir
  (expand-file-name "../build" (file-name-directory (or load-file-name buffer-file-name))))

(defconst gr-live-probe-key-state-path
  (expand-file-name "key-state.txt" gr-live-probe-build-dir))

(defvar gr-live-probe-seq 0)
(defvar gr-live-probe-stage 'boot)
(defvar gr-live-probe-stage-polls 0)
(defvar gr-live-probe-trace nil)
(defvar gr-live-probe-target nil)
(defvar gr-live-probe-before-items 0)
(defvar gr-live-probe-status-opened nil)
(defvar gr-live-probe-status-closed nil)
(defvar gr-live-probe-pickup-ok nil)
(defvar gr-live-probe-message-ok nil)
(defvar gr-live-probe-message-frame-path nil)
(defvar gr-live-probe-message-text nil)
(defvar gr-live-probe-message-color-record nil)
(defvar gr-live-probe-confirm-attempts nil)
(defvar gr-live-probe-failure nil)
(defvar gr-live-probe-finished nil)
(defvar gr-live-probe-held-keycode nil)
(defvar gr-live-probe-held-polls 0)

(defun gr-live-probe-inventory-used-count ()
  "Return the number of non-empty inventory rows."
  (let ((rows (gr-get 233))
        (slot 1)
        (count 0))
    (while (<= slot 20)
      (when (> (gr-num (or (gr-prop-ref (gr-index-ref rows slot) "Var0") 0)) 0)
        (setq count (1+ count)))
      (setq slot (1+ slot)))
    count))

(defun gr-live-probe-clear-slot (slot)
  "Clear inventory SLOT across Var0..Var29."
  (let ((row (gr-index-ref (gr-get 233) slot))
        (idx 0))
    (when (vectorp row)
      (while (< idx (length row))
        (aset row idx 0)
        (setq idx (1+ idx))))))

(defun gr-live-probe-ensure-inventory-room ()
  "Free one real inventory slot when the live save starts full."
  (let ((used (gr-live-probe-inventory-used-count))
        (slot 20))
    (when (>= used 20)
      (while (and (> slot 0)
                  (= 0 (gr-num (or (gr-prop-ref (gr-index-ref (gr-get 233) slot) "Var0") 0))))
        (setq slot (1- slot)))
      (when (> slot 0)
        (gr-live-probe-clear-slot slot)
        (setq used (1- used))
        (gr-set 224 used)
        (princ (format "LIVE-INVENTORY room-made slot=%s used=%s\n" slot used))))
    used))

(defun gr-live-probe-state-int (slot)
  "Return SLOT coerced to a number."
  (gr-num (or (gr-get slot) 0)))

(defun gr-live-probe-floor-p (tile)
  "Return non-nil when TILE is a walkable floor."
  (and (numberp tile) (>= tile 1) (<= tile 12)))

(defun gr-live-probe-set-grid-cell (grid x y value)
  "Set GRID[X][Y] to VALUE when the coordinates are in range."
  (let ((row (and (vectorp grid) (gr-index-ref grid x))))
    (when (and (vectorp row) (>= y 0) (< y (length row)))
      (aset row y value))))

(defun gr-live-probe-write-key-state (token keycode &optional held)
  "Write one live key-state record with TOKEN, KEYCODE, and HELD list."
  (let ((tmp-path (concat gr-live-probe-key-state-path ".tmp"))
        (coding-system-for-write 'utf-8))
    (setq gr-live-probe-seq (1+ gr-live-probe-seq))
    (unless (file-directory-p gr-live-probe-build-dir)
      (make-directory gr-live-probe-build-dir t))
    (with-temp-file tmp-path
      (insert (format "%s %d\n" token gr-live-probe-seq))
      (insert (format "%d\n" (or keycode 0)))
      (insert "HELD")
      (dolist (code held)
        (insert (format " %d" code)))
      (insert "\n"))
    (rename-file tmp-path gr-live-probe-key-state-path t)))

(defun gr-live-probe-write-idle ()
  "Write an idle key-state record."
  (gr-live-probe-write-key-state "IDLE" 0 nil))

(defun gr-live-probe-write-press (keycode)
  "Write a one-shot key press for KEYCODE."
  (gr-live-probe-write-key-state "LIVE" keycode nil))

(defun gr-live-probe-start-held-press (keycode)
  "Start a short held press for KEYCODE across consecutive polls."
  (setq gr-live-probe-held-keycode keycode
        gr-live-probe-held-polls 2)
  (gr-live-probe-write-key-state "LIVE" keycode (list keycode)))

(defun gr-live-probe-continue-held-press ()
  "Continue the current held press, if any."
  (when (and gr-live-probe-held-keycode
             (> gr-live-probe-held-polls 0))
    (gr-live-probe-write-key-state "LIVE"
                                   gr-live-probe-held-keycode
                                   (list gr-live-probe-held-keycode))
    (setq gr-live-probe-held-polls (1- gr-live-probe-held-polls))
    (when (= gr-live-probe-held-polls 0)
      (setq gr-live-probe-held-keycode nil))
    t))

(defun gr-live-probe-tail (list-value count)
  "Return the last COUNT elements from LIST-VALUE."
  (let ((len (length list-value)))
    (if (<= len count)
        list-value
      (nthcdr (- len count) list-value))))

(defun gr-live-probe-log-state (label)
  "Append a compact live-state snapshot tagged with LABEL."
  (push
   (list :label label
         :loop gr-play-loop-count
         :redraw gr-play-redraw-count
         :stage gr-live-probe-stage
         :stage-polls gr-live-probe-stage-polls
         :player (list (gr-get 66) (gr-get 67))
         :item-cell (and gr-live-probe-target
                         (list (plist-get gr-live-probe-target :item-x)
                               (plist-get gr-live-probe-target :item-y)))
         :item-var15 (and gr-live-probe-target
                          (plist-get gr-live-probe-target :item-var15))
         :ground-slot (and gr-live-probe-target
                           (gr-index-ref
                            (gr-index-ref (gr-get 77)
                                          (plist-get gr-live-probe-target :item-x))
                            (plist-get gr-live-probe-target :item-y)))
         :items (gr-get 224)
         :menu-open (gr-get "open_item_menue")
         :main-menu-open (gr-get 196)
         :menu-mode (gr-get 221)
         :menu-line (gr-get 222)
         :menu-col (gr-get 247)
         :menu-row (gr-get 248)
         :item-page (gr-get "item_page_number")
         :item-slot (gr-get 225)
         :ground-menu (gr-get 231)
         :message-open (gr-get 198)
         :status-open (gr-get 498)
         :comments-row1 (gr-get "comments_row1")
         :comments-row2 (gr-get "comments_row2")
         :trace (gr-live-probe-tail (reverse gr-trace) 12))
   gr-live-probe-trace))

(defun gr-live-probe-find-target ()
  "Return a real spawned floor item with an adjacent walkable cell."
  (let ((tiles (gr-get 71))
        (occ (gr-get 82))
        (items (gr-get 77))
        (rows (gr-get 78))
        (limit-x (gr-num (or (gr-get 31) 0)))
        (limit-y (gr-num (or (gr-get 32) 0)))
        (x 1)
        (y 1)
        (manual nil)
        (fallback nil))
    (while (< x limit-x)
      (setq y 1)
      (while (< y limit-y)
        (let* ((slot (gr-index-ref (gr-index-ref items x) y))
               (row (and (numberp slot) (> slot 0) (gr-index-ref rows slot)))
               (item-id (and row (gr-prop-ref row "Var0")))
               (item-var15 (and row (gr-prop-ref row "Var15"))))
          (when (and row
                     (numberp item-id)
                     (> item-id 1)
                     (equal (gr-index-ref (gr-index-ref occ x) y) 0))
            (dolist (candidate '((0 -1 650 2) (0 1 649 8) (-1 0 648 6) (1 0 647 4)))
              (let ((px (+ x (nth 0 candidate)))
                    (py (+ y (nth 1 candidate))))
                (when (and (gr-live-probe-floor-p (gr-index-ref (gr-index-ref tiles px) py))
                           (equal (gr-index-ref (gr-index-ref occ px) py) 0))
                  (let ((target
                         (list :slot slot
                               :item-id item-id
                               :item-var15 item-var15
                               :item-x x
                               :item-y y
                               :player-x px
                               :player-y py
              :move-key-slot (nth 2 candidate)
              :direction (nth 3 candidate))))
                    (when (and (null manual)
                               (not (equal item-var15 1)))
                      (setq manual target))
                    (when (null fallback)
                      (setq fallback target))))))))
        (setq y (1+ y)))
      (setq x (1+ x)))
    (or manual fallback)))

(defun gr-live-probe-place-player (player-x player-y)
  "Move the player to PLAYER-X,PLAYER-Y while preserving occupancy state."
  (gr-live-probe-set-grid-cell (gr-get 65) (gr-get 66) (gr-get 67) 0)
  (gr-set 66 player-x)
  (gr-set 67 player-y)
  (gr-set 236 player-x)
  (gr-set 237 player-y)
  (gr-set 201 (gr-index-ref (gr-index-ref (gr-get 71) player-x) player-y))
  (gr-live-probe-set-grid-cell (gr-get 65) player-x player-y 1))

(defun gr-live-probe-finish (&optional failure-label)
  "Stop the live run, optionally recording FAILURE-LABEL."
  (unless gr-live-probe-finished
    (when failure-label
      (setq gr-live-probe-failure failure-label))
    (setq gr-live-probe-finished t
          gr-play-quit-requested t)
    (gr-live-probe-write-key-state "QUIT" 0 nil)
    (gr-live-probe-log-state (or failure-label "finish"))))

(defun gr-live-probe-pickup-succeeded-p ()
  "Return non-nil when the live pickup completed."
  (and gr-live-probe-target
       (> (gr-num (or (gr-get 224) 0)) gr-live-probe-before-items)
       (equal
        (gr-index-ref
         (gr-index-ref (gr-get 77)
                       (plist-get gr-live-probe-target :item-x))
         (plist-get gr-live-probe-target :item-y))
        0)))

(defun gr-live-probe-pickup-message-p ()
  "Return non-nil when the current comment rows show a pickup message."
  (let ((row1 (format "%s" (or (gr-get "comments_row1") "")))
        (row2 (format "%s" (or (gr-get "comments_row2") ""))))
    (or (string-match-p "拾った" row1)
        (string-match-p "拾った" row2)
        (string-match-p "乗った" row1)
        (string-match-p "乗った" row2))))

(defun gr-live-probe-stage-transition (next-stage label)
  "Switch to NEXT-STAGE and log LABEL."
  (setq gr-live-probe-stage next-stage
        gr-live-probe-stage-polls 0)
  (gr-live-probe-log-state label))

(defun gr-live-probe-status-open-p ()
  "Return non-nil when the live status overlay is open."
  (equal (gr-get 498) 1))

(defun gr-live-probe-main-menu-open-p ()
  "Return non-nil when the 2x2 main menu is open."
  (equal (gr-get 196) 1))

(defun gr-live-probe-menu-open-p ()
  "Return non-nil when the live ground-item menu is open."
  (or (equal (gr-get "open_item_menue") 1)
      (> (gr-num (or (gr-get 221) 0)) 0)
      (equal (gr-get 231) 1)))

(defun gr-live-probe-ground-page-open-p ()
  "Return non-nil when the live item page is on the foot-item view."
  (and (equal (gr-get "open_item_menue") 1)
       (equal (gr-get "item_page_number") 3)
       (equal (gr-get 225) 0)))

(defun gr-live-probe-ground-submenu-open-p ()
  "Return non-nil when the foot-item pickup submenu is open."
  (and (equal (gr-get "open_item_menue") 1)
       (equal (gr-get 221) 1)
       (equal (gr-get 231) 1)
       (equal (gr-get 222) 10)))

(defun gr-live-probe-main-menu-status-selected-p ()
  "Return non-nil when the live 2x2 menu cursor is on 状態."
  (and (= (gr-live-probe-state-int 247) 2)
       (= (gr-live-probe-state-int 248) 1)))

(defun gr-live-probe-retry-held-press (keycode interval label)
  "Re-issue KEYCODE every INTERVAL polls while waiting in the same stage."
  (when (and (> interval 0)
             (= 0 (mod gr-live-probe-stage-polls interval)))
    (gr-live-probe-start-held-press keycode)
    (gr-live-probe-log-state label)
    t))

(defun gr-live-probe-on-item-cell-p ()
  "Return non-nil when the player is standing on the target item cell."
  (and gr-live-probe-target
       (= (gr-live-probe-state-int 66) (plist-get gr-live-probe-target :item-x))
       (= (gr-live-probe-state-int 67) (plist-get gr-live-probe-target :item-y))))

(defun gr-live-probe-post-init ()
  "Choose a real spawned item and place the player beside it."
  (setq gr-live-probe-target (gr-live-probe-find-target))
  (unless gr-live-probe-target
    (error "live probe could not find a spawned non-money item with an adjacent floor tile"))
  (gr-live-probe-place-player (plist-get gr-live-probe-target :player-x)
                              (plist-get gr-live-probe-target :player-y))
  (setq gr-live-probe-target
        (plist-put gr-live-probe-target
                   :move-keycode
                   (gr-num (or (gr-get (plist-get gr-live-probe-target :move-key-slot))
                               (plist-get gr-live-probe-target :move-key-slot)))))
  (setq gr-live-probe-before-items (gr-live-probe-ensure-inventory-room)
        gr-live-probe-stage 'open-main-menu
        gr-live-probe-stage-polls 0
        gr-live-probe-confirm-attempts nil
        gr-live-probe-trace nil
        gr-live-probe-failure nil
        gr-live-probe-finished nil
        gr-live-probe-held-keycode nil
        gr-live-probe-held-polls 0
        gr-live-probe-status-opened nil
        gr-live-probe-status-closed nil
        gr-live-probe-pickup-ok nil
        gr-live-probe-message-ok nil
        gr-live-probe-message-frame-path nil
        gr-live-probe-message-color-record nil
        gr-live-probe-message-text nil)
  (when (file-exists-p gr-live-probe-key-state-path)
    (delete-file gr-live-probe-key-state-path))
  (gr-live-probe-write-idle)
  (princ
   (format
    "LIVE-TARGET item-id=%s slot=%s var15=%s item=%s,%s player=%s,%s move-key=%s dir=%s items-before=%s\n"
    (plist-get gr-live-probe-target :item-id)
    (plist-get gr-live-probe-target :slot)
    (plist-get gr-live-probe-target :item-var15)
    (plist-get gr-live-probe-target :item-x)
    (plist-get gr-live-probe-target :item-y)
    (plist-get gr-live-probe-target :player-x)
    (plist-get gr-live-probe-target :player-y)
    (plist-get gr-live-probe-target :move-keycode)
    (plist-get gr-live-probe-target :direction)
    gr-live-probe-before-items))
  (gr-live-probe-log-state "post-init"))

(defun gr-live-probe-before-key-poll ()
  "Drive the live loop by writing the next key-state record."
  (setq gr-live-probe-stage-polls (1+ gr-live-probe-stage-polls))
  (cond
   (gr-live-probe-finished
    (gr-live-probe-write-key-state "QUIT" 0 nil))
   ((gr-live-probe-continue-held-press))
   ((eq gr-live-probe-stage 'open-main-menu)
    (gr-live-probe-start-held-press (gr-num (or (gr-get 657) 65)))
    (gr-live-probe-stage-transition 'wait-main-menu "press-main-menu"))
   ((eq gr-live-probe-stage 'wait-main-menu)
    (cond
     ((gr-live-probe-main-menu-open-p)
      (gr-live-probe-write-idle)
      (gr-live-probe-stage-transition 'status-right "main-menu-opened"))
     ((> gr-live-probe-stage-polls 20)
      (gr-live-probe-finish "main-menu-open-timeout"))
     (t
      (gr-live-probe-retry-held-press (gr-num (or (gr-get 657) 65))
                                      4
                                      "retry-main-menu")
      (gr-live-probe-write-idle))))
   ((eq gr-live-probe-stage 'status-right)
    (gr-live-probe-start-held-press (gr-num (or (gr-get 648) 39)))
    (gr-live-probe-stage-transition 'wait-status-cursor "press-status-right"))
   ((eq gr-live-probe-stage 'wait-status-cursor)
    (cond
     ((gr-live-probe-main-menu-status-selected-p)
      (gr-live-probe-write-idle)
      (gr-live-probe-stage-transition 'status-confirm "status-cursor-ready"))
     ((> gr-live-probe-stage-polls 24)
      (gr-live-probe-finish "status-cursor-timeout"))
     (t
      (gr-live-probe-retry-held-press (gr-num (or (gr-get 648) 39))
                                      4
                                      "retry-status-right")
      (gr-live-probe-write-idle))))
   ((eq gr-live-probe-stage 'status-confirm)
    (gr-live-probe-start-held-press (gr-num (or (gr-get 655) 90)))
    (gr-live-probe-stage-transition 'wait-status-open "press-status-confirm"))
   ((eq gr-live-probe-stage 'wait-status-open)
    (cond
     ((gr-live-probe-status-open-p)
      (setq gr-live-probe-status-opened t)
      (gr-live-probe-write-idle)
      (gr-live-probe-stage-transition 'close-status "status-opened"))
     ((> gr-live-probe-stage-polls 30)
      (gr-live-probe-finish "status-open-timeout"))
     (t
      (gr-live-probe-retry-held-press (gr-num (or (gr-get 655) 90))
                                      5
                                      "retry-status-confirm")
      (gr-live-probe-write-idle))))
   ((eq gr-live-probe-stage 'close-status)
    (gr-live-probe-start-held-press (gr-num (or (gr-get 656) 88)))
    (gr-live-probe-stage-transition 'wait-status-close "press-status-close"))
   ((eq gr-live-probe-stage 'wait-status-close)
    (cond
     ((and (not (gr-live-probe-status-open-p))
           (not (gr-live-probe-main-menu-open-p)))
      (setq gr-live-probe-status-closed t)
      (gr-live-probe-write-idle)
      (gr-live-probe-stage-transition 'move-to-item "status-closed"))
     ((> gr-live-probe-stage-polls 30)
      (gr-live-probe-finish "status-close-timeout"))
     (t
      (gr-live-probe-retry-held-press (gr-num (or (gr-get 656) 88))
                                      5
                                      "retry-status-close")
      (gr-live-probe-write-idle))))
   ((eq gr-live-probe-stage 'move-to-item)
    (gr-live-probe-start-held-press (plist-get gr-live-probe-target :move-keycode))
    (gr-live-probe-stage-transition 'wait-item-step "press-move-to-item"))
   ((eq gr-live-probe-stage 'wait-item-step)
    (cond
     ((gr-live-probe-pickup-succeeded-p)
      (setq gr-live-probe-pickup-ok t)
      (gr-live-probe-write-idle)
      (gr-live-probe-stage-transition 'wait-message "pickup-succeeded"))
     ((gr-live-probe-on-item-cell-p)
      (gr-live-probe-write-idle)
      (gr-live-probe-stage-transition 'pickup-open-main-menu "item-stepped"))
     ((> gr-live-probe-stage-polls 30)
      (gr-live-probe-finish "item-step-timeout"))
     (t
      (gr-live-probe-retry-held-press (plist-get gr-live-probe-target :move-keycode)
                                      5
                                      "retry-move-to-item")
      (gr-live-probe-write-idle))))
   ((eq gr-live-probe-stage 'pickup-open-main-menu)
    (if (gr-live-probe-pickup-succeeded-p)
        (progn
          (setq gr-live-probe-pickup-ok t)
          (gr-live-probe-write-idle)
          (gr-live-probe-stage-transition 'wait-message "pickup-succeeded-before-menu"))
      (gr-live-probe-start-held-press (gr-num (or (gr-get 657) 65)))
      (gr-live-probe-stage-transition 'wait-pickup-main-menu "press-pickup-main-menu")))
   ((eq gr-live-probe-stage 'wait-pickup-main-menu)
    (cond
     ((gr-live-probe-pickup-succeeded-p)
      (setq gr-live-probe-pickup-ok t)
      (gr-live-probe-write-idle)
      (gr-live-probe-stage-transition 'wait-message "pickup-succeeded-during-main-menu"))
     ((gr-live-probe-main-menu-open-p)
      (gr-live-probe-write-idle)
      (gr-live-probe-stage-transition 'pickup-menu-down "pickup-main-menu-opened"))
     ((> gr-live-probe-stage-polls 20)
      (gr-live-probe-finish "pickup-main-menu-open-timeout"))
     (t
      (gr-live-probe-retry-held-press (gr-num (or (gr-get 657) 65))
                                      4
                                      "retry-pickup-main-menu")
      (gr-live-probe-write-idle))))
   ((eq gr-live-probe-stage 'pickup-menu-down)
    (if (gr-live-probe-pickup-succeeded-p)
        (progn
          (setq gr-live-probe-pickup-ok t)
          (gr-live-probe-write-idle)
          (gr-live-probe-stage-transition 'wait-message "pickup-succeeded-before-ground-menu"))
      (gr-live-probe-start-held-press (gr-num (or (gr-get 650) 40)))
      (gr-live-probe-stage-transition 'wait-pickup-ground-cursor "press-ground-down")))
   ((eq gr-live-probe-stage 'wait-pickup-ground-cursor)
    (cond
     ((gr-live-probe-pickup-succeeded-p)
      (setq gr-live-probe-pickup-ok t)
      (gr-live-probe-write-idle)
      (gr-live-probe-stage-transition 'wait-message "pickup-succeeded-during-ground-menu"))
     ((and (= (gr-live-probe-state-int 247) 1)
           (= (gr-live-probe-state-int 248) 2))
      (gr-live-probe-write-idle)
      (gr-live-probe-stage-transition 'pickup-ground-confirm "ground-cursor-ready"))
     ((> gr-live-probe-stage-polls 24)
      (gr-live-probe-finish "ground-cursor-timeout"))
     (t
      (gr-live-probe-retry-held-press (gr-num (or (gr-get 650) 40))
                                      4
                                      "retry-ground-down")
      (gr-live-probe-write-idle))))
   ((eq gr-live-probe-stage 'pickup-ground-confirm)
    (gr-live-probe-start-held-press (gr-num (or (gr-get 655) 90)))
    (gr-live-probe-stage-transition 'wait-ground-page "press-ground-confirm"))
   ((eq gr-live-probe-stage 'wait-ground-page)
    (cond
     ((gr-live-probe-ground-page-open-p)
      (gr-live-probe-write-idle)
      (gr-live-probe-stage-transition 'pickup-item-confirm "ground-page-opened"))
     ((> gr-live-probe-stage-polls 30)
      (gr-live-probe-finish "ground-page-timeout"))
     (t
      (gr-live-probe-retry-held-press (gr-num (or (gr-get 655) 90))
                                      5
                                      "retry-ground-confirm")
      (gr-live-probe-write-idle))))
   ((eq gr-live-probe-stage 'pickup-item-confirm)
    (gr-live-probe-start-held-press (gr-num (or (gr-get 655) 90)))
    (push 'ITEM gr-live-probe-confirm-attempts)
    (gr-live-probe-stage-transition 'wait-ground-submenu "press-item-confirm"))
   ((eq gr-live-probe-stage 'wait-ground-submenu)
    (cond
     ((gr-live-probe-ground-submenu-open-p)
      (gr-live-probe-write-idle)
      (gr-live-probe-stage-transition 'pickup-confirm "ground-submenu-opened"))
     ((gr-live-probe-pickup-succeeded-p)
      (setq gr-live-probe-pickup-ok t)
      (gr-live-probe-write-idle)
      (gr-live-probe-stage-transition 'wait-message "pickup-succeeded-direct"))
     ((> gr-live-probe-stage-polls 30)
      (gr-live-probe-finish "ground-submenu-timeout"))
     (t
      (gr-live-probe-retry-held-press (gr-num (or (gr-get 655) 90))
                                      5
                                      "retry-item-confirm")
      (gr-live-probe-write-idle))))
   ((eq gr-live-probe-stage 'pickup-confirm)
    (gr-live-probe-start-held-press (gr-num (or (gr-get 655) 90)))
    (push 'PICKUP gr-live-probe-confirm-attempts)
    (gr-live-probe-stage-transition 'wait-confirm "press-pickup-confirm"))
   ((eq gr-live-probe-stage 'wait-confirm)
    (cond
     ((gr-live-probe-pickup-succeeded-p)
      (setq gr-live-probe-pickup-ok t)
      (gr-live-probe-write-idle)
      (gr-live-probe-stage-transition 'wait-message "pickup-confirmed"))
      ((and (gr-live-probe-menu-open-p)
           (not (memq 'A gr-live-probe-confirm-attempts))
           (> gr-live-probe-stage-polls 6))
      (gr-live-probe-start-held-press (gr-num (or (gr-get 657) 65)))
      (push 'A gr-live-probe-confirm-attempts)
      (gr-live-probe-log-state "press-confirm-a"))
     ((> gr-live-probe-stage-polls 36)
      (gr-live-probe-finish "pickup-confirm-timeout"))
     (t
      (gr-live-probe-retry-held-press (gr-num (or (gr-get 655) 90))
                                      6
                                      "retry-pickup-confirm")
      (gr-live-probe-write-idle))))
   ((eq gr-live-probe-stage 'wait-message)
    (cond
     (gr-live-probe-message-ok
      (gr-live-probe-finish nil))
     ((> gr-live-probe-stage-polls 30)
      (gr-live-probe-finish "message-timeout"))
     (t
      (gr-live-probe-write-idle))))
   (t
    (gr-live-probe-write-idle))))

(defun gr-live-probe-frame-has-buffer12-p (records)
  "Return non-nil when RECORDS includes the buffer-12 message box blit."
  (let ((found nil))
    (while (and records (not found))
      (let ((entry (car records)))
        (when (and (equal (car entry) "gui-draw-image-scaled")
                   (= (or (nth 1 entry) -1) 12))
          (setq found t)))
      (setq records (cdr records)))
    found))

(defun gr-live-probe-frame-message-text (records)
  "Return the most relevant message-box draw-text string from RECORDS."
  (let ((found nil)
        (fallback nil))
    (while (and records (null found))
      (let ((entry (car records)))
        (when (and (equal (car entry) "gui-draw-text")
                   (stringp (nth 1 entry))
                   (> (length (nth 1 entry)) 0))
          (if (string-match-p "拾った\\|乗った\\|持ち物" (nth 1 entry))
              (setq found (nth 1 entry))
            (when (null fallback)
              (setq fallback (nth 1 entry))))))
      (setq records (cdr records)))
    (or found fallback)))

(defun gr-live-probe-frame-message-color-record (records)
  "Return the gui-set-color record that precedes the pickup text in RECORDS."
  (let ((last-color nil)
        (found nil))
    (while (and records (null found))
      (let ((entry (car records)))
        (cond
         ((equal (car entry) "gui-set-color")
          (setq last-color entry))
         ((and (equal (car entry) "gui-draw-text")
               (stringp (nth 1 entry))
               (string-match-p "拾った\\|乗った\\|持ち物" (nth 1 entry)))
          (setq found last-color))))
      (setq records (cdr records)))
    found))

(defun gr-live-probe-after-frame ()
  "Capture the first live pickup message frame."
  (let* ((records (reverse gr-sumi))
         (text (gr-live-probe-frame-message-text records))
         (color-record (gr-live-probe-frame-message-color-record records)))
    (when (and gr-live-probe-target
               (not gr-live-probe-pickup-ok)
               (gr-live-probe-pickup-succeeded-p))
      (setq gr-live-probe-pickup-ok t)
      (when (not (eq gr-live-probe-stage 'wait-message))
        (gr-live-probe-stage-transition 'wait-message "pickup-succeeded-after-frame")))
    (when (and (not gr-live-probe-message-ok)
               (equal (gr-get 198) 1)
               (gr-live-probe-frame-has-buffer12-p records)
               text
               (gr-live-probe-pickup-message-p))
      (setq gr-live-probe-message-ok t
            gr-live-probe-message-text text
            gr-live-probe-message-color-record color-record
            gr-live-probe-message-frame-path
            (expand-file-name
             (format "frame-%06d.json" gr-play-frame-seq)
             gr-play-frames-dir))
      (gr-live-probe-log-state "message-frame"))))

(let ((runtime-dir (file-name-directory (or load-file-name buffer-file-name))))
  (setq gr-play-duration-seconds 20
        gr-play-report-every 200
        gr-play-post-init-hook #'gr-live-probe-post-init
        gr-play-before-key-poll-hook #'gr-live-probe-before-key-poll
        gr-play-after-frame-hook #'gr-live-probe-after-frame)
  (setenv "GR_PLAY_SKIP_OPENING" "1")
  (setenv "GR_DATA_ROOT" (expand-file-name "build/tile-probe-data" (expand-file-name ".." runtime-dir)))
  (load-file (expand-file-name "game-runner.el" runtime-dir))
  (load-file (expand-file-name "gamedata-simple.el" runtime-dir))
  (load-file (expand-file-name "gamedata-conditional.el" runtime-dir))
  (load-file (expand-file-name "gamedata-state.el" runtime-dir))
  (load-file (expand-file-name "sumi-json.el" runtime-dir))
  (load-file (expand-file-name "play.el" runtime-dir))
  (princ (format "LIVE-STATUS %s\n"
                 (list :opened gr-live-probe-status-opened
                       :closed gr-live-probe-status-closed)))
  (princ (format "LIVE-PICKUP %s\n"
                 (list :ok gr-live-probe-pickup-ok
                       :before-items gr-live-probe-before-items
                       :after-items (gr-get 224)
                       :confirm-attempts (reverse gr-live-probe-confirm-attempts)
                       :ground-slot (and gr-live-probe-target
                                         (gr-index-ref
                                          (gr-index-ref (gr-get 77)
                                                        (plist-get gr-live-probe-target :item-x))
                                          (plist-get gr-live-probe-target :item-y))))))
  (princ (format "LIVE-MESSAGE %s\n"
                 (list :ok gr-live-probe-message-ok
                       :color gr-live-probe-message-color-record
                       :text gr-live-probe-message-text
                       :frame gr-live-probe-message-frame-path)))
  (if (equal gr-live-probe-message-color-record
             '("gui-set-color" 255 255 255))
      (princ (format "LIVE-MESSAGE-WHITE %s\n" gr-live-probe-message-color-record))
    (princ (format "LIVE-MESSAGE-WHITE-FAIL %S\n" gr-live-probe-message-color-record)))
  (princ (format "LIVE-TRACE %S\n" (nreverse gr-live-probe-trace)))
  (if (and gr-live-probe-status-opened gr-live-probe-status-closed)
      (princ "LIVE-STATUS-CLOSE-OK\n")
    (princ "LIVE-STATUS-CLOSE-FAIL\n"))
  (if gr-live-probe-pickup-ok
      (princ "LIVE-PICKUP-OK\n")
    (princ "LIVE-PICKUP-FAIL\n"))
  (if gr-live-probe-message-ok
      (princ "LIVE-MESSAGE-OK\n")
    (princ "LIVE-MESSAGE-FAIL\n"))
  (when gr-live-probe-failure
    (princ (format "LIVE-FAILURE %s\n" gr-live-probe-failure))))
