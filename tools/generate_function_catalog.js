const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const rendererDir = path.join(repoRoot, "src", "renderer");
const runtimeNamesPath = path.join(repoRoot, "build", "nelisp-conditional-runtime-names.txt");
const jsonOutputPath = path.join(repoRoot, "build", "function-catalog.json");
const mdOutputPath = path.join(repoRoot, "docs", "nelisp-function-catalog.md");
const publicIndexPath = path.join(repoRoot, "public", "index.html");

const skippedReasons = new Map([
  ["func342", "toString"],
  ["func0928", "CharactorInfo.dim"],
]);

const excludedRendererDirs = new Set(["nelisp_bridge", "node-stubs"]);

function toRepoPath(filePath) {
  return path.relative(repoRoot, filePath).split(path.sep).join("/");
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function listTsFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (dir === rendererDir && excludedRendererDirs.has(entry.name)) {
        continue;
      }
      results.push(...listTsFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".ts")) {
      results.push(fullPath);
    }
  }
  return results;
}

function getLoc(source) {
  if (source.length === 0) {
    return 0;
  }
  return source.split(/\r?\n/).length;
}

function extractTopHeader(source) {
  const trimmed = source.replace(/^\uFEFF/, "");
  const match = trimmed.match(/^\s*(\/\*[\s\S]*?\*\/|\/\/[^\n\r]*(?:\r?\n\s*\/\/[^\n\r]*)*)/);
  return match ? match[1].trim() : null;
}

function uniqueSorted(values) {
  return [...new Set(values)].sort();
}

function summarizeValues(values) {
  const list = uniqueSorted(values);
  return {
    count: list.length,
    values: list.length <= 15 ? list : null,
  };
}

function stripComments(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "");
}

function maskComments(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, (match) => " ".repeat(match.length))
    .replace(/\/\/.*$/gm, (match) => " ".repeat(match.length));
}

function splitSpecifiers(source) {
  return source
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
}

function parseImportSpecifiers(specifierSource) {
  const mappings = [];
  for (const part of splitSpecifiers(specifierSource.replace(/\s+/g, " "))) {
    const match = part.match(/^([A-Za-z_$][\w$]*)(?:\s+as\s+([A-Za-z_$][\w$]*))?$/);
    if (!match) {
      continue;
    }
    mappings.push({
      imported: match[1],
      local: match[2] || match[1],
    });
  }
  return mappings;
}

function resolveLocalModule(fromFilePath, rawSpecifier) {
  if (!rawSpecifier.startsWith(".")) {
    return null;
  }
  const resolvedBase = path.resolve(path.dirname(fromFilePath), rawSpecifier);
  const candidates = [
    resolvedBase,
    `${resolvedBase}.ts`,
    path.join(resolvedBase, "index.ts"),
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }
  return null;
}

function parseImports(source, filePath) {
  const named = new Map();
  const namespace = new Map();
  const importRegex = /import\s+([\s\S]*?)\s+from\s+['"]([^'"]+)['"]/g;
  let match;
  while ((match = importRegex.exec(source)) !== null) {
    const clause = match[1].trim();
    const rawSpecifier = match[2];
    const resolvedFile = resolveLocalModule(filePath, rawSpecifier);
    if (!resolvedFile) {
      continue;
    }
    const namedMatch = clause.match(/^\{([\s\S]*)\}$/);
    if (namedMatch) {
      for (const specifier of parseImportSpecifiers(namedMatch[1])) {
        named.set(specifier.local, {
          imported: specifier.imported,
          sourceFile: resolvedFile,
        });
      }
      continue;
    }
    const namespaceMatch = clause.match(/^\*\s+as\s+([A-Za-z_$][\w$]*)$/);
    if (namespaceMatch) {
      namespace.set(namespaceMatch[1], {
        sourceFile: resolvedFile,
      });
    }
  }
  return { named, namespace };
}

