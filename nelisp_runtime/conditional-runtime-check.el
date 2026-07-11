;;; conditional-runtime-check.el --- verify conditional runtime coverage -*- coding: utf-8; lexical-binding: t; -*-

(require 'cl-lib)

(defconst gr-conditional-repo-root
  (expand-file-name ".." (file-name-directory (or load-file-name buffer-file-name))))

(defconst gr-conditional-runtime-dir
  (expand-file-name "nelisp_runtime" gr-conditional-repo-root))

(defconst gr-conditional-build-dir
  (expand-file-name "build" gr-conditional-repo-root))

(defconst gr-conditional-base-names-path
  (expand-file-name "nelisp-conditional-runtime-names.txt" gr-conditional-build-dir))

(defconst gr-conditional-expanded-names-path
  (expand-file-name "nelisp-conditional-runtime-expanded-names.txt" gr-conditional-build-dir))

(defconst gr-conditional-source-path
  (expand-file-name "gamedata-conditional.el" gr-conditional-runtime-dir))

(defconst gr-conditional-required-names
  '("func060"
    "func172"
    "func368"
    "func403"
    "func407"
    "func408"
    "func420"
    "func432"
    "func479"
    "func494"
    "func497"
    "func498"
    "func522"
    "func523"
    "func525"
    "func771"
    "func775"
    "func0854"
    "enemy003"
    "func439"
    "func441"
    "func442"
    "func444"
    "item400"
    "item402"
    "item403"
    "item404"
    "item405"
    "item406"
    "item407"
    "item408"
    "item409"
    "item560"
    "item561"
    "item562"
    "item563"
    "item564"
    "item565"
    "item566"
    "item567"
    "item568"
    "item569"
    "item570"
    "item571"
    "item572"
    "item573"
    "item574"
    "item575"
    "item576"
    "item577"
    "item578"
    "item579"
    "item580"
    "item582"
    "item583"
    "item584"
    "item585"
    "item586"
    "item587"
    "item588"
    "item589"
    "item590"
    "item591"
    "item600"
    "item602"
    "item603"
    "item604"
    "item605"
    "item630"
    "item631"
    "item632"
    "item633"
    "item634"
    "item635"
    "item636"
    "item639"
    "item640"
    "item641"
    "item647"
    "item648"
    "item650"
    "item651"
    "item652"
    "item653"
    "item654"
    "item655"
    "item701"
    "item712"
    "item713"
    "item714"
    "item715"
    "item716"
    "item718"
    "item719"
    "item720"
    "item722"
    "item723"
    "item724"
    "item726"
    "item727"
    "item728"
    "item729"
    "item730"
    "item731"
    "item732"
    "item797"
    "item798"
    "item799"))

(defvar gr-conditional-suppress-main nil
  "When non-nil, loading this file does not run `gr-conditional-main'.")

(defun gr-conditional-value-after (flag args)
  "Return the value after FLAG in ARGS."
  (let ((tail (member flag args)))
    (when tail (cadr tail))))

(defun gr-conditional-flag-p (flag args)
  "Return non-nil when FLAG is present in ARGS."
  (member flag args))

(defun gr-conditional-read-file (path)
  "Return the contents of PATH as a string."
  (with-temp-buffer
    (insert-file-contents path)
    (buffer-string)))

(defun gr-conditional-read-names (path)
  "Read whitespace-separated runtime names from PATH."
  (if (file-exists-p path)
      (split-string (gr-conditional-read-file path) "[ \t\r\n]+" t)
    nil))

(defun gr-conditional-extract-names (source regexp)
  "Extract match group 1 from SOURCE with REGEXP."
  (let ((pos 0)
        names)
    (while (string-match regexp source pos)
      (push (match-string 1 source) names)
      (setq pos (match-end 0)))
    (delete-dups (nreverse names))))

(defun gr-conditional-runtime-name-p (name)
  "Return non-nil when NAME is generated game runtime code."
  (string-match-p "\\`\\(?:func\\|item\\|enemy\\)[[:alnum:]]+\\'" name))

(defun gr-conditional-name-number (name)
  "Return the numeric portion of NAME as a number."
  (string-to-number (replace-regexp-in-string "\\D" "" name)))

(defun gr-conditional-name< (a b)
  "Sort runtime names like the historical JS builder."
  (let ((na (gr-conditional-name-number a))
        (nb (gr-conditional-name-number b)))
    (or (< na nb)
        (and (= na nb) (string< a b)))))

