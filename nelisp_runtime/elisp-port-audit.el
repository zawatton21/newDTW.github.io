;;; elisp-port-audit.el --- report NeLisp runtime registry and JS leftovers -*- coding: utf-8; lexical-binding: t; -*-

(require 'cl-lib)

(defconst gr-audit-repo-root
  (expand-file-name ".." (file-name-directory (or load-file-name buffer-file-name))))

(defconst gr-audit-runtime-dir
  (expand-file-name "nelisp_runtime" gr-audit-repo-root))

(defconst gr-audit-build-dir
  (expand-file-name "build" gr-audit-repo-root))

(defconst gr-audit-package-path
  (expand-file-name "package.json" gr-audit-repo-root))

(defconst gr-audit-tools-dir
  (expand-file-name "tools" gr-audit-repo-root))

(defconst gr-audit-conditional-path
  (expand-file-name "gamedata-conditional.el" gr-audit-runtime-dir))

(defconst gr-audit-simple-path
  (expand-file-name "gamedata-simple.el" gr-audit-runtime-dir))

(defconst gr-audit-build-play-bundle-path
  (expand-file-name "build-play-bundle.el" gr-audit-runtime-dir))

(defconst gr-audit-active-launcher-paths
  (mapcar (lambda (name) (expand-file-name name gr-audit-runtime-dir))
          '("start-live.el" "play.el" "live-feed-loop.el"
            "build-play-bundle.el" "run-elisp-port-gate.el")))

(defconst gr-audit-js-ts-extension-regexp
  "\\.\\(?:cjs\\|mjs\\|js\\|jsx\\|ts\\|tsx\\)\\'")

(defconst gr-audit-script-language-globs
  '("*.bat" "*.cjs" "*.cmd" "*.css" "*.html" "*.js" "*.jsx" "*.mjs"
    "*.ps1" "*.py" "*.rs" "*.sh" "*.toml" "*.ts" "*.tsx" "*.yaml" "*.yml"))

(defconst gr-audit-script-language-extension-regexp
  "\\.\\(?:bat\\|cjs\\|cmd\\|css\\|html\\|js\\|jsx\\|mjs\\|ps1\\|py\\|rs\\|sh\\|toml\\|ts\\|tsx\\|ya?ml\\)\\'")