function parseExportStatements(source) {
  const locals = [];
  const reexports = [];
  const exportAll = [];

  const exportFunctionRegex = /export\s+(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/g;
  let match;
  while ((match = exportFunctionRegex.exec(source)) !== null) {
    locals.push({ exported: match[1], local: match[1] });
  }

  const exportBlockRegex = /export\s*\{([\s\S]*?)\}(?:\s*from\s*['"]([^'"]+)['"])?/g;
  while ((match = exportBlockRegex.exec(source)) !== null) {
    const specifiers = parseImportSpecifiers(match[1]);
    if (match[2]) {
      reexports.push({
        source: match[2],
        specifiers,
      });
    } else {
      for (const specifier of specifiers) {
        locals.push({
          exported: specifier.local,
          local: specifier.imported,
        });
      }
    }
  }

  const exportAllRegex = /export\s+\*\s+from\s+['"]([^'"]+)['"]/g;
  while ((match = exportAllRegex.exec(source)) !== null) {
    exportAll.push(match[1]);
  }

  return { locals, reexports, exportAll };
}

function parseFunctions(source) {
  const functions = [];
  const searchableSource = maskComments(source);
  const functionRegex = /\b(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/g;
  let match;
  while ((match = functionRegex.exec(searchableSource)) !== null) {
    const name = match[1];
    const braceIndex = searchableSource.indexOf("{", match.index);
    if (braceIndex === -1) {
      continue;
    }

    let depth = 0;
    let endIndex = -1;
    let inSingle = false;
    let inDouble = false;
    let inTemplate = false;
    let inLineComment = false;
    let inBlockComment = false;
    let escape = false;

    for (let i = braceIndex; i < source.length; i += 1) {
      const char = source[i];
      const next = source[i + 1];
      if (inLineComment) {
        if (char === "\n") {
          inLineComment = false;
        }
        continue;
      }
      if (inBlockComment) {
        if (char === "*" && next === "/") {
          inBlockComment = false;
          i += 1;
        }
        continue;
      }
      if (inSingle) {
        if (!escape && char === "'") {
          inSingle = false;
        }
        escape = !escape && char === "\\";
        continue;
      }
      if (inDouble) {
        if (!escape && char === "\"") {
          inDouble = false;
        }
        escape = !escape && char === "\\";
        continue;
      }
      if (inTemplate) {
        if (!escape && char === "`") {
          inTemplate = false;
        }
        escape = !escape && char === "\\";
        continue;
      }
      if (char === "/" && next === "/") {
        inLineComment = true;
        i += 1;
        continue;
      }
      if (char === "/" && next === "*") {
        inBlockComment = true;
        i += 1;
        continue;
      }
      if (char === "'") {
        inSingle = true;
        escape = false;
        continue;
      }
      if (char === "\"") {
        inDouble = true;
        escape = false;
        continue;
      }
      if (char === "`") {
        inTemplate = true;
        escape = false;
        continue;
      }
      if (char === "{") {
        depth += 1;
      } else if (char === "}") {
        depth -= 1;
        if (depth === 0) {
          endIndex = i + 1;
          break;
        }
      }
    }

    if (endIndex === -1) {
      continue;
    }

    functions.push({
      name,
      body: source.slice(braceIndex, endIndex),
    });
    functionRegex.lastIndex = endIndex;
  }
  return functions;
}

function resolveSubsystem(filePath) {
  const relativePath = path.relative(rendererDir, filePath).split(path.sep);
  if (relativePath.length <= 1) {
    return "root";
  }
  if (relativePath[0] === "adapter") {
    return "adapter";
  }
  return relativePath[0];
}

function parseRuntimeNames() {
  const lines = fs.readFileSync(runtimeNamesPath, "utf8").split(/\r?\n/);
  return lines
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
}

function makeStatus(name, runtimeNames) {
  if (runtimeNames.has(name)) {
    return "transpiled";
  }
  if (skippedReasons.has(name)) {
    return `skipped (${skippedReasons.get(name)})`;
  }
  return "support";
}

function truncate(value, length) {
  if (!value) {
    return "";
  }
  return value.length > length ? `${value.slice(0, length - 3)}...` : value;
}

function renderNoHeader(names) {
  const rows = [];
  for (let i = 0; i < names.length; i += 10) {
    rows.push(names.slice(i, i + 10).join(", "));
  }
  return rows;
}

function extractMetrics(body, fileInfo, catalogByName) {
  const directFuncCalls = [...body.matchAll(/\bFunc\.([A-Za-z_$][\w$]*)\s*\(/g)]
    .map((match) => match[1])
    .filter((name) => catalogByName.has(name));

  const importedBareCalls = [];
  for (const [localName, importInfo] of fileInfo.imports.named.entries()) {
    const targetName = importInfo.resolvedName;
    if (!targetName || !catalogByName.has(targetName)) {
      continue;
    }
    const regex = new RegExp(`(^|[^.\\w$])${escapeRegex(localName)}\\s*\\(`, "g");
    if (regex.test(body)) {
      importedBareCalls.push(targetName);
    }
  }

  const localBareCalls = [];
  for (const localName of fileInfo.localFunctionNames) {
    const targetName = fileInfo.localFunctionMap.get(localName);
    if (!targetName || !catalogByName.has(targetName)) {
      continue;
    }
    const regex = new RegExp(`(^|[^.\\w$])${escapeRegex(localName)}\\s*\\(`, "g");
    if (regex.test(body)) {
      localBareCalls.push(targetName);
    }
  }

  const callees = uniqueSorted([...directFuncCalls, ...importedBareCalls, ...localBareCalls]);
  const adap = uniqueSorted(
    [...body.matchAll(/\bAdap\.([A-Za-z_$][\w$]*)\s*\(/g)].map((match) => match[1])
  );
  const others = uniqueSorted(
    [...body.matchAll(/\b(?:Menu|Items|Music|Class)\.([A-Za-z_$][\w$]*)\b/g)].map((match) => match[0])
  );
  const numericGvars = uniqueSorted(
    [...body.matchAll(/\bGvar\.(var_\d+)\b/g)].map((match) => match[1])
  );
  const namedGvars = uniqueSorted(
    [...body.matchAll(/\bGvar\.([A-Za-z_$][\w$]*)\b/g)]
      .map((match) => match[1])
      .filter((name) => !/^var_\d+$/.test(name))
  );

  return {
    callees,
    adap,
    others,
    gvarNumeric: summarizeValues(numericGvars),
    gvarNamed: summarizeValues(namedGvars),
    hasAwait: /\bawait\b/.test(body),
    hasLoops: /\b(?:for|while)\b/.test(body),
  };
}

function buildFileInfos(tsFiles) {
  const fileInfos = new Map();
  for (const filePath of tsFiles) {
    const source = fs.readFileSync(filePath, "utf8");
    const parsedFunctions = parseFunctions(source);
    const functions = new Map(parsedFunctions.map((item) => [item.name, item]));
    const imports = parseImports(source, filePath);
    const exports = parseExportStatements(source);
    const exportedFunctionNames = uniqueSorted(
      exports.locals
        .filter(({ local }) => functions.has(local))
        .map(({ exported }) => exported)
    );
    const fileInfo = {
      filePath,
      repoPath: toRepoPath(filePath),
      source,
      header: extractTopHeader(source),
      loc: getLoc(source),
      subsystem: resolveSubsystem(filePath),
      functions,
      functionNames: exportedFunctionNames,
      localFunctionNames: parsedFunctions.map((item) => item.name),
      localFunctionMap: new Map(),
      imports,
      exports,
    };
    for (const exportedName of exportedFunctionNames) {
      const exportRecord = exports.locals.find((item) => item.exported === exportedName);
      fileInfo.localFunctionMap.set(exportedName, exportRecord.local);
    }
    fileInfos.set(filePath, fileInfo);
  }
  return fileInfos;
}

function createModuleExportResolver(fileInfos) {
  const cache = new Map();
  const visiting = new Set();

  function resolve(filePath) {
    if (!fileInfos.has(filePath)) {
      return new Map();
    }
    if (cache.has(filePath)) {
      return cache.get(filePath);
    }
    if (visiting.has(filePath)) {
      return new Map();
    }

    visiting.add(filePath);
    const fileInfo = fileInfos.get(filePath);
    const resolved = new Map();

    for (const { exported, local } of fileInfo.exports.locals) {
      if (fileInfo.functions.has(local)) {
        resolved.set(exported, local);
      }
    }

    for (const { source, specifiers } of fileInfo.exports.reexports) {
      const targetFile = resolveLocalModule(filePath, source);
      const targetExports = targetFile ? resolve(targetFile) : new Map();
      for (const specifier of specifiers) {
        const targetName = targetExports.get(specifier.imported);
        if (targetName) {
          resolved.set(specifier.local, targetName);
        }
      }
    }

    for (const source of fileInfo.exports.exportAll) {
      const targetFile = resolveLocalModule(filePath, source);
      const targetExports = targetFile ? resolve(targetFile) : new Map();
      for (const [exportedName, targetName] of targetExports.entries()) {
        if (!resolved.has(exportedName)) {
          resolved.set(exportedName, targetName);
        }
      }
    }

    cache.set(filePath, resolved);
    visiting.delete(filePath);
    return resolved;
  }

  return resolve;
}

function collectEntryPointReferences(rootFileInfos, catalogByName) {
  const references = new Map();

  function addReference(name, sourceRef) {
    if (!catalogByName.has(name)) {
      return;
    }
    if (!references.has(name)) {
      references.set(name, new Set());
    }
    references.get(name).add(sourceRef);
  }

  for (const fileInfo of rootFileInfos) {
    const stripped = stripComments(fileInfo.source);

    for (const match of stripped.matchAll(/\bFunc\.([A-Za-z_$][\w$]*)\b/g)) {
      addReference(match[1], fileInfo.repoPath);
    }

    for (const [localName, importInfo] of fileInfo.imports.named.entries()) {
      const targetName = importInfo.resolvedName;
      if (!targetName || !catalogByName.has(targetName)) {
        continue;
      }
      const matches = stripped.match(new RegExp(`\\b${escapeRegex(localName)}\\b`, "g"));
      if ((matches || []).length > 1) {
        addReference(targetName, fileInfo.repoPath);
      }
    }

    for (const localName of fileInfo.localFunctionNames) {
      const matches = stripped.match(new RegExp(`\\b${escapeRegex(localName)}\\b`, "g"));
      if ((matches || []).length > 1) {
        addReference(localName, fileInfo.repoPath);
      }
    }
  }

  if (fs.existsSync(publicIndexPath)) {
    const html = stripComments(fs.readFileSync(publicIndexPath, "utf8"));
    for (const name of catalogByName.keys()) {
      if (!/^(?:func|item)/i.test(name)) {
        continue;
      }
      const regex = new RegExp(`\\b${escapeRegex(name)}\\b`, "g");
      const matches = html.match(regex);
      if (matches && matches.length > 0) {
        addReference(name, "public/index.html");
      }
    }
  }

  return [...references.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([name, sourceRefs]) => ({
      name,
      sources: uniqueSorted([...sourceRefs]),
    }));
}

function makeSubsystemSummary(catalogEntries) {
  const subsystemMap = new Map();
  for (const entry of catalogEntries) {
    if (!subsystemMap.has(entry.subsystem)) {
      subsystemMap.set(entry.subsystem, []);
    }
    subsystemMap.get(entry.subsystem).push(entry);
  }

  return [...subsystemMap.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([subsystem, entries]) => {
      const tracked = entries.filter(
        (entry) => entry.status === "transpiled" || entry.status.startsWith("skipped") || entry.status === "untranspiled"
      );
      const transpiled = tracked.filter((entry) => entry.status === "transpiled").length;
      const skipped = tracked.filter((entry) => entry.status.startsWith("skipped")).length;
      const untranspiled = tracked.filter((entry) => entry.status === "untranspiled").length;
      const support = entries.filter((entry) => entry.status === "support").length;
      const coverage = tracked.length === 0 ? null : Number((((transpiled + skipped) / tracked.length) * 100).toFixed(1));
      return {
        subsystem,
        total: entries.length,
        tracked: tracked.length,
        transpiled,
        skipped,
        untranspiled,
        support,
        coverage,
      };
    });
}

function renderSubsystemTable(markdown, subsystem, entries) {
  markdown.push(`## ${subsystem}`);
  markdown.push("");
  markdown.push("| name | status | LOC | header | #callees | #callers |");
  markdown.push("| --- | --- | ---: | --- | ---: | ---: |");
  for (const entry of entries) {
    const headerText = entry.header ? `> ${entry.header.replace(/\r?\n/g, " ")}` : "";
    markdown.push(
      `| ${entry.name} | ${entry.status} | ${entry.loc} | ${truncate(headerText, 80).replace(/\|/g, "\\|")} | ${entry.callees.length} | ${entry.callers.length} |`
    );
  }
  markdown.push("");
}

function pickPreferredOwner(existingInfo, nextInfo) {
  if (existingInfo.subsystem === "func" && nextInfo.subsystem !== "func") {
    return nextInfo;
  }
  if (nextInfo.subsystem === "func" && existingInfo.subsystem !== "func") {
    return existingInfo;
  }
  return existingInfo;
}

function collectAliasTargets(fileInfos, resolveModuleExports, ownerByName) {
  const aliasTargets = new Map();
  for (const fileInfo of fileInfos.values()) {
    for (const reexport of fileInfo.exports.reexports) {
      const targetFile = resolveLocalModule(fileInfo.filePath, reexport.source);
      const targetExports = targetFile ? resolveModuleExports(targetFile) : new Map();
      for (const specifier of reexport.specifiers) {
        const targetName = targetExports.get(specifier.imported);
        if (!targetName) {
          continue;
        }
        if (specifier.local === targetName) {
          continue;
        }
        if (!ownerByName.has(targetName)) {
          continue;
        }
        aliasTargets.set(specifier.local, targetName);
      }
    }
  }
  return aliasTargets;
}

function main() {
  const tsFiles = listTsFiles(rendererDir).sort();
  const fileInfos = buildFileInfos(tsFiles);
  const resolveModuleExports = createModuleExportResolver(fileInfos);

  for (const fileInfo of fileInfos.values()) {
    for (const [, importInfo] of fileInfo.imports.named.entries()) {
      const exportedNames = resolveModuleExports(importInfo.sourceFile);
      importInfo.resolvedName = exportedNames.get(importInfo.imported) || null;
    }
  }

  const ownerByName = new Map();
  for (const fileInfo of fileInfos.values()) {
    for (const functionName of fileInfo.functionNames) {
      ownerByName.set(
        functionName,
        ownerByName.has(functionName)
          ? pickPreferredOwner(ownerByName.get(functionName), fileInfo)
          : fileInfo
      );
    }
  }
  const aliasTargets = collectAliasTargets(fileInfos, resolveModuleExports, ownerByName);

  const catalogByName = new Map();
  for (const [functionName, fileInfo] of ownerByName.entries()) {
    catalogByName.set(functionName, {
      name: functionName,
      file: fileInfo.repoPath,
      loc: fileInfo.loc,
      header: fileInfo.header,
      subsystem: fileInfo.subsystem,
      callees: [],
      calleesExternal: [],
      adap: [],
      others: [],
      gvarNumeric: { count: 0, values: [] },
      gvarNamed: { count: 0, values: [] },
      hasAwait: false,
      hasLoops: false,
      callers: [],
      status: "support",
    });
  }
  for (const [aliasName, targetName] of aliasTargets.entries()) {
    const targetOwner = ownerByName.get(targetName);
    if (!targetOwner || catalogByName.has(aliasName)) {
      continue;
    }
    catalogByName.set(aliasName, {
      name: aliasName,
      file: targetOwner.repoPath,
      loc: targetOwner.loc,
      header: targetOwner.header,
      subsystem: targetOwner.subsystem,
      callees: [],
      calleesExternal: [],
      adap: [],
      others: [],
      gvarNumeric: { count: 0, values: [] },
      gvarNamed: { count: 0, values: [] },
      hasAwait: false,
      hasLoops: false,
      callers: [],
      status: "support",
    });
  }

  const callersByName = new Map();
  for (const fileInfo of fileInfos.values()) {
    for (const functionName of fileInfo.functionNames) {
      if (ownerByName.get(functionName) !== fileInfo) {
        continue;
      }
      const entry = catalogByName.get(functionName);
      const body = fileInfo.functions.get(functionName).body;
      const metrics = extractMetrics(body, fileInfo, catalogByName);
      const externalCallees = metrics.callees
        .filter((callee) => catalogByName.get(callee).subsystem !== entry.subsystem)
        .map((callee) => `${catalogByName.get(callee).subsystem}:${callee}`);

      entry.callees = metrics.callees;
      entry.calleesExternal = uniqueSorted(externalCallees);
      entry.adap = metrics.adap;
      entry.others = metrics.others;
      entry.gvarNumeric = metrics.gvarNumeric;
      entry.gvarNamed = metrics.gvarNamed;
      entry.hasAwait = metrics.hasAwait;
      entry.hasLoops = metrics.hasLoops;

      for (const callee of metrics.callees) {
        if (!callersByName.has(callee)) {
          callersByName.set(callee, new Set());
        }
        callersByName.get(callee).add(functionName);
      }
    }
  }
  for (const [aliasName, targetName] of aliasTargets.entries()) {
    const aliasEntry = catalogByName.get(aliasName);
    const targetEntry = catalogByName.get(targetName);
    if (!aliasEntry || !targetEntry) {
      continue;
    }
    aliasEntry.callees = [...targetEntry.callees];
    aliasEntry.calleesExternal = [...targetEntry.calleesExternal];
    aliasEntry.adap = [...targetEntry.adap];
    aliasEntry.others = [...targetEntry.others];
    aliasEntry.gvarNumeric = targetEntry.gvarNumeric;
    aliasEntry.gvarNamed = targetEntry.gvarNamed;
    aliasEntry.hasAwait = targetEntry.hasAwait;
    aliasEntry.hasLoops = targetEntry.hasLoops;
  }

  const runtimeNames = new Set(parseRuntimeNames());
  const catalogEntries = [...catalogByName.values()].sort((a, b) => a.name.localeCompare(b.name));
  for (const entry of catalogEntries) {
    entry.callers = uniqueSorted([...(callersByName.get(entry.name) || [])]);
    if (runtimeNames.has(entry.name)) {
      entry.status = "transpiled";
    } else if (skippedReasons.has(entry.name)) {
      entry.status = `skipped (${skippedReasons.get(entry.name)})`;
    } else if (/^func/i.test(entry.name) || /^item/i.test(entry.name)) {
      entry.status = "untranspiled";
    } else {
      entry.status = "support";
    }
  }

  const runtimeMissing = [...runtimeNames].filter((name) => !catalogByName.has(name)).sort();
  const subsystemSummary = makeSubsystemSummary(catalogEntries);
  const trueEntryPoints = collectEntryPointReferences(
    [...fileInfos.values()].filter((fileInfo) => path.dirname(fileInfo.filePath) === rendererDir),
    catalogByName
  );

  const topByCallers = [...catalogEntries]
    .sort((a, b) => b.callers.length - a.callers.length || a.name.localeCompare(b.name))
    .slice(0, 25);
  const topByCallees = [...catalogEntries]
    .sort((a, b) => b.callees.length - a.callees.length || a.name.localeCompare(b.name))
    .slice(0, 25);
  const noHeaderNames = catalogEntries.filter((entry) => entry.header === null).map((entry) => entry.name);

  const trackedEntries = catalogEntries.filter(
    (entry) => entry.status === "transpiled" || entry.status.startsWith("skipped") || entry.status === "untranspiled"
  );
  const summary = {
    totalFunctions: catalogEntries.length,
    trackedFunctions: trackedEntries.length,
    transpiled: trackedEntries.filter((entry) => entry.status === "transpiled").length,
    skipped: trackedEntries.filter((entry) => entry.status.startsWith("skipped")).length,
    untranspiled: trackedEntries.filter((entry) => entry.status === "untranspiled").length,
    support: catalogEntries.filter((entry) => entry.status === "support").length,
    withHeader: catalogEntries.filter((entry) => entry.header !== null).length,
    withoutHeader: catalogEntries.filter((entry) => entry.header === null).length,
    bySubsystem: subsystemSummary,
  };

  const payload = {
    generatedAt: new Date().toISOString(),
    summary,
    runtimeNamesMissingFromCatalog: runtimeMissing,
    trueEntryPoints,
    hubs: {
      byCallers: topByCallers.map((entry) => ({
        name: entry.name,
        subsystem: entry.subsystem,
        callers: entry.callers.length,
        header: entry.header,
      })),
      byCallees: topByCallees.map((entry) => ({
        name: entry.name,
        subsystem: entry.subsystem,
        callees: entry.callees.length,
        header: entry.header,
      })),
    },
    functions: catalogEntries,
  };

  fs.writeFileSync(jsonOutputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

  const markdown = [];
  markdown.push("# Nelisp Function Catalog");
  markdown.push("");
  markdown.push("## 1. Summary");
  markdown.push("");
  markdown.push(`- Total functions: ${summary.totalFunctions}`);
  markdown.push(`- Runtime-tracked functions: ${summary.trackedFunctions}`);
  markdown.push(`- Transpiled: ${summary.transpiled}`);
  markdown.push(`- Skipped: ${summary.skipped}`);
  markdown.push(`- Untranspiled: ${summary.untranspiled}`);
  markdown.push(`- Support functions: ${summary.support}`);
  markdown.push(`- With header: ${summary.withHeader}`);
  markdown.push(`- Without header: ${summary.withoutHeader}`);
  markdown.push("");
  markdown.push("| subsystem | total | tracked | transpiled | skipped | untranspiled | support | coverage |");
  markdown.push("| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |");
  for (const row of subsystemSummary) {
    markdown.push(
      `| ${row.subsystem} | ${row.total} | ${row.tracked} | ${row.transpiled} | ${row.skipped} | ${row.untranspiled} | ${row.support} | ${row.coverage === null ? "n/a" : `${row.coverage}%`} |`
    );
  }
  markdown.push("");
  markdown.push("## 2. TRUE ENTRY POINTS");
  markdown.push("");
  if (trueEntryPoints.length === 0) {
    markdown.push("None.");
  } else {
    for (const entry of trueEntryPoints) {
      markdown.push(`- ${entry.name}: ${entry.sources.join(", ")}`);
    }
  }
  markdown.push("");
  markdown.push("## 3. HUBS");
  markdown.push("");
  markdown.push("### Top 25 by callers");
  markdown.push("");
  for (const entry of topByCallers) {
    const headerText = entry.header ? truncate(entry.header.replace(/\r?\n/g, " "), 80) : "NO HEADER";
    markdown.push(`- ${entry.name} (${entry.subsystem}): ${entry.callers.length} | ${headerText}`);
  }
  markdown.push("");
  markdown.push("### Top 25 by callees");
  markdown.push("");
  for (const entry of topByCallees) {
    const headerText = entry.header ? truncate(entry.header.replace(/\r?\n/g, " "), 80) : "NO HEADER";
    markdown.push(`- ${entry.name} (${entry.subsystem}): ${entry.callees.length} | ${headerText}`);
  }
  markdown.push("");
  markdown.push("## 4. Per-subsystem tables");
  markdown.push("");
  const subsystemNames = uniqueSorted(catalogEntries.map((entry) => entry.subsystem));
  for (const subsystem of subsystemNames) {
    const entries = catalogEntries.filter((entry) => entry.subsystem === subsystem);
    renderSubsystemTable(markdown, subsystem, entries);
  }
  markdown.push("## 5. NO-HEADER");
  markdown.push("");
  if (noHeaderNames.length === 0) {
    markdown.push("None.");
  } else {
    for (const row of renderNoHeader(noHeaderNames)) {
      markdown.push(row);
    }
  }
  markdown.push("");

  fs.writeFileSync(mdOutputPath, markdown.join("\n"), "utf8");

  console.log(`Total functions: ${summary.totalFunctions}`);
  console.log(`Runtime-tracked functions: ${summary.trackedFunctions}`);
  console.log(`Transpiled: ${summary.transpiled}`);
  console.log(`Skipped: ${summary.skipped}`);
  console.log(`Untranspiled: ${summary.untranspiled}`);
  console.log(`Support functions: ${summary.support}`);
  console.log(`Runtime names without catalog entry: ${runtimeMissing.length === 0 ? "none" : runtimeMissing.join(", ")}`);
}

main();
