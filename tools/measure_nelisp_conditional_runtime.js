#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { transpileFunc } = require("./generate_nelisp_conditional_runtime");

const repoRoot = path.resolve(__dirname, "..");
const args = process.argv.slice(2);
const srcRoot = path.resolve(
  valueAfter("--src-root") || path.join(repoRoot, "src", "renderer", "func")
);
const reportPath = path.resolve(
  valueAfter("--out") || path.join(repoRoot, "build", "nelisp-conditional-runtime-report.json")
);
const namesPath = path.resolve(
  valueAfter("--names-out") || path.join(repoRoot, "build", "nelisp-conditional-runtime-names.txt")
);

if (!fs.existsSync(srcRoot)) throw new Error(`missing func root: ${srcRoot}`);

const files = fs.readdirSync(srcRoot)
  .filter((name) => /^func\d+[a-z]*\.ts$/i.test(name))
  .sort(byFuncNumber);

const translated = [];
const failed = [];
for (const fileName of files) {
  const name = path.basename(fileName, ".ts");
  const filePath = path.join(srcRoot, fileName);
  try {
    const body = transpileFunc(name, filePath);
    translated.push({
      name,
      file: path.relative(repoRoot, filePath).replace(/\\/g, "/"),
      lines: body.length,
    });
  } catch (error) {
    failed.push({
      name,
      file: path.relative(repoRoot, filePath).replace(/\\/g, "/"),
      error: error.message,
    });
  }
}

const report = {
  srcRoot: path.relative(repoRoot, srcRoot).replace(/\\/g, "/"),
  translatedCount: translated.length,
  failedCount: failed.length,
  translated,
  failed,
};

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
fs.writeFileSync(namesPath, `${translated.map((entry) => entry.name).join("\n")}\n`, "utf8");

console.log(JSON.stringify({
  report: path.relative(repoRoot, reportPath),
  namesFile: path.relative(repoRoot, namesPath),
  translatedCount: translated.length,
  failedCount: failed.length,
}, null, 2));

function valueAfter(flag) {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : null;
}

function byFuncNumber(a, b) {
  const na = Number(a.replace(/\D/g, ""));
  const nb = Number(b.replace(/\D/g, ""));
  return na - nb || a.localeCompare(b);
}
