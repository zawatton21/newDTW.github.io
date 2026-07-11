;;; start-live.el --- launch the native NeLisp live pipeline -*- coding: utf-8; lexical-binding: t; -*-

(require 'cl-lib)

(defconst gr-start-repo-root
  (expand-file-name ".." (file-name-directory (or load-file-name buffer-file-name))))

(defconst gr-start-build-dir
  (expand-file-name "build" gr-start-repo-root))

(defconst gr-start-runtime-dir
  (expand-file-name "nelisp_runtime" gr-start-repo-root))

(defconst gr-start-default-renderer
  (expand-file-name "../sumi/backends/cairo-elisp/sumi-sprite-live.exe" gr-start-repo-root))

(defconst gr-start-default-direct-bin
  (expand-file-name "../sumi/backends/cairo-elisp/sumi-sprite.bin" gr-start-repo-root))

(defun gr-start-value-after (flag args)
  "Return the value after FLAG in ARGS."
  (let ((tail (member flag args)))
    (when tail (cadr tail))))

(defun gr-start-flag-p (flag args)
  "Return non-nil when FLAG exists in ARGS."
  (member flag args))

(defun gr-start-normalize-path (path)
  "Return PATH as an absolute slash-separated path."
  (replace-regexp-in-string "\\\\" "/" (expand-file-name path) nil t))

(defun gr-start-ps-quote (value)
  "Quote VALUE as a single-quoted PowerShell string."
  (concat "'" (replace-regexp-in-string "'" "''" value nil t) "'"))

(defun gr-start-process-running-p (pattern)
  "Return non-nil when a Windows process command line matches PATTERN."
  (when (eq system-type 'windows-nt)
    (let* ((quoted-pattern (replace-regexp-in-string "'" "''" pattern nil t))
           (exit-code
           (call-process
            "powershell" nil nil nil
            "-NoProfile"
            "-Command"
            (format
             "if (Get-CimInstance Win32_Process | Where-Object { $_.ProcessId -ne $PID -and $_.CommandLine -match '%s' }) { exit 0 } else { exit 1 }"
             quoted-pattern))))
      (= exit-code 0))))

(defun gr-start-renderer (renderer &optional delay-seconds)
  "Start RENDERER unless an existing live renderer is visible in the process list."
  (if (gr-start-process-running-p "sumi-sprite-live\\.exe")
      (princ "START-LIVE renderer=already-running\n")
    (unless (file-exists-p renderer)
      (error "Missing renderer exe: %s" renderer))
    (if (and (eq system-type 'windows-nt)
             delay-seconds
             (> delay-seconds 0))
        (start-process
         "sumi-sprite-live-delayed"
         nil
         "powershell"
         "-NoProfile"
         "-WindowStyle"
         "Hidden"
         "-Command"
         (let ((renderer-dir (file-name-directory (expand-file-name renderer))))
           (format
            "$h=%s; for($i=0; $i -lt %d; $i++){ if(Test-Path $h){ $v=0; try { $v=[int](Get-Content $h -ErrorAction Stop) } catch { $v=0 }; if($v -ge 30){ break } }; Start-Sleep -Milliseconds 250 }; Start-Process -FilePath %s -WorkingDirectory %s"
            (gr-start-ps-quote (expand-file-name "sumi-sprite-head.txt" renderer-dir))
            (* delay-seconds 4)
            (gr-start-ps-quote (expand-file-name renderer))
            (gr-start-ps-quote renderer-dir))))
      (if (eq system-type 'windows-nt)
        (call-process
         "powershell" nil nil nil
         "-NoProfile"
         "-Command"
         (format "Start-Process -FilePath %s -WorkingDirectory %s"
                 (gr-start-ps-quote (expand-file-name renderer))
                 (gr-start-ps-quote (file-name-directory (expand-file-name renderer)))))
        (start-process "sumi-sprite-live" nil renderer)))
    (princ (format "START-LIVE renderer=%s%s\n"
                   (gr-start-normalize-path renderer)
                   (if (and delay-seconds (> delay-seconds 0))
                       (format " delay=%ds" delay-seconds)
                     "")))))

(defun gr-start-feed-loop (direct-bin)
  "Start the pure-elisp direct-bin feed loop for DIRECT-BIN."
  (let ((script (expand-file-name "live-feed-loop.el" gr-start-runtime-dir)))
    (unless (gr-start-process-running-p "live-feed-loop\\.el")
      (start-process
       "nelisp-live-feed"
       "*nelisp-live-feed*"
       invocation-name
       "-Q"
       "--batch"
       "-l"
       script
       "--"
       "--direct-bin"
       direct-bin))
    (princ (format "START-LIVE directBin=%s\n" (gr-start-normalize-path direct-bin)))))

(defun gr-start-clean-frame-queue ()
  "Remove stale frame files before the feed loop starts watching."
  (let ((frames-dir (expand-file-name "frames" gr-start-build-dir))
        (current-frame (expand-file-name "frame-current.json" gr-start-build-dir)))
    (when (file-exists-p current-frame)
      (delete-file current-frame))
    (when (file-directory-p frames-dir)
      (dolist (file (directory-files frames-dir t "\\`frame-[0-9]+\\.json\\'"))
        (delete-file file)))
    (make-directory frames-dir t)))

(defun gr-start-clean-direct-bin (direct-bin)
  "Remove stale direct-bin notification files before the driver starts."
  (let ((head (expand-file-name "sumi-sprite-head.txt"
                                (file-name-directory direct-bin))))
    (when (file-exists-p direct-bin)
      (delete-file direct-bin))
    (when (file-exists-p head)
      (delete-file head))))

(defun gr-start-build ()
  "Build the play bundle in the current Emacs process."
  (let ((builder (expand-file-name "build-play-bundle.el" gr-start-runtime-dir)))
    (load builder nil t)))

(defun gr-start-play (duration)
  "Load the generated play bundle, optionally overriding DURATION."
  (when duration
    (setenv "GR_PLAY_DURATION_SECONDS" duration))
  (load (expand-file-name "play-bundle-loader.el" gr-start-build-dir) nil t))

(defun gr-start-main ()
  "Launch the native NeLisp live pipeline."
  (let* ((args command-line-args-left)
         (renderer (expand-file-name (or (gr-start-value-after "--renderer" args)
                                         gr-start-default-renderer)))
         (direct-bin (expand-file-name (or (gr-start-value-after "--direct-bin" args)
                                           gr-start-default-direct-bin)))
         (duration (gr-start-value-after "--duration" args))
         (driver-direct-bin (not (string= (or (getenv "GR_PLAY_DIRECT_BIN") "1") "0"))))
    (setq command-line-args-left nil)
    (setq default-directory gr-start-repo-root)
    (princ (format "START-LIVE args=%S duration=%S\n" args duration))
    (unless (getenv "SUMI_AUDIO")
      (setenv "SUMI_AUDIO" "0"))
    (setenv "GR_PLAY_DIRECT_BIN_PATH" direct-bin)
    (setenv "GR_PLAY_RENDERER_PATH" renderer)
    (when (gr-start-flag-p "--skip-opening" args)
      (setenv "GR_PLAY_SKIP_OPENING" "1"))
    (make-directory gr-start-build-dir t)
    (unless (gr-start-flag-p "--no-build" args)
    (gr-start-build))
    (gr-start-clean-frame-queue)
    (gr-start-clean-direct-bin direct-bin)
    (if driver-direct-bin
        (progn
          (gr-start-renderer renderer nil)
          (princ (format "START-LIVE directBin=driver:%s renderer=prestarted:%s\n"
                         (gr-start-normalize-path direct-bin)
                         (gr-start-normalize-path renderer))))
      (gr-start-renderer renderer nil)
      (gr-start-feed-loop direct-bin))
    (sleep-for 0.5)
    (gr-start-play duration)))

(when noninteractive
  (gr-start-main))

;;; start-live.el ends here