(defun gr-conditional-sort-names (names)
  "Return unique NAMES sorted in runtime order."
  (sort (delete-dups (copy-sequence names)) #'gr-conditional-name<))

(defun gr-conditional-write-names-if-changed (path names)
  "Write NAMES to PATH when content differs."
  (let ((content (concat (mapconcat #'identity names "\n") "\n")))
    (unless (and (file-exists-p path)
                 (string= content (gr-conditional-read-file path)))
      (let ((coding-system-for-write 'utf-8-unix))
        (with-temp-file path
          (insert content))))))

(defun gr-conditional-missing-names (names defined)
  "Return NAMES which are not present in DEFINED."
  (cl-remove-if (lambda (name) (member name defined)) names))

(defun gr-conditional-json-escape (value)
  "Return VALUE escaped for JSON string output."
  (let ((text (format "%s" value)))
    (setq text (replace-regexp-in-string "\\\\" "\\\\\\\\" text nil t))
    (setq text (replace-regexp-in-string "\"" "\\\\\"" text nil t))
    (setq text (replace-regexp-in-string "\n" "\\\\n" text nil t))
    (setq text (replace-regexp-in-string "\r" "\\\\r" text nil t))
    (replace-regexp-in-string "\t" "\\\\t" text nil t)))

(defun gr-conditional-json-string (value)
  "Return VALUE as a JSON string."
  (format "\"%s\"" (gr-conditional-json-escape value)))

(defun gr-conditional-json-string-array (values)
  "Return VALUES as a JSON string array."
  (concat "["
          (mapconcat #'gr-conditional-json-string values ", ")
          "]"))

(defun gr-conditional-relative-path (path)
  "Return PATH relative to `gr-conditional-repo-root'."
  (replace-regexp-in-string
   "\\\\"
   "/"
   (file-relative-name (expand-file-name path) gr-conditional-repo-root)
   nil
   t))

(defun gr-conditional-write-report (path expanded defined called missing-expanded missing-calls)
  "Write the conditional runtime coverage report to PATH."
  (let ((coding-system-for-write 'utf-8-unix))
    (with-temp-file path
      (insert "{\n")
      (insert "  \"checker\": \"nelisp_runtime/conditional-runtime-check.el\",\n")
      (insert "  \"runtimeSource\": "
              (gr-conditional-json-string
               (gr-conditional-relative-path gr-conditional-source-path))
              ",\n")
      (insert "  \"baseNamesFile\": "
              (gr-conditional-json-string
               (gr-conditional-relative-path gr-conditional-base-names-path))
              ",\n")
      (insert "  \"expandedNamesFile\": "
              (gr-conditional-json-string
               (gr-conditional-relative-path gr-conditional-expanded-names-path))
              ",\n")
      (insert (format "  \"expandedCount\": %d,\n" (length expanded)))
      (insert (format "  \"definedCount\": %d,\n" (length defined)))
      (insert (format "  \"calledCount\": %d,\n" (length called)))
      (insert (format "  \"missingExpandedCount\": %d,\n" (length missing-expanded)))
      (insert (format "  \"missingCallCount\": %d,\n" (length missing-calls)))
      (insert "  \"missingExpanded\": "
              (gr-conditional-json-string-array
               (gr-conditional-sort-names missing-expanded))
              ",\n")
      (insert "  \"missingCalls\": "
              (gr-conditional-json-string-array
               (gr-conditional-sort-names missing-calls))
              "\n")
      (insert "}\n"))))

(defun gr-conditional-main ()
  "Verify that generated conditional elisp covers required runtime names."
  (let* ((args command-line-args-left)
         (report-path (or (gr-conditional-value-after "--report" args)
                          (gr-conditional-value-after "--out" args)))
         (no-write-expanded (gr-conditional-flag-p "--no-write-expanded" args)))
    (when (and report-path (not (file-name-absolute-p report-path)))
      (setq report-path (expand-file-name report-path gr-conditional-repo-root)))
    (make-directory gr-conditional-build-dir t)
  (unless (file-exists-p gr-conditional-source-path)
    (error "Missing conditional runtime source: %s" gr-conditional-source-path))
  (let* ((source (gr-conditional-read-file gr-conditional-source-path))
         (base-names (gr-conditional-read-names gr-conditional-base-names-path))
         (existing-expanded (gr-conditional-read-names gr-conditional-expanded-names-path))
         (defined (gr-conditional-extract-names source "(gr-defnative \"\\([^\"]+\\)\""))
         (called (cl-remove-if-not
                  #'gr-conditional-runtime-name-p
                  (gr-conditional-extract-names source "(gr-run-func \"\\([^\"]+\\)\"")))
         (expanded (gr-conditional-sort-names
                    (append existing-expanded
                            base-names
                            gr-conditional-required-names
                            called)))
         (missing-expanded (gr-conditional-missing-names expanded defined))
         (missing-calls (gr-conditional-missing-names called defined)))
    (when missing-expanded
      (error "Conditional runtime missing definitions for: %s"
             (mapconcat #'identity (gr-conditional-sort-names missing-expanded) ", ")))
    (when missing-calls
      (error "Conditional runtime has unresolved calls: %s"
             (mapconcat #'identity (gr-conditional-sort-names missing-calls) ", ")))
    (unless no-write-expanded
      (gr-conditional-write-names-if-changed gr-conditional-expanded-names-path expanded))
    (when report-path
      (make-directory (file-name-directory report-path) t)
      (gr-conditional-write-report report-path expanded defined called missing-expanded missing-calls))
    (princ
     (format "CONDITIONAL-RUNTIME-OK expanded=%d defined=%d calls=%d\n"
             (length expanded)
             (length defined)
             (length called))))))

(when (and noninteractive (not gr-conditional-suppress-main))
  (gr-conditional-main))

;;; conditional-runtime-check.el ends here
