;;; live-feed-loop.el --- feed NeLisp frames to the live sprite bridge -*- lexical-binding: t; -*-

(require 'cl-lib)
(require 'json)
(require 'subr-x)

(defconst gr-live-feed-repo-root
  (expand-file-name ".." (file-name-directory (or load-file-name buffer-file-name))))

(defvar gr-live-feed-poll-seconds 0.01)
(defvar gr-live-feed-seconds nil)
(defvar gr-live-feed-port 9099)
(defvar gr-live-feed-direct-bin nil)
(defvar gr-live-feed-write-sequence-files
  (equal (getenv "GR_LIVE_FEED_WRITE_SEQUENCE_FILES") "1")
  "When non-nil, also write archived sumi-sprite-NNNNNN.bin frames.")
(defvar gr-live-feed-atomic-writes
  (equal (getenv "GR_LIVE_FEED_ATOMIC_WRITES") "1")
  "When non-nil, write direct-bin frames through tmp+rename.")
(defvar gr-live-feed-direct-bin-dir-ensured nil)
(defvar gr-live-feed-library-only nil
  "When non-nil, loading this file only defines feeder helpers.")
(defvar gr-live-feed-bin-seq 0)
(defvar gr-live-feed-normalize-seconds 0.0)
(defvar gr-live-feed-pack-seconds 0.0)
(defvar gr-live-feed-pack-command-seconds 0.0)
(defvar gr-live-feed-pack-compact-seconds 0.0)
(defvar gr-live-feed-pack-finish-seconds 0.0)
(defvar gr-live-feed-write-seconds 0.0)
(defvar gr-live-feed-head-seconds 0.0)
(defvar gr-live-feed-last-packed-bytes 0)
(defvar gr-live-feed-profile-enabled (getenv "GR_LIVE_FEED_PROFILE"))
(defvar gr-live-feed-profile-counts nil)
(defvar gr-live-feed-u64-cache (make-hash-table :test 'eql))
(defvar gr-live-feed-f64-cache (make-hash-table :test 'equal))
(defvar gr-live-feed-string-bytes-cache (make-hash-table :test 'equal))
(defvar gr-live-feed-grid-payload-cache (make-hash-table :test 'equal))
(defvar gr-live-feed-op12-chunk-cache (make-hash-table :test 'equal))
(defvar gr-live-feed-packed-command-cache (make-hash-table :test 'equal))
(defvar gr-live-feed-frames-dir
  (expand-file-name "build/frames" gr-live-feed-repo-root))
(defvar gr-live-feed-current-frame-path
  (expand-file-name "build/frame-current.json" gr-live-feed-repo-root))
(defvar gr-live-feed-current-seq-path
  (expand-file-name "build/frame-current.seq" gr-live-feed-repo-root))
(defvar gr-live-feed-title-stream-path
  (expand-file-name "sumi-title-stream.json" gr-live-feed-repo-root))
(defvar gr-live-feed-assets-dir
  (expand-file-name "assets/img" gr-live-feed-repo-root))
(defvar gr-live-feed-bgm-dir
  (expand-file-name "assets/bgm" gr-live-feed-repo-root))
(defvar gr-live-feed-se-dir
  (expand-file-name "assets/se" gr-live-feed-repo-root))
(defvar gr-live-feed-audio-enabled (string= (or (getenv "SUMI_AUDIO") "0") "1"))
(defvar gr-live-feed-bgm-enabled
  (and gr-live-feed-audio-enabled
       (string= (or (getenv "SUMI_BGM") "1") "1")))
(defvar gr-live-feed-se-enabled
  (and gr-live-feed-audio-enabled
       (string= (or (getenv "SUMI_SE") "0") "1")))
(defvar gr-live-feed-bgm-process nil)
(defvar gr-live-feed-bgm-file nil)
(defvar gr-live-feed-bgm-volume 0.5)
(defvar gr-live-feed-se-volume 0.65)
(defvar gr-live-feed-last-se-time 0.0)

(defvar gr-live-feed-process nil)
(defvar gr-live-feed-received-count 0)
(defvar gr-live-feed-sent-count 0)
(defvar gr-live-feed-last-received-seq 0)
(defvar gr-live-feed-last-sent-seq 0)
(defvar gr-live-feed-receive-gap-count 0)
(defvar gr-live-feed-send-gap-count 0)
(defvar gr-live-feed-scheduled-paths nil)
(defvar gr-live-feed-pending-deletes nil)
(defvar gr-live-feed-start-time nil)
(defvar gr-live-feed-title-screen-sizes nil)
(defvar gr-live-feed-title-load-images nil)

(defconst gr-live-feed-always-screens
  '((0 . (340 340))
    (4 . (680 680))
    (7 . (680 680))))

(defconst gr-live-feed-music-func-bgm
  '(("music-func103" . "0.mp3")
    ("music-func106" . "0.mp3")
    ("music-func107" . "0.mp3")
    ("music-func109" . "102.mp3")
    ("music-func110" . "315.mp3")
    ("music-func111" . "0.mp3")
    ("music-func113" . "988.mp3")
    ("music-func114" . "989.mp3")
    ("music-func114b" . "976.mp3")
    ("music-func116" . "990.mp3")
    ("music-func117" . "115.mp3")
    ("music-func118" . "986.mp3")
    ("music-func119" . "998.mp3")
    ("music-func120" . "978.mp3")
    ("music-func121" . "105.mp3")
    ("music-func122" . "999.mp3")
    ("music-func123" . "997.mp3")
    ("music-func124" . "994.mp3")
    ("music-func125" . "993.mp3")
    ("music-func126" . "991.mp3")
    ("music-func127" . "992.mp3")
    ("music-func128" . "203.mp3")
    ("music-func129" . "996.mp3")
    ("music-func130" . "998.mp3")
    ("music-func131" . "985.mp3")
    ("music-func132" . "313.mp3")
    ("music-func133" . "981.mp3")
    ("music-func134" . "980.mp3")
    ("music-func135" . "980.mp3")
    ("music-func136" . "987.mp3")))

(defun gr-live-feed-parse-args ()
  "Parse command-line arguments after -- for the live feeder."
  (let ((args command-line-args-left)
        arg)
    (while args
      (setq arg (pop args))
      (cond
       ((string= arg "--seconds")
        (setq gr-live-feed-seconds (string-to-number (pop args))))
       ((string= arg "--port")
        (setq gr-live-feed-port (string-to-number (pop args))))
       ((string= arg "--frames")
        (setq gr-live-feed-frames-dir (expand-file-name (pop args))))
       ((string= arg "--title-stream")
        (setq gr-live-feed-title-stream-path (expand-file-name (pop args))))
       ((string= arg "--direct-bin")
        (setq gr-live-feed-direct-bin (expand-file-name (pop args))))))))

(defun gr-live-feed-json-array-file (path)
  "Read PATH as a JSON array."
  (let ((json-array-type 'list)
        (json-object-type 'alist)
        (json-key-type 'string)
        (json-false nil))
    (json-read-file path)))

(defun gr-live-feed-record-name (record)
  "Return RECORD's name."
  (if (vectorp record)
      (aref record 0)
    (cdr (assoc "name" record))))

(defun gr-live-feed-record-nums (record)
  "Return RECORD's numeric argument list."
  (if (vectorp record)
      (aref record 1)
    (let ((nums (cdr (assoc "nums" record))))
      (cond
       ((vectorp nums) (append nums nil))
       ((listp nums) nums)
       (t nil)))))

(defun gr-live-feed-record-text (record)
  "Return RECORD's text payload."
  (if (vectorp record)
      (aref record 2)
    (cdr (assoc "text" record))))

(defun gr-live-feed-record (name nums &optional text)
  "Build a sumi JSON record."
  (let ((record `(("name" . ,name) ("nums" . ,nums))))
    (when text
      (setq record (append record `(("text" . ,text)))))
    record))

(defun gr-live-feed-load-title-stream-table ()
  "Load title stream screen/image metadata."
  (setq gr-live-feed-title-screen-sizes (make-hash-table :test 'equal))
  (setq gr-live-feed-title-load-images (make-hash-table :test 'equal))
  (dolist (record (gr-live-feed-json-array-file gr-live-feed-title-stream-path))
    (let ((name (gr-live-feed-record-name record))
          (nums (gr-live-feed-record-nums record)))
      (when (and (string= name "gui-screen")
                 (>= (length nums) 3)
                 (not (gethash (nth 0 nums) gr-live-feed-title-screen-sizes)))
        (puthash (nth 0 nums)
                 (list (nth 1 nums) (nth 2 nums))
                 gr-live-feed-title-screen-sizes))
      (when (and (string= name "gui-load-image")
                 (>= (length nums) 1)
                 (stringp (gr-live-feed-record-text record))
                 (not (gethash (nth 0 nums) gr-live-feed-title-load-images)))
        (puthash (nth 0 nums)
                 (gr-live-feed-record-text record)
                 gr-live-feed-title-load-images)))))

(defun gr-live-feed-referenced-buffers (records)
  "Return sorted buffer ids referenced by RECORDS."
  (let ((ids (make-hash-table :test 'equal)))
    (dolist (entry gr-live-feed-always-screens)
      (puthash (car entry) t ids))
    (dolist (record records)
      (let ((name (gr-live-feed-record-name record))
            (nums (gr-live-feed-record-nums record)))
        (cond
         ((and nums
               (or (string= name "gui-draw-image-scaled")
                   (string= name "gui-select-buffer")))
          (let ((id (nth 0 nums)))
            (when (numberp id)
              (puthash id t ids))))
         ;; Alpha-folded blits: play.el's gr-play-compact-alpha-image-records
         ;; folds a gui-set-alpha immediately followed by a gui-draw-image-scaled
         ;; into a single gui-draw-image-scaled-alpha whose nums are
         ;; (ALPHA SRC-BUFFER ...), so the source buffer sits at nums[1], not
         ;; nums[0].  Without recognizing it here the source PNG is never
         ;; injected (op-10 never runs) and every alpha-blended sprite renders
         ;; blank -- the login selection arrow and the opening-story characters
         ;; are drawn only through this alpha path.
         ((and nums
               (or (string= name "gui-draw-image-scaled-alpha")
                   (string= name "dtw-draw-image-scaled-alpha")))
          (let ((id (nth 1 nums)))
            (when (numberp id)
              (puthash id t ids)))))))
    (sort (hash-table-keys ids) #'<)))

(defun gr-live-feed-read-u32be (bytes offset)
  "Read a big-endian uint32 from BYTES at OFFSET."
  (+ (ash (aref bytes offset) 24)
     (ash (aref bytes (+ offset 1)) 16)
     (ash (aref bytes (+ offset 2)) 8)
     (aref bytes (+ offset 3))))

(defun gr-live-feed-png-size (path)
  "Return PNG size for PATH as (W H), or nil."
  (when (file-exists-p path)
    (with-temp-buffer
      (set-buffer-multibyte nil)
      (insert-file-contents-literally path nil 0 24)
      (let ((bytes (buffer-string)))
        (when (and (>= (length bytes) 24)
                   (= (gr-live-feed-read-u32be bytes 0) #x89504e47))
          (list (gr-live-feed-read-u32be bytes 16)
                (gr-live-feed-read-u32be bytes 20)))))))

(defun gr-live-feed-buffer-size (id image)
  "Return buffer size for ID and optional IMAGE."
  (or (cdr (assoc id gr-live-feed-always-screens))
      (when image
        (gr-live-feed-png-size
         (expand-file-name (concat image ".png") gr-live-feed-assets-dir)))
      (gethash id gr-live-feed-title-screen-sizes)))

(defun gr-live-feed-assemble (records)
  "Prepend screen/image setup records to RECORDS."
  (let ((screen-records nil)
        (load-records nil))
    (dolist (id (gr-live-feed-referenced-buffers records))
      (let* ((image (gethash id gr-live-feed-title-load-images))
             (size (gr-live-feed-buffer-size id image)))
        (when (and size (not image))
          (push (gr-live-feed-record "gui-screen" (list id (nth 0 size) (nth 1 size)))
                screen-records))
        (when image
          (push (gr-live-feed-record "gui-load-image" (list id) image)
                load-records))))
    (append (nreverse screen-records)
            (nreverse load-records)
            (list (gr-live-feed-record "gui-select-buffer" '(0)))
            records)))

(defun gr-live-feed-frame-files ()
  "Return sorted frame files as (SEQ . PATH)."
  (when (file-directory-p gr-live-feed-frames-dir)
    (sort
     (delq nil
           (mapcar
            (lambda (path)
              (when (string-match "\\`frame-\\([0-9]+\\)\\.json\\'" (file-name-nondirectory path))
                (cons (string-to-number (match-string 1 (file-name-nondirectory path)))
                      path)))
            (directory-files gr-live-feed-frames-dir t "\\`frame-[0-9]+\\.json\\'")))
     (lambda (a b) (< (car a) (car b))))))

(defun gr-live-feed-note-seq (kind seq)
  "Track received/sent SEQ gap counters for KIND."
  (if (eq kind 'received)
      (progn
        (when (and (/= gr-live-feed-last-received-seq 0)
                   (/= seq (1+ gr-live-feed-last-received-seq)))
          (setq gr-live-feed-receive-gap-count
                (1+ gr-live-feed-receive-gap-count)))
        (setq gr-live-feed-last-received-seq seq)
        (setq gr-live-feed-received-count (1+ gr-live-feed-received-count)))
    (when (and (/= gr-live-feed-last-sent-seq 0)
               (/= seq (1+ gr-live-feed-last-sent-seq)))
      (setq gr-live-feed-send-gap-count
            (1+ gr-live-feed-send-gap-count)))
    (setq gr-live-feed-last-sent-seq seq)
    (setq gr-live-feed-sent-count (1+ gr-live-feed-sent-count))))

(defun gr-live-feed-connect ()
  "Ensure the TCP bridge connection exists."
  (unless (and gr-live-feed-process
               (process-live-p gr-live-feed-process))
    (setq gr-live-feed-process
          (make-network-process
           :name "gr-live-feed"
           :host "127.0.0.1"
           :service gr-live-feed-port
           :nowait nil
           :coding 'utf-8-unix
           :noquery t))))

(defun gr-live-feed-send (seq payload)
  "Send PAYLOAD for SEQ to the bridge."
  (condition-case err
      (progn
        (gr-live-feed-connect)
        (process-send-string gr-live-feed-process payload)
        t)
    (error
     (when (process-live-p gr-live-feed-process)
       (delete-process gr-live-feed-process))
     (setq gr-live-feed-process nil)
     (princ (format "live-feed-loop.el: socket send failed for seq %d: %s\n"
                    seq (error-message-string err)))
     nil)))

(defun gr-live-feed-u64-le (value)
  "Return VALUE encoded as an unsigned little-endian u64 string."
  (let* ((v (logand (truncate (or value 0)) #xffffffffffffffff))
         (s (make-string 8 0)))
    (dotimes (i 8)
      (aset s i (logand (ash v (* -8 i)) #xff)))
    (string-make-unibyte s)))

(defun gr-live-feed-f64-bits (value)
  "Return IEEE754 double bits for VALUE."
  (let* ((x (float (or value 0)))
         (sign (if (< x 0.0) 1 0)))
    (setq x (abs x))
    (if (= x 0.0)
        (ash sign 63)
      (let* ((e (floor (/ (log x) (log 2.0))))
             (pow (expt 2.0 e)))
        (while (< x pow)
          (setq e (1- e))
          (setq pow (/ pow 2.0)))
        (while (>= x (* 2.0 pow))
          (setq e (1+ e))
          (setq pow (* pow 2.0)))
        (let* ((fraction (- (/ x pow) 1.0))
               (mantissa (round (* fraction (expt 2.0 52)))))
          (when (>= mantissa (expt 2 52))
            (setq mantissa 0)
            (setq e (1+ e)))
          (logior (ash sign 63)
                  (ash (+ e 1023) 52)
                  mantissa))))))

(defun gr-live-feed-f64-le (value)
  "Return VALUE encoded as little-endian double bits."
  (gr-live-feed-u64-le (gr-live-feed-f64-bits value)))

(defun gr-live-feed-u64 (value)
  "Return VALUE as an unsigned u64 slot."
  (let ((key (logand (truncate (or value 0)) #xffffffffffffffff)))
    (or (gethash key gr-live-feed-u64-cache)
        (puthash key (gr-live-feed-u64-le key) gr-live-feed-u64-cache))))

(defun gr-live-feed-f64 (value)
  "Return VALUE as an f64 slot."
  (let ((key (float (or value 0))))
    (when (= key 0.0)
      (setq key 0.0))
    (or (gethash key gr-live-feed-f64-cache)
        (puthash key (gr-live-feed-f64-le key) gr-live-feed-f64-cache))))

(defun gr-live-feed-string-bytes (text)
  "Return UTF-8 bytes for TEXT."
  (let ((key (or text "")))
    (or (gethash key gr-live-feed-string-bytes-cache)
        (puthash key
                 (string-make-unibyte
                  (encode-coding-string key 'utf-8-unix))
                 gr-live-feed-string-bytes-cache))))

(defun gr-live-feed-blob-offset (state)
  "Return the next one-based blob offset for STATE."
  (1+ (or (plist-get state :blob-len) 0)))

(defun gr-live-feed-append-blob (state bytes)
  "Append unibyte BYTES to STATE's blob parts."
  (plist-put state :blob-parts (cons bytes (plist-get state :blob-parts)))
  (plist-put state :blob-len (+ (or (plist-get state :blob-len) 0)
                                (length bytes))))

(defun gr-live-feed-state-blob (state)
  "Return STATE's complete blob string."
  (apply #'concat (nreverse (plist-get state :blob-parts))))

(defun gr-live-feed-intern-string (text state)
  "Intern TEXT in STATE and return one-based byte offset."
  (let* ((table (plist-get state :table))
         (existing (gethash text table)))
    (or existing
        (let* ((offset (gr-live-feed-blob-offset state))
               (bytes (string-make-unibyte
                       (concat (gr-live-feed-string-bytes text) "\0"))))
          (puthash text offset table)
          (gr-live-feed-append-blob state bytes)
          offset))))

(defun gr-live-feed-pack-rec (op slots &optional text state)
  "Pack one renderer record with OP, SLOTS, optional TEXT and STATE."
  (let* ((zero (gr-live-feed-u64 0))
         (key (and (null text) (cons op slots)))
         (cached (and key (gethash key gr-live-feed-packed-command-cache))))
    (or cached
        (let ((packed
               (concat
                (gr-live-feed-u64 op)
                (or (nth 0 slots) zero)
                (or (nth 1 slots) zero)
                (or (nth 2 slots) zero)
                (or (nth 3 slots) zero)
                (or (nth 4 slots) zero)
                (or (nth 5 slots) zero)
                (or (nth 6 slots) zero)
                (or (nth 7 slots) zero)
                (or (nth 8 slots) zero)
                (or (nth 9 slots) zero)
                (if text
                    (gr-live-feed-u64 (gr-live-feed-intern-string text state))
                  zero))))
          (when key
            (puthash key packed gr-live-feed-packed-command-cache))
          packed))))

(defun gr-live-feed-pack-rec-raw (op &optional s0 s1 s2 s3 s4 s5 s6 s7 s8 s9 text state)
  "Pack one renderer record with pre-packed slot strings."
  (let ((zero (gr-live-feed-u64 0)))
    (concat
     (gr-live-feed-u64 op)
     (or s0 zero)
     (or s1 zero)
     (or s2 zero)
     (or s3 zero)
     (or s4 zero)
     (or s5 zero)
     (or s6 zero)
     (or s7 zero)
     (or s8 zero)
     (or s9 zero)
     (if text
         (gr-live-feed-u64 (gr-live-feed-intern-string text state))
       zero))))

(defun gr-live-feed-read-u64-at (bytes offset)
  "Read a little-endian unsigned u64 from unibyte BYTES at OFFSET."
  (let ((value 0)
        (shift 0)
        (idx 0))
    (while (< idx 8)
      (setq value (+ value (lsh (aref bytes (+ offset idx)) shift)))
      (setq shift (+ shift 8))
      (setq idx (1+ idx)))
    value))

(defun gr-live-feed-op12-batch-record (run state)
  "Pack a batch blit record for the consecutive op12 RUN."
  (let* ((first (car run))
         (src (gr-live-feed-read-u64-at first 8))
         (offset (gr-live-feed-blob-offset state))
         (count 0))
    (dolist (cmd run)
      ;; Store dx, dy, sx, sy, sw, sh, scale-x and scale-y.  Source and alpha
      ;; are shared by the batch record/current renderer state.
      (gr-live-feed-append-blob state (substring cmd 16 80))
      (setq count (1+ count)))
    (gr-live-feed-pack-rec 16
                           (list (gr-live-feed-u64 src)
                                 (gr-live-feed-u64 count)
                                 (gr-live-feed-u64 offset))
                           nil state)))

(defun gr-live-feed-op15-pair-batch-record (pairs state)
  "Pack a batch record for repeated op15 overlay PAIRS."
  (let* ((first-pair (car pairs))
         (first-a (car first-pair))
         (first-b (cdr first-pair))
         (src-a (gr-live-feed-read-u64-at first-a 8))
         (src-b (gr-live-feed-read-u64-at first-b 8))
         (alpha-a (substring first-a 80 88))
         (alpha-b (substring first-b 80 88))
         (offset (gr-live-feed-blob-offset state))
         (count 0))
    (dolist (pair pairs)
      (gr-live-feed-append-blob state (substring (car pair) 16 80))
      (setq count (1+ count)))
    (gr-live-feed-pack-rec 17
                           (list (gr-live-feed-u64 src-a)
                                 (gr-live-feed-u64 src-b)
                                 (gr-live-feed-u64 count)
                                 (gr-live-feed-u64 offset)
                                 alpha-a
                                 alpha-b)
                           nil state)))

(defun gr-live-feed-text-batch-record (items state)
  "Pack batched text ITEMS as one op18 command."
  (let ((chunks nil)
        (count 0)
        (offset nil))
    (dolist (item items)
      (let ((x (nth 0 item))
            (y (nth 1 item))
            (text (nth 2 item)))
        (push (concat
               (gr-live-feed-f64 x)
               (gr-live-feed-f64 y)
               (gr-live-feed-u64
                (gr-live-feed-intern-string text state)))
              chunks)
        (setq count (1+ count))))
    (setq offset (gr-live-feed-blob-offset state))
    (dolist (chunk (nreverse chunks))
      (gr-live-feed-append-blob state chunk))
    (when items
      (let ((last (car (last items))))
        (plist-put state :px (nth 0 last))
        (plist-put state :py (nth 1 last))))
    (gr-live-feed-pack-rec 18
                           (list (gr-live-feed-u64 count)
                                 (gr-live-feed-u64 offset))
                           nil state)))

(defun gr-live-feed-position-text-pair-p (pos text)
  "Return non-nil when POS/TEXT can be batched as plain text."
  (and pos text
       (string= (gr-live-feed-record-name pos) "gui-set-position")
       (string= (gr-live-feed-record-name text) "gui-draw-text")))

(defun gr-live-feed-collect-text-batch (records)
  "Collect a leading run of set-position/draw-text pairs from RECORDS."
  (let ((rest records)
        (items nil))
    (while (gr-live-feed-position-text-pair-p (car rest) (cadr rest))
      (let ((nums (gr-live-feed-record-nums (car rest))))
        (push (list (float (or (nth 0 nums) 0))
                    (float (or (nth 1 nums) 0))
                    (gr-live-feed-record-text (cadr rest)))
              items))
      (setq rest (cddr rest)))
    (cons (nreverse items) rest)))

(defun gr-live-feed-draw-text-at-p (record)
  "Return non-nil when RECORD is direct positioned text."
  (and record (string= (gr-live-feed-record-name record) "gui-draw-text-at")))

(defun gr-live-feed-collect-text-at-batch (records)
  "Collect a leading run of gui-draw-text-at RECORDS."
  (let ((rest records)
        (items nil))
    (while (gr-live-feed-draw-text-at-p (car rest))
      (let ((nums (gr-live-feed-record-nums (car rest))))
        (push (list (float (or (nth 0 nums) 0))
                    (float (or (nth 1 nums) 0))
                    (gr-live-feed-record-text (car rest)))
              items))
      (setq rest (cdr rest)))
    (cons (nreverse items) rest)))

(defun gr-live-feed-op12-record-chunk (record)
  "Return (SRC . PAYLOAD) when RECORD is a plain image blit."
  (let* ((name (gr-live-feed-record-name record))
         (nums (gr-live-feed-record-nums record)))
    (cond
     ((member name '("gui-draw-image" "dtw-draw-image"))
      (let* ((id (nth 0 nums))
             (sx (float (or (nth 1 nums) 0)))
             (sy (float (or (nth 2 nums) 0)))
             (sw (float (or (nth 3 nums) 0)))
             (sh (float (or (nth 4 nums) 0)))
             (dx (float (or (nth 5 nums) 0)))
             (dy (float (or (nth 6 nums) 0)))
             (key (list dx dy sx sy sw sh 1.0 1.0)))
        (cons id
              (or (gethash key gr-live-feed-op12-chunk-cache)
                  (puthash key
                           (concat (gr-live-feed-f64 dx)
                                   (gr-live-feed-f64 dy)
                                   (gr-live-feed-f64 (- sx))
                                   (gr-live-feed-f64 (- sy))
                                   (gr-live-feed-f64 sw)
                                   (gr-live-feed-f64 sh)
                                   (gr-live-feed-f64 1.0)
                                   (gr-live-feed-f64 1.0))
                           gr-live-feed-op12-chunk-cache)))))
     ((member name '("gui-draw-image-scaled" "dtw-draw-image-scaled"))
      (let* ((id (nth 0 nums))
             (sx (float (or (nth 1 nums) 0)))
             (sy (float (or (nth 2 nums) 0)))
             (sw (float (or (nth 3 nums) 0)))
             (sh (float (or (nth 4 nums) 0)))
             (dx (float (or (nth 5 nums) 0)))
             (dy (float (or (nth 6 nums) 0)))
             (dw (float (or (nth 7 nums) sw)))
             (dh (float (or (nth 8 nums) sh)))
             (scale-x (if (= sw 0.0) 1.0 (/ dw sw)))
             (scale-y (if (= sh 0.0) 1.0 (/ dh sh)))
             (key (list dx dy sx sy sw sh scale-x scale-y)))
        (cons id
              (or (gethash key gr-live-feed-op12-chunk-cache)
                  (puthash key
                           (concat (gr-live-feed-f64 dx)
                                   (gr-live-feed-f64 dy)
                                   (gr-live-feed-f64 (- sx))
                                   (gr-live-feed-f64 (- sy))
                                   (gr-live-feed-f64 sw)
                                   (gr-live-feed-f64 sh)
                                   (gr-live-feed-f64 scale-x)
                                   (gr-live-feed-f64 scale-y))
                           gr-live-feed-op12-chunk-cache)))))
     (t nil))))

(defun gr-live-feed-collect-op12-record-batch (records)
  "Collect a leading same-source op12-compatible run from RECORDS."
  (let* ((first (gr-live-feed-op12-record-chunk (car records)))
         (src (car first))
         (rest records)
         (chunks nil)
         (originals nil))
    (while (let ((chunk (and rest (gr-live-feed-op12-record-chunk (car rest)))))
             (and chunk (equal (car chunk) src)
                  (progn
                    (push (cdr chunk) chunks)
                    (push (car rest) originals)
                    (setq rest (cdr rest))
                    t))))
    (list src (nreverse chunks) (nreverse originals) rest)))

(defun gr-live-feed-pack-op12-chunks (src chunks state)
  "Pack OP12-compatible CHUNKS for SRC, batching only when useful."
  (if (>= (length chunks) 8)
      (list (gr-live-feed-op12-record-batch src chunks state))
    (let (out)
      (dolist (chunk chunks)
        (push (gr-live-feed-pack-rec
               12
               (list (gr-live-feed-u64 src)
                     (substring chunk 0 8)
                     (substring chunk 8 16)
                     (substring chunk 16 24)
                     (substring chunk 24 32)
                     (substring chunk 32 40)
                     (substring chunk 40 48)
                     (substring chunk 48 56)
                     (substring chunk 56 64))
               nil state)
              out))
      (nreverse out))))

(defun gr-live-feed-op12-record-batch (src chunks state)
  "Pack CHUNKS with common SRC as an op16 batch command."
  (let ((offset (gr-live-feed-blob-offset state))
        (count 0))
    (dolist (chunk chunks)
      (gr-live-feed-append-blob state chunk)
      (setq count (1+ count)))
    (gr-live-feed-pack-rec 16
                           (list (gr-live-feed-u64 src)
                                 (gr-live-feed-u64 count)
                                 (gr-live-feed-u64 offset))
                           nil state)))

(defun gr-live-feed-grid40-batch-record (nums state)
  "Pack a 40px background grid record as one op16 command."
  (let* ((src (nth 0 nums))
         (x0 (float (or (nth 1 nums) 0)))
         (y0 (float (or (nth 2 nums) 0)))
         (cols (max 0 (truncate (or (nth 3 nums) 0))))
         (rows (max 0 (truncate (or (nth 4 nums) 0))))
         (tile (float (or (nth 5 nums) 40)))
         (offset (gr-live-feed-blob-offset state))
         (count (* cols rows))
         (key (list x0 y0 cols rows tile))
         (payload
          (or (gethash key gr-live-feed-grid-payload-cache)
              (let ((parts nil)
                    (row 0))
                (while (< row rows)
                  (let ((col 0))
                    (while (< col cols)
                      (let ((x (+ x0 (* col tile)))
                            (y (+ y0 (* row tile))))
                        (push
                         (concat (gr-live-feed-f64 x)
                                 (gr-live-feed-f64 y)
                                 (gr-live-feed-f64 (- x))
                                 (gr-live-feed-f64 (- y))
                                 (gr-live-feed-f64 tile)
                                 (gr-live-feed-f64 tile)
                                 (gr-live-feed-f64 1.0)
                                 (gr-live-feed-f64 1.0))
                         parts))
                      (setq col (1+ col))))
                  (setq row (1+ row)))
                (puthash key
                         (apply #'concat (nreverse parts))
                         gr-live-feed-grid-payload-cache)))))
    (gr-live-feed-append-blob state payload)
    (gr-live-feed-pack-rec 16
                           (list (gr-live-feed-u64 src)
                                 (gr-live-feed-u64 count)
                                 (gr-live-feed-u64 offset))
                           nil state)))

(defun gr-live-feed-sheet-grid40-batch-record (nums state)
  "Pack a 40px sheet-grid blit record as one op16 command."
  (let* ((src (nth 0 nums))
         (sx0 (float (or (nth 1 nums) 0)))
         (sy0 (float (or (nth 2 nums) 0)))
         (cols (max 0 (truncate (or (nth 3 nums) 0))))
         (rows (max 0 (truncate (or (nth 4 nums) 0))))
         (tile (float (or (nth 5 nums) 40)))
         (dx0 (float (or (nth 6 nums) 0)))
         (dy0 (float (or (nth 7 nums) 0)))
         (offset (gr-live-feed-blob-offset state))
         (count (* cols rows))
         (key (list sx0 sy0 cols rows tile dx0 dy0))
         (payload
          (or (gethash key gr-live-feed-grid-payload-cache)
              (let ((parts nil)
                    (row 0))
                (while (< row rows)
                  (let ((col 0))
                    (while (< col cols)
                      (let ((sx (+ sx0 (* col tile)))
                            (sy (+ sy0 (* row tile)))
                            (dx (+ dx0 (* col tile)))
                            (dy (+ dy0 (* row tile))))
                        (push
                         (concat (gr-live-feed-f64 dx)
                                 (gr-live-feed-f64 dy)
                                 (gr-live-feed-f64 (- sx))
                                 (gr-live-feed-f64 (- sy))
                                 (gr-live-feed-f64 tile)
                                 (gr-live-feed-f64 tile)
                                 (gr-live-feed-f64 1.0)
                                 (gr-live-feed-f64 1.0))
                         parts))
                      (setq col (1+ col))))
                  (setq row (1+ row)))
                (puthash key
                         (apply #'concat (nreverse parts))
                         gr-live-feed-grid-payload-cache)))))
    (gr-live-feed-append-blob state payload)
    (gr-live-feed-pack-rec 16
                           (list (gr-live-feed-u64 src)
                                 (gr-live-feed-u64 count)
                                 (gr-live-feed-u64 offset))
                           nil state)))

(defun gr-live-feed-op15-alpha-record-chunk (record)
  "Return (SRC ALPHA PAYLOAD) when RECORD is an alpha image blit."
  (let* ((name (gr-live-feed-record-name record))
         (nums (gr-live-feed-record-nums record)))
    (when (string= name "gui-draw-image-scaled-alpha")
      (let* ((alpha (float (or (nth 0 nums) 255)))
             (id (nth 1 nums))
             (sx (float (or (nth 2 nums) 0)))
             (sy (float (or (nth 3 nums) 0)))
             (sw (float (or (nth 4 nums) 0)))
             (sh (float (or (nth 5 nums) 0)))
             (dx (float (or (nth 6 nums) 0)))
             (dy (float (or (nth 7 nums) 0)))
             (dw (float (or (nth 8 nums) 0)))
             (dh (float (or (nth 9 nums) 0)))
             (scale-x (if (= sw 0.0) 1.0 (/ dw sw)))
             (scale-y (if (= sh 0.0) 1.0 (/ dh sh))))
        (list id
              (gr-live-feed-f64 (/ alpha 255.0))
              (concat (gr-live-feed-f64 dx)
                      (gr-live-feed-f64 dy)
                      (gr-live-feed-f64 (- sx))
                      (gr-live-feed-f64 (- sy))
                      (gr-live-feed-f64 sw)
                      (gr-live-feed-f64 sh)
                      (gr-live-feed-f64 scale-x)
                      (gr-live-feed-f64 scale-y)))))))

(defun gr-live-feed-collect-op15-record-pair-batch (records)
  "Collect a leading alpha-pair run from RECORDS."
  (let ((rest records)
        (src-a nil)
        (src-b nil)
        (alpha-a nil)
        (alpha-b nil)
        (chunks nil)
        (originals nil)
        (continue t))
    (while continue
      (let ((a (and rest (gr-live-feed-op15-alpha-record-chunk (car rest))))
            (b (and (cdr rest) (gr-live-feed-op15-alpha-record-chunk (cadr rest)))))
        (if (and a b
                 (not (equal (nth 0 a) (nth 0 b)))
                 (string= (nth 2 a) (nth 2 b))
                 (or (null src-a)
                     (and (equal (nth 0 a) src-a)
                          (equal (nth 0 b) src-b)
                          (string= (nth 1 a) alpha-a)
                          (string= (nth 1 b) alpha-b))))
            (progn
              (unless src-a
                (setq src-a (nth 0 a)
                      src-b (nth 0 b)
                      alpha-a (nth 1 a)
                      alpha-b (nth 1 b)))
              (push (nth 2 a) chunks)
              (push (car rest) originals)
              (push (cadr rest) originals)
              (setq rest (cddr rest)))
          (setq continue nil))))
    (list src-a src-b alpha-a alpha-b (nreverse chunks) (nreverse originals) rest)))

(defun gr-live-feed-op15-record-pair-batch (src-a src-b alpha-a alpha-b chunks state)
  "Pack alpha pair CHUNKS as an op17 batch command."
  (let ((offset (gr-live-feed-blob-offset state))
        (count 0))
    (dolist (chunk chunks)
      (gr-live-feed-append-blob state chunk)
      (setq count (1+ count)))
    (gr-live-feed-pack-rec 17
                           (list (gr-live-feed-u64 src-a)
                                 (gr-live-feed-u64 src-b)
                                 (gr-live-feed-u64 count)
                                 (gr-live-feed-u64 offset)
                                 alpha-a
                                 alpha-b)
                           nil state)))

(defun gr-live-feed-op15-pair-p (a b)
  "Return non-nil when A and B form a same-geometry alpha blit pair."
  (and (= (gr-live-feed-read-u64-at a 0) 15)
       (= (gr-live-feed-read-u64-at b 0) 15)
       (not (= (gr-live-feed-read-u64-at a 8)
               (gr-live-feed-read-u64-at b 8)))
       (string= (substring a 16 80) (substring b 16 80))))

(defun gr-live-feed-flush-op15-pairs (pairs out state)
  "Flush PAIRS into OUT, batching when useful."
  (if (>= (length pairs) 8)
      (push (gr-live-feed-op15-pair-batch-record (nreverse pairs) state) out)
    (dolist (pair (nreverse pairs))
      (push (car pair) out)
      (push (cdr pair) out)))
  out)

(defun gr-live-feed-compact-op15-pairs (cmds state)
  "Compact repeated same-geometry op15 overlay pairs into batch records."
  (let ((out nil)
        (pairs nil)
        (pair-src-a nil)
        (pair-src-b nil)
        (pair-alpha-a nil)
        (pair-alpha-b nil)
        (rest cmds))
    (while rest
      (let ((a (car rest))
            (b (cadr rest)))
        (if (and b (gr-live-feed-op15-pair-p a b))
            (let ((src-a (gr-live-feed-read-u64-at a 8))
                  (src-b (gr-live-feed-read-u64-at b 8))
                  (alpha-a (substring a 80 88))
                  (alpha-b (substring b 80 88)))
              (if (and pairs
                       (= src-a pair-src-a)
                       (= src-b pair-src-b)
                       (string= alpha-a pair-alpha-a)
                       (string= alpha-b pair-alpha-b))
                  (push (cons a b) pairs)
                (when pairs
                  (setq out (gr-live-feed-flush-op15-pairs pairs out state)))
                (setq pairs (list (cons a b))
                      pair-src-a src-a
                      pair-src-b src-b
                      pair-alpha-a alpha-a
                      pair-alpha-b alpha-b))
              (setq rest (cddr rest)))
          (when pairs
            (setq out (gr-live-feed-flush-op15-pairs pairs out state))
            (setq pairs nil
                  pair-src-a nil
                  pair-src-b nil
                  pair-alpha-a nil
                  pair-alpha-b nil))
          (push a out)
          (setq rest (cdr rest)))))
    (when pairs
      (setq out (gr-live-feed-flush-op15-pairs pairs out state)))
    (nreverse out)))

(defun gr-live-feed-compact-op12-runs (cmds state)
  "Compact consecutive op12 blits with the same source into batch records."
  (let ((out nil)
        (run nil)
        (run-src nil)
        (min-run 8))
    (dolist (cmd cmds)
      (let ((op (gr-live-feed-read-u64-at cmd 0)))
        (if (= op 12)
            (let ((src (gr-live-feed-read-u64-at cmd 8)))
              (if (and run (= src run-src))
                  (push cmd run)
                (when run
                  (if (>= (length run) min-run)
                      (push (gr-live-feed-op12-batch-record (nreverse run) state) out)
                    (dolist (old (nreverse run))
                      (push old out))))
                (setq run (list cmd)
                      run-src src)))
          (when run
            (if (>= (length run) min-run)
                (push (gr-live-feed-op12-batch-record (nreverse run) state) out)
              (dolist (old (nreverse run))
                (push old out))))
          (setq run nil
                run-src nil)
          (push cmd out))))
    (when run
      (if (>= (length run) min-run)
          (push (gr-live-feed-op12-batch-record (nreverse run) state) out)
        (dolist (old (nreverse run))
          (push old out))))
    (nreverse out)))

(defun gr-live-feed-compact-state-commands (cmds)
  "Drop renderer state commands that set the state to its current value."
  (let ((out nil)
        (cur-buffer nil)
        (cur-color nil)
        (cur-alpha nil))
    (dolist (cmd cmds)
      (let ((op (gr-live-feed-read-u64-at cmd 0))
            (drop nil))
        (cond
         ((= op 1)
          (let ((buffer-id (gr-live-feed-read-u64-at cmd 8)))
            (if (and cur-buffer (= buffer-id cur-buffer))
                (setq drop t)
              (setq cur-buffer buffer-id))))
         ((= op 2)
          (let ((color (substring cmd 8 32)))
            (if (and cur-color (string= color cur-color))
                (setq drop t)
              (setq cur-color color))))
         ((= op 13)
          (let ((alpha (substring cmd 8 16)))
            (if (and cur-alpha (string= alpha cur-alpha))
                (setq drop t)
              (setq cur-alpha alpha)))))
        (unless drop
          (push cmd out))))
    (nreverse out)))

(defun gr-live-feed-count-op (cmds target)
  "Count TARGET op records in already-packed CMDS."
  (let ((count 0))
    (dolist (cmd cmds count)
      (when (= (gr-live-feed-read-u64-at cmd 0) target)
        (setq count (1+ count))))))

(defun gr-live-feed-img-path (image)
  "Return renderer image path for IMAGE without extension."
  (replace-regexp-in-string
   "\\\\"
   "/"
   (expand-file-name (concat image ".png") gr-live-feed-assets-dir)
   nil t))

(defun gr-live-feed-ps-quote (text)
  "Return TEXT as a single-quoted PowerShell literal."
  (concat "'" (replace-regexp-in-string "'" "''" (or text "") nil t) "'"))

(defun gr-live-feed-stop-bgm ()
  "Stop the current BGM process."
  (when (process-live-p gr-live-feed-bgm-process)
    (ignore-errors (kill-process gr-live-feed-bgm-process)))
  (setq gr-live-feed-bgm-process nil)
  (setq gr-live-feed-bgm-file nil))

(defun gr-live-feed-start-powershell (script)
  "Start SCRIPT in a hidden PowerShell process."
  (when gr-live-feed-audio-enabled
    (apply #'start-process
           "gr-live-feed-audio"
           nil
           "powershell.exe"
           (list "-NoProfile"
                 "-ExecutionPolicy" "Bypass"
                 "-STA"
                 "-WindowStyle" "Hidden"
                 "-Command" script))))

(defun gr-live-feed-clean-orphan-audio-processes ()
  "Stop hidden MediaPlayer helpers left by previous live sessions."
  (when (eq system-type 'windows-nt)
    (ignore-errors
      (call-process
       "powershell" nil nil nil
       "-NoProfile"
       "-Command"
       "Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -match 'System.Windows.Media.MediaPlayer|PresentationCore' -and $_.CommandLine -match 'WindowStyle Hidden' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force }"))))

(defun gr-live-feed-play-bgm (file-name)
  "Play BGM FILE-NAME in a looping MediaPlayer process."
  (when (and gr-live-feed-bgm-enabled file-name)
    (let ((path (expand-file-name file-name gr-live-feed-bgm-dir)))
      (when (and (file-exists-p path)
                 (not (and gr-live-feed-bgm-file
                           (string= path gr-live-feed-bgm-file)
                           (process-live-p gr-live-feed-bgm-process))))
        (gr-live-feed-stop-bgm)
        (setq gr-live-feed-bgm-file path)
        (let ((script
               (mapconcat
                #'identity
                (list "Add-Type -AssemblyName PresentationCore"
                      "$p=New-Object System.Windows.Media.MediaPlayer"
                      (format "$p.Open([Uri]%s)" (gr-live-feed-ps-quote path))
                      (format "$p.Volume=%s" (max 0.0 (min 1.0 gr-live-feed-bgm-volume)))
                      "$p.add_MediaEnded({$p.Position=[TimeSpan]::Zero;$p.Play()})"
                      "$p.Play()"
                      "while($true){Start-Sleep -Milliseconds 500}")
                ";")))
          (setq gr-live-feed-bgm-process
                (gr-live-feed-start-powershell script)))))))

(defun gr-live-feed-restart-bgm ()
  "Restart current BGM at the current volume."
  (when gr-live-feed-bgm-file
    (let ((file-name (file-name-nondirectory gr-live-feed-bgm-file)))
      (gr-live-feed-stop-bgm)
      (gr-live-feed-play-bgm file-name))))

(defun gr-live-feed-play-se (id)
  "Play sound effect ID."
  (when gr-live-feed-se-enabled
    (let ((now (float-time)))
      (when (> (- now gr-live-feed-last-se-time) 0.035)
        (setq gr-live-feed-last-se-time now)
        (let ((path (expand-file-name (format "%d.wav" (truncate (or id 0)))
                                      gr-live-feed-se-dir)))
          (when (file-exists-p path)
            (gr-live-feed-start-powershell
             (mapconcat
              #'identity
              (list "Add-Type -AssemblyName PresentationCore"
                    "$p=New-Object System.Windows.Media.MediaPlayer"
                    (format "$p.Open([Uri]%s)" (gr-live-feed-ps-quote path))
                    (format "$p.Volume=%s" (max 0.0 (min 1.0 gr-live-feed-se-volume)))
                    "$p.Play()"
                    "Start-Sleep -Milliseconds 1500"
                    "$p.Close()")
              ";"))))))))

(defun gr-live-feed-audio-command-name-p (name)
  "Return non-nil when NAME may be an audio command."
  (or (and (stringp name) (string-prefix-p "music-" name))
      (member name '("dtw-play-sound"
                     "dtw-music-play-file"
                     "dtw-music-stop"
                     "dtw-set-master-sound-volume"
                     "dtw-set-sound-volume"
                     "dtw-music-play"))))

(defun gr-live-feed-handle-audio-command (record)
  "Handle audio RECORD.  Return non-nil if consumed."
  (let* ((name (gr-live-feed-record-name record))
         (nums (gr-live-feed-record-nums record))
         (mapped (cdr (assoc name gr-live-feed-music-func-bgm))))
    (cond
     ((string= name "dtw-play-sound")
      (gr-live-feed-play-se (nth 0 nums))
      t)
     ((string= name "dtw-music-play-file")
      (gr-live-feed-play-bgm (or (gr-live-feed-record-text record) "0.mp3"))
      t)
     ((or (string= name "dtw-music-stop")
          (string= name "music-func108"))
      (gr-live-feed-stop-bgm)
      t)
     ((or (string= name "dtw-set-master-sound-volume")
          (string= name "music-func087"))
      (setq gr-live-feed-bgm-volume (min 1.0 (+ gr-live-feed-bgm-volume 0.05)))
      (gr-live-feed-restart-bgm)
      t)
     ((string= name "music-func088")
      (setq gr-live-feed-bgm-volume (max 0.0 (- gr-live-feed-bgm-volume 0.05)))
      (gr-live-feed-restart-bgm)
      t)
     ((or (string= name "dtw-set-sound-volume")
          (string= name "music-func085"))
      (setq gr-live-feed-se-volume (max 0.0 (- gr-live-feed-se-volume 0.05)))
      t)
     ((string= name "music-func086")
      (setq gr-live-feed-se-volume (min 1.0 (+ gr-live-feed-se-volume 0.05)))
      t)
     (mapped
      (gr-live-feed-play-bgm mapped)
      t)
     ((string= name "dtw-music-play")
      (gr-live-feed-play-bgm "0.mp3")
      t)
     (t nil))))

(defun gr-live-feed-pack-command (record state)
  "Pack one JSON RECORD into a binary renderer record, or nil."
  (let* ((name (gr-live-feed-record-name record))
         (nums (gr-live-feed-record-nums record))
         (text (gr-live-feed-record-text record))
         (sc (lambda (idx) (float (or (nth idx nums) 0)))))
    (cond
     ((and (gr-live-feed-audio-command-name-p name)
           (gr-live-feed-handle-audio-command record))
      nil)
     ((string= name "gui-draw-text")
      (gr-live-feed-pack-rec 8
                             (list (gr-live-feed-f64 (or (plist-get state :px) 0))
                                   (gr-live-feed-f64 (or (plist-get state :py) 0)))
                             text
                             state))
     ((string= name "gui-set-position")
      (plist-put state :px (or (nth 0 nums) 0))
      (plist-put state :py (or (nth 1 nums) 0))
      nil)
     ((string= name "gui-select-buffer")
      (gr-live-feed-pack-rec-raw 1 (gr-live-feed-u64 (nth 0 nums))))
     ((string= name "gui-set-alpha")
      (gr-live-feed-pack-rec-raw
       13
       (gr-live-feed-f64 (/ (float (or (nth 0 nums) 255)) 255.0))))
     ((string= name "gui-draw-image-scaled")
      (let* ((id (nth 0 nums))
             (sx (float (or (nth 1 nums) 0)))
             (sy (float (or (nth 2 nums) 0)))
             (sw (float (or (nth 3 nums) 0)))
             (sh (float (or (nth 4 nums) 0)))
             (dx (float (or (nth 5 nums) 0)))
             (dy (float (or (nth 6 nums) 0)))
             (dw (float (or (nth 7 nums) sw)))
             (dh (float (or (nth 8 nums) sh)))
             (scale-x (if (= sw 0.0) 1.0 (/ dw sw)))
             (scale-y (if (= sh 0.0) 1.0 (/ dh sh))))
        (gr-live-feed-pack-rec 12
                               (list (gr-live-feed-u64 id)
                                     (gr-live-feed-f64 dx)
                                     (gr-live-feed-f64 dy)
                                     (gr-live-feed-f64 (- sx))
                                     (gr-live-feed-f64 (- sy))
                                     (gr-live-feed-f64 sw)
                                     (gr-live-feed-f64 sh)
                                     (gr-live-feed-f64 scale-x)
                                     (gr-live-feed-f64 scale-y))
                               nil state)))
     ((string= name "gui-draw-image-scaled-alpha")
      (let* ((alpha (float (or (nth 0 nums) 255)))
             (id (nth 1 nums))
             (sx (float (or (nth 2 nums) 0)))
             (sy (float (or (nth 3 nums) 0)))
             (sw (float (or (nth 4 nums) 0)))
             (sh (float (or (nth 5 nums) 0)))
             (dx (float (or (nth 6 nums) 0)))
             (dy (float (or (nth 7 nums) 0)))
             (dw (float (or (nth 8 nums) 0)))
             (dh (float (or (nth 9 nums) 0)))
             (scale-x (if (= sw 0.0) 1.0 (/ dw sw)))
             (scale-y (if (= sh 0.0) 1.0 (/ dh sh))))
        (gr-live-feed-pack-rec 15
                               (list (gr-live-feed-u64 id)
                                     (gr-live-feed-f64 dx)
                                     (gr-live-feed-f64 dy)
                                     (gr-live-feed-f64 (- sx))
                                     (gr-live-feed-f64 (- sy))
                                     (gr-live-feed-f64 sw)
                                     (gr-live-feed-f64 sh)
                                     (gr-live-feed-f64 scale-x)
                                     (gr-live-feed-f64 scale-y)
                                     (gr-live-feed-f64 (/ alpha 255.0)))
                               nil state)))
     ((member name '("gui-screen" "dtw-screen"))
      (gr-live-feed-pack-rec 9
                             (list (gr-live-feed-u64 (nth 0 nums))
                                   (gr-live-feed-u64 (nth 1 nums))
                                   (gr-live-feed-u64 (nth 2 nums)))
                             nil state))
     ((member name '("gui-select-buffer" "gui-buffer-select" "dtw-select-buffer"))
      (gr-live-feed-pack-rec-raw 1 (gr-live-feed-u64 (nth 0 nums))))
     ((member name '("gui-load-image" "dtw-load-image"))
      (gr-live-feed-pack-rec 10
                             (list (gr-live-feed-u64 (nth 0 nums)))
                             (gr-live-feed-img-path text)
                             state))
     ((member name '("gui-set-color" "dtw-set-color"))
      (gr-live-feed-pack-rec-raw
       2
       (gr-live-feed-f64 (/ (funcall sc 0) 255.0))
       (gr-live-feed-f64 (/ (funcall sc 1) 255.0))
       (gr-live-feed-f64 (/ (funcall sc 2) 255.0))))
     ((member name '("gui-set-font" "dtw-set-font"))
      (gr-live-feed-pack-rec 3
                             (list (gr-live-feed-f64 (or (nth 0 nums) 12)))
                             "Meiryo"
                             state))
     ((member name '("gui-fill-rect" "dtw-fill-rect"))
      (let ((x0 (funcall sc 0))
            (y0 (funcall sc 1)))
        (gr-live-feed-pack-rec-raw
         5
         (gr-live-feed-f64 x0)
         (gr-live-feed-f64 y0)
         (gr-live-feed-f64 (- (funcall sc 2) x0))
         (gr-live-feed-f64 (- (funcall sc 3) y0)))))
     ((member name '("gui-draw-line" "dtw-draw-line"))
      (gr-live-feed-pack-rec 6
                             (list (gr-live-feed-f64 (funcall sc 0))
                                   (gr-live-feed-f64 (funcall sc 1))
                                   (gr-live-feed-f64 (funcall sc 2))
                                   (gr-live-feed-f64 (funcall sc 3)))
                             nil state))
     ((member name '("gui-draw-point" "dtw-draw-point"))
      (gr-live-feed-pack-rec 7
                             (list (gr-live-feed-f64 (funcall sc 0))
                                   (gr-live-feed-f64 (funcall sc 1)))
                             nil state))
     ((member name '("gui-set-alpha" "dtw-set-alpha"))
      (gr-live-feed-pack-rec-raw
       13
       (gr-live-feed-f64 (/ (float (or (nth 0 nums) 255)) 255.0))))
     ((string= name "dtw-resize-window")
      (gr-live-feed-pack-rec 14
                             (list (gr-live-feed-u64 (nth 0 nums))
                                   (gr-live-feed-u64 (nth 1 nums)))
                             nil state))
     ((member name '("gui-draw-text" "dtw-draw-text"))
      (gr-live-feed-pack-rec 8
                             (list (gr-live-feed-f64 (or (plist-get state :px) 0))
                                   (gr-live-feed-f64 (or (plist-get state :py) 0)))
                             text
                             state))
     ((string= name "gui-draw-text-at")
      (gr-live-feed-pack-rec 8
                             (list (gr-live-feed-f64 (funcall sc 0))
                                   (gr-live-feed-f64 (funcall sc 1)))
                             text
                             state))
     ((member name '("gui-set-position" "dtw-set-position"))
      (plist-put state :px (or (nth 0 nums) 0))
      (plist-put state :py (or (nth 1 nums) 0))
      nil)
     ((member name '("gui-draw-image" "dtw-draw-image"))
      (gr-live-feed-pack-rec 12
                             (list (gr-live-feed-u64 (nth 0 nums))
                                   (gr-live-feed-f64 (funcall sc 5))
                                   (gr-live-feed-f64 (funcall sc 6))
                                   (gr-live-feed-f64 (- (funcall sc 1)))
                                   (gr-live-feed-f64 (- (funcall sc 2)))
                                   (gr-live-feed-f64 (funcall sc 3))
                                   (gr-live-feed-f64 (funcall sc 4))
                                   (gr-live-feed-f64 1.0)
                                   (gr-live-feed-f64 1.0))
                             nil state))
     ((member name '("gui-draw-image-scaled" "dtw-draw-image-scaled"))
      (let* ((sw (funcall sc 3))
             (sh (funcall sc 4))
             (dw (funcall sc 7))
             (dh (funcall sc 8))
             (scale-x (if (= sw 0.0) 1.0 (/ dw sw)))
             (scale-y (if (= sh 0.0) 1.0 (/ dh sh))))
        (gr-live-feed-pack-rec 12
                               (list (gr-live-feed-u64 (nth 0 nums))
                                     (gr-live-feed-f64 (funcall sc 5))
                                     (gr-live-feed-f64 (funcall sc 6))
                                     (gr-live-feed-f64 (- (funcall sc 1)))
                                     (gr-live-feed-f64 (- (funcall sc 2)))
                                     (gr-live-feed-f64 sw)
                                     (gr-live-feed-f64 sh)
                                     (gr-live-feed-f64 scale-x)
                                     (gr-live-feed-f64 scale-y))
                               nil state)))
     ((string= name "gui-draw-image-scaled-alpha")
      (let* ((alpha (float (or (nth 0 nums) 255)))
             (id (nth 1 nums))
             (sx (float (or (nth 2 nums) 0)))
             (sy (float (or (nth 3 nums) 0)))
             (sw (float (or (nth 4 nums) 0)))
             (sh (float (or (nth 5 nums) 0)))
             (dx (float (or (nth 6 nums) 0)))
             (dy (float (or (nth 7 nums) 0)))
             (dw (float (or (nth 8 nums) 0)))
             (dh (float (or (nth 9 nums) 0)))
             (scale-x (if (= sw 0.0) 1.0 (/ dw sw)))
             (scale-y (if (= sh 0.0) 1.0 (/ dh sh))))
        (gr-live-feed-pack-rec 15
                               (list (gr-live-feed-u64 id)
                                     (gr-live-feed-f64 dx)
                                     (gr-live-feed-f64 dy)
                                     (gr-live-feed-f64 (- sx))
                                     (gr-live-feed-f64 (- sy))
                                     (gr-live-feed-f64 sw)
                                     (gr-live-feed-f64 sh)
                                     (gr-live-feed-f64 scale-x)
                                     (gr-live-feed-f64 scale-y)
                                     (gr-live-feed-f64 (/ alpha 255.0)))
                               nil state)))
     (t nil))))

(defun gr-live-feed-pack-binary (records)
  "Pack RECORDS into the sumi-sprite-live binary stream."
  (let* ((state (list :table (make-hash-table :test 'equal)
                      :blob-parts nil
                      :blob-len 0
                      :px 0
                      :py 0))
         (cmds nil)
         (cur-buffer nil)
         (cur-color nil)
         (cur-alpha nil)
         (w 340)
         (h 340)
         (t0 (float-time))
         (t1 0.0)
         (t2 0.0))
    (let ((rest records))
      (while rest
        (let* ((record (car rest))
               (name (gr-live-feed-record-name record))
               (nums (gr-live-feed-record-nums record))
               (drop-state nil))
          (when gr-live-feed-profile-enabled
            (unless gr-live-feed-profile-counts
              (setq gr-live-feed-profile-counts (make-hash-table :test 'equal)))
            (puthash name (1+ (gethash name gr-live-feed-profile-counts 0))
                     gr-live-feed-profile-counts))
          (when (and (member name '("gui-screen" "dtw-screen"))
                     (= (or (nth 0 nums) -1) 0))
            (setq w (or (nth 1 nums) w))
            (setq h (or (nth 2 nums) h)))
          (cond
           ((member name '("gui-select-buffer" "gui-buffer-select" "dtw-select-buffer"))
            (let ((next (nth 0 nums)))
              (if (equal next cur-buffer)
                  (setq drop-state t)
                (setq cur-buffer next))))
           ((member name '("gui-set-color" "dtw-set-color"))
            (let ((next (list (nth 0 nums) (nth 1 nums) (nth 2 nums))))
              (if (equal next cur-color)
                  (setq drop-state t)
                (setq cur-color next))))
           ((member name '("gui-set-alpha" "dtw-set-alpha"))
            (let ((next (or (nth 0 nums) 255)))
              (if (equal next cur-alpha)
                  (setq drop-state t)
                (setq cur-alpha next)))))
          (cond
           (drop-state
            (setq rest (cdr rest)))
           ((string= name "gui-draw-image-grid-40")
            (push (gr-live-feed-grid40-batch-record
                   nums
                   state)
                  cmds)
            (setq rest (cdr rest)))
           ((string= name "gui-draw-image-sheet-grid-40")
            (push (gr-live-feed-sheet-grid40-batch-record
                   nums
                   state)
                  cmds)
            (setq rest (cdr rest)))
           ((gr-live-feed-op15-alpha-record-chunk record)
            (let* ((batch (gr-live-feed-collect-op15-record-pair-batch rest))
                   (chunks (nth 4 batch))
                   (originals (nth 5 batch)))
              (cond
               ((>= (length chunks) 8)
                (push (gr-live-feed-op15-record-pair-batch
                       (nth 0 batch)
                       (nth 1 batch)
                       (nth 2 batch)
                       (nth 3 batch)
                       chunks
                       state)
                      cmds)
                (setq rest (nth 6 batch)))
               (originals
                (dolist (old originals)
                  (let ((packed (gr-live-feed-pack-command old state)))
                    (when packed
                      (push packed cmds))))
                (setq rest (nth 6 batch)))
               (t
                (let ((packed (gr-live-feed-pack-command record state)))
                  (when packed
                    (push packed cmds)))
                (setq rest (cdr rest))))))
           ((gr-live-feed-op12-record-chunk record)
            (let* ((batch (gr-live-feed-collect-op12-record-batch rest))
                   (src (nth 0 batch))
                   (chunks (nth 1 batch)))
              (dolist (packed (gr-live-feed-pack-op12-chunks src chunks state))
                (push packed cmds))
              (setq rest (nth 3 batch))))
           ((gr-live-feed-position-text-pair-p record (cadr rest))
            (let* ((batch (gr-live-feed-collect-text-batch rest))
                   (items (car batch)))
              (if (>= (length items) 2)
                  (progn
                    (push (gr-live-feed-text-batch-record items state) cmds)
                    (setq rest (cdr batch)))
                (let ((packed (gr-live-feed-pack-command record state)))
                  (when packed
                    (push packed cmds))
                  (setq rest (cdr rest))))))
           ((gr-live-feed-draw-text-at-p record)
            (let* ((batch (gr-live-feed-collect-text-at-batch rest))
                   (items (car batch)))
              (if (>= (length items) 2)
                  (progn
                    (push (gr-live-feed-text-batch-record items state) cmds)
                    (setq rest (cdr batch)))
                (let ((packed (gr-live-feed-pack-command record state)))
                  (when packed
                    (push packed cmds))
                  (setq rest (cdr rest))))))
           (t
            (let ((packed (gr-live-feed-pack-command record state)))
              (when packed
                (push packed cmds))
              (setq rest (cdr rest))))))))
    (setq t1 (float-time))
    (setq cmds (gr-live-feed-compact-state-commands (nreverse cmds)))
    (setq t2 (float-time))
    (let* ((blob (gr-live-feed-state-blob state))
           (pad (mod (- 8 (mod (length blob) 8)) 8))
           (blob-padded (concat blob (make-string pad 0)))
           (blob-off 40)
           (cmd-off (+ blob-off (length blob-padded)))
           (header (concat (gr-live-feed-u64 (length cmds))
                           (gr-live-feed-u64 w)
                           (gr-live-feed-u64 h)
                           (gr-live-feed-u64 blob-off)
                           (gr-live-feed-u64 cmd-off))))
      (prog1
          (string-make-unibyte
           (concat header blob-padded (apply #'concat cmds)))
        (setq gr-live-feed-pack-command-seconds
              (+ gr-live-feed-pack-command-seconds (- t1 t0)))
        (setq gr-live-feed-pack-compact-seconds
              (+ gr-live-feed-pack-compact-seconds (- t2 t1)))
        (setq gr-live-feed-pack-finish-seconds
              (+ gr-live-feed-pack-finish-seconds (- (float-time) t2)))))))

(defun gr-live-feed-normalize-direct-records (records)
  "Normalize RECORDS like sprite-bridge's per-frame output."
  (let ((screens nil)
        (images nil)
        (has-setup nil)
        (draw nil))
    (dolist (record records)
      (let ((name (gr-live-feed-record-name record))
            (nums (gr-live-feed-record-nums record)))
        (cond
         ((member name '("gui-screen" "dtw-screen"))
          (unless screens
            (setq screens (make-hash-table :test 'equal)))
          (setq has-setup t)
          (let ((id (nth 0 nums)))
            (when (numberp id)
              (puthash id record screens))))
         ((member name '("gui-load-image" "dtw-load-image"))
          (unless images
            (setq images (make-hash-table :test 'equal)))
          (setq has-setup t)
          (let ((id (nth 0 nums)))
            (when (numberp id)
              (puthash id record images))))
         ((and (gr-live-feed-audio-command-name-p name)
               (gr-live-feed-handle-audio-command record))
          nil)
         ((not (string= name "gui-present"))
          (push record draw)))))
    (let ((out nil))
      (when has-setup
        (when screens
          (dolist (id (sort (hash-table-keys screens) #'<))
            (unless (and images (gethash id images))
              (push (gethash id screens) out))))
        (when images
          (dolist (id (sort (hash-table-keys images) #'<))
            (push (gethash id images) out))))
      (push (gr-live-feed-record "gui-select-buffer" '(0)) out)
      (push (gr-live-feed-record "gui-set-alpha" '(255)) out)
      (append (nreverse out) (nreverse draw)))))

(defun gr-live-feed-profile-summary ()
  "Return sorted direct-bin command counts collected while profiling."
  (when gr-live-feed-profile-counts
    (let (rows)
      (maphash (lambda (name count) (push (cons name count) rows))
               gr-live-feed-profile-counts)
      (sort rows (lambda (a b) (> (cdr a) (cdr b)))))))

(defun gr-live-feed-rename (from to)
  "Rename FROM to TO, replacing TO when necessary."
  (catch 'done
    (let ((attempt 0)
          (last-error nil))
      (while (< attempt 12)
        (condition-case err
            (progn
              (rename-file from to t)
              (throw 'done t))
          (file-error
           (setq last-error err)
           (setq attempt (1+ attempt))
           (sleep-for 0.01))))
      (signal (car last-error) (cdr last-error)))))

(defun gr-live-feed-write-bytes (path bytes)
  "Write unibyte BYTES directly to PATH."
  (let ((coding-system-for-write 'no-conversion)
        (create-lockfiles nil))
    (write-region (string-make-unibyte bytes) nil path nil 0)))

(defun gr-live-feed-write-text (path text)
  "Write TEXT directly to PATH."
  (let ((coding-system-for-write 'utf-8-unix)
        (create-lockfiles nil))
    (write-region text nil path nil 0)))

(defun gr-live-feed-write-direct-bin (records)
  "Write RECORDS directly as sumi-sprite-live sequenced bin files."
  (setq gr-live-feed-bin-seq (1+ gr-live-feed-bin-seq))
  (let* ((dir (file-name-directory gr-live-feed-direct-bin))
         (prefix (expand-file-name "sumi-sprite-" dir))
         (head (expand-file-name "sumi-sprite-head.txt" dir))
         (seq-name (format "%s%06d.bin" prefix gr-live-feed-bin-seq))
         (seq-tmp (concat seq-name ".tmp"))
         (head-tmp (concat head ".tmp"))
         (main-tmp (concat gr-live-feed-direct-bin ".tmp"))
         (t0 (float-time))
         (assembled (gr-live-feed-assemble records))
         (normalized (gr-live-feed-normalize-direct-records assembled))
         (t1 (float-time))
         (packed (gr-live-feed-pack-binary normalized))
         (t2 (float-time)))
    (setq gr-live-feed-normalize-seconds
          (+ gr-live-feed-normalize-seconds (- t1 t0)))
    (setq gr-live-feed-pack-seconds
          (+ gr-live-feed-pack-seconds (- t2 t1)))
    (setq gr-live-feed-last-packed-bytes (string-bytes packed))
    (unless (equal gr-live-feed-direct-bin-dir-ensured dir)
      (make-directory dir t)
      (setq gr-live-feed-direct-bin-dir-ensured dir))
    (setq t0 (float-time))
    (when gr-live-feed-write-sequence-files
      (gr-live-feed-write-bytes seq-tmp packed)
      (gr-live-feed-rename seq-tmp seq-name))
    (if gr-live-feed-atomic-writes
        (progn
          (gr-live-feed-write-bytes main-tmp packed)
          (gr-live-feed-rename main-tmp gr-live-feed-direct-bin))
      (gr-live-feed-write-bytes gr-live-feed-direct-bin packed))
    (setq gr-live-feed-write-seconds
          (+ gr-live-feed-write-seconds (- (float-time) t0)))
    (unless (equal (getenv "GR_LIVE_FEED_WRITE_HEAD_FILE") "0")
      (setq t0 (float-time))
      (let ((head-text (format "%d\n" gr-live-feed-bin-seq)))
        (if gr-live-feed-atomic-writes
            (progn
              (gr-live-feed-write-text head-tmp head-text)
              (gr-live-feed-rename head-tmp head))
          (gr-live-feed-write-text head head-text)))
      (setq gr-live-feed-head-seconds
            (+ gr-live-feed-head-seconds (- (float-time) t0))))
    (string-bytes packed)))

(defun gr-live-feed-delete-file (path)
  "Delete PATH if possible."
  (condition-case err
      (progn
        (delete-file path)
        t)
    (file-missing t)
    (error
     (puthash path t gr-live-feed-pending-deletes)
     (princ (format "live-feed-loop.el: delayed delete for %s: %s\n"
                    path (error-message-string err)))
     nil)))

(defun gr-live-feed-retry-deletes ()
  "Retry pending frame deletions."
  (maphash
   (lambda (path _value)
     (when (gr-live-feed-delete-file path)
       (remhash path gr-live-feed-pending-deletes)
       (remhash path gr-live-feed-scheduled-paths)))
   (copy-hash-table gr-live-feed-pending-deletes)))

(defun gr-live-feed-cleanup-stale-frames ()
  "Remove frame files older than this feeder session."
  (dolist (frame (gr-live-feed-frame-files))
    (let ((path (cdr frame)))
      (when (time-less-p (nth 5 (file-attributes path)) gr-live-feed-start-time)
        (ignore-errors (delete-file path))))))

(defun gr-live-feed-poll-once ()
  "Send every queued frame once."
  (gr-live-feed-retry-deletes)
  (dolist (frame (gr-live-feed-frame-files))
    (let ((seq (car frame))
          (path (cdr frame)))
      (unless (or (gethash path gr-live-feed-scheduled-paths)
                  (gethash path gr-live-feed-pending-deletes))
        (condition-case err
            (let* ((records (gr-live-feed-json-array-file path))
                   (combined (gr-live-feed-assemble records))
                   (payload (unless gr-live-feed-direct-bin
                              (concat (json-encode combined) "\n"))))
              (gr-live-feed-note-seq 'received seq)
              (when (if gr-live-feed-direct-bin
                        (gr-live-feed-write-direct-bin combined)
                      (gr-live-feed-send seq payload))
                (puthash path t gr-live-feed-scheduled-paths)
                (gr-live-feed-note-seq 'sent seq)
                (when (gr-live-feed-delete-file path)
                  (remhash path gr-live-feed-scheduled-paths))
                (let ((bytes (if gr-live-feed-direct-bin
                                 (nth 7 (file-attributes gr-live-feed-direct-bin))
                               (string-bytes payload))))
                  (princ (format "live-feed-loop.el: sent seq %d (%d records, %d bytes%s)\n"
                                 seq
                                 (length combined)
                                 bytes
                                 (if gr-live-feed-direct-bin
                                     " direct-bin"
                                   ""))))))
          (error
           (princ (format "live-feed-loop.el: skipping seq %d: %s\n"
                          seq (error-message-string err)))))))))

(defun gr-live-feed-poll-once ()
  "Send the latest frame once.

The old queue mode scanned build/frames and processed every JSON file.  Live
play only needs the newest frame; using build/frame-current.* keeps disk I/O
bounded and avoids a growing backlog when the game loop draws faster than the
feeder can serialize."
  (gr-live-feed-retry-deletes)
  (when (and (file-exists-p gr-live-feed-current-seq-path)
             (file-exists-p gr-live-feed-current-frame-path))
    (condition-case err
        (let* ((seq (string-to-number
                     (string-trim
                      (with-temp-buffer
                        (insert-file-contents gr-live-feed-current-seq-path)
                        (buffer-string)))))
               records
               combined
               payload)
          (when (> seq gr-live-feed-last-received-seq)
            (setq records (gr-live-feed-json-array-file gr-live-feed-current-frame-path))
            (setq combined (gr-live-feed-assemble records))
            (setq payload (unless gr-live-feed-direct-bin
                            (concat (json-encode combined) "\n")))
            (gr-live-feed-note-seq 'received seq)
            (when (if gr-live-feed-direct-bin
                      (gr-live-feed-write-direct-bin combined)
                    (gr-live-feed-send seq payload))
              (gr-live-feed-note-seq 'sent seq)
              (when (= 0 (mod gr-live-feed-sent-count 30))
                (let ((bytes (if gr-live-feed-direct-bin
                                 (nth 7 (file-attributes gr-live-feed-direct-bin))
                               (string-bytes payload))))
                  (princ (format "live-feed-loop.el: sent seq %d (%d records, %d bytes%s)\n"
                                 seq
                                 (length combined)
                                 bytes
                                 (if gr-live-feed-direct-bin
                                     " direct-bin"
                                   ""))))))))
      (error
       (princ (format "live-feed-loop.el: skipping current frame: %s\n"
                      (error-message-string err)))))))

(defun gr-live-feed-shutdown ()
  "Close the feeder and print counters."
  (when (process-live-p gr-live-feed-process)
    (delete-process gr-live-feed-process))
  (gr-live-feed-stop-bgm)
  (princ (format "live-feed-loop.el: exiting received=%d sent=%d receive_gaps=%d send_gaps=%d pending=%d\n"
                 gr-live-feed-received-count
                 gr-live-feed-sent-count
                 gr-live-feed-receive-gap-count
                 gr-live-feed-send-gap-count
                 (hash-table-count gr-live-feed-scheduled-paths))))

(defun gr-live-feed-main ()
  "Run the live feeder."
  (gr-live-feed-parse-args)
  (gr-live-feed-clean-orphan-audio-processes)
  (setq gr-live-feed-start-time (current-time))
  (setq gr-live-feed-scheduled-paths (make-hash-table :test 'equal))
  (setq gr-live-feed-pending-deletes (make-hash-table :test 'equal))
  (gr-live-feed-load-title-stream-table)
  (gr-live-feed-cleanup-stale-frames)
  (let ((deadline (when gr-live-feed-seconds
                    (+ (float-time) gr-live-feed-seconds))))
    (unwind-protect
        (while (or (null deadline) (< (float-time) deadline))
          (gr-live-feed-poll-once)
          (sleep-for gr-live-feed-poll-seconds))
      (gr-live-feed-shutdown))))

(when (and noninteractive
           (not (bound-and-true-p gr-live-feed-library-only)))
  (gr-live-feed-main))

;;; live-feed-loop.el ends here
