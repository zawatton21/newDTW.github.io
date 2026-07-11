;;; run-hotel-probe.el --- scripted Venice hotel hub probe -*- coding: utf-8; lexical-binding: t; -*-

(defconst gr-hotel-probe-runtime-dir
  (file-name-directory (or load-file-name buffer-file-name)))

(defconst gr-hotel-probe-repo-root
  (expand-file-name ".." gr-hotel-probe-runtime-dir))

(defvar gr-hotel-probe-func009-count 0)
(defvar gr-hotel-probe-func080-count 0)
(defvar gr-hotel-probe-saved-func009 nil)
(defvar gr-hotel-probe-saved-func080 nil)
(defvar gr-hotel-probe-saved-autodraw nil)
(defvar gr-hotel-probe-saved-set-message nil)
(defvar gr-hotel-probe-saved-func019 nil)
(defvar gr-hotel-probe-saved-func094 nil)
(defvar gr-hotel-probe-saved-func710 nil)
(defvar gr-hotel-probe-messages nil)

(defun gr-hotel-probe-fail (label &rest args)
  "Signal a hotel probe failure with LABEL and ARGS."
  (error "HOTEL-PROBE-FAIL %s" (apply #'format label args)))

(defun gr-hotel-probe-assert (label value)
  "Signal a probe failure unless VALUE is non-nil."
  (unless value
    (gr-hotel-probe-fail "%s" label)))

(defun gr-hotel-probe-record-text (entry)
  "Return text carried by ENTRY."
  (cond
   ((and (equal (car entry) "gui-draw-text") (stringp (nth 1 entry)))
    (nth 1 entry))
   ((and (equal (car entry) "gui-draw-text-at") (stringp (nth 3 entry)))
    (nth 3 entry))
   (t nil)))

(defun gr-hotel-probe-records-have-text-p (records pattern)
  "Return non-nil when RECORDS contain text matching PATTERN."
  (let ((found nil))
    (while (and records (not found))
      (let ((text (gr-hotel-probe-record-text (car records))))
        (when (and text (string-match-p pattern text))
          (setq found t)))
      (setq records (cdr records)))
    found))

(defun gr-hotel-probe-records-have-image-p (records buffer-id)
  "Return non-nil when RECORDS draw BUFFER-ID."
  (let ((found nil))
    (while (and records (not found))
      (let ((entry (car records)))
        (when (and (member (car entry) '("gui-draw-image-scaled"
                                         "gui-draw-image-scaled-alpha"))
                   (member buffer-id (cdr entry)))
          (setq found t)))
      (setq records (cdr records)))
    found))

(defun gr-hotel-probe-sound-emitted-p (sound-id)
  "Return non-nil when SOUND-ID was emitted in `gr-sumi'."
  (let ((found nil)
        (records gr-sumi))
    (while (and records (not found))
      (let ((entry (car records)))
        (when (and (consp entry)
                   (equal (car entry) "dtw-play-sound")
                   (equal (cadr entry) sound-id))
          (setq found t)))
      (setq records (cdr records)))
    found))

(defun gr-hotel-probe-wrap-func009 (&rest _args)
  "Prevent the hotel transition from entering the main loop."
  (setq gr-hotel-probe-func009-count (1+ gr-hotel-probe-func009-count))
  nil)

(defun gr-hotel-probe-wrap-func080 (&rest _args)
  "Keep hotel menu input side-effect free."
  (setq gr-hotel-probe-func080-count (1+ gr-hotel-probe-func080-count))
  nil)

(defun gr-hotel-probe-wrap-set-message (row1 &optional row2 color-index do-wait-key do-animation play-sound)
  "Capture shop messages while preserving native message state updates."
  (push (list row1 (or row2 "")) gr-hotel-probe-messages)
  (when gr-hotel-probe-saved-set-message
    (funcall gr-hotel-probe-saved-set-message
             row1 row2 color-index do-wait-key do-animation play-sound)))

(defun gr-hotel-probe-install-wrappers ()
  "Install wrappers for loop/input functions."
  (setq gr-hotel-probe-saved-func009 (gethash "func009" gr-native-funcs)
        gr-hotel-probe-saved-func080 (gethash "func080" gr-native-funcs)
        gr-hotel-probe-saved-autodraw (gethash "AutoDraw" gr-native-funcs))
  (gr-defnative "func009" #'gr-hotel-probe-wrap-func009)
  (gr-defnative "func080" #'gr-hotel-probe-wrap-func080)
  (gr-defnative "AutoDraw" (lambda (&rest _args) nil)))

(defun gr-hotel-probe-restore-wrappers ()
  "Restore wrapped functions."
  (if gr-hotel-probe-saved-func009
      (gr-defnative "func009" gr-hotel-probe-saved-func009)
    (remhash "func009" gr-native-funcs))
  (if gr-hotel-probe-saved-func080
      (gr-defnative "func080" gr-hotel-probe-saved-func080)
    (remhash "func080" gr-native-funcs))
  (if gr-hotel-probe-saved-autodraw
      (gr-defnative "AutoDraw" gr-hotel-probe-saved-autodraw)
    (remhash "AutoDraw" gr-native-funcs)))

(defun gr-hotel-probe-install-shop-wrappers ()
  "Install wrappers for shop paths that would otherwise wait for input."
  (setq gr-hotel-probe-saved-set-message (gethash "setMessage" gr-native-funcs)
        gr-hotel-probe-saved-autodraw (gethash "AutoDraw" gr-native-funcs)
        gr-hotel-probe-saved-func019 (gethash "func019" gr-native-funcs)
        gr-hotel-probe-saved-func094 (gethash "func094" gr-native-funcs)
        gr-hotel-probe-saved-func710 (gethash "func710" gr-native-funcs)
        gr-hotel-probe-messages nil)
  (gr-defnative "setMessage" #'gr-hotel-probe-wrap-set-message)
  (gr-defnative "AutoDraw" (lambda (&rest _args) nil))
  (gr-defnative "func019" (lambda (&rest _args) nil))
  (gr-defnative "func094" (lambda (&rest _args) nil))
  (gr-defnative "func710" (lambda (&rest _args) nil)))

(defun gr-hotel-probe-restore-shop-wrappers ()
  "Restore shop probe wrappers."
  (if gr-hotel-probe-saved-set-message
      (gr-defnative "setMessage" gr-hotel-probe-saved-set-message)
    (remhash "setMessage" gr-native-funcs))
  (if gr-hotel-probe-saved-autodraw
      (gr-defnative "AutoDraw" gr-hotel-probe-saved-autodraw)
    (remhash "AutoDraw" gr-native-funcs))
  (if gr-hotel-probe-saved-func019
      (gr-defnative "func019" gr-hotel-probe-saved-func019)
    (remhash "func019" gr-native-funcs))
  (if gr-hotel-probe-saved-func094
      (gr-defnative "func094" gr-hotel-probe-saved-func094)
    (remhash "func094" gr-native-funcs))
  (if gr-hotel-probe-saved-func710
      (gr-defnative "func710" gr-hotel-probe-saved-func710)
    (remhash "func710" gr-native-funcs)))

(defun gr-hotel-probe-find-active-enemy-slot ()
  "Return an active enemy slot suitable for func162's escort move."
  (let ((rows (gr-get 83))
        (idx 1)
        (found 0))
    (while (and (vectorp rows) (< idx (length rows)) (= found 0))
      (let ((row (aref rows idx)))
        (when (and (vectorp row)
                   (> (gr-num (or (gr-prop-ref row "Var0") 0)) 0))
          (setq found idx)))
      (setq idx (1+ idx)))
    found))

(defun gr-hotel-probe-run-render ()
  "Render the hotel hub/ranking screen once and return evidence."
  (setq gr-sumi nil
        gr-trace nil
        gr-missing nil)
  (gr-set 793 2)
  (gr-set 785 1)
  (gr-set 786 1)
  (gr-set 787 1)
  (gr-set 767 0)
  (gr-set 794 0)
  (gr-run-func "func168")
  (let ((records (reverse gr-sumi)))
    (list :records (length records)
          :has-hotel-bg (gr-hotel-probe-records-have-image-p records 17)
          :has-message-frame (gr-hotel-probe-records-have-image-p records 12)
          :has-requiem-text (gr-hotel-probe-records-have-text-p records "レクイエム")
          :trace (reverse gr-trace)
          :missing (reverse gr-missing))))

(defun gr-hotel-probe-run-transition ()
  "Run func162 hotel-return transition and return evidence."
  (let ((enemy-slot (gr-hotel-probe-find-active-enemy-slot))
        (before-player (list (gr-get 66) (gr-get 67))))
    (unless (> enemy-slot 0)
      (gr-hotel-probe-fail "no active enemy for func162"))
    (setq gr-hotel-probe-func009-count 0
          gr-hotel-probe-func080-count 0
          gr-sumi nil
          gr-trace nil
          gr-missing nil)
    (gr-set 771 enemy-slot)
    (gr-hotel-probe-install-wrappers)
    (unwind-protect
        (gr-run-func "func162")
      (gr-hotel-probe-restore-wrappers))
    (list :enemy-slot enemy-slot
          :before-player before-player
          :after-player (list (gr-get 66) (gr-get 67))
          :direction (gr-get 199)
          :mode (gr-get 595)
          :func009-count gr-hotel-probe-func009-count
          :trace (reverse gr-trace)
          :missing (reverse gr-missing))))

(defun gr-hotel-probe-shop-row ()
  "Return a deterministic sold item row for the restaurant shop probe."
  (let ((row (make-vector 40 0)))
    (aset row 0 850)
    (aset row 3 1)
    (aset row 4 0)
    (aset row 7 1)
    (aset row 11 1)
    row))

(defun gr-hotel-probe-run-shop-payment ()
  "Run the restaurant shop payment path and return evidence."
  (let ((items (gr-get 233))
        (enemy-grid (gr-get 82))
        (enemy-slot 0))
    (unless (vectorp items)
      (gr-hotel-probe-fail "inventory rows missing"))
    (setq enemy-slot
          (if (and (vectorp enemy-grid)
                   (vectorp (gr-index-ref enemy-grid 13)))
              (gr-num (or (gr-index-ref (gr-index-ref enemy-grid 13) 9) 0))
            0))
    (aset items 1 (gr-hotel-probe-shop-row))
    (gr-set 224 2)
    (gr-set "count_buying_price" 0)
    (gr-set "buying_price" 100)
    (gr-set "payment_amount" 0)
    (gr-set 1000 13)
    (gr-set 1001 9)
    (when (and (vectorp (gr-get 83))
               (vectorp (gr-index-ref (gr-get 83) enemy-slot)))
      (gr-prop-set (gr-index-ref (gr-get 83) enemy-slot) "Var12" 0)
      (gr-prop-set (gr-index-ref (gr-get 83) enemy-slot) "Var13" 0))
    (setq gr-sumi nil
          gr-trace nil
          gr-missing nil)
    (gr-hotel-probe-install-shop-wrappers)
    (unwind-protect
        (gr-run-func "func707")
      (gr-hotel-probe-restore-shop-wrappers))
    (list :messages (nreverse gr-hotel-probe-messages)
          :payment (gr-get "payment_amount")
          :trace (reverse gr-trace)
          :missing (reverse gr-missing))))

(defun gr-hotel-probe-run-shop-purchase ()
  "Run the restaurant shop purchase confirmation path and return evidence."
  (let ((items (gr-get 233))
        (before-wallet 10000)
        (payment 2850))
    (unless (vectorp items)
      (gr-hotel-probe-fail "inventory rows missing"))
    (aset items 1 (gr-hotel-probe-shop-row))
    (gr-prop-set (gr-index-ref items 1) "Var11" 1)
    (gr-set 224 2)
    (gr-set "wallet" before-wallet)
    (gr-set "payment_amount" payment)
    (gr-set "count_buying_price" payment)
    (setq gr-sumi nil
          gr-trace nil
          gr-missing nil)
    (gr-hotel-probe-install-shop-wrappers)
    (unwind-protect
        (gr-run-func "func716")
      (gr-hotel-probe-restore-shop-wrappers))
    (list :before-wallet before-wallet
          :after-wallet (gr-get "wallet")
          :payment (gr-get "payment_amount")
          :count-buying-price (gr-get "count_buying_price")
          :item-var11 (gr-prop-ref (gr-index-ref (gr-get 233) 1) "Var11")
          :sound139 (gr-hotel-probe-sound-emitted-p 139)
          :messages (nreverse gr-hotel-probe-messages)
          :trace (reverse gr-trace)
          :missing (reverse gr-missing))))

(defun gr-hotel-probe-run-shop-purchase-shortfall ()
  "Run the restaurant shop insufficient-funds purchase path."
  (let ((items (gr-get 233))
        (before-wallet 100)
        (payment 2850))
    (unless (vectorp items)
      (gr-hotel-probe-fail "inventory rows missing"))
    (aset items 1 (gr-hotel-probe-shop-row))
    (gr-prop-set (gr-index-ref items 1) "Var11" 1)
    (gr-set 224 2)
    (gr-set "wallet" before-wallet)
    (gr-set "payment_amount" payment)
    (gr-set "count_buying_price" payment)
    (setq gr-sumi nil
          gr-trace nil
          gr-missing nil)
    (gr-hotel-probe-install-shop-wrappers)
    (unwind-protect
        (gr-run-func "func716")
      (gr-hotel-probe-restore-shop-wrappers))
    (list :before-wallet before-wallet
          :after-wallet (gr-get "wallet")
          :payment (gr-get "payment_amount")
          :count-buying-price (gr-get "count_buying_price")
          :item-var11 (gr-prop-ref (gr-index-ref (gr-get 233) 1) "Var11")
          :messages (nreverse gr-hotel-probe-messages)
          :trace (reverse gr-trace)
          :missing (reverse gr-missing))))

(defun gr-hotel-probe-find-free-item-slot ()
  "Return an item-table slot that can be safely used by the probe."
  (let ((rows (gr-get 78))
        (idx 1)
        (found 0))
    (while (and (vectorp rows) (< idx (length rows)) (= found 0))
      (let ((row (aref rows idx)))
        (when (or (not (vectorp row))
                  (= (gr-num (or (gr-prop-ref row "Var0") 0)) 0))
          (setq found idx)))
      (setq idx (1+ idx)))
    (if (> found 0) found 1)))

(defun gr-hotel-probe-run-shop-floor-message ()
  "Run the item-on-floor shop price message path and return evidence."
  (let* ((items (gr-get 78))
         (item-grid (gr-get 77))
         (x (gr-num (or (gr-get 66) 13)))
         (y (gr-num (or (gr-get 67) 10)))
         (slot (gr-hotel-probe-find-free-item-slot)))
    (unless (and (vectorp items) (vectorp item-grid) (vectorp (gr-index-ref item-grid x)))
      (gr-hotel-probe-fail "floor item grid missing"))
    (aset items slot (gr-hotel-probe-shop-row))
    (aset (gr-index-ref item-grid x) y slot)
    (gr-set "buying_price" 100)
    (setq gr-sumi nil
          gr-trace nil
          gr-missing nil)
    (gr-hotel-probe-install-shop-wrappers)
    (unwind-protect
        (gr-run-func "func419")
      (gr-hotel-probe-restore-shop-wrappers))
    (list :slot slot
          :position (list x y)
          :item-var11 (gr-prop-ref (gr-index-ref (gr-get 78) slot) "Var11")
          :price (gr-get 1925)
          :messages (nreverse gr-hotel-probe-messages)
          :trace (reverse gr-trace)
          :missing (reverse gr-missing))))

(defun gr-hotel-probe-main ()
  "Run the hotel hub probe after a normal direct dungeon bootstrap."
  (let ((runtime-dir gr-hotel-probe-runtime-dir)
        (render nil)
        (transition nil)
        (shop nil)
        (purchase nil)
        (shortfall nil)
        (floor-shop nil))
    (setq default-directory gr-hotel-probe-repo-root)
    (setenv "SUMI_AUDIO" "0")
    (setenv "GR_PLAY_SKIP_OPENING" "1")
    (setenv "GR_PLAY_DURATION_SECONDS" "0.1")
    (setenv "GR_PLAY_DIRECT_BIN" "0")
    (setenv "GR_DATA_ROOT" (expand-file-name "build/hotel-probe-data" gr-hotel-probe-repo-root))
    (setenv "HOME" (expand-file-name "build/emacs-home" gr-hotel-probe-repo-root))
    (load-file (expand-file-name "game-runner.el" runtime-dir))
    (load-file (expand-file-name "gamedata-simple.el" runtime-dir))
    (load-file (expand-file-name "gamedata-conditional.el" runtime-dir))
    (load-file (expand-file-name "gamedata-state.el" runtime-dir))
    (load-file (expand-file-name "sumi-json.el" runtime-dir))
    (load-file (expand-file-name "play.el" runtime-dir))
    (setq render (gr-hotel-probe-run-render))
    (setq transition (gr-hotel-probe-run-transition))
    (setq shop (gr-hotel-probe-run-shop-payment))
    (setq purchase (gr-hotel-probe-run-shop-purchase))
    (setq shortfall (gr-hotel-probe-run-shop-purchase-shortfall))
    (setq floor-shop (gr-hotel-probe-run-shop-floor-message))
    (princ (format "HOTEL-RENDER %S\n" render))
    (princ (format "HOTEL-TRANSITION %S\n" transition))
    (princ (format "HOTEL-SHOP %S\n" shop))
    (princ (format "HOTEL-SHOP-PURCHASE %S\n" purchase))
    (princ (format "HOTEL-SHOP-SHORTFALL %S\n" shortfall))
    (princ (format "HOTEL-FLOOR-SHOP %S\n" floor-shop))
    (gr-hotel-probe-assert "render-records" (> (plist-get render :records) 0))
    (gr-hotel-probe-assert "hotel-background" (plist-get render :has-hotel-bg))
    (gr-hotel-probe-assert "hub-text" (plist-get render :has-requiem-text))
    (gr-hotel-probe-assert "render-missing" (null (plist-get render :missing)))
    (gr-hotel-probe-assert "transition-trace" (member 162 (plist-get transition :trace)))
    (gr-hotel-probe-assert "transition-player" (equal (plist-get transition :after-player) '(13 10)))
    (gr-hotel-probe-assert "transition-loop-stop" (> (plist-get transition :func009-count) 0))
    (gr-hotel-probe-assert "transition-missing" (null (plist-get transition :missing)))
    (gr-hotel-probe-assert "shop-trace" (and (member 707 (plist-get shop :trace))
                                             (member 709 (plist-get shop :trace))))
    (gr-hotel-probe-assert "shop-payment" (> (gr-num (plist-get shop :payment)) 0))
    (gr-hotel-probe-assert "shop-message"
                           (cl-some
                            (lambda (message)
                              (and (string-match-p "お買い物金額" (car message))
                                   (string-match-p "G になりマス" (cadr message))))
                            (plist-get shop :messages)))
    (gr-hotel-probe-assert "shop-nonempty-message"
                           (cl-every
                            (lambda (message)
                              (or (> (length (or (car message) "")) 0)
                                  (> (length (or (cadr message) "")) 0)))
                            (plist-get shop :messages)))
    (gr-hotel-probe-assert "shop-missing" (null (plist-get shop :missing)))
    (gr-hotel-probe-assert "purchase-trace" (and (member 716 (plist-get purchase :trace))
                                                 (member 720 (plist-get purchase :trace))
                                                 (member 718 (plist-get purchase :trace))))
    (gr-hotel-probe-assert "purchase-wallet"
                           (= (gr-num (plist-get purchase :after-wallet))
                              (- (gr-num (plist-get purchase :before-wallet)) 2850)))
    (gr-hotel-probe-assert "purchase-payment-reset" (= (gr-num (plist-get purchase :payment)) 0))
    (gr-hotel-probe-assert "purchase-count-reset" (= (gr-num (plist-get purchase :count-buying-price)) 0))
    (gr-hotel-probe-assert "purchase-item-paid" (= (gr-num (plist-get purchase :item-var11)) 0))
    (gr-hotel-probe-assert "purchase-sound" (plist-get purchase :sound139))
    (gr-hotel-probe-assert "purchase-message"
                           (cl-some
                            (lambda (message)
                              (string-match-p "ありがとうございました" (car message)))
                            (plist-get purchase :messages)))
    (gr-hotel-probe-assert "purchase-missing" (null (plist-get purchase :missing)))
    (gr-hotel-probe-assert "shortfall-trace" (and (member 716 (plist-get shortfall :trace))
                                                  (member 719 (plist-get shortfall :trace))))
    (gr-hotel-probe-assert "shortfall-wallet-restored"
                           (= (gr-num (plist-get shortfall :after-wallet))
                              (gr-num (plist-get shortfall :before-wallet))))
    (gr-hotel-probe-assert "shortfall-payment-kept" (= (gr-num (plist-get shortfall :payment)) 2850))
    (gr-hotel-probe-assert "shortfall-count-kept" (= (gr-num (plist-get shortfall :count-buying-price)) 2850))
    (gr-hotel-probe-assert "shortfall-item-still-unpaid" (= (gr-num (plist-get shortfall :item-var11)) 1))
    (gr-hotel-probe-assert "shortfall-message"
                           (cl-some
                            (lambda (message)
                              (string-match-p "お金が足りません" (car message)))
                            (plist-get shortfall :messages)))
    (gr-hotel-probe-assert "shortfall-missing" (null (plist-get shortfall :missing)))
    (gr-hotel-probe-assert "floor-shop-trace" (member 419 (plist-get floor-shop :trace)))
    (gr-hotel-probe-assert "floor-shop-name-trace" (member 398 (plist-get floor-shop :trace)))
    (gr-hotel-probe-assert "floor-shop-price-trace" (member 492 (plist-get floor-shop :trace)))
    (gr-hotel-probe-assert "floor-shop-price" (= (gr-num (plist-get floor-shop :price)) 2850))
    (gr-hotel-probe-assert "floor-shop-var11" (= (gr-num (plist-get floor-shop :item-var11)) 1))
    (gr-hotel-probe-assert "floor-shop-message"
                           (cl-some
                            (lambda (message)
                              (and (> (length (or (car message) "")) 0)
                                   (not (string-match-p "商品" (car message)))
                                   (not (string-match-p "データ未取得" (car message)))
                                   (string-match-p "(1)" (car message))
                                   (string-match-p "2850" (cadr message))
                                   (string-match-p "G" (cadr message))))
                            (plist-get floor-shop :messages)))
    (gr-hotel-probe-assert "floor-shop-missing" (null (plist-get floor-shop :missing)))
    (princ "HOTEL-PROBE-OK\n")))

(when noninteractive
  (gr-hotel-probe-main))

;;; run-hotel-probe.el ends here