(defconst gr-audit-physical-ignore-prefixes
  '(".git/" ".claude/"))

(defun gr-audit-value-after (flag args)
  "Return the value after FLAG in ARGS."
  (let ((tail (member flag args)))
    (when tail (cadr tail))))

(defun gr-audit-read-file (path)
  "Read PATH as a string."
  (with-temp-buffer
    (insert-file-contents path)
    (buffer-string)))

(defun gr-audit-git-lines (&rest args)
  "Run git with ARGS at repo root and return non-empty output lines."
  (with-temp-buffer
    (let ((status (let ((default-directory gr-audit-repo-root))
                    (apply #'call-process "git" nil t nil args))))
      (unless (eq status 0)
        (error "git %s failed: %s" (mapconcat #'identity args " ") (buffer-string)))
      (split-string (buffer-string) "[\r\n]+" t))))

(defun gr-audit-json-escape (value)
  "Return VALUE escaped as JSON string content."
  (let ((text (format "%s" value)))
    (setq text (replace-regexp-in-string "\\\\" "\\\\\\\\" text nil t))
    (setq text (replace-regexp-in-string "\"" "\\\\\"" text nil t))
    (setq text (replace-regexp-in-string "\n" "\\\\n" text nil t))
    (setq text (replace-regexp-in-string "\r" "\\\\r" text nil t))
    (replace-regexp-in-string "\t" "\\\\t" text nil t)))

(defun gr-audit-json-string (value)
  "Return VALUE as a JSON string."
  (format "\"%s\"" (gr-audit-json-escape value)))

(defun gr-audit-json-string-array (values)
  "Return VALUES as a JSON string array."
  (concat "["
          (mapconcat #'gr-audit-json-string values ", ")
          "]"))

(defun gr-audit-hash-table-keys (table)
  "Return the keys in hash TABLE."
  (let (keys)
    (maphash (lambda (key _value) (push key keys)) table)
    keys))

(defun gr-audit-relative-path (path)
  "Return PATH relative to the repo root with slash separators."
  (replace-regexp-in-string
   "\\\\"
   "/"
   (file-relative-name (expand-file-name path) gr-audit-repo-root)
   nil
   t))

(defun gr-audit-extract-names (source regexp)
  "Extract match group 1 from SOURCE with REGEXP."
  (let ((pos 0)
        names)
    (while (string-match regexp source pos)
      (push (match-string 1 source) names)
      (setq pos (match-end 0)))
    (sort (delete-dups (nreverse names)) #'string<)))

(defun gr-audit-package-scripts-source ()
  "Return the raw JSON body of package.json's scripts object."
  (let* ((source (if (file-exists-p gr-audit-package-path)
                     (gr-audit-read-file gr-audit-package-path)
                   ""))
         (scripts-pos (string-match "\"scripts\"[ \t\r\n]*:" source))
         (open-pos (and scripts-pos (string-match "{" source scripts-pos))))
    (if (not open-pos)
        ""
      (let ((pos open-pos)
            (depth 0)
            (in-string nil)
            (escape nil)
            end-pos)
        (while (and (< pos (length source)) (not end-pos))
          (let ((ch (aref source pos)))
            (cond
             (escape (setq escape nil))
             ((and in-string (= ch ?\\)) (setq escape t))
             ((= ch ?\") (setq in-string (not in-string)))
             ((not in-string)
              (cond
               ((= ch ?{) (setq depth (1+ depth)))
               ((= ch ?})
                (setq depth (1- depth))
                (when (= depth 0)
                  (setq end-pos pos)))))))
          (setq pos (1+ pos)))
        (if end-pos
            (substring source (1+ open-pos) end-pos)
          "")))))

(defun gr-audit-function-group (name)
  "Return a coarse group name for runtime NAME."
  (cond
   ((string-match-p "\\`func" name) "func")
   ((string-match-p "\\`item" name) "item")
   ((string-match-p "\\`enemy" name) "enemy")
   (t "other")))

(defun gr-audit-collect-runtime-registry ()
  "Collect native runtime function names from generated elisp sources."
  (let* ((conditional-source (if (file-exists-p gr-audit-conditional-path)
                                 (gr-audit-read-file gr-audit-conditional-path)
                               ""))
         (simple-source (if (file-exists-p gr-audit-simple-path)
                            (gr-audit-read-file gr-audit-simple-path)
                          ""))
         (conditional (gr-audit-extract-names conditional-source "(gr-defnative \"\\([^\"]+\\)\""))
         (simple (gr-audit-extract-names simple-source "(gr-defun \"\\([^\"]+\\)\""))
         (all (sort (delete-dups (append conditional simple)) #'string<)))
    (list :all all :conditional conditional :simple simple)))

(defun gr-audit-package-script-leftovers (&optional include-legacy)
  "Return NeLisp package scripts that still invoke Node/Electron.
When INCLUDE-LEGACY is nil, skip script names containing legacy."
  (let* ((source (gr-audit-package-scripts-source))
         (pos 0)
         leftovers)
    (while (string-match "\"\\([^\"]+\\)\"[ \t\r\n]*:[ \t\r\n]*\"\\([^\"]+\\)\"" source pos)
      (let ((name (match-string 1 source))
            (command (match-string 2 source)))
        (when (and (or (string-prefix-p "nelisp:" name)
                       (string-prefix-p "play:nelisp" name)
                       (string-prefix-p "test:nelisp" name))
                   (or include-legacy
                       (not (string-match-p "\\(?:legacy\\)" name)))
                   (string-match-p "\\b\\(?:node\\|electron\\|npm run build\\|tsc\\|webpack\\)\\b" command))
          (push (cons name command) leftovers)))
      (setq pos (match-end 0)))
    (nreverse leftovers)))

(defun gr-audit-all-package-script-leftovers ()
  "Return all package scripts that still invoke JS/TS/Electron directly."
  (let* ((source (gr-audit-package-scripts-source))
         (pos 0)
         leftovers)
    (while (string-match "\"\\([^\"]+\\)\"[ \t\r\n]*:[ \t\r\n]*\"\\([^\"]+\\)\"" source pos)
      (let ((name (match-string 1 source))
            (command (match-string 2 source)))
        (when (string-match-p "\\b\\(?:npm\\|node\\|electron\\|electron-builder\\|tsc\\|webpack\\|eslint\\)\\b" command)
          (push (cons name command) leftovers)))
      (setq pos (match-end 0)))
    (nreverse leftovers)))

(defun gr-audit-script-leftovers ()
  "Return standard NeLisp package scripts that still invoke Node/Electron."
  (gr-audit-package-script-leftovers nil))

(defun gr-audit-nelisp-js-tool-files ()
  "Return active NeLisp-specific JS tools still present in tools/."
  (if (file-directory-p gr-audit-tools-dir)
      (cl-remove-if-not
       (lambda (name)
         (and (string-match-p "\\.m?js\\'" name)
              (or
               (string-match-p
                "\\(?:nelisp\\|live_feed_loop\\|key_input_server\\|start_nelisp\\|build_play_bundle\\|statediff_to_elisp\\|wire_.*funcs\\|verify_simple_funcs\\|probe_loop_exec\\|capture_gui_frame\\)"
                name)
               (let ((source (gr-audit-read-file (expand-file-name name gr-audit-tools-dir))))
                 (string-match-p
                  "\\(?:nelisp_bridge\\|generatedStateDiff\\|generatedSimpleStateDiff\\|generatedConditionalStateDiff\\)"
                  source)))))
       (directory-files gr-audit-tools-dir nil nil t))
    nil))

(defun gr-audit-build-js-ts-fallbacks ()
  "Return suspicious JS/TS generation fallbacks in the normal bundle builder."
  (let ((source (if (file-exists-p gr-audit-build-play-bundle-path)
                    (gr-audit-read-file gr-audit-build-play-bundle-path)
                  ""))
        (patterns '(("statediff-to-elisp.el" . "loads historical TS state-diff exporter")
                    ("gr-statediff-main" . "runs historical TS state-diff exporter")
                    ("generatedSimpleStateDiff.ts" . "references generated TypeScript state diff")
                    ("generatedConditionalStateDiff.ts" . "references generated TypeScript conditional diff")
                    ("src/renderer" . "references legacy renderer source tree")))
        matches)
    (dolist (entry patterns)
      (when (string-match-p (car entry) source)
        (push (cdr entry) matches)))
    (nreverse matches)))

(defun gr-audit-active-runtime-js-ts-commands ()
  "Return active launcher command sites that invoke JS/TS tooling."
  (let ((command-regexp "(\\(?:call-process\\|start-process\\|apply[ \t\r\n]+#'start-process\\)")
        (tool-regexp "\\b\\(?:node\\|npm\\|electron\\|electron-builder\\|tsc\\|webpack\\|eslint\\)\\b\\|\\.\\(?:js\\|mjs\\|cjs\\|ts\\|tsx\\)\\b")
        matches)
    (dolist (path gr-audit-active-launcher-paths)
      (when (file-exists-p path)
        (let* ((rel (gr-audit-relative-path path))
               (lines (split-string (gr-audit-read-file path) "\n"))
               (idx 0))
          (while (< idx (length lines))
            (when (string-match-p command-regexp (nth idx lines))
              (let ((window "")
                    (j idx))
                (while (and (< j (length lines)) (< j (+ idx 10)))
                  (setq window (concat window "\n" (nth j lines)))
                  (setq j (1+ j)))
                (when (string-match-p tool-regexp window)
                  (push (format "%s:%d" rel (1+ idx)) matches))))
            (setq idx (1+ idx))))))
    (nreverse matches)))

(defun gr-audit-tracked-js-ts-files ()
  "Return tracked JavaScript/TypeScript paths, excluding node_modules and worktrees."
  (cl-remove-if
   (lambda (path)
     (or (string-prefix-p "node_modules/" path)
         (string-prefix-p ".claude/" path)
         (not (string-match-p gr-audit-js-ts-extension-regexp path))))
   (gr-audit-git-lines
    "ls-files" "*.cjs" "*.js" "*.jsx" "*.mjs" "*.ts" "*.tsx")))

(defun gr-audit-tracked-script-language-files ()
  "Return tracked script/web/native code paths that must not be active runtime."
  (cl-remove-if
   (lambda (path)
     (or (string-prefix-p "node_modules/" path)
         (string-prefix-p ".claude/" path)
         (not (string-match-p gr-audit-script-language-extension-regexp path))))
   (apply #'gr-audit-git-lines
          (append (list "ls-files") gr-audit-script-language-globs))))

(defun gr-audit-non-source-tracked-js-ts-files ()
  "Return tracked JavaScript/TypeScript paths outside the reference source tree."
  (cl-remove-if
   (lambda (path)
     (or (string-prefix-p "src/" path)
         (string-prefix-p "build/" path)
         (string-prefix-p "public/" path)))
   (gr-audit-tracked-js-ts-files)))

(defun gr-audit-reference-source-js-ts-files ()
  "Return tracked JavaScript/TypeScript paths in the reference src tree."
  (cl-remove-if-not
   (lambda (path) (string-prefix-p "src/" path))
   (gr-audit-tracked-js-ts-files)))

(defun gr-audit-ignored-physical-path-p (path)
  "Return non-nil when relative PATH is ignored for physical source scans."
  (cl-some (lambda (prefix) (string-prefix-p prefix path))
           gr-audit-physical-ignore-prefixes))

(defun gr-audit-physical-script-language-files ()
  "Return physical script/web/native code files present in the worktree."
  (let (files)
    (dolist (path (directory-files-recursively
                   gr-audit-repo-root
                   gr-audit-script-language-extension-regexp))
      (let ((rel (gr-audit-relative-path path)))
        (unless (gr-audit-ignored-physical-path-p rel)
          (push rel files))))
    (sort files #'string<)))

(defun gr-audit-write-report (path)
  "Write the full elisp port audit to PATH."
  (let* ((registry (gr-audit-collect-runtime-registry))
         (all (plist-get registry :all))
         (conditional (plist-get registry :conditional))
         (simple (plist-get registry :simple))
         (leftovers (gr-audit-script-leftovers))
         (all-leftovers (gr-audit-package-script-leftovers t))
         (package-leftovers (gr-audit-all-package-script-leftovers))
         (nelisp-js-tools (gr-audit-nelisp-js-tool-files))
         (build-fallbacks (gr-audit-build-js-ts-fallbacks))
         (runtime-js-ts-commands (gr-audit-active-runtime-js-ts-commands))
         (tracked-js-ts (gr-audit-tracked-js-ts-files))
         (tracked-script-language (gr-audit-tracked-script-language-files))
         (physical-script-language (gr-audit-physical-script-language-files))
         (non-source-js-ts (gr-audit-non-source-tracked-js-ts-files))
         (reference-source-js-ts (gr-audit-reference-source-js-ts-files))
         (coding-system-for-write 'utf-8-unix))
    (make-directory (file-name-directory path) t)
    (with-temp-file path
      (insert "{\n")
      (insert "  \"checker\": \"nelisp_runtime/elisp-port-audit.el\",\n")
      (insert (format "  \"runtimeFunctionCount\": %d,\n" (length all)))
      (insert (format "  \"conditionalNativeCount\": %d,\n" (length conditional)))
      (insert (format "  \"simpleFunctionCount\": %d,\n" (length simple)))
      (insert (format "  \"standardScriptNodeLeftoverCount\": %d,\n" (length leftovers)))
      (insert (format "  \"allNelispScriptNodeLeftoverCount\": %d,\n" (length all-leftovers)))
      (insert (format "  \"allPackageScriptJsTsLeftoverCount\": %d,\n" (length package-leftovers)))
      (insert (format "  \"activeNelispJsToolCount\": %d,\n" (length nelisp-js-tools)))
      (insert (format "  \"activeBuildJsTsFallbackCount\": %d,\n" (length build-fallbacks)))
      (insert (format "  \"activeRuntimeJsTsCommandCount\": %d,\n" (length runtime-js-ts-commands)))
      (insert (format "  \"trackedJsTsCount\": %d,\n" (length tracked-js-ts)))
      (insert (format "  \"trackedScriptLanguageCount\": %d,\n" (length tracked-script-language)))
      (insert (format "  \"physicalScriptLanguageCount\": %d,\n" (length physical-script-language)))
      (insert (format "  \"nonSourceTrackedJsTsCount\": %d,\n" (length non-source-js-ts)))
      (insert (format "  \"referenceSourceJsTsCount\": %d,\n" (length reference-source-js-ts)))
      (insert "  \"trackedScriptLanguageFiles\": "
              (gr-audit-json-string-array tracked-script-language)
              ",\n")
      (insert "  \"physicalScriptLanguageFiles\": "
              (gr-audit-json-string-array physical-script-language)
              ",\n")
      (insert "  \"activeNelispJsTools\": "
              (gr-audit-json-string-array nelisp-js-tools)
              ",\n")
      (insert "  \"activeBuildJsTsFallbacks\": "
              (gr-audit-json-string-array build-fallbacks)
              ",\n")
      (insert "  \"activeRuntimeJsTsCommands\": "
              (gr-audit-json-string-array runtime-js-ts-commands)
              ",\n")
      (insert "  \"nonSourceTrackedJsTsFiles\": "
              (gr-audit-json-string-array non-source-js-ts)
              ",\n")
      (insert "  \"standardScriptNodeLeftovers\": [\n")
      (cl-loop for (name . command) in leftovers
               for index from 0 do
               (insert "    { \"name\": " (gr-audit-json-string name)
                       ", \"command\": " (gr-audit-json-string command) " }")
               (insert (if (< index (1- (length leftovers))) ",\n" "\n")))
      (insert "  ],\n")
      (insert "  \"allNelispScriptNodeLeftovers\": [\n")
      (cl-loop for (name . command) in all-leftovers
               for index from 0 do
               (insert "    { \"name\": " (gr-audit-json-string name)
                       ", \"command\": " (gr-audit-json-string command) " }")
               (insert (if (< index (1- (length all-leftovers))) ",\n" "\n")))
      (insert "  ],\n")
      (insert "  \"allPackageScriptJsTsLeftovers\": [\n")
      (cl-loop for (name . command) in package-leftovers
               for index from 0 do
               (insert "    { \"name\": " (gr-audit-json-string name)
                       ", \"command\": " (gr-audit-json-string command) " }")
               (insert (if (< index (1- (length package-leftovers))) ",\n" "\n")))
      (insert "  ],\n")
      (insert "  \"runtimeSources\": ["
              (gr-audit-json-string (gr-audit-relative-path gr-audit-conditional-path))
              ", "
              (gr-audit-json-string (gr-audit-relative-path gr-audit-simple-path))
              "],\n")
      (insert "  \"runtimeGroups\": {\n")
      (let ((groups (make-hash-table :test 'equal)))
        (dolist (name all)
          (let ((group (gr-audit-function-group name)))
            (puthash group (1+ (gethash group groups 0)) groups)))
        (let* ((keys (sort (gr-audit-hash-table-keys groups) #'string<))
               (last (car (last keys))))
          (dolist (key keys)
            (insert "    " (gr-audit-json-string key) ": "
                    (number-to-string (gethash key groups)))
            (insert (if (equal key last) "\n" ",\n")))))
      (insert "  },\n")
      (insert "  \"runtimeNames\": "
              (gr-audit-json-string-array all)
              "\n")
      (insert "}\n"))))

(defun gr-audit-main ()
  "Run the elisp port audit."
  (let* ((args command-line-args-left)
         (report (or (gr-audit-value-after "--report" args)
                     (gr-audit-value-after "--out" args)
                     "build/nelisp-port-audit.json")))
    (unless (file-name-absolute-p report)
      (setq report (expand-file-name report gr-audit-repo-root)))
    (gr-audit-write-report report)
    (let* ((registry (gr-audit-collect-runtime-registry))
           (leftovers (gr-audit-script-leftovers))
           (all-leftovers (gr-audit-package-script-leftovers t))
           (package-leftovers (gr-audit-all-package-script-leftovers))
           (nelisp-js-tools (gr-audit-nelisp-js-tool-files))
           (build-fallbacks (gr-audit-build-js-ts-fallbacks))
           (runtime-js-ts-commands (gr-audit-active-runtime-js-ts-commands))
           (tracked-script-language (gr-audit-tracked-script-language-files))
           (physical-script-language (gr-audit-physical-script-language-files))
           (non-source-js-ts (gr-audit-non-source-tracked-js-ts-files))
           (reference-source-js-ts (gr-audit-reference-source-js-ts-files)))
      (princ
       (format "ELISP-PORT-AUDIT runtime=%d conditional=%d simple=%d scriptNodeLeftovers=%d allNelispScriptNodeLeftovers=%d allPackageScriptJsTsLeftovers=%d activeNelispJsTools=%d activeBuildJsTsFallbacks=%d activeRuntimeJsTsCommands=%d trackedScriptLanguage=%d physicalScriptLanguage=%d nonSourceTrackedJsTs=%d referenceSourceJsTs=%d report=%s\n"
               (length (plist-get registry :all))
               (length (plist-get registry :conditional))
               (length (plist-get registry :simple))
               (length leftovers)
               (length all-leftovers)
               (length package-leftovers)
               (length nelisp-js-tools)
               (length build-fallbacks)
               (length runtime-js-ts-commands)
               (length tracked-script-language)
               (length physical-script-language)
               (length non-source-js-ts)
               (length reference-source-js-ts)
               (gr-audit-relative-path report))))))

(when noninteractive
  (gr-audit-main))

;;; elisp-port-audit.el ends here
